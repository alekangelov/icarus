import {
  ComponentMeta,
  ComponentStory
} from '@storybook/react';
import { Grid } from './grid';

export default {
  component: Grid,
  title: 'Grid'
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => (
  <Grid {...args}>
    {Array.from({ length: 8 }).map((_, i) => (
      <Grid.Item size="6" key={i} order={i}>
        Alek
      </Grid.Item>
    ))}
  </Grid>
);

export const Primary: ComponentStory<typeof Grid> =
  Template.bind({});
Primary.args = {
  gap: 'large',
  wrap: 'wrap'
};
