import{m as y,$,c as x,a as L,b as u,f as a,d as h,e as k,g as w,h as C,i as E,j as O,k as j,l as A,p as N,n as S}from"./vendor.9c0c6751.js";const P=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};P();var c="/assets/malinajs.d8ad9f85.svg",F=y((p,o)=>{const s=x,i=n=>s._d.push(n);L(c);let e="world";var t;{let n=s.$cd;const l=u('<img alt="Malina.js Logo" class="mcg4rnh"/> <h1 class="mcg4rnh"> </h1> <div class="mcg4rnh"><input type="text" class="mcg4rnh"/></div><div class="mcg4rnh">Edit and save file <code>src/App.xht</code> to reload</div> ');let d=l[a],f=l[h][2][a],m=l[h][4][a];k(n,()=>c,r=>{d.src=r}),w(n,d,"transform",()=>`rotate(${t}deg)`),C(n,f,()=>"Hello "+e+"!"),E(n,m,"value",()=>e,r=>{e=r,o()}),O(()=>{m.focus(),o()});{const r=u('<link rel="shortcut icon"/>');let g=r[a];j(n,g,"href",()=>c);let b=r.firstChild,v=r.lastChild;i(()=>{A(b,v)}),document.head.appendChild(r)}return N(n,()=>{t=(e.length-5)*5}),S("mcg4rnh","img.mcg4rnh{display:block;width:200px;margin:60px auto;transition:.2s}h1.mcg4rnh,div.mcg4rnh{text-align:center;min-width:300px;margin:40px auto}input.mcg4rnh{font-size:24px}"),l}},$);F(document.body);
