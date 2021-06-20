import * as React from 'react';
import { render } from '@testing-library/react';

import { Image } from './';

const imgSrc = 'https://memegenerator.net/img/instances/50262258.jpg';
const altText = 'this is literally a meme';
const fallbackSrc =
  'https://www.androidpolice.com/wp-content/uploads/2018/11/chrome-dino-hero.png';

describe('Image', () => {
  it('should render the image properly', async () => {
    const { getByAltText } = render(<Image src={imgSrc} alt={altText} />);

    const image = getByAltText(altText);

    expect(image).toBeTruthy();
  });

  it('should apply the provided height', async () => {
    const height = '200px';
    const { getByAltText } = render(
      <Image src={imgSrc} alt={altText} height={height} />
    );

    const image = getByAltText(altText);

    expect(image.style.height).toEqual(height);
  });

  it('should handle errors and render the fallback', async () => {
    const { getByAltText } = render(<Image src="#" alt={altText} />);

    const image = getByAltText(altText) as HTMLImageElement;

    setTimeout(() => {
      expect(image.src).toEqual(fallbackSrc);
    }, 1000);
  });
});
