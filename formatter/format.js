#!/usr/bin/env node
/* eslint-disable */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const { program } = require('commander');

// Supported input extensions
const SUPPORTED_EXT = ['.jpg', '.jpeg', '.png', '.tiff', '.webp', '.avif'];

// CLI definition
// node format.js --output projects/proper-wild --rowCount 2 --formats png  --input projects/proper-wild-raw/PW21_final.png
program
  .requiredOption('-i, --input <path>', 'input file or directory')
  .requiredOption('-o, --output <dir>', 'output directory for formatted images')
  .requiredOption('-w, --rowCount <list>', 'how many photos in one row')
  .option(
    '-f, --formats <list>',
    'comma-separated list of formats (jpeg, webp, avif)',
    'webp'
  )
  .option(
    '-q, --quality <number>',
    'output quality for lossy formats 1-100',
    '80'
  )
  .parse(process.argv);

const FULL_SCREEN_WIDTHS = [3840, 2560, 1920, 1280, 720];

const options = program.opts();
const inputPath = path.resolve(
  process.cwd(),
  '../public/images/',
  options.input
);
const outputDir = path.resolve(
  process.cwd(),
  '../public/images/',
  options.output
);
const counter = parseInt(options.rowCount, 10);
const widths = FULL_SCREEN_WIDTHS.map(w => {
  const divided = w / counter;
  const roundedToTen = Math.ceil(divided / 10) * 10;
  return roundedToTen;
});
const formats = options.formats.split(',').map(f => f.trim().toLowerCase());
const quality = parseInt(options.quality, 10);

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Gather files: single file or directory
let files = [];
try {
  const stats = fs.statSync(inputPath);
  if (stats.isDirectory()) {
    files = fs
      .readdirSync(inputPath)
      .filter(file => SUPPORTED_EXT.includes(path.extname(file).toLowerCase()))
      .map(file => path.join(inputPath, file));
  } else if (stats.isFile()) {
    if (SUPPORTED_EXT.includes(path.extname(inputPath).toLowerCase())) {
      files = [inputPath];
    } else {
      console.error(`Unsupported file type: ${inputPath}`);
      process.exit(1);
    }
  } else {
    console.error('Input path is neither a file nor a directory.');
    process.exit(1);
  }
} catch (err) {
  console.error(`Error accessing input path: ${err.message}`);
  process.exit(1);
}

// Processing
files.forEach(filePath => {
  const { name } = path.parse(filePath);

  widths.forEach(width => {
    formats.forEach(fmt => {
      const outputName = `${name}-${width}.${fmt}`;
      const outputPath = path.join(outputDir, outputName);

      let pipeline = sharp(filePath).resize(width, null, { fit: 'cover' });

      // Apply format and quality
      switch (fmt) {
        case 'jpeg':
        case 'jpg':
          pipeline = pipeline.jpeg({
            quality: 95,
            progressive: true,
            mozjpeg: true,
            trellisQuantisation: true,
          });
          break;
        case 'webp':
          pipeline = pipeline.webp({
            quality: 95,
            effort: 6,
            smartSubsample: true,
          });
          break;
        case 'avif':
          pipeline = pipeline.avif({ quality });
          break;
        case 'png':
          pipeline = pipeline.png({
            compressionLevel: 9, // max zlib compression (slowest → smallest)
            progressive: true, // interlaced PNG for faster initial render
            adaptiveFiltering: true, // auto-select best PNG filter per scanline
            palette: true, // quantize to 256 colors (via pngquant)
            quality: 80, // if palette: 0–100 quality for quantization
            dither: 0.5,
          });
          break;
        default:
          console.warn(`Unsupported format: ${fmt}, skipping.`);
          return;
      }

      pipeline
        .toFile(outputPath)
        .then(() => console.log(`✔ ${outputName}`))
        .catch(err => console.error(`✖ ${outputName}:`, err));
    });
  });
});
