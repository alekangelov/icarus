import{c as x}from"./popover.css.ts.vanilla.97a3c86d.js";import{c as h}from"./vanilla-extract-recipes-createRuntimeFn.esm.c6390da1.js";import{c as v,m as S}from"./mergeRefs.e715c294.js";import{r as s}from"./index.003a9cb9.js";import{S as B}from"./Spacing.a60d7df5.js";import{j as b,a as C}from"./jsx-runtime.d19d38a0.js";var R=h({defaultClassName:"_1ypajcp0",variantClassNames:{color:{primary:"_1ypajcp1",secondary:"_1ypajcp2",danger:"_1ypajcp3",success:"_1ypajcp4",warning:"_1ypajcp5",info:"_1ypajcp6",surface:"_1ypajcp7",surfaceMd:"_1ypajcp8",surfaceHv:"_1ypajcp9",shadow:"_1ypajcpa"},size:{small:"_1ypajcpb",medium:"_1ypajcpc",large:"_1ypajcpd",smallSymmetric:"_1ypajcpe",mediumSymmetric:"_1ypajcpf",largeSymmetric:"_1ypajcpg"},elevation:{none:"_1ypajcph",sm:"_1ypajcpi",md:"_1ypajcpj",lg:"_1ypajcpk",xl:"_1ypajcpl",xxl:"_1ypajcpm"},radius:{none:"_1ypajcpn",sm:"_1ypajcpo",md:"_1ypajcpp",lg:"_1ypajcpq",xl:"_1ypajcpr",xxl:"_1ypajcps",round:"_1ypajcpt"},floating:{true:"_1ypajcpu"},fullWidth:{true:"_1ypajcpv"}},defaultVariants:{color:"primary",size:"medium",radius:"sm",floating:!1,elevation:"md",fullWidth:!1},compoundVariants:[]}),V="_1ypajcpx";const q=v("ripple"),E=n=>{const e=n.target.getBoundingClientRect(),a=n.clientX-e.left,l=n.clientY-e.top;return{x:a,y:l}},N=(n="button")=>{let e,a;return{event:l=>{const{target:i}=l;if(!i||!document||typeof window=="undefined")return;const p=i;let t=p;p.tagName!=="BUTTON"&&(t=p.closest(n));const r=document.createElement("span"),{x:m,y:d}=E(l);r.className=V,r.style.left=`${m}px`,r.style.top=`${d}px`,r.id=q(),t==null||t.appendChild(r),a=()=>{r.remove()},e=setTimeout(a,500)},cleanup:()=>{e&&(clearTimeout(e),a==null||a())}}};var O="_8r483a0";const u=s.exports.forwardRef(({color:n="primary",size:e="medium",elevation:a="md",fullWidth:l,floating:i,radius:p="md",icon:t,iconPosition:r="left",gap:m="md",disabled:d,...o},_)=>{const f=s.exports.Children.count(o.children)===1,c=s.exports.useRef(null);return s.exports.useEffect(()=>{var y;const{event:g,cleanup:j}=N();return(y=c==null?void 0:c.current)==null||y.addEventListener("click",g),()=>j()},[c]),b("button",{...o,className:x(R({color:n,size:f&&!(e!=null&&e.includes("Symmetric"))&&typeof o.children!="string"?`${e||"small"}Symmetric`:e,elevation:a,fullWidth:l,floating:i,radius:f&&!p?"round":p}),d&&O),ref:S([_,c]),children:C(B,{gap:m||"md",align:"center",justify:"center",children:[t&&r==="left"&&t,o.children,t&&r==="right"&&t]})})});try{u.displayName="Button",u.__docgenInfo={description:"",displayName:"Button",props:{color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:'"primary" | "secondary" | "danger" | "success" | "warning" | "info" | "surface" | "surfaceMd" | "surfaceHv" | "shadow"'}},gap:{defaultValue:{value:"md"},description:"",name:"gap",required:!1,type:{name:'"none" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl"'}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:'"small" | "medium" | "large" | "smallSymmetric" | "mediumSymmetric" | "largeSymmetric"'}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"Element"}},radius:{defaultValue:{value:"md"},description:"",name:"radius",required:!1,type:{name:'"none" | "round" | "sm" | "md" | "lg" | "xl" | "xxl"'}},elevation:{defaultValue:{value:"md"},description:"",name:"elevation",required:!1,type:{name:'"none" | "sm" | "md" | "lg" | "xl" | "xxl"'}},floating:{defaultValue:null,description:"",name:"floating",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},iconPosition:{defaultValue:{value:"left"},description:"",name:"iconPosition",required:!1,type:{name:'"left" | "right"'}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/react/src/lib/General/Button/Button.tsx#Button"]={docgenInfo:u.__docgenInfo,name:"Button",path:"packages/react/src/lib/General/Button/Button.tsx#Button"})}catch{}export{u as B};
//# sourceMappingURL=Button.faa1b122.js.map
