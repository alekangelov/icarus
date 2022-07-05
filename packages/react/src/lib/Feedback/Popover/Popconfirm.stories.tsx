import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../../General/Button';
import { PopConfirm } from './Popover';

export default {
  title: 'Feedback/PopConfirm',
  component: PopConfirm,
} as ComponentMeta<typeof PopConfirm>;

const Template: ComponentStory<typeof PopConfirm> = (args) => (
  <PopConfirm {...args}>
    <Button>Click to open PopConfirm</Button>
  </PopConfirm>
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
  ok: {
    onClick: () => {
      console.log('ok');
    },
  },
  cancel: {
    onClick: () => {
      console.log('cancel');
    },
  },
};
