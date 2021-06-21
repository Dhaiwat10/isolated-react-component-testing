import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Image, ImageProps } from './';
import { photoSrc } from '../../constants';

export default {
  title: 'Example/Image',
  component: Image,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' }
  }
} as Meta;

const Template: Story<ImageProps> = args => <Image {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: photoSrc,
  alt: 'Sample alt text'
};

export const Src404 = Template.bind({});
Src404.args = {
  src: '#',
  alt: 'something broke'
};
