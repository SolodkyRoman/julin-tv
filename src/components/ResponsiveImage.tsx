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

const FULL_SCREEN_WIDTHS = [3840, 2560, 1920, 1280, 720];

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

  const srcSet = FULL_SCREEN_WIDTHS.map(w => {
    const divided = w / rowCount;
    const roundedToTen = Math.ceil(divided / 10) * 10;

    return `${imagePath}/${imageName}-${roundedToTen}.${format} ${roundedToTen}w`;
  }).join(', ');

  return (
    <div className={className}>
      <img
        src={`${imagePath}/${imageName}-${FULL_SCREEN_WIDTHS[0] / rowCount}.${format}`}
        srcSet={srcSet}
        alt={alt}
        className={`object-cover h-full animate-visible`}
      />
    </div>
  );
};

export default ResponsiveImage;
