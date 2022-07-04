import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../../General/Button';
import { Dialog } from './Dialog';

export default {
  title: 'Feedback/Dialog',
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => (
  <Dialog {...args}>
    <Button>Click to open Dialog</Button>
  </Dialog>
);

const Content = () => <>I am a dialog</>;

export const Primary = Template.bind({});
Primary.args = {
  content: <Content />,
};

export const Secondary = Template.bind({});
Secondary.args = {
  content: <Content />,
};

Secondary.decorators = [
  (Story) => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
      }}
    >
      <Story />
    </div>
  ),
];
