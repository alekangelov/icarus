import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ColumnsDemo } from '../Grid/Grid.stories';
import { Container } from './Container';

export default {
  name: 'Layout/Container',
  component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args}>
    <ColumnsDemo />
  </Container>
);

export const Primary = Template.bind({});
Primary.args = {
  fluid: false,
};

Primary.parameters = {
  layout: 'fullscreen',
};
