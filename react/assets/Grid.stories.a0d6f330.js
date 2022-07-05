import{Primary as r}from"./Box.stories.a749e7ae.js";import{G as i}from"./Grid.8da89494.js";import{j as e,a as t,F as s}from"./jsx-runtime.d19d38a0.js";import"./index.003a9cb9.js";import"./popover.css.ts.vanilla.fb90ee6c.js";import"./for.85b45d59.js";import"./alignment.css.5e3e8aea.js";import"./index.css.61bff02b.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.c6390da1.js";var q={parameters:{storySource:{source:`import { ColType } from '@icarus/core';
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
              <Grid.Item size={\`\${col}\` as ColType}>
                <Box background="primary" padding="lg" borderRadius="md" />
              </Grid.Item>
              <Grid.Item size={\`\${12 - parseInt(col)}\` as ColType}>
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
              size={\`\${12 - parseInt(col)}\` as ColType}
            >
              <Box background="primary" padding="lg" borderRadius="md" />
            </Grid.Item>
          )
      )}
    </Grid>
  );
};
`,locationsMap:{primary:{startLoc:{col:73,line:22},endLoc:{col:1,line:27},startBody:{col:73,line:22},endBody:{col:1,line:27}},secondary:{startLoc:{col:61,line:37},endLoc:{col:1,line:66},startBody:{col:61,line:37},endBody:{col:1,line:66}},"columns-demo":{startLoc:{col:27,line:90},endLoc:{col:1,line:108},startBody:{col:27,line:90},endBody:{col:1,line:108}},"offset-demo":{startLoc:{col:26,line:110},endLoc:{col:1,line:129},startBody:{col:26,line:110},endBody:{col:1,line:129}}}}},title:"Layout/Grid",component:i};const d=(n,a)=>e(i.Item,{size:"3",children:e("div",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates animi officiis eum maiores nihil odio eos sequi! Minima consequatur necessitatibus, expedita sed laudantium deserunt veniam facere laboriosam earum quas."})},a),m=({items:n=4,...a})=>e(i,{...a,children:Array.from({length:n}).map(d)}),c=m.bind({});c.args={gap:"lg",items:4,align:"center",justify:"center"};const u=n=>t(i,{...n,children:[e(i.Item,{size:"3",children:e("div",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates animi officiis eum maiores nihil odio eos sequi! Minima consequatur necessitatibus, expedita sed laudantium deserunt veniam facere laboriosam earum quas."})}),e(i.Item,{size:"9",children:e("div",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates animi officiis eum maiores nihil odio eos sequi! Minima consequatur necessitatibus, expedita sed laudantium deserunt veniam facere laboriosam earum quas."})}),e(i.Item,{size:"12",children:e("div",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates animi officiis eum maiores nihil odio eos sequi! Minima consequatur necessitatibus, expedita sed laudantium deserunt veniam facere laboriosam earum quas."})})]}),l=u.bind({});l.args={gap:"lg",align:"start",justify:"start"};const o=["1","2","3","4","5","6","7","8","9","10","11","12"],x=()=>e(i,{gap:"md",children:o.map(n=>n!=="12"&&t(s,{children:[e(i.Item,{size:`${n}`,children:e(r,{background:"primary",padding:"lg",borderRadius:"md"})}),e(i.Item,{size:`${12-parseInt(n)}`,children:e(r,{background:"primary",padding:"lg",borderRadius:"md"})})]}))}),L=()=>t(i,{gap:"md",children:[e(i.Item,{size:"12",children:e(r,{background:"primary",padding:"lg",borderRadius:"md"})}),o.map(n=>12-parseInt(n)>0&&e(i.Item,{offset:n,size:`${12-parseInt(n)}`,children:e(r,{background:"primary",padding:"lg",borderRadius:"md"})}))]}),z=["Primary","Secondary","ColumnsDemo","OffsetDemo"];export{x as ColumnsDemo,L as OffsetDemo,c as Primary,l as Secondary,z as __namedExportsOrder,q as default};
//# sourceMappingURL=Grid.stories.a0d6f330.js.map
