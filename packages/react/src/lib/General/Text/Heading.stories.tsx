import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Heading } from './Text';

export default {
  title: 'General/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  children: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis corporis, assumenda tempore ipsum voluptate adipisci voluptates et vitae doloribus quae sunt velit temporibus veritatis dolore sint consequuntur molestiae quas!`,
  level: 1,
  ellipsis: false,
};
