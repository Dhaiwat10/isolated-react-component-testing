import React from 'react';
import { fallbackSrc, loadingSrc } from '../../constants';

export interface ImageProps {
  src: string;
  alt: string;
  height?: string | number;
}

export const Image: React.FC<ImageProps> = ({ src, alt, height = '400px' }) => {
  // whether an error has occured or not
  const [err, setErr] = React.useState(false);

  // whether the image is loading or not
  const [loading, setLoading] = React.useState(true);

  return (
    <>
      <img
        // use the fallback image as src if an error has occured
        // use the loader image as src if the image is still loading
        src={!err ? (loading ? loadingSrc : src) : fallbackSrc}
        alt={alt}
        style={{ height, width: 'auto', borderRadius: '10px' }}
        // set loading to false once the image has finished loading
        onLoad={() => setLoading(false)}
        // set err to true if an error occurs
        onError={() => setErr(true)}
      />
    </>
  );
};
