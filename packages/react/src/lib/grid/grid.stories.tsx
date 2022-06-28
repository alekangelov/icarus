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
    <Grid.Item mobileSize="12" size="6">
      Alek
    </Grid.Item>
    <Grid.Item mobileSize="12" size="6">
      Alek
    </Grid.Item>
  </Grid>
);

export const Primary: ComponentStory<typeof Grid> =
  Template.bind({});

Primary.args = {
  gap: 'large',
  wrap: 'wrap'
};
