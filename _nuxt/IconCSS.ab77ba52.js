import{g as p,al as m,k as d,q as o,o as x,c as S,U as f}from"./entry.963fd25d.js";import{_ as v}from"./_plugin-vue_export-helper.c27b6911.js";const z=p({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(u){var c;const s=u;m(n=>({"5fa51ebc":_.value}));const e=d();(c=e==null?void 0:e.nuxtIcon)!=null&&c.aliases;const l=o(()=>{var n;return(((n=e==null?void 0:e.nuxtIcon)==null?void 0:n.aliases)||{})[s.name]||s.name}),_=o(()=>`url('https://api.iconify.design/${l.value.replace(":","/")}.svg')`),a=o(()=>{var t,r,i;if(!s.size&&typeof((t=e.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((r=e.nuxtIcon)!=null&&r.size))return;const n=s.size||((i=e.nuxtIcon)==null?void 0:i.size)||"1em";return String(Number(n))===n?`${n}px`:n});return(n,t)=>(x(),S("span",{style:f({width:a.value,height:a.value})},null,4))}});const g=v(z,[["__scopeId","data-v-5ee01813"]]);export{g as default};
