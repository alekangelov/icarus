import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HGroup } from './Text';

export default {
  title: 'General/HGroup',
  component: HGroup,
} as ComponentMeta<typeof HGroup>;

const Template: ComponentStory<typeof HGroup> = (args) => <HGroup {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: 'Lorem ipsum',
  subtitle: 'Dolor sit amet consectetur adipisicing elit.',
};
