"use strict";(self.webpackChunkextensions_dev=self.webpackChunkextensions_dev||[]).push([[202],{3195:(e,n,t)=>{t.d(n,{F:()=>d});var o=t(7996),r=t(7681),a=t(8039),s=t(2867),i=t(6296),l=t(1267),c=t(4414),d=(0,a.R)((function(e,n){var t;const{status:a="info",addRole:d=!0,...u}=(0,s.MN)(e),m=null!=(t=e.colorScheme)?t:(0,o.He)(a),p=(0,i.o5)("Alert",{...e,colorScheme:m}),h={width:"100%",display:"flex",alignItems:"center",position:"relative",overflow:"hidden",...p.container};return(0,c.jsx)(o.Sw,{value:{status:a},children:(0,c.jsx)(o._N,{value:p,children:(0,c.jsx)(l.B.div,{"data-status":a,role:d?"alert":void 0,ref:n,...u,className:(0,r.cx)("chakra-alert",e.className),__css:h})})})}));d.displayName="Alert"},8881:(e,n,t)=>{t.d(n,{_:()=>i});var o=t(7996),r=t(7681),a=t(1267),s=t(4414);function i(e){const{status:n}=(0,o.ZM)(),t=(0,o.cR)(n),i=(0,o.mC)(),l="loading"===n?i.spinner:i.icon;return(0,s.jsx)(a.B.span,{display:"inherit","data-status":n,...e,className:(0,r.cx)("chakra-alert__icon",e.className),__css:l,children:e.children||(0,s.jsx)(t,{h:"100%",w:"100%"})})}i.displayName="AlertIcon"},3416:(e,n,t)=>{t.d(n,{T:()=>l});var o=t(7996),r=t(7681),a=t(8039),s=t(1267),i=t(4414),l=(0,a.R)((function(e,n){const t=(0,o.mC)(),{status:a}=(0,o.ZM)(),l={display:"inline",...t.description};return(0,i.jsx)(s.B.div,{ref:n,"data-status":a,...e,className:(0,r.cx)("chakra-alert__desc",e.className),__css:l})}));l.displayName="AlertDescription"},1254:(e,n,t)=>{t.d(n,{X:()=>l});var o=t(7996),r=t(7681),a=t(8039),s=t(1267),i=t(4414),l=(0,a.R)((function(e,n){const t=(0,o.mC)(),{status:a}=(0,o.ZM)();return(0,i.jsx)(s.B.div,{ref:n,"data-status":a,...e,className:(0,r.cx)("chakra-alert__title",e.className),__css:t.title})}));l.displayName="AlertTitle"},7996:(e,n,t)=>{t.d(n,{Sw:()=>l,_N:()=>d,He:()=>p,cR:()=>h,ZM:()=>c,mC:()=>u});var o=t(393),r=t(4414);function a(e){return(0,r.jsx)(o.I,{viewBox:"0 0 24 24",...e,children:(0,r.jsx)("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})})}var s=t(221),i=t(63),[l,c]=(0,s.q)({name:"AlertContext",hookName:"useAlertContext",providerName:"<Alert />"}),[d,u]=(0,s.q)({name:"AlertStylesContext",hookName:"useAlertStyles",providerName:"<Alert />"}),m={info:{icon:function(e){return(0,r.jsx)(o.I,{viewBox:"0 0 24 24",...e,children:(0,r.jsx)("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"})})},colorScheme:"blue"},warning:{icon:a,colorScheme:"orange"},success:{icon:function(e){return(0,r.jsx)(o.I,{viewBox:"0 0 24 24",...e,children:(0,r.jsx)("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"})})},colorScheme:"green"},error:{icon:a,colorScheme:"red"},loading:{icon:i.y,colorScheme:"blue"}};function p(e){return m[e].colorScheme}function h(e){return m[e].icon}},5692:(e,n,t)=>{function o(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=!1;function r(n){const t=(["container","root"].includes(null!=n?n:"")?[e]:[e,n]).filter(Boolean).join("__"),o="chakra-".concat(t);return{className:o,selector:".".concat(o),toString:()=>n}}return{parts:function(){!function(){if(t)throw new Error("[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?");t=!0}();for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];for(const e of s)n[e]=r(e);return o(e,n)},toPart:r,extend:function(){for(var t=arguments.length,a=new Array(t),s=0;s<t;s++)a[s]=arguments[s];for(const e of a)e in n||(n[e]=r(e));return o(e,n)},selectors:function(){return Object.fromEntries(Object.entries(n).map((e=>{let[n,t]=e;return[n,t.selector]})))},classnames:function(){return Object.fromEntries(Object.entries(n).map((e=>{let[n,t]=e;return[n,t.className]})))},get keys(){return Object.keys(n)},__type:{}}}t.d(n,{aH:()=>r,Ov:()=>a,ZO:()=>s,RG:()=>i,M9:()=>M,fZ:()=>l,Lx:()=>c,Is:()=>d,Ip:()=>u,_8:()=>m,Gq:()=>p,yj:()=>h,Pe:()=>f,Zt:()=>b,zV:()=>g,vI:()=>v,j_:()=>x,Vg:()=>y,oc:()=>k,tC:()=>w,S4:()=>C,af:()=>j,e:()=>N,Us:()=>_,K_:()=>S});var r=o("accordion").parts("root","container","button","panel").extend("icon"),a=o("alert").parts("title","description","container").extend("icon","spinner"),s=o("avatar").parts("label","badge","container").extend("excessLabel","group"),i=o("breadcrumb").parts("link","item","container").extend("separator"),l=(o("button").parts(),o("checkbox").parts("control","icon","container").extend("label")),c=(o("progress").parts("track","filledTrack").extend("label"),o("drawer").parts("overlay","dialogContainer","dialog").extend("header","closeButton","body","footer")),d=o("editable").parts("preview","input","textarea"),u=o("form").parts("container","requiredIndicator","helperText"),m=o("formError").parts("text","icon"),p=o("input").parts("addon","field","element","group"),h=o("list").parts("container","item","icon"),f=o("menu").parts("button","list","item").extend("groupTitle","icon","command","divider"),b=o("modal").parts("overlay","dialogContainer","dialog").extend("header","closeButton","body","footer"),g=o("numberinput").parts("root","field","stepperGroup","stepper"),v=(o("pininput").parts("field"),o("popover").parts("content","header","body","footer").extend("popper","arrow","closeButton")),x=o("progress").parts("label","filledTrack","track"),y=o("radio").parts("container","control","label"),k=o("select").parts("field","icon"),w=o("slider").parts("container","track","thumb","filledTrack","mark"),C=o("stat").parts("container","label","helpText","number","icon"),j=o("switch").parts("container","track","thumb","label"),N=o("table").parts("table","thead","tbody","tr","th","td","tfoot","caption"),_=o("tabs").parts("root","tab","tablist","tabpanel","tabpanels","indicator"),S=o("tag").parts("container","label","closeButton"),M=o("card").parts("container","header","body","footer");o("stepper").parts("stepper","step","title","description","indicator","separator","icon","number")},1374:(e,n,t)=>{t.d(n,{$:()=>g});var o=t(9950);var r=t(221),[a,s]=(0,r.q)({strict:!1,name:"ButtonGroupContext"}),i=t(1267),l=t(7681),c=t(4414);function d(e){const{children:n,className:t,...r}=e,a=(0,o.isValidElement)(n)?(0,o.cloneElement)(n,{"aria-hidden":!0,focusable:!1}):n,s=(0,l.cx)("chakra-button__icon",t);return(0,c.jsx)(i.B.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...r,className:s,children:a})}d.displayName="ButtonIcon";var u=t(63);function m(e){const{label:n,placement:t,spacing:r="0.5rem",children:a=(0,c.jsx)(u.y,{color:"currentColor",width:"1em",height:"1em"}),className:s,__css:d,...m}=e,p=(0,l.cx)("chakra-button__spinner",s),h="start"===t?"marginEnd":"marginStart",f=(0,o.useMemo)((()=>({display:"flex",alignItems:"center",position:n?"relative":"absolute",[h]:n?r:0,fontSize:"1em",lineHeight:"normal",...d})),[d,n,h,r]);return(0,c.jsx)(i.B.div,{className:p,...m,__css:f,children:a})}m.displayName="ButtonSpinner";var p=t(7237),h=t(8039),f=t(6296),b=t(2867),g=(0,h.R)(((e,n)=>{const t=s(),r=(0,f.Vl)("Button",{...t,...e}),{isDisabled:a=(null==t?void 0:t.isDisabled),isLoading:d,isActive:u,children:h,leftIcon:g,rightIcon:x,loadingText:y,iconSpacing:k="0.5rem",type:w,spinner:C,spinnerPlacement:j="start",className:N,as:_,...S}=(0,b.MN)(e),M=(0,o.useMemo)((()=>{const e={...null==r?void 0:r._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...r,...!!t&&{_focus:e}}}),[r,t]),{ref:F,type:B}=function(e){const[n,t]=(0,o.useState)(!e);return{ref:(0,o.useCallback)((e=>{e&&t("BUTTON"===e.tagName)}),[]),type:n?"button":void 0}}(_),A={rightIcon:x,leftIcon:g,iconSpacing:k,children:h};return(0,c.jsxs)(i.B.button,{ref:(0,p.SV)(n,F),as:_,type:null!=w?w:B,"data-active":(0,l.sE)(u),"data-loading":(0,l.sE)(d),__css:M,className:(0,l.cx)("chakra-button",N),...S,disabled:a||d,children:[d&&"start"===j&&(0,c.jsx)(m,{className:"chakra-button__spinner--start",label:y,placement:"start",spacing:k,children:C}),d?y||(0,c.jsx)(i.B.span,{opacity:0,children:(0,c.jsx)(v,{...A})}):(0,c.jsx)(v,{...A}),d&&"end"===j&&(0,c.jsx)(m,{className:"chakra-button__spinner--end",label:y,placement:"end",spacing:k,children:C})]})}));function v(e){const{leftIcon:n,rightIcon:t,children:o,iconSpacing:r}=e;return(0,c.jsxs)(c.Fragment,{children:[n&&(0,c.jsx)(d,{marginEnd:r,children:n}),o,t&&(0,c.jsx)(d,{marginStart:r,children:t})]})}g.displayName="Button"},9548:(e,n,t)=>{t.d(n,{J:()=>d});var o=t(393),r=t(8039),a=t(6296),s=t(2867),i=t(1267),l=t(4414);function c(e){return(0,l.jsx)(o.I,{focusable:"false","aria-hidden":!0,...e,children:(0,l.jsx)("path",{fill:"currentColor",d:"M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"})})}var d=(0,r.R)((function(e,n){const t=(0,a.Vl)("CloseButton",e),{children:o,isDisabled:r,__css:d,...u}=(0,s.MN)(e);return(0,l.jsx)(i.B.button,{type:"button","aria-label":"Close",ref:n,disabled:r,__css:{outline:0,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,...t,...d},...u,children:o||(0,l.jsx)(c,{width:"1em",height:"1em"})})}));d.displayName="CloseButton"},8251:(e,n,t)=>{t.d(n,{an:()=>f});var o=t(2923),r={light:"chakra-ui-light",dark:"chakra-ui-dark"};var a="chakra-ui-color-mode";var s,i=(s=a,{ssr:!1,type:"localStorage",get(e){if(!(null==globalThis?void 0:globalThis.document))return e;let n;try{n=localStorage.getItem(s)||e}catch(e){}return n||e},set(e){try{localStorage.setItem(s,e)}catch(e){}}});function l(e,n){const t=e.match(new RegExp("(^| )".concat(n,"=([^;]+)")));return null==t?void 0:t[2]}function c(e,n){return{ssr:!!n,type:"cookie",get:t=>n?l(n,e):(null==globalThis?void 0:globalThis.document)&&l(document.cookie,e)||t,set(n){document.cookie="".concat(e,"=").concat(n,"; max-age=31536000; path=/")}}}c(a);var d=t(1792),u=t(9950),m=t(4414),p=()=>{};function h(e,n){return"cookie"===e.type&&e.ssr?e.get(n):n}function f(e){const{value:n,children:t,options:{useSystemColorMode:a,initialColorMode:s,disableTransitionOnChange:l}={},colorModeManager:c=i}=e,f="dark"===s?"dark":"light",[b,g]=(0,u.useState)((()=>h(c,f))),[v,x]=(0,u.useState)((()=>h(c))),{getSystemTheme:y,setClassName:k,setDataset:w,addListener:C}=(0,u.useMemo)((()=>function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{preventTransition:n=!0}=e,t={setDataset:e=>{const o=n?t.preventTransition():void 0;document.documentElement.dataset.theme=e,document.documentElement.style.colorScheme=e,null==o||o()},setClassName(e){document.body.classList.add(e?r.dark:r.light),document.body.classList.remove(e?r.light:r.dark)},query:()=>window.matchMedia("(prefers-color-scheme: dark)"),getSystemTheme(e){var n;return(null!=(n=t.query().matches)?n:"dark"===e)?"dark":"light"},addListener(e){const n=t.query(),o=n=>{e(n.matches?"dark":"light")};return"function"==typeof n.addListener?n.addListener(o):n.addEventListener("change",o),()=>{"function"==typeof n.removeListener?n.removeListener(o):n.removeEventListener("change",o)}},preventTransition(){const e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),requestAnimationFrame((()=>{requestAnimationFrame((()=>{document.head.removeChild(e)}))}))}}};return t}({preventTransition:l})),[l]),j="system"!==s||b?b:v,N=(0,u.useCallback)((e=>{const n="system"===e?y():e;g(n),k("dark"===n),w(n),c.set(n)}),[c,y,k,w]);(0,d.U)((()=>{"system"===s&&x(y())}),[]),(0,u.useEffect)((()=>{const e=c.get();N(e||("system"!==s?f:"system"))}),[c,f,s,N]);const _=(0,u.useCallback)((()=>{N("dark"===j?"light":"dark")}),[j,N]);(0,u.useEffect)((()=>{if(a)return C(N)}),[a,C,N]);const S=(0,u.useMemo)((()=>({colorMode:null!=n?n:j,toggleColorMode:n?p:_,setColorMode:n?p:N,forced:void 0!==n})),[j,_,N,n]);return(0,m.jsx)(o.Ig.Provider,{value:S,children:t})}f.displayName="ColorModeProvider"},2923:(e,n,t)=>{t.d(n,{G6:()=>a,Ig:()=>r});var o=t(9950),r=(0,o.createContext)({});function a(){const e=(0,o.useContext)(r);if(void 0===e)throw new Error("useColorMode must be used within a ColorModeProvider");return e}r.displayName="ColorModeContext"},9997:(e,n,t)=>{t.d(n,{R1:()=>d,rs:()=>u});var o,r,a=t(7528),s=t(8283),i=t(4414),l=String.raw,c=l(o||(o=(0,a.A)(["\n  :root,\n  :host {\n    --chakra-vh: 100vh;\n  }\n\n  @supports (height: -webkit-fill-available) {\n    :root,\n    :host {\n      --chakra-vh: -webkit-fill-available;\n    }\n  }\n\n  @supports (height: -moz-fill-available) {\n    :root,\n    :host {\n      --chakra-vh: -moz-fill-available;\n    }\n  }\n\n  @supports (height: 100dvh) {\n    :root,\n    :host {\n      --chakra-vh: 100dvh;\n    }\n  }\n"]))),d=()=>(0,i.jsx)(s.mL,{styles:c}),u=e=>{let{scope:n=""}=e;return(0,i.jsx)(s.mL,{styles:l(r||(r=(0,a.A)(['\n      html {\n        line-height: 1.5;\n        -webkit-text-size-adjust: 100%;\n        font-family: system-ui, sans-serif;\n        -webkit-font-smoothing: antialiased;\n        text-rendering: optimizeLegibility;\n        -moz-osx-font-smoothing: grayscale;\n        touch-action: manipulation;\n      }\n\n      body {\n        position: relative;\n        min-height: 100%;\n        margin: 0;\n        font-feature-settings: "kern";\n      }\n\n      '," :where(*, *::before, *::after) {\n        border-width: 0;\n        border-style: solid;\n        box-sizing: border-box;\n        word-wrap: break-word;\n      }\n\n      main {\n        display: block;\n      }\n\n      "," hr {\n        border-top-width: 1px;\n        box-sizing: content-box;\n        height: 0;\n        overflow: visible;\n      }\n\n      "," :where(pre, code, kbd,samp) {\n        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;\n        font-size: 1em;\n      }\n\n      "," a {\n        background-color: transparent;\n        color: inherit;\n        text-decoration: inherit;\n      }\n\n      "," abbr[title] {\n        border-bottom: none;\n        text-decoration: underline;\n        -webkit-text-decoration: underline dotted;\n        text-decoration: underline dotted;\n      }\n\n      "," :where(b, strong) {\n        font-weight: bold;\n      }\n\n      "," small {\n        font-size: 80%;\n      }\n\n      "," :where(sub,sup) {\n        font-size: 75%;\n        line-height: 0;\n        position: relative;\n        vertical-align: baseline;\n      }\n\n      "," sub {\n        bottom: -0.25em;\n      }\n\n      "," sup {\n        top: -0.5em;\n      }\n\n      "," img {\n        border-style: none;\n      }\n\n      "," :where(button, input, optgroup, select, textarea) {\n        font-family: inherit;\n        font-size: 100%;\n        line-height: 1.15;\n        margin: 0;\n      }\n\n      "," :where(button, input) {\n        overflow: visible;\n      }\n\n      "," :where(button, select) {\n        text-transform: none;\n      }\n\n      ",' :where(\n          button::-moz-focus-inner,\n          [type="button"]::-moz-focus-inner,\n          [type="reset"]::-moz-focus-inner,\n          [type="submit"]::-moz-focus-inner\n        ) {\n        border-style: none;\n        padding: 0;\n      }\n\n      '," fieldset {\n        padding: 0.35em 0.75em 0.625em;\n      }\n\n      "," legend {\n        box-sizing: border-box;\n        color: inherit;\n        display: table;\n        max-width: 100%;\n        padding: 0;\n        white-space: normal;\n      }\n\n      "," progress {\n        vertical-align: baseline;\n      }\n\n      "," textarea {\n        overflow: auto;\n      }\n\n      ",' :where([type="checkbox"], [type="radio"]) {\n        box-sizing: border-box;\n        padding: 0;\n      }\n\n      ',' input[type="number"]::-webkit-inner-spin-button,\n      ',' input[type="number"]::-webkit-outer-spin-button {\n        -webkit-appearance: none !important;\n      }\n\n      ',' input[type="number"] {\n        -moz-appearance: textfield;\n      }\n\n      ',' input[type="search"] {\n        -webkit-appearance: textfield;\n        outline-offset: -2px;\n      }\n\n      ',' input[type="search"]::-webkit-search-decoration {\n        -webkit-appearance: none !important;\n      }\n\n      '," ::-webkit-file-upload-button {\n        -webkit-appearance: button;\n        font: inherit;\n      }\n\n      "," details {\n        display: block;\n      }\n\n      "," summary {\n        display: list-item;\n      }\n\n      template {\n        display: none;\n      }\n\n      [hidden] {\n        display: none !important;\n      }\n\n      "," :where(\n          blockquote,\n          dl,\n          dd,\n          h1,\n          h2,\n          h3,\n          h4,\n          h5,\n          h6,\n          hr,\n          figure,\n          p,\n          pre\n        ) {\n        margin: 0;\n      }\n\n      "," button {\n        background: transparent;\n        padding: 0;\n      }\n\n      "," fieldset {\n        margin: 0;\n        padding: 0;\n      }\n\n      "," :where(ol, ul) {\n        margin: 0;\n        padding: 0;\n      }\n\n      "," textarea {\n        resize: vertical;\n      }\n\n      ",' :where(button, [role="button"]) {\n        cursor: pointer;\n      }\n\n      '," button::-moz-focus-inner {\n        border: 0 !important;\n      }\n\n      "," table {\n        border-collapse: collapse;\n      }\n\n      "," :where(h1, h2, h3, h4, h5, h6) {\n        font-size: inherit;\n        font-weight: inherit;\n      }\n\n      "," :where(button, input, optgroup, select, textarea) {\n        padding: 0;\n        line-height: inherit;\n        color: inherit;\n      }\n\n      "," :where(img, svg, video, canvas, audio, iframe, embed, object) {\n        display: block;\n      }\n\n      "," :where(img, video) {\n        max-width: 100%;\n        height: auto;\n      }\n\n      [data-js-focus-visible]\n        :focus:not([data-focus-visible-added]):not(\n          [data-focus-visible-disabled]\n        ) {\n        outline: none;\n        box-shadow: none;\n      }\n\n      "," select::-ms-expand {\n        display: none;\n      }\n\n      ","\n    "])),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,c)})}},9787:(e,n,t)=>{function o(e){return null!=e&&"object"==typeof e&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE}function r(e){var n;if(!o(e))return!1;return e instanceof(null!=(n=e.ownerDocument.defaultView)?n:window).HTMLElement}t.d(n,{sb:()=>r})},8702:(e,n,t)=>{t.d(n,{m:()=>r});var o=t(9787);function r(e){return["html","body","#document"].includes(e.localName)?e.ownerDocument.body:(0,o.sb)(e)&&function(e){const n=e.ownerDocument.defaultView||window,{overflow:t,overflowX:o,overflowY:r}=n.getComputedStyle(e);return/auto|scroll|overlay|hidden/.test(t+r+o)}(e)?e:r(function(e){return"html"===e.localName?e:e.assignedSlot||e.parentElement||e.ownerDocument.documentElement}(e))}},4012:(e,n,t)=>{t.d(n,{Uc:()=>f});var o=t(221),r=t(7237),a=t(8039),s=t(6296),i=t(2867),l=t(1267),c=t(7681),d=t(9950),u=t(4414),[m,p]=(0,o.q)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[h,f]=(0,o.q)({strict:!1,name:"FormControlContext"});(0,a.R)((function(e,n){const t=(0,s.o5)("Form",e),o=(0,i.MN)(e),{getRootProps:a,htmlProps:p,...f}=function(e){const{id:n,isRequired:t,isInvalid:o,isDisabled:a,isReadOnly:s,...i}=e,l=(0,d.useId)(),u=n||"field-".concat(l),m="".concat(u,"-label"),p="".concat(u,"-feedback"),h="".concat(u,"-helptext"),[f,b]=(0,d.useState)(!1),[g,v]=(0,d.useState)(!1),[x,y]=(0,d.useState)(!1),k=(0,d.useCallback)((function(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{id:h,...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},ref:(0,r.Px)(e,(e=>{e&&v(!0)}))}}),[h]),w=(0,d.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,ref:n,"data-focus":(0,c.sE)(x),"data-disabled":(0,c.sE)(a),"data-invalid":(0,c.sE)(o),"data-readonly":(0,c.sE)(s),id:void 0!==e.id?e.id:m,htmlFor:void 0!==e.htmlFor?e.htmlFor:u}}),[u,a,x,o,s,m]),C=(0,d.useCallback)((function(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{id:p,...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},ref:(0,r.Px)(e,(e=>{e&&b(!0)})),"aria-live":"polite"}}),[p]),j=(0,d.useCallback)((function(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},...i,ref:e,role:"group","data-focus":(0,c.sE)(x),"data-disabled":(0,c.sE)(a),"data-invalid":(0,c.sE)(o),"data-readonly":(0,c.sE)(s)}}),[i,a,x,o,s]),N=(0,d.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"}}),[]);return{isRequired:!!t,isInvalid:!!o,isReadOnly:!!s,isDisabled:!!a,isFocused:!!x,onFocus:()=>y(!0),onBlur:()=>y(!1),hasFeedbackText:f,setHasFeedbackText:b,hasHelpText:g,setHasHelpText:v,id:u,labelId:m,feedbackId:p,helpTextId:h,htmlProps:i,getHelpTextProps:k,getErrorMessageProps:C,getRootProps:j,getLabelProps:w,getRequiredIndicatorProps:N}}(o),b=(0,c.cx)("chakra-form-control",e.className);return(0,u.jsx)(h,{value:f,children:(0,u.jsx)(m,{value:t,children:(0,u.jsx)(l.B.div,{...a({},n),className:b,__css:t.container})})})})).displayName="FormControl",(0,a.R)((function(e,n){const t=f(),o=p(),r=(0,c.cx)("chakra-form__helper-text",e.className);return(0,u.jsx)(l.B.div,{...null==t?void 0:t.getHelpTextProps(e,n),__css:o.helperText,className:r})})).displayName="FormHelperText"},393:(e,n,t)=>{t.d(n,{I:()=>c});var o=t(8039),r=t(6296),a=t(1267),s=t(7681),i=t(4414),l={path:(0,i.jsxs)("g",{stroke:"currentColor",strokeWidth:"1.5",children:[(0,i.jsx)("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),(0,i.jsx)("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),(0,i.jsx)("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})]}),viewBox:"0 0 24 24"},c=(0,o.R)(((e,n)=>{const{as:t,viewBox:o,color:c="currentColor",focusable:d=!1,children:u,className:m,__css:p,...h}=e,f={ref:n,focusable:d,className:(0,s.cx)("chakra-icon",m),__css:{w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color:c,...p,...(0,r.Vl)("Icon",e)}},b=null!=o?o:l.viewBox;if(t&&"string"!=typeof t)return(0,i.jsx)(a.B.svg,{as:t,...f,...h});const g=null!=u?u:l.path;return(0,i.jsx)(a.B.svg,{verticalAlign:"middle",viewBox:b,...f,...h,children:g})}));c.displayName="Icon"},9313:(e,n,t)=>{t.d(n,{w:()=>i});var o=t(393),r=t(8039),a=t(9950),s=t(4414);function i(e){const{viewBox:n="0 0 24 24",d:t,displayName:i,defaultProps:l={}}=e,c=a.Children.toArray(e.path),d=(0,r.R)(((e,r)=>(0,s.jsx)(o.I,{ref:r,viewBox:n,...l,...e,children:c.length?c:(0,s.jsx)("path",{fill:"currentColor",d:t})})));return d.displayName=i,d}},4535:(e,n,t)=>{t.d(n,{v:()=>o});var o=(0,t(9313).w)({d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",displayName:"ChevronRightIcon"})},2781:(e,n,t)=>{t.d(n,{Y:()=>o});var o=(0,t(9313).w)({d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z",displayName:"ChevronLeftIcon"})},211:(e,n,t)=>{t.d(n,{_:()=>d});var o=t(8039),r=t(4414),a=(0,o.R)((function(e,n){const{htmlWidth:t,htmlHeight:o,alt:a,...s}=e;return(0,r.jsx)("img",{width:t,height:o,ref:n,alt:a,...s})}));a.displayName="NativeImage";var s=t(1792),i=t(9950);var l=t(1267);function c(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const t=Object.assign({},e);for(const e of n)e in t&&delete t[e];return t}var d=(0,o.R)((function(e,n){const{fallbackSrc:t,fallback:o,src:d,srcSet:u,align:m,fit:p,loading:h,ignoreFallback:f,crossOrigin:b,fallbackStrategy:g="beforeLoadOrError",referrerPolicy:v,...x}=e,y=null!=h||f||!(void 0!==t||void 0!==o),k=function(e){const{loading:n,src:t,srcSet:o,onLoad:r,onError:a,crossOrigin:l,sizes:c,ignoreFallback:d}=e,[u,m]=(0,i.useState)("pending");(0,i.useEffect)((()=>{m(t?"loading":"pending")}),[t]);const p=(0,i.useRef)(),h=(0,i.useCallback)((()=>{if(!t)return;f();const e=new Image;e.src=t,l&&(e.crossOrigin=l),o&&(e.srcset=o),c&&(e.sizes=c),n&&(e.loading=n),e.onload=e=>{f(),m("loaded"),null==r||r(e)},e.onerror=e=>{f(),m("failed"),null==a||a(e)},p.current=e}),[t,l,o,c,r,a,n]),f=()=>{p.current&&(p.current.onload=null,p.current.onerror=null,p.current=null)};return(0,s.U)((()=>{if(!d)return"loading"===u&&h(),()=>{f()}}),[u,h,d]),d?"loaded":u}({...e,crossOrigin:b,ignoreFallback:y}),w=((e,n)=>"loaded"!==e&&"beforeLoadOrError"===n||"failed"===e&&"onError"===n)(k,g),C={ref:n,objectFit:p,objectPosition:m,...y?x:c(x,["onError","onLoad"])};return w?o||(0,r.jsx)(l.B.img,{as:a,className:"chakra-image__placeholder",src:t,...C}):(0,r.jsx)(l.B.img,{as:a,src:d,srcSet:u,crossOrigin:b,loading:h,referrerPolicy:v,className:"chakra-image",...C})}));d.displayName="Image"},1317:(e,n,t)=>{t.d(n,{E:()=>d});var o=t(8039),r=t(6296),a=t(2867),s=t(1267),i=t(7681),l=t(7924),c=t(4414),d=(0,o.R)((function(e,n){const t=(0,r.Vl)("Text",e),{className:o,align:d,decoration:u,casing:m,...p}=(0,a.MN)(e),h=(0,l.o)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,c.jsx)(s.B.p,{ref:n,className:(0,i.cx)("chakra-text",e.className),...h,...p,__css:t})}));d.displayName="Text"},4418:(e,n,t)=>{t.d(n,{z:()=>s});var o=t(1530),r=t(8039),a=t(4414),s=(0,r.R)(((e,n)=>(0,a.jsx)(o.B,{align:"center",...e,direction:"row",ref:n})));s.displayName="HStack"},9556:(e,n,t)=>{t.d(n,{D:()=>c});var o=t(8039),r=t(6296),a=t(2867),s=t(1267),i=t(7681),l=t(4414),c=(0,o.R)((function(e,n){const t=(0,r.Vl)("Heading",e),{className:o,...c}=(0,a.MN)(e);return(0,l.jsx)(s.B.h2,{ref:n,className:(0,i.cx)("chakra-heading",e.className),...c,__css:t})}));c.displayName="Heading"},3755:(e,n,t)=>{t.d(n,{s:()=>s});var o=t(8039),r=t(1267),a=t(4414),s=(0,o.R)((function(e,n){const{direction:t,align:o,justify:s,wrap:i,basis:l,grow:c,shrink:d,...u}=e,m={display:"flex",flexDirection:t,alignItems:o,justifyContent:s,flexWrap:i,flexBasis:l,flexGrow:c,flexShrink:d};return(0,a.jsx)(r.B.div,{ref:n,__css:m,...u})}));s.displayName="Flex"},715:(e,n,t)=>{t.d(n,{T:()=>s});var o=t(1530),r=t(8039),a=t(4414),s=(0,r.R)(((e,n)=>(0,a.jsx)(o.B,{align:"center",...e,direction:"column",ref:n})));s.displayName="VStack"},3247:(e,n,t)=>{t.d(n,{az:()=>s});var o=t(1267),r=t(8039),a=t(4414),s=(0,o.B)("div");s.displayName="Box";var i=(0,r.R)((function(e,n){const{size:t,centerContent:o=!0,...r}=e,i=o?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,a.jsx)(s,{ref:n,boxSize:t,__css:{...i,flexShrink:0,flexGrow:0},...r})}));i.displayName="Square",(0,r.R)((function(e,n){const{size:t,...o}=e;return(0,a.jsx)(i,{size:t,ref:n,borderRadius:"9999px",...o})})).displayName="Circle"},1530:(e,n,t)=>{t.d(n,{B:()=>d});var o=t(1267),r=t(4414),a=e=>(0,r.jsx)(o.B.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});a.displayName="StackItem";var s=t(7681);Object.freeze(["base","sm","md","lg","xl","2xl"]);var i=t(8253),l=t(8039),c=t(9950),d=(0,l.R)(((e,n)=>{const{isInline:t,direction:l,align:d,justify:u,spacing:m="0.5rem",wrap:p,children:h,divider:f,className:b,shouldWrapChildren:g,...v}=e,x=t?"row":null!=l?l:"column",y=(0,c.useMemo)((()=>function(e){const{spacing:n,direction:t}=e,o={column:{my:n,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:n,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:n,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:n,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(r=t,a=e=>o[e],Array.isArray(r)?r.map((e=>null===e?null:a(e))):(0,s.Gv)(r)?Object.keys(r).reduce(((e,n)=>(e[n]=a(r[n]),e)),{}):null!=r?a(r):null)};var r,a}({spacing:m,direction:x})),[m,x]),k=!!f,w=!g&&!k,C=(0,c.useMemo)((()=>{const e=(0,i.a)(h);return w?e:e.map(((n,t)=>{const o=void 0!==n.key?n.key:t,s=t+1===e.length,i=g?(0,r.jsx)(a,{children:n},o):n;if(!k)return i;const l=(0,c.cloneElement)(f,{__css:y}),d=s?null:l;return(0,r.jsxs)(c.Fragment,{children:[i,d]},o)}))}),[f,y,k,w,g,h]),j=(0,s.cx)("chakra-stack",b);return(0,r.jsx)(o.B.div,{ref:n,display:"flex",alignItems:d,justifyContent:u,flexDirection:x,flexWrap:p,gap:k?void 0:m,className:j,...v,children:C})}));d.displayName="Stack"},4031:(e,n,t)=>{t.d(n,{U:()=>a});var o=t(779),r=t(9950);function a(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{ssr:t=!0,fallback:a}=n,{getWindow:s}=(0,o.O)(),i=Array.isArray(e)?e:[e];let l=Array.isArray(a)?a:[a];l=l.filter((e=>null!=e));const[c,d]=(0,r.useState)((()=>i.map(((e,n)=>({media:e,matches:t?!!l[n]:s().matchMedia(e).matches})))));return(0,r.useEffect)((()=>{const e=s();d(i.map((n=>({media:n,matches:e.matchMedia(n).matches}))));const n=i.map((n=>e.matchMedia(n))),t=e=>{d((n=>n.slice().map((n=>n.media===e.media?{...n,matches:e.matches}:n))))};return n.forEach((e=>{"function"==typeof e.addListener?e.addListener(t):e.addEventListener("change",t)})),()=>{n.forEach((e=>{"function"==typeof e.removeListener?e.removeListener(t):e.removeEventListener("change",t)}))}}),[s]),c.map((e=>e.matches))}},1695:(e,n,t)=>{t.d(n,{s:()=>l});var o=t(8879),r=t(9548),a=t(7681),s=t(8039),i=t(4414),l=(0,s.R)(((e,n)=>{const{onClick:t,className:s,...l}=e,{onClose:c}=(0,o.k3)(),d=(0,a.cx)("chakra-modal__close-btn",s),u=(0,o.x5)();return(0,i.jsx)(r.J,{ref:n,__css:u.closeButton,className:d,onClick:(0,a.Hj)(t,(e=>{e.stopPropagation(),c()})),...l})}));l.displayName="ModalCloseButton"},2189:(e,n,t)=>{t.d(n,{J:()=>s,y:()=>i});var o=Object.defineProperty,r=(e,n,t)=>(((e,n,t)=>{n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t})(e,"symbol"!=typeof n?n+"":n,t),t),a=t(9950),s=new class{constructor(){r(this,"modals"),this.modals=new Map}add(e){return this.modals.set(e,this.modals.size+1),this.modals.size}remove(e){this.modals.delete(e)}isTopModal(e){return!!e&&this.modals.get(e)===this.modals.size}};function i(e,n){const[t,o]=(0,a.useState)(0);return(0,a.useEffect)((()=>{const t=e.current;if(t){if(n){const e=s.add(t);o(e)}return()=>{s.remove(t),o(0)}}}),[n,e]),t}},1179:(e,n,t)=>{t.d(n,{$:()=>B});var o=t(1267),r=t(6710),a=t(8871),s=t(8343),i=t(9950),l=t(4414),c={slideInBottom:{...r.w,custom:{offsetY:16,reverse:!0}},slideInRight:{...r.w,custom:{offsetX:16,reverse:!0}},slideInTop:{...r.w,custom:{offsetY:-16,reverse:!0}},slideInLeft:{...r.w,custom:{offsetX:-16,reverse:!0}},scale:{...a.T,custom:{initialScale:.95,reverse:!0}},none:{}},d=(0,o.B)(s.P.section),u=e=>c[e||"none"],m=(0,i.forwardRef)(((e,n)=>{const{preset:t,motionProps:o=u(t),...r}=e;return(0,l.jsx)(d,{ref:n,...o,...r})}));m.displayName="ModalTransition";var p=t(8879),h=t(2189),f=t(3278),b=t(9787),g=e=>e.hasAttribute("tabindex");function v(e){return!(!e.parentElement||!v(e.parentElement))||e.hidden}function x(e){if(!(0,b.sb)(e)||v(e)||function(e){return!0===Boolean(e.getAttribute("disabled"))||!0===Boolean(e.getAttribute("aria-disabled"))}(e))return!1;const{localName:n}=e;if(["input","select","textarea","button"].indexOf(n)>=0)return!0;const t={a:()=>e.hasAttribute("href"),audio:()=>e.hasAttribute("controls"),video:()=>e.hasAttribute("controls")};return n in t?t[n]():!!function(e){const n=e.getAttribute("contenteditable");return"false"!==n&&null!=n}(e)||g(e)}var y,k=["input:not(:disabled):not([disabled])","select:not(:disabled):not([disabled])","textarea:not(:disabled):not([disabled])","embed","iframe","object","a[href]","area[href]","button:not(:disabled):not([disabled])","[tabindex]","audio[controls]","video[controls]","*[tabindex]:not([aria-disabled])","*[contenteditable]"].join(),w=e=>e.offsetWidth>0&&e.offsetHeight>0;function C(e){const n=Array.from(e.querySelectorAll(k));return n.unshift(e),n.filter((e=>x(e)&&w(e)))}var j=null!=(y=f.Ay.default)?y:f.Ay,N=e=>{const{initialFocusRef:n,finalFocusRef:t,contentRef:o,restoreFocus:r,children:a,isDisabled:s,autoFocus:c,persistentFocus:d,lockFocusAcrossFrames:u}=e,m=(0,i.useCallback)((()=>{if(null==n?void 0:n.current)n.current.focus();else if(null==o?void 0:o.current){0===C(o.current).length&&requestAnimationFrame((()=>{var e;null==(e=o.current)||e.focus()}))}}),[n,o]),p=(0,i.useCallback)((()=>{var e;null==(e=null==t?void 0:t.current)||e.focus()}),[t]),h=r&&!t;return(0,l.jsx)(j,{crossFrame:u,persistentFocus:d,autoFocus:c,disabled:s,onActivation:m,onDeactivation:p,returnFocus:h,children:a})};N.displayName="FocusLock";var _=t(7168),S=t(2581);function M(e){const{autoFocus:n,trapFocus:t,dialogRef:o,initialFocusRef:r,blockScrollOnMount:a,allowPinchZoom:s,finalFocusRef:c,returnFocusOnClose:d,preserveScrollBarGap:u,lockFocusAcrossFrames:m,isOpen:f}=(0,p.k3)(),[b,g]=(0,_.xQ)();(0,i.useEffect)((()=>{!b&&g&&setTimeout(g)}),[b,g]);const v=(0,h.y)(o,f);return(0,l.jsx)(N,{autoFocus:n,isDisabled:!t,initialFocusRef:r,finalFocusRef:c,restoreFocus:d,contentRef:o,lockFocusAcrossFrames:m,children:(0,l.jsx)(S.A,{removeScrollBar:!u,allowPinchZoom:s,enabled:1===v&&a,forwardProps:!0,children:e.children})})}var F=t(7681),B=(0,t(8039).R)(((e,n)=>{const{className:t,children:r,containerProps:a,motionProps:s,...i}=e,{getDialogProps:c,getDialogContainerProps:d}=(0,p.k3)(),u=c(i,n),h=d(a),f=(0,F.cx)("chakra-modal__content",t),b=(0,p.x5)(),g={display:"flex",flexDirection:"column",position:"relative",width:"100%",outline:0,...b.dialog},v={display:"flex",width:"100vw",height:"$100vh",position:"fixed",left:0,top:0,...b.dialogContainer},{motionPreset:x}=(0,p.k3)();return(0,l.jsx)(M,{children:(0,l.jsx)(o.B.div,{...h,className:"chakra-modal__content-container",tabIndex:-1,__css:v,children:(0,l.jsx)(m,{preset:x,motionProps:s,className:f,...u,__css:g,children:r})})})}));B.displayName="ModalContent"},8879:(e,n,t)=>{t.d(n,{aF:()=>v,k3:()=>g,x5:()=>f});var o=t(2189),r=t(7681),a=t(7237),s=t(8159),i=t(9950);function l(e){const{isOpen:n,onClose:t,id:l,closeOnOverlayClick:c=!0,closeOnEsc:d=!0,useInert:u=!0,onOverlayClick:m,onEsc:p}=e,h=(0,i.useRef)(null),f=(0,i.useRef)(null),[b,g,v]=function(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];const r=(0,i.useId)(),a=e||r;return(0,i.useMemo)((()=>t.map((e=>"".concat(e,"-").concat(a)))),[a,t])}(l,"chakra-modal","chakra-modal--header","chakra-modal--body");!function(e,n){const t=e.current;(0,i.useEffect)((()=>{if(e.current&&n)return(0,s.Eq)(e.current)}),[n,e,t])}(h,n&&u);const x=(0,o.y)(h,n),y=(0,i.useRef)(null),k=(0,i.useCallback)((e=>{y.current=e.target}),[]),w=(0,i.useCallback)((e=>{"Escape"===e.key&&(e.stopPropagation(),d&&(null==t||t()),null==p||p())}),[d,t,p]),[C,j]=(0,i.useState)(!1),[N,_]=(0,i.useState)(!1),S=(0,i.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{role:"dialog",...e,ref:(0,a.Px)(n,h),id:b,tabIndex:-1,"aria-modal":!0,"aria-labelledby":C?g:void 0,"aria-describedby":N?v:void 0,onClick:(0,r.Hj)(e.onClick,(e=>e.stopPropagation()))}}),[v,N,b,g,C]),M=(0,i.useCallback)((e=>{e.stopPropagation(),y.current===e.target&&o.J.isTopModal(h.current)&&(c&&(null==t||t()),null==m||m())}),[t,c,m]),F=(0,i.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,ref:(0,a.Px)(n,f),onClick:(0,r.Hj)(e.onClick,M),onKeyDown:(0,r.Hj)(e.onKeyDown,w),onMouseDown:(0,r.Hj)(e.onMouseDown,k)}}),[w,k,M]);return{isOpen:n,onClose:t,headerId:g,bodyId:v,setBodyMounted:_,setHeaderMounted:j,dialogRef:h,overlayRef:f,getDialogProps:S,getDialogContainerProps:F,index:x}}var c=t(5762),d=t(221),u=t(6296),m=t(2613),p=t(4414),[h,f]=(0,d.q)({name:"ModalStylesContext",errorMessage:"useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Modal />\" "}),[b,g]=(0,d.q)({strict:!0,name:"ModalContext",errorMessage:"useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"}),v=e=>{const n={scrollBehavior:"outside",autoFocus:!0,trapFocus:!0,returnFocusOnClose:!0,blockScrollOnMount:!0,allowPinchZoom:!1,motionPreset:"scale",lockFocusAcrossFrames:!0,...e},{portalProps:t,children:o,autoFocus:r,trapFocus:a,initialFocusRef:s,finalFocusRef:i,returnFocusOnClose:d,blockScrollOnMount:f,allowPinchZoom:g,preserveScrollBarGap:v,motionPreset:x,lockFocusAcrossFrames:y,onCloseComplete:k}=n,w=(0,u.o5)("Modal",n),C={...l(n),autoFocus:r,trapFocus:a,initialFocusRef:s,finalFocusRef:i,returnFocusOnClose:d,blockScrollOnMount:f,allowPinchZoom:g,preserveScrollBarGap:v,motionPreset:x,lockFocusAcrossFrames:y};return(0,p.jsx)(b,{value:C,children:(0,p.jsx)(h,{value:w,children:(0,p.jsx)(m.N,{onExitComplete:k,children:C.isOpen&&(0,p.jsx)(c.Z,{...t,children:o})})})})};v.displayName="Modal"},4787:(e,n,t)=>{t.d(n,{c:()=>c});var o=t(8879),r=t(7681),a=t(8039),s=t(1267),i=t(9950),l=t(4414),c=(0,a.R)(((e,n)=>{const{className:t,...a}=e,{bodyId:c,setBodyMounted:d}=(0,o.k3)();(0,i.useEffect)((()=>(d(!0),()=>d(!1))),[d]);const u=(0,r.cx)("chakra-modal__body",t),m=(0,o.x5)();return(0,l.jsx)(s.B.div,{ref:n,className:u,id:c,...a,__css:m.body})}));c.displayName="ModalBody"}}]);