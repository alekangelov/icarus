import{j as G,a as h,P as f}from"./Box.stories.c4534393.js";import{m as x,c as p}from"./dialog.css.ts.vanilla.4a4d5af7.js";import{v as I}from"./index.css.4d0639d6.js";import{c as q}from"./vanilla-extract-recipes-createRuntimeFn.esm.c6390da1.js";import{r as z}from"./index.003a9cb9.js";import{j as t,a as l,F as S}from"./jsx-runtime.d19d38a0.js";import"./for.85b45d59.js";function u(e){var i=e.match(/^var\((.*)\)$/);return i?i[1]:e}function L(e,i){var n=e;for(var d of i){if(!(d in n))throw new Error("Path ".concat(i.join(" -> ")," does not exist in object"));n=n[d]}return n}function g(e,i){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],d=e.constructor();for(var s in e){var r=e[s],o=[...n,s];typeof r=="string"||typeof r=="number"||r==null?d[s]=i(r,o):typeof r=="object"&&!Array.isArray(r)?d[s]=g(r,i,o):console.warn('Skipping invalid key "'.concat(o.join("."),'". Should be a string, number, null or object. Received: "').concat(Array.isArray(r)?"Array":typeof r,'"'))}return d}function j(e,i){var n={};if(typeof i=="object"){var d=e;g(i,(o,m)=>{var c=L(d,m);n[u(c)]=String(o)})}else{var s=e;for(var r in s)n[u(r)]=s[r]}return Object.defineProperty(n,"toString",{value:function(){return Object.keys(this).map(m=>"".concat(m,":").concat(this[m])).join(";")},writable:!1}),n}var C="var(--q4tdfz0)",w=q({defaultClassName:"q4tdfz4",variantClassNames:{size:{1:"q4tdfz5",2:"q4tdfz6",3:"q4tdfz7",4:"q4tdfz8",5:"q4tdfz9",6:"q4tdfza",7:"q4tdfzb",8:"q4tdfzc",9:"q4tdfzd",10:"q4tdfze",11:"q4tdfzf",12:"q4tdfzg"},tabletSize:{1:"q4tdfzh",2:"q4tdfzi",3:"q4tdfzj",4:"q4tdfzk",5:"q4tdfzl",6:"q4tdfzm",7:"q4tdfzn",8:"q4tdfzo",9:"q4tdfzp",10:"q4tdfzq",11:"q4tdfzr",12:"q4tdfzs"},laptopSize:{1:"q4tdfzt",2:"q4tdfzu",3:"q4tdfzv",4:"q4tdfzw",5:"q4tdfzx",6:"q4tdfzy",7:"q4tdfzz",8:"q4tdfz10",9:"q4tdfz11",10:"q4tdfz12",11:"q4tdfz13",12:"q4tdfz14"},desktopSize:{1:"q4tdfz15",2:"q4tdfz16",3:"q4tdfz17",4:"q4tdfz18",5:"q4tdfz19",6:"q4tdfz1a",7:"q4tdfz1b",8:"q4tdfz1c",9:"q4tdfz1d",10:"q4tdfz1e",11:"q4tdfz1f",12:"q4tdfz1g"},offset:{1:"q4tdfz1h",2:"q4tdfz1i",3:"q4tdfz1j",4:"q4tdfz1k",5:"q4tdfz1l",6:"q4tdfz1m",7:"q4tdfz1n",8:"q4tdfz1o",9:"q4tdfz1p",10:"q4tdfz1q",11:"q4tdfz1r",12:"q4tdfz1s"},tabletOffset:{1:"q4tdfz1t",2:"q4tdfz1u",3:"q4tdfz1v",4:"q4tdfz1w",5:"q4tdfz1x",6:"q4tdfz1y",7:"q4tdfz1z",8:"q4tdfz20",9:"q4tdfz21",10:"q4tdfz22",11:"q4tdfz23",12:"q4tdfz24"},laptopOffset:{1:"q4tdfz25",2:"q4tdfz26",3:"q4tdfz27",4:"q4tdfz28",5:"q4tdfz29",6:"q4tdfz2a",7:"q4tdfz2b",8:"q4tdfz2c",9:"q4tdfz2d",10:"q4tdfz2e",11:"q4tdfz2f",12:"q4tdfz2g"},desktopOffset:{1:"q4tdfz2h",2:"q4tdfz2i",3:"q4tdfz2j",4:"q4tdfz2k",5:"q4tdfz2l",6:"q4tdfz2m",7:"q4tdfz2n",8:"q4tdfz2o",9:"q4tdfz2p",10:"q4tdfz2q",11:"q4tdfz2r",12:"q4tdfz2s"}},defaultVariants:{},compoundVariants:[]}),B=q({defaultClassName:"q4tdfz1",variantClassNames:{wrap:{wrap:"q4tdfz2",noWrap:"q4tdfz3"}},defaultVariants:{wrap:"wrap"},compoundVariants:[]});const{spacing:k}=I,A=e=>e?j({gap:C},{gap:k[e]}):{},R=z.exports.forwardRef(({wrap:e,gap:i,align:n,justify:d,...s},r)=>{const o=x(A(i),s.style);return t("div",{...s,ref:r,className:p(B({wrap:e}),s.className,n&&h[n],d&&G[d]),style:o})}),O=z.exports.forwardRef(({size:e,tabletSize:i,desktopSize:n,laptopSize:d,offset:s,tabletOffset:r,laptopOffset:o,desktopOffset:m,...c},v)=>t("div",{...c,ref:v,className:p(w({size:e,tabletSize:i,desktopSize:n,laptopSize:d,offset:s,tabletOffset:r,laptopOffset:o,desktopOffset:m}),c.className)})),y=R;y.Item=O;const a=y;try{a.displayName="Grid",a.__docgenInfo={description:"",displayName:"Grid",props:{gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:'"none" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl"'}},wrap:{defaultValue:null,description:"",name:"wrap",required:!1,type:{name:'"wrap" | "noWrap"'}},justify:{defaultValue:null,description:"",name:"justify",required:!1,type:{name:'"center" | "end" | "start" | "stretch" | "spaceBetween" | "spaceAround"'}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:'"center" | "end" | "start" | "stretch" | "spaceBetween" | "spaceAround"'}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/react/src/lib/Layout/Grid/Grid.tsx#Grid"]={docgenInfo:a.__docgenInfo,name:"Grid",path:"packages/react/src/lib/Layout/Grid/Grid.tsx#Grid"})}catch{}var Y={parameters:{storySource:{source:`import { ColType } from '@icarus/core';
import { ComponentMeta, Story } from '@storybook/react';
import { Primary as Box } from '../Box/Box.stories';
import { Grid } from './Grid';

export default {
  title: 'Layout/Grid',
  component: Grid,
} as ComponentMeta<typeof Grid>;

const renderItem = (_: unknown, key: number) => (
  <Grid.Item key={key} size="3">
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
      voluptates animi officiis eum maiores nihil odio eos sequi! Minima
      consequatur necessitatibus, expedita sed laudantium deserunt veniam facere
      laboriosam earum quas.
    </div>
  </Grid.Item>
);

const Template: Story<Parameters<typeof Grid>[0] & { items?: number }> = ({
  items = 4,
  ...args
}) => {
  return <Grid {...args}>{Array.from({ length: items }).map(renderItem)}</Grid>;
};

export const Primary = Template.bind({});
Primary.args = {
  gap: 'lg',
  items: 4,
  align: 'center',
  justify: 'center',
};

const SecondaryTemplate: Story<Parameters<typeof Grid>[0]> = (args) => {
  return (
    <Grid {...args}>
      <Grid.Item size="3">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          voluptates animi officiis eum maiores nihil odio eos sequi! Minima
          consequatur necessitatibus, expedita sed laudantium deserunt veniam
          facere laboriosam earum quas.
        </div>
      </Grid.Item>
      <Grid.Item size="9">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          voluptates animi officiis eum maiores nihil odio eos sequi! Minima
          consequatur necessitatibus, expedita sed laudantium deserunt veniam
          facere laboriosam earum quas.
        </div>
      </Grid.Item>
      <Grid.Item size="12">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          voluptates animi officiis eum maiores nihil odio eos sequi! Minima
          consequatur necessitatibus, expedita sed laudantium deserunt veniam
          facere laboriosam earum quas.
        </div>
      </Grid.Item>
    </Grid>
  );
};

export const Secondary = SecondaryTemplate.bind({});
Secondary.args = {
  gap: 'lg',
  align: 'start',
  justify: 'start',
};

const colArray = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
];

export const ColumnsDemo = () => {
  return (
    <Grid gap="md">
      {colArray.map(
        (col) =>
          col !== '12' && (
            <>
              <Grid.Item size={\`\${col}\` as ColType}>
                <Box background="primary" padding="lg" borderRadius="md" />
              </Grid.Item>
              <Grid.Item size={\`\${12 - parseInt(col)}\` as ColType}>
                <Box background="primary" padding="lg" borderRadius="md" />
              </Grid.Item>
            </>
          )
      )}
    </Grid>
  );
};

export const OffsetDemo = () => {
  return (
    <Grid gap="md">
      <Grid.Item size={'12'}>
        <Box background="primary" padding="lg" borderRadius="md" />
      </Grid.Item>
      {colArray.map(
        (col) =>
          12 - parseInt(col) > 0 && (
            <Grid.Item
              offset={col as ColType}
              size={\`\${12 - parseInt(col)}\` as ColType}
            >
              <Box background="primary" padding="lg" borderRadius="md" />
            </Grid.Item>
          )
      )}
    </Grid>
  );
};
`,locationsMap:{primary:{startLoc:{col:73,line:22},endLoc:{col:1,line:27},startBody:{col:73,line:22},endBody:{col:1,line:27}},secondary:{startLoc:{col:61,line:37},endLoc:{col:1,line:66},startBody:{col:61,line:37},endBody:{col:1,line:66}},"columns-demo":{startLoc:{col:27,line:90},endLoc:{col:1,line:108},startBody:{col:27,line:90},endBody:{col:1,line:108}},"offset-demo":{startLoc:{col:26,line:110},endLoc:{col:1,line:129},startBody:{col:26,line:110},endBody:{col:1,line:129}}}}},title:"Layout/Grid",component:a};const T=(e,i)=>t(a.Item,{size:"3",children:t("div",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates animi officiis eum maiores nihil odio eos sequi! Minima consequatur necessitatibus, expedita sed laudantium deserunt veniam facere laboriosam earum quas."})},i),D=({items:e=4,...i})=>t(a,{...i,children:Array.from({length:e}).map(T)}),M=D.bind({});M.args={gap:"lg",items:4,align:"center",justify:"center"};const N=e=>l(a,{...e,children:[t(a.Item,{size:"3",children:t("div",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates animi officiis eum maiores nihil odio eos sequi! Minima consequatur necessitatibus, expedita sed laudantium deserunt veniam facere laboriosam earum quas."})}),t(a.Item,{size:"9",children:t("div",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates animi officiis eum maiores nihil odio eos sequi! Minima consequatur necessitatibus, expedita sed laudantium deserunt veniam facere laboriosam earum quas."})}),t(a.Item,{size:"12",children:t("div",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates animi officiis eum maiores nihil odio eos sequi! Minima consequatur necessitatibus, expedita sed laudantium deserunt veniam facere laboriosam earum quas."})})]}),P=N.bind({});P.args={gap:"lg",align:"start",justify:"start"};const b=["1","2","3","4","5","6","7","8","9","10","11","12"],H=()=>t(a,{gap:"md",children:b.map(e=>e!=="12"&&l(S,{children:[t(a.Item,{size:`${e}`,children:t(f,{background:"primary",padding:"lg",borderRadius:"md"})}),t(a.Item,{size:`${12-parseInt(e)}`,children:t(f,{background:"primary",padding:"lg",borderRadius:"md"})})]}))}),J=()=>l(a,{gap:"md",children:[t(a.Item,{size:"12",children:t(f,{background:"primary",padding:"lg",borderRadius:"md"})}),b.map(e=>12-parseInt(e)>0&&t(a.Item,{offset:e,size:`${12-parseInt(e)}`,children:t(f,{background:"primary",padding:"lg",borderRadius:"md"})}))]}),Q=["Primary","Secondary","ColumnsDemo","OffsetDemo"];export{H as ColumnsDemo,J as OffsetDemo,M as Primary,P as Secondary,Q as __namedExportsOrder,Y as default};
//# sourceMappingURL=Grid.stories.1c9fabb6.js.map
