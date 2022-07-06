import{c as t}from"./modal.css.ts.vanilla.5e55e4f9.js";import{v as h}from"./index.css.0121b854.js";import{r as i}from"./index.003a9cb9.js";import{B as y}from"./Button.74c30908.js";import{H as S}from"./Text.d456240b.js";import"./Loading.400f87c0.js";import{M as z,C as N}from"./Close.9900a0a6.js";import{u as O,P as V}from"./Portal.b7efe8fb.js";import{S as A}from"./Spacing.3293d4fa.js";import{j as e,a as c,F as E}from"./jsx-runtime.d19d38a0.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.c6390da1.js";import"./mergeRefs.e715c294.js";import"./index.0e80d740.js";import"./containerIds.9de44e3d.js";var o={actions:{base:"_3104tl4",rule:"_3104tl5"},mask:"_3104tl7",maskMaximized:"_3104tl8",body:"_3104tl2",bodyMaximized:"_3104tl3",content:"_3104tl9",header:"_3104tl6",footer:"_3104tla",animation:{in:"_3104tl0",out:"_3104tl1"}};const _=260,g=a=>`${a} ${_}ms ${h.transition.easing}`,I=a=>g(a?o.animation.in:o.animation.out);function T(a){const[l,n]=i.exports.useState(!!a),r=i.exports.useCallback(()=>n(!0),[]),f=i.exports.useCallback(()=>n(!1),[]),m=i.exports.useCallback(()=>n(d=>!d),[]);return{value:l,setValue:n,setTrue:r,setFalse:f,toggle:m}}const q=a=>!a,p=a=>{const[l,n]=i.exports.useState(a||!1);return{onClick:i.exports.useCallback(()=>{n(q)},[n])}},F=({ok:a={label:"Ok"},cancel:l={label:"Cancel"}})=>e("div",{className:t(o.footer,"modal-footer"),children:"Footer"}),s=i.exports.forwardRef(({title:a,footer:l,content:n,visible:r,onVisibilityChange:f,className:m,maskClassName:d,ok:b,maximized:x=!1,maximizable:C,cancel:K},Y)=>{const{value:u,toggle:M}=T(x),k=O(r||!1,_),v=e("div",{className:t(o.content,"modal-content"),children:n});return k?e(V,{children:e("div",{className:t(o.mask,u&&o.maskMaximized,d),style:{animation:I(r)},children:c("div",{className:t(o.body,u&&o.bodyMaximized,m,"modal-body"),children:[c("div",{className:t(o.header,"modal-header"),children:[a&&e(S,{level:"4",className:t(o.header.title),children:a}),c(A,{gap:"md",className:t(o.actions.base,"modal-actions"),children:[C&&e(y,{radius:"round",color:"success",onClick:M,size:"small",className:t(o.actions.button,"modal-maximize"),children:e(z,{maximized:u,color:"onsurface",size:"xs"})}),e(y,{radius:"round",color:"danger",size:"small",className:t("modal-close"),children:e(N,{color:"onsurface",size:"xs"})})]})]}),n&&v,l&&e(F,{ok:b,cancel:b})]})})}):null});try{p.displayName="useClosure",p.__docgenInfo={description:"",displayName:"useClosure",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/react/src/lib/Feedback/Modal/Modal.tsx#useClosure"]={docgenInfo:p.__docgenInfo,name:"useClosure",path:"packages/react/src/lib/Feedback/Modal/Modal.tsx#useClosure"})}catch{}try{s.displayName="Modal",s.__docgenInfo={description:"",displayName:"Modal",props:{footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"Element"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"Element"}},visible:{defaultValue:null,description:"",name:"visible",required:!1,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:"",name:"onVisibilityChange",required:!1,type:{name:"(visible: boolean) => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},maximizable:{defaultValue:null,description:"",name:"maximizable",required:!1,type:{name:"boolean"}},maximized:{defaultValue:null,description:"",name:"maximized",required:!1,type:{name:"boolean"}},maskClassName:{defaultValue:null,description:"",name:"maskClassName",required:!1,type:{name:"string"}},ok:{defaultValue:{value:`{
    label: 'Ok',
  }`},description:"",name:"ok",required:!1,type:{name:"{ label?: string; onClick?: () => void; }"}},cancel:{defaultValue:{value:`{
    label: 'Cancel',
  }`},description:"",name:"cancel",required:!1,type:{name:"{ label?: string; onClick?: () => void; }"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/react/src/lib/Feedback/Modal/Modal.tsx#Modal"]={docgenInfo:s.__docgenInfo,name:"Modal",path:"packages/react/src/lib/Feedback/Modal/Modal.tsx#Modal"})}catch{}var oe={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from './Modal';

export default {
  title: 'Feedback/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
const Elem = () => (
  <div>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto non culpa
    eaque omnis nesciunt enim, ipsa voluptas laudantium consectetur harum
    laborum exercitationem, fuga dignissimos dolor, excepturi velit et ut
    architecto?
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
);
const Content = () => (
  <>
    {Array.from({ length: 20 }).map((e, i) => (
      <Elem key={i + 'item'} />
    ))}
  </>
);

Primary.args = {
  visible: true,
  content: <Content />,
  title: 'Lorem ipsum',
  maximizable: true,
  maximized: true,
};
`,locationsMap:{primary:{startLoc:{col:47,line:9},endLoc:{col:76,line:9},startBody:{col:47,line:9},endBody:{col:76,line:9}}}}},title:"Feedback/Modal",component:s};const L=a=>e(s,{...a}),B=L.bind({}),R=()=>c("div",{children:["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto non culpa eaque omnis nesciunt enim, ipsa voluptas laudantium consectetur harum laborum exercitationem, fuga dignissimos dolor, excepturi velit et ut architecto?",e("br",{}),e("br",{}),e("br",{}),e("br",{}),e("br",{}),e("br",{}),e("br",{})]}),P=()=>e(E,{children:Array.from({length:20}).map((a,l)=>e(R,{},l+"item"))});B.args={visible:!0,content:e(P,{}),title:"Lorem ipsum",maximizable:!0,maximized:!0};const ne=["Primary"];export{B as Primary,ne as __namedExportsOrder,oe as default};
//# sourceMappingURL=Modal.stories.78254683.js.map
