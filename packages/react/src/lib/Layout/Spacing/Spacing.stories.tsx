import { debugBox } from '@icarus/core';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Spacing } from './Spacing';

export default {
  name: 'Laoyut/Spacing',
  component: Spacing,
} as ComponentMeta<typeof Spacing>;

const Box = () => <div className={debugBox} style={{ width: 24 }}></div>;

const Template: ComponentStory<typeof Spacing> = (args) => (
  <Spacing {...args}>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
  </Spacing>
);

export const Primary = Template.bind({});

Primary.args = {
  gap: 'xl',
  direction: 'row',
  align: 'center',
  justify: 'center',
};
