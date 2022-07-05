import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from './Text';

export default {
  title: 'General/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis corporis, assumenda tempore ipsum voluptate adipisci voluptates et vitae doloribus quae sunt velit temporibus veritatis dolore sint consequuntur molestiae quas!`,
  ellipsis: false,
  color: undefined,
  size: undefined,
  weight: undefined,
};
