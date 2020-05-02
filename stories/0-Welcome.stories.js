import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import Editor from '../src/WeEditor';
import '../src/mscStyles.css'
export default {
  title: 'Welcome',
  component: Welcome,
};

export const ToStorybook = () => <div style={{ margin: '4em',border:'1px solid black' }}><Editor titlePlaceholder="title" placeholder="Enter"/></div>;

ToStorybook.story = {
  name: 'to Storybook',
};
