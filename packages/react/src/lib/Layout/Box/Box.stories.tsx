import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ColumnsDemo } from '../Grid/Grid.stories';
import { Box } from './Box';

export default {
  name: 'Layout/Box',
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  background: 'primary',
  borderRadius: 'md',
  padding: 'lg',
  children: '',
};
