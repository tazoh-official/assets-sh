"use strict";(self.webpackChunkextensions_dev=self.webpackChunkextensions_dev||[]).push([[673],{2673:(t,n,o)=>{o.r(n),o.d(n,{default:()=>v});o(9425);var e=o(3247),i=o(4061),a=o(1317),r=o(9950),d=o(4833),c=o(2875),s=o(8343),l=o(5277),p=o(4414);const x=(0,s.P)(e.az);const h=function(t){let{item:n,dataset:o,index:s,openModal:h,floatingCardData:g}=t;const[u,m]=(0,r.useState)(!1),[f,v]=(0,r.useState)(!1),b=(0,r.useRef)(null);(0,r.useEffect)((()=>{u?(async()=>{if(b.current)try{await b.current.play()}catch(t){}})():(async()=>{if(b.current)try{await b.current.load()}catch(t){}})()}),[u]);const y=(0,d.uJ)(o.videoCard.padding),w=(0,d.L)(o.videoCard.border),C=(0,d.G7)(o.videoCard.overlay.title.textStyle);return(0,p.jsx)(e.az,{onClick:()=>h(s),children:(0,p.jsxs)(x,{aspectRatio:o.videoCard.aspectRatio,borderRadius:"".concat(o.videoCard.borderRadius,"px"),width:"100%",marginX:"auto",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",initial:{scale:1},whileHover:o.videoCard.popOnHover?{scale:o.videoCard.popOnHoverScale}:{},transition:{type:"easeInOut",duration:.2},position:"relative",backgroundColor:o.videoCard.backgroundColor,style:{...y,...w},children:[(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("video",{ref:b,style:{width:"100%",height:"100%",overflow:"hidden",objectFit:"cover",border:"none",borderRadius:"".concat(o.videoCard.videoBorderRadius,"px")},onLoadedData:()=>{m(!0)},controls:!1,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"auto",children:(0,p.jsx)("source",{src:n.previewUrl})}),u?null:(0,p.jsx)(e.az,{height:"100%",width:"100%",position:"absolute",top:0,left:0,zIndex:1,display:"flex",alignItems:"center",overflow:"hidden",style:{...y},children:(0,p.jsx)("img",{src:n.poster,style:{width:"100%",height:"100%",overflow:"hidden",objectFit:"cover",border:"none",borderRadius:"".concat(o.videoCard.videoBorderRadius,"px")},onLoad:()=>{v(!0)}})}),u||f?null:(0,p.jsx)(e.az,{height:"100%",width:"100%",position:"absolute",top:0,left:0,zIndex:1,display:"flex",alignItems:"center",backgroundColor:"gray.100",overflow:"hidden",children:(0,p.jsx)(i.E,{height:"100%",width:"100%"})}),n.pol&&u?(0,p.jsx)("img",{src:n.pol,style:{display:"none"}}):null]}),(0,p.jsx)(e.az,{position:"absolute",top:"4px",right:"4px",width:"100%",display:"flex",flexDirection:"column",alignItems:"flex-end",zIndex:"2",children:(0,p.jsx)(e.az,{children:(0,p.jsx)("button",{className:"mobile-video-button",onClick:t=>{t.stopPropagation(),g.setShowFloatingCard(!1)},children:(0,p.jsx)(l.V2x,{size:"20px"})})})}),(0,p.jsx)(e.az,{position:"absolute",top:0,right:0,zIndex:1,width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"space-around",children:(0,p.jsxs)(e.az,{textAlign:"center",children:[o.videoCard.overlay.playButton.show?(0,p.jsx)("button",{className:"mobile-video-button",style:{background:"none",padding:"0",color:o.videoCard.overlay.playButton.color},children:(0,p.jsx)(c.gSK,{size:o.videoCard.overlay.playButton.size+"px"})}):null,o.videoCard.overlay.title.show?(0,p.jsx)(a.E,{style:C,children:o.videoCard.overlay.title.text}):null]})})]})})};var g=o(4031);const u="(max-width: 650px)",m="(min-width: 651px) and (max-width: 990px)",f="(min-width: 991px)",v=(0,r.forwardRef)(((t,n)=>{let{items:o,dataset:i,openModal:a,floatingCardData:r,isMobileCarousel:d}=t;const[c]=(0,g.U)(u),[s]=(0,g.U)(m),[l]=(0,g.U)(f),x=c?i.container.widthBreakpoints.base.width+"%":s?i.container.widthBreakpoints.sm.width+"%":l?i.container.widthBreakpoints.lg.width+"%":i.container.widthBreakpoints.base.width+"%";return(0,p.jsx)(e.az,{position:"fixed",width:x,zIndex:"2147483647",display:r.isModalOpen||!r.showFloatingCard?"none":"block",style:{...(()=>{const t={};return"left"===i.container.horizontalPosition?t.left=i.container.margin.marginL+"px":"right"===i.container.horizontalPosition?t.right=i.container.margin.marginR+"px":"center"===i.container.horizontalPosition&&(t.left="50%"),"top"===i.container.verticalPosition?t.top=i.container.margin.marginT+"px":"bottom"===i.container.verticalPosition?t.bottom=i.container.margin.marginB+"px":"center"===i.container.verticalPosition&&(t.top="50%"),"center"===i.container.horizontalPosition&&"center"===i.container.verticalPosition?t.transform="translateX(-50%) translateY(-50%)":"center"===i.container.horizontalPosition?t.transform="translateX(-50%)":"center"===i.container.verticalPosition&&(t.transform="translateY(-50%)"),t})()},children:(0,p.jsx)(h,{item:o[0],dataset:i,index:0,openModal:a,floatingCardData:r})})}))},4833:(t,n,o)=>{o.d(n,{BN:()=>c,G7:()=>r,Kb:()=>x,L:()=>s,T:()=>p,b2:()=>l,d_:()=>h,uJ:()=>d});var e=o(8515),i=o.n(e),a=o(3759);const r=t=>{const n={};if(!t)return n;t.fontFamily&&(0,a.BS)(t);for(const[o,e]of Object.entries(t))"fontSize"===o?n.fontSize="".concat(e,"px"):"fontWeight"===o?n.fontWeight=e:"fontStyle"===o?n.fontStyle=e:"textDecoration"===o?n.textDecoration=e:"color"===o?n.color=e:"fontFamily"===o&&(n.fontFamily=e);return n},d=t=>{const n={};if(!t)return n;for(const[o,e]of Object.entries(t))"paddingX"===o?(n.paddingLeft="".concat(e,"px"),n.paddingRight="".concat(e,"px")):"paddingY"===o?(n.paddingTop="".concat(e,"px"),n.paddingBottom="".concat(e,"px")):"paddingL"===o?n.paddingLeft="".concat(e,"px"):"paddingR"===o?n.paddingRight="".concat(e,"px"):"paddingT"===o?n.paddingTop="".concat(e,"px"):"paddingB"===o?n.paddingBottom="".concat(e,"px"):"padding"===o&&(n.padding="".concat(e,"px"));return n},c=t=>{const n={};if(!t)return n;for(const[o,e]of Object.entries(t))"marginX"===o?(n.marginLeft="".concat(e,"px"),n.marginRight="".concat(e,"px")):"marginY"===o?(n.marginTop="".concat(e,"px"),n.marginBottom="".concat(e,"px")):"marginL"===o?n.marginLeft="".concat(e,"px"):"marginR"===o?n.marginRight="".concat(e,"px"):"marginT"===o?n.marginTop="".concat(e,"px"):"marginB"===o?n.marginBottom="".concat(e,"px"):"margin"===o&&(n.margin="".concat(e,"px"));return n},s=t=>{const n={};if(!t)return n;for(const[o,e]of Object.entries(t))"borderRadius"===o?n.borderRadius="".concat(e,"px"):"borderWidth"===o?n.borderWidth="".concat(e,"px"):"borderColor"===o&&(n.borderColor=e);return n};const l=(t,n)=>new(i())(t).tint(n).hexString(),p=(t,n)=>new(i())(t).shade(n).hexString(),x=t=>{const n={};return 0===t||t?(n.minWidth="".concat(t,"px"),n.maxWidth="".concat(t,"px"),n.minHeight="".concat(t,"px"),n.maxHeight="".concat(t,"px"),n):n},h=t=>{const n={};return 0===t||t?(n.minHeight="".concat(t,"px"),n.maxHeight="".concat(t,"px"),n):n}}}]);