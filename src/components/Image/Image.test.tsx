import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { Image } from './';
import { fallbackSrc, photoSrc } from '../../constants';

const altText = 'abcd';

describe('Image', () => {
  it('should render the image properly', async () => {
    const { getByAltText } = render(<Image src={photoSrc} alt={altText} />);

    const image = getByAltText(altText) as HTMLImageElement;

    fireEvent.load(image);

    expect(image).toBeTruthy();
  });

  it('should apply the provided height', async () => {
    const height = '200px';
    const { getByAltText } = render(
      <Image src={photoSrc} alt={altText} height={height} />
    );

    const image = getByAltText(altText);

    fireEvent.load(image);

    expect(image.style.height).toEqual(height);
  });

  it('should handle errors and render the fallback', async () => {
    jest.setTimeout(15000);
    const { getByAltText } = render(<Image src="#" alt={altText} />);

    const image = getByAltText(altText) as HTMLImageElement;

    fireEvent.error(image);

    expect(image.src).toEqual(fallbackSrc);
  });
});
