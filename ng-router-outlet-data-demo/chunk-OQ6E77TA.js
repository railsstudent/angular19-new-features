import{D as w,a as f,b as p,c as m,f as l,g as i,h,j as d,m as v,o as y,r as c,ra as C,s as b,ta as k,y as g}from"./chunk-J3QYYGPM.js";function x(t){t||(b(x),t=c(g));let r=new m(e=>t.onDestroy(e.next.bind(e)));return e=>e.pipe(v(r))}function R(t){return t?.injector||b(R),C(p(f({},t),{loader:void 0,stream:r=>{let e,n=()=>e.unsubscribe();r.abortSignal.addEventListener("abort",n);let s=w({value:void 0}),a,j=new Promise(o=>a=o);function u(o){s.set(o),a?.(s),a=void 0}return e=t.loader(r).subscribe({next:o=>u({value:o}),error:o=>u({error:o}),complete:()=>{a&&u({error:new Error("Resource completed before producing a value")}),r.abortSignal.removeEventListener("abort",n)}}),j}}))}function O(t,r,e){return{id:t,isSith:r,gender:e.gender,eyeColor:e.eye_color,hairColor:e.hair_color,skinColor:e.skin_color,name:e.name,films:e.films}}var S=class t{#e=c(k);retrieveCharacter(r,e){return this.#e.get(`https://swapi.py4e.com/api/people/${r}`).pipe(i(n=>O(r,e,n)),d(n=>(console.error(n),l(void 0))))}retrieveCharacterNameByUrl(r){return this.#e.get(r).pipe(i(e=>e.name),d(e=>(console.error(e),l(""))))}retrieveCharacters({ids:r,isSith:e}){let n=r.map(s=>this.retrieveCharacter(s,e));return h(n).pipe(i(s=>s.filter(a=>typeof a<"u")))}static \u0275fac=function(e){return new(e||t)};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})};export{x as a,R as b,S as c};
