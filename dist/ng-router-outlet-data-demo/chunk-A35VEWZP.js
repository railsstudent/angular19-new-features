import{C as f,G as u,I as m,K as C,N as a,O as r,P as h,S,T as n,V as i,ca as x,ja as g,m as d,pa as v,qa as w,ra as _,z as e}from"./chunk-3HYMCOWP.js";var y=()=>["films"];function E(o,c){if(o&1&&(a(0,"div",0)(1,"div",1)(2,"p"),n(3),r(),a(4,"p"),n(5),r(),a(6,"p"),n(7),r(),a(8,"p"),n(9),r(),a(10,"p"),n(11),r(),a(12,"p"),n(13),r()(),a(14,"a",2),n(15,"Show Films"),r()(),h(16,"router-outlet",3)),o&2){let t=c,s=S();e(3),i("Name: ",t.name,""),e(2),i("Gender: ",t.gender,""),e(2),i("Is Sith? ",t.isSith,""),e(2),i("Eye Color: ",t.eyeColor,""),e(2),i("Hair Color: ",t.hairColor,""),e(2),i("Skin Color: ",t.skinColor,""),e(),m("routerLink",x(8,y)),e(2),m("routerOutletData",s.films())}}var l=class o{fighter=d(v);films=g(()=>this.fighter().films);static \u0275fac=function(t){return new(t||o)};static \u0275cmp=f({type:o,selectors:[["app-starwars-character"]],decls:2,vars:1,consts:[[2,"border","1px solid black"],[1,"character"],[3,"routerLink"],[3,"routerOutletData"]],template:function(t,s){if(t&1&&(a(0,"div"),u(1,E,17,9),r()),t&2){let p;e(),C((p=s.fighter())?1:-1,p)}},dependencies:[_,w],styles:[".character[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap}.character[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:1 1 33.3333333333%}"],changeDetection:0})};var D=[{path:"",component:l,children:[{path:"films",title:"Star Wars Films",loadComponent:()=>import("./chunk-MLZJOP74.js")}]}],L=D;export{L as default};
