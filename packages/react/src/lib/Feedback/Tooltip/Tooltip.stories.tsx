import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from '../../General/Text';
import { Tooltip } from './Tooltip';

export default {
  title: 'Feedback/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args}>
    <span>Click to open Tooltip</span>
  </Tooltip>
);

export const Primary = Template.bind({});

Primary.args = {
  title: <Text>I am a title</Text>,
};
