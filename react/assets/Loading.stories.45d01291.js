import{r}from"./index.003a9cb9.js";import{L as m,B as g}from"./Loading.1620810b.js";import{c as u}from"./loading.css.ts.vanilla.3b11953e.js";import{c as y}from"./vanilla-extract-recipes-createRuntimeFn.esm.c6390da1.js";import{r as _}from"./index.0e80d740.js";import{g as L}from"./containerIds.9de44e3d.js";import{j as a,a as b,F as S}from"./jsx-runtime.d19d38a0.js";import"./Spacing.cac936a6.js";var f={in:"uzmy295 0.25s var(--transition-easing)",out:"uzmy296 0.25s var(--transition-easing)"},B=y({defaultClassName:"uzmy290",variantClassNames:{fullscreen:{true:"uzmy291",false:"uzmy292"}},defaultVariants:{fullscreen:!1},compoundVariants:[]}),p={default:"uzmy293",fullscreen:"uzmy294"};function h(e,t){const[n,s]=r.exports.useState(!1);return r.exports.useEffect(()=>{let i;return e&&!n?s(!0):!e&&n&&(i=setTimeout(()=>s(!1),t)),()=>clearTimeout(i)},[e,t,n]),n}const l=e=>{const t=typeof window!="undefined"?L():null;return t?_.exports.createPortal(e.children,t):null};try{l.displayName="Portal",l.__docgenInfo={description:"",displayName:"Portal",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/react/src/lib/internal/Portal.tsx#Portal"]={docgenInfo:l.__docgenInfo,name:"Portal",path:"packages/react/src/lib/internal/Portal.tsx#Portal"})}catch{}const c=({fullscreen:e,visible:t})=>{const n=t?f.in:f.out;return a("div",{className:u(p.default,e&&p.fullscreen),style:{animation:n},children:a("div",{className:u(B({fullscreen:e})),children:a(m,{size:"xxxl"})})})},o=({visible:e,fullscreen:t})=>{const[n,s]=r.exports.useState(e||!1),i=h(n,250);return r.exports.useEffect(()=>{typeof e=="boolean"&&s(d=>d!==e?e:d)},[e]),a(l,{children:i&&a(c,{fullscreen:t,visible:n})})};try{c.displayName="LoadingBase",c.__docgenInfo={description:"",displayName:"LoadingBase",props:{fullscreen:{defaultValue:null,description:"",name:"fullscreen",required:!1,type:{name:"boolean"}},visible:{defaultValue:null,description:"",name:"visible",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/react/src/lib/Feedback/Loading/Loading.tsx#LoadingBase"]={docgenInfo:c.__docgenInfo,name:"LoadingBase",path:"packages/react/src/lib/Feedback/Loading/Loading.tsx#LoadingBase"})}catch{}try{o.displayName="Loading",o.__docgenInfo={description:"",displayName:"Loading",props:{fullscreen:{defaultValue:null,description:"",name:"fullscreen",required:!1,type:{name:"boolean"}},visible:{defaultValue:null,description:"",name:"visible",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/react/src/lib/Feedback/Loading/Loading.tsx#Loading"]={docgenInfo:o.__docgenInfo,name:"Loading",path:"packages/react/src/lib/Feedback/Loading/Loading.tsx#Loading"})}catch{}var V={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
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
`,locationsMap:{primary:{startLoc:{col:49,line:11},endLoc:{col:1,line:13},startBody:{col:49,line:11},endBody:{col:1,line:13}},"with-button":{startLoc:{col:60,line:21},endLoc:{col:1,line:37},startBody:{col:60,line:21},endBody:{col:1,line:37}}}}},title:"Feedback/Loading",component:o};const x=e=>a(o,{...e}),O=x.bind({});O.args={fullscreen:!1,visible:!1};const T=e=>{const[t,n]=r.exports.useState(!1);return b(S,{children:[a(o,{fullscreen:e.fullscreen,visible:t}),a(g,{onClick:()=>{n(!0),setTimeout(()=>n(!1),2e3)},children:"Open Loading"})]})},C=T.bind({});C.args={fullscreen:!1};const F=["Primary","WithButton"];export{O as Primary,C as WithButton,F as __namedExportsOrder,V as default};
//# sourceMappingURL=Loading.stories.45d01291.js.map
