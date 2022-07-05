import{B as i}from"./Button.9491c0f7.js";import{D as t}from"./Dialog.5391a0cc.js";import{j as n,F as l}from"./jsx-runtime.d19d38a0.js";import"./dialog.css.ts.vanilla.4a4d5af7.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.c6390da1.js";import"./index.003a9cb9.js";import"./Spacing.2543bef8.js";import"./index.css.4d0639d6.js";import"./Portal.b7efe8fb.js";import"./index.0e80d740.js";import"./containerIds.9de44e3d.js";var B={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../../General/Button';
import { Dialog } from './Dialog';

export default {
  title: 'Feedback/Dialog',
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => (
  <Dialog {...args}>
    <Button>Click to open Dialog</Button>
  </Dialog>
);

const Content = () => <>I am a dialog</>;

export const Primary = Template.bind({});
Primary.args = {
  content: <Content />,
};

export const Secondary = Template.bind({});
Secondary.args = {
  content: <Content />,
};

Secondary.decorators = [
  (Story) => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
      }}
    >
      <Story />
    </div>
  ),
];
`,locationsMap:{primary:{startLoc:{col:48,line:10},endLoc:{col:1,line:14},startBody:{col:48,line:10},endBody:{col:1,line:14}},secondary:{startLoc:{col:48,line:10},endLoc:{col:1,line:14},startBody:{col:48,line:10},endBody:{col:1,line:14}}}}},title:"Feedback/Dialog",component:t};const e=o=>n(t,{...o,children:n(i,{children:"Click to open Dialog"})}),r=()=>n(l,{children:"I am a dialog"}),c=e.bind({});c.args={content:n(r,{})};const a=e.bind({});a.args={content:n(r,{})};a.decorators=[o=>n("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"80vh"},children:n(o,{})})];const S=["Primary","Secondary"];export{c as Primary,a as Secondary,S as __namedExportsOrder,B as default};
//# sourceMappingURL=Dialog.stories.f63e3837.js.map
