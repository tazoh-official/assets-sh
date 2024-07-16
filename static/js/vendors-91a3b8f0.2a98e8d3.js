"use strict";(self.webpackChunkextensions_dev=self.webpackChunkextensions_dev||[]).push([[239],{18:(t,n,e)=>{function s(t){window.MotionDebug&&window.MotionDebug.record(t)}e.d(n,{g:()=>s})},8132:(t,n,e)=>{e.d(n,{po:()=>o,tn:()=>a,yT:()=>r});var s=e(817),i=e(1474);const o=t=>1-Math.sin(Math.acos(t)),r=(0,i.G)(o),a=(0,s.V)(o)},9323:(t,n,e)=>{e.d(n,{A:()=>a});var s=e(5627);const i=(t,n,e)=>(((1-3*e+3*n)*t+(3*e-6*n))*t+3*n)*t,o=1e-7,r=12;function a(t,n,e,a){if(t===n&&e===a)return s.l;const c=n=>function(t,n,e,s,a){let c,h,l=0;do{h=n+(e-n)/2,c=i(h,s,a)-t,c>0?e=h:n=h}while(Math.abs(c)>o&&++l<r);return h}(n,0,1,t,e);return t=>0===t||1===t?t:i(c(t),n,a)}},7243:(t,n,e)=>{e.d(n,{a6:()=>i,am:()=>r,vT:()=>o});var s=e(9323);const i=(0,s.A)(.42,0,1,1),o=(0,s.A)(0,0,.58,1),r=(0,s.A)(.42,0,.58,1)},817:(t,n,e)=>{e.d(n,{V:()=>s});const s=t=>n=>n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2},1474:(t,n,e)=>{e.d(n,{G:()=>s});const s=t=>n=>1-t(1-n)},233:(t,n,e)=>{e.d(n,{D:()=>s});const s=t=>Array.isArray(t)&&"number"==typeof t[0]},8531:(t,n,e)=>{e.d(n,{h:()=>s});const s=t=>Array.isArray(t)&&"number"!=typeof t[0]},6611:(t,n,e)=>{e.d(n,{K:()=>p});var s=e(9366),i=e(9323),o=e(5627),r=e(7243),a=e(8132),c=e(817),h=e(1474);const l=(0,i.A)(.33,1.53,.69,.99),u=(0,h.G)(l),d=(0,c.V)(u),m={linear:o.l,easeIn:r.a6,easeInOut:r.am,easeOut:r.vT,circIn:a.po,circInOut:a.tn,circOut:a.yT,backIn:u,backInOut:d,backOut:l,anticipate:t=>(t*=2)<1?.5*u(t):.5*(2-Math.pow(2,-10*(t-1)))},p=t=>{if(Array.isArray(t)){(0,s.V)(4===t.length,"Cubic bezier arrays must contain four numerical values.");const[n,e,o,r]=t;return(0,i.A)(n,e,o,r)}return"string"==typeof t?((0,s.V)(void 0!==m[t],"Invalid easing type '".concat(t,"'")),m[t]):t}},3118:(t,n,e)=>{function s(t,n,e){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!0};return t.addEventListener(n,e,s),()=>t.removeEventListener(n,e)}e.d(n,{k:()=>s})},5813:(t,n,e)=>{e.d(n,{h:()=>o});var s=e(3118),i=e(7960);function o(t,n,e,o){return(0,s.k)(t,n,(0,i.F)(e),o)}},7960:(t,n,e)=>{e.d(n,{F:()=>o,e:()=>i});var s=e(1398);function i(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"page";return{point:{x:t["".concat(n,"X")],y:t["".concat(n,"Y")]}}}const o=t=>n=>(0,s.M)(n)&&t(n,i(n))},1398:(t,n,e)=>{e.d(n,{M:()=>s});const s=t=>"mouse"===t.pointerType?"number"!=typeof t.button||t.button<=0:!1!==t.isPrimary},6494:(t,n,e)=>{e.d(n,{I:()=>a});var s=e(3628);class i{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);-1!==n&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}const o=["read","resolveKeyframes","update","preRender","render","postRender"],r=40;function a(t,n){let e=!1,a=!0;const c={delta:0,timestamp:0,isProcessing:!1},h=o.reduce(((t,n)=>(t[n]=function(t){let n=new i,e=new i,s=0,o=!1,r=!1;const a=new WeakSet,c={schedule:function(t){const i=arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&o,r=i?n:e;return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&a.add(t),r.add(t)&&i&&o&&(s=n.order.length),t},cancel:t=>{e.remove(t),a.delete(t)},process:i=>{if(o)r=!0;else{if(o=!0,[n,e]=[e,n],e.clear(),s=n.order.length,s)for(let e=0;e<s;e++){const s=n.order[e];a.has(s)&&(c.schedule(s),t()),s(i)}o=!1,r&&(r=!1,c.process(i))}}};return c}((()=>e=!0)),t)),{}),l=t=>{h[t].process(c)},u=()=>{const i=s.W.useManualTiming?c.timestamp:performance.now();e=!1,c.delta=a?1e3/60:Math.max(Math.min(i-c.timestamp,r),1),c.timestamp=i,c.isProcessing=!0,o.forEach(l),c.isProcessing=!1,e&&n&&(a=!1,t(u))},d=o.reduce(((n,s)=>{const i=h[s];return n[s]=function(n){let s=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e||(e=!0,a=!0,c.isProcessing||t(u)),i.schedule(n,s,o)},n}),{});return{schedule:d,cancel:t=>o.forEach((n=>h[n].cancel(t))),state:c,steps:h}}},7800:(t,n,e)=>{e.d(n,{Ci:()=>c,Gt:()=>o,WG:()=>r,uv:()=>a});var s=e(5627),i=e(6494);const{schedule:o,cancel:r,state:a,steps:c}=(0,i.I)("undefined"!=typeof requestAnimationFrame?requestAnimationFrame:s.l,!0)},564:(t,n,e)=>{e.d(n,{k:()=>i});var s=e(6494);const{schedule:i,cancel:o}=(0,s.I)(queueMicrotask,!1)},7030:(t,n,e)=>{e.d(n,{k:()=>a});var s=e(3628),i=e(7800);let o;function r(){o=void 0}const a={now:()=>(void 0===o&&a.set(i.uv.isProcessing||s.W.useManualTiming?i.uv.timestamp:performance.now()),o),set:t=>{o=t,queueMicrotask(r)}}},3212:(t,n,e)=>{e.d(n,{w:()=>G});var s=e(1876),i=e(5627),o=e(9366),r=e(9779),a=e(5682),c=e(4577),h=e(5813),l=e(7922),u=e(3024),d=e(3904),m=e(4625);function p(t,n,e){return{min:void 0!==n?t.min+n:void 0,max:void 0!==e?t.max+e-(t.max-t.min):void 0}}function v(t,n){let e=n.min-t.min,s=n.max-t.max;return n.max-n.min<t.max-t.min&&([e,s]=[s,e]),{min:e,max:s}}const g=.35;function f(t,n,e){return{min:P(t,n),max:P(t,e)}}function P(t,n){return"number"==typeof t?t:t[n]||0}var x=e(8826),E=e(474),y=e(4005),A=e(7960),w=e(8176),M=e(3118),S=e(7813),k=e(722),L=e(8396),b=e(7800);const C=new WeakMap;class T{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=(0,x.ge)(),this.visualElement=t}start(t){let{snapToCursor:n=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{presenceContext:e}=this.visualElement;if(e&&!1===e.isPresent)return;const{dragSnapToOrigin:s}=this.getProps();this.panSession=new r.Q(t,{onSessionStart:t=>{const{dragSnapToOrigin:e}=this.getProps();e?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor((0,A.e)(t,"page").point)},onStart:(t,n)=>{const{drag:e,dragPropagation:s,onDragStart:i}=this.getProps();if(e&&!s&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=(0,a.nQ)(e),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),(0,E.X)((t=>{let n=this.getAxisMotionValue(t).get()||0;if(S.KN.test(n)){const{projection:e}=this.visualElement;if(e&&e.layout){const s=e.layout.layoutBox[t];if(s){n=(0,u.CQ)(s)*(parseFloat(n)/100)}}}this.originPoint[t]=n})),i&&b.Gt.postRender((()=>i(t,n)));const{animationState:o}=this.visualElement;o&&o.setActive("whileDrag",!0)},onMove:(t,n)=>{const{dragPropagation:e,dragDirectionLock:s,onDirectionLock:i,onDrag:o}=this.getProps();if(!e&&!this.openGlobalLock)return;const{offset:r}=n;if(s&&null===this.currentDirection)return this.currentDirection=function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,e=null;Math.abs(t.y)>n?e="y":Math.abs(t.x)>n&&(e="x");return e}(r),void(null!==this.currentDirection&&i&&i(this.currentDirection));this.updateAxis("x",n.point,r),this.updateAxis("y",n.point,r),this.visualElement.render(),o&&o(t,n)},onSessionEnd:(t,n)=>this.stop(t,n),resumeAnimation:()=>(0,E.X)((t=>{var n;return"paused"===this.getAnimationState(t)&&(null===(n=this.getAxisMotionValue(t).animation)||void 0===n?void 0:n.play())}))},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:s,contextWindow:(0,L.s)(this.visualElement)})}stop(t,n){const e=this.isDragging;if(this.cancel(),!e)return;const{velocity:s}=n;this.startAnimation(s);const{onDragEnd:i}=this.getProps();i&&b.Gt.postRender((()=>i(t,n)))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:e}=this.getProps();!e&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,e){const{drag:s}=this.getProps();if(!e||!D(t,s,this.currentDirection))return;const i=this.getAxisMotionValue(t);let o=this.originPoint[t]+e[t];this.constraints&&this.constraints[t]&&(o=function(t,n,e){let{min:s,max:i}=n;return void 0!==s&&t<s?t=e?(0,m.k)(s,t,e.min):Math.max(t,s):void 0!==i&&t>i&&(t=e?(0,m.k)(i,t,e.max):Math.min(t,i)),t}(o,this.constraints[t],this.elastic[t])),i.set(o)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:e}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):null===(t=this.visualElement.projection)||void 0===t?void 0:t.layout,i=this.constraints;n&&(0,c.X)(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!n||!s)&&function(t,n){let{top:e,left:s,bottom:i,right:o}=n;return{x:p(t.x,s,o),y:p(t.y,e,i)}}(s.layoutBox,n),this.elastic=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;return!1===t?t=0:!0===t&&(t=g),{x:f(t,"left","right"),y:f(t,"top","bottom")}}(e),i!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&(0,E.X)((t=>{!1!==this.constraints&&this.getAxisMotionValue(t)&&(this.constraints[t]=function(t,n){const e={};return void 0!==n.min&&(e.min=n.min-t.min),void 0!==n.max&&(e.max=n.max-t.min),e}(s.layoutBox[t],this.constraints[t]))}))}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!(0,c.X)(t))return!1;const e=t.current;(0,o.V)(null!==e,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");const{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const i=(0,y.L)(e,s.root,this.visualElement.getTransformPagePoint());let r=function(t,n){return{x:v(t.x,n.x),y:v(t.y,n.y)}}(s.layout.layoutBox,i);if(n){const t=n((0,w.pA)(r));this.hasMutatedConstraints=!!t,t&&(r=(0,w.FY)(t))}return r}startAnimation(t){const{drag:n,dragMomentum:e,dragElastic:s,dragTransition:i,dragSnapToOrigin:o,onDragTransitionEnd:r}=this.getProps(),a=this.constraints||{},c=(0,E.X)((r=>{if(!D(r,n,this.currentDirection))return;let c=a&&a[r]||{};o&&(c={min:0,max:0});const h=s?200:1e6,l=s?40:1e7,u={type:"inertia",velocity:e?t[r]:0,bounceStiffness:h,bounceDamping:l,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(r,u)}));return Promise.all(c).then(r)}startAxisValueAnimation(t,n){const e=this.getAxisMotionValue(t);return e.start((0,k.f)(t,e,0,n,this.visualElement))}stopAnimation(){(0,E.X)((t=>this.getAxisMotionValue(t).stop()))}pauseAnimation(){(0,E.X)((t=>{var n;return null===(n=this.getAxisMotionValue(t).animation)||void 0===n?void 0:n.pause()}))}getAnimationState(t){var n;return null===(n=this.getAxisMotionValue(t).animation)||void 0===n?void 0:n.state}getAxisMotionValue(t){const n="_drag".concat(t.toUpperCase()),e=this.visualElement.getProps(),s=e[n];return s||this.visualElement.getValue(t,(e.initial?e.initial[t]:void 0)||0)}snapToCursor(t){(0,E.X)((n=>{const{drag:e}=this.getProps();if(!D(n,e,this.currentDirection))return;const{projection:s}=this.visualElement,i=this.getAxisMotionValue(n);if(s&&s.layout){const{min:e,max:o}=s.layout.layoutBox[n];i.set(t[n]-(0,m.k)(e,o,.5))}}))}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:e}=this.visualElement;if(!(0,c.X)(n)||!e||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};(0,E.X)((t=>{const n=this.getAxisMotionValue(t);if(n&&!1!==this.constraints){const e=n.get();s[t]=function(t,n){let e=.5;const s=(0,u.CQ)(t),i=(0,u.CQ)(n);return i>s?e=(0,l.q)(n.min,n.max-s,t.min):s>i&&(e=(0,l.q)(t.min,t.max-i,n.min)),(0,d.q)(0,1,e)}({min:e,max:e},this.constraints[t])}}));const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",e.root&&e.root.updateScroll(),e.updateLayout(),this.resolveConstraints(),(0,E.X)((n=>{if(!D(n,t,null))return;const e=this.getAxisMotionValue(n),{min:i,max:o}=this.constraints[n];e.set((0,m.k)(i,o,s[n]))}))}addListeners(){if(!this.visualElement.current)return;C.set(this.visualElement,this);const t=this.visualElement.current,n=(0,h.h)(t,"pointerdown",(t=>{const{drag:n,dragListener:e=!0}=this.getProps();n&&e&&this.start(t)})),e=()=>{const{dragConstraints:t}=this.getProps();(0,c.X)(t)&&(this.constraints=this.resolveRefConstraints())},{projection:s}=this.visualElement,i=s.addEventListener("measure",e);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),e();const o=(0,M.k)(window,"resize",(()=>this.scalePositionWithinConstraints())),r=s.addEventListener("didUpdate",(t=>{let{delta:n,hasLayoutChanged:e}=t;this.isDragging&&e&&((0,E.X)((t=>{const e=this.getAxisMotionValue(t);e&&(this.originPoint[t]+=n[t].translate,e.set(e.get()+n[t].translate))})),this.visualElement.render())}));return()=>{o(),n(),i(),r&&r()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:e=!1,dragPropagation:s=!1,dragConstraints:i=!1,dragElastic:o=g,dragMomentum:r=!0}=t;return{...t,drag:n,dragDirectionLock:e,dragPropagation:s,dragConstraints:i,dragElastic:o,dragMomentum:r}}}function D(t,n,e){return!(!0!==n&&n!==t||null!==e&&e!==t)}class G extends s.X{constructor(t){super(t),this.removeGroupControls=i.l,this.removeListeners=i.l,this.controls=new T(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||i.l}unmount(){this.removeGroupControls(),this.removeListeners()}}},5682:(t,n,e)=>{function s(t){let n=null;return()=>{const e=()=>{n=null};return null===n&&(n=t,e)}}e.d(n,{D3:()=>a,nQ:()=>r});const i=s("dragHorizontal"),o=s("dragVertical");function r(t){let n=!1;if("y"===t)n=o();else if("x"===t)n=i();else{const t=i(),e=o();t&&e?n=()=>{t(),e()}:(t&&t(),e&&e())}return n}function a(){const t=r(!0);return!t||(t(),!1)}},4976:(t,n,e)=>{e.d(n,{c:()=>r});var s=e(3118),i=e(1876),o=e(4475);class r extends i.X{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch(n){t=!0}t&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=(0,o.F)((0,s.k)(this.node.current,"focus",(()=>this.onFocus())),(0,s.k)(this.node.current,"blur",(()=>this.onBlur())))}unmount(){}}},238:(t,n,e)=>{e.d(n,{e:()=>h});var s=e(5813),i=e(4475),o=e(5682),r=e(1876),a=e(7800);function c(t,n){const e=n?"pointerenter":"pointerleave",i=n?"onHoverStart":"onHoverEnd";return(0,s.h)(t.current,e,((e,s)=>{if("touch"===e.pointerType||(0,o.D3)())return;const r=t.getProps();t.animationState&&r.whileHover&&t.animationState.setActive("whileHover",n);const c=r[i];c&&a.Gt.postRender((()=>c(e,s)))}),{passive:!t.getProps()[i]})}class h extends r.X{mount(){this.unmount=(0,i.F)(c(this.node,!0),c(this.node,!1))}unmount(){}}},9779:(t,n,e)=>{e.d(n,{Q:()=>l});var s=e(7960),i=e(2449),o=e(5813),r=e(4475),a=e(7794),c=e(1398),h=e(7800);class l{constructor(t,n){let{transformPagePoint:e,contextWindow:i,dragSnapToOrigin:l=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;const t=m(this.lastMoveEventInfo,this.history),n=null!==this.startEvent,e=(0,a.w)(t.offset,{x:0,y:0})>=3;if(!n&&!e)return;const{point:s}=t,{timestamp:i}=h.uv;this.history.push({...s,timestamp:i});const{onStart:o,onMove:r}=this.handlers;n||(o&&o(this.lastMoveEvent,t),this.startEvent=this.lastMoveEvent),r&&r(this.lastMoveEvent,t)},this.handlePointerMove=(t,n)=>{this.lastMoveEvent=t,this.lastMoveEventInfo=u(n,this.transformPagePoint),h.Gt.update(this.updatePoint,!0)},this.handlePointerUp=(t,n)=>{this.end();const{onEnd:e,onSessionEnd:s,resumeAnimation:i}=this.handlers;if(this.dragSnapToOrigin&&i&&i(),!this.lastMoveEvent||!this.lastMoveEventInfo)return;const o=m("pointercancel"===t.type?this.lastMoveEventInfo:u(n,this.transformPagePoint),this.history);this.startEvent&&e&&e(t,o),s&&s(t,o)},!(0,c.M)(t))return;this.dragSnapToOrigin=l,this.handlers=n,this.transformPagePoint=e,this.contextWindow=i||window;const d=u((0,s.e)(t),this.transformPagePoint),{point:p}=d,{timestamp:v}=h.uv;this.history=[{...p,timestamp:v}];const{onSessionStart:g}=n;g&&g(t,m(d,this.history)),this.removeListeners=(0,r.F)((0,o.h)(this.contextWindow,"pointermove",this.handlePointerMove),(0,o.h)(this.contextWindow,"pointerup",this.handlePointerUp),(0,o.h)(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),(0,h.WG)(this.updatePoint)}}function u(t,n){return n?{point:n(t.point)}:t}function d(t,n){return{x:t.x-n.x,y:t.y-n.y}}function m(t,n){let{point:e}=t;return{point:e,delta:d(e,v(n)),offset:d(e,p(n)),velocity:g(n,.1)}}function p(t){return t[0]}function v(t){return t[t.length-1]}function g(t,n){if(t.length<2)return{x:0,y:0};let e=t.length-1,s=null;const o=v(t);for(;e>=0&&(s=t[e],!(o.timestamp-s.timestamp>(0,i.f)(n)));)e--;if(!s)return{x:0,y:0};const r=(0,i.X)(o.timestamp-s.timestamp);if(0===r)return{x:0,y:0};const a={x:(o.x-s.x)/r,y:(o.y-s.y)/r};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}},1416:(t,n,e)=>{e.d(n,{f:()=>l});var s=e(9779),i=e(5813),o=e(1876),r=e(5627),a=e(8396),c=e(7800);const h=t=>(n,e)=>{t&&c.Gt.postRender((()=>t(n,e)))};class l extends o.X{constructor(){super(...arguments),this.removePointerDownListener=r.l}onPointerDown(t){this.session=new s.Q(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:(0,a.s)(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:e,onPanEnd:s}=this.node.getProps();return{onSessionStart:h(t),onStart:h(n),onMove:e,onEnd:(t,n)=>{delete this.session,s&&c.Gt.postRender((()=>s(t,n)))}}}mount(){this.removePointerDownListener=(0,i.h)(this.node.current,"pointerdown",(t=>this.onPointerDown(t)))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},3479:(t,n,e)=>{e.d(n,{H:()=>m});var s=e(7960),i=e(3118),o=e(5813),r=e(1876),a=e(4475),c=e(5682);const h=(t,n)=>!!n&&(t===n||h(t,n.parentElement));var l=e(5627),u=e(7800);function d(t,n){if(!n)return;const e=new PointerEvent("pointer"+t);n(e,(0,s.e)(e))}class m extends r.X{constructor(){super(...arguments),this.removeStartListeners=l.l,this.removeEndListeners=l.l,this.removeAccessibleListeners=l.l,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const e=this.node.getProps(),s=(0,o.h)(window,"pointerup",((t,n)=>{if(!this.checkPressEnd())return;const{onTap:e,onTapCancel:s,globalTapTarget:i}=this.node.getProps(),o=i||h(this.node.current,t.target)?e:s;o&&u.Gt.update((()=>o(t,n)))}),{passive:!(e.onTap||e.onPointerUp)}),i=(0,o.h)(window,"pointercancel",((t,n)=>this.cancelPress(t,n)),{passive:!(e.onTapCancel||e.onPointerCancel)});this.removeEndListeners=(0,a.F)(s,i),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=(0,i.k)(this.node.current,"keydown",(t=>{if("Enter"!==t.key||this.isPressing)return;this.removeEndListeners(),this.removeEndListeners=(0,i.k)(this.node.current,"keyup",(t=>{"Enter"===t.key&&this.checkPressEnd()&&d("up",((t,n)=>{const{onTap:e}=this.node.getProps();e&&u.Gt.postRender((()=>e(t,n)))}))})),d("down",((t,n)=>{this.startPress(t,n)}))})),n=(0,i.k)(this.node.current,"blur",(()=>{this.isPressing&&d("cancel",((t,n)=>this.cancelPress(t,n)))}));this.removeAccessibleListeners=(0,a.F)(t,n)}}startPress(t,n){this.isPressing=!0;const{onTapStart:e,whileTap:s}=this.node.getProps();s&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),e&&u.Gt.postRender((()=>e(t,n)))}checkPressEnd(){this.removeEndListeners(),this.isPressing=!1;return this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!(0,c.D3)()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:e}=this.node.getProps();e&&u.Gt.postRender((()=>e(t,n)))}mount(){const t=this.node.getProps(),n=(0,o.h)(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),e=(0,i.k)(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=(0,a.F)(n,e)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}}}]);