import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import { useState } from 'react';
import { Button } from '../../General/Button';
import { Loading } from './Loading';

export default {
  title: 'Feedback/Loading',
  component: Loading,
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = (args) => (
  <Loading {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  fullscreen: false,
  visible: false,
};

const WithButtonTemplate: Story<{ fullscreen?: boolean }> = (args) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Loading fullscreen={args.fullscreen} visible={visible} />
      <Button
        onClick={() => {
          setVisible(true);
          setTimeout(() => setVisible(false), 2000);
        }}
      >
        Open Loading
      </Button>
    </>
  );
};

export const WithButton = WithButtonTemplate.bind({});
WithButton.args = {
  fullscreen: false,
};
