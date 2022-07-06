import{c as a}from"./modal.css.ts.vanilla.7ff0f3d6.js";import{v as y}from"./index.css.5f68bb4c.js";import{r as n}from"./index.003a9cb9.js";import{H as C}from"./Text.131d679d.js";import"./Loading.8c7b8c2c.js";import{M as I,C as M}from"./Close.6d430433.js";import{u as q,P as L}from"./Portal.b7efe8fb.js";import{j as e,a as l,F as k}from"./jsx-runtime.d19d38a0.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.c6390da1.js";import"./index.0e80d740.js";import"./containerIds.9de44e3d.js";var i={actions:{base:"_3104tl4",rule:"_3104tl5",button:"_3104tl6"},mask:"_3104tl8",maskMaximized:"_3104tl9",body:"_3104tl2",bodyMaximized:"_3104tl3",content:"_3104tla",header:"_3104tl7",footer:"_3104tlb",animation:{in:"_3104tl0",out:"_3104tl1"}};const x=260,f=t=>`${t} ${x}ms ${y.transition.easing}`,S=t=>f(t?i.animation.in:i.animation.out);function z(t){const[s,o]=n.exports.useState(!!t),r=n.exports.useCallback(()=>o(!0),[]),b=n.exports.useCallback(()=>o(!1),[]),c=n.exports.useCallback(()=>o(m=>!m),[]);return{value:s,setValue:o,setTrue:r,setFalse:b,toggle:c}}const N=t=>!t,p=t=>{const[s,o]=n.exports.useState(t||!1);return{onClick:n.exports.useCallback(()=>{o(N)},[o])}},O=({ok:t={label:"Ok"},cancel:s={label:"Cancel"}})=>e("div",{className:a(i.footer,"modal-footer"),children:"Footer"}),u=n.exports.forwardRef(({title:t,footer:s,content:o,visible:r,onVisibilityChange:b,className:c,maskClassName:m,ok:g,maximized:v=!1,maximizable:h,cancel:E},F)=>{const{value:d,toggle:_}=z(v);return q(r||!1,x)?e(L,{children:e("div",{className:a(i.mask,d&&i.maskMaximized,m),style:{animation:S(r)},children:l("div",{className:a(i.body,d&&i.bodyMaximized,c,"modal-body"),children:[l("div",{className:a(i.header,"modal-header"),children:[t&&e(C,{level:"4",children:t}),l("div",{className:a(i.actions.base,"modal-actions"),children:[h&&e("button",{onClick:_,className:a(i.actions.button,"modal-maximize"),children:e(I,{maximized:d,color:"onsurface",size:"xs"})}),e("button",{className:a(i.actions.button,"modal-close"),children:e(M,{color:"onsurface",size:"xs"})})]})]}),o&&e("div",{className:a(i.content,"modal-content"),children:o}),s&&e(O,{ok:g,cancel:g})]})})}):null});try{p.displayName="useClosure",p.__docgenInfo={description:"",displayName:"useClosure",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/react/src/lib/Feedback/Modal/Modal.tsx#useClosure"]={docgenInfo:p.__docgenInfo,name:"useClosure",path:"packages/react/src/lib/Feedback/Modal/Modal.tsx#useClosure"})}catch{}try{u.displayName="Modal",u.__docgenInfo={description:"",displayName:"Modal",props:{footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"Element"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"Element"}},visible:{defaultValue:null,description:"",name:"visible",required:!1,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:"",name:"onVisibilityChange",required:!1,type:{name:"(visible: boolean) => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},maximizable:{defaultValue:null,description:"",name:"maximizable",required:!1,type:{name:"boolean"}},maximized:{defaultValue:null,description:"",name:"maximized",required:!1,type:{name:"boolean"}},maskClassName:{defaultValue:null,description:"",name:"maskClassName",required:!1,type:{name:"string"}},ok:{defaultValue:{value:`{
    label: 'Ok',
  }`},description:"",name:"ok",required:!1,type:{name:"{ label?: string; onClick?: () => void; }"}},cancel:{defaultValue:{value:`{
    label: 'Cancel',
  }`},description:"",name:"cancel",required:!1,type:{name:"{ label?: string; onClick?: () => void; }"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/react/src/lib/Feedback/Modal/Modal.tsx#Modal"]={docgenInfo:u.__docgenInfo,name:"Modal",path:"packages/react/src/lib/Feedback/Modal/Modal.tsx#Modal"})}catch{}var J={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from './Modal';

export default {
  title: 'Feedback/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});

const Content = () => (
  <>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto non culpa
    eaque omnis nesciunt enim, ipsa voluptas laudantium consectetur harum
    laborum exercitationem, fuga dignissimos dolor, excepturi velit et ut
    architecto?
    <br />
    <br />
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto non culpa
    eaque omnis nesciunt enim, ipsa voluptas laudantium consectetur harum
    laborum exercitationem, fuga dignissimos dolor, excepturi velit et ut
    architecto?
    <br />
    <br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto non
    culpa eaque omnis nesciunt enim, ipsa voluptas laudantium consectetur harum
    laborum exercitationem, fuga dignissimos dolor, excepturi velit et ut
    architecto?
    <br />
    <br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto non
    culpa eaque omnis nesciunt enim, ipsa voluptas laudantium consectetur harum
    laborum exercitationem, fuga dignissimos dolor, excepturi velit et ut
    architecto?
    <br />
    <br />
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto non culpa
    eaque omnis nesciunt enim, ipsa voluptas laudantium consectetur harum
    laborum exercitationem, fuga dignissimos dolor, excepturi velit et ut
    architecto?
    <br />
    <br />
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto non culpa
    eaque omnis nesciunt enim, ipsa voluptas laudantium consectetur harum
    laborum exercitationem, fuga dignissimos dolor, excepturi velit et ut
    architecto?
    <br />
    <br />
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto non culpa
    eaque omnis nesciunt enim, ipsa voluptas laudantium consectetur harum
    laborum exercitationem, fuga dignissimos dolor, excepturi velit et ut
    architecto?
    <br />
    <br />
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto non culpa
    eaque omnis nesciunt enim, ipsa voluptas laudantium consectetur harum
    laborum exercitationem, fuga dignissimos dolor, excepturi velit et ut
    architecto?
    <br />
    <br />
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto non culpa
    eaque omnis nesciunt enim, ipsa voluptas laudantium consectetur harum
    laborum exercitationem, fuga dignissimos dolor, excepturi velit et ut
    architecto?
    <br />
    <br />
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto non culpa
    eaque omnis nesciunt enim, ipsa voluptas laudantium consectetur harum
    laborum exercitationem, fuga dignissimos dolor, excepturi velit et ut
    architecto?
    <br />
    <br />
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto non culpa
    eaque omnis nesciunt enim, ipsa voluptas laudantium consectetur harum
    laborum exercitationem, fuga dignissimos dolor, excepturi velit et ut
    architecto?
    <br />
    <br />
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto non culpa
    eaque omnis nesciunt enim, ipsa voluptas laudantium consectetur harum
    laborum exercitationem, fuga dignissimos dolor, excepturi velit et ut
    architecto?
    <br />
    <br />
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto non culpa
    eaque omnis nesciunt enim, ipsa voluptas laudantium consectetur harum
    laborum exercitationem, fuga dignissimos dolor, excepturi velit et ut
    architecto?
    <br />
    <br />
  </>
);

Primary.args = {
  visible: true,
  content: <Content />,
  title: 'Lorem ipsum',
  maximizable: true,
  maximized: true,
};
`,locationsMap:{primary:{startLoc:{col:47,line:9},endLoc:{col:76,line:9},startBody:{col:47,line:9},endBody:{col:76,line:9}}}}},title:"Feedback/Modal",component:u};const V=t=>e(u,{...t}),T=V.bind({}),A=()=>l(k,{children:["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto non culpa eaque omnis nesciunt enim, ipsa voluptas laudantium consectetur harum laborum exercitationem, fuga dignissimos dolor, excepturi velit et ut architecto?",e("br",{}),e("br",{}),"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto non culpa eaque omnis nesciunt enim, ipsa voluptas laudantium consectetur harum laborum exercitationem, fuga dignissimos dolor, excepturi velit et ut architecto?",e("br",{}),e("br",{})," Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto non culpa eaque omnis nesciunt enim, ipsa voluptas laudantium consectetur harum laborum exercitationem, fuga dignissimos dolor, excepturi velit et ut architecto?",e("br",{}),e("br",{})," Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto non culpa eaque omnis nesciunt enim, ipsa voluptas laudantium consectetur harum laborum exercitationem, fuga dignissimos dolor, excepturi velit et ut architecto?",e("br",{}),e("br",{}),"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto non culpa eaque omnis nesciunt enim, ipsa voluptas laudantium consectetur harum laborum exercitationem, fuga dignissimos dolor, excepturi velit et ut architecto?",e("br",{}),e("br",{}),"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto non culpa eaque omnis nesciunt enim, ipsa voluptas laudantium consectetur harum laborum exercitationem, fuga dignissimos dolor, excepturi velit et ut architecto?",e("br",{}),e("br",{}),"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto non culpa eaque omnis nesciunt enim, ipsa voluptas laudantium consectetur harum laborum exercitationem, fuga dignissimos dolor, excepturi velit et ut architecto?",e("br",{}),e("br",{}),"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto non culpa eaque omnis nesciunt enim, ipsa voluptas laudantium consectetur harum laborum exercitationem, fuga dignissimos dolor, excepturi velit et ut architecto?",e("br",{}),e("br",{}),"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto non culpa eaque omnis nesciunt enim, ipsa voluptas laudantium consectetur harum laborum exercitationem, fuga dignissimos dolor, excepturi velit et ut architecto?",e("br",{}),e("br",{}),"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto non culpa eaque omnis nesciunt enim, ipsa voluptas laudantium consectetur harum laborum exercitationem, fuga dignissimos dolor, excepturi velit et ut architecto?",e("br",{}),e("br",{}),"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto non culpa eaque omnis nesciunt enim, ipsa voluptas laudantium consectetur harum laborum exercitationem, fuga dignissimos dolor, excepturi velit et ut architecto?",e("br",{}),e("br",{}),"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto non culpa eaque omnis nesciunt enim, ipsa voluptas laudantium consectetur harum laborum exercitationem, fuga dignissimos dolor, excepturi velit et ut architecto?",e("br",{}),e("br",{}),"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto non culpa eaque omnis nesciunt enim, ipsa voluptas laudantium consectetur harum laborum exercitationem, fuga dignissimos dolor, excepturi velit et ut architecto?",e("br",{}),e("br",{})]});T.args={visible:!0,content:e(A,{}),title:"Lorem ipsum",maximizable:!0,maximized:!0};const Q=["Primary"];export{T as Primary,Q as __namedExportsOrder,J as default};
//# sourceMappingURL=Modal.stories.d2631b6f.js.map
