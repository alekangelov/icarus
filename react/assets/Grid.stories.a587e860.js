import{j as b,a as h,P as f}from"./Box.stories.6c2aa3ce.js";import{m as G,c as p}from"./loading.css.ts.vanilla.3b11953e.js";import{c as v}from"./vanilla-extract-recipes-createRuntimeFn.esm.c6390da1.js";import{r as g}from"./index.003a9cb9.js";import{j as r,a as l,F as I}from"./jsx-runtime.d19d38a0.js";import"./for.85b45d59.js";var w={colors:{primary:"var(--primary)",secondary:"var(--secondary)",danger:"var(--danger)",success:"var(--success)",warning:"var(--warning)",info:"var(--info)",surface:"var(--surface)",surfaceMd:"var(--surface-md)",surfaceHv:"var(--surface-hv)"},onColors:{primary:"var(--on-primary)",secondary:"var(--on-secondary)",danger:"var(--on-danger)",success:"var(--on-success)",warning:"var(--on-warning)",info:"var(--on-info)",surface:"var(--on-surface)",surfaceMd:"var(--on-surface-md)",surfaceHv:"var(--on-surface-hv)"},hoverColors:{primary:"var(--primary-hv)",secondary:"var(--secondary-hv)",danger:"var(--danger-hv)",success:"var(--success-hv)",warning:"var(--warning-hv)",info:"var(--info-hv)",surface:"var(--surface-hv)",surfaceMd:"var(--surface-md-hv)",surfaceHv:"var(--surface-hv-hv)"},activeColors:{primary:"var(--primary-ac)",secondary:"var(--secondary-ac)",danger:"var(--danger-ac)",success:"var(--success-ac)",warning:"var(--warning-ac)",info:"var(--info-ac)",surface:"var(--surface-ac)",surfaceMd:"var(--surface-md-ac)",surfaceHv:"var(--surface-hv-ac)"},font:{size:{xs:"var(--font-xs)",sm:"var(--font-sm)",md:"var(--font-md)",lg:"var(--font-lg)",xl:"var(--font-xl)",xxl:"var(--font-xxl)",xxxl:"var(--font-xxxl)"},weight:{light:"var(--font-light)",regular:"var(--font-regular)",medium:"var(--font-medium)",bold:"var(--font-bold)"}},spacing:{none:"var(--spacing-none)",xs:"var(--spacing-xs)",sm:"var(--spacing-sm)",md:"var(--spacing-md)",lg:"var(--spacing-lg)",xl:"var(--spacing-xl)",xxl:"var(--spacing-xxl)",xxxl:"var(--spacing-xxxl)"},border:{radius:{none:"var(--radius-none)",sm:"var(--radius-sm)",md:"var(--radius-md)",lg:"var(--radius-lg)",xl:"var(--radius-xl)",xxl:"var(--radius-xxl)",round:"var(--radius-round)"},size:{none:"var(--border-size-none)",sm:"var(--border-size-sm)",md:"var(--border-size-md)",lg:"var(--border-size-lg)",xl:"var(--border-size-xl)"},color:{primary:"var(--primary)",secondary:"var(--secondary)",danger:"var(--danger)",success:"var(--success)",warning:"var(--warning)",info:"var(--info)",surface:"var(--surface)",surfaceMd:"var(--surface-md)",surfaceHv:"var(--surface-hv)"}},elevation:{none:"var(--elevation-none)",sm:"var(--elevation-sm)",md:"var(--elevation-md)",lg:"var(--elevation-lg)",xl:"var(--elevation-xl)",xxl:"var(--elevation-xxl)"},transition:{speed:"var(--transition-speed)",easing:"var(--transition-easing)"},zIndex:{default:"var(--z-index-default)",modal:"var(--z-index-modal)",overlay:"var(--z-index-overlay)"}};function u(e){var a=e.match(/^var\((.*)\)$/);return a?a[1]:e}function S(e,a){var n=e;for(var s of a){if(!(s in n))throw new Error("Path ".concat(a.join(" -> ")," does not exist in object"));n=n[s]}return n}function z(e,a){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],s=e.constructor();for(var d in e){var i=e[d],o=[...n,d];typeof i=="string"||typeof i=="number"||i==null?s[d]=a(i,o):typeof i=="object"&&!Array.isArray(i)?s[d]=z(i,a,o):console.warn('Skipping invalid key "'.concat(o.join("."),'". Should be a string, number, null or object. Received: "').concat(Array.isArray(i)?"Array":typeof i,'"'))}return s}function C(e,a){var n={};if(typeof a=="object"){var s=e;z(a,(o,c)=>{var m=S(s,c);n[u(m)]=String(o)})}else{var d=e;for(var i in d)n[u(i)]=d[i]}return Object.defineProperty(n,"toString",{value:function(){return Object.keys(this).map(c=>"".concat(c,":").concat(this[c])).join(";")},writable:!1}),n}var L="var(--q4tdfz0)",j=v({defaultClassName:"q4tdfz4",variantClassNames:{size:{1:"q4tdfz5",2:"q4tdfz6",3:"q4tdfz7",4:"q4tdfz8",5:"q4tdfz9",6:"q4tdfza",7:"q4tdfzb",8:"q4tdfzc",9:"q4tdfzd",10:"q4tdfze",11:"q4tdfzf",12:"q4tdfzg"},tabletSize:{1:"q4tdfzh",2:"q4tdfzi",3:"q4tdfzj",4:"q4tdfzk",5:"q4tdfzl",6:"q4tdfzm",7:"q4tdfzn",8:"q4tdfzo",9:"q4tdfzp",10:"q4tdfzq",11:"q4tdfzr",12:"q4tdfzs"},laptopSize:{1:"q4tdfzt",2:"q4tdfzu",3:"q4tdfzv",4:"q4tdfzw",5:"q4tdfzx",6:"q4tdfzy",7:"q4tdfzz",8:"q4tdfz10",9:"q4tdfz11",10:"q4tdfz12",11:"q4tdfz13",12:"q4tdfz14"},desktopSize:{1:"q4tdfz15",2:"q4tdfz16",3:"q4tdfz17",4:"q4tdfz18",5:"q4tdfz19",6:"q4tdfz1a",7:"q4tdfz1b",8:"q4tdfz1c",9:"q4tdfz1d",10:"q4tdfz1e",11:"q4tdfz1f",12:"q4tdfz1g"},offset:{1:"q4tdfz1h",2:"q4tdfz1i",3:"q4tdfz1j",4:"q4tdfz1k",5:"q4tdfz1l",6:"q4tdfz1m",7:"q4tdfz1n",8:"q4tdfz1o",9:"q4tdfz1p",10:"q4tdfz1q",11:"q4tdfz1r",12:"q4tdfz1s"},tabletOffset:{1:"q4tdfz1t",2:"q4tdfz1u",3:"q4tdfz1v",4:"q4tdfz1w",5:"q4tdfz1x",6:"q4tdfz1y",7:"q4tdfz1z",8:"q4tdfz20",9:"q4tdfz21",10:"q4tdfz22",11:"q4tdfz23",12:"q4tdfz24"},laptopOffset:{1:"q4tdfz25",2:"q4tdfz26",3:"q4tdfz27",4:"q4tdfz28",5:"q4tdfz29",6:"q4tdfz2a",7:"q4tdfz2b",8:"q4tdfz2c",9:"q4tdfz2d",10:"q4tdfz2e",11:"q4tdfz2f",12:"q4tdfz2g"},desktopOffset:{1:"q4tdfz2h",2:"q4tdfz2i",3:"q4tdfz2j",4:"q4tdfz2k",5:"q4tdfz2l",6:"q4tdfz2m",7:"q4tdfz2n",8:"q4tdfz2o",9:"q4tdfz2p",10:"q4tdfz2q",11:"q4tdfz2r",12:"q4tdfz2s"}},defaultVariants:{},compoundVariants:[]}),B=v({defaultClassName:"q4tdfz1",variantClassNames:{wrap:{wrap:"q4tdfz2",noWrap:"q4tdfz3"}},defaultVariants:{wrap:"wrap"},compoundVariants:[]});const{spacing:k}=w,A=e=>e?C({gap:L},{gap:k[e]}):{},M=g.exports.forwardRef(({wrap:e,gap:a,align:n,justify:s,...d},i)=>{const o=G(A(a),d.style);return r("div",{...d,ref:i,className:p(B({wrap:e}),d.className,n&&h[n],s&&b[s]),style:o})}),R=g.exports.forwardRef(({size:e,tabletSize:a,desktopSize:n,laptopSize:s,offset:d,tabletOffset:i,laptopOffset:o,desktopOffset:c,...m},x)=>r("div",{...m,ref:x,className:p(j({size:e,tabletSize:a,desktopSize:n,laptopSize:s,offset:d,tabletOffset:i,laptopOffset:o,desktopOffset:c}),m.className)})),q=M;q.Item=R;const t=q;try{t.displayName="Grid",t.__docgenInfo={description:"",displayName:"Grid",props:{gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:'"none" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl"'}},wrap:{defaultValue:null,description:"",name:"wrap",required:!1,type:{name:'"wrap" | "noWrap"'}},justify:{defaultValue:null,description:"",name:"justify",required:!1,type:{name:'"center" | "end" | "start" | "stretch" | "spaceBetween" | "spaceAround"'}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:'"center" | "end" | "start" | "stretch" | "spaceBetween" | "spaceAround"'}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/react/src/lib/Layout/Grid/Grid.tsx#Grid"]={docgenInfo:t.__docgenInfo,name:"Grid",path:"packages/react/src/lib/Layout/Grid/Grid.tsx#Grid"})}catch{}var K={parameters:{storySource:{source:`import { ColType } from '@icarus/core';
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
`,locationsMap:{primary:{startLoc:{col:73,line:22},endLoc:{col:1,line:27},startBody:{col:73,line:22},endBody:{col:1,line:27}},secondary:{startLoc:{col:61,line:37},endLoc:{col:1,line:66},startBody:{col:61,line:37},endBody:{col:1,line:66}},"columns-demo":{startLoc:{col:27,line:90},endLoc:{col:1,line:108},startBody:{col:27,line:90},endBody:{col:1,line:108}},"offset-demo":{startLoc:{col:26,line:110},endLoc:{col:1,line:129},startBody:{col:26,line:110},endBody:{col:1,line:129}}}}},title:"Layout/Grid",component:t};const O=(e,a)=>r(t.Item,{size:"3",children:r("div",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates animi officiis eum maiores nihil odio eos sequi! Minima consequatur necessitatibus, expedita sed laudantium deserunt veniam facere laboriosam earum quas."})},a),T=({items:e=4,...a})=>r(t,{...a,children:Array.from({length:e}).map(O)}),D=T.bind({});D.args={gap:"lg",items:4,align:"center",justify:"center"};const N=e=>l(t,{...e,children:[r(t.Item,{size:"3",children:r("div",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates animi officiis eum maiores nihil odio eos sequi! Minima consequatur necessitatibus, expedita sed laudantium deserunt veniam facere laboriosam earum quas."})}),r(t.Item,{size:"9",children:r("div",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates animi officiis eum maiores nihil odio eos sequi! Minima consequatur necessitatibus, expedita sed laudantium deserunt veniam facere laboriosam earum quas."})}),r(t.Item,{size:"12",children:r("div",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates animi officiis eum maiores nihil odio eos sequi! Minima consequatur necessitatibus, expedita sed laudantium deserunt veniam facere laboriosam earum quas."})})]}),P=N.bind({});P.args={gap:"lg",align:"start",justify:"start"};const y=["1","2","3","4","5","6","7","8","9","10","11","12"],W=()=>r(t,{gap:"md",children:y.map(e=>e!=="12"&&l(I,{children:[r(t.Item,{size:`${e}`,children:r(f,{background:"primary",padding:"lg",borderRadius:"md"})}),r(t.Item,{size:`${12-parseInt(e)}`,children:r(f,{background:"primary",padding:"lg",borderRadius:"md"})})]}))}),Y=()=>l(t,{gap:"md",children:[r(t.Item,{size:"12",children:r(f,{background:"primary",padding:"lg",borderRadius:"md"})}),y.map(e=>12-parseInt(e)>0&&r(t.Item,{offset:e,size:`${12-parseInt(e)}`,children:r(f,{background:"primary",padding:"lg",borderRadius:"md"})}))]}),J=["Primary","Secondary","ColumnsDemo","OffsetDemo"];export{W as ColumnsDemo,Y as OffsetDemo,D as Primary,P as Secondary,J as __namedExportsOrder,K as default};
//# sourceMappingURL=Grid.stories.a587e860.js.map
