import{r as s}from"./index.003a9cb9.js";import{t as w,b as C,a as S,d as T,e as R,f as O,g as A,c as h}from"./button.css.ts.vanilla.38bb8d68.js";import{f as q}from"./for.85b45d59.js";import{j as E}from"./jsx-runtime.d19d38a0.js";var L={center:"wnnokw0",end:"wnnokw1",start:"wnnokw2",stretch:"wnnokw3",spaceBetween:"wnnokw4",spaceAround:"wnnokw5"},V={center:"wnnokw6",end:"wnnokw7",start:"wnnokw8",stretch:"wnnokw9",spaceBetween:"wnnokwa",spaceAround:"wnnokwb"},v={block:"_1oo4nf70",inline:"_1oo4nf71",inlineBlock:"_1oo4nf72",none:"_1oo4nf73",table:"_1oo4nf74",tableCell:"_1oo4nf75",tableRow:"_1oo4nf76",flex:"_1oo4nf77",grid:"_1oo4nf78"},y={paddingX:{none:"_1uxm0j80",xs:"_1uxm0j81",sm:"_1uxm0j82",md:"_1uxm0j83",lg:"_1uxm0j84",xl:"_1uxm0j85",xxl:"_1uxm0j86",xxxl:"_1uxm0j87"},paddingY:{none:"_1uxm0j88",xs:"_1uxm0j89",sm:"_1uxm0j8a",md:"_1uxm0j8b",lg:"_1uxm0j8c",xl:"_1uxm0j8d",xxl:"_1uxm0j8e",xxxl:"_1uxm0j8f"},padding:{none:"_1uxm0j8g",xs:"_1uxm0j8h",sm:"_1uxm0j8i",md:"_1uxm0j8j",lg:"_1uxm0j8k",xl:"_1uxm0j8l",xxl:"_1uxm0j8m",xxxl:"_1uxm0j8n"},paddingLeft:{none:"_1uxm0j8o",xs:"_1uxm0j8p",sm:"_1uxm0j8q",md:"_1uxm0j8r",lg:"_1uxm0j8s",xl:"_1uxm0j8t",xxl:"_1uxm0j8u",xxxl:"_1uxm0j8v"},paddingRight:{none:"_1uxm0j8w",xs:"_1uxm0j8x",sm:"_1uxm0j8y",md:"_1uxm0j8z",lg:"_1uxm0j810",xl:"_1uxm0j811",xxl:"_1uxm0j812",xxxl:"_1uxm0j813"},paddingTop:{none:"_1uxm0j814",xs:"_1uxm0j815",sm:"_1uxm0j816",md:"_1uxm0j817",lg:"_1uxm0j818",xl:"_1uxm0j819",xxl:"_1uxm0j81a",xxxl:"_1uxm0j81b"},paddingBottom:{none:"_1uxm0j81c",xs:"_1uxm0j81d",sm:"_1uxm0j81e",md:"_1uxm0j81f",lg:"_1uxm0j81g",xl:"_1uxm0j81h",xxl:"_1uxm0j81i",xxxl:"_1uxm0j81j"}};const N=e=>{const o=[];e.display&&o.push(v[e.display]),e.color&&o.push(w[e.color]),e.background&&o.push(C[e.background]),e.bgColor&&o.push(S[e.bgColor]),e.align&&o.push(L[e.align]),e.justify&&o.push(V[e.justify]),e.aspectRatio&&o.push(T[e.aspectRatio]),e.padding&&(typeof e.padding=="string"&&o.push(y.padding[e.padding]),typeof e.padding=="object"&&q(e.padding,(t,l)=>{t&&o.push(y[l][t])})),e.borderColor&&o.push(R[e.borderColor]),e.borderSize&&o.push(O[e.borderSize]),e.borderRadius&&o.push(A[e.borderRadius]);const n=o.filter(Boolean);if(console.log({pureClassNames:n}),n.length===0)return"";console.log(o,...o);const a=h(...o);return console.log({r:a}),a},P=()=>{const e=new Map;return{get:o=>e.get(o),set:(o,n)=>{e.set(o,n)}}},b=P(),d=e=>{const o=b.get(e);if(o)return o;const n=s.exports.forwardRef(({display:a,color:t,background:l,bgColor:x,align:u,justify:m,aspectRatio:c,padding:f,borderColor:_,borderSize:p,borderRadius:g,...i},k)=>{const j=s.exports.useMemo(()=>N({display:a,color:t,background:l,bgColor:x,align:u,justify:m,aspectRatio:c,padding:f,borderColor:_,borderSize:p,borderRadius:g}),[a,t,l,x,u,m,c,f,_,p,g]);return console.log({boxClassNames:j,props:i}),s.exports.createElement(e,{...i,className:h(j,i.className),ref:k})});return b.set(e,n),n};try{d.displayName="createBox",d.__docgenInfo={description:"",displayName:"createBox",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/react/src/lib/internal/createBox.tsx#createBox"]={docgenInfo:d.__docgenInfo,name:"createBox",path:"packages/react/src/lib/internal/createBox.tsx#createBox"})}catch{}const r=d("div");try{r.displayName="Box",r.__docgenInfo={description:"",displayName:"Box",props:{display:{defaultValue:null,description:"The display property specifies the type of box, inline, block, table, grid, etc.",name:"display",required:!1,type:{name:'"table" | "flex" | "grid" | "none" | "block" | "inline" | "inlineBlock" | "tableCell" | "tableRow"'}},color:{defaultValue:null,description:"The display text color of the box.",name:"color",required:!1,type:{name:'"primary" | "secondary" | "danger" | "success" | "warning" | "info" | "surface" | "surfaceMd" | "surfaceHv"'}},background:{defaultValue:null,description:`The display background color of the box.
It also affects the color of the text inside.`,name:"background",required:!1,type:{name:"keyof Colors"}},bgColor:{defaultValue:null,description:"The background of the box, without affecting the text.",name:"bgColor",required:!1,type:{name:"keyof Colors"}},align:{defaultValue:null,description:"The alignment of the elements inside.",name:"align",required:!1,type:{name:'"center" | "end" | "start" | "stretch" | "spaceBetween" | "spaceAround"'}},justify:{defaultValue:null,description:"The justification of the elements inside.",name:"justify",required:!1,type:{name:'"center" | "end" | "start" | "stretch" | "spaceBetween" | "spaceAround"'}},aspectRatio:{defaultValue:null,description:"The aspect ratio of the box",name:"aspectRatio",required:!1,type:{name:"string"}},padding:{defaultValue:null,description:"The padding of the box.",name:"padding",required:!1,type:{name:'"none" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl" | Partial<Record<"padding" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingTop" | "paddingX" | "paddingY", "none" | ... 6 more ... | "xxxl">>'}},borderColor:{defaultValue:null,description:"The color of the border.",name:"borderColor",required:!1,type:{name:"keyof Colors"}},borderSize:{defaultValue:null,description:"The size of the border.",name:"borderSize",required:!1,type:{name:'"none" | "sm" | "md" | "lg" | "xl"'}},borderRadius:{defaultValue:null,description:"The radius of the border.",name:"borderRadius",required:!1,type:{name:'"none" | "round" | "sm" | "md" | "lg" | "xl" | "xxl"'}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/react/src/lib/Layout/Box/Box.tsx#Box"]={docgenInfo:r.__docgenInfo,name:"Box",path:"packages/react/src/lib/Layout/Box/Box.tsx#Box"})}catch{}var I={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ColumnsDemo } from '../Grid/Grid.stories';
import { Box } from './Box';

export default {
  name: 'Layout/Box',
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  background: 'primary',
  borderRadius: 'md',
  padding: 'lg',
  children: '',
};
`,locationsMap:{primary:{startLoc:{col:45,line:10},endLoc:{col:72,line:10},startBody:{col:45,line:10},endBody:{col:72,line:10}}}}},name:"Layout/Box",component:r};const z=e=>E(r,{...e}),B=z.bind({});B.args={background:"primary",borderRadius:"md",padding:"lg",children:""};const M=["Primary"];var H=Object.freeze(Object.defineProperty({__proto__:null,default:I,Primary:B,__namedExportsOrder:M},Symbol.toStringTag,{value:"Module"}));export{H as B,B as P,L as a,V as j};
//# sourceMappingURL=Box.stories.038c90ff.js.map