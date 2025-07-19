'use client';

import { useImagePath } from '@/providers/ImagePathProvider';

type ImageProps = {
  imageName: string;
  alt: string;
  path?: string;
  className?: string;
  format?: 'webp' | 'png';
  rowCount?: number;
};

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';
const FULL_SCREEN_WIDTHS = [3840, 2560, 1920, 1280, 720];

const getImageWidth = (fullScreenW: number, count: number) =>
  Math.ceil(fullScreenW / count / 10) * 10;

const ResponsiveImage = ({
  alt,
  className,
  format = 'webp',
  path,
  imageName,
  rowCount = 1,
}: ImageProps) => {
  const contextPath = useImagePath();
  const imagePath = path ?? contextPath;
  const srcW = getImageWidth(FULL_SCREEN_WIDTHS[0], rowCount);

  const srcSet = FULL_SCREEN_WIDTHS.map(fw => {
    const w = getImageWidth(fw, rowCount);

    return `${BASE_PATH}/${imagePath}/${imageName}-${w}.${format} ${w}w`;
  }).join(', ');

  return (
    <div className={className}>
      <img
        src={`${BASE_PATH}/${imagePath}/${imageName}-${srcW}.${format}`}
        srcSet={srcSet}
        alt={alt}
        className={`object-cover h-full animate-visible`}
      />
    </div>
  );
};

export default ResponsiveImage;
