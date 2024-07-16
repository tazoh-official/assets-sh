"use strict";(self.webpackChunkextensions_dev=self.webpackChunkextensions_dev||[]).push([[700],{2167:(e,n,t)=>{t.d(n,{m:()=>P});var r={exit:{scale:.85,opacity:0,transition:{opacity:{duration:.15,easings:"easeInOut"},scale:{duration:.2,easings:"easeInOut"}}},enter:{scale:1,opacity:1,transition:{opacity:{easings:"easeOut",duration:.2},scale:{duration:.2,ease:[.175,.885,.4,1.1]}}}},i=t(8702),o=t(5045),s=t(4752),a=t(4817),l=t(7387),c=t(7237),u=t(7681),d=t(9950),f=e=>{var n;return(null==(n=e.current)?void 0:n.ownerDocument)||document},p=e=>{var n,t;return(null==(t=null==(n=e.current)?void 0:n.ownerDocument)?void 0:t.defaultView)||window};function v(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{openDelay:n=0,closeDelay:t=0,closeOnClick:r=!0,closeOnMouseDown:v,closeOnScroll:y,closeOnPointerDown:g=v,closeOnEsc:h=!0,onOpen:m,onClose:w,placement:b,id:E,isOpen:O,defaultIsOpen:k,arrowSize:j=10,arrowShadowColor:P,arrowPadding:C,modifiers:T,isDisabled:I,gutter:N,offset:A,direction:_,...B}=e,{isOpen:D,onOpen:S,onClose:R}=(0,a.j)({isOpen:O,defaultIsOpen:k,onOpen:m,onClose:w}),{referenceRef:M,getPopperProps:F,getArrowInnerProps:H,getArrowProps:Y}=(0,o.E)({enabled:D,placement:b,arrowPadding:C,modifiers:T,gutter:N,offset:A,direction:_}),z=(0,d.useId)(),X="tooltip-".concat(null!=E?E:z),J=(0,d.useRef)(null),L=(0,d.useRef)(),V=(0,d.useCallback)((()=>{L.current&&(clearTimeout(L.current),L.current=void 0)}),[]),W=(0,d.useRef)(),Z=(0,d.useCallback)((()=>{W.current&&(clearTimeout(W.current),W.current=void 0)}),[]),$=(0,d.useCallback)((()=>{Z(),R()}),[R,Z]),q=function(e,n){return(0,d.useEffect)((()=>{const t=f(e);return t.addEventListener(x,n),()=>t.removeEventListener(x,n)}),[n,e]),()=>{const n=f(e),t=p(e);n.dispatchEvent(new t.CustomEvent(x))}}(J,$),G=(0,d.useCallback)((()=>{if(!I&&!L.current){D&&q();const e=p(J);L.current=e.setTimeout(S,n)}}),[q,I,D,S,n]),K=(0,d.useCallback)((()=>{V();const e=p(J);W.current=e.setTimeout($,t)}),[t,$,V]),Q=(0,d.useCallback)((()=>{D&&r&&K()}),[r,K,D]),U=(0,d.useCallback)((()=>{D&&g&&K()}),[g,K,D]),ee=(0,d.useCallback)((e=>{D&&"Escape"===e.key&&K()}),[D,K]);(0,l.M)((()=>f(J)),"keydown",h?ee:void 0),(0,l.M)((()=>{if(!y)return null;const e=J.current;if(!e)return null;const n=(0,i.m)(e);return"body"===n.localName?p(J):n}),"scroll",(()=>{D&&y&&$()}),{passive:!0,capture:!0}),(0,d.useEffect)((()=>{I&&(V(),D&&R())}),[I,D,R,V]),(0,d.useEffect)((()=>()=>{V(),Z()}),[V,Z]),(0,l.M)((()=>J.current),"pointerleave",K);const ne=(0,d.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,ref:(0,c.Px)(J,n,M),onPointerEnter:(0,u.Hj)(e.onPointerEnter,(e=>{"touch"!==e.pointerType&&G()})),onClick:(0,u.Hj)(e.onClick,Q),onPointerDown:(0,u.Hj)(e.onPointerDown,U),onFocus:(0,u.Hj)(e.onFocus,G),onBlur:(0,u.Hj)(e.onBlur,K),"aria-describedby":D?X:void 0}}),[G,K,U,D,X,Q,M]),te=(0,d.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return F({...e,style:{...e.style,[s.O3.arrowSize.var]:j?"".concat(j,"px"):void 0,[s.O3.arrowShadowColor.var]:P}},n)}),[F,j,P]),re=(0,d.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const t={...e.style,position:"relative",transformOrigin:s.O3.transformOrigin.varRef};return{ref:n,...B,...e,id:X,role:"tooltip",style:t}}),[B,X]);return{isOpen:D,show:G,hide:K,getTriggerProps:ne,getTooltipProps:re,getTooltipPositionerProps:te,getArrowProps:Y,getArrowInnerProps:H}}var x="chakra-ui:close-tooltip";var y=t(5762),g=t(1267),h=t(8039),m=t(6296),w=t(2867),b=t(6396),E=t(8343),O=t(2613),k=t(4414);var j=(0,g.B)(E.P.div),P=(0,h.R)(((e,n)=>{var t,i;const o=(0,m.Vl)("Tooltip",e),a=(0,w.MN)(e),l=(0,b.D)(),{children:c,label:u,shouldWrapChildren:f,"aria-label":p,hasArrow:x,bg:h,portalProps:E,background:P,backgroundColor:C,bgColor:T,motionProps:I,...N}=a,A=null!=(i=null!=(t=null!=P?P:C)?t:h)?i:T;if(A){o.bg=A;const e=(0,w.f4)(l,"colors",A);o[s.O3.arrowBg.var]=e}const _=v({...N,direction:l.direction});let B;if("string"==typeof c||f)B=(0,k.jsx)(g.B.span,{display:"inline-block",tabIndex:0,..._.getTriggerProps(),children:c});else{const e=d.Children.only(c);B=(0,d.cloneElement)(e,_.getTriggerProps(e.props,e.ref))}const D=!!p,S=_.getTooltipProps({},n),R=D?function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const t=Object.assign({},e);for(const e of n)e in t&&delete t[e];return t}(S,["role","id"]):S,M=function(e,n){const t={};for(const r of n)r in e&&(t[r]=e[r]);return t}(S,["role","id"]);return u?(0,k.jsxs)(k.Fragment,{children:[B,(0,k.jsx)(O.N,{children:_.isOpen&&(0,k.jsx)(y.Z,{...E,children:(0,k.jsx)(g.B.div,{..._.getTooltipPositionerProps(),__css:{zIndex:o.zIndex,pointerEvents:"none"},children:(0,k.jsxs)(j,{variants:r,initial:"exit",animate:"enter",exit:"exit",...I,...R,__css:o,children:[u,D&&(0,k.jsx)(g.B.span,{srOnly:!0,...M,children:p}),x&&(0,k.jsx)(g.B.div,{"data-popper-arrow":!0,className:"chakra-tooltip__arrow-wrapper",children:(0,k.jsx)(g.B.div,{"data-popper-arrow-inner":!0,className:"chakra-tooltip__arrow",__css:{bg:o.bg}})})]})})})})]}):(0,k.jsx)(k.Fragment,{children:c})}));P.displayName="Tooltip"},4850:(e,n,t)=>{t.d(n,{jd:()=>i,yA:()=>o});var r={ease:[.25,.1,.25,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1]};var i={enter:{duration:.2,ease:r.easeOut},exit:{duration:.1,ease:r.easeIn}},o={enter:(e,n)=>({...e,delay:"number"==typeof n?n:null==n?void 0:n.enter}),exit:(e,n)=>({...e,delay:"number"==typeof n?n:null==n?void 0:n.exit})}},6710:(e,n,t)=>{t.d(n,{w:()=>c});var r=t(4850),i=t(7681),o=t(2613),s=t(8343),a=t(9950),l=t(4414),c={initial:"initial",animate:"enter",exit:"exit",variants:{initial:e=>{let{offsetX:n,offsetY:t,transition:i,transitionEnd:o,delay:s}=e;var a;return{opacity:0,x:n,y:t,transition:null!=(a=null==i?void 0:i.exit)?a:r.yA.exit(r.jd.exit,s),transitionEnd:null==o?void 0:o.exit}},enter:e=>{let{transition:n,transitionEnd:t,delay:i}=e;var o;return{opacity:1,x:0,y:0,transition:null!=(o=null==n?void 0:n.enter)?o:r.yA.enter(r.jd.enter,i),transitionEnd:null==t?void 0:t.enter}},exit:e=>{let{offsetY:n,offsetX:t,transition:i,transitionEnd:o,reverse:s,delay:a}=e;var l;const c={x:t,y:n};return{opacity:0,transition:null!=(l=null==i?void 0:i.exit)?l:r.yA.exit(r.jd.exit,a),...s?{...c,transitionEnd:null==o?void 0:o.exit}:{transitionEnd:{...c,...null==o?void 0:o.exit}}}}}};(0,a.forwardRef)((function(e,n){const{unmountOnExit:t,in:r,reverse:a=!0,className:u,offsetX:d=0,offsetY:f=8,transition:p,transitionEnd:v,delay:x,...y}=e,g=!t||r&&t,h=r||t?"enter":"exit",m={offsetX:d,offsetY:f,reverse:a,transition:p,transitionEnd:v,delay:x};return(0,l.jsx)(o.N,{custom:m,children:g&&(0,l.jsx)(s.P.div,{ref:n,className:(0,i.cx)("chakra-offset-slide",u),custom:m,...c,animate:h,...y})})})).displayName="SlideFade"},8871:(e,n,t)=>{t.d(n,{T:()=>c});var r=t(4850),i=t(7681),o=t(2613),s=t(8343),a=t(9950),l=t(4414),c={initial:"exit",animate:"enter",exit:"exit",variants:{exit:e=>{let{reverse:n,initialScale:t,transition:i,transitionEnd:o,delay:s}=e;var a;return{opacity:0,...n?{scale:t,transitionEnd:null==o?void 0:o.exit}:{transitionEnd:{scale:t,...null==o?void 0:o.exit}},transition:null!=(a=null==i?void 0:i.exit)?a:r.yA.exit(r.jd.exit,s)}},enter:e=>{let{transitionEnd:n,transition:t,delay:i}=e;var o;return{opacity:1,scale:1,transition:null!=(o=null==t?void 0:t.enter)?o:r.yA.enter(r.jd.enter,i),transitionEnd:null==n?void 0:n.enter}}}};(0,a.forwardRef)((function(e,n){const{unmountOnExit:t,in:r,reverse:a=!0,initialScale:u=.95,className:d,transition:f,transitionEnd:p,delay:v,...x}=e,y=!t||r&&t,g=r||t?"enter":"exit",h={initialScale:u,reverse:a,transition:f,transitionEnd:p,delay:v};return(0,l.jsx)(o.N,{custom:h,children:y&&(0,l.jsx)(s.P.div,{ref:n,className:(0,i.cx)("chakra-offset-slide",d),...c,animate:g,custom:h,...x})})})).displayName="ScaleFade"},6362:(e,n,t)=>{t.d(n,{Jg:()=>r});function r(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return"function"==typeof e?e(...t):e}},3327:(e,n,t)=>{t.d(n,{I$:()=>o,TB:()=>s,cJ:()=>r,rY:()=>i});t(4992);function r(e,n){const t={};return Object.keys(e).forEach((r=>{n.includes(r)||(t[r]=e[r])})),t}var i=(e=>{const n=new WeakMap;return(t,r,i,o)=>{if(void 0===t)return e(t,r,i);n.has(t)||n.set(t,new Map);const s=n.get(t);if(s.has(r))return s.get(r);const a=e(t,r,i,o);return s.set(r,a),a}})((function(e,n,t,r){const i="string"==typeof n?n.split("."):[n];for(r=0;r<i.length&&e;r+=1)e=e[i[r]];return void 0===e?t:e}));function o(e,n){const t={};return Object.keys(e).forEach((r=>{const i=e[r];n(i,r,e)&&(t[r]=i)})),t}var s=e=>o(e,(e=>null!=e))}}]);