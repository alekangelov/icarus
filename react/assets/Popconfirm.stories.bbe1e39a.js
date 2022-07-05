import{B as e}from"./Button.f72d57ac.js";import{P as t}from"./Popover.459fd114.js";import{j as o,F as i}from"./jsx-runtime.d19d38a0.js";import"./popover.css.ts.vanilla.fb90ee6c.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.c6390da1.js";import"./mergeRefs.e715c294.js";import"./index.003a9cb9.js";import"./Spacing.4fc61cef.js";import"./popover.css.2e002753.js";import"./Text.1b9f166b.js";import"./Grid.8da89494.js";import"./index.css.61bff02b.js";import"./alignment.css.5e3e8aea.js";import"./Dialog.4b9fda44.js";import"./Portal.b7efe8fb.js";import"./index.0e80d740.js";import"./containerIds.9de44e3d.js";var v={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../../General/Button';
import { PopConfirm } from './Popover';

export default {
  title: 'Feedback/PopConfirm',
  component: PopConfirm,
} as ComponentMeta<typeof PopConfirm>;

const Template: ComponentStory<typeof PopConfirm> = (args) => (
  <PopConfirm {...args}>
    <Button>Click to open PopConfirm</Button>
  </PopConfirm>
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
  ok: {
    onClick: () => {
      console.log('ok');
    },
  },
  cancel: {
    onClick: () => {
      console.log('cancel');
    },
  },
};
`,locationsMap:{primary:{startLoc:{col:52,line:10},endLoc:{col:1,line:14},startBody:{col:52,line:10},endBody:{col:1,line:14}}}}},title:"Feedback/PopConfirm",component:t};const r=n=>o(t,{...n,children:o(e,{children:"Click to open PopConfirm"})}),m=r.bind({});m.args={title:"I am a title",content:o(i,{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, praesentium voluptas autem mollitia quia quos labore sequi corrupti velit unde. Eum cum explicabo ipsa amet autem architecto atque in dolore?"}),ok:{onClick:()=>{console.log("ok")}},cancel:{onClick:()=>{console.log("cancel")}}};const h=["Primary"];export{m as Primary,h as __namedExportsOrder,v as default};
//# sourceMappingURL=Popconfirm.stories.bbe1e39a.js.map
