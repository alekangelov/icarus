import{c as x}from"./dialog.css.ts.vanilla.4a4d5af7.js";import{c as h}from"./vanilla-extract-recipes-createRuntimeFn.esm.c6390da1.js";import{r as s}from"./index.003a9cb9.js";import{S as v}from"./Spacing.2543bef8.js";import{j as S,a as B}from"./jsx-runtime.d19d38a0.js";var b=h({defaultClassName:"_1ypajcp0",variantClassNames:{color:{primary:"_1ypajcp1",secondary:"_1ypajcp2",danger:"_1ypajcp3",success:"_1ypajcp4",warning:"_1ypajcp5",info:"_1ypajcp6",surface:"_1ypajcp7",surfaceMd:"_1ypajcp8",surfaceHv:"_1ypajcp9"},size:{small:"_1ypajcpa",medium:"_1ypajcpb",large:"_1ypajcpc",smallSymmetric:"_1ypajcpd",mediumSymmetric:"_1ypajcpe",largeSymmetric:"_1ypajcpf"},elevation:{none:"_1ypajcpg",sm:"_1ypajcph",md:"_1ypajcpi",lg:"_1ypajcpj",xl:"_1ypajcpk",xxl:"_1ypajcpl"},radius:{none:"_1ypajcpm",sm:"_1ypajcpn",md:"_1ypajcpo",lg:"_1ypajcpp",xl:"_1ypajcpq",xxl:"_1ypajcpr",round:"_1ypajcps"},floating:{true:"_1ypajcpt"},fullWidth:{true:"_1ypajcpu"}},defaultVariants:{color:"primary",size:"medium",radius:"sm",floating:!1,elevation:"md",fullWidth:!1},compoundVariants:[]}),C="_1ypajcpw";const R=t=>{let e=0;return()=>`${t}-${e++}`},V=R("ripple"),q=t=>{const e=t.target.getBoundingClientRect(),a=t.clientX-e.left,l=t.clientY-e.top;return{x:a,y:l}},E=(t="button")=>{let e,a;return{event:l=>{const{target:p}=l;if(!p||!document||typeof window=="undefined")return;const c=p;let n=c;c.tagName!=="BUTTON"&&(n=c.closest(t));const r=document.createElement("span"),{x:u,y:m}=q(l);r.className=C,r.style.left=`${u}px`,r.style.top=`${m}px`,r.id=V(),n==null||n.appendChild(r),a=()=>{r.remove()},e=setTimeout(a,500)},cleanup:()=>{e&&(clearTimeout(e),a==null||a())}}};var N="_8r483a0";function O(t){return e=>{t.forEach(a=>{typeof a=="function"?a(e):a!=null&&(a.current=e)})}}const d=s.exports.forwardRef(({color:t="primary",size:e="medium",elevation:a="md",fullWidth:l,floating:p,radius:c="md",icon:n,iconPosition:r="left",gap:u="md",disabled:m,...o},_)=>{const f=s.exports.Children.count(o.children)===1,i=s.exports.useRef(null);return s.exports.useEffect(()=>{var y;const{event:g,cleanup:j}=E();return(y=i==null?void 0:i.current)==null||y.addEventListener("click",g),()=>j()},[i]),S("button",{...o,className:x(b({color:t,size:f&&!(e!=null&&e.includes("Symmetric"))&&typeof o.children!="string"?`${e||"small"}Symmetric`:e,elevation:a,fullWidth:l,floating:p,radius:f&&!c?"round":c}),m&&N),ref:O([_,i]),children:B(v,{gap:u||"md",align:"center",justify:"center",children:[n&&r==="left"&&n,o.children,n&&r==="right"&&n]})})});try{d.displayName="Button",d.__docgenInfo={description:"",displayName:"Button",props:{color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:'"primary" | "secondary" | "danger" | "success" | "warning" | "info" | "surface" | "surfaceMd" | "surfaceHv"'}},gap:{defaultValue:{value:"md"},description:"",name:"gap",required:!1,type:{name:'"none" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl"'}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:'"small" | "medium" | "large" | "smallSymmetric" | "mediumSymmetric" | "largeSymmetric"'}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"Element"}},radius:{defaultValue:{value:"md"},description:"",name:"radius",required:!1,type:{name:'"none" | "round" | "sm" | "md" | "lg" | "xl" | "xxl"'}},elevation:{defaultValue:{value:"md"},description:"",name:"elevation",required:!1,type:{name:'"none" | "sm" | "md" | "lg" | "xl" | "xxl"'}},floating:{defaultValue:null,description:"",name:"floating",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},iconPosition:{defaultValue:{value:"left"},description:"",name:"iconPosition",required:!1,type:{name:'"left" | "right"'}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/react/src/lib/General/Button/Button.tsx#Button"]={docgenInfo:d.__docgenInfo,name:"Button",path:"packages/react/src/lib/General/Button/Button.tsx#Button"})}catch{}export{d as B};
//# sourceMappingURL=Button.9491c0f7.js.map
