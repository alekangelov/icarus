import{c as s}from"./modal.css.ts.vanilla.5e55e4f9.js";import{d as r}from"./debugBox.css.e5ca0ac9.js";import{f as g}from"./for.85b45d59.js";import{r as _}from"./index.003a9cb9.js";import{j as a}from"./jsx-runtime.d19d38a0.js";var p={paddingX:{none:"_1uxm0j80",xs:"_1uxm0j81",sm:"_1uxm0j82",md:"_1uxm0j83",lg:"_1uxm0j84",xl:"_1uxm0j85",xxl:"_1uxm0j86",xxxl:"_1uxm0j87"},paddingY:{none:"_1uxm0j88",xs:"_1uxm0j89",sm:"_1uxm0j8a",md:"_1uxm0j8b",lg:"_1uxm0j8c",xl:"_1uxm0j8d",xxl:"_1uxm0j8e",xxxl:"_1uxm0j8f"},padding:{none:"_1uxm0j8g",xs:"_1uxm0j8h",sm:"_1uxm0j8i",md:"_1uxm0j8j",lg:"_1uxm0j8k",xl:"_1uxm0j8l",xxl:"_1uxm0j8m",xxxl:"_1uxm0j8n"},paddingLeft:{none:"_1uxm0j8o",xs:"_1uxm0j8p",sm:"_1uxm0j8q",md:"_1uxm0j8r",lg:"_1uxm0j8s",xl:"_1uxm0j8t",xxl:"_1uxm0j8u",xxxl:"_1uxm0j8v"},paddingRight:{none:"_1uxm0j8w",xs:"_1uxm0j8x",sm:"_1uxm0j8y",md:"_1uxm0j8z",lg:"_1uxm0j810",xl:"_1uxm0j811",xxl:"_1uxm0j812",xxxl:"_1uxm0j813"},paddingTop:{none:"_1uxm0j814",xs:"_1uxm0j815",sm:"_1uxm0j816",md:"_1uxm0j817",lg:"_1uxm0j818",xl:"_1uxm0j819",xxl:"_1uxm0j81a",xxxl:"_1uxm0j81b"},paddingBottom:{none:"_1uxm0j81c",xs:"_1uxm0j81d",sm:"_1uxm0j81e",md:"_1uxm0j81f",lg:"_1uxm0j81g",xl:"_1uxm0j81h",xxl:"_1uxm0j81i",xxxl:"_1uxm0j81j"}};const j=n=>{const d=[];return g(n!=null?n:{},(e,m)=>{!e||d.push(p[m][e])}),d},x=_.exports.forwardRef(({paddingX:n,paddingY:d,paddingBottom:e,paddingLeft:m,paddingRight:o,paddingTop:i,padding:t,...l},u)=>a("div",{...l,className:s(j({paddingX:n,paddingY:d,paddingBottom:e,paddingLeft:m,paddingRight:o,paddingTop:i,padding:t}),l.className),ref:u}));try{x.displayName="Padding",x.__docgenInfo={description:"",displayName:"Padding",props:{paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:'"none" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl"'}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:'"none" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl"'}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:'"none" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl"'}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:'"none" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl"'}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:'"none" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl"'}},paddingX:{defaultValue:null,description:"",name:"paddingX",required:!1,type:{name:'"none" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl"'}},paddingY:{defaultValue:null,description:"",name:"paddingY",required:!1,type:{name:'"none" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl"'}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/react/src/lib/Layout/Padding/Padding.tsx#Padding"]={docgenInfo:x.__docgenInfo,name:"Padding",path:"packages/react/src/lib/Layout/Padding/Padding.tsx#Padding"})}catch{}var S={parameters:{storySource:{source:`import { debugBox } from '@icarus/core';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Padding } from './Padding';

export default {
  name: 'Laoyut/Padding',
  component: Padding,
} as ComponentMeta<typeof Padding>;

const Box = () => (
  <div className={debugBox} style={{ width: 250, height: 250 }}></div>
);

const Template: ComponentStory<typeof Padding> = (args) => (
  <Padding {...args}>
    <Box />
  </Padding>
);

export const Primary = Template.bind({});
Primary.args = {
  padding: 'md',
};
`,locationsMap:{primary:{startLoc:{col:49,line:14},endLoc:{col:1,line:18},startBody:{col:49,line:14},endBody:{col:1,line:18}}}}},name:"Laoyut/Padding",component:x};const c=()=>a("div",{className:r,style:{width:250,height:250}}),f=n=>a(x,{...n,children:a(c,{})}),y=f.bind({});y.args={padding:"md"};const T=["Primary"];export{y as Primary,T as __namedExportsOrder,S as default};
//# sourceMappingURL=Padding.stories.17dce378.js.map
