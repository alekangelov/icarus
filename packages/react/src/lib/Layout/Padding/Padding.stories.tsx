import { debugBox } from '@icarus/core';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Padding } from './Padding';

export default {
  name: 'Laoyut/Padding',
  component: Padding,
} as ComponentMeta<typeof Padding>;

const Box = () => (
  <div className={debugBox} style={{ width: 250, height: 250 }}></div>
);

const Template: ComponentStory<typeof Padding> = (args) => (
  <Padding {...args}>
    <Box />
  </Padding>
);

export const Primary = Template.bind({});
Primary.args = {
  padding: 'md',
};
