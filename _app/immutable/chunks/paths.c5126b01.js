import{n as b,s as p}from"./scheduler.7a274a43.js";const e=[];function k(o,u=b){let i;const n=new Set;function r(t){if(p(o,t)&&(o=t,i)){const c=!e.length;for(const s of n)s[1](),e.push(s,o);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(o))}function _(t,c=b){const s=[t,c];return n.add(s),n.size===1&&(i=u(r,f)||b),t(o),()=>{n.delete(s),n.size===0&&i&&(i(),i=null)}}return{set:r,update:f,subscribe:_}}var a;const h=((a=globalThis.__sveltekit_szkxa3)==null?void 0:a.base)??"/slick-portfolio-svelte";var l;const d=((l=globalThis.__sveltekit_szkxa3)==null?void 0:l.assets)??h;export{d as a,h as b,k as w};
