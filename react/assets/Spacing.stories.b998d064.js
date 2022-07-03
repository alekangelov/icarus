import"./loading.css.ts.vanilla.3b11953e.js";import{d as a}from"./debugBox.css.196cb5c5.js";import{S as t}from"./Spacing.cac936a6.js";import{a as e,j as n}from"./jsx-runtime.d19d38a0.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.c6390da1.js";import"./index.003a9cb9.js";var x={parameters:{storySource:{source:`import { debugBox } from '@icarus/core';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Spacing } from './Spacing';

export default {
  name: 'Laoyut/Spacing',
  component: Spacing,
} as ComponentMeta<typeof Spacing>;

const Box = () => <div className={debugBox} style={{ width: 24 }}></div>;

const Template: ComponentStory<typeof Spacing> = (args) => (
  <Spacing {...args}>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
  </Spacing>
);

export const Primary = Template.bind({});

Primary.args = {
  gap: 'xl',
  direction: 'row',
  align: 'center',
  justify: 'center',
};
`,locationsMap:{primary:{startLoc:{col:49,line:12},endLoc:{col:1,line:22},startBody:{col:49,line:12},endBody:{col:1,line:22}}}}},name:"Laoyut/Spacing",component:t};const o=()=>n("div",{className:a,style:{width:24}}),i=r=>e(t,{...r,children:[n(o,{}),n(o,{}),n(o,{}),n(o,{}),n(o,{}),n(o,{}),n(o,{})]}),c=i.bind({});c.args={gap:"xl",direction:"row",align:"center",justify:"center"};const y=["Primary"];export{c as Primary,y as __namedExportsOrder,x as default};
//# sourceMappingURL=Spacing.stories.b998d064.js.map
