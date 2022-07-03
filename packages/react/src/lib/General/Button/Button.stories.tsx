import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LoadingIcon } from '../../Icons/Loading';
import { Button } from '.';

export default {
  title: 'General/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'I am a button',
};

export const Icon = Template.bind({});

Icon.args = {
  children: <LoadingIcon size="xl" />,
};

export const IconAndLabel = Template.bind({});

IconAndLabel.args = {
  children: 'I am button',
  icon: <LoadingIcon />,
};

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
  children: 'I am button',
  icon: <LoadingIcon />,
};
