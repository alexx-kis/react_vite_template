'use client';

import { useEffect, useRef } from 'react';

// ^======================== Icon ========================^ //

type IconProps = {
  src: string;
  alt?: string | undefined;
  width?: number;
  height?: number;
  bemClass?: string;
};

function Icon({ src, alt, width, height, bemClass }: IconProps): React.JSX.Element {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const altProp = alt ? alt : '';

  useEffect(() => {
    if (!imgRef.current) return;

    const replaceWithSvg = async () => {
      try {
        const response = await fetch(src);
        const data = await response.text();
        const parser = new DOMParser();
        const svg = parser.parseFromString(data, 'image/svg+xml').querySelector('svg');

        if (!svg) {
          console.error(`No SVG found in ${src}`);
          return;
        }

        svg.removeAttribute('xmlns:a');

        if (!svg.hasAttribute('viewBox') && svg.hasAttribute('height') && svg.hasAttribute('width')) {
          svg.setAttribute('viewBox', `0 0 ${svg.getAttribute('width')} ${svg.getAttribute('height')}`);
        }

        if (bemClass) {
          svg.setAttribute('class', bemClass);
        }

        imgRef.current?.replaceWith(svg);
      } catch (error) {
        console.error('Error fetching the SVG:', error);
      }
    };

    replaceWithSvg();
  }, [src, bemClass]);

  return <img ref={imgRef} src={src} alt={altProp} width={width} height={height} />;
}

export default Icon;
