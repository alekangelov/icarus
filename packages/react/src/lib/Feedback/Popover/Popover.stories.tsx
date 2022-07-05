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
  content: (
    <>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
      praesentium voluptas autem mollitia quia quos labore sequi corrupti velit
      unde. Eum cum explicabo ipsa amet autem architecto atque in dolore?
    </>
  ),
};
