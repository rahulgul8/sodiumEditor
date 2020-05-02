import React from 'react';
import Editor from '../src/WeEditor';

export default {
  title: 'Editor',
  component: Editor,
};

export const ToStorybook = () => <div style={{ margin: '4em' }}><Editor titlePlaceholder="title" placeholder="Enter"/></div>;

ToStorybook.story = {
  name: 'Editor',
};
