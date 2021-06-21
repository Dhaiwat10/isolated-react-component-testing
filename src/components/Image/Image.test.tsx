import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { Image } from './';
import { photoSrc, fallbackSrc, loadingSrc } from '../../constants';

const altText = 'abcd';

describe('Image', () => {
  it('should render the image properly', async () => {
    // render the Image component
    const { getByAltText } = render(<Image src={photoSrc} alt={altText} />);

    // retrieve a reference to the image
    const image = getByAltText(altText) as HTMLImageElement;

    // load the image
    fireEvent.load(image);

    // verify that the image exists on the DOM
    expect(image).toBeTruthy();

    // verify the src of the image
    expect(image.src).toEqual(photoSrc);
  });

  it('should display the loader until the image loads', async () => {
    const { getByAltText } = render(<Image src={photoSrc} alt={altText} />);

    const image = getByAltText(altText) as HTMLImageElement;

    // verify that the src of the image matches the loader. note that the image has not been loaded yet.
    expect(image.src).toEqual(loadingSrc);
  });

  it('should handle errors and render the fallback', async () => {
    jest.setTimeout(15000);
    const { getByAltText } = render(<Image src="#" alt={altText} />);

    const image = getByAltText(altText) as HTMLImageElement;

    // fire the error event for the image
    fireEvent.error(image);

    // verify that the src of the image matches our fallback
    expect(image.src).toEqual(fallbackSrc);
  });

  // an extra test case that verifies that our height prop behaves as expected
  it('should apply the provided height', async () => {
    const height = '200px';
    const { getByAltText } = render(
      <Image src={photoSrc} alt={altText} height={height} />
    );

    const image = getByAltText(altText) as HTMLImageElement;

    fireEvent.load(image);

    expect(image.style.height).toEqual(height);
  });
});
