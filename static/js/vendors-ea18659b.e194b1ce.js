"use strict";(self.webpackChunkextensions_dev=self.webpackChunkextensions_dev||[]).push([[298],{8159:(e,n,r)=>{r.d(n,{Eq:()=>f});var t=function(e){return"undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body},a=new WeakMap,o=new WeakMap,i={},u=0,c=function(e){return e&&(e.host||c(e.parentNode))},s=function(e,n,r,t){var s=function(e,n){return n.map((function(n){if(e.contains(n))return n;var r=c(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)})).filter((function(e){return Boolean(e)}))}(n,Array.isArray(e)?e:[e]);i[r]||(i[r]=new WeakMap);var f=i[r],l=[],d=new Set,h=new Set(s),p=function(e){e&&!d.has(e)&&(d.add(e),p(e.parentNode))};s.forEach(p);var y=function(e){e&&!h.has(e)&&Array.prototype.forEach.call(e.children,(function(e){if(d.has(e))y(e);else try{var n=e.getAttribute(t),i=null!==n&&"false"!==n,u=(a.get(e)||0)+1,c=(f.get(e)||0)+1;a.set(e,u),f.set(e,c),l.push(e),1===u&&i&&o.set(e,!0),1===c&&e.setAttribute(r,"true"),i||e.setAttribute(t,"true")}catch(n){console.error("aria-hidden: cannot operate on ",e,n)}}))};return y(n),d.clear(),u++,function(){l.forEach((function(e){var n=a.get(e)-1,i=f.get(e)-1;a.set(e,n),f.set(e,i),n||(o.has(e)||e.removeAttribute(t),o.delete(e)),i||e.removeAttribute(r)})),--u||(a=new WeakMap,a=new WeakMap,o=new WeakMap,i={})}},f=function(e,n,r){void 0===r&&(r="data-aria-hidden");var a=Array.from(Array.isArray(e)?e:[e]),o=n||t(e);return o?(a.push.apply(a,Array.from(o.querySelectorAll("[aria-live]"))),s(a,o,r,"aria-hidden")):function(){return null}}}}]);