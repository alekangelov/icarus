import{ColumnsDemo as i}from"./Grid.stories.6657619f.js";import{c as s}from"./popover.css.ts.vanilla.97a3c86d.js";import{c as m}from"./vanilla-extract-recipes-createRuntimeFn.esm.c6390da1.js";import{r as l}from"./index.003a9cb9.js";import{j as e}from"./jsx-runtime.d19d38a0.js";import"./Box.stories.766bc637.js";import"./for.85b45d59.js";import"./alignment.css.97ebbdc8.js";import"./Grid.129544c8.js";import"./index.css.83ee2a0a.js";var p=m({defaultClassName:"_1itmjpl0",variantClassNames:{fluid:{true:"_1itmjpl1"}},defaultVariants:{},compoundVariants:[]});const n=l.exports.forwardRef(({fluid:o,...r},t)=>e("div",{...r,className:s(p({fluid:o}),r.className),ref:t}));try{n.displayName="Container",n.__docgenInfo={description:"",displayName:"Container",props:{fluid:{defaultValue:null,description:"",name:"fluid",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/react/src/lib/Layout/Container/Container.tsx#Container"]={docgenInfo:n.__docgenInfo,name:"Container",path:"packages/react/src/lib/Layout/Container/Container.tsx#Container"})}catch{}var O={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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
`,locationsMap:{primary:{startLoc:{col:51,line:10},endLoc:{col:1,line:14},startBody:{col:51,line:10},endBody:{col:1,line:14}}}}},name:"Layout/Container",component:n};const c=o=>e(n,{...o,children:e(i,{})}),a=c.bind({});a.args={fluid:!1};a.parameters={layout:"fullscreen"};const T=["Primary"];export{a as Primary,T as __namedExportsOrder,O as default};
//# sourceMappingURL=Container.stories.03bb3efe.js.map
