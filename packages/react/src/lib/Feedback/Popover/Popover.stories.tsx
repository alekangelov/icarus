import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../../General/Button';
import { Popover } from './Popover';

export default {
  title: 'Feedback/Popover',
  component: Popover,
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
  <Popover {...args}>
    <Button>Click to open Popover</Button>
  </Popover>
);

export const Primary = Template.bind({});

Primary.args = {
  title: 'I am a title',
  content: <>I am a dialog</>,
};
