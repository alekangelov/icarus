import{ColumnsDemo as i}from"./Grid.stories.352dd8e6.js";import{c as s}from"./dialog.css.ts.vanilla.465b1c21.js";import{c as m}from"./vanilla-extract-recipes-createRuntimeFn.esm.c6390da1.js";import{r as l}from"./index.003a9cb9.js";import{j as o}from"./jsx-runtime.d19d38a0.js";import"./Box.stories.01639950.js";import"./for.85b45d59.js";import"./index.css.8f2eb22a.js";var c=m({defaultClassName:"_1itmjpl0",variantClassNames:{fluid:{true:"_1itmjpl1"}},defaultVariants:{},compoundVariants:[]});const n=l.exports.forwardRef(({fluid:e,...r},t)=>o("div",{...r,className:s(c({fluid:e}),r.className),ref:t}));try{n.displayName="Container",n.__docgenInfo={description:"",displayName:"Container",props:{fluid:{defaultValue:null,description:"",name:"fluid",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/react/src/lib/Layout/Container/Container.tsx#Container"]={docgenInfo:n.__docgenInfo,name:"Container",path:"packages/react/src/lib/Layout/Container/Container.tsx#Container"})}catch{}var x={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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
`,locationsMap:{primary:{startLoc:{col:51,line:10},endLoc:{col:1,line:14},startBody:{col:51,line:10},endBody:{col:1,line:14}}}}},name:"Layout/Container",component:n};const p=e=>o(n,{...e,children:o(i,{})}),a=p.bind({});a.args={fluid:!1};a.parameters={layout:"fullscreen"};const L=["Primary"];export{a as Primary,L as __namedExportsOrder,x as default};
//# sourceMappingURL=Container.stories.a884fec7.js.map
