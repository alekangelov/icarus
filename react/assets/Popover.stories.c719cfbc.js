import{B as p}from"./Button.9491c0f7.js";import{c as n}from"./dialog.css.ts.vanilla.4a4d5af7.js";import{D as s}from"./Dialog.5391a0cc.js";import{j as e,a as c,F as m}from"./jsx-runtime.d19d38a0.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.c6390da1.js";import"./index.003a9cb9.js";import"./Spacing.2543bef8.js";import"./index.css.4d0639d6.js";import"./Portal.b7efe8fb.js";import"./index.0e80d740.js";import"./containerIds.9de44e3d.js";var a={base:"_1basrmj0",title:"_1basrmj1",content:"_1basrmj2"};const l=({title:o,content:r})=>c("div",{className:n(a.base),children:[e("div",{className:n(a.title),children:o}),e("div",{className:n(a.content),children:r})]}),t=({children:o,title:r,content:i})=>e(s,{content:e(l,{title:r,content:i}),children:o});try{t.displayName="Popover",t.__docgenInfo={description:"",displayName:"Popover",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"Element"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/react/src/lib/Feedback/Popover/Popover.tsx#Popover"]={docgenInfo:t.__docgenInfo,name:"Popover",path:"packages/react/src/lib/Feedback/Popover/Popover.tsx#Popover"})}catch{}var h={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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
  content: (
    <>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
      praesentium voluptas autem mollitia quia quos labore sequi corrupti velit
      unde. Eum cum explicabo ipsa amet autem architecto atque in dolore?
    </>
  ),
};
`,locationsMap:{primary:{startLoc:{col:49,line:10},endLoc:{col:1,line:14},startBody:{col:49,line:10},endBody:{col:1,line:14}}}}},title:"Feedback/Popover",component:t};const u=o=>e(t,{...o,children:e(p,{children:"Click to open Popover"})}),d=u.bind({});d.args={title:"I am a title",content:e(m,{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, praesentium voluptas autem mollitia quia quos labore sequi corrupti velit unde. Eum cum explicabo ipsa amet autem architecto atque in dolore?"})};const B=["Primary"];export{d as Primary,B as __namedExportsOrder,h as default};
//# sourceMappingURL=Popover.stories.c719cfbc.js.map
