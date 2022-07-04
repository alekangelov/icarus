import{c as y}from"./dialog.css.ts.vanilla.465b1c21.js";import{v as b}from"./index.css.8f2eb22a.js";import{r as a}from"./index.003a9cb9.js";import{u as D,P as E}from"./Portal.b7efe8fb.js";import{j as f,F as x,a as $}from"./jsx-runtime.d19d38a0.js";var O="tmkdjr0",_="tmkdjr1",k="tmkdjr2";const C=e=>`${e} 0.5s ${b.transition.easing}`,P=e=>C(e?_:k),S=(e,n)=>{const{left:t,top:s}=n;return console.log(`isOutOfBoundsInner: ${e}`,{left:t,top:s}),typeof window=="undefined"?!1:s<0||t<0},h=e=>{switch(e){case"left":return"right";case"right":return"left";case"top":return"bottom";case"bottom":return"top";default:return"left"}},V=(e,n,t)=>{switch(e){case"left":return{top:`${n.top}px`,left:`calc(${n.left}px - ${t})`};case"right":return{top:`${n.top}px`,left:`calc(${n.left}px + ${t})`};case"top":return{left:`${n.left}px`,top:`calc(${n.top}px - ${t})`};case"bottom":return{left:`${n.left}px`,top:`calc(${n.top}px + ${t})`};default:return n}},v=(e,n,t)=>{let s={top:0,left:0};if(!n||!t)return s;const r=n.getBoundingClientRect(),o=t.getBoundingClientRect();return e==="left"&&(s={left:o.left-r.width,top:o.top+o.height/2-r.height/2}),e==="right"&&(s={left:o.left+o.width,top:o.top+o.height/2-r.height/2}),e==="top"&&(s={left:o.left+o.width/2-r.width/2,top:o.top-r.height}),e==="bottom"&&(s={left:o.left+o.width/2-r.width/2,top:o.top+o.height}),S(e,s)&&(s=v(h(e),n,t),s={...s,position:h(e)}),s},L=(e,n,t)=>{const s=b.spacing.md,r=v(e,n,t),o=V(r.position||e,r,s),l={top:typeof o.top!="string"?`${o.top}`:o.top,left:typeof o.left!="string"?`${o.left}`:o.left};return console.log({calculatedPosition:o,finalPosition:l}),l},A=typeof window!="undefined"?a.exports.useLayoutEffect:a.exports.useEffect;function w(e,n,t,s){const r=a.exports.useRef(n);A(()=>{r.current=n},[n]),a.exports.useEffect(()=>{const o=(t==null?void 0:t.current)||window;if(!(o&&o.addEventListener))return;const l=i=>r.current(i);return o.addEventListener(e,l,s),()=>{o.removeEventListener(e,l)}},[e,t,s])}function I(e,n,t="mousedown"){w(t,s=>{const r=e==null?void 0:e.current;!r||r.contains(s.target)||n(s)})}const R=e=>!e,B=(e=!1)=>{const[n,t]=a.exports.useState(e),s=a.exports.useCallback(()=>t(R),[t]),r=a.exports.useCallback(()=>t(!0),[t]),o=a.exports.useCallback(()=>t(!1),[t]);return{value:n,toggle:s,setTrue:r,setFalse:o,setValue:t}},j=({children:e,visible:n=!1,position:t="top",parentElement:s,className:r,toggle:o})=>{console.log("content",e);const l=a.exports.useRef(null),[i,c]=a.exports.useState({left:"0px",top:"0px"});return a.exports.useEffect(()=>{const u=L(t,l.current,s);console.log({finalPosition:u,positionProp:t,ref:l.current,parentElement:s}),c(u)},[s,t]),I(l,o,"mousedown"),f(E,{children:f("div",{ref:l,className:y(O,r),style:{animation:P(n),...i},children:e})})},d=({children:e,triggerable:n=!0,content:t,visible:s=!1,className:r})=>{if(console.log({content:t}),a.exports.Children.count(e)>1)throw Error("Popover can't have more than one child");const{value:o,toggle:l,setValue:i}=B(s),c=n&&o,u=D(c,500),p=a.exports.useRef(null);a.exports.useEffect(()=>{i(s)},[i,s]);const g=a.exports.useCallback(m=>{m.preventDefault(),m.stopPropagation(),l()},[l]);return w("mousedown",g,p),!n||!t?f(x,{children:e}):$(x,{children:[u&&f(j,{visible:c,parentElement:p.current,className:r,toggle:g,children:t}),a.exports.cloneElement(e,{ref:p})]})};try{d.displayName="Dialog",d.__docgenInfo={description:"",displayName:"Dialog",props:{content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"Element"}},visible:{defaultValue:{value:!1},description:"",name:"visible",required:!1,type:{name:"boolean"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:"DialogPositions"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},triggerable:{defaultValue:{value:!0},description:"",name:"triggerable",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/react/src/lib/Feedback/Dialog/Dialog.tsx#Dialog"]={docgenInfo:d.__docgenInfo,name:"Dialog",path:"packages/react/src/lib/Feedback/Dialog/Dialog.tsx#Dialog"})}catch{}export{d as D};
//# sourceMappingURL=Dialog.f4917672.js.map