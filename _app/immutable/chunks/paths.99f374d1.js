import{n as b,s as h}from"./scheduler.7a274a43.js";const e=[];function g(o,a=b){let i;const n=new Set;function r(t){if(h(o,t)&&(o=t,i)){const c=!e.length;for(const s of n)s[1](),e.push(s,o);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(o))}function _(t,c=b){const s=[t,c];return n.add(s),n.size===1&&(i=a(r,f)||b),t(o),()=>{n.delete(s),n.size===0&&i&&(i(),i=null)}}return{set:r,update:f,subscribe:_}}var l;const p=((l=globalThis.__sveltekit_dhcjb3)==null?void 0:l.base)??"/slick-portfolio-svelte";var u;const k=((u=globalThis.__sveltekit_dhcjb3)==null?void 0:u.assets)??p;export{k as a,p as b,g as w};
