
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react';
import AppTest from '../app/AppTest';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/AppTest',
  component: AppTest,
  }

export default meta;


type Story = StoryObj<typeof AppTest> ;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'AppTest',
  },
};


