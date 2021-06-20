import React from 'react';
import { fallbackSrc, loadingSrc } from '../../constants';

export interface ImageProps {
  src: string;
  alt: string;
  height?: string | number;
}

export const Image: React.FC<ImageProps> = ({ src, alt, height = '400px' }) => {
  const [err, setErr] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  return (
    <>
      <img
        style={{ height, width: 'auto', borderRadius: '10px' }}
        onLoad={() => setLoading(false)}
        onError={() => setErr(true)}
        src={!err ? (loading ? loadingSrc : src) : fallbackSrc}
        alt={alt}
      />
      <span>{loading}</span>
    </>
  );
};
