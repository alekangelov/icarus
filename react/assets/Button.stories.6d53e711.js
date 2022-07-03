import{B as e,L as t}from"./Loading.1620810b.js";import{j as n}from"./jsx-runtime.d19d38a0.js";import"./loading.css.ts.vanilla.3b11953e.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.c6390da1.js";import"./index.003a9cb9.js";import"./Spacing.cac936a6.js";var I={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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
`,locationsMap:{primary:{startLoc:{col:48,line:10},endLoc:{col:78,line:10},startBody:{col:48,line:10},endBody:{col:78,line:10}},icon:{startLoc:{col:48,line:10},endLoc:{col:78,line:10},startBody:{col:48,line:10},endBody:{col:78,line:10}},"icon-and-label":{startLoc:{col:48,line:10},endLoc:{col:78,line:10},startBody:{col:48,line:10},endBody:{col:78,line:10}},disabled:{startLoc:{col:48,line:10},endLoc:{col:78,line:10},startBody:{col:48,line:10},endBody:{col:78,line:10}}}}},title:"General/Button",component:e};const o=a=>n(e,{...a}),r=o.bind({});r.args={children:"I am a button"};const i=o.bind({});i.args={children:n(t,{size:"xl"})};const c=o.bind({});c.args={children:"I am button",icon:n(t,{})};const l=o.bind({});l.args={disabled:!0,children:"I am button",icon:n(t,{})};const y=["Primary","Icon","IconAndLabel","Disabled"];export{l as Disabled,i as Icon,c as IconAndLabel,r as Primary,y as __namedExportsOrder,I as default};
//# sourceMappingURL=Button.stories.6d53e711.js.map
