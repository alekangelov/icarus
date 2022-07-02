import{a as s,j as e}from"./jsx-runtime.d19d38a0.js";import{c as _}from"./button.css.ts.vanilla.38bb8d68.js";import{c as g}from"./vanilla-extract-recipes-createRuntimeFn.esm.c6390da1.js";import{r as p}from"./index.003a9cb9.js";import{S as j}from"./Spacing.34a9367d.js";const h=()=>s("svg",{className:"feather feather-loader",fill:"none",height:"24",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",children:[e("line",{x1:"12",x2:"12",y1:"2",y2:"6"}),e("line",{x1:"12",x2:"12",y1:"18",y2:"22"}),e("line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76"}),e("line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07"}),e("line",{x1:"2",x2:"6",y1:"12",y2:"12"}),e("line",{x1:"18",x2:"22",y1:"12",y2:"12"}),e("line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24"}),e("line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93"})]});var B=g({defaultClassName:"_1ypajcp0",variantClassNames:{color:{primary:"_1ypajcp1",secondary:"_1ypajcp2",danger:"_1ypajcp3",success:"_1ypajcp4",warning:"_1ypajcp5",info:"_1ypajcp6",surface:"_1ypajcp7",surfaceMd:"_1ypajcp8",surfaceHv:"_1ypajcp9"},size:{small:"_1ypajcpa",medium:"_1ypajcpb",large:"_1ypajcpc",smallSymmetric:"_1ypajcpd",mediumSymmetric:"_1ypajcpe",largeSymmetric:"_1ypajcpf"},elevation:{none:"_1ypajcpg",sm:"_1ypajcph",md:"_1ypajcpi",lg:"_1ypajcpj",xl:"_1ypajcpk",xxl:"_1ypajcpl"},radius:{none:"_1ypajcpm",sm:"_1ypajcpn",md:"_1ypajcpo",lg:"_1ypajcpp",xl:"_1ypajcpq",xxl:"_1ypajcpr",round:"_1ypajcps"},floating:{true:"_1ypajcpt"},fullWidth:{true:"_1ypajcpu"}},defaultVariants:{color:"primary",size:"medium",radius:"md",floating:!1,elevation:"md",fullWidth:!1},compoundVariants:[]});const a=p.exports.forwardRef(({color:t,size:n,elevation:d,fullWidth:u,floating:y,radius:l,icon:r,iconPosition:i,gap:f,...o},x)=>{const c=p.exports.Children.count(o.children)===1;return e("button",{...o,className:_(B({color:t,size:c&&!(n!=null&&n.includes("Symmetric"))&&typeof o.children!="string"?`${n||"small"}Symmetric`:n,elevation:d,fullWidth:u,floating:y,radius:c&&!l?"round":l})),ref:x,children:s(j,{gap:f||"md",align:"center",justify:"center",children:[r&&i==="left"&&r,o.children,r&&i==="right"&&r]})})});try{a.displayName="Button",a.__docgenInfo={description:"",displayName:"Button",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'"primary" | "secondary" | "danger" | "success" | "warning" | "info" | "surface" | "surfaceMd" | "surfaceHv"'}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:'"none" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl"'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"medium" | "small" | "large" | "smallSymmetric" | "mediumSymmetric" | "largeSymmetric"'}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"Element"}},radius:{defaultValue:null,description:"",name:"radius",required:!1,type:{name:'"none" | "round" | "sm" | "md" | "lg" | "xl" | "xxl"'}},elevation:{defaultValue:null,description:"",name:"elevation",required:!1,type:{name:'"none" | "sm" | "md" | "lg" | "xl" | "xxl"'}},floating:{defaultValue:null,description:"",name:"floating",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},iconPosition:{defaultValue:null,description:"",name:"iconPosition",required:!0,type:{name:'"left" | "right"'}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/react/src/lib/General/Button.tsx#Button"]={docgenInfo:a.__docgenInfo,name:"Button",path:"packages/react/src/lib/General/Button.tsx#Button"})}catch{}var w={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LoadingIcon } from '../Icons/Loading';
import { Button } from './Button';

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
  children: <LoadingIcon />,
};
`,locationsMap:{primary:{startLoc:{col:48,line:10},endLoc:{col:78,line:10},startBody:{col:48,line:10},endBody:{col:78,line:10}},icon:{startLoc:{col:48,line:10},endLoc:{col:78,line:10},startBody:{col:48,line:10},endBody:{col:78,line:10}}}}},title:"General/Button",component:a};const m=t=>e(a,{...t}),S=m.bind({});S.args={children:"I am a button"};const b=m.bind({});b.args={children:e(h,{})};const L=["Primary","Icon"];export{b as Icon,S as Primary,L as __namedExportsOrder,w as default};
//# sourceMappingURL=Button.stories.b2b5a0d3.js.map
