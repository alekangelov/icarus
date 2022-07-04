import{L as t}from"./Loading.22fe30bf.js";import{B as e}from"./Button.39f1ced6.js";import{j as n}from"./jsx-runtime.d19d38a0.js";import"./dialog.css.ts.vanilla.465b1c21.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.c6390da1.js";import"./index.003a9cb9.js";import"./Spacing.e3c474a4.js";var y={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LoadingIcon } from '../../Icons/Loading';
import { Button } from '.';

export default {
  title: 'General/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'I am a button',
};

export const Icon = Template.bind({});

Icon.args = {
  children: <LoadingIcon size="xl" />,
};

export const IconAndLabel = Template.bind({});

IconAndLabel.args = {
  children: 'I am button',
  icon: <LoadingIcon />,
};

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
  children: 'I am button',
  icon: <LoadingIcon />,
};
`,locationsMap:{primary:{startLoc:{col:48,line:10},endLoc:{col:78,line:10},startBody:{col:48,line:10},endBody:{col:78,line:10}},icon:{startLoc:{col:48,line:10},endLoc:{col:78,line:10},startBody:{col:48,line:10},endBody:{col:78,line:10}},"icon-and-label":{startLoc:{col:48,line:10},endLoc:{col:78,line:10},startBody:{col:48,line:10},endBody:{col:78,line:10}},disabled:{startLoc:{col:48,line:10},endLoc:{col:78,line:10},startBody:{col:48,line:10},endBody:{col:78,line:10}}}}},title:"General/Button",component:e};const o=r=>n(e,{...r}),a=o.bind({});a.args={children:"I am a button"};const i=o.bind({});i.args={children:n(t,{size:"xl"})};const c=o.bind({});c.args={children:"I am button",icon:n(t,{})};const l=o.bind({});l.args={disabled:!0,children:"I am button",icon:n(t,{})};const L=["Primary","Icon","IconAndLabel","Disabled"];export{l as Disabled,i as Icon,c as IconAndLabel,a as Primary,L as __namedExportsOrder,y as default};
//# sourceMappingURL=Button.stories.aa632e7f.js.map
