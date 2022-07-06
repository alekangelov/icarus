import{B as r}from"./Button.392199ad.js";import{a as t}from"./Popover.e4c90535.js";import{j as o,F as i}from"./jsx-runtime.d19d38a0.js";import"./modal.css.ts.vanilla.7ff0f3d6.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.c6390da1.js";import"./mergeRefs.e715c294.js";import"./index.003a9cb9.js";import"./Spacing.8cab9665.js";import"./popover.css.3ce8fb64.js";import"./Text.131d679d.js";import"./Grid.0d420d0f.js";import"./index.css.5f68bb4c.js";import"./alignment.css.01b5e3dc.js";import"./Dialog.da546da4.js";import"./Portal.b7efe8fb.js";import"./index.0e80d740.js";import"./containerIds.9de44e3d.js";var h={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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
`,locationsMap:{primary:{startLoc:{col:49,line:10},endLoc:{col:1,line:14},startBody:{col:49,line:10},endBody:{col:1,line:14}}}}},title:"Feedback/Popover",component:t};const n=e=>o(t,{...e,children:o(r,{children:"Click to open Popover"})}),a=n.bind({});a.args={title:"I am a title",content:o(i,{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, praesentium voluptas autem mollitia quia quos labore sequi corrupti velit unde. Eum cum explicabo ipsa amet autem architecto atque in dolore?"})};const k=["Primary"];export{a as Primary,k as __namedExportsOrder,h as default};
//# sourceMappingURL=Popover.stories.e00ae3c1.js.map
