import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { Note } from '../src/Note';
import type { NoteProps } from '../src/Note';

export default {
  component: Note,
  parameters: {
    propTypes: Note['__docgenInfo'],
  },
  title: 'Components/Note',
} as Meta;

export const Default: Story<NoteProps> = (args) => {
  return <Note {...args}>Note</Note>;
};
