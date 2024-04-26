var ft=Object.defineProperty;var bt=(n,t,e)=>t in n?ft(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var i=(n,t,e)=>(bt(n,typeof t!="symbol"?t+"":t,e),e),Re=(n,t,e)=>{if(!t.has(n))throw TypeError("Cannot "+e)};var d=(n,t,e)=>(Re(n,t,"read from private field"),e?e.call(n):t.get(n)),h=(n,t,e)=>{if(t.has(n))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(n):t.set(n,e)},v=(n,t,e,o)=>(Re(n,t,"write to private field"),o?o.call(n,e):t.set(n,e),e);var De=(n,t,e,o)=>({set _(r){v(n,t,r,e)},get _(){return d(n,t,o)}});import _ from"react";import{useCallback as jt,useEffect as Kt,useRef as Xt}from"react";import{intersect as Pt}from"valibot";var yt="invoke";function ee(n){return yt in n}function x(n){return n===null}function ge(n){return n===!0||n===!1}function c(n){return typeof n=="string"}function te(n){return typeof n=="number"&&Number.isFinite(n)}function ne(n){return typeof n=="function"}function g(n){return typeof n=="object"&&n!==null&&!Array.isArray(n)}function he(n){return Array.isArray(n)}function oe(n,t){throw t||new Error(n?`Unexpected value: ${n}`:"Application entered invalid state")}function u(n,...t){if(n)return;let e=Error("Assertion Error"+(t.length>0?": "+t.join(" "):""));if(e.stack)try{let o=e.stack.split(`
`);o[1]?.includes("assert")?(o.splice(1,1),e.stack=o.join(`
`)):o[0]?.includes("assert")&&(o.splice(0,1),e.stack=o.join(`
`))}catch{}throw e}import*as a from"valibot";function I(n){return a.optional(n)}var we=a.boolean(),M=a.number(),j=I(M),S=a.string(),k=I(S);function m(n){return a.object(n)}function fe(n){return I(m(n))}function W(...n){return a.union(n.map(t=>a.literal(t)))}function Ee(...n){return I(a.union(n.map(t=>a.literal(t))))}var Le=n=>a.instance(n),T=a.merge;var ie=a.record,re=a.unknown();var F=a.union,f=a.literal,Me=a.special,Fe=a.is;var un=m({id:S}),xt="ImageAsset",It="__class";function se(n){return g(n)?n[It]===xt:!1}var R,K,p=class{constructor(t,e){i(this,"id");i(this,"url");i(this,"thumbnailUrl");h(this,R,void 0);h(this,K,void 0);u(ee(e)),this.url=t.url,v(this,K,e),this.id=t.id,this.thumbnailUrl=t.thumbnailUrl}async measure(){return Wt(this.url)}async getData(){if(d(this,R)&&d(this,R).bytes.length>0)return d(this,R);let t=await d(this,K).invoke("getImageData",{id:this.id});if(!t)throw new Error("Failed to load image data");return v(this,R,t),t}async loadBitmap(){let{mimeType:t,bytes:e}=await this.getData(),o=new Blob([e],{type:t});return createImageBitmap(o)}async loadImage(){let t=await this.getData(),e=URL.createObjectURL(new Blob([t.bytes]));return new Promise((o,r)=>{let s=new Image;s.onload=()=>o(s),s.onerror=()=>r(),s.src=e})}};R=new WeakMap,K=new WeakMap;var Nt=m({name:k}),Ve=m({bytes:Le(Uint8Array),mimeType:S}),vt=T([Ve,m({type:f("bytes")})]),St=m({type:f("url"),url:S}),At=F([vt,St]),mn=Pt([Nt,At]),Oe=m({svg:S,name:k});function V(n){return n.type==="bytes"?[n.bytes.buffer]:[]}async function X(n){return Fe(Ve,n)?{type:"bytes",...n}:n instanceof File?Tt(n):{type:"url",url:n}}function Ct(n,t){return{...n,name:t}}function be(n){return Promise.all(n.map(async t=>{let e=await X(t.image);return Ct(e,t.name)}))}function kt(n){if(!n.startsWith("image/"))throw new Error(`Unsupported mime type: ${n}`)}async function Tt(n){return new Promise((t,e)=>{let o=new FileReader;o.onload=r=>{let s=n.type;kt(n.type);let l=r.target?.result;if(!l||!(l instanceof ArrayBuffer)){e(new Error("Failed to read file, arrayBuffer is null"));return}let y=new Uint8Array(l);t({bytes:y,mimeType:s,type:"bytes"})},o.onerror=r=>{e(r)},o.readAsArrayBuffer(n)})}async function Wt(n){let t=n instanceof File,e=t?URL.createObjectURL(n):n,o=new Image;return o.crossOrigin="anonymous",o.src=e,await o.decode().finally(()=>{t&&URL.revokeObjectURL(e)}),{height:o.height,width:o.width}}function D(n){if(Dt(n))return wt(n);if(he(n))return n.map(D);if(g(n)){let t={};for(let e in n)t[e]=D(n[e]);return t}return n}function Ue(n,t){let e={};for(let o in n)e[o]=ye(n[o],t);return e}function ye(n,t){if(Rt(n)&&n.__class==="ImageAsset")return new p(n,t);if(g(n)){let e={};for(let o in n)e[o]=ye(n[o],t);return e}return he(n)?n.map(e=>ye(e,t)):n}function Rt(n){return!!se(n)}function Dt(n){return n instanceof p}function wt(n){if(n instanceof p)return{__class:"ImageAsset",id:n.id,thumbnailUrl:n.thumbnailUrl,url:n.url};oe(n)}var Et=(()=>{let n=null;return{disableUntilMouseUp:()=>{if(n)return;n=document.createElement("style"),n.textContent="* { pointer-events: none !important; user-select: none !important; -webkit-user-select: none !important; }",document.head.appendChild(n);let t=()=>{n&&(document.head.removeChild(n),n=null,r())},e=s=>{s.buttons>0&&s.buttons&1||t()},o=()=>{t()};window.addEventListener("pointerup",e,!0),window.addEventListener("pointermove",e,!0),window.addEventListener("blur",o);function r(){window.removeEventListener("pointerup",e,!0),window.removeEventListener("pointermove",e,!0),window.removeEventListener("blur",o)}}}})(),Be=5,Pe=m({dragSessionId:S}),Lt=T([m({type:f("svg")}),Oe]),Mt=m({type:f("image"),image:S,name:k,previewImage:k}),Ft=m({type:f("component"),moduleUrl:S,attributes:I(Me(g)),controlAttributes:I(ie(re))}),In=F([Lt,Mt,Ft]),He=m({x:M,y:M}),_e=m({width:M,height:M}),Vt=T([He,_e]),ze=m({mouse:He}),Ot=m({elementRect:Vt,svgSize:I(_e)}),Nn=T([Pe,Ot,ze]),vn=T([Pe,ze]),Sn=T([Pe,m({cancelled:we})]),Ut=(()=>{let n=1;return{next:()=>`drag-${n++}`}})();function Ge(n,t,e){u(ee(n));let o=document.body.style.cursor,r={type:"idle"},s=document.body,l=P=>{if(r.type==="idle")return;let{dragSessionId:C}=r.dragStart;r.type==="dragging"&&n.invoke("onDragEnd",{...P,dragSessionId:C}),r={type:"idle"},ht()},y=P=>{if(r.type==="idle")return;let{dragSessionId:C}=r.dragStart;if(!(P.buttons>0&&!!(P.buttons&1))){l({cancelled:!1});return}let{clientX:z,clientY:G}=P;if(r.type==="pointerDown"){let L=z-r.dragStart.mouse.x,Te=G-r.dragStart.mouse.y;if(Math.abs(L)<Be&&Math.abs(Te)<Be)return;r={type:"dragging",dragStart:r.dragStart},n.invoke("onDragStart",r.dragStart),document.getSelection()?.empty(),Et.disableUntilMouseUp()}s.setPointerCapture(P.pointerId);let pe={x:z,y:G};n.invoke("onDrag",{dragSessionId:C,mouse:pe}).then(L=>{r.type==="dragging"&&(document.body.style.cursor=L??"")})},Se=P=>{P.key==="Escape"&&l({cancelled:!0})},Ae=()=>{l({cancelled:!0})},Ce=P=>{l({cancelled:!0});let C=t.getBoundingClientRect(),ke={x:C.x,y:C.y,width:C.width,height:C.height},z,G=t.querySelectorAll("svg");if(G.length===1){let We=G.item(0).getBoundingClientRect();z={width:We.width,height:We.height}}let pe={x:P.clientX,y:P.clientY},L=Ut.next();r={type:"pointerDown",dragStart:{dragSessionId:L,elementRect:ke,svgSize:z,mouse:pe}},n.invoke("setDragData",L,e()),s.addEventListener("pointermove",y,!0),s.addEventListener("pointerup",y,!0),window.addEventListener("keydown",Se,!0),window.addEventListener("blur",Ae)};t.addEventListener("pointerdown",Ce);function ht(){document.body.style.cursor=o,s.removeEventListener("pointermove",y,!0),s.removeEventListener("pointerup",y,!0),window.removeEventListener("keydown",Se,!0),window.removeEventListener("blur",Ae)}return()=>{t.removeEventListener("pointerdown",Ce),l({cancelled:!0})}}var Tn=W("default","image","editImage");var Bt={methodResponse:!0,pluginReadyResponse:!0,subscriptionMessage:!0};function Ht(n){return c(n)&&n in Bt}function je(n){return g(n)&&Ht(n["type"])}var Ke=["FrameNode"],_t=["SVGNode","WebPageNode","SmartComponentNode","UnknownNode","CodeComponentNode","TextNode"],Mn=W(...Ke),Fn=W(...Ke,..._t),Vn=ie(re),N,A=class{constructor(t,e){i(this,"id");h(this,N,void 0);u(c(t.id),"Node must have an id"),this.id=t.id,v(this,N,e)}remove(){return d(this,N).removeNode(this.id)}select(){return d(this,N).setSelection([this.id])}clone(){return d(this,N).cloneNode(this.id)}setAttributes(t){return d(this,N).setAttributes(this.id,t)}getRect(){return d(this,N).getRect(this.id)}getParent(){return d(this,N).getParent(this.id)}getChildren(){return ae(this)?Promise.resolve([]):d(this,N).getChildren(this.id)}async*walk(){if(yield this,!ae(this))for(let t of await this.getChildren())yield*await t.walk()}};N=new WeakMap;var w=class extends A{constructor(e,o){super(e,o);i(this,"__class","FrameNode");i(this,"name");i(this,"visible");i(this,"locked");i(this,"backgroundColor");i(this,"backgroundImage");i(this,"backgroundGradient");i(this,"rotation");i(this,"opacity");i(this,"borderRadius");i(this,"position");i(this,"top");i(this,"right");i(this,"bottom");i(this,"left");i(this,"centerX");i(this,"centerY");i(this,"width");i(this,"height");i(this,"maxWidth");i(this,"minWidth");i(this,"maxHeight");i(this,"minHeight");i(this,"aspectRatio");u(e.__class==="FrameNode","FrameNode must have a __class property"),this.name=e.name??null,this.visible=e.visible??!0,this.locked=e.locked??!1,this.backgroundColor=e.backgroundColor??null,this.backgroundImage=e.backgroundImage?new p(e.backgroundImage,o):null,this.backgroundGradient=e.backgroundGradient??null,this.rotation=e.rotation??0,this.opacity=e.opacity??1,this.borderRadius=e.borderRadius??null,u(e.position,"Must have a position"),this.position=e.position,this.left=e.left??null,this.right=e.right??null,this.top=e.top??null,this.bottom=e.bottom??null,this.centerX=e.centerX??null,this.centerY=e.centerY??null,this.width=e.width??null,this.height=e.height??null,this.maxWidth=e.maxWidth??null,this.minWidth=e.minWidth??null,this.maxHeight=e.maxHeight??null,this.minHeight=e.minHeight??null,this.aspectRatio=e.aspectRatio??null}clone(){return super.clone()}setAttributes(e){return super.setAttributes(e)}},Y=class extends A{constructor(e,o){super(e,o);i(this,"__class","TextNode");i(this,"name");i(this,"visible");i(this,"locked");i(this,"rotation");i(this,"opacity");i(this,"position");i(this,"top");i(this,"right");i(this,"bottom");i(this,"left");i(this,"centerX");i(this,"centerY");i(this,"width");i(this,"height");i(this,"maxWidth");i(this,"minWidth");i(this,"maxHeight");i(this,"minHeight");this.name=e.name??null,this.visible=e.visible??!0,this.locked=e.locked??!1,this.rotation=e.rotation??0,this.opacity=e.opacity??1,u(e.position,"Must have a position"),this.position=e.position,this.left=e.left??null,this.right=e.right??null,this.top=e.top??null,this.bottom=e.bottom??null,this.centerX=e.centerX??null,this.centerY=e.centerY??null,this.width=e.width??null,this.height=e.height??null,this.maxWidth=e.maxWidth??null,this.minWidth=e.minWidth??null,this.maxHeight=e.maxHeight??null,this.minHeight=e.minHeight??null}clone(){return super.clone()}setAttributes(e){return super.setAttributes(e)}},$=class extends A{constructor(e,o){super(e,o);i(this,"__class","SVGNode");i(this,"name");i(this,"visible");i(this,"locked");i(this,"svg");i(this,"rotation");i(this,"opacity");i(this,"position");i(this,"top");i(this,"right");i(this,"bottom");i(this,"left");i(this,"centerX");i(this,"centerY");i(this,"width");i(this,"height");u(e.svg,"SVG node must have a non-empty SVG string"),this.name=e.name??null,this.visible=e.visible??!0,this.locked=e.locked??!1,this.svg=e.svg,this.rotation=e.rotation??0,this.opacity=e.opacity??1,u(e.position,"Must have a position"),this.position=e.position??null,this.left=e.left??null,this.right=e.right??null,this.top=e.top??null,this.bottom=e.bottom??null,this.centerX=e.centerX??null,this.centerY=e.centerY??null,this.width=e.width??null,this.height=e.height??null}clone(){return super.clone()}setAttributes(e){return super.setAttributes(e)}},q=class extends A{constructor(e,o){super(e,o);i(this,"__class","CodeComponentNode");i(this,"name");i(this,"visible");i(this,"locked");i(this,"componentIdentifier");i(this,"controlAttributes");i(this,"rotation");i(this,"opacity");i(this,"position");i(this,"top");i(this,"right");i(this,"bottom");i(this,"left");i(this,"centerX");i(this,"centerY");i(this,"width");i(this,"height");i(this,"maxWidth");i(this,"minWidth");i(this,"maxHeight");i(this,"minHeight");i(this,"aspectRatio");u(e.componentIdentifier,"Code component node must have an identifier"),this.name=e.name??null,this.visible=e.visible??!0,this.locked=e.locked??!1,this.componentIdentifier=e.componentIdentifier,this.controlAttributes=Ue(e.controlAttributes??{},o),this.rotation=e.rotation??0,this.opacity=e.opacity??1,u(e.position,"Must have a position"),this.position=e.position,this.left=e.left??null,this.right=e.right??null,this.top=e.top??null,this.bottom=e.bottom??null,this.centerX=e.centerX??null,this.centerY=e.centerY??null,this.width=e.width??null,this.height=e.height??null,this.maxWidth=e.maxWidth??null,this.minWidth=e.minWidth??null,this.maxHeight=e.maxHeight??null,this.minHeight=e.minHeight??null,this.aspectRatio=e.aspectRatio??null}clone(){return super.clone()}setAttributes(e){return super.setAttributes(e)}setControlAttributes(e){return this.setAttributes({controlAttributes:e})}},Q=class extends A{constructor(e,o){super(e,o);i(this,"_class","WebPageNode")}clone(){return super.clone()}setAttributes(e){return super.setAttributes(e)}},J=class extends A{constructor(e,o){super(e,o);i(this,"__class","SmartComponentNode");i(this,"name");this.name=e.name??null}clone(){return super.clone()}setAttributes(e){return super.setAttributes(e)}},Z=class extends A{constructor(e,o){super(e,o);i(this,"__class","UnknownNode")}clone(){throw Error("Can not clone unknown node")}setAttributes(e){throw Error("Can not set attributes on unknown node")}};function b(n,t){switch(n.__class){case"WebPageNode":return new Q(n,t);case"SmartComponentNode":return new J(n,t);case"CodeComponentNode":return new q(n,t);case"FrameNode":return new w(n,t);case"SVGNode":return new $(n,t);case"TextNode":return new Y(n,t);case"UnknownNode":return new Z(n,t);default:return new Z(n,t)}}function xe(n){return D(n)}function Xe(n){return n instanceof w}function Ye(n){return n instanceof Y}function $e(n){return n instanceof $}function de(n){return n instanceof q}function qe(n){return n instanceof Q}function Qe(n){return n instanceof J}function ae(n){return n instanceof Z}function le(n){return!!(Xe(n)||Ye(n)||de(n)||$e(n)||ae(n))}function Ie(n){return!!(qe(n)||Qe(n)||ae(n))}var O=null;function Je(n){if(!O){let e=document.createElement("style");document.head.appendChild(e),O=e.sheet}if(!O){n();return}let t=O.insertRule("* { transition: none !important; animation: none !important; }");n(),requestAnimationFrame(()=>{requestAnimationFrame(()=>{O&&O.deleteRule(t)})})}var zt=0,me,U,E,B,H,ce,ue=class{constructor({isTestEnv:t}={}){h(this,me,0);h(this,U,[]);h(this,E,void 0);h(this,B,new Map);h(this,H,void 0);h(this,ce,new Promise(t=>{v(this,H,t)}));i(this,"subscriptions",new Map);i(this,"onMessage",t=>{let e=t.data;if(je(e))switch(e.type){case"pluginReadyResponse":{if(!t.source)throw new Error("No 'source' on incoming message: "+e.type);u(d(this,H)),d(this,H).call(this,e.mode),this.applyPluginTheme(e.theme),v(this,E,(r,s)=>window.parent.postMessage(r,t.origin,s));for(let r of d(this,U))d(this,E).call(this,...r);v(this,U,[]);break}case"methodResponse":{let o=d(this,B).get(e.id);if(!o)throw new Error(`No handler for response with id ${e.id}`);d(this,B).delete(e.id),e.error?o.reject(e.error):o.resolve(e.result);break}case"subscriptionMessage":{let{topic:o,payload:r}=e,s=this.subscriptions.get(o);if(!s)throw new Error("Received a subscription message but no handler present");for(let l of s)l(r);break}default:oe(e)}});i(this,"applyPluginTheme",t=>{Je(()=>{document.body.setAttribute("data-framer-theme",t.mode);for(let e in t.tokens)document.body.style.setProperty(e,t.tokens[e])})});if(t)return;window.addEventListener("message",this.onMessage);let e={type:"pluginReadySignal",breakingChangesVersion:zt};window.parent.postMessage(e,"*"),this.subscribe("theme",this.applyPluginTheme),window.addEventListener("pointerdown",()=>{this.invoke("onPointerDown")})}invoke(t,...e){return this.invokeTransferable(t,void 0,...e)}invokeTransferable(t,e,...o){return new Promise((r,s)=>{let l={args:o,methodName:t,id:De(this,me)._++,type:"methodInvocation"},y=r;d(this,B).set(l.id,{resolve:y,reject:s}),this.queueMessage(l,e)})}subscribe(t,e){this.queueMessage({type:"subscribe",topic:t});let o=this.subscriptions.get(t)??new Set;return o.add(e),this.subscriptions.set(t,o),()=>{let r=this.subscriptions.get(t)??new Set;r.delete(e),r.size===0&&this.queueMessage({type:"unsubscribe",topic:t}),this.subscriptions.set(t,r)}}queueMessage(t,e){if(!d(this,E)){d(this,U).push([t,e]);return}d(this,E).call(this,t,e)}async showUI(t){return this.invoke("showUI",t)}async hideUI(){return this.invoke("hideUI")}async closePlugin(t,e){return this.invoke("closePlugin",t,e)}async getMode(){return d(this,ce)}async getCurrentUser(){return this.invoke("getCurrentUser")}async getSelection(){return(await this.invoke("getSelection")).map(e=>{let o=b(e,this);return u(le(o)),o})}async setSelection(t){let e=c(t)?[t]:Array.from(t);return this.invoke("setSelection",e)}subscribeToSelection(t){return this.subscribe("selection",e=>{let o=e.map(r=>{let s=b(r,this);return u(le(s)),s});t(o)})}async getCanvasRoot(){let t=await this.invoke("getCanvasRoot"),e=b(t,this);return u(Ie(e)),e}subscribeToCanvasRoot(t){return this.subscribe("canvasRoot",e=>{let o=b(e,this);u(Ie(o)),t(o)})}async getPublishInfo(){return this.invoke("getPublishInfo")}subscribeToPublishInfo(t){return this.subscribe("publishInfo",t)}async createFrameNode(t,e){let o=xe(t),r=await this.invoke("createNode","FrameNode",e??null,o);if(!r)return null;let s=b(r,this);return u(s instanceof w),s}async removeNode(t){return this.invoke("removeNode",t)}async cloneNode(t){let e=await this.invoke("cloneNode",t);return e?b(e,this):null}async getNode(t){let e=await this.invoke("getNode",t);return e?b(e,this):null}async getParent(t){let e=await this.invoke("getParent",t);return e?b(e,this):null}async getChildren(t){return(await this.invoke("getChildren",t)).map(o=>{let r=b(o,this);return u(le(r)),r})}async getRect(t){return this.invoke("getRect",t)}async setAttributes(t,e){let o=xe(e),r=await this.invoke("setAttributes",t,o);return r?b(r,this):null}async setParent(t,e,o){return this.invoke("setParent",t,e,o)}async getImage(){let t=await this.invoke("getImage");return t?new p(t,this):null}subscribeToImage(t){return this.subscribe("image",e=>{if(!e){t(null);return}t(new p(e,this))})}async addImage(t){let e=await X(t instanceof File?t:t.image),o=V(e);return this.invokeTransferable("addImage",o,{...e,name:t?.name})}async setImage(t){let e=await X(t instanceof File?t:t.image),o=V(e);return this.invokeTransferable("setImage",o,{...e,name:t?.name})}async uploadImage(t){let e=await X(t instanceof File?t:t.image),o=V(e),r=await this.invokeTransferable("uploadImage",o,{...e,name:t?.name});return new p(r,this)}async addImages(t){let e=await be(t),o=e.flatMap(V);await this.invokeTransferable("addImages",o,e)}async uploadImages(t){let e=await be(t),o=e.flatMap(V),r=await this.invokeTransferable("uploadImages",o,e),s=[];for(let l of r)s.push(new p(l,this));return s}async addSVG(t){return this.invoke("addSVG",t)}async addComponent(t,e,o){let r=D(e),s=D(o),l=await this.invoke("addComponent",t,g(r)?r:void 0,g(s)?s:void 0);if(!l)return null;let y=b(l,this);return u(de(y),"Code component node must be defined"),y}async getText(){return this.invoke("getText")}async setText(t,e){return this.invoke("setText",t,e)}async addText(t,e){return this.invoke("addText",t,e)}async setCustomCode(t){return this.invoke("setCustomCode",t)}async getCustomCode(){return this.invoke("getCustomCode")}subscribeToCustomCode(t){return this.subscribe("customCode",t)}subscribeToText(t){return this.subscribe("text",t)}makeDraggable(t,e){return Ge(this,t,e)}};me=new WeakMap,U=new WeakMap,E=new WeakMap,B=new WeakMap,H=new WeakMap,ce=new WeakMap;var $n=fe({width:j,height:j,position:Ee("center","top left","bottom left","top right","bottom right"),title:k,resizable:I(F([f(!0),f(!1),f("width"),f("height")])),minWidth:j,minHeight:j}),Gt=W("info","success","error"),qn=fe({variant:I(Gt)});var Ne=new ue;function ve(n,t){let e=Yt(()=>ne(t)?t():t);Kt(()=>{let o=n.current;if(o instanceof HTMLElement)return Ne.makeDraggable(o,e)},[e])}function Yt(n){let t=Xt(n);return t.current=n,jt((...e)=>t.current(...e),[])}var $t=_.forwardRef(function({data:t,children:e,...o},r){let s=_.useRef(null);if(ve(s,t),_.isValidElement(e)){let l=Object.assign({},o);return g(e.props)&&Object.assign(l,e.props),l.ref=Jt(s,r,e.ref),_.cloneElement(e,l)}return _.Children.count(e)>1&&_.Children.only(e),null}),qt="current";function Qt(n){return g(n)&&qt in n}function Jt(...n){return t=>{for(let e of n)ne(e)?e(t):Qt(e)&&(e.current=t)}}var Zt={fixed:!0,sticky:!0,absolute:!0,relative:!0},Ze="position";function co(n){if(!(Ze in n))return!1;let t=n[Ze];return c(t)&&Zt[t]===!0}var et="top";function po(n){if(!(et in n))return!1;let t=n[et];return c(t)||x(t)}var tt="width";function go(n){if(!(tt in n))return!1;let t=n[tt];return c(t)||x(t)}var nt="maxWidth";function ho(n){if(!(nt in n))return!1;let t=n[nt];return c(t)||x(t)}var ot="aspectRatio";function fo(n){if(!(ot in n))return!1;let t=n[ot];return te(t)||x(t)}var it="name";function bo(n){if(!(it in n))return!1;let t=n[it];return c(t)||x(t)}var rt="visible";function yo(n){if(!(rt in n))return!1;let t=n[rt];return ge(t)}var st="locked";function Po(n){if(!(st in n))return!1;let t=n[st];return ge(t)}var at="backgroundColor";function xo(n){if(!(at in n))return!1;let t=n[at];return c(t)||x(t)}var dt="backgroundImage";function Io(n){if(!(dt in n))return!1;let t=n[dt];return t instanceof p||x(t)}var lt="backgroundImage";function No(n){if(!(lt in n))return!1;let t=n[lt];return t instanceof p?!1:se(t)||x(t)}var ut="backgroundGradient";function vo(n){if(!(ut in n))return!1;let t=n[ut];return c(t)||x(t)}var mt="rotation";function So(n){if(!(mt in n))return!1;let t=n[mt];return te(t)}var ct="opacity";function Ao(n){if(!(ct in n))return!1;let t=n[ct];return te(t)}var pt="borderRadius";function Co(n){if(!(pt in n))return!1;let t=n[pt];return c(t)||x(t)}var gt="svg";function ko(n){if(!(gt in n))return!1;let t=n[gt];return c(t)}export{q as CodeComponentNode,$t as Draggable,w as FrameNode,$ as SVGNode,J as SmartComponentNode,Y as TextNode,Q as WebPageNode,Ne as framer,de as isCodeComponentNode,Xe as isFrameNode,$e as isSVGNode,Qe as isSmartComponentNode,Ye as isTextNode,qe as isWebPageNode,ve as useMakeDraggable,fo as withAspectRatio,xo as withBackgroundColor,vo as withBackgroundGradient,Io as withBackgroundImage,No as withBackgroundImageData,Co as withBorderRadius,Po as withLocked,bo as withName,Ao as withOpacity,po as withPins,co as withPosition,So as withRotation,ko as withSVG,go as withSize,ho as withSizeConstraints,yo as withVisible};
