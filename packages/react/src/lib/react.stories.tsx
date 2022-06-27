import {
  ComponentStory,
  ComponentMeta
} from '@storybook/react';
import { React } from './react';

export default {
  component: React,
  title: 'React'
} as ComponentMeta<typeof React>;

const Template: ComponentStory<typeof React> = (args) => (
  <React {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
