import { ColType } from '@icarus/core';
import { ComponentMeta, Story } from '@storybook/react';
import { Primary as Box } from '../Box/Box.stories';
import { Grid } from './Grid';

export default {
  title: 'Layout/Grid',
  component: Grid,
} as ComponentMeta<typeof Grid>;

const renderItem = (_: unknown, key: number) => (
  <Grid.Item key={key} size="3">
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
      voluptates animi officiis eum maiores nihil odio eos sequi! Minima
      consequatur necessitatibus, expedita sed laudantium deserunt veniam facere
      laboriosam earum quas.
    </div>
  </Grid.Item>
);

const Template: Story<Parameters<typeof Grid>[0] & { items?: number }> = ({
  items = 4,
  ...args
}) => {
  return <Grid {...args}>{Array.from({ length: items }).map(renderItem)}</Grid>;
};

export const Primary = Template.bind({});
Primary.args = {
  gap: 'lg',
  items: 4,
  align: 'center',
  justify: 'center',
};

const SecondaryTemplate: Story<Parameters<typeof Grid>[0]> = (args) => {
  return (
    <Grid {...args}>
      <Grid.Item size="3">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          voluptates animi officiis eum maiores nihil odio eos sequi! Minima
          consequatur necessitatibus, expedita sed laudantium deserunt veniam
          facere laboriosam earum quas.
        </div>
      </Grid.Item>
      <Grid.Item size="9">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          voluptates animi officiis eum maiores nihil odio eos sequi! Minima
          consequatur necessitatibus, expedita sed laudantium deserunt veniam
          facere laboriosam earum quas.
        </div>
      </Grid.Item>
      <Grid.Item size="12">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          voluptates animi officiis eum maiores nihil odio eos sequi! Minima
          consequatur necessitatibus, expedita sed laudantium deserunt veniam
          facere laboriosam earum quas.
        </div>
      </Grid.Item>
    </Grid>
  );
};

export const Secondary = SecondaryTemplate.bind({});
Secondary.args = {
  gap: 'lg',
  align: 'start',
  justify: 'start',
};

const colArray = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
];

export const ColumnsDemo = () => {
  return (
    <Grid gap="md">
      {colArray.map(
        (col) =>
          col !== '12' && (
            <>
              <Grid.Item size={`${col}` as ColType}>
                <Box background="primary" padding="lg" borderRadius="md" />
              </Grid.Item>
              <Grid.Item size={`${12 - parseInt(col)}` as ColType}>
                <Box background="primary" padding="lg" borderRadius="md" />
              </Grid.Item>
            </>
          )
      )}
    </Grid>
  );
};

export const OffsetDemo = () => {
  return (
    <Grid gap="md">
      <Grid.Item size={'12'}>
        <Box background="primary" padding="lg" borderRadius="md" />
      </Grid.Item>
      {colArray.map(
        (col) =>
          12 - parseInt(col) > 0 && (
            <Grid.Item
              offset={col as ColType}
              size={`${12 - parseInt(col)}` as ColType}
            >
              <Box background="primary" padding="lg" borderRadius="md" />
            </Grid.Item>
          )
      )}
    </Grid>
  );
};
