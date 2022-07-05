import{T as i}from"./Text.b8828e50.js";import"./popover.css.ts.vanilla.97a3c86d.js";import{t as n}from"./popover.css.b9635c65.js";import{D as p}from"./Dialog.5c82a149.js";import{j as e}from"./jsx-runtime.d19d38a0.js";import"./index.003a9cb9.js";import"./mergeRefs.e715c294.js";import"./index.css.83ee2a0a.js";import"./Portal.b7efe8fb.js";import"./index.0e80d740.js";import"./containerIds.9de44e3d.js";const o=({title:t,children:r})=>e(p,{trigger:"hover",className:n,content:t,children:r});try{o.displayName="Tooltip",o.__docgenInfo={description:"",displayName:"Tooltip",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"Element"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/react/src/lib/Feedback/Tooltip/Tooltip.tsx#Tooltip"]={docgenInfo:o.__docgenInfo,name:"Tooltip",path:"packages/react/src/lib/Feedback/Tooltip/Tooltip.tsx#Tooltip"})}catch{}var u={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from '../../General/Text';
import { Tooltip } from './Tooltip';

export default {
  title: 'Feedback/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args}>
    <span>Click to open Tooltip</span>
  </Tooltip>
);

export const Primary = Template.bind({});

Primary.args = {
  title: <Text>I am a title</Text>,
};
`,locationsMap:{primary:{startLoc:{col:49,line:10},endLoc:{col:1,line:14},startBody:{col:49,line:10},endBody:{col:1,line:14}}}}},title:"Feedback/Tooltip",component:o};const a=t=>e(o,{...t,children:e("span",{children:"Click to open Tooltip"})}),l=a.bind({});l.args={title:e(i,{children:"I am a title"})};const C=["Primary"];export{l as Primary,C as __namedExportsOrder,u as default};
//# sourceMappingURL=Tooltip.stories.85a6c5f4.js.map
