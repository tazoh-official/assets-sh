"use strict";(self.webpackChunkextensions_dev=self.webpackChunkextensions_dev||[]).push([[285],{1876:(t,e,n)=>{n.d(e,{X:()=>o});class o{constructor(t){this.isMounted=!1,this.node=t}update(){}}},7793:(t,e,n)=>{n.d(e,{W:()=>d});var o=n(498),r=n(5636),s=n(1876);class i extends s.X{constructor(t){super(t),t.animationState||(t.animationState=(0,r.L)(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),(0,o.N)(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:e}=this.node.prevProps||{};t!==e&&this.updateAnimationControlsSubscription()}unmount(){}}let a=0;class u extends s.X{constructor(){super(...arguments),this.id=a++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:e}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===n)return;const o=this.node.animationState.setActive("exit",!t);e&&!t&&o.then((()=>e(this.id)))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const d={animation:{Feature:i},exit:{Feature:u}}},5132:(t,e,n)=>{n.d(e,{B:()=>r});const o={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},r={};for(const t in o)r[t]={isEnabled:e=>o[t].some((t=>!!e[t]))}},864:(t,e,n)=>{n.d(e,{$:()=>a});var o=n(3212),r=n(1416),s=n(1007),i=n(4944);const a={pan:{Feature:r.f},drag:{Feature:o.w,ProjectionNode:i.P,MeasureLayout:s.$}}},3956:(t,e,n)=>{n.d(e,{n:()=>h});var o=n(238),r=n(4976),s=n(3479),i=n(1876);const a=new WeakMap,u=new WeakMap,d=t=>{const e=a.get(t.target);e&&e(t)},c=t=>{t.forEach(d)};function l(t,e,n){const o=function(t){let{root:e,...n}=t;const o=e||document;u.has(o)||u.set(o,{});const r=u.get(o),s=JSON.stringify(n);return r[s]||(r[s]=new IntersectionObserver(c,{root:e,...n})),r[s]}(e);return a.set(t,n),o.observe(t),()=>{a.delete(t),o.unobserve(t)}}const p={some:0,all:1};class m extends i.X{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:e,margin:n,amount:o="some",once:r}=t,s={root:e?e.current:void 0,rootMargin:n,threshold:"number"==typeof o?o:p[o]};return l(this.node.current,s,(t=>{const{isIntersecting:e}=t;if(this.isInView===e)return;if(this.isInView=e,r&&!e&&this.hasEnteredView)return;e&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",e);const{onViewportEnter:n,onViewportLeave:o}=this.node.getProps(),s=e?n:o;s&&s(t)}))}mount(){this.startObserver()}update(){if("undefined"==typeof IntersectionObserver)return;const{props:t,prevProps:e}=this.node,n=["amount","margin","root"].some(function(t){let{viewport:e={}}=t,{viewport:n={}}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t=>e[t]!==n[t]}(t,e));n&&this.startObserver()}unmount(){}}const h={inView:{Feature:m},tap:{Feature:s.H},focus:{Feature:r.c},hover:{Feature:o.e}}},5148:(t,e,n)=>{n.d(e,{Z:()=>s});var o=n(4944),r=n(1007);const s={layout:{ProjectionNode:o.P,MeasureLayout:r.$}}},1007:(t,e,n)=>{n.d(e,{$:()=>v});var o=n(4414),r=n(9950),s=n(7168),i=n(6017),a=n(7781),u=n(7991),d=n(2530),c=n(4237),l=n(7365),p=n(564),m=n(7800);class h extends r.Component{componentDidMount(){const{visualElement:t,layoutGroup:e,switchLayoutGroup:n,layoutId:o}=this.props,{projection:r}=t;(0,l.$)(f),r&&(e.group&&e.group.add(r),n&&n.register&&o&&n.register(r),r.root.didUpdate(),r.addEventListener("animationComplete",(()=>{this.safeToRemove()})),r.setOptions({...r.options,onExitComplete:()=>this.safeToRemove()})),u.w.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:e,visualElement:n,drag:o,isPresent:r}=this.props,s=n.projection;return s?(s.isPresent=r,o||t.layoutDependency!==e||void 0===e?s.willUpdate():this.safeToRemove(),t.isPresent!==r&&(r?s.promote():s.relegate()||m.Gt.postRender((()=>{const t=s.getStack();t&&t.members.length||this.safeToRemove()}))),null):null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),p.k.postRender((()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()})))}componentWillUnmount(){const{visualElement:t,layoutGroup:e,switchLayoutGroup:n}=this.props,{projection:o}=t;o&&(o.scheduleCheckAfterUnmount(),e&&e.group&&e.group.remove(o),n&&n.deregister&&n.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function v(t){const[e,n]=(0,s.xQ)(),u=(0,r.useContext)(i.L);return(0,o.jsx)(h,{...t,layoutGroup:u,switchLayoutGroup:(0,r.useContext)(a.N),isPresent:e,safeToRemove:n})}const f={borderRadius:{...d.P,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:d.P,borderTopRightRadius:d.P,borderBottomLeftRadius:d.P,borderBottomRightRadius:d.P,boxShadow:c._}},1439:(t,e,n)=>{n.d(e,{G:()=>y});var o=n(4414),r=n(9950),s=n(2278),i=n(2913),a=n(3487),u=n(7544),d=n(8384),c=n(9512),l=n(564);var p=n(4577);function m(t,e,n){return(0,r.useCallback)((o=>{o&&t.mount&&t.mount(o),e&&(o?e.mount(o):e.unmount()),n&&("function"==typeof n?n(o):(0,p.X)(n)&&(n.current=o))}),[e])}var h=n(634),v=n(5132);var f=n(7584),g=n(6017),w=n(7781);const C=Symbol.for("motionComponentSymbol");function y(t){let{preloadedFeatures:e,createVisualElement:n,useRender:p,useVisualState:g,Component:y}=t;e&&function(t){for(const e in t)v.B[e]={...v.B[e],...t[e]}}(e);const E=(0,r.forwardRef)((function(t,v){let C;const E={...(0,r.useContext)(s.Q),...t,layoutId:x(t)},{isStatic:S}=E,b=(0,h.z)(t),P=g(t,S);if(!S&&f.B){b.visualElement=function(t,e,n,o){const{visualElement:p}=(0,r.useContext)(i.A),m=(0,r.useContext)(d.Y),h=(0,r.useContext)(a.t),v=(0,r.useContext)(s.Q).reducedMotion,f=(0,r.useRef)();o=o||m.renderer,!f.current&&o&&(f.current=o(t,{visualState:e,parent:p,props:n,presenceContext:h,blockInitialAnimation:!!h&&!1===h.initial,reducedMotionConfig:v}));const g=f.current;(0,r.useInsertionEffect)((()=>{g&&g.update(n,h)}));const w=(0,r.useRef)(Boolean(n[c.n]&&!window.HandoffComplete));return(0,u.E)((()=>{g&&(l.k.render(g.render),w.current&&g.animationState&&g.animationState.animateChanges())})),(0,r.useEffect)((()=>{g&&(g.updateFeatures(),!w.current&&g.animationState&&g.animationState.animateChanges(),w.current&&(w.current=!1,window.HandoffComplete=!0))})),g}(y,P,E,n);const t=(0,r.useContext)(w.N),o=(0,r.useContext)(d.Y).strict;b.visualElement&&(C=b.visualElement.loadFeatures(E,o,e,t))}return(0,o.jsxs)(i.A.Provider,{value:b,children:[C&&b.visualElement?(0,o.jsx)(C,{visualElement:b.visualElement,...E}):null,p(y,t,m(P,b.visualElement,v),P,S,b.visualElement)]})}));return E[C]=y,E}function x(t){let{layoutId:e}=t;const n=(0,r.useContext)(g.L).id;return n&&void 0!==e?n+"-"+e:e}},61:(t,e,n)=>{n.d(e,{z:()=>s});var o=n(7365),r=n(2760);function s(t,e){let{layout:n,layoutId:s}=e;return r.f.has(t)||t.startsWith("origin")||(n||void 0!==s)&&(!!o.H[t]||"opacity"===t)}},3574:(t,e,n)=>{n.d(e,{T:()=>l});var o=n(9950),r=n(498),s=n(3487),i=n(5285),a=n(9305),u=n(3378),d=n(2913),c=n(7349);const l=t=>(e,n)=>{const r=(0,o.useContext)(d.A),i=(0,o.useContext)(s.t),u=()=>function(t,e,n,o){let{scrapeMotionValuesFromProps:r,createRenderState:s,onMount:i}=t;const a={latestValues:p(e,n,o,r),renderState:s()};return i&&(a.mount=t=>i(e,t,a)),a}(t,e,r,i);return n?u():(0,a.M)(u)};function p(t,e,n,o){const s={},a=o(t,{});for(const t in a)s[t]=(0,u.u)(a[t]);let{initial:d,animate:l}=t;const p=(0,c.e)(t),m=(0,c.O)(t);e&&m&&!p&&!1!==t.inherit&&(void 0===d&&(d=e.initial),void 0===l&&(l=e.animate));let h=!!n&&!1===n.initial;h=h||!1===d;const v=h?l:d;if(v&&"boolean"!=typeof v&&!(0,r.N)(v)){(Array.isArray(v)?v:[v]).forEach((e=>{const n=(0,i.a)(t,e);if(!n)return;const{transitionEnd:o,transition:r,...a}=n;for(const t in a){let e=a[t];if(Array.isArray(e)){e=e[h?e.length-1:0]}null!==e&&(s[t]=e)}for(const t in o)s[t]=o[t]}))}return s}},4184:(t,e,n)=>{n.d(e,{S:()=>r});const o=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function r(t){return t.startsWith("while")||t.startsWith("drag")&&"draggable"!==t||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||o.has(t)}}}]);