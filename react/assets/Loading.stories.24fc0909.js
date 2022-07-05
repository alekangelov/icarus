import{r}from"./index.003a9cb9.js";import{B as f}from"./Button.f72d57ac.js";import{c as l}from"./popover.css.ts.vanilla.fb90ee6c.js";import{c as p}from"./vanilla-extract-recipes-createRuntimeFn.esm.c6390da1.js";import{L as g}from"./Loading.7022ec06.js";import{u as L,P as y}from"./Portal.b7efe8fb.js";import{j as n,a as b,F as _}from"./jsx-runtime.d19d38a0.js";import"./mergeRefs.e715c294.js";import"./Spacing.4fc61cef.js";import"./index.0e80d740.js";import"./containerIds.9de44e3d.js";var c={in:"uzmy295 0.25s var(--transition-easing)",out:"uzmy296 0.25s var(--transition-easing)"},B=p({defaultClassName:"uzmy290",variantClassNames:{fullscreen:{true:"uzmy291",false:"uzmy292"}},defaultVariants:{fullscreen:!1},compoundVariants:[]}),d={default:"uzmy293",fullscreen:"uzmy294"};const s=({fullscreen:e,visible:o})=>{const a=o?c.in:c.out;return n("div",{className:l(d.default,e&&d.fullscreen),style:{animation:a},children:n("div",{className:l(B({fullscreen:e})),children:n(g,{size:"xxxl"})})})},t=({visible:e,fullscreen:o})=>{const[a,u]=r.exports.useState(e||!1),m=L(a,250);return r.exports.useEffect(()=>{typeof e=="boolean"&&u(i=>i!==e?e:i)},[e]),n(y,{children:m&&n(s,{fullscreen:o,visible:a})})};try{s.displayName="LoadingBase",s.__docgenInfo={description:"",displayName:"LoadingBase",props:{fullscreen:{defaultValue:null,description:"",name:"fullscreen",required:!1,type:{name:"boolean"}},visible:{defaultValue:null,description:"",name:"visible",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/react/src/lib/Feedback/Loading/Loading.tsx#LoadingBase"]={docgenInfo:s.__docgenInfo,name:"LoadingBase",path:"packages/react/src/lib/Feedback/Loading/Loading.tsx#LoadingBase"})}catch{}try{t.displayName="Loading",t.__docgenInfo={description:"",displayName:"Loading",props:{fullscreen:{defaultValue:null,description:"",name:"fullscreen",required:!1,type:{name:"boolean"}},visible:{defaultValue:null,description:"",name:"visible",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/react/src/lib/Feedback/Loading/Loading.tsx#Loading"]={docgenInfo:t.__docgenInfo,name:"Loading",path:"packages/react/src/lib/Feedback/Loading/Loading.tsx#Loading"})}catch{}var I={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import { useState } from 'react';
import { Button } from '../../General/Button';
import { Loading } from './Loading';

export default {
  title: 'Feedback/Loading',
  component: Loading,
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = (args) => (
  <Loading {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  fullscreen: false,
  visible: false,
};

const WithButtonTemplate: Story<{ fullscreen?: boolean }> = (args) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Loading fullscreen={args.fullscreen} visible={visible} />
      <Button
        onClick={() => {
          setVisible(true);
          setTimeout(() => setVisible(false), 2000);
        }}
      >
        Open Loading
      </Button>
    </>
  );
};

export const WithButton = WithButtonTemplate.bind({});
WithButton.args = {
  fullscreen: false,
};
`,locationsMap:{primary:{startLoc:{col:49,line:11},endLoc:{col:1,line:13},startBody:{col:49,line:11},endBody:{col:1,line:13}},"with-button":{startLoc:{col:60,line:21},endLoc:{col:1,line:37},startBody:{col:60,line:21},endBody:{col:1,line:37}}}}},title:"Feedback/Loading",component:t};const S=e=>n(t,{...e}),h=S.bind({});h.args={fullscreen:!1,visible:!1};const x=e=>{const[o,a]=r.exports.useState(!1);return b(_,{children:[n(t,{fullscreen:e.fullscreen,visible:o}),n(f,{onClick:()=>{a(!0),setTimeout(()=>a(!1),2e3)},children:"Open Loading"})]})},C=x.bind({});C.args={fullscreen:!1};const P=["Primary","WithButton"];export{h as Primary,C as WithButton,P as __namedExportsOrder,I as default};
//# sourceMappingURL=Loading.stories.24fc0909.js.map
