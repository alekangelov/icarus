import{B as i}from"./Button.39f1ced6.js";import{c as n}from"./dialog.css.ts.vanilla.465b1c21.js";import{D as c}from"./Dialog.f4917672.js";import{j as o,a as s,F as m}from"./jsx-runtime.d19d38a0.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.c6390da1.js";import"./index.003a9cb9.js";import"./Spacing.e3c474a4.js";import"./index.css.8f2eb22a.js";import"./Portal.b7efe8fb.js";import"./index.0e80d740.js";import"./containerIds.9de44e3d.js";var a={base:"_1basrmj0",title:"_1basrmj1",content:"_1basrmj2"};const l=({title:e,content:r})=>s("div",{className:n(a.base),children:[o("div",{className:n(a.title),children:e}),o("div",{className:n(a.content),children:r})]}),t=({children:e,title:r,content:p})=>o(c,{content:o(l,{title:r,content:p}),children:e});try{t.displayName="Popover",t.__docgenInfo={description:"",displayName:"Popover",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"Element"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/react/src/lib/Feedback/Popover/Popover.tsx#Popover"]={docgenInfo:t.__docgenInfo,name:"Popover",path:"packages/react/src/lib/Feedback/Popover/Popover.tsx#Popover"})}catch{}var x={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../../General/Button';
import { Popover } from './Popover';

export default {
  title: 'Feedback/Popover',
  component: Popover,
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
  <Popover {...args}>
    <Button>Click to open Popover</Button>
  </Popover>
);

export const Primary = Template.bind({});

Primary.args = {
  title: 'I am a title',
  content: <>I am a dialog</>,
};
`,locationsMap:{primary:{startLoc:{col:49,line:10},endLoc:{col:1,line:14},startBody:{col:49,line:10},endBody:{col:1,line:14}}}}},title:"Feedback/Popover",component:t};const d=e=>o(t,{...e,children:o(i,{children:"Click to open Popover"})}),v=d.bind({});v.args={title:"I am a title",content:o(m,{children:"I am a dialog"})};const h=["Primary"];export{v as Primary,h as __namedExportsOrder,x as default};
//# sourceMappingURL=Popover.stories.a68291fc.js.map
