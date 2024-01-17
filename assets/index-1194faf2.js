(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F=function(t,e){if(!t)throw ar(e)},ar=function(t){return new Error("Firebase Database ("+Ay.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Z0=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ul={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(n[u],n[h],n[d],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Sy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Z0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new eC;const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class eC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ry=function(t){const e=Sy(t);return Ul.encodeByteArray(e,!0)},Wa=function(t){return Ry(t).replace(/\./g,"")},Ha=function(t){try{return Ul.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(t){return Py(void 0,t)}function Py(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!nC(n)||(t[n]=Py(t[n],e[n]));return t}function nC(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=()=>sC().__FIREBASE_DEFAULTS__,rC=()=>{if(typeof process>"u"||typeof{}>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},oC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ha(t[1]);return e&&JSON.parse(e)},md=()=>{try{return iC()||rC()||oC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},aC=t=>{var e,n;return(n=(e=md())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},lC=t=>{const e=aC(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},ky=()=>{var t;return(t=md())===null||t===void 0?void 0:t.config},cC=t=>{var e;return(e=md())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Wa(JSON.stringify(n)),Wa(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kn())}function hC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ny(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Dy(){return Ay.NODE_ADMIN===!0}function xy(){try{return typeof indexedDB=="object"}catch{return!1}}function dC(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC="FirebaseError";class Xn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=fC,Object.setPrototypeOf(this,Xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lr.prototype.create)}}class lr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?mC(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Xn(i,a,s)}}function mC(t,e){return t.replace(gC,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const gC=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(t){return JSON.parse(t)}function ot(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=to(Ha(r[0])||""),n=to(Ha(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},pC=function(t){const e=Oy(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},_C=function(t){const e=Oy(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ki(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Xm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function za(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Hu(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Jm(r)&&Jm(o)){if(!Hu(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Jm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function vC(t,e){const n=new EC(t,e);return n.subscribe.bind(n)}class EC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");TC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Jc),i.error===void 0&&(i.error=Jc),i.complete===void 0&&(i.complete=Jc);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function TC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Jc(){}function IC(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,F(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Bl=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(t){return t&&t._delegate?t._delegate:t}class dn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new eo;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(AC(e))try{this.getOrInitializeService({instanceIdentifier:Bs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Bs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bs){return this.instances.has(e)}getOptions(e=Bs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:bC(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Bs){return this.component?this.component.multipleInstances?e:Bs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bC(t){return t===Bs?void 0:t}function AC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new CC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const RC={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},PC=le.INFO,kC={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},NC=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=kC[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Do{constructor(e){this.name=e,this._logLevel=PC,this._logHandler=NC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?RC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const DC=(t,e)=>e.some(n=>t instanceof n);let Zm,eg;function xC(){return Zm||(Zm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function OC(){return eg||(eg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vy=new WeakMap,zu=new WeakMap,My=new WeakMap,Zc=new WeakMap,_d=new WeakMap;function VC(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(fs(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Vy.set(n,t)}).catch(()=>{}),_d.set(e,t),e}function MC(t){if(zu.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});zu.set(t,e)}let qu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||My.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fs(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function LC(t){qu=t(qu)}function FC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(eu(this),e,...n);return My.set(s,e.sort?e.sort():[e]),fs(s)}:OC().includes(t)?function(...e){return t.apply(eu(this),e),fs(Vy.get(this))}:function(...e){return fs(t.apply(eu(this),e))}}function UC(t){return typeof t=="function"?FC(t):(t instanceof IDBTransaction&&MC(t),DC(t,xC())?new Proxy(t,qu):t)}function fs(t){if(t instanceof IDBRequest)return VC(t);if(Zc.has(t))return Zc.get(t);const e=UC(t);return e!==t&&(Zc.set(t,e),_d.set(e,t)),e}const eu=t=>_d.get(t);function BC(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=fs(o);return s&&o.addEventListener("upgradeneeded",l=>{s(fs(o.result),l.oldVersion,l.newVersion,fs(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const $C=["get","getKey","getAll","getAllKeys","count"],jC=["put","add","delete","clear"],tu=new Map;function tg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(tu.get(e))return tu.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=jC.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||$C.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return tu.set(e,r),r}LC(t=>({...t,get:(e,n,s)=>tg(e,n)||t.get(e,n,s),has:(e,n)=>!!tg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(HC(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function HC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ku="@firebase/app",ng="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=new Do("@firebase/app"),zC="@firebase/app-compat",qC="@firebase/analytics-compat",KC="@firebase/analytics",GC="@firebase/app-check-compat",QC="@firebase/app-check",YC="@firebase/auth",XC="@firebase/auth-compat",JC="@firebase/database",ZC="@firebase/database-compat",eb="@firebase/functions",tb="@firebase/functions-compat",nb="@firebase/installations",sb="@firebase/installations-compat",ib="@firebase/messaging",rb="@firebase/messaging-compat",ob="@firebase/performance",ab="@firebase/performance-compat",lb="@firebase/remote-config",cb="@firebase/remote-config-compat",ub="@firebase/storage",hb="@firebase/storage-compat",db="@firebase/firestore",fb="@firebase/firestore-compat",mb="firebase",gb="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu="[DEFAULT]",pb={[Ku]:"fire-core",[zC]:"fire-core-compat",[KC]:"fire-analytics",[qC]:"fire-analytics-compat",[QC]:"fire-app-check",[GC]:"fire-app-check-compat",[YC]:"fire-auth",[XC]:"fire-auth-compat",[JC]:"fire-rtdb",[ZC]:"fire-rtdb-compat",[eb]:"fire-fn",[tb]:"fire-fn-compat",[nb]:"fire-iid",[sb]:"fire-iid-compat",[ib]:"fire-fcm",[rb]:"fire-fcm-compat",[ob]:"fire-perf",[ab]:"fire-perf-compat",[lb]:"fire-rc",[cb]:"fire-rc-compat",[ub]:"fire-gcs",[hb]:"fire-gcs-compat",[db]:"fire-fst",[fb]:"fire-fst-compat","fire-js":"fire-js",[mb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa=new Map,Qu=new Map;function _b(t,e){try{t.container.addComponent(e)}catch(n){ti.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Nn(t){const e=t.name;if(Qu.has(e))return ti.debug(`There were multiple attempts to register component ${e}.`),!1;Qu.set(e,t);for(const n of qa.values())_b(n,t);return!0}function yb(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ms=new lr("app","Firebase",vb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ms.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=gb;function Ly(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Gu,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw ms.create("bad-app-name",{appName:String(i)});if(n||(n=ky()),!n)throw ms.create("no-options");const r=qa.get(i);if(r){if(Hu(n,r.options)&&Hu(s,r.config))return r;throw ms.create("duplicate-app",{appName:i})}const o=new SC(i);for(const l of Qu.values())o.addComponent(l);const a=new Eb(n,s,o);return qa.set(i,a),a}function Fy(t=Gu){const e=qa.get(t);if(!e&&t===Gu&&ky())return Ly();if(!e)throw ms.create("no-app",{appName:t});return e}function zt(t,e,n){var s;let i=(s=pb[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ti.warn(a.join(" "));return}Nn(new dn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb="firebase-heartbeat-database",Ib=1,no="firebase-heartbeat-store";let nu=null;function Uy(){return nu||(nu=BC(Tb,Ib,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(no)}}}).catch(t=>{throw ms.create("idb-open",{originalErrorMessage:t.message})})),nu}async function wb(t){try{return await(await Uy()).transaction(no).objectStore(no).get(By(t))}catch(e){if(e instanceof Xn)ti.warn(e.message);else{const n=ms.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ti.warn(n.message)}}}async function sg(t,e){try{const s=(await Uy()).transaction(no,"readwrite");await s.objectStore(no).put(e,By(t)),await s.done}catch(n){if(n instanceof Xn)ti.warn(n.message);else{const s=ms.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ti.warn(s.message)}}}function By(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb=1024,bb=30*24*60*60*1e3;class Ab{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Rb(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ig();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=bb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ig(),{heartbeatsToSend:s,unsentEntries:i}=Sb(this._heartbeatsCache.heartbeats),r=Wa(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ig(){return new Date().toISOString().substring(0,10)}function Sb(t,e=Cb){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),rg(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),rg(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Rb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xy()?dC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await wb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return sg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return sg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function rg(t){return Wa(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pb(t){Nn(new dn("platform-logger",e=>new WC(e),"PRIVATE")),Nn(new dn("heartbeat",e=>new Ab(e),"PRIVATE")),zt(Ku,ng,t),zt(Ku,ng,"esm2017"),zt("fire-js","")}Pb("");var kb="firebase",Nb="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zt(kb,Nb,"app");var Db=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U,yd=yd||{},ee=Db||self;function $l(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function xo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function xb(t){return Object.prototype.hasOwnProperty.call(t,su)&&t[su]||(t[su]=++Ob)}var su="closure_uid_"+(1e9*Math.random()>>>0),Ob=0;function Vb(t,e,n){return t.call.apply(t.bind,arguments)}function Mb(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Et(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Et=Vb:Et=Mb,Et.apply(null,arguments)}function la(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function it(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Ps(){this.s=this.s,this.o=this.o}var Lb=0;Ps.prototype.s=!1;Ps.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Lb!=0)&&xb(this)};Ps.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const $y=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function vd(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function og(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if($l(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function Tt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Tt.prototype.h=function(){this.defaultPrevented=!0};var Fb=function(){if(!ee.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};ee.addEventListener("test",n,e),ee.removeEventListener("test",n,e)}catch{}return t}();function so(t){return/^[\s\xa0]*$/.test(t)}function jl(){var t=ee.navigator;return t&&(t=t.userAgent)?t:""}function En(t){return jl().indexOf(t)!=-1}function Ed(t){return Ed[" "](t),t}Ed[" "]=function(){};function Ub(t,e){var n=NA;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var Bb=En("Opera"),Gi=En("Trident")||En("MSIE"),jy=En("Edge"),Yu=jy||Gi,Wy=En("Gecko")&&!(jl().toLowerCase().indexOf("webkit")!=-1&&!En("Edge"))&&!(En("Trident")||En("MSIE"))&&!En("Edge"),$b=jl().toLowerCase().indexOf("webkit")!=-1&&!En("Edge");function Hy(){var t=ee.document;return t?t.documentMode:void 0}var Xu;e:{var iu="",ru=function(){var t=jl();if(Wy)return/rv:([^\);]+)(\)|;)/.exec(t);if(jy)return/Edge\/([\d\.]+)/.exec(t);if(Gi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if($b)return/WebKit\/(\S+)/.exec(t);if(Bb)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ru&&(iu=ru?ru[1]:""),Gi){var ou=Hy();if(ou!=null&&ou>parseFloat(iu)){Xu=String(ou);break e}}Xu=iu}var Ju;if(ee.document&&Gi){var ag=Hy();Ju=ag||parseInt(Xu,10)||void 0}else Ju=void 0;var jb=Ju;function io(t,e){if(Tt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Wy){e:{try{Ed(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Wb[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&io.$.h.call(this)}}it(io,Tt);var Wb={2:"touch",3:"pen",4:"mouse"};io.prototype.h=function(){io.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Oo="closure_listenable_"+(1e6*Math.random()|0),Hb=0;function zb(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=i,this.key=++Hb,this.fa=this.ia=!1}function Wl(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Td(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function qb(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function zy(t){const e={};for(const n in t)e[n]=t[n];return e}const lg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qy(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<lg.length;r++)n=lg[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Hl(t){this.src=t,this.g={},this.h=0}Hl.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=eh(t,e,s,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new zb(e,this.src,r,!!s,i),e.ia=n,t.push(e)),e};function Zu(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=$y(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Wl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function eh(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==s)return i}return-1}var Id="closure_lm_"+(1e6*Math.random()|0),au={};function Ky(t,e,n,s,i){if(s&&s.once)return Qy(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Ky(t,e[r],n,s,i);return null}return n=bd(n),t&&t[Oo]?t.O(e,n,xo(s)?!!s.capture:!!s,i):Gy(t,e,n,!1,s,i)}function Gy(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=xo(i)?!!i.capture:!!i,a=Cd(t);if(a||(t[Id]=a=new Hl(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=Kb(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Fb||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Xy(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Kb(){function t(n){return e.call(t.src,t.listener,n)}const e=Gb;return t}function Qy(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Qy(t,e[r],n,s,i);return null}return n=bd(n),t&&t[Oo]?t.P(e,n,xo(s)?!!s.capture:!!s,i):Gy(t,e,n,!0,s,i)}function Yy(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Yy(t,e[r],n,s,i);else s=xo(s)?!!s.capture:!!s,n=bd(n),t&&t[Oo]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=eh(r,n,s,i),-1<n&&(Wl(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Cd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=eh(e,n,s,i)),(n=-1<t?e[t]:null)&&wd(n))}function wd(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Oo])Zu(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Xy(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Cd(e))?(Zu(n,t),n.h==0&&(n.src=null,e[Id]=null)):Wl(t)}}}function Xy(t){return t in au?au[t]:au[t]="on"+t}function Gb(t,e){if(t.fa)t=!0;else{e=new io(e,this);var n=t.listener,s=t.la||t.src;t.ia&&wd(t),t=n.call(s,e)}return t}function Cd(t){return t=t[Id],t instanceof Hl?t:null}var lu="__closure_events_fn_"+(1e9*Math.random()>>>0);function bd(t){return typeof t=="function"?t:(t[lu]||(t[lu]=function(e){return t.handleEvent(e)}),t[lu])}function st(){Ps.call(this),this.i=new Hl(this),this.S=this,this.J=null}it(st,Ps);st.prototype[Oo]=!0;st.prototype.removeEventListener=function(t,e,n,s){Yy(this,t,e,n,s)};function ut(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new Tt(e,t);else if(e instanceof Tt)e.target=e.target||t;else{var i=e;e=new Tt(s,t),qy(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=ca(o,s,!0,e)&&i}if(o=e.g=t,i=ca(o,s,!0,e)&&i,i=ca(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=ca(o,s,!1,e)&&i}st.prototype.N=function(){if(st.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Wl(n[s]);delete t.g[e],t.h--}}this.J=null};st.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};st.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function ca(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Zu(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var Ad=ee.JSON.stringify;class Qb{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Yb(){var t=Sd;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Xb{constructor(){this.h=this.g=null}add(e,n){const s=Jy.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Jy=new Qb(()=>new Jb,t=>t.reset());class Jb{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Zb(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function eA(t){ee.setTimeout(()=>{throw t},0)}let ro,oo=!1,Sd=new Xb,Zy=()=>{const t=ee.Promise.resolve(void 0);ro=()=>{t.then(tA)}};var tA=()=>{for(var t;t=Yb();){try{t.h.call(t.g)}catch(n){eA(n)}var e=Jy;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}oo=!1};function zl(t,e){st.call(this),this.h=t||1,this.g=e||ee,this.j=Et(this.qb,this),this.l=Date.now()}it(zl,st);U=zl.prototype;U.ga=!1;U.T=null;U.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ut(this,"tick"),this.ga&&(Rd(this),this.start()))}};U.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Rd(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}U.N=function(){zl.$.N.call(this),Rd(this),delete this.g};function Pd(t,e,n){if(typeof t=="function")n&&(t=Et(t,n));else if(t&&typeof t.handleEvent=="function")t=Et(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ee.setTimeout(t,e||0)}function ev(t){t.g=Pd(()=>{t.g=null,t.i&&(t.i=!1,ev(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class nA extends Ps{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ev(this)}N(){super.N(),this.g&&(ee.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ao(t){Ps.call(this),this.h=t,this.g={}}it(ao,Ps);var cg=[];function tv(t,e,n,s){Array.isArray(n)||(n&&(cg[0]=n.toString()),n=cg);for(var i=0;i<n.length;i++){var r=Ky(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function nv(t){Td(t.g,function(e,n){this.g.hasOwnProperty(n)&&wd(e)},t),t.g={}}ao.prototype.N=function(){ao.$.N.call(this),nv(this)};ao.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ql(){this.g=!0}ql.prototype.Ea=function(){this.g=!1};function sA(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function iA(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function ki(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+oA(t,n)+(s?" "+s:"")})}function rA(t,e){t.info(function(){return"TIMEOUT: "+e})}ql.prototype.info=function(){};function oA(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ad(n)}catch{return e}}var ui={},ug=null;function Kl(){return ug=ug||new st}ui.Ta="serverreachability";function sv(t){Tt.call(this,ui.Ta,t)}it(sv,Tt);function lo(t){const e=Kl();ut(e,new sv(e))}ui.STAT_EVENT="statevent";function iv(t,e){Tt.call(this,ui.STAT_EVENT,t),this.stat=e}it(iv,Tt);function bt(t){const e=Kl();ut(e,new iv(e,t))}ui.Ua="timingevent";function rv(t,e){Tt.call(this,ui.Ua,t),this.size=e}it(rv,Tt);function Vo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ee.setTimeout(function(){t()},e)}var Gl={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ov={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function kd(){}kd.prototype.h=null;function hg(t){return t.h||(t.h=t.i())}function av(){}var Mo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Nd(){Tt.call(this,"d")}it(Nd,Tt);function Dd(){Tt.call(this,"c")}it(Dd,Tt);var th;function Ql(){}it(Ql,kd);Ql.prototype.g=function(){return new XMLHttpRequest};Ql.prototype.i=function(){return{}};th=new Ql;function Lo(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new ao(this),this.P=aA,t=Yu?125:void 0,this.V=new zl(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new lv}function lv(){this.i=null,this.g="",this.h=!1}var aA=45e3,cv={},nh={};U=Lo.prototype;U.setTimeout=function(t){this.P=t};function sh(t,e,n){t.L=1,t.A=Xl(Kn(e)),t.u=n,t.S=!0,uv(t,null)}function uv(t,e){t.G=Date.now(),Fo(t),t.B=Kn(t.A);var n=t.B,s=t.W;Array.isArray(s)||(s=[String(s)]),yv(n.i,"t",s),t.o=0,n=t.l.J,t.h=new lv,t.g=Uv(t.l,n?e:null,!t.u),0<t.O&&(t.M=new nA(Et(t.Pa,t,t.g),t.O)),tv(t.U,t.g,"readystatechange",t.nb),e=t.I?zy(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),lo(),sA(t.j,t.v,t.B,t.m,t.W,t.u)}U.nb=function(t){t=t.target;const e=this.M;e&&In(t)==3?e.l():this.Pa(t)};U.Pa=function(t){try{if(t==this.g)e:{const u=In(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Yu||this.g&&(this.h.h||this.g.ja()||gg(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?lo(3):lo(2)),Yl(this);var n=this.g.da();this.ca=n;t:if(hv(this)){var s=gg(this.g);t="";var i=s.length,r=In(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Hs(this),jr(this);var o="";break t}this.h.i=new ee.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,iA(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!so(a)){var c=a;break t}}c=null}if(n=c)ki(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ih(this,n);else{this.i=!1,this.s=3,bt(12),Hs(this),jr(this);break e}}this.S?(dv(this,u,o),Yu&&this.i&&u==3&&(tv(this.U,this.V,"tick",this.mb),this.V.start())):(ki(this.j,this.m,o,null),ih(this,o)),u==4&&Hs(this),this.i&&!this.J&&(u==4?Vv(this.l,this):(this.i=!1,Fo(this)))}else RA(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,bt(12)):(this.s=0,bt(13)),Hs(this),jr(this)}}}catch{}finally{}};function hv(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function dv(t,e,n){let s=!0,i;for(;!t.J&&t.o<n.length;)if(i=lA(t,n),i==nh){e==4&&(t.s=4,bt(14),s=!1),ki(t.j,t.m,null,"[Incomplete Response]");break}else if(i==cv){t.s=4,bt(15),ki(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else ki(t.j,t.m,i,null),ih(t,i);hv(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,bt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Fd(e),e.M=!0,bt(11))):(ki(t.j,t.m,n,"[Invalid Chunked Response]"),Hs(t),jr(t))}U.mb=function(){if(this.g){var t=In(this.g),e=this.g.ja();this.o<e.length&&(Yl(this),dv(this,t,e),this.i&&t!=4&&Fo(this))}};function lA(t,e){var n=t.o,s=e.indexOf(`
`,n);return s==-1?nh:(n=Number(e.substring(n,s)),isNaN(n)?cv:(s+=1,s+n>e.length?nh:(e=e.slice(s,s+n),t.o=s+n,e)))}U.cancel=function(){this.J=!0,Hs(this)};function Fo(t){t.Y=Date.now()+t.P,fv(t,t.P)}function fv(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Vo(Et(t.lb,t),e)}function Yl(t){t.C&&(ee.clearTimeout(t.C),t.C=null)}U.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(rA(this.j,this.B),this.L!=2&&(lo(),bt(17)),Hs(this),this.s=2,jr(this)):fv(this,this.Y-t)};function jr(t){t.l.H==0||t.J||Vv(t.l,t)}function Hs(t){Yl(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Rd(t.V),nv(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function ih(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||rh(n.i,t))){if(!t.K&&rh(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Qa(n),tc(n);else break e;Ld(n),bt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Vo(Et(n.ib,n),6e3));if(1>=Tv(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else zs(n,11)}else if((t.K||n.g==t)&&Qa(n),!so(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=s.i;r.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(xd(r,r.h),r.h=null))}if(s.F){const g=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(s.Da=g,De(s.I,s.F,g))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=Fv(s,s.J?s.pa:null,s.Y),o.K){Iv(s.i,o);var a=o,l=s.L;l&&a.setTimeout(l),a.C&&(Yl(a),Fo(a)),s.g=o}else xv(s);0<n.j.length&&nc(n)}else c[0]!="stop"&&c[0]!="close"||zs(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?zs(n,7):Md(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}lo(4)}catch{}}function cA(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if($l(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function uA(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if($l(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function mv(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if($l(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=uA(t),s=cA(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var gv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hA(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ys(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ys){this.h=t.h,Ka(this,t.j),this.s=t.s,this.g=t.g,Ga(this,t.m),this.l=t.l;var e=t.i,n=new co;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),dg(this,n),this.o=t.o}else t&&(e=String(t).match(gv))?(this.h=!1,Ka(this,e[1]||"",!0),this.s=Vr(e[2]||""),this.g=Vr(e[3]||"",!0),Ga(this,e[4]),this.l=Vr(e[5]||"",!0),dg(this,e[6]||"",!0),this.o=Vr(e[7]||"")):(this.h=!1,this.i=new co(null,this.h))}Ys.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Mr(e,fg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Mr(e,fg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Mr(n,n.charAt(0)=="/"?mA:fA,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Mr(n,pA)),t.join("")};function Kn(t){return new Ys(t)}function Ka(t,e,n){t.j=n?Vr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ga(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function dg(t,e,n){e instanceof co?(t.i=e,_A(t.i,t.h)):(n||(e=Mr(e,gA)),t.i=new co(e,t.h))}function De(t,e,n){t.i.set(e,n)}function Xl(t){return De(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Vr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Mr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,dA),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function dA(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var fg=/[#\/\?@]/g,fA=/[#\?:]/g,mA=/[#\?]/g,gA=/[#\?@]/g,pA=/#/g;function co(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ks(t){t.g||(t.g=new Map,t.h=0,t.i&&hA(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=co.prototype;U.add=function(t,e){ks(this),this.i=null,t=ur(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function pv(t,e){ks(t),e=ur(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function _v(t,e){return ks(t),e=ur(t,e),t.g.has(e)}U.forEach=function(t,e){ks(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};U.ta=function(){ks(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};U.Z=function(t){ks(this);let e=[];if(typeof t=="string")_v(this,t)&&(e=e.concat(this.g.get(ur(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};U.set=function(t,e){return ks(this),this.i=null,t=ur(this,t),_v(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function yv(t,e,n){pv(t,e),0<n.length&&(t.i=null,t.g.set(ur(t,e),vd(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function ur(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function _A(t,e){e&&!t.j&&(ks(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(pv(this,s),yv(this,i,n))},t)),t.j=e}var yA=class{constructor(t,e){this.g=t,this.map=e}};function vv(t){this.l=t||vA,ee.PerformanceNavigationTiming?(t=ee.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ee.g&&ee.g.Ka&&ee.g.Ka()&&ee.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var vA=10;function Ev(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Tv(t){return t.h?1:t.g?t.g.size:0}function rh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function xd(t,e){t.g?t.g.add(e):t.h=e}function Iv(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}vv.prototype.cancel=function(){if(this.i=wv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function wv(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return vd(t.i)}var EA=class{stringify(t){return ee.JSON.stringify(t,void 0)}parse(t){return ee.JSON.parse(t,void 0)}};function TA(){this.g=new EA}function IA(t,e,n){const s=n||"";try{mv(t,function(i,r){let o=i;xo(i)&&(o=Ad(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function wA(t,e){const n=new ql;if(ee.Image){const s=new Image;s.onload=la(ua,n,s,"TestLoadImage: loaded",!0,e),s.onerror=la(ua,n,s,"TestLoadImage: error",!1,e),s.onabort=la(ua,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=la(ua,n,s,"TestLoadImage: timeout",!1,e),ee.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ua(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Jl(t){this.l=t.ec||null,this.j=t.ob||!1}it(Jl,kd);Jl.prototype.g=function(){return new Zl(this.l,this.j)};Jl.prototype.i=function(t){return function(){return t}}({});function Zl(t,e){st.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Od,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}it(Zl,st);var Od=0;U=Zl.prototype;U.open=function(t,e){if(this.readyState!=Od)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,uo(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ee).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Uo(this)),this.readyState=Od};U.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,uo(this)),this.g&&(this.readyState=3,uo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ee.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Cv(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Cv(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}U.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Uo(this):uo(this),this.readyState==3&&Cv(this)}};U.Za=function(t){this.g&&(this.response=this.responseText=t,Uo(this))};U.Ya=function(t){this.g&&(this.response=t,Uo(this))};U.ka=function(){this.g&&Uo(this)};function Uo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,uo(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function uo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Zl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var CA=ee.JSON.parse;function $e(t){st.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=bv,this.L=this.M=!1}it($e,st);var bv="",bA=/^https?$/i,AA=["POST","PUT"];U=$e.prototype;U.Oa=function(t){this.M=t};U.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():th.g(),this.C=this.u?hg(this.u):hg(th),this.g.onreadystatechange=Et(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){mg(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=ee.FormData&&t instanceof ee.FormData,!(0<=$y(AA,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Rv(this),0<this.B&&((this.L=SA(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Et(this.ua,this)):this.A=Pd(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){mg(this,r)}};function SA(t){return Gi&&typeof t.timeout=="number"&&t.ontimeout!==void 0}U.ua=function(){typeof yd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ut(this,"timeout"),this.abort(8))};function mg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Av(t),ec(t)}function Av(t){t.F||(t.F=!0,ut(t,"complete"),ut(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ut(this,"complete"),ut(this,"abort"),ec(this))};U.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ec(this,!0)),$e.$.N.call(this)};U.La=function(){this.s||(this.G||this.v||this.l?Sv(this):this.kb())};U.kb=function(){Sv(this)};function Sv(t){if(t.h&&typeof yd<"u"&&(!t.C[1]||In(t)!=4||t.da()!=2)){if(t.v&&In(t)==4)Pd(t.La,0,t);else if(ut(t,"readystatechange"),In(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var i=String(t.I).match(gv)[1]||null;!i&&ee.self&&ee.self.location&&(i=ee.self.location.protocol.slice(0,-1)),s=!bA.test(i?i.toLowerCase():"")}n=s}if(n)ut(t,"complete"),ut(t,"success");else{t.m=6;try{var r=2<In(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",Av(t)}}finally{ec(t)}}}}function ec(t,e){if(t.g){Rv(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ut(t,"ready");try{n.onreadystatechange=s}catch{}}}function Rv(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ee.clearTimeout(t.A),t.A=null)}U.isActive=function(){return!!this.g};function In(t){return t.g?t.g.readyState:0}U.da=function(){try{return 2<In(this)?this.g.status:-1}catch{return-1}};U.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),CA(e)}};function gg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case bv:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function RA(t){const e={};t=(t.g&&2<=In(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(so(t[s]))continue;var n=Zb(t[s]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[i]||[];e[i]=r,r.push(n)}qb(e,function(s){return s.join(", ")})}U.Ia=function(){return this.m};U.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Pv(t){let e="";return Td(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Vd(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Pv(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):De(t,e,n))}function br(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function kv(t){this.Ga=0,this.j=[],this.l=new ql,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=br("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=br("baseRetryDelayMs",5e3,t),this.hb=br("retryDelaySeedMs",1e4,t),this.eb=br("forwardChannelMaxRetries",2,t),this.xa=br("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new vv(t&&t.concurrentRequestLimit),this.Ja=new TA,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}U=kv.prototype;U.ra=8;U.H=1;function Md(t){if(Nv(t),t.H==3){var e=t.W++,n=Kn(t.I);if(De(n,"SID",t.K),De(n,"RID",e),De(n,"TYPE","terminate"),Bo(t,n),e=new Lo(t,t.l,e),e.L=2,e.A=Xl(Kn(n)),n=!1,ee.navigator&&ee.navigator.sendBeacon)try{n=ee.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&ee.Image&&(new Image().src=e.A,n=!0),n||(e.g=Uv(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Fo(e)}Lv(t)}function tc(t){t.g&&(Fd(t),t.g.cancel(),t.g=null)}function Nv(t){tc(t),t.u&&(ee.clearTimeout(t.u),t.u=null),Qa(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ee.clearTimeout(t.m),t.m=null)}function nc(t){if(!Ev(t.i)&&!t.m){t.m=!0;var e=t.Na;ro||Zy(),oo||(ro(),oo=!0),Sd.add(e,t),t.C=0}}function PA(t,e){return Tv(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Vo(Et(t.Na,t,e),Mv(t,t.C)),t.C++,!0)}U.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Lo(this,this.l,t);let r=this.s;if(this.U&&(r?(r=zy(r),qy(r,this.U)):r=this.U),this.o!==null||this.O||(i.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Dv(this,i,e),n=Kn(this.I),De(n,"RID",t),De(n,"CVER",22),this.F&&De(n,"X-HTTP-Session-Id",this.F),Bo(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(Pv(r)))+"&"+e:this.o&&Vd(n,this.o,r)),xd(this.i,i),this.bb&&De(n,"TYPE","init"),this.P?(De(n,"$req",e),De(n,"SID","null"),i.aa=!0,sh(i,n,null)):sh(i,n,e),this.H=2}}else this.H==3&&(t?pg(this,t):this.j.length==0||Ev(this.i)||pg(this))};function pg(t,e){var n;e?n=e.m:n=t.W++;const s=Kn(t.I);De(s,"SID",t.K),De(s,"RID",n),De(s,"AID",t.V),Bo(t,s),t.o&&t.s&&Vd(s,t.o,t.s),n=new Lo(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Dv(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),xd(t.i,n),sh(n,s,e)}function Bo(t,e){t.na&&Td(t.na,function(n,s){De(e,s,n)}),t.h&&mv({},function(n,s){De(e,s,n)})}function Dv(t,e,n){n=Math.min(t.j.length,n);var s=t.h?Et(t.h.Va,t.h,t):null;e:{var i=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].g;const u=i[l].map;if(c-=r,0>c)r=Math.max(0,i[l].g-100),a=!1;else try{IA(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function xv(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;ro||Zy(),oo||(ro(),oo=!0),Sd.add(e,t),t.A=0}}function Ld(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Vo(Et(t.Ma,t),Mv(t,t.A)),t.A++,!0)}U.Ma=function(){if(this.u=null,Ov(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Vo(Et(this.jb,this),t)}};U.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,bt(10),tc(this),Ov(this))};function Fd(t){t.B!=null&&(ee.clearTimeout(t.B),t.B=null)}function Ov(t){t.g=new Lo(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Kn(t.wa);De(e,"RID","rpc"),De(e,"SID",t.K),De(e,"AID",t.V),De(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&De(e,"TO",t.qa),De(e,"TYPE","xmlhttp"),Bo(t,e),t.o&&t.s&&Vd(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Xl(Kn(e)),n.u=null,n.S=!0,uv(n,t)}U.ib=function(){this.v!=null&&(this.v=null,tc(this),Ld(this),bt(19))};function Qa(t){t.v!=null&&(ee.clearTimeout(t.v),t.v=null)}function Vv(t,e){var n=null;if(t.g==e){Qa(t),Fd(t),t.g=null;var s=2}else if(rh(t.i,e))n=e.F,Iv(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;s=Kl(),ut(s,new rv(s,n)),nc(t)}else xv(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(s==1&&PA(t,e)||s==2&&Ld(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:zs(t,5);break;case 4:zs(t,10);break;case 3:zs(t,6);break;default:zs(t,2)}}}function Mv(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function zs(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=Et(t.pb,t);n||(n=new Ys("//www.google.com/images/cleardot.gif"),ee.location&&ee.location.protocol=="http"||Ka(n,"https"),Xl(n)),wA(n.toString(),s)}else bt(2);t.H=0,t.h&&t.h.za(e),Lv(t),Nv(t)}U.pb=function(t){t?(this.l.info("Successfully pinged google.com"),bt(2)):(this.l.info("Failed to ping google.com"),bt(1))};function Lv(t){if(t.H=0,t.ma=[],t.h){const e=wv(t.i);(e.length!=0||t.j.length!=0)&&(og(t.ma,e),og(t.ma,t.j),t.i.i.length=0,vd(t.j),t.j.length=0),t.h.ya()}}function Fv(t,e,n){var s=n instanceof Ys?Kn(n):new Ys(n);if(s.g!="")e&&(s.g=e+"."+s.g),Ga(s,s.m);else{var i=ee.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Ys(null);s&&Ka(r,s),e&&(r.g=e),i&&Ga(r,i),n&&(r.l=n),s=r}return n=t.F,e=t.Da,n&&e&&De(s,n,e),De(s,"VER",t.ra),Bo(t,s),s}function Uv(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new $e(new Jl({ob:n})):new $e(t.va),e.Oa(t.J),e}U.isActive=function(){return!!this.h&&this.h.isActive(this)};function Bv(){}U=Bv.prototype;U.Ba=function(){};U.Aa=function(){};U.za=function(){};U.ya=function(){};U.isActive=function(){return!0};U.Va=function(){};function Ya(){if(Gi&&!(10<=Number(jb)))throw Error("Environmental error: no available transport.")}Ya.prototype.g=function(t,e){return new Gt(t,e)};function Gt(t,e){st.call(this),this.g=new kv(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!so(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!so(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new hr(this)}it(Gt,st);Gt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;bt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Fv(t,null,t.Y),nc(t)};Gt.prototype.close=function(){Md(this.g)};Gt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ad(t),t=n);e.j.push(new yA(e.fb++,t)),e.H==3&&nc(e)};Gt.prototype.N=function(){this.g.h=null,delete this.j,Md(this.g),delete this.g,Gt.$.N.call(this)};function $v(t){Nd.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}it($v,Nd);function jv(){Dd.call(this),this.status=1}it(jv,Dd);function hr(t){this.g=t}it(hr,Bv);hr.prototype.Ba=function(){ut(this.g,"a")};hr.prototype.Aa=function(t){ut(this.g,new $v(t))};hr.prototype.za=function(t){ut(this.g,new jv)};hr.prototype.ya=function(){ut(this.g,"b")};function kA(){this.blockSize=-1}function fn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}it(fn,kA);fn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function cu(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)s[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var r=t.g[3],o=e+(r^n&(i^r))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[2]+606105819&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[6]+2821735955&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[10]+4294925233&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[14]+2792965006&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^r&(n^i))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[11]+643717713&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[15]+3634488961&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[3]+4107603335&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[7]+1735328473&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^r)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[11]+1839030562&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[7]+4139469664&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[3]+3572445317&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[15]+530742520&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~r))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[14]+2878612391&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[10]+4293915773&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[6]+2734768916&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[2]+718787259&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+r&4294967295}fn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,i=this.h,r=0;r<e;){if(i==0)for(;r<=n;)cu(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(s[i++]=t.charCodeAt(r++),i==this.blockSize){cu(this,s),i=0;break}}else for(;r<e;)if(s[i++]=t[r++],i==this.blockSize){cu(this,s),i=0;break}}this.h=i,this.i+=e};fn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function we(t,e){this.h=e;for(var n=[],s=!0,i=t.length-1;0<=i;i--){var r=t[i]|0;s&&r==e||(n[i]=r,s=!1)}this.g=n}var NA={};function Ud(t){return-128<=t&&128>t?Ub(t,function(e){return new we([e|0],0>e?-1:0)}):new we([t|0],0>t?-1:0)}function wn(t){if(isNaN(t)||!isFinite(t))return Oi;if(0>t)return rt(wn(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=oh;return new we(e,0)}function Wv(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return rt(Wv(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=wn(Math.pow(e,8)),s=Oi,i=0;i<t.length;i+=8){var r=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+r),e);8>r?(r=wn(Math.pow(e,r)),s=s.R(r).add(wn(o))):(s=s.R(n),s=s.add(wn(o)))}return s}var oh=4294967296,Oi=Ud(0),ah=Ud(1),_g=Ud(16777216);U=we.prototype;U.ea=function(){if(Xt(this))return-rt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:oh+s)*e,e*=oh}return t};U.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Bn(this))return"0";if(Xt(this))return"-"+rt(this).toString(t);for(var e=wn(Math.pow(t,6)),n=this,s="";;){var i=Ja(n,e).g;n=Xa(n,i.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Bn(n))return r+s;for(;6>r.length;)r="0"+r;s=r+s}};U.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Bn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Xt(t){return t.h==-1}U.X=function(t){return t=Xa(this,t),Xt(t)?-1:Bn(t)?0:1};function rt(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new we(n,~t.h).add(ah)}U.abs=function(){return Xt(this)?rt(this):this};U.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,i=0;i<=e;i++){var r=s+(this.D(i)&65535)+(t.D(i)&65535),o=(r>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,n[i]=o<<16|r}return new we(n,n[n.length-1]&-2147483648?-1:0)};function Xa(t,e){return t.add(rt(e))}U.R=function(t){if(Bn(this)||Bn(t))return Oi;if(Xt(this))return Xt(t)?rt(this).R(rt(t)):rt(rt(this).R(t));if(Xt(t))return rt(this.R(rt(t)));if(0>this.X(_g)&&0>t.X(_g))return wn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<t.g.length;i++){var r=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*s+2*i]+=o*l,ha(n,2*s+2*i),n[2*s+2*i+1]+=r*l,ha(n,2*s+2*i+1),n[2*s+2*i+1]+=o*a,ha(n,2*s+2*i+1),n[2*s+2*i+2]+=r*a,ha(n,2*s+2*i+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new we(n,0)};function ha(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ar(t,e){this.g=t,this.h=e}function Ja(t,e){if(Bn(e))throw Error("division by zero");if(Bn(t))return new Ar(Oi,Oi);if(Xt(t))return e=Ja(rt(t),e),new Ar(rt(e.g),rt(e.h));if(Xt(e))return e=Ja(t,rt(e)),new Ar(rt(e.g),e.h);if(30<t.g.length){if(Xt(t)||Xt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=ah,s=e;0>=s.X(t);)n=yg(n),s=yg(s);var i=wi(n,1),r=wi(s,1);for(s=wi(s,2),n=wi(n,2);!Bn(s);){var o=r.add(s);0>=o.X(t)&&(i=i.add(n),r=o),s=wi(s,1),n=wi(n,1)}return e=Xa(t,i.R(e)),new Ar(i,e)}for(i=Oi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),r=wn(n),o=r.R(e);Xt(o)||0<o.X(t);)n-=s,r=wn(n),o=r.R(e);Bn(r)&&(r=ah),i=i.add(r),t=Xa(t,o)}return new Ar(i,t)}U.gb=function(t){return Ja(this,t).h};U.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new we(n,this.h&t.h)};U.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new we(n,this.h|t.h)};U.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new we(n,this.h^t.h)};function yg(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new we(n,t.h)}function wi(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,i=[],r=0;r<s;r++)i[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new we(i,t.h)}Ya.prototype.createWebChannel=Ya.prototype.g;Gt.prototype.send=Gt.prototype.u;Gt.prototype.open=Gt.prototype.m;Gt.prototype.close=Gt.prototype.close;Gl.NO_ERROR=0;Gl.TIMEOUT=8;Gl.HTTP_ERROR=6;ov.COMPLETE="complete";av.EventType=Mo;Mo.OPEN="a";Mo.CLOSE="b";Mo.ERROR="c";Mo.MESSAGE="d";st.prototype.listen=st.prototype.O;$e.prototype.listenOnce=$e.prototype.P;$e.prototype.getLastError=$e.prototype.Sa;$e.prototype.getLastErrorCode=$e.prototype.Ia;$e.prototype.getStatus=$e.prototype.da;$e.prototype.getResponseJson=$e.prototype.Wa;$e.prototype.getResponseText=$e.prototype.ja;$e.prototype.send=$e.prototype.ha;$e.prototype.setWithCredentials=$e.prototype.Oa;fn.prototype.digest=fn.prototype.l;fn.prototype.reset=fn.prototype.reset;fn.prototype.update=fn.prototype.j;we.prototype.add=we.prototype.add;we.prototype.multiply=we.prototype.R;we.prototype.modulo=we.prototype.gb;we.prototype.compare=we.prototype.X;we.prototype.toNumber=we.prototype.ea;we.prototype.toString=we.prototype.toString;we.prototype.getBits=we.prototype.D;we.fromNumber=wn;we.fromString=Wv;var DA=function(){return new Ya},xA=function(){return Kl()},uu=Gl,OA=ov,VA=ui,vg={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},da=av,MA=$e,LA=fn,Vi=we;const Eg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dr="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=new Do("@firebase/firestore");function Sr(){return ni.logLevel}function H(t,...e){if(ni.logLevel<=le.DEBUG){const n=e.map(Bd);ni.debug(`Firestore (${dr}): ${t}`,...n)}}function Gn(t,...e){if(ni.logLevel<=le.ERROR){const n=e.map(Bd);ni.error(`Firestore (${dr}): ${t}`,...n)}}function Qi(t,...e){if(ni.logLevel<=le.WARN){const n=e.map(Bd);ni.warn(`Firestore (${dr}): ${t}`,...n)}}function Bd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${dr}) INTERNAL ASSERTION FAILED: `+t;throw Gn(e),new Error(e)}function Ae(t,e){t||Z()}function re(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Xn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class FA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(mt.UNAUTHENTICATED))}shutdown(){}}class UA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class BA{constructor(e){this.t=e,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new jn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new jn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new jn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ae(typeof s.accessToken=="string"),new Hv(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ae(e===null||typeof e=="string"),new mt(e)}}class $A{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class jA{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new $A(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class WA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class HA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const s=r=>{r.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?i(r):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ae(typeof n.token=="string"),this.R=n.token,new WA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=zA(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function ve(t,e){return t<e?-1:t>e?1:0}function Yi(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ge(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ne(e)}static min(){return new ne(new Ge(0,0))}static max(){return new ne(new Ge(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,n,s){n===void 0?n=0:n>e.length&&Z(),s===void 0?s=e.length-n:s>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return ho.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ho?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ve extends ho{construct(e,n,s){return new Ve(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new q(P.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new Ve(n)}static emptyPath(){return new Ve([])}}const qA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends ho{construct(e,n,s){return new at(e,n,s)}static isValidIdentifier(e){return qA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new at(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new q(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new q(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new q(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new q(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(n)}static emptyPath(){return new at([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(Ve.fromString(e))}static fromName(e){return new G(Ve.fromString(e).popFirst(5))}static empty(){return new G(Ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new Ve(e.slice()))}}function KA(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=ne.fromTimestamp(s===1e9?new Ge(n+1,0):new Ge(n,s));return new Ts(i,G.empty(),e)}function GA(t){return new Ts(t.readTime,t.key,-1)}class Ts{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Ts(ne.min(),G.empty(),-1)}static max(){return new Ts(ne.max(),G.empty(),-1)}}function QA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class XA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $o(t){if(t.code!==P.FAILED_PRECONDITION||t.message!==YA)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,s)=>{n(e)})}static reject(e){return new k((n,s)=>{s(e)})}static waitFor(e){return new k((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=k.resolve(!1);for(const s of e)n=n.next(i=>i?k.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new k((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new k((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function jo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.se(s),this.oe=s=>n.writeSequenceNumber(s))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}$d._e=-1;function sc(t){return t==null}function Za(t){return t===0&&1/t==-1/0}function JA(t){return typeof t=="number"&&Number.isInteger(t)&&!Za(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function hi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function qv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qe=class lh{constructor(e,n){this.comparator=e,this.root=n||gs.EMPTY}insert(e,n){return new lh(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,gs.BLACK,null,null))}remove(e){return new lh(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gs.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fa(this.root,e,this.comparator,!1)}getReverseIterator(){return new fa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fa(this.root,e,this.comparator,!0)}},fa=class{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},gs=class Ln{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ln.RED,this.left=i??Ln.EMPTY,this.right=r??Ln.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Ln(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ln.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ln.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ln.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ln.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}};gs.EMPTY=null,gs.RED=!0,gs.BLACK=!1;gs.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,n,s,i,r){return this}insert(e,n,s){return new gs(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.comparator=e,this.data=new Qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ig(this.data.getIterator())}getIteratorFrom(e){return new Ig(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ht)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ht(this.comparator);return n.data=e,n}}class Ig{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new jt([])}unionWith(e){let n=new ht(at.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Yi(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Kv("Invalid base64 string: "+r):r}}(e);return new It(n)}static fromUint8Array(e){const n=function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r}(e);return new It(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}It.EMPTY_BYTE_STRING=new It("");const ZA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Is(t){if(Ae(!!t),typeof t=="string"){let e=0;const n=ZA.exec(t);if(Ae(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function si(t){return typeof t=="string"?It.fromBase64String(t):It.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Wd(t){const e=t.mapValue.fields.__previous_value__;return jd(e)?Wd(e):e}function fo(t){const e=Is(t.mapValue.fields.__local_write_time__.timestampValue);return new Ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e,n,s,i,r,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class mo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new mo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof mo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ii(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?jd(t)?4:tS(t)?9007199254740991:10:Z()}function Dn(t,e){if(t===e)return!0;const n=ii(t);if(n!==ii(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return fo(t).isEqual(fo(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=Is(i.timestampValue),a=Is(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return si(i.bytesValue).isEqual(si(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return qe(i.geoPointValue.latitude)===qe(r.geoPointValue.latitude)&&qe(i.geoPointValue.longitude)===qe(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return qe(i.integerValue)===qe(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=qe(i.doubleValue),a=qe(r.doubleValue);return o===a?Za(o)===Za(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Yi(t.arrayValue.values||[],e.arrayValue.values||[],Dn);case 10:return function(i,r){const o=i.mapValue.fields||{},a=r.mapValue.fields||{};if(Tg(o)!==Tg(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Dn(o[l],a[l])))return!1;return!0}(t,e);default:return Z()}}function go(t,e){return(t.values||[]).find(n=>Dn(n,e))!==void 0}function Xi(t,e){if(t===e)return 0;const n=ii(t),s=ii(e);if(n!==s)return ve(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(r,o){const a=qe(r.integerValue||r.doubleValue),l=qe(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return wg(t.timestampValue,e.timestampValue);case 4:return wg(fo(t),fo(e));case 5:return ve(t.stringValue,e.stringValue);case 6:return function(r,o){const a=si(r),l=si(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(r,o){const a=r.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=ve(a[c],l[c]);if(u!==0)return u}return ve(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,o){const a=ve(qe(r.latitude),qe(o.latitude));return a!==0?a:ve(qe(r.longitude),qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,o){const a=r.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=Xi(a[c],l[c]);if(u)return u}return ve(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,o){if(r===ma.mapValue&&o===ma.mapValue)return 0;if(r===ma.mapValue)return 1;if(o===ma.mapValue)return-1;const a=r.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=ve(l[h],u[h]);if(d!==0)return d;const f=Xi(a[l[h]],c[u[h]]);if(f!==0)return f}return ve(l.length,u.length)}(t.mapValue,e.mapValue);default:throw Z()}}function wg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=Is(t),s=Is(e),i=ve(n.seconds,s.seconds);return i!==0?i:ve(n.nanos,s.nanos)}function Ji(t){return ch(t)}function ch(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=Is(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return si(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",i=!0;for(const r of n.values||[])i?i=!1:s+=",",s+=ch(r);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${ch(n.fields[o])}`;return i+"}"}(t.mapValue):Z()}function uh(t){return!!t&&"integerValue"in t}function Hd(t){return!!t&&"arrayValue"in t}function Cg(t){return!!t&&"nullValue"in t}function bg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xa(t){return!!t&&"mapValue"in t}function Wr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return hi(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Wr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Wr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function tS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!xa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wr(n)}setAll(e){let n=at.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Wr(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());xa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];xa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){hi(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Dt(Wr(this.value))}}function Gv(t){const e=[];return hi(t.fields,(n,s)=>{const i=new at([n]);if(xa(s)){const r=Gv(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new jt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new gt(e,0,ne.min(),ne.min(),ne.min(),Dt.empty(),0)}static newFoundDocument(e,n,s,i){return new gt(e,1,n,ne.min(),s,i,0)}static newNoDocument(e,n){return new gt(e,2,n,ne.min(),ne.min(),Dt.empty(),0)}static newUnknownDocument(e,n){return new gt(e,3,n,ne.min(),ne.min(),Dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,n){this.position=e,this.inclusive=n}}function Ag(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=G.comparator(G.fromName(o.referenceValue),n.key):s=Xi(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Sg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Dn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,n="asc"){this.field=e,this.dir=n}}function nS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{}class Xe extends Qv{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new iS(e,n,s):n==="array-contains"?new aS(e,s):n==="in"?new lS(e,s):n==="not-in"?new cS(e,s):n==="array-contains-any"?new uS(e,s):new Xe(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new rS(e,s):new oS(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Xi(n,this.value)):n!==null&&ii(this.value)===ii(n)&&this.matchesComparison(Xi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xn extends Qv{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new xn(e,n)}matches(e){return Yv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Yv(t){return t.op==="and"}function Xv(t){return sS(t)&&Yv(t)}function sS(t){for(const e of t.filters)if(e instanceof xn)return!1;return!0}function hh(t){if(t instanceof Xe)return t.field.canonicalString()+t.op.toString()+Ji(t.value);if(Xv(t))return t.filters.map(e=>hh(e)).join(",");{const e=t.filters.map(n=>hh(n)).join(",");return`${t.op}(${e})`}}function Jv(t,e){return t instanceof Xe?function(s,i){return i instanceof Xe&&s.op===i.op&&s.field.isEqual(i.field)&&Dn(s.value,i.value)}(t,e):t instanceof xn?function(s,i){return i instanceof xn&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((r,o,a)=>r&&Jv(o,i.filters[a]),!0):!1}(t,e):void Z()}function Zv(t){return t instanceof Xe?function(n){return`${n.field.canonicalString()} ${n.op} ${Ji(n.value)}`}(t):t instanceof xn?function(n){return n.op.toString()+" {"+n.getFilters().map(Zv).join(" ,")+"}"}(t):"Filter"}class iS extends Xe{constructor(e,n,s){super(e,n,s),this.key=G.fromName(s.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class rS extends Xe{constructor(e,n){super(e,"in",n),this.keys=eE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class oS extends Xe{constructor(e,n){super(e,"not-in",n),this.keys=eE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function eE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>G.fromName(s.referenceValue))}class aS extends Xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Hd(n)&&go(n.arrayValue,this.value)}}class lS extends Xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&go(this.value.arrayValue,n)}}class cS extends Xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(go(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!go(this.value.arrayValue,n)}}class uS extends Xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Hd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>go(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ce=null}}function Rg(t,e=null,n=[],s=[],i=null,r=null,o=null){return new hS(t,e,n,s,i,r,o)}function zd(t){const e=re(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>hh(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),sc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ji(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ji(s)).join(",")),e.ce=n}return e.ce}function qd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!nS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Jv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Sg(t.startAt,e.startAt)&&Sg(t.endAt,e.endAt)}function dh(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function dS(t,e,n,s,i,r,o,a){return new ic(t,e,n,s,i,r,o,a)}function rc(t){return new ic(t)}function Pg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function fS(t){return t.collectionGroup!==null}function Hr(t){const e=re(t);if(e.le===null){e.le=[];const n=new Set;for(const r of e.explicitOrderBy)e.le.push(r),n.add(r.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ht(at.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(r=>{n.has(r.canonicalString())||r.isKeyField()||e.le.push(new tl(r,s))}),n.has(at.keyField().canonicalString())||e.le.push(new tl(at.keyField(),s))}return e.le}function Rn(t){const e=re(t);return e.he||(e.he=mS(e,Hr(t))),e.he}function mS(t,e){if(t.limitType==="F")return Rg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const r=i.dir==="desc"?"asc":"desc";return new tl(i.field,r)});const n=t.endAt?new el(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new el(t.startAt.position,t.startAt.inclusive):null;return Rg(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function fh(t,e,n){return new ic(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function oc(t,e){return qd(Rn(t),Rn(e))&&t.limitType===e.limitType}function tE(t){return`${zd(Rn(t))}|lt:${t.limitType}`}function Si(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(i=>Zv(i)).join(", ")}]`),sc(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(i=>Ji(i)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(i=>Ji(i)).join(",")),`Target(${s})`}(Rn(t))}; limitType=${t.limitType})`}function ac(t,e){return e.isFoundDocument()&&function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):G.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)}(t,e)&&function(s,i){for(const r of Hr(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(s,i){return!(s.startAt&&!function(o,a,l){const c=Ag(o,a,l);return o.inclusive?c<=0:c<0}(s.startAt,Hr(s),i)||s.endAt&&!function(o,a,l){const c=Ag(o,a,l);return o.inclusive?c>=0:c>0}(s.endAt,Hr(s),i))}(t,e)}function gS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function nE(t){return(e,n)=>{let s=!1;for(const i of Hr(t)){const r=pS(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function pS(t,e,n){const s=t.field.isKeyField()?G.comparator(e.key,n.key):function(r,o,a){const l=o.data.field(r),c=a.data.field(r);return l!==null&&c!==null?Xi(l,c):Z()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){hi(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return qv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S=new Qe(G.comparator);function Qn(){return _S}const sE=new Qe(G.comparator);function Lr(...t){let e=sE;for(const n of t)e=e.insert(n.key,n);return e}function iE(t){let e=sE;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function qs(){return zr()}function rE(){return zr()}function zr(){return new fr(t=>t.toString(),(t,e)=>t.isEqual(e))}const yS=new Qe(G.comparator),vS=new ht(G.comparator);function ce(...t){let e=vS;for(const n of t)e=e.add(n);return e}const ES=new ht(ve);function TS(){return ES}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Za(e)?"-0":e}}function aE(t){return{integerValue:""+t}}function IS(t,e){return JA(e)?aE(e):oE(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(){this._=void 0}}function wS(t,e,n){return t instanceof nl?function(i,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&jd(r)&&(r=Wd(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(n,e):t instanceof po?cE(t,e):t instanceof _o?uE(t,e):function(i,r){const o=lE(i,r),a=kg(o)+kg(i.Ie);return uh(o)&&uh(i.Ie)?aE(a):oE(i.serializer,a)}(t,e)}function CS(t,e,n){return t instanceof po?cE(t,e):t instanceof _o?uE(t,e):n}function lE(t,e){return t instanceof sl?function(s){return uh(s)||function(r){return!!r&&"doubleValue"in r}(s)}(e)?e:{integerValue:0}:null}class nl extends lc{}class po extends lc{constructor(e){super(),this.elements=e}}function cE(t,e){const n=hE(e);for(const s of t.elements)n.some(i=>Dn(i,s))||n.push(s);return{arrayValue:{values:n}}}class _o extends lc{constructor(e){super(),this.elements=e}}function uE(t,e){let n=hE(e);for(const s of t.elements)n=n.filter(i=>!Dn(i,s));return{arrayValue:{values:n}}}class sl extends lc{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function kg(t){return qe(t.integerValue||t.doubleValue)}function hE(t){return Hd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function bS(t,e){return t.field.isEqual(e.field)&&function(s,i){return s instanceof po&&i instanceof po||s instanceof _o&&i instanceof _o?Yi(s.elements,i.elements,Dn):s instanceof sl&&i instanceof sl?Dn(s.Ie,i.Ie):s instanceof nl&&i instanceof nl}(t.transform,e.transform)}class AS{constructor(e,n){this.version=e,this.transformResults=n}}class un{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new un}static exists(e){return new un(void 0,e)}static updateTime(e){return new un(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Oa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class cc{}function dE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Kd(t.key,un.none()):new Wo(t.key,t.data,un.none());{const n=t.data,s=Dt.empty();let i=new ht(at.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Ns(t.key,s,new jt(i.toArray()),un.none())}}function SS(t,e,n){t instanceof Wo?function(i,r,o){const a=i.value.clone(),l=Dg(i.fieldTransforms,r,o.transformResults);a.setAll(l),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Ns?function(i,r,o){if(!Oa(i.precondition,r))return void r.convertToUnknownDocument(o.version);const a=Dg(i.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(fE(i)),l.setAll(a),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function qr(t,e,n,s){return t instanceof Wo?function(r,o,a,l){if(!Oa(r.precondition,o))return a;const c=r.value.clone(),u=xg(r.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Ns?function(r,o,a,l){if(!Oa(r.precondition,o))return a;const c=xg(r.fieldTransforms,l,o),u=o.data;return u.setAll(fE(r)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(t,e,n,s):function(r,o,a){return Oa(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function RS(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=lE(s.transform,i||null);r!=null&&(n===null&&(n=Dt.empty()),n.set(s.field,r))}return n||null}function Ng(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&Yi(s,i,(r,o)=>bS(r,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Wo extends cc{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ns extends cc{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function fE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Dg(t,e,n){const s=new Map;Ae(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,CS(o,a,n[i]))}return s}function xg(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,wS(r,o,e))}return s}class Kd extends cc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class PS extends cc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&SS(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=qr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=qr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=rE();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=dE(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ne.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&Yi(this.mutations,e.mutations,(n,s)=>Ng(n,s))&&Yi(this.baseMutations,e.baseMutations,(n,s)=>Ng(n,s))}}class Gd{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){Ae(e.mutations.length===s.length);let i=function(){return yS}();const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Gd(e,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze,de;function xS(t){switch(t){default:return Z();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function mE(t){if(t===void 0)return Gn("GRPC error has no .code"),P.UNKNOWN;switch(t){case ze.OK:return P.OK;case ze.CANCELLED:return P.CANCELLED;case ze.UNKNOWN:return P.UNKNOWN;case ze.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case ze.INTERNAL:return P.INTERNAL;case ze.UNAVAILABLE:return P.UNAVAILABLE;case ze.UNAUTHENTICATED:return P.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case ze.NOT_FOUND:return P.NOT_FOUND;case ze.ALREADY_EXISTS:return P.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return P.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case ze.ABORTED:return P.ABORTED;case ze.OUT_OF_RANGE:return P.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return P.UNIMPLEMENTED;case ze.DATA_LOSS:return P.DATA_LOSS;default:return Z()}}(de=ze||(ze={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OS(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS=new Vi([4294967295,4294967295],0);function Og(t){const e=OS().encode(t),n=new LA;return n.update(e),new Uint8Array(n.digest())}function Vg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Vi([n,s],0),new Vi([i,r],0)]}class Qd{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Fr(`Invalid padding: ${n}`);if(s<0)throw new Fr(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Fr(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Fr(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Vi.fromNumber(this.Te)}de(e,n,s){let i=e.add(n.multiply(Vi.fromNumber(s)));return i.compare(VS)===1&&(i=new Vi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Og(e),[s,i]=Vg(n);for(let r=0;r<this.hashCount;r++){const o=this.de(s,i,r);if(!this.Ae(o))return!1}return!0}static create(e,n,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Qd(r,i,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Og(e),[s,i]=Vg(n);for(let r=0;r<this.hashCount;r++){const o=this.de(s,i,r);this.Re(o)}}Re(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Fr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Ho.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new uc(ne.min(),i,new Qe(ve),Qn(),ce())}}class Ho{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Ho(s,n,ce(),ce(),ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,n,s,i){this.Ve=e,this.removedTargetIds=n,this.key=s,this.me=i}}class gE{constructor(e,n){this.targetId=e,this.fe=n}}class pE{constructor(e,n,s=It.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Mg{constructor(){this.ge=0,this.pe=Fg(),this.ye=It.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=ce(),n=ce(),s=ce();return this.pe.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:Z()}}),new Ho(this.ye,this.we,e,n,s)}Fe(){this.Se=!1,this.pe=Fg()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,Ae(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class MS{constructor(e){this.Le=e,this.ke=new Map,this.qe=Qn(),this.Qe=Lg(),this.Ke=new Qe(ve)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const s=this.ze(n);switch(e.state){case 0:this.je(n)&&s.Ce(e.resumeToken);break;case 1:s.Ne(),s.be||s.Fe(),s.Ce(e.resumeToken);break;case 2:s.Ne(),s.be||this.removeTarget(n);break;case 3:this.je(n)&&(s.Be(),s.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),s.Ce(e.resumeToken));break;default:Z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((s,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,s=e.fe.count,i=this.Ye(n);if(i){const r=i.target;if(dh(r))if(s===0){const o=new G(r.path);this.We(n,o,gt.newNoDocument(o,ne.min()))}else Ae(s===1);else{const o=this.Ze(n);if(o!==s){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=n;let o,a;try{o=si(s).toUint8Array()}catch(l){if(l instanceof Kv)return Qi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Qd(o,i,r)}catch(l){return Qi(l instanceof Fr?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,s){return n.fe.count===s-this.rt(e,n.targetId)?0:2}rt(e,n){const s=this.Le.getRemoteKeysForTarget(n);let i=0;return s.forEach(r=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(a)||(this.We(n,r,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((r,o)=>{const a=this.Ye(o);if(a){if(r.current&&dh(a.target)){const l=new G(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,gt.newNoDocument(l,e))}r.De&&(n.set(o,r.ve()),r.Fe())}});let s=ce();this.Qe.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ye(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.qe.forEach((r,o)=>o.setReadTime(e));const i=new uc(e,n,this.Ke,this.qe,s);return this.qe=Qn(),this.Qe=Lg(),this.Ke=new Qe(ve),i}Ue(e,n){if(!this.je(e))return;const s=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,s),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,s){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),s&&(this.qe=this.qe.insert(n,s))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new Mg,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new ht(ve),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new Mg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Lg(){return new Qe(G.comparator)}function Fg(){return new Qe(G.comparator)}const LS=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),FS=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),US=(()=>({and:"AND",or:"OR"}))();class BS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function mh(t,e){return t.useProto3Json||sc(e)?e:{value:e}}function il(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _E(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function $S(t,e){return il(t,e.toTimestamp())}function Pn(t){return Ae(!!t),ne.fromTimestamp(function(n){const s=Is(n);return new Ge(s.seconds,s.nanos)}(t))}function Yd(t,e){return function(s){return new Ve(["projects",s.projectId,"databases",s.database])}(t).child("documents").child(e).canonicalString()}function yE(t){const e=Ve.fromString(t);return Ae(IE(e)),e}function gh(t,e){return Yd(t.databaseId,e.path)}function hu(t,e){const n=yE(e);if(n.get(1)!==t.databaseId.projectId)throw new q(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(vE(n))}function ph(t,e){return Yd(t.databaseId,e)}function jS(t){const e=yE(t);return e.length===4?Ve.emptyPath():vE(e)}function _h(t){return new Ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function vE(t){return Ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ug(t,e,n){return{name:gh(t,e),fields:n.value.mapValue.fields}}function WS(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,u){return c.useProto3Json?(Ae(u===void 0||typeof u=="string"),It.fromBase64String(u||"")):(Ae(u===void 0||u instanceof Uint8Array),It.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?P.UNKNOWN:mE(c.code);return new q(u,c.message||"")}(o);n=new pE(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=hu(t,s.document.name),r=Pn(s.document.updateTime),o=s.document.createTime?Pn(s.document.createTime):ne.min(),a=new Dt({mapValue:{fields:s.document.fields}}),l=gt.newFoundDocument(i,r,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new Va(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=hu(t,s.document),r=s.readTime?Pn(s.readTime):ne.min(),o=gt.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Va([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=hu(t,s.document),r=s.removedTargetIds||[];n=new Va([],r,i,null)}else{if(!("filter"in e))return Z();{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new DS(i,r),a=s.targetId;n=new gE(a,o)}}return n}function HS(t,e){let n;if(e instanceof Wo)n={update:Ug(t,e.key,e.value)};else if(e instanceof Kd)n={delete:gh(t,e.key)};else if(e instanceof Ns)n={update:Ug(t,e.key,e.data),updateMask:ZS(e.fieldMask)};else{if(!(e instanceof PS))return Z();n={verify:gh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,o){const a=o.transform;if(a instanceof nl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof po)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof _o)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof sl)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw Z()}(0,s))),e.precondition.isNone||(n.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:$S(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:Z()}(t,e.precondition)),n}function zS(t,e){return t&&t.length>0?(Ae(e!==void 0),t.map(n=>function(i,r){let o=i.updateTime?Pn(i.updateTime):Pn(r);return o.isEqual(ne.min())&&(o=Pn(r)),new AS(o,i.transformResults||[])}(n,e))):[]}function qS(t,e){return{documents:[ph(t,e.path)]}}function KS(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=ph(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ph(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length!==0)return TE(xn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:Ri(h.field),direction:YS(h.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=mh(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function GS(t){let e=jS(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Ae(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(h){const d=EE(h);return d instanceof xn&&Xv(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(m){return new tl(Pi(m.field),function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,sc(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new el(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new el(f,d)}(n.endAt)),dS(e,i,o,r,a,"F",l,c)}function QS(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function EE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Pi(n.unaryFilter.field);return Xe.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=Pi(n.unaryFilter.field);return Xe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Pi(n.unaryFilter.field);return Xe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Pi(n.unaryFilter.field);return Xe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(t):t.fieldFilter!==void 0?function(n){return Xe.create(Pi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return xn.create(n.compositeFilter.filters.map(s=>EE(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Z()}}(n.compositeFilter.op))}(t):Z()}function YS(t){return LS[t]}function XS(t){return FS[t]}function JS(t){return US[t]}function Ri(t){return{fieldPath:t.canonicalString()}}function Pi(t){return at.fromServerFormat(t.fieldPath)}function TE(t){return t instanceof Xe?function(n){if(n.op==="=="){if(bg(n.value))return{unaryFilter:{field:Ri(n.field),op:"IS_NAN"}};if(Cg(n.value))return{unaryFilter:{field:Ri(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(bg(n.value))return{unaryFilter:{field:Ri(n.field),op:"IS_NOT_NAN"}};if(Cg(n.value))return{unaryFilter:{field:Ri(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ri(n.field),op:XS(n.op),value:n.value}}}(t):t instanceof xn?function(n){const s=n.getFilters().map(i=>TE(i));return s.length===1?s[0]:{compositeFilter:{op:JS(n.op),filters:s}}}(t):Z()}function ZS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function IE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,n,s,i,r=ne.min(),o=ne.min(),a=It.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new ds(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ds(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ds(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ds(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e){this.ut=e}}function tR(t){const e=GS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?fh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(){this.on=new sR}addToCollectionParentIndex(e,n){return this.on.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n){return k.resolve(null)}getIndexType(e,n){return k.resolve(0)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,n){return k.resolve(Ts.min())}getMinOffsetFromCollectionGroup(e,n){return k.resolve(Ts.min())}updateCollectionGroup(e,n,s){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class sR{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new ht(Ve.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new ht(Ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Zi(0)}static Nn(){return new Zi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(){this.changes=new fr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?k.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&qr(s.mutation,i,jt.empty(),Ge.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ce()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ce()){const i=qs();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Lr();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=qs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ce()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Qn();const o=zr(),a=function(){return zr()}();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof Ns)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),qr(u.mutation,c,u.mutation.getFieldMask(),Ge.now())):o.set(c.key,jt.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new rR(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=zr();let i=new Qe((o,a)=>o-a),r=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||jt.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(i.get(a.batchId)||ce()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=rE();u.forEach(d=>{if(!r.has(d)){const f=dE(n.get(d),s.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return k.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,i){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):fS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,i):this.getDocumentsMatchingCollectionQuery(e,n,s,i)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):k.resolve(qs());let a=-1,l=r;return o.next(c=>k.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?k.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,ce())).next(u=>({batchId:a,changes:iE(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(s=>{let i=Lr();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s,i){const r=n.collectionGroup;let o=Lr();return this.indexManager.getCollectionParents(e,r).next(a=>k.forEach(a,l=>{const c=function(h,d){return new ic(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s,i).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r,i))).next(o=>{r.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,gt.newInvalidDocument(u)))});let a=Lr();return o.forEach((l,c)=>{const u=r.get(l);u!==void 0&&qr(u.mutation,c,jt.empty(),Ge.now()),ac(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return k.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Pn(i.createTime)}}(n)),k.resolve()}getNamedQuery(e,n){return k.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(i){return{name:i.name,query:tR(i.bundledQuery),readTime:Pn(i.readTime)}}(n)),k.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(){this.overlays=new Qe(G.comparator),this.lr=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}getOverlays(e,n){const s=qs();return k.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.lt(e,n,r)}),k.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.lr.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.lr.delete(s)),k.resolve()}getOverlaysForCollection(e,n,s){const i=qs(),r=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return k.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new Qe((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=qs(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=qs(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return k.resolve(a)}lt(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(s.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new NS(n,s));let r=this.lr.get(n);r===void 0&&(r=ce(),this.lr.set(n,r)),this.lr.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(){this.hr=new ht(et.Pr),this.Ir=new ht(et.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const s=new et(e,n);this.hr=this.hr.add(s),this.Ir=this.Ir.add(s)}Er(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.dr(new et(e,n))}Ar(e,n){e.forEach(s=>this.removeReference(s,n))}Rr(e){const n=new G(new Ve([])),s=new et(n,e),i=new et(n,e+1),r=[];return this.Ir.forEachInRange([s,i],o=>{this.dr(o),r.push(o.key)}),r}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new G(new Ve([])),s=new et(n,e),i=new et(n,e+1);let r=ce();return this.Ir.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new et(e,0),s=this.hr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class et{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return G.comparator(e.key,n.key)||ve(e.gr,n.gr)}static Tr(e,n){return ve(e.gr,n.gr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new ht(et.Pr)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new kS(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new et(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,n){return k.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.Sr(s),r=i<0?0:i;return k.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new et(n,0),i=new et(n,Number.POSITIVE_INFINITY),r=[];return this.yr.forEachInRange([s,i],o=>{const a=this.wr(o.gr);r.push(a)}),k.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ht(ve);return n.forEach(i=>{const r=new et(i,0),o=new et(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([r,o],a=>{s=s.add(a.gr)})}),k.resolve(this.br(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;G.isDocumentKey(r)||(r=r.child(""));const o=new et(new G(r),0);let a=new ht(ve);return this.yr.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.gr)),!0)},o),k.resolve(this.br(a))}br(e){const n=[];return e.forEach(s=>{const i=this.wr(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ae(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.yr;return k.forEach(n.mutations,i=>{const r=new et(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=s})}Fn(e){}containsKey(e,n){const s=new et(n,0),i=this.yr.firstAfterOrEqual(s);return k.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(e){this.Cr=e,this.docs=function(){return new Qe(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return k.resolve(s?s.document.mutableCopy():gt.newInvalidDocument(n))}getEntries(e,n){let s=Qn();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():gt.newInvalidDocument(i))}),k.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Qn();const o=n.path,a=new G(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||QA(GA(u),s)<=0||(i.has(u.key)||ac(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return k.resolve(r)}getAllFromCollectionGroup(e,n,s,i){Z()}vr(e,n){return k.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new hR(this)}getSize(e){return k.resolve(this.size)}}class hR extends iR{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this._r.addEntry(e,i)):this._r.removeEntry(s)}),k.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e){this.persistence=e,this.Fr=new fr(n=>zd(n),qd),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Xd,this.targetCount=0,this.Nr=Zi.On()}forEachTarget(e,n){return this.Fr.forEach((s,i)=>n(i)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Mr&&(this.Mr=n),k.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Zi(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.kn(n),k.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Fr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),k.waitFor(r).next(()=>i)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const s=this.Fr.get(n)||null;return k.resolve(s)}addMatchingKeys(e,n,s){return this.Or.Er(n,s),k.resolve()}removeMatchingKeys(e,n,s){this.Or.Ar(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),k.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),k.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Or.mr(n);return k.resolve(s)}containsKey(e,n){return k.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e,n){this.Br={},this.overlays={},this.Lr=new $d(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new dR(this),this.indexManager=new nR,this.remoteDocumentCache=function(i){return new uR(i)}(s=>this.referenceDelegate.Qr(s)),this.serializer=new eR(n),this.Kr=new aR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new lR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Br[e.toKey()];return s||(s=new cR(n,this.referenceDelegate),this.Br[e.toKey()]=s),s}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,s){H("MemoryPersistence","Starting transaction:",e);const i=new mR(this.Lr.next());return this.referenceDelegate.$r(),s(i).next(r=>this.referenceDelegate.Ur(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Wr(e,n){return k.or(Object.values(this.Br).map(s=>()=>s.containsKey(e,n)))}}class mR extends XA{constructor(e){super(),this.currentSequenceNumber=e}}class Jd{constructor(e){this.persistence=e,this.Gr=new Xd,this.zr=null}static jr(e){return new Jd(e)}get Hr(){if(this.zr)return this.zr;throw Z()}addReference(e,n,s){return this.Gr.addReference(s,n),this.Hr.delete(s.toString()),k.resolve()}removeReference(e,n,s){return this.Gr.removeReference(s,n),this.Hr.add(s.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),k.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Hr.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Hr,s=>{const i=G.fromPath(s);return this.Jr(e,i).next(r=>{r||n.removeEntry(i,ne.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(s=>{s?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return k.or([()=>k.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.ki=s,this.qi=i}static Qi(e,n){let s=ce(),i=ce();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Zd(e,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,s,i){const r={result:null};return this.zi(e,n).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.ji(e,n,i,s).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new gR;return this.Hi(e,n,o).next(a=>{if(r.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>r.result)}Ji(e,n,s,i){return s.documentReadCount<this.Ui?(Sr()<=le.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Si(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),k.resolve()):(Sr()<=le.DEBUG&&H("QueryEngine","Query:",Si(n),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.Wi*i?(Sr()<=le.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Si(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Rn(n))):k.resolve())}zi(e,n){if(Pg(n))return k.resolve(null);let s=Rn(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=fh(n,null,"F"),s=Rn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=ce(...r);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Yi(n,a);return this.Zi(n,c,o,l.readTime)?this.zi(e,fh(n,null,"F")):this.Xi(e,c,n,l)}))})))}ji(e,n,s,i){return Pg(n)||i.isEqual(ne.min())?k.resolve(null):this.Gi.getDocuments(e,s).next(r=>{const o=this.Yi(n,r);return this.Zi(n,o,s,i)?k.resolve(null):(Sr()<=le.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Si(n)),this.Xi(e,o,n,KA(i,-1)).next(a=>a))})}Yi(e,n){let s=new ht(nE(e));return n.forEach((i,r)=>{ac(e,r)&&(s=s.add(r))}),s}Zi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Hi(e,n,s){return Sr()<=le.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Si(n)),this.Gi.getDocumentsMatchingQuery(e,n,Ts.min(),s)}Xi(e,n,s,i){return this.Gi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(e,n,s,i){this.persistence=e,this.es=n,this.serializer=i,this.ts=new Qe(ve),this.ns=new fr(r=>zd(r),qd),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(s)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new oR(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function yR(t,e,n,s){return new _R(t,e,n,s)}async function wE(t,e){const n=re(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.os(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=ce();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({_s:c,removedBatchIds:o,addedBatchIds:a}))})})}function vR(t,e){const n=re(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let f=k.resolve();return d.forEach(m=>{f=f.next(()=>u.getEntry(l,m)).next(g=>{const _=c.docVersions.get(m);Ae(_!==null),g.version.compareTo(_)<0&&(h.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),u.addEntry(g)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let l=ce();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function CE(t){const e=re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function ER(t,e){const n=re(t),s=e.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(It.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),i=i.insert(h,f),function(g,_,E){return g.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,f,u)&&a.push(n.qr.updateTargetData(r,f))});let l=Qn(),c=ce();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(TR(r,o,e.documentUpdates).next(u=>{l=u.us,c=u.cs})),!s.isEqual(ne.min())){const u=n.qr.getLastRemoteSnapshotVersion(r).next(h=>n.qr.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return k.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.ts=i,r))}function TR(t,e,n){let s=ce(),i=ce();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Qn();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ne.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):H("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{us:o,cs:i}})}function IR(t,e){const n=re(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function wR(t,e){const n=re(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.qr.getTargetData(s,e).next(r=>r?(i=r,k.resolve(i)):n.qr.allocateTargetId(s).next(o=>(i=new ds(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.qr.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.ts.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(s.targetId,s),n.ns.set(e,s.targetId)),s})}async function yh(t,e,n){const s=re(t),i=s.ts.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!jo(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.ts=s.ts.remove(e),s.ns.delete(i.target)}function Bg(t,e,n){const s=re(t);let i=ne.min(),r=ce();return s.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=re(l),d=h.ns.get(u);return d!==void 0?k.resolve(h.ts.get(d)):h.qr.getTargetData(c,u)}(s,o,Rn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.es.getDocumentsMatchingQuery(o,e,n?i:ne.min(),n?r:ce())).next(a=>(CR(s,gS(e),a),{documents:a,ls:r})))}function CR(t,e,n){let s=t.rs.get(e)||ne.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.rs.set(e,s)}class $g{constructor(){this.activeTargetIds=TS()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class bR{constructor(){this.eo=new $g,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,s){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new $g,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ga=null;function du(){return ga===null?ga=function(){return 268435456+Math.round(2147483648*Math.random())}():ga++,"0x"+ga.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="WebChannelConnection";class PR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.mo=s+"://"+n.host,this.fo=`projects/${i}/databases/${r}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${r}`}get yo(){return!1}wo(n,s,i,r,o){const a=du(),l=this.So(n,s);H("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(c,r,o),this.Do(n,l,c,i).then(u=>(H("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Qi("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",i),u})}Co(n,s,i,r,o,a){return this.wo(n,s,i,r,o)}bo(n,s,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+dr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((r,o)=>n[o]=r),i&&i.headers.forEach((r,o)=>n[o]=r)}So(n,s){const i=SR[n];return`${this.mo}/v1/${s}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,s,i){const r=du();return new Promise((o,a)=>{const l=new MA;l.setWithCredentials(!0),l.listenOnce(OA.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case uu.NO_ERROR:const u=l.getResponseJson();H(ft,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case uu.TIMEOUT:H(ft,`RPC '${e}' ${r} timed out`),a(new q(P.DEADLINE_EXCEEDED,"Request time out"));break;case uu.HTTP_ERROR:const h=l.getStatus();if(H(ft,`RPC '${e}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const m=function(_){const E=_.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(E)>=0?E:P.UNKNOWN}(f.status);a(new q(m,f.message))}else a(new q(P.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new q(P.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{H(ft,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(i);H(ft,`RPC '${e}' ${r} sending request:`,i),l.send(n,"POST",c,s,15)})}vo(e,n,s){const i=du(),r=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=DA(),a=xA(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.bo(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const u=r.join("");H(ft,`Creating RPC '${e}' stream ${i}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,f=!1;const m=new RR({co:_=>{f?H(ft,`Not sending because RPC '${e}' stream ${i} is closed:`,_):(d||(H(ft,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),H(ft,`RPC '${e}' stream ${i} sending:`,_),h.send(_))},lo:()=>h.close()}),g=(_,E,w)=>{_.listen(E,T=>{try{w(T)}catch(C){setTimeout(()=>{throw C},0)}})};return g(h,da.EventType.OPEN,()=>{f||H(ft,`RPC '${e}' stream ${i} transport opened.`)}),g(h,da.EventType.CLOSE,()=>{f||(f=!0,H(ft,`RPC '${e}' stream ${i} transport closed`),m.Ro())}),g(h,da.EventType.ERROR,_=>{f||(f=!0,Qi(ft,`RPC '${e}' stream ${i} transport errored:`,_),m.Ro(new q(P.UNAVAILABLE,"The operation could not be completed")))}),g(h,da.EventType.MESSAGE,_=>{var E;if(!f){const w=_.data[0];Ae(!!w);const T=w,C=T.error||((E=T[0])===null||E===void 0?void 0:E.error);if(C){H(ft,`RPC '${e}' stream ${i} received error:`,C);const O=C.status;let A=function(D){const j=ze[D];if(j!==void 0)return mE(j)}(O),z=C.message;A===void 0&&(A=P.INTERNAL,z="Unknown error status: "+O+" with message "+C.message),f=!0,m.Ro(new q(A,z)),h.close()}else H(ft,`RPC '${e}' stream ${i} received:`,w),m.Vo(w)}}),g(a,VA.STAT_EVENT,_=>{_.stat===vg.PROXY?H(ft,`RPC '${e}' stream ${i} detected buffering proxy`):_.stat===vg.NOPROXY&&H(ft,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{m.Ao()},0),m}}function fu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(t){return new BS(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e,n,s=1e3,i=1.5,r=6e4){this.si=e,this.timerId=n,this.Fo=s,this.Mo=i,this.xo=r,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),s=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-s);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e,n,s,i,r,o,a,l){this.si=e,this.Ko=s,this.$o=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new bE(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===P.RESOURCE_EXHAUSTED?(Gn(n.toString()),Gn("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Uo===n&&this.s_(s,i)},s=>{e(()=>{const i=new q(P.UNKNOWN,"Fetching auth token failed: "+s.message);return this.o_(i)})})}s_(e,n){const s=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{s(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{s(()=>this.o_(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class kR extends AE{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=WS(this.serializer,e),s=function(r){if(!("targetChange"in r))return ne.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?ne.min():o.readTime?Pn(o.readTime):ne.min()}(e);return this.listener.a_(n,s)}u_(e){const n={};n.database=_h(this.serializer),n.addTarget=function(r,o){let a;const l=o.target;if(a=dh(l)?{documents:qS(r,l)}:{query:KS(r,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=_E(r,o.resumeToken);const c=mh(r,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ne.min())>0){a.readTime=il(r,o.snapshotVersion.toTimestamp());const c=mh(r,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const s=QS(this.serializer,e);s&&(n.labels=s),this.e_(n)}c_(e){const n={};n.database=_h(this.serializer),n.removeTarget=e,this.e_(n)}}class NR extends AE{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(Ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=zS(e.writeResults,e.commitTime),s=Pn(e.commitTime);return this.listener.I_(s,n)}return Ae(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=_h(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>HS(this.serializer,s))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new q(P.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.wo(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new q(P.UNKNOWN,i.toString())})}Co(e,n,s,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Co(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new q(P.UNKNOWN,r.toString())})}terminate(){this.d_=!0}}class xR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Gn(n),this.f_=!1):H("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=r,this.F_.ro(o=>{s.enqueueAndForget(async()=>{di(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=re(l);c.C_.add(4),await zo(c),c.M_.set("Unknown"),c.C_.delete(4),await dc(c)}(this))})}),this.M_=new xR(s,i)}}async function dc(t){if(di(t))for(const e of t.v_)await e(!0)}async function zo(t){for(const e of t.v_)await e(!1)}function SE(t,e){const n=re(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),nf(n)?tf(n):mr(n).Ho()&&ef(n,e))}function RE(t,e){const n=re(t),s=mr(n);n.D_.delete(e),s.Ho()&&PE(n,e),n.D_.size===0&&(s.Ho()?s.Zo():di(n)&&n.M_.set("Unknown"))}function ef(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}mr(t).u_(e)}function PE(t,e){t.x_.Oe(e),mr(t).c_(e)}function tf(t){t.x_=new MS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),mr(t).start(),t.M_.g_()}function nf(t){return di(t)&&!mr(t).jo()&&t.D_.size>0}function di(t){return re(t).C_.size===0}function kE(t){t.x_=void 0}async function VR(t){t.D_.forEach((e,n)=>{ef(t,e)})}async function MR(t,e){kE(t),nf(t)?(t.M_.w_(e),tf(t)):t.M_.set("Unknown")}async function LR(t,e,n){if(t.M_.set("Online"),e instanceof pE&&e.state===2&&e.cause)try{await async function(i,r){const o=r.cause;for(const a of r.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(t,e)}catch(s){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await rl(t,s)}else if(e instanceof Va?t.x_.$e(e):e instanceof gE?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(ne.min()))try{const s=await CE(t.localStore);n.compareTo(s)>=0&&await function(r,o){const a=r.x_.it(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=r.D_.get(c);u&&r.D_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=r.D_.get(l);if(!u)return;r.D_.set(l,u.withResumeToken(It.EMPTY_BYTE_STRING,u.snapshotVersion)),PE(r,l);const h=new ds(u.target,l,c,u.sequenceNumber);ef(r,h)}),r.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(s){H("RemoteStore","Failed to raise snapshot:",s),await rl(t,s)}}async function rl(t,e,n){if(!jo(e))throw e;t.C_.add(1),await zo(t),t.M_.set("Offline"),n||(n=()=>CE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await dc(t)})}function NE(t,e){return e().catch(n=>rl(t,n,e))}async function fc(t){const e=re(t),n=ws(e);let s=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;FR(e);)try{const i=await IR(e.localStore,s);if(i===null){e.b_.length===0&&n.Zo();break}s=i.batchId,UR(e,i)}catch(i){await rl(e,i)}DE(e)&&xE(e)}function FR(t){return di(t)&&t.b_.length<10}function UR(t,e){t.b_.push(e);const n=ws(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function DE(t){return di(t)&&!ws(t).jo()&&t.b_.length>0}function xE(t){ws(t).start()}async function BR(t){ws(t).E_()}async function $R(t){const e=ws(t);for(const n of t.b_)e.P_(n.mutations)}async function jR(t,e,n){const s=t.b_.shift(),i=Gd.from(s,e,n);await NE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await fc(t)}async function WR(t,e){e&&ws(t).h_&&await async function(s,i){if(function(o){return xS(o)&&o!==P.ABORTED}(i.code)){const r=s.b_.shift();ws(s).Yo(),await NE(s,()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i)),await fc(s)}}(t,e),DE(t)&&xE(t)}async function Wg(t,e){const n=re(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const s=di(n);n.C_.add(3),await zo(n),s&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await dc(n)}async function HR(t,e){const n=re(t);e?(n.C_.delete(2),await dc(n)):e||(n.C_.add(2),await zo(n),n.M_.set("Unknown"))}function mr(t){return t.O_||(t.O_=function(n,s,i){const r=re(n);return r.A_(),new kR(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{ho:VR.bind(null,t),Io:MR.bind(null,t),a_:LR.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),nf(t)?tf(t):t.M_.set("Unknown")):(await t.O_.stop(),kE(t))})),t.O_}function ws(t){return t.N_||(t.N_=function(n,s,i){const r=re(n);return r.A_(),new NR(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{ho:BR.bind(null,t),Io:WR.bind(null,t),T_:$R.bind(null,t),I_:jR.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await fc(t)):(await t.N_.stop(),t.b_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new jn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new sf(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rf(t,e){if(Gn("AsyncQueue",`${e}: ${t}`),jo(t))return new q(P.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e){this.comparator=e?(n,s)=>e(n,s)||G.comparator(n.key,s.key):(n,s)=>G.comparator(n.key,s.key),this.keyedMap=Lr(),this.sortedSet=new Qe(this.comparator)}static emptySet(e){return new Mi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Mi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Mi;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(){this.B_=new Qe(G.comparator)}track(e){const n=e.doc.key,s=this.B_.get(n);s?e.type!==0&&s.type===3?this.B_=this.B_.insert(n,e):e.type===3&&s.type!==1?this.B_=this.B_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.B_=this.B_.remove(n):e.type===1&&s.type===2?this.B_=this.B_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):Z():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,s)=>{e.push(s)}),e}}class er{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new er(e,n,Mi.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&oc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(){this.k_=void 0,this.listeners=[]}}class qR{constructor(){this.queries=new fr(e=>tE(e),oc),this.onlineState="Unknown",this.q_=new Set}}async function of(t,e){const n=re(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new zR),i)try{r.k_=await n.onListen(s)}catch(o){const a=rf(o,`Initialization of query '${Si(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Q_(n.onlineState),r.k_&&e.K_(r.k_)&&lf(n)}async function af(t,e){const n=re(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function KR(t,e){const n=re(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.K_(i)&&(s=!0);o.k_=i}}s&&lf(n)}function GR(t,e,n){const s=re(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function lf(t){t.q_.forEach(e=>{e.next()})}class cf{constructor(e,n,s){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=s||{}}K_(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new er(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.J_||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=er.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e){this.key=e}}class VE{constructor(e){this.key=e}}class QR{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=ce(),this.mutatedKeys=ce(),this._a=nE(e),this.aa=new Mi(this._a)}get ua(){return this.ia}ca(e,n){const s=n?n.la:new Hg,i=n?n.aa:this.aa;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=ac(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),g=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let _=!1;d&&f?d.data.isEqual(f.data)?m!==g&&(s.track({type:3,doc:f}),_=!0):this.ha(d,f)||(s.track({type:2,doc:f}),_=!0,(l&&this._a(f,l)>0||c&&this._a(f,c)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),_=!0):d&&!f&&(s.track({type:1,doc:d}),_=!0,(l||c)&&(a=!0)),_&&(f?(o=o.add(f),r=g?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{aa:o,la:s,Zi:a,mutatedKeys:r}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,i){const r=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((u,h)=>function(f,m){const g=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return g(f)-g(m)}(u.type,h.type)||this._a(u.doc,h.doc)),this.Pa(s),i=i!=null&&i;const a=n&&!i?this.Ia():[],l=this.oa.size===0&&this.current&&!i?1:0,c=l!==this.sa;return this.sa=l,o.length!==0||c?{snapshot:new er(this.query,e.aa,r,o,e.mutatedKeys,l===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Hg,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=ce(),this.aa.forEach(s=>{this.Ea(s.key)&&(this.oa=this.oa.add(s.key))});const n=[];return e.forEach(s=>{this.oa.has(s)||n.push(new VE(s))}),this.oa.forEach(s=>{e.has(s)||n.push(new OE(s))}),n}da(e){this.ia=e.ls,this.oa=ce();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return er.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class YR{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class XR{constructor(e){this.key=e,this.Ra=!1}}class JR{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new fr(a=>tE(a),oc),this.fa=new Map,this.ga=new Set,this.pa=new Qe(G.comparator),this.ya=new Map,this.wa=new Xd,this.Sa={},this.ba=new Map,this.Da=Zi.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function ZR(t,e){const n=cP(t);let s,i;const r=n.ma.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.Aa();else{const o=await wR(n.localStore,Rn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await eP(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&SE(n.remoteStore,o)}return i}async function eP(t,e,n,s,i){t.va=(h,d,f)=>async function(g,_,E,w){let T=_.view.ca(E);T.Zi&&(T=await Bg(g.localStore,_.query,!1).then(({documents:z})=>_.view.ca(z,T)));const C=w&&w.targetChanges.get(_.targetId),O=w&&w.targetMismatches.get(_.targetId)!=null,A=_.view.applyChanges(T,g.isPrimaryClient,C,O);return qg(g,_.targetId,A.Ta),A.snapshot}(t,h,d,f);const r=await Bg(t.localStore,e,!0),o=new QR(e,r.ls),a=o.ca(r.documents),l=Ho.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);qg(t,n,c.Ta);const u=new YR(e,n,o);return t.ma.set(e,u),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),c.snapshot}async function tP(t,e){const n=re(t),s=n.ma.get(e),i=n.fa.get(s.targetId);if(i.length>1)return n.fa.set(s.targetId,i.filter(r=>!oc(r,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await yh(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),RE(n.remoteStore,s.targetId),vh(n,s.targetId)}).catch($o)):(vh(n,s.targetId),await yh(n.localStore,s.targetId,!0))}async function nP(t,e,n){const s=uP(t);try{const i=await function(o,a){const l=re(o),c=Ge.now(),u=a.reduce((f,m)=>f.add(m.key),ce());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let m=Qn(),g=ce();return l.ss.getEntries(f,u).next(_=>{m=_,m.forEach((E,w)=>{w.isValidDocument()||(g=g.add(E))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,m)).next(_=>{h=_;const E=[];for(const w of a){const T=RS(w,h.get(w.key).overlayedDocument);T!=null&&E.push(new Ns(w.key,T,Gv(T.value.mapValue),un.exists(!0)))}return l.mutationQueue.addMutationBatch(f,c,E,a)}).next(_=>{d=_;const E=_.applyToLocalDocumentSet(h,g);return l.documentOverlayCache.saveOverlays(f,_.batchId,E)})}).then(()=>({batchId:d.batchId,changes:iE(h)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.Sa[o.currentUser.toKey()];c||(c=new Qe(ve)),c=c.insert(a,l),o.Sa[o.currentUser.toKey()]=c}(s,i.batchId,n),await qo(s,i.changes),await fc(s.remoteStore)}catch(i){const r=rf(i,"Failed to persist write");n.reject(r)}}async function ME(t,e){const n=re(t);try{const s=await ER(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.ya.get(r);o&&(Ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?Ae(o.Ra):i.removedDocuments.size>0&&(Ae(o.Ra),o.Ra=!1))}),await qo(n,s,e)}catch(s){await $o(s)}}function zg(t,e,n){const s=re(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ma.forEach((r,o)=>{const a=o.view.Q_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=re(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.listeners)d.Q_(a)&&(c=!0)}),c&&lf(l)}(s.eventManager,e),i.length&&s.Va.a_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function sP(t,e,n){const s=re(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.ya.get(e),r=i&&i.key;if(r){let o=new Qe(G.comparator);o=o.insert(r,gt.newNoDocument(r,ne.min()));const a=ce().add(r),l=new uc(ne.min(),new Map,new Qe(ve),o,a);await ME(s,l),s.pa=s.pa.remove(r),s.ya.delete(e),uf(s)}else await yh(s.localStore,e,!1).then(()=>vh(s,e,n)).catch($o)}async function iP(t,e){const n=re(t),s=e.batch.batchId;try{const i=await vR(n.localStore,e);FE(n,s,null),LE(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await qo(n,i)}catch(i){await $o(i)}}async function rP(t,e,n){const s=re(t);try{const i=await function(o,a){const l=re(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(Ae(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(s.localStore,e);FE(s,e,n),LE(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await qo(s,i)}catch(i){await $o(i)}}function LE(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function FE(t,e,n){const s=re(t);let i=s.Sa[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.Sa[s.currentUser.toKey()]=i}}function vh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.fa.get(e))t.ma.delete(s),n&&t.Va.Fa(s,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(s=>{t.wa.containsKey(s)||UE(t,s)})}function UE(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(RE(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),uf(t))}function qg(t,e,n){for(const s of n)s instanceof OE?(t.wa.addReference(s.key,e),oP(t,s)):s instanceof VE?(H("SyncEngine","Document no longer in limbo: "+s.key),t.wa.removeReference(s.key,e),t.wa.containsKey(s.key)||UE(t,s.key)):Z()}function oP(t,e){const n=e.key,s=n.path.canonicalString();t.pa.get(n)||t.ga.has(s)||(H("SyncEngine","New document in limbo: "+n),t.ga.add(s),uf(t))}function uf(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new G(Ve.fromString(e)),s=t.Da.next();t.ya.set(s,new XR(n)),t.pa=t.pa.insert(n,s),SE(t.remoteStore,new ds(Rn(rc(n.path)),s,"TargetPurposeLimboResolution",$d._e))}}async function qo(t,e,n){const s=re(t),i=[],r=[],o=[];s.ma.isEmpty()||(s.ma.forEach((a,l)=>{o.push(s.va(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=Zd.Qi(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.Va.a_(i),await async function(l,c){const u=re(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>k.forEach(c,d=>k.forEach(d.ki,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>k.forEach(d.qi,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!jo(h))throw h;H("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.ts.get(d),m=f.snapshotVersion,g=f.withLastLimboFreeSnapshotVersion(m);u.ts=u.ts.insert(d,g)}}}(s.localStore,r))}async function aP(t,e){const n=re(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const s=await wE(n.localStore,e);n.currentUser=e,function(r,o){r.ba.forEach(a=>{a.forEach(l=>{l.reject(new q(P.CANCELLED,o))})}),r.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await qo(n,s._s)}}function lP(t,e){const n=re(t),s=n.ya.get(e);if(s&&s.Ra)return ce().add(s.key);{let i=ce();const r=n.fa.get(e);if(!r)return i;for(const o of r){const a=n.ma.get(o);i=i.unionWith(a.view.ua)}return i}}function cP(t){const e=re(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ME.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=lP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sP.bind(null,e),e.Va.a_=KR.bind(null,e.eventManager),e.Va.Fa=GR.bind(null,e.eventManager),e}function uP(t){const e=re(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=iP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rP.bind(null,e),e}class Kg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=hc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return yR(this.persistence,new pR,e.initialUser,this.serializer)}createPersistence(e){return new fR(Jd.jr,this.serializer)}createSharedClientState(e){return new bR}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class hP{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>zg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=aP.bind(null,this.syncEngine),await HR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new qR}()}createDatastore(e){const n=hc(e.databaseInfo.databaseId),s=function(r){return new PR(r)}(e.databaseInfo);return function(r,o,a,l){return new DR(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,i,r,o,a){return new OR(s,i,r,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>zg(this.syncEngine,n,0),function(){return jg.D()?new jg:new AR}())}createSyncEngine(e,n){return function(i,r,o,a,l,c,u){const h=new JR(i,r,o,a,l,c);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const s=re(n);H("RemoteStore","RemoteStore shutting down."),s.C_.add(5),await zo(s),s.F_.shutdown(),s.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):Gn("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=mt.UNAUTHENTICATED,this.clientId=zv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{H("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(H("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(P.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new jn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=rf(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function mu(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await wE(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Gg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await mP(t);H("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Wg(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Wg(e.remoteStore,r)),t._onlineComponents=e}function fP(t){return t.name==="FirebaseError"?t.code===P.FAILED_PRECONDITION||t.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function mP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await mu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!fP(n))throw n;Qi("Error using user provided cache. Falling back to memory cache: "+n),await mu(t,new Kg)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await mu(t,new Kg);return t._offlineComponents}async function BE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await Gg(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await Gg(t,new hP))),t._onlineComponents}function gP(t){return BE(t).then(e=>e.syncEngine)}async function ol(t){const e=await BE(t),n=e.eventManager;return n.onListen=ZR.bind(null,e.syncEngine),n.onUnlisten=tP.bind(null,e.syncEngine),n}function pP(t,e,n={}){const s=new jn;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new hf({next:d=>{o.enqueueAndForget(()=>af(r,h));const f=d.docs.has(a);!f&&d.fromCache?c.reject(new q(P.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?c.reject(new q(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new cf(rc(a.path),u,{includeMetadataChanges:!0,J_:!0});return of(r,h)}(await ol(t),t.asyncQueue,e,n,s)),s.promise}function _P(t,e,n={}){const s=new jn;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new hf({next:d=>{o.enqueueAndForget(()=>af(r,h)),d.fromCache&&l.source==="server"?c.reject(new q(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new cf(a,u,{includeMetadataChanges:!0,J_:!0});return of(r,h)}(await ol(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(t,e,n){if(!n)throw new q(P.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function yP(t,e,n,s){if(e===!0&&s===!0)throw new q(P.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Yg(t){if(!G.isDocumentKey(t))throw new q(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Xg(t){if(G.isDocumentKey(t))throw new q(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function df(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function qt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=df(t);throw new q(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new q(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}yP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$E((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new q(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new q(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new q(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class mc{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jg(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new FA;switch(s.type){case"firstParty":return new jA(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new q(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Qg.get(n);s&&(H("ComponentProvider","Removing Datastore"),Qg.delete(n),s.terminate())}(this),Promise.resolve()}}function vP(t,e,n,s={}){var i;const r=(t=qt(t,mc))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&Qi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let a,l;if(typeof s.mockUserToken=="string")a=s.mockUserToken,l=mt.MOCK_USER;else{a=uC(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new q(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new mt(c)}t._authCredentials=new UA(new Hv(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ko(this.firestore,e,this._query)}}class St{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ps(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new St(this.firestore,e,this._key)}}class ps extends Ko{constructor(e,n,s){super(e,n,rc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new St(this.firestore,null,new G(e))}withConverter(e){return new ps(this.firestore,e,this._path)}}function EP(t,e,...n){if(t=Mt(t),jE("collection","path",e),t instanceof mc){const s=Ve.fromString(e,...n);return Xg(s),new ps(t,null,s)}{if(!(t instanceof St||t instanceof ps))throw new q(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ve.fromString(e,...n));return Xg(s),new ps(t.firestore,null,s)}}function Eh(t,e,...n){if(t=Mt(t),arguments.length===1&&(e=zv.newId()),jE("doc","path",e),t instanceof mc){const s=Ve.fromString(e,...n);return Yg(s),new St(t,null,new G(s))}{if(!(t instanceof St||t instanceof ps))throw new q(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ve.fromString(e,...n));return Yg(s),new St(t.firestore,t instanceof ps?t.converter:null,new G(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new bE(this,"async_queue_retry"),this.iu=()=>{const n=fu();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=fu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=fu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new jn;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!jo(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(s=>{this.eu=s,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw Gn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.tu=!1,s))));return this.Ja=n,n}enqueueAfterDelay(e,n,s){this.su(),this.ru.indexOf(e)>-1&&(n=0);const i=sf.createAndSchedule(this,e,n,s,r=>this.au(r));return this.Xa.push(i),i}su(){this.eu&&Z()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}function Zg(t){return function(n,s){if(typeof n!="object"||n===null)return!1;const i=n;for(const r of s)if(r in i&&typeof i[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Cs extends mc{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=function(){return new TP}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||WE(this),this._firestoreClient.terminate()}}function IP(t,e){const n=typeof t=="object"?t:Fy(),s=typeof t=="string"?t:e||"(default)",i=yb(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=lC("firestore");r&&vP(i,...r)}return i}function gc(t){return t._firestoreClient||WE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function WE(t){var e,n,s;const i=t._freezeSettings(),r=function(a,l,c,u){return new eS(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,$E(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new dP(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new tr(It.fromBase64String(e))}catch(n){throw new q(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new tr(It.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP=/^__.*__$/;class CP{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Ns(e,this.data,this.fieldMask,n,this.fieldTransforms):new Wo(e,this.data,n,this.fieldTransforms)}}class HE{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Ns(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function zE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class mf{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Pu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new mf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:s,du:!1});return i.Au(e),i}Ru(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:s,du:!1});return i.Pu(),i}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return al(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(zE(this.Iu)&&wP.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class bP{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||hc(e)}pu(e,n,s,i=!1){return new mf({Iu:e,methodName:n,gu:s,path:at.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qE(t){const e=t._freezeSettings(),n=hc(t._databaseId);return new bP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function AP(t,e,n,s,i,r={}){const o=t.pu(r.merge||r.mergeFields?2:0,e,n,i);gf("Data must be an object, but it was:",o,s);const a=KE(s,o);let l,c;if(r.merge)l=new jt(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=Th(e,h,n);if(!o.contains(d))throw new q(P.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);QE(u,d)||u.push(d)}l=new jt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new CP(new Dt(a),l,c)}class yc extends ff{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof yc}}function SP(t,e,n,s){const i=t.pu(1,e,n);gf("Data must be an object, but it was:",i,s);const r=[],o=Dt.empty();hi(s,(l,c)=>{const u=pf(e,l,n);c=Mt(c);const h=i.Ru(u);if(c instanceof yc)r.push(u);else{const d=vc(c,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new jt(r);return new HE(o,a,i.fieldTransforms)}function RP(t,e,n,s,i,r){const o=t.pu(1,e,n),a=[Th(e,s,n)],l=[i];if(r.length%2!=0)throw new q(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(Th(e,r[d])),l.push(r[d+1]);const c=[],u=Dt.empty();for(let d=a.length-1;d>=0;--d)if(!QE(c,a[d])){const f=a[d];let m=l[d];m=Mt(m);const g=o.Ru(f);if(m instanceof yc)c.push(f);else{const _=vc(m,g);_!=null&&(c.push(f),u.set(f,_))}}const h=new jt(c);return new HE(u,h,o.fieldTransforms)}function vc(t,e){if(GE(t=Mt(t)))return gf("Unsupported field value:",e,t),KE(t,e);if(t instanceof ff)return function(s,i){if(!zE(i.Iu))throw i.mu(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(s,i){const r=[];let o=0;for(const a of s){let l=vc(a,i.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),r.push(l),o++}return{arrayValue:{values:r}}}(t,e)}return function(s,i){if((s=Mt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return IS(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=Ge.fromDate(s);return{timestampValue:il(i.serializer,r)}}if(s instanceof Ge){const r=new Ge(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:il(i.serializer,r)}}if(s instanceof _c)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof tr)return{bytesValue:_E(i.serializer,s._byteString)};if(s instanceof St){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Yd(s.firestore._databaseId||i.databaseId,s._key.path)}}throw i.mu(`Unsupported field value: ${df(s)}`)}(t,e)}function KE(t,e){const n={};return qv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hi(t,(s,i)=>{const r=vc(i,e.Eu(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function GE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ge||t instanceof _c||t instanceof tr||t instanceof St||t instanceof ff)}function gf(t,e,n){if(!GE(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const s=df(n);throw s==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+s)}}function Th(t,e,n){if((e=Mt(e))instanceof pc)return e._internalPath;if(typeof e=="string")return pf(t,e);throw al("Field path arguments must be of type string or ",t,!1,void 0,n)}const PP=new RegExp("[~\\*/\\[\\]]");function pf(t,e,n){if(e.search(PP)>=0)throw al(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new pc(...e.split("."))._internalPath}catch{throw al(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function al(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new q(P.INVALID_ARGUMENT,a+t+l)}function QE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new kP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(XE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class kP extends YE{data(){return super.data()}}function XE(t,e){return typeof e=="string"?pf(t,e):e instanceof pc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class NP{convertValue(e,n="none"){switch(ii(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(si(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return hi(e,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new _c(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Wd(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(fo(e));default:return null}}convertTimestamp(e){const n=Is(e);return new Ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ve.fromString(e);Ae(IE(s));const i=new mo(s.get(1),s.get(3)),r=new G(s.popFirst(5));return i.isEqual(n)||Gn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DP(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ZE extends YE{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ma(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(XE("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ma extends ZE{data(e={}){return super.data(e)}}class eT{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ur(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Ma(this._firestore,this._userDataWriter,s.key,s,new Ur(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Ma(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ur(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const l=new Ma(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ur(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:xP(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function xP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(t){t=qt(t,St);const e=qt(t.firestore,Cs);return pP(gc(e),t._key).then(n=>nT(e,t,n))}class _f extends NP{constructor(e){super(),this.firestore=e}convertBytes(e){return new tr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new St(this.firestore,null,n)}}function OP(t){t=qt(t,Ko);const e=qt(t.firestore,Cs),n=gc(e),s=new _f(e);return JE(t._query),_P(n,t._query).then(i=>new eT(e,s,t,i))}function VP(t,e,n){t=qt(t,St);const s=qt(t.firestore,Cs),i=DP(t.converter,e,n);return vf(s,[AP(qE(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,un.none())])}function MP(t,e,n,...s){t=qt(t,St);const i=qt(t.firestore,Cs),r=qE(i);let o;return o=typeof(e=Mt(e))=="string"||e instanceof pc?RP(r,"updateDoc",t._key,e,n,s):SP(r,"updateDoc",t._key,e),vf(i,[o.toMutation(t._key,un.exists(!0))])}function LP(t){return vf(qt(t.firestore,Cs),[new Kd(t._key,un.none())])}function yf(t,...e){var n,s,i;t=Mt(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Zg(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Zg(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,c,u;if(t instanceof St)c=qt(t.firestore,Cs),u=rc(t._key.path),l={next:h=>{e[o]&&e[o](nT(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=qt(t,Ko);c=qt(h.firestore,Cs),u=h._query;const d=new _f(c);l={next:f=>{e[o]&&e[o](new eT(c,d,h,f))},error:e[o+1],complete:e[o+2]},JE(t._query)}return function(d,f,m,g){const _=new hf(g),E=new cf(f,_,m);return d.asyncQueue.enqueueAndForget(async()=>of(await ol(d),E)),()=>{_.Na(),d.asyncQueue.enqueueAndForget(async()=>af(await ol(d),E))}}(gc(c),u,a,l)}function vf(t,e){return function(s,i){const r=new jn;return s.asyncQueue.enqueueAndForget(async()=>nP(await gP(s),i,r)),r.promise}(gc(t),e)}function nT(t,e,n){const s=n.docs.get(e._key),i=new _f(t);return new ZE(t,i,e._key,s,new Ur(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){dr=i})(cr),Nn(new dn("firestore",(s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),a=new Cs(new BA(s.getProvider("auth-internal")),new HA(s.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new q(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mo(c.options.projectId,u)}(o,i),o);return r=Object.assign({useFetchStreams:n},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),zt(Eg,"4.4.0",e),zt(Eg,"4.4.0","esm2017")})();const FP=Ly({apiKey:"AIzaSyAU_qncoTVE6nBlX1__ZyCtMIvdhSJ5S5k",authDomain:"test-dfc7c.firebaseapp.com",projectId:"test-dfc7c",storageBucket:"test-dfc7c.appspot.com",messagingSenderId:"1008281327192",appId:"1:1008281327192:web:c822c513c3145ec1991c2d",measurementId:"G-Q95N3GSMDX"}),Ih=IP(FP),wh=EP(Ih,"vuefire_todo");/**
* @vue/shared v3.4.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ef(t,e){const n=new Set(t.split(","));return e?s=>n.has(s.toLowerCase()):s=>n.has(s)}const ke={},Li=[],Wt=()=>{},UP=()=>!1,Ec=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Tf=t=>t.startsWith("onUpdate:"),Ye=Object.assign,If=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},BP=Object.prototype.hasOwnProperty,_e=(t,e)=>BP.call(t,e),X=Array.isArray,Fi=t=>Tc(t)==="[object Map]",sT=t=>Tc(t)==="[object Set]",se=t=>typeof t=="function",He=t=>typeof t=="string",gr=t=>typeof t=="symbol",Re=t=>t!==null&&typeof t=="object",iT=t=>(Re(t)||se(t))&&se(t.then)&&se(t.catch),rT=Object.prototype.toString,Tc=t=>rT.call(t),$P=t=>Tc(t).slice(8,-1),oT=t=>Tc(t)==="[object Object]",wf=t=>He(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,La=Ef(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ic=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},jP=/-(\w)/g,tn=Ic(t=>t.replace(jP,(e,n)=>n?n.toUpperCase():"")),WP=/\B([A-Z])/g,fi=Ic(t=>t.replace(WP,"-$1").toLowerCase()),Zn=Ic(t=>t.charAt(0).toUpperCase()+t.slice(1)),gu=Ic(t=>t?`on${Zn(t)}`:""),bs=(t,e)=>!Object.is(t,e),pu=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ll=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},HP=t=>{const e=parseFloat(t);return isNaN(e)?t:e},zP=t=>{const e=He(t)?Number(t):NaN;return isNaN(e)?t:e};let ep;const aT=()=>ep||(ep=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Cf(t){if(X(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=He(s)?QP(s):Cf(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(He(t)||Re(t))return t}const qP=/;(?![^(]*\))/g,KP=/:([^]+)/,GP=/\/\*[^]*?\*\//g;function QP(t){const e={};return t.replace(GP,"").split(qP).forEach(n=>{if(n){const s=n.split(KP);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function yo(t){let e="";if(He(t))e=t;else if(X(t))for(let n=0;n<t.length;n++){const s=yo(t[n]);s&&(e+=s+" ")}else if(Re(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const YP="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",XP=Ef(YP);function lT(t){return!!t||t===""}const _u=t=>He(t)?t:t==null?"":X(t)||Re(t)&&(t.toString===rT||!se(t.toString))?JSON.stringify(t,cT,2):String(t),cT=(t,e)=>e&&e.__v_isRef?cT(t,e.value):Fi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[yu(s,r)+" =>"]=i,n),{})}:sT(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>yu(n))}:gr(e)?yu(e):Re(e)&&!X(e)&&!oT(e)?String(e):e,yu=(t,e="")=>{var n;return gr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bt;class uT{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Bt,!e&&Bt&&(this.index=(Bt.scopes||(Bt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Bt;try{return Bt=this,e()}finally{Bt=n}}}on(){Bt=this}off(){Bt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function bf(t){return new uT(t)}function JP(t,e=Bt){e&&e.active&&e.effects.push(t)}function hT(){return Bt}function Af(t){Bt&&Bt.cleanups.push(t)}let Xs;class Sf{constructor(e,n,s,i){this.fn=e,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,JP(this,i)}get dirty(){if(this._dirtyLevel===1){mi();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(ZP(n.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),gi()}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=_s,n=Xs;try{return _s=!0,Xs=this,this._runnings++,tp(this),this.fn()}finally{np(this),this._runnings--,Xs=n,_s=e}}stop(){var e;this.active&&(tp(this),np(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function ZP(t){return t.value}function tp(t){t._trackId++,t._depsLength=0}function np(t){if(t.deps&&t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)dT(t.deps[e],t);t.deps.length=t._depsLength}}function dT(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let _s=!0,Ch=0;const fT=[];function mi(){fT.push(_s),_s=!1}function gi(){const t=fT.pop();_s=t===void 0?!0:t}function Rf(){Ch++}function Pf(){for(Ch--;!Ch&&bh.length;)bh.shift()()}function mT(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const s=t.deps[t._depsLength];s!==e?(s&&dT(s,t),t.deps[t._depsLength++]=e):t._depsLength++}}const bh=[];function gT(t,e,n){Rf();for(const s of t.keys())if(t.get(s)===s._trackId){if(s._dirtyLevel<e&&!(s._runnings&&!s.allowRecurse)){const i=s._dirtyLevel;s._dirtyLevel=e,i===0&&(s._shouldSchedule=!0,s.trigger())}s.scheduler&&s._shouldSchedule&&(!s._runnings||s.allowRecurse)&&(s._shouldSchedule=!1,bh.push(s.scheduler))}Pf()}const pT=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},cl=new WeakMap,Js=Symbol(""),Ah=Symbol("");function Lt(t,e,n){if(_s&&Xs){let s=cl.get(t);s||cl.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=pT(()=>s.delete(n))),mT(Xs,i)}}function Wn(t,e,n,s,i,r){const o=cl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&X(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||!gr(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":X(t)?wf(n)&&a.push(o.get("length")):(a.push(o.get(Js)),Fi(t)&&a.push(o.get(Ah)));break;case"delete":X(t)||(a.push(o.get(Js)),Fi(t)&&a.push(o.get(Ah)));break;case"set":Fi(t)&&a.push(o.get(Js));break}Rf();for(const l of a)l&&gT(l,2);Pf()}function ek(t,e){var n;return(n=cl.get(t))==null?void 0:n.get(e)}const tk=Ef("__proto__,__v_isRef,__isVue"),_T=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(gr)),sp=nk();function nk(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=he(this);for(let r=0,o=this.length;r<o;r++)Lt(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(he)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){mi(),Rf();const s=he(this)[e].apply(this,n);return Pf(),gi(),s}}),t}function sk(t){const e=he(this);return Lt(e,"has",t),e.hasOwnProperty(t)}class yT{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,s){const i=this._isReadonly,r=this._shallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?pk:IT:r?TT:ET).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=X(e);if(!i){if(o&&_e(sp,n))return Reflect.get(sp,n,s);if(n==="hasOwnProperty")return sk}const a=Reflect.get(e,n,s);return(gr(n)?_T.has(n):tk(n))||(i||Lt(e,"get",n),r)?a:je(a)?o&&wf(n)?a:a.value:Re(a)?i?Df(a):Ds(a):a}}class vT extends yT{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._shallow){const l=nr(r);if(!ul(s)&&!nr(s)&&(r=he(r),s=he(s)),!X(e)&&je(r)&&!je(s))return l?!1:(r.value=s,!0)}const o=X(e)&&wf(n)?Number(n)<e.length:_e(e,n),a=Reflect.set(e,n,s,i);return e===he(i)&&(o?bs(s,r)&&Wn(e,"set",n,s):Wn(e,"add",n,s)),a}deleteProperty(e,n){const s=_e(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Wn(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!gr(n)||!_T.has(n))&&Lt(e,"has",n),s}ownKeys(e){return Lt(e,"iterate",X(e)?"length":Js),Reflect.ownKeys(e)}}class ik extends yT{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const rk=new vT,ok=new ik,ak=new vT(!0),kf=t=>t,wc=t=>Reflect.getPrototypeOf(t);function pa(t,e,n=!1,s=!1){t=t.__v_raw;const i=he(t),r=he(e);n||(bs(e,r)&&Lt(i,"get",e),Lt(i,"get",r));const{has:o}=wc(i),a=s?kf:n?Of:vo;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function _a(t,e=!1){const n=this.__v_raw,s=he(n),i=he(t);return e||(bs(t,i)&&Lt(s,"has",t),Lt(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function ya(t,e=!1){return t=t.__v_raw,!e&&Lt(he(t),"iterate",Js),Reflect.get(t,"size",t)}function ip(t){t=he(t);const e=he(this);return wc(e).has.call(e,t)||(e.add(t),Wn(e,"add",t,t)),this}function rp(t,e){e=he(e);const n=he(this),{has:s,get:i}=wc(n);let r=s.call(n,t);r||(t=he(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?bs(e,o)&&Wn(n,"set",t,e):Wn(n,"add",t,e),this}function op(t){const e=he(this),{has:n,get:s}=wc(e);let i=n.call(e,t);i||(t=he(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Wn(e,"delete",t,void 0),r}function ap(){const t=he(this),e=t.size!==0,n=t.clear();return e&&Wn(t,"clear",void 0,void 0),n}function va(t,e){return function(s,i){const r=this,o=r.__v_raw,a=he(o),l=e?kf:t?Of:vo;return!t&&Lt(a,"iterate",Js),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function Ea(t,e,n){return function(...s){const i=this.__v_raw,r=he(i),o=Fi(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?kf:e?Of:vo;return!e&&Lt(r,"iterate",l?Ah:Js),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function is(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function lk(){const t={get(r){return pa(this,r)},get size(){return ya(this)},has:_a,add:ip,set:rp,delete:op,clear:ap,forEach:va(!1,!1)},e={get(r){return pa(this,r,!1,!0)},get size(){return ya(this)},has:_a,add:ip,set:rp,delete:op,clear:ap,forEach:va(!1,!0)},n={get(r){return pa(this,r,!0)},get size(){return ya(this,!0)},has(r){return _a.call(this,r,!0)},add:is("add"),set:is("set"),delete:is("delete"),clear:is("clear"),forEach:va(!0,!1)},s={get(r){return pa(this,r,!0,!0)},get size(){return ya(this,!0)},has(r){return _a.call(this,r,!0)},add:is("add"),set:is("set"),delete:is("delete"),clear:is("clear"),forEach:va(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Ea(r,!1,!1),n[r]=Ea(r,!0,!1),e[r]=Ea(r,!1,!0),s[r]=Ea(r,!0,!0)}),[t,n,e,s]}const[ck,uk,hk,dk]=lk();function Nf(t,e){const n=e?t?dk:hk:t?uk:ck;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(_e(n,i)&&i in s?n:s,i,r)}const fk={get:Nf(!1,!1)},mk={get:Nf(!1,!0)},gk={get:Nf(!0,!1)},ET=new WeakMap,TT=new WeakMap,IT=new WeakMap,pk=new WeakMap;function _k(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yk(t){return t.__v_skip||!Object.isExtensible(t)?0:_k($P(t))}function Ds(t){return nr(t)?t:xf(t,!1,rk,fk,ET)}function vk(t){return xf(t,!1,ak,mk,TT)}function Df(t){return xf(t,!0,ok,gk,IT)}function xf(t,e,n,s,i){if(!Re(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=yk(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Ui(t){return nr(t)?Ui(t.__v_raw):!!(t&&t.__v_isReactive)}function nr(t){return!!(t&&t.__v_isReadonly)}function ul(t){return!!(t&&t.__v_isShallow)}function wT(t){return Ui(t)||nr(t)}function he(t){const e=t&&t.__v_raw;return e?he(e):t}function CT(t){return ll(t,"__v_skip",!0),t}const vo=t=>Re(t)?Ds(t):t,Of=t=>Re(t)?Df(t):t;class bT{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Sf(()=>e(this._value),()=>Sh(this,1)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=he(this);return(!e._cacheable||e.effect.dirty)&&bs(e._value,e._value=e.effect.run())&&Sh(e,2),AT(e),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Ek(t,e,n=!1){let s,i;const r=se(t);return r?(s=t,i=Wt):(s=t.get,i=t.set),new bT(s,i,r||!i,n)}function AT(t){_s&&Xs&&(t=he(t),mT(Xs,t.dep||(t.dep=pT(()=>t.dep=void 0,t instanceof bT?t:void 0))))}function Sh(t,e=2,n){t=he(t);const s=t.dep;s&&gT(s,e)}function je(t){return!!(t&&t.__v_isRef===!0)}function Se(t){return ST(t,!1)}function lt(t){return ST(t,!0)}function ST(t,e){return je(t)?t:new Tk(t,e)}class Tk{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:he(e),this._value=n?e:vo(e)}get value(){return AT(this),this._value}set value(e){const n=this.__v_isShallow||ul(e)||nr(e);e=n?e:he(e),bs(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:vo(e),Sh(this,2))}}function Cn(t){return je(t)?t.value:t}function Un(t){return se(t)?t():Cn(t)}const Ik={get:(t,e,n)=>Cn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return je(i)&&!je(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function RT(t){return Ui(t)?t:new Proxy(t,Ik)}function Vf(t){const e=X(t)?new Array(t.length):{};for(const n in t)e[n]=PT(t,n);return e}class wk{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return ek(he(this._object),this._key)}}class Ck{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Ue(t,e,n){return je(t)?t:se(t)?new Ck(t):Re(t)&&arguments.length>1?PT(t,e,n):Se(t)}function PT(t,e,n){const s=t[e];return je(s)?s:new wk(t,e,n)}/**
* @vue/runtime-core v3.4.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ys(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Cc(r,e,n)}return i}function en(t,e,n,s){if(se(t)){const r=ys(t,e,n,s);return r&&iT(r)&&r.catch(o=>{Cc(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(en(t[r],e,n,s));return i}function Cc(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/errors/#runtime-${n}`;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){ys(l,null,10,[t,o,a]);return}}bk(t,n,i,s)}function bk(t,e,n,s=!0){console.error(t)}let Eo=!1,Rh=!1;const yt=[];let Tn=0;const Bi=[];let ls=null,js=0;const kT=Promise.resolve();let Mf=null;function As(t){const e=Mf||kT;return t?e.then(this?t.bind(this):t):e}function Ak(t){let e=Tn+1,n=yt.length;for(;e<n;){const s=e+n>>>1,i=yt[s],r=To(i);r<t||r===t&&i.pre?e=s+1:n=s}return e}function Lf(t){(!yt.length||!yt.includes(t,Eo&&t.allowRecurse?Tn+1:Tn))&&(t.id==null?yt.push(t):yt.splice(Ak(t.id),0,t),NT())}function NT(){!Eo&&!Rh&&(Rh=!0,Mf=kT.then(xT))}function Sk(t){const e=yt.indexOf(t);e>Tn&&yt.splice(e,1)}function Rk(t){X(t)?Bi.push(...t):(!ls||!ls.includes(t,t.allowRecurse?js+1:js))&&Bi.push(t),NT()}function lp(t,e,n=Eo?Tn+1:0){for(;n<yt.length;n++){const s=yt[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;yt.splice(n,1),n--,s()}}}function DT(t){if(Bi.length){const e=[...new Set(Bi)].sort((n,s)=>To(n)-To(s));if(Bi.length=0,ls){ls.push(...e);return}for(ls=e,js=0;js<ls.length;js++)ls[js]();ls=null,js=0}}const To=t=>t.id==null?1/0:t.id,Pk=(t,e)=>{const n=To(t)-To(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function xT(t){Rh=!1,Eo=!0,yt.sort(Pk);const e=Wt;try{for(Tn=0;Tn<yt.length;Tn++){const n=yt[Tn];n&&n.active!==!1&&ys(n,null,14)}}finally{Tn=0,yt.length=0,DT(),Eo=!1,Mf=null,(yt.length||Bi.length)&&xT()}}function kk(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ke;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||ke;d&&(i=n.map(f=>He(f)?f.trim():f)),h&&(i=n.map(HP))}let a,l=s[a=gu(e)]||s[a=gu(tn(e))];!l&&r&&(l=s[a=gu(fi(e))]),l&&en(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,en(c,t,6,i)}}function OT(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!se(t)){const l=c=>{const u=OT(c,e,!0);u&&(a=!0,Ye(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Re(t)&&s.set(t,null),null):(X(r)?r.forEach(l=>o[l]=null):Ye(o,r),Re(t)&&s.set(t,o),o)}function bc(t,e){return!t||!Ec(e)?!1:(e=e.slice(2).replace(/Once$/,""),_e(t,e[0].toLowerCase()+e.slice(1))||_e(t,fi(e))||_e(t,e))}let At=null,Ac=null;function hl(t){const e=At;return At=t,Ac=t&&t.type.__scopeId||null,e}function Nk(t){Ac=t}function Dk(){Ac=null}function Nt(t,e=At,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Tp(-1);const r=hl(e);let o;try{o=t(...i)}finally{hl(r),s._d&&Tp(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function vu(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:m,inheritAttrs:g}=t;let _,E;const w=hl(t);try{if(n.shapeFlag&4){const C=i||s,O=C;_=vn(u.call(O,C,h,r,f,d,m)),E=l}else{const C=e;_=vn(C.length>1?C(r,{attrs:l,slots:a,emit:c}):C(r,null)),E=e.props?l:xk(l)}}catch(C){Gr.length=0,Cc(C,t,1),_=v(Hn)}let T=_;if(E&&g!==!1){const C=Object.keys(E),{shapeFlag:O}=T;C.length&&O&7&&(o&&C.some(Tf)&&(E=Ok(E,o)),T=Yn(T,E))}return n.dirs&&(T=Yn(T),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&(T.transition=n.transition),_=T,hl(w),_}const xk=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ec(n))&&((e||(e={}))[n]=t[n]);return e},Ok=(t,e)=>{const n={};for(const s in t)(!Tf(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Vk(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?cp(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!bc(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?cp(s,o,c):!0:!!o;return!1}function cp(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!bc(n,r))return!0}return!1}function Mk({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ff="components",Lk="directives";function up(t,e){return Uf(Ff,t,!0,e)||t}const VT=Symbol.for("v-ndc");function Fk(t){return He(t)?Uf(Ff,t,!1)||t:t||VT}function Go(t){return Uf(Lk,t)}function Uf(t,e,n=!0,s=!1){const i=At||ct;if(i){const r=i.type;if(t===Ff){const a=k1(r,!1);if(a&&(a===e||a===tn(e)||a===Zn(tn(e))))return r}const o=hp(i[t]||r[t],e)||hp(i.appContext[t],e);return!o&&s?r:o}}function hp(t,e){return t&&(t[e]||t[tn(e)]||t[Zn(tn(e))])}const Uk=t=>t.__isSuspense;function Bk(t,e){e&&e.pendingBranch?X(t)?e.effects.push(...t):e.effects.push(t):Rk(t)}const $k=Symbol.for("v-scx"),jk=()=>Ot($k);function Qo(t,e){return Bf(t,null,e)}const Ta={};function Be(t,e,n){return Bf(t,e,n)}function Bf(t,e,{immediate:n,deep:s,flush:i,once:r,onTrack:o,onTrigger:a}=ke){if(e&&r){const A=e;e=(...z)=>{A(...z),O()}}const l=ct,c=A=>s===!0?A:Ks(A,s===!1?1:void 0);let u,h=!1,d=!1;if(je(t)?(u=()=>t.value,h=ul(t)):Ui(t)?(u=()=>c(t),h=!0):X(t)?(d=!0,h=t.some(A=>Ui(A)||ul(A)),u=()=>t.map(A=>{if(je(A))return A.value;if(Ui(A))return c(A);if(se(A))return ys(A,l,2)})):se(t)?e?u=()=>ys(t,l,2):u=()=>(f&&f(),en(t,l,3,[m])):u=Wt,e&&s){const A=u;u=()=>Ks(A())}let f,m=A=>{f=T.onStop=()=>{ys(A,l,4),f=T.onStop=void 0}},g;if(Nc)if(m=Wt,e?n&&en(e,l,3,[u(),d?[]:void 0,m]):u(),i==="sync"){const A=jk();g=A.__watcherHandles||(A.__watcherHandles=[])}else return Wt;let _=d?new Array(t.length).fill(Ta):Ta;const E=()=>{if(!(!T.active||!T.dirty))if(e){const A=T.run();(s||h||(d?A.some((z,x)=>bs(z,_[x])):bs(A,_)))&&(f&&f(),en(e,l,3,[A,_===Ta?void 0:d&&_[0]===Ta?[]:_,m]),_=A)}else T.run()};E.allowRecurse=!!e;let w;i==="sync"?w=E:i==="post"?w=()=>kt(E,l&&l.suspense):(E.pre=!0,l&&(E.id=l.uid),w=()=>Lf(E));const T=new Sf(u,Wt,w),C=hT(),O=()=>{T.stop(),C&&If(C.effects,T)};return e?n?E():_=T.run():i==="post"?kt(T.run.bind(T),l&&l.suspense):T.run(),g&&g.push(O),O}function Wk(t,e,n){const s=this.proxy,i=He(t)?t.includes(".")?MT(s,t):()=>s[t]:t.bind(s,s);let r;se(e)?r=e:(r=e.handler,n=e);const o=Zo(this),a=Bf(i,r.bind(s),n);return o(),a}function MT(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Ks(t,e,n=0,s){if(!Re(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(s=s||new Set,s.has(t))return t;if(s.add(t),je(t))Ks(t.value,e,n,s);else if(X(t))for(let i=0;i<t.length;i++)Ks(t[i],e,n,s);else if(sT(t)||Fi(t))t.forEach(i=>{Ks(i,e,n,s)});else if(oT(t))for(const i in t)Ks(t[i],e,n,s);return t}function Ss(t,e){if(At===null)return t;const n=Dc(At)||At.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,l=ke]=e[i];r&&(se(r)&&(r={mounted:r,updated:r}),r.deep&&Ks(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Ms(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(mi(),en(l,n,8,[t.el,a,t,e]),gi())}}const cs=Symbol("_leaveCb"),Ia=Symbol("_enterCb");function LT(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Pc(()=>{t.isMounted=!0}),xs(()=>{t.isUnmounting=!0}),t}const Yt=[Function,Array],FT={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Yt,onEnter:Yt,onAfterEnter:Yt,onEnterCancelled:Yt,onBeforeLeave:Yt,onLeave:Yt,onAfterLeave:Yt,onLeaveCancelled:Yt,onBeforeAppear:Yt,onAppear:Yt,onAfterAppear:Yt,onAppearCancelled:Yt},Hk={name:"BaseTransition",props:FT,setup(t,{slots:e}){const n=Jo(),s=LT();let i;return()=>{const r=e.default&&$f(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const g of r)if(g.type!==Hn){o=g;break}}const a=he(t),{mode:l}=a;if(s.isLeaving)return Eu(o);const c=dp(o);if(!c)return Eu(o);const u=Io(c,a,s,n);wo(c,u);const h=n.subTree,d=h&&dp(h);let f=!1;const{getTransitionKey:m}=c.type;if(m){const g=m();i===void 0?i=g:g!==i&&(i=g,f=!0)}if(d&&d.type!==Hn&&(!Ws(c,d)||f)){const g=Io(d,a,s,n);if(wo(d,g),l==="out-in")return s.isLeaving=!0,g.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Eu(o);l==="in-out"&&c.type!==Hn&&(g.delayLeave=(_,E,w)=>{const T=UT(s,d);T[String(d.key)]=d,_[cs]=()=>{E(),_[cs]=void 0,delete u.delayedLeave},u.delayedLeave=w})}return o}}},zk=Hk;function UT(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Io(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:m,onBeforeAppear:g,onAppear:_,onAfterAppear:E,onAppearCancelled:w}=e,T=String(t.key),C=UT(n,t),O=(x,D)=>{x&&en(x,s,9,D)},A=(x,D)=>{const j=D[1];O(x,D),X(x)?x.every(ie=>ie.length<=1)&&j():x.length<=1&&j()},z={mode:r,persisted:o,beforeEnter(x){let D=a;if(!n.isMounted)if(i)D=g||a;else return;x[cs]&&x[cs](!0);const j=C[T];j&&Ws(t,j)&&j.el[cs]&&j.el[cs](),O(D,[x])},enter(x){let D=l,j=c,ie=u;if(!n.isMounted)if(i)D=_||l,j=E||c,ie=w||u;else return;let B=!1;const Y=x[Ia]=ge=>{B||(B=!0,ge?O(ie,[x]):O(j,[x]),z.delayedLeave&&z.delayedLeave(),x[Ia]=void 0)};D?A(D,[x,Y]):Y()},leave(x,D){const j=String(t.key);if(x[Ia]&&x[Ia](!0),n.isUnmounting)return D();O(h,[x]);let ie=!1;const B=x[cs]=Y=>{ie||(ie=!0,D(),Y?O(m,[x]):O(f,[x]),x[cs]=void 0,C[j]===t&&delete C[j])};C[j]=t,d?A(d,[x,B]):B()},clone(x){return Io(x,e,n,s)}};return z}function Eu(t){if(Sc(t))return t=Yn(t),t.children=null,t}function dp(t){return Sc(t)?t.children?t.children[0]:void 0:t}function wo(t,e){t.shapeFlag&6&&t.component?wo(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function $f(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Ke?(o.patchFlag&128&&i++,s=s.concat($f(o.children,e,a))):(e||o.type!==Hn)&&s.push(a!=null?Yn(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function qk(t,e){return se(t)?(()=>Ye({name:t.name},e,{setup:t}))():t}const Fa=t=>!!t.type.__asyncLoader,Sc=t=>t.type.__isKeepAlive;function Kk(t,e){BT(t,"a",e)}function Gk(t,e){BT(t,"da",e)}function BT(t,e,n=ct){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Rc(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Sc(i.parent.vnode)&&Qk(s,e,n,i),i=i.parent}}function Qk(t,e,n,s){const i=Rc(e,t,s,!0);jT(()=>{If(s[e],i)},n)}function Rc(t,e,n=ct,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;mi();const a=Zo(n),l=en(e,n,t,o);return a(),gi(),l});return s?i.unshift(r):i.push(r),r}}const es=t=>(e,n=ct)=>(!Nc||t==="sp")&&Rc(t,(...s)=>e(...s),n),jf=es("bm"),Pc=es("m"),Yk=es("bu"),$T=es("u"),xs=es("bum"),jT=es("um"),WT=es("sp"),Xk=es("rtg"),Jk=es("rtc");function Zk(t,e=ct){Rc("ec",t,e)}function e1(t,e,n,s){let i;const r=n&&n[s];if(X(t)||He(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Re(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const Ph=t=>t?tI(t)?Dc(t)||t.proxy:Ph(t.parent):null,Kr=Ye(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ph(t.parent),$root:t=>Ph(t.root),$emit:t=>t.emit,$options:t=>Wf(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Lf(t.update)}),$nextTick:t=>t.n||(t.n=As.bind(t.proxy)),$watch:t=>Wk.bind(t)}),Tu=(t,e)=>t!==ke&&!t.__isScriptSetup&&_e(t,e),t1={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Tu(s,e))return o[e]=1,s[e];if(i!==ke&&_e(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&_e(c,e))return o[e]=3,r[e];if(n!==ke&&_e(n,e))return o[e]=4,n[e];kh&&(o[e]=0)}}const u=Kr[e];let h,d;if(u)return e==="$attrs"&&Lt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ke&&_e(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,_e(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Tu(i,e)?(i[e]=n,!0):s!==ke&&_e(s,e)?(s[e]=n,!0):_e(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==ke&&_e(t,o)||Tu(e,o)||(a=r[0])&&_e(a,o)||_e(s,o)||_e(Kr,o)||_e(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:_e(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function fp(t){return X(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let kh=!0;function n1(t){const e=Wf(t),n=t.proxy,s=t.ctx;kh=!1,e.beforeCreate&&mp(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:m,activated:g,deactivated:_,beforeDestroy:E,beforeUnmount:w,destroyed:T,unmounted:C,render:O,renderTracked:A,renderTriggered:z,errorCaptured:x,serverPrefetch:D,expose:j,inheritAttrs:ie,components:B,directives:Y,filters:ge}=e;if(c&&s1(c,s,null),o)for(const oe in o){const pe=o[oe];se(pe)&&(s[oe]=pe.bind(n))}if(i){const oe=i.call(n,n);Re(oe)&&(t.data=Ds(oe))}if(kh=!0,r)for(const oe in r){const pe=r[oe],Rt=se(pe)?pe.bind(n,n):se(pe.get)?pe.get.bind(n,n):Wt,Ft=!se(pe)&&se(pe.set)?pe.set.bind(n):Wt,Pt=b({get:Rt,set:Ft});Object.defineProperty(s,oe,{enumerable:!0,configurable:!0,get:()=>Pt.value,set:wt=>Pt.value=wt})}if(a)for(const oe in a)HT(a[oe],s,n,oe);if(l){const oe=se(l)?l.call(n):l;Reflect.ownKeys(oe).forEach(pe=>{pi(pe,oe[pe])})}u&&mp(u,t,"c");function ye(oe,pe){X(pe)?pe.forEach(Rt=>oe(Rt.bind(n))):pe&&oe(pe.bind(n))}if(ye(jf,h),ye(Pc,d),ye(Yk,f),ye($T,m),ye(Kk,g),ye(Gk,_),ye(Zk,x),ye(Jk,A),ye(Xk,z),ye(xs,w),ye(jT,C),ye(WT,D),X(j))if(j.length){const oe=t.exposed||(t.exposed={});j.forEach(pe=>{Object.defineProperty(oe,pe,{get:()=>n[pe],set:Rt=>n[pe]=Rt})})}else t.exposed||(t.exposed={});O&&t.render===Wt&&(t.render=O),ie!=null&&(t.inheritAttrs=ie),B&&(t.components=B),Y&&(t.directives=Y)}function s1(t,e,n=Wt){X(t)&&(t=Nh(t));for(const s in t){const i=t[s];let r;Re(i)?"default"in i?r=Ot(i.from||s,i.default,!0):r=Ot(i.from||s):r=Ot(i),je(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function mp(t,e,n){en(X(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function HT(t,e,n,s){const i=s.includes(".")?MT(n,s):()=>n[s];if(He(t)){const r=e[t];se(r)&&Be(i,r)}else if(se(t))Be(i,t.bind(n));else if(Re(t))if(X(t))t.forEach(r=>HT(r,e,n,s));else{const r=se(t.handler)?t.handler.bind(n):e[t.handler];se(r)&&Be(i,r,t)}}function Wf(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>dl(l,c,o,!0)),dl(l,e,o)),Re(e)&&r.set(e,l),l}function dl(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&dl(t,r,n,!0),i&&i.forEach(o=>dl(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=i1[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const i1={data:gp,props:pp,emits:pp,methods:Br,computed:Br,beforeCreate:Ct,created:Ct,beforeMount:Ct,mounted:Ct,beforeUpdate:Ct,updated:Ct,beforeDestroy:Ct,beforeUnmount:Ct,destroyed:Ct,unmounted:Ct,activated:Ct,deactivated:Ct,errorCaptured:Ct,serverPrefetch:Ct,components:Br,directives:Br,watch:o1,provide:gp,inject:r1};function gp(t,e){return e?t?function(){return Ye(se(t)?t.call(this,this):t,se(e)?e.call(this,this):e)}:e:t}function r1(t,e){return Br(Nh(t),Nh(e))}function Nh(t){if(X(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ct(t,e){return t?[...new Set([].concat(t,e))]:e}function Br(t,e){return t?Ye(Object.create(null),t,e):e}function pp(t,e){return t?X(t)&&X(e)?[...new Set([...t,...e])]:Ye(Object.create(null),fp(t),fp(e??{})):e}function o1(t,e){if(!t)return e;if(!e)return t;const n=Ye(Object.create(null),t);for(const s in e)n[s]=Ct(t[s],e[s]);return n}function zT(){return{app:null,config:{isNativeTag:UP,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let a1=0;function l1(t,e){return function(s,i=null){se(s)||(s=Ye({},s)),i!=null&&!Re(i)&&(i=null);const r=zT(),o=new WeakSet;let a=!1;const l=r.app={_uid:a1++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:D1,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&se(c.install)?(o.add(c),c.install(l,...u)):se(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=v(s,i);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Dc(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){fl=l;try{return c()}finally{fl=null}}};return l}}let fl=null;function pi(t,e){if(ct){let n=ct.provides;const s=ct.parent&&ct.parent.provides;s===n&&(n=ct.provides=Object.create(s)),n[t]=e}}function Ot(t,e,n=!1){const s=ct||At;if(s||fl){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:fl._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&se(e)?e.call(s&&s.proxy):e}}function c1(t,e,n,s=!1){const i={},r={};ll(r,kc,1),t.propsDefaults=Object.create(null),qT(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:vk(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function u1(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=he(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(bc(t.emitsOptions,d))continue;const f=e[d];if(l)if(_e(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const m=tn(d);i[m]=Dh(l,a,m,f,t,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{qT(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!_e(e,h)&&((u=fi(h))===h||!_e(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Dh(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!_e(e,h))&&(delete r[h],c=!0)}c&&Wn(t,"set","$attrs")}function qT(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(La(l))continue;const c=e[l];let u;i&&_e(i,u=tn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:bc(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=he(n),c=a||ke;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Dh(i,l,h,c[h],t,!_e(c,h))}}return o}function Dh(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=_e(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&se(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=Zo(i);s=c[n]=l.call(null,e),u()}}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===fi(n))&&(s=!0))}return s}function KT(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!se(t)){const u=h=>{l=!0;const[d,f]=KT(h,e,!0);Ye(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Re(t)&&s.set(t,Li),Li;if(X(r))for(let u=0;u<r.length;u++){const h=tn(r[u]);_p(h)&&(o[h]=ke)}else if(r)for(const u in r){const h=tn(u);if(_p(h)){const d=r[u],f=o[h]=X(d)||se(d)?{type:d}:Ye({},d);if(f){const m=Ep(Boolean,f.type),g=Ep(String,f.type);f[0]=m>-1,f[1]=g<0||m<g,(m>-1||_e(f,"default"))&&a.push(h)}}}const c=[o,a];return Re(t)&&s.set(t,c),c}function _p(t){return t[0]!=="$"}function yp(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function vp(t,e){return yp(t)===yp(e)}function Ep(t,e){return X(e)?e.findIndex(n=>vp(n,t)):se(e)&&vp(e,t)?0:-1}const GT=t=>t[0]==="_"||t==="$stable",Hf=t=>X(t)?t.map(vn):[vn(t)],h1=(t,e,n)=>{if(e._n)return e;const s=Nt((...i)=>Hf(e(...i)),n);return s._c=!1,s},QT=(t,e,n)=>{const s=t._ctx;for(const i in t){if(GT(i))continue;const r=t[i];if(se(r))e[i]=h1(i,r,s);else if(r!=null){const o=Hf(r);e[i]=()=>o}}},YT=(t,e)=>{const n=Hf(e);t.slots.default=()=>n},d1=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=he(e),ll(e,"_",n)):QT(e,t.slots={})}else t.slots={},e&&YT(t,e);ll(t.slots,kc,1)},f1=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ke;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Ye(i,e),!n&&a===1&&delete i._):(r=!e.$stable,QT(e,i)),o=e}else e&&(YT(t,e),o={default:1});if(r)for(const a in i)!GT(a)&&o[a]==null&&delete i[a]};function xh(t,e,n,s,i=!1){if(X(t)){t.forEach((d,f)=>xh(d,e&&(X(e)?e[f]:e),n,s,i));return}if(Fa(s)&&!i)return;const r=s.shapeFlag&4?Dc(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ke?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(He(c)?(u[c]=null,_e(h,c)&&(h[c]=null)):je(c)&&(c.value=null)),se(l))ys(l,a,12,[o,u]);else{const d=He(l),f=je(l);if(d||f){const m=()=>{if(t.f){const g=d?_e(h,l)?h[l]:u[l]:l.value;i?X(g)&&If(g,r):X(g)?g.includes(r)||g.push(r):d?(u[l]=[r],_e(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,_e(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,kt(m,n)):m()}}}const kt=Bk;function m1(t){return g1(t)}function g1(t,e){const n=aT();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Wt,insertStaticContent:m}=t,g=(p,y,I,S=null,R=null,M=null,$=void 0,V=null,L=!!y.dynamicChildren)=>{if(p===y)return;p&&!Ws(p,y)&&(S=aa(p),wt(p,R,M,!0),p=null),y.patchFlag===-2&&(L=!1,y.dynamicChildren=null);const{type:N,ref:W,shapeFlag:Q}=y;switch(N){case Yo:_(p,y,I,S);break;case Hn:E(p,y,I,S);break;case wu:p==null&&w(y,I,S,$);break;case Ke:B(p,y,I,S,R,M,$,V,L);break;default:Q&1?O(p,y,I,S,R,M,$,V,L):Q&6?Y(p,y,I,S,R,M,$,V,L):(Q&64||Q&128)&&N.process(p,y,I,S,R,M,$,V,L,Ti)}W!=null&&R&&xh(W,p&&p.ref,M,y||p,!y)},_=(p,y,I,S)=>{if(p==null)s(y.el=a(y.children),I,S);else{const R=y.el=p.el;y.children!==p.children&&c(R,y.children)}},E=(p,y,I,S)=>{p==null?s(y.el=l(y.children||""),I,S):y.el=p.el},w=(p,y,I,S)=>{[p.el,p.anchor]=m(p.children,y,I,S,p.el,p.anchor)},T=({el:p,anchor:y},I,S)=>{let R;for(;p&&p!==y;)R=d(p),s(p,I,S),p=R;s(y,I,S)},C=({el:p,anchor:y})=>{let I;for(;p&&p!==y;)I=d(p),i(p),p=I;i(y)},O=(p,y,I,S,R,M,$,V,L)=>{y.type==="svg"?$="svg":y.type==="math"&&($="mathml"),p==null?A(y,I,S,R,M,$,V,L):D(p,y,R,M,$,V,L)},A=(p,y,I,S,R,M,$,V)=>{let L,N;const{props:W,shapeFlag:Q,transition:K,dirs:te}=p;if(L=p.el=o(p.type,M,W&&W.is,W),Q&8?u(L,p.children):Q&16&&x(p.children,L,null,S,R,Iu(p,M),$,V),te&&Ms(p,null,S,"created"),z(L,p,p.scopeId,$,S),W){for(const Ce in W)Ce!=="value"&&!La(Ce)&&r(L,Ce,null,W[Ce],M,p.children,S,R,sn);"value"in W&&r(L,"value",null,W.value,M),(N=W.onVnodeBeforeMount)&&yn(N,S,p)}te&&Ms(p,null,S,"beforeMount");const ae=p1(R,K);ae&&K.beforeEnter(L),s(L,y,I),((N=W&&W.onVnodeMounted)||ae||te)&&kt(()=>{N&&yn(N,S,p),ae&&K.enter(L),te&&Ms(p,null,S,"mounted")},R)},z=(p,y,I,S,R)=>{if(I&&f(p,I),S)for(let M=0;M<S.length;M++)f(p,S[M]);if(R){let M=R.subTree;if(y===M){const $=R.vnode;z(p,$,$.scopeId,$.slotScopeIds,R.parent)}}},x=(p,y,I,S,R,M,$,V,L=0)=>{for(let N=L;N<p.length;N++){const W=p[N]=V?us(p[N]):vn(p[N]);g(null,W,y,I,S,R,M,$,V)}},D=(p,y,I,S,R,M,$)=>{const V=y.el=p.el;let{patchFlag:L,dynamicChildren:N,dirs:W}=y;L|=p.patchFlag&16;const Q=p.props||ke,K=y.props||ke;let te;if(I&&Ls(I,!1),(te=K.onVnodeBeforeUpdate)&&yn(te,I,y,p),W&&Ms(y,p,I,"beforeUpdate"),I&&Ls(I,!0),N?j(p.dynamicChildren,N,V,I,S,Iu(y,R),M):$||pe(p,y,V,null,I,S,Iu(y,R),M,!1),L>0){if(L&16)ie(V,y,Q,K,I,S,R);else if(L&2&&Q.class!==K.class&&r(V,"class",null,K.class,R),L&4&&r(V,"style",Q.style,K.style,R),L&8){const ae=y.dynamicProps;for(let Ce=0;Ce<ae.length;Ce++){const Oe=ae[Ce],Je=Q[Oe],rn=K[Oe];(rn!==Je||Oe==="value")&&r(V,Oe,Je,rn,R,p.children,I,S,sn)}}L&1&&p.children!==y.children&&u(V,y.children)}else!$&&N==null&&ie(V,y,Q,K,I,S,R);((te=K.onVnodeUpdated)||W)&&kt(()=>{te&&yn(te,I,y,p),W&&Ms(y,p,I,"updated")},S)},j=(p,y,I,S,R,M,$)=>{for(let V=0;V<y.length;V++){const L=p[V],N=y[V],W=L.el&&(L.type===Ke||!Ws(L,N)||L.shapeFlag&70)?h(L.el):I;g(L,N,W,null,S,R,M,$,!0)}},ie=(p,y,I,S,R,M,$)=>{if(I!==S){if(I!==ke)for(const V in I)!La(V)&&!(V in S)&&r(p,V,I[V],null,$,y.children,R,M,sn);for(const V in S){if(La(V))continue;const L=S[V],N=I[V];L!==N&&V!=="value"&&r(p,V,N,L,$,y.children,R,M,sn)}"value"in S&&r(p,"value",I.value,S.value,$)}},B=(p,y,I,S,R,M,$,V,L)=>{const N=y.el=p?p.el:a(""),W=y.anchor=p?p.anchor:a("");let{patchFlag:Q,dynamicChildren:K,slotScopeIds:te}=y;te&&(V=V?V.concat(te):te),p==null?(s(N,I,S),s(W,I,S),x(y.children||[],I,W,R,M,$,V,L)):Q>0&&Q&64&&K&&p.dynamicChildren?(j(p.dynamicChildren,K,I,R,M,$,V),(y.key!=null||R&&y===R.subTree)&&XT(p,y,!0)):pe(p,y,I,W,R,M,$,V,L)},Y=(p,y,I,S,R,M,$,V,L)=>{y.slotScopeIds=V,p==null?y.shapeFlag&512?R.ctx.activate(y,I,S,$,L):ge(y,I,S,R,M,$,L):Fe(p,y,L)},ge=(p,y,I,S,R,M,$)=>{const V=p.component=b1(p,S,R);if(Sc(p)&&(V.ctx.renderer=Ti),A1(V),V.asyncDep){if(R&&R.registerDep(V,ye),!p.el){const L=V.subTree=v(Hn);E(null,L,y,I)}}else ye(V,p,y,I,R,M,$)},Fe=(p,y,I)=>{const S=y.component=p.component;if(Vk(p,y,I))if(S.asyncDep&&!S.asyncResolved){oe(S,y,I);return}else S.next=y,Sk(S.update),S.effect.dirty=!0,S.update();else y.el=p.el,S.vnode=y},ye=(p,y,I,S,R,M,$)=>{const V=()=>{if(p.isMounted){let{next:W,bu:Q,u:K,parent:te,vnode:ae}=p;{const Ii=JT(p);if(Ii){W&&(W.el=ae.el,oe(p,W,$)),Ii.asyncDep.then(()=>{p.isUnmounted||V()});return}}let Ce=W,Oe;Ls(p,!1),W?(W.el=ae.el,oe(p,W,$)):W=ae,Q&&pu(Q),(Oe=W.props&&W.props.onVnodeBeforeUpdate)&&yn(Oe,te,W,ae),Ls(p,!0);const Je=vu(p),rn=p.subTree;p.subTree=Je,g(rn,Je,h(rn.el),aa(rn),p,R,M),W.el=Je.el,Ce===null&&Mk(p,Je.el),K&&kt(K,R),(Oe=W.props&&W.props.onVnodeUpdated)&&kt(()=>yn(Oe,te,W,ae),R)}else{let W;const{el:Q,props:K}=y,{bm:te,m:ae,parent:Ce}=p,Oe=Fa(y);if(Ls(p,!1),te&&pu(te),!Oe&&(W=K&&K.onVnodeBeforeMount)&&yn(W,Ce,y),Ls(p,!0),Q&&Xc){const Je=()=>{p.subTree=vu(p),Xc(Q,p.subTree,p,R,null)};Oe?y.type.__asyncLoader().then(()=>!p.isUnmounted&&Je()):Je()}else{const Je=p.subTree=vu(p);g(null,Je,I,S,p,R,M),y.el=Je.el}if(ae&&kt(ae,R),!Oe&&(W=K&&K.onVnodeMounted)){const Je=y;kt(()=>yn(W,Ce,Je),R)}(y.shapeFlag&256||Ce&&Fa(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&p.a&&kt(p.a,R),p.isMounted=!0,y=I=S=null}},L=p.effect=new Sf(V,Wt,()=>Lf(N),p.scope),N=p.update=()=>{L.dirty&&L.run()};N.id=p.uid,Ls(p,!0),N()},oe=(p,y,I)=>{y.component=p;const S=p.vnode.props;p.vnode=y,p.next=null,u1(p,y.props,S,I),f1(p,y.children,I),mi(),lp(p),gi()},pe=(p,y,I,S,R,M,$,V,L=!1)=>{const N=p&&p.children,W=p?p.shapeFlag:0,Q=y.children,{patchFlag:K,shapeFlag:te}=y;if(K>0){if(K&128){Ft(N,Q,I,S,R,M,$,V,L);return}else if(K&256){Rt(N,Q,I,S,R,M,$,V,L);return}}te&8?(W&16&&sn(N,R,M),Q!==N&&u(I,Q)):W&16?te&16?Ft(N,Q,I,S,R,M,$,V,L):sn(N,R,M,!0):(W&8&&u(I,""),te&16&&x(Q,I,S,R,M,$,V,L))},Rt=(p,y,I,S,R,M,$,V,L)=>{p=p||Li,y=y||Li;const N=p.length,W=y.length,Q=Math.min(N,W);let K;for(K=0;K<Q;K++){const te=y[K]=L?us(y[K]):vn(y[K]);g(p[K],te,I,null,R,M,$,V,L)}N>W?sn(p,R,M,!0,!1,Q):x(y,I,S,R,M,$,V,L,Q)},Ft=(p,y,I,S,R,M,$,V,L)=>{let N=0;const W=y.length;let Q=p.length-1,K=W-1;for(;N<=Q&&N<=K;){const te=p[N],ae=y[N]=L?us(y[N]):vn(y[N]);if(Ws(te,ae))g(te,ae,I,null,R,M,$,V,L);else break;N++}for(;N<=Q&&N<=K;){const te=p[Q],ae=y[K]=L?us(y[K]):vn(y[K]);if(Ws(te,ae))g(te,ae,I,null,R,M,$,V,L);else break;Q--,K--}if(N>Q){if(N<=K){const te=K+1,ae=te<W?y[te].el:S;for(;N<=K;)g(null,y[N]=L?us(y[N]):vn(y[N]),I,ae,R,M,$,V,L),N++}}else if(N>K)for(;N<=Q;)wt(p[N],R,M,!0),N++;else{const te=N,ae=N,Ce=new Map;for(N=ae;N<=K;N++){const Ut=y[N]=L?us(y[N]):vn(y[N]);Ut.key!=null&&Ce.set(Ut.key,N)}let Oe,Je=0;const rn=K-ae+1;let Ii=!1,Gm=0;const Cr=new Array(rn);for(N=0;N<rn;N++)Cr[N]=0;for(N=te;N<=Q;N++){const Ut=p[N];if(Je>=rn){wt(Ut,R,M,!0);continue}let _n;if(Ut.key!=null)_n=Ce.get(Ut.key);else for(Oe=ae;Oe<=K;Oe++)if(Cr[Oe-ae]===0&&Ws(Ut,y[Oe])){_n=Oe;break}_n===void 0?wt(Ut,R,M,!0):(Cr[_n-ae]=N+1,_n>=Gm?Gm=_n:Ii=!0,g(Ut,y[_n],I,null,R,M,$,V,L),Je++)}const Qm=Ii?_1(Cr):Li;for(Oe=Qm.length-1,N=rn-1;N>=0;N--){const Ut=ae+N,_n=y[Ut],Ym=Ut+1<W?y[Ut+1].el:S;Cr[N]===0?g(null,_n,I,Ym,R,M,$,V,L):Ii&&(Oe<0||N!==Qm[Oe]?Pt(_n,I,Ym,2):Oe--)}}},Pt=(p,y,I,S,R=null)=>{const{el:M,type:$,transition:V,children:L,shapeFlag:N}=p;if(N&6){Pt(p.component.subTree,y,I,S);return}if(N&128){p.suspense.move(y,I,S);return}if(N&64){$.move(p,y,I,Ti);return}if($===Ke){s(M,y,I);for(let Q=0;Q<L.length;Q++)Pt(L[Q],y,I,S);s(p.anchor,y,I);return}if($===wu){T(p,y,I);return}if(S!==2&&N&1&&V)if(S===0)V.beforeEnter(M),s(M,y,I),kt(()=>V.enter(M),R);else{const{leave:Q,delayLeave:K,afterLeave:te}=V,ae=()=>s(M,y,I),Ce=()=>{Q(M,()=>{ae(),te&&te()})};K?K(M,ae,Ce):Ce()}else s(M,y,I)},wt=(p,y,I,S=!1,R=!1)=>{const{type:M,props:$,ref:V,children:L,dynamicChildren:N,shapeFlag:W,patchFlag:Q,dirs:K}=p;if(V!=null&&xh(V,null,I,p,!0),W&256){y.ctx.deactivate(p);return}const te=W&1&&K,ae=!Fa(p);let Ce;if(ae&&(Ce=$&&$.onVnodeBeforeUnmount)&&yn(Ce,y,p),W&6)Gc(p.component,I,S);else{if(W&128){p.suspense.unmount(I,S);return}te&&Ms(p,null,y,"beforeUnmount"),W&64?p.type.remove(p,y,I,R,Ti,S):N&&(M!==Ke||Q>0&&Q&64)?sn(N,y,I,!1,!0):(M===Ke&&Q&384||!R&&W&16)&&sn(L,y,I),S&&wr(p)}(ae&&(Ce=$&&$.onVnodeUnmounted)||te)&&kt(()=>{Ce&&yn(Ce,y,p),te&&Ms(p,null,y,"unmounted")},I)},wr=p=>{const{type:y,el:I,anchor:S,transition:R}=p;if(y===Ke){Kc(I,S);return}if(y===wu){C(p);return}const M=()=>{i(I),R&&!R.persisted&&R.afterLeave&&R.afterLeave()};if(p.shapeFlag&1&&R&&!R.persisted){const{leave:$,delayLeave:V}=R,L=()=>$(I,M);V?V(p.el,M,L):L()}else M()},Kc=(p,y)=>{let I;for(;p!==y;)I=d(p),i(p),p=I;i(y)},Gc=(p,y,I)=>{const{bum:S,scope:R,update:M,subTree:$,um:V}=p;S&&pu(S),R.stop(),M&&(M.active=!1,wt($,p,y,I)),V&&kt(V,y),kt(()=>{p.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},sn=(p,y,I,S=!1,R=!1,M=0)=>{for(let $=M;$<p.length;$++)wt(p[$],y,I,S,R)},aa=p=>p.shapeFlag&6?aa(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el);let Qc=!1;const Km=(p,y,I)=>{p==null?y._vnode&&wt(y._vnode,null,null,!0):g(y._vnode||null,p,y,null,null,null,I),Qc||(Qc=!0,lp(),DT(),Qc=!1),y._vnode=p},Ti={p:g,um:wt,m:Pt,r:wr,mt:ge,mc:x,pc:pe,pbc:j,n:aa,o:t};let Yc,Xc;return e&&([Yc,Xc]=e(Ti)),{render:Km,hydrate:Yc,createApp:l1(Km,Yc)}}function Iu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ls({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function p1(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function XT(t,e,n=!1){const s=t.children,i=e.children;if(X(s)&&X(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=us(i[r]),a.el=o.el),n||XT(o,a)),a.type===Yo&&(a.el=o.el)}}function _1(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function JT(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:JT(e)}const y1=t=>t.__isTeleport,Ke=Symbol.for("v-fgt"),Yo=Symbol.for("v-txt"),Hn=Symbol.for("v-cmt"),wu=Symbol.for("v-stc"),Gr=[];let an=null;function ml(t=!1){Gr.push(an=t?null:[])}function v1(){Gr.pop(),an=Gr[Gr.length-1]||null}let Co=1;function Tp(t){Co+=t}function ZT(t){return t.dynamicChildren=Co>0?an||Li:null,v1(),Co>0&&an&&an.push(t),t}function E1(t,e,n,s,i,r){return ZT(Xo(t,e,n,s,i,r,!0))}function zf(t,e,n,s,i){return ZT(v(t,e,n,s,i,!0))}function Oh(t){return t?t.__v_isVNode===!0:!1}function Ws(t,e){return t.type===e.type&&t.key===e.key}const kc="__vInternal",eI=({key:t})=>t??null,Ua=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?He(t)||je(t)||se(t)?{i:At,r:t,k:e,f:!!n}:t:null);function Xo(t,e=null,n=null,s=0,i=null,r=t===Ke?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&eI(e),ref:e&&Ua(e),scopeId:Ac,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:At};return a?(qf(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=He(n)?8:16),Co>0&&!o&&an&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&an.push(l),l}const v=T1;function T1(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===VT)&&(t=Hn),Oh(t)){const a=Yn(t,e,!0);return n&&qf(a,n),Co>0&&!r&&an&&(a.shapeFlag&6?an[an.indexOf(t)]=a:an.push(a)),a.patchFlag|=-2,a}if(N1(t)&&(t=t.__vccOpts),e){e=I1(e);let{class:a,style:l}=e;a&&!He(a)&&(e.class=yo(a)),Re(l)&&(wT(l)&&!X(l)&&(l=Ye({},l)),e.style=Cf(l))}const o=He(t)?1:Uk(t)?128:y1(t)?64:Re(t)?4:se(t)?2:0;return Xo(t,e,n,s,i,o,r,!0)}function I1(t){return t?wT(t)||kc in t?Ye({},t):t:null}function Yn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?Vt(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&eI(a),ref:e&&e.ref?n&&i?X(i)?i.concat(Ua(e)):[i,Ua(e)]:Ua(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ke?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Yn(t.ssContent),ssFallback:t.ssFallback&&Yn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function gl(t=" ",e=0){return v(Yo,null,t,e)}function vn(t){return t==null||typeof t=="boolean"?v(Hn):X(t)?v(Ke,null,t.slice()):typeof t=="object"?us(t):v(Yo,null,String(t))}function us(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Yn(t)}function qf(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(X(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),qf(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(kc in e)?e._ctx=At:i===3&&At&&(At.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else se(e)?(e={default:e,_ctx:At},n=32):(e=String(e),s&64?(n=16,e=[gl(e)]):n=8);t.children=e,t.shapeFlag|=n}function Vt(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=yo([e.class,s.class]));else if(i==="style")e.style=Cf([e.style,s.style]);else if(Ec(i)){const r=e[i],o=s[i];o&&r!==o&&!(X(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function yn(t,e,n,s=null){en(t,e,7,[n,s])}const w1=zT();let C1=0;function b1(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||w1,r={uid:C1++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new uT(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:KT(s,i),emitsOptions:OT(s,i),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:s.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=kk.bind(null,r),t.ce&&t.ce(r),r}let ct=null;const Jo=()=>ct||At;let pl,Vh;{const t=aT(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};pl=e("__VUE_INSTANCE_SETTERS__",n=>ct=n),Vh=e("__VUE_SSR_SETTERS__",n=>Nc=n)}const Zo=t=>{const e=ct;return pl(t),t.scope.on(),()=>{t.scope.off(),pl(e)}},Ip=()=>{ct&&ct.scope.off(),pl(null)};function tI(t){return t.vnode.shapeFlag&4}let Nc=!1;function A1(t,e=!1){e&&Vh(e);const{props:n,children:s}=t.vnode,i=tI(t);c1(t,n,i,e),d1(t,s);const r=i?S1(t,e):void 0;return e&&Vh(!1),r}function S1(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=CT(new Proxy(t.ctx,t1));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?P1(t):null,r=Zo(t);mi();const o=ys(s,t,0,[t.props,i]);if(gi(),r(),iT(o)){if(o.then(Ip,Ip),e)return o.then(a=>{wp(t,a,e)}).catch(a=>{Cc(a,t,0)});t.asyncDep=o}else wp(t,o,e)}else nI(t,e)}function wp(t,e,n){se(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Re(e)&&(t.setupState=RT(e)),nI(t,n)}let Cp;function nI(t,e,n){const s=t.type;if(!t.render){if(!e&&Cp&&!s.render){const i=s.template||Wf(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Ye(Ye({isCustomElement:r,delimiters:a},o),l);s.render=Cp(i,c)}}t.render=s.render||Wt}{const i=Zo(t);mi();try{n1(t)}finally{gi(),i()}}}function R1(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Lt(t,"get","$attrs"),e[n]}}))}function P1(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return R1(t)},slots:t.slots,emit:t.emit,expose:e}}function Dc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(RT(CT(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Kr)return Kr[n](t)},has(e,n){return n in e||n in Kr}}))}function k1(t,e=!0){return se(t)?t.displayName||t.name:t.name||e&&t.__name}function N1(t){return se(t)&&"__vccOpts"in t}const b=(t,e)=>Ek(t,e,Nc);function Os(t,e,n){const s=arguments.length;return s===2?Re(e)&&!X(e)?Oh(e)?v(t,null,[e]):v(t,e):v(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Oh(n)&&(n=[n]),v(t,e,n))}const D1="3.4.14";/**
* @vue/runtime-dom v3.4.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const x1="http://www.w3.org/2000/svg",O1="http://www.w3.org/1998/Math/MathML",hs=typeof document<"u"?document:null,bp=hs&&hs.createElement("template"),V1={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?hs.createElementNS(x1,t):e==="mathml"?hs.createElementNS(O1,t):hs.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>hs.createTextNode(t),createComment:t=>hs.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>hs.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{bp.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const a=bp.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},rs="transition",Rr="animation",sr=Symbol("_vtc"),pr=(t,{slots:e})=>Os(zk,iI(t),e);pr.displayName="Transition";const sI={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},M1=pr.props=Ye({},FT,sI),Fs=(t,e=[])=>{X(t)?t.forEach(n=>n(...e)):t&&t(...e)},Ap=t=>t?X(t)?t.some(e=>e.length>1):t.length>1:!1;function iI(t){const e={};for(const B in t)B in sI||(e[B]=t[B]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,m=L1(i),g=m&&m[0],_=m&&m[1],{onBeforeEnter:E,onEnter:w,onEnterCancelled:T,onLeave:C,onLeaveCancelled:O,onBeforeAppear:A=E,onAppear:z=w,onAppearCancelled:x=T}=e,D=(B,Y,ge)=>{as(B,Y?u:a),as(B,Y?c:o),ge&&ge()},j=(B,Y)=>{B._isLeaving=!1,as(B,h),as(B,f),as(B,d),Y&&Y()},ie=B=>(Y,ge)=>{const Fe=B?z:w,ye=()=>D(Y,B,ge);Fs(Fe,[Y,ye]),Sp(()=>{as(Y,B?l:r),Fn(Y,B?u:a),Ap(Fe)||Rp(Y,s,g,ye)})};return Ye(e,{onBeforeEnter(B){Fs(E,[B]),Fn(B,r),Fn(B,o)},onBeforeAppear(B){Fs(A,[B]),Fn(B,l),Fn(B,c)},onEnter:ie(!1),onAppear:ie(!0),onLeave(B,Y){B._isLeaving=!0;const ge=()=>j(B,Y);Fn(B,h),oI(),Fn(B,d),Sp(()=>{B._isLeaving&&(as(B,h),Fn(B,f),Ap(C)||Rp(B,s,_,ge))}),Fs(C,[B,ge])},onEnterCancelled(B){D(B,!1),Fs(T,[B])},onAppearCancelled(B){D(B,!0),Fs(x,[B])},onLeaveCancelled(B){j(B),Fs(O,[B])}})}function L1(t){if(t==null)return null;if(Re(t))return[Cu(t.enter),Cu(t.leave)];{const e=Cu(t);return[e,e]}}function Cu(t){return zP(t)}function Fn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[sr]||(t[sr]=new Set)).add(e)}function as(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[sr];n&&(n.delete(e),n.size||(t[sr]=void 0))}function Sp(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let F1=0;function Rp(t,e,n,s){const i=t._endId=++F1,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=rI(t,e);if(!o)return s();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,d),r()},d=f=>{f.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,d)}function rI(t,e){const n=window.getComputedStyle(t),s=m=>(n[m]||"").split(", "),i=s(`${rs}Delay`),r=s(`${rs}Duration`),o=Pp(i,r),a=s(`${Rr}Delay`),l=s(`${Rr}Duration`),c=Pp(a,l);let u=null,h=0,d=0;e===rs?o>0&&(u=rs,h=o,d=r.length):e===Rr?c>0&&(u=Rr,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?rs:Rr:null,d=u?u===rs?r.length:l.length:0);const f=u===rs&&/\b(transform|all)(,|$)/.test(s(`${rs}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function Pp(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>kp(n)+kp(t[s])))}function kp(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function oI(){return document.body.offsetHeight}function U1(t,e,n){const s=t[sr];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Kf=Symbol("_vod"),Gf={beforeMount(t,{value:e},{transition:n}){t[Kf]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Pr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Pr(t,!0),s.enter(t)):s.leave(t,()=>{Pr(t,!1)}):Pr(t,e))},beforeUnmount(t,{value:e}){Pr(t,e)}};function Pr(t,e){t.style.display=e?t[Kf]:"none"}const B1=Symbol("");function $1(t,e,n){const s=t.style,i=s.display,r=He(n);if(n&&!r){if(e&&!He(e))for(const o in e)n[o]==null&&Mh(s,o,"");for(const o in n)Mh(s,o,n[o])}else if(r){if(e!==n){const o=s[B1];o&&(n+=";"+o),s.cssText=n}}else e&&t.removeAttribute("style");Kf in t&&(s.display=i)}const Np=/\s*!important$/;function Mh(t,e,n){if(X(n))n.forEach(s=>Mh(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=j1(t,e);Np.test(n)?t.setProperty(fi(s),n.replace(Np,""),"important"):t[s]=n}}const Dp=["Webkit","Moz","ms"],bu={};function j1(t,e){const n=bu[e];if(n)return n;let s=tn(e);if(s!=="filter"&&s in t)return bu[e]=s;s=Zn(s);for(let i=0;i<Dp.length;i++){const r=Dp[i]+s;if(r in t)return bu[e]=r}return e}const xp="http://www.w3.org/1999/xlink";function W1(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(xp,e.slice(6,e.length)):t.setAttributeNS(xp,e,n);else{const r=XP(e);n==null||r&&!lT(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function H1(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=lT(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function z1(t,e,n,s){t.addEventListener(e,n,s)}function q1(t,e,n,s){t.removeEventListener(e,n,s)}const Op=Symbol("_vei");function K1(t,e,n,s,i=null){const r=t[Op]||(t[Op]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=G1(e);if(s){const c=r[e]=X1(s,i);z1(t,a,c,l)}else o&&(q1(t,a,o,l),r[e]=void 0)}}const Vp=/(?:Once|Passive|Capture)$/;function G1(t){let e;if(Vp.test(t)){e={};let s;for(;s=t.match(Vp);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):fi(t.slice(2)),e]}let Au=0;const Q1=Promise.resolve(),Y1=()=>Au||(Q1.then(()=>Au=0),Au=Date.now());function X1(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;en(J1(s,n.value),e,5,[s])};return n.value=t,n.attached=Y1(),n}function J1(t,e){if(X(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Mp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Z1=(t,e,n,s,i,r,o,a,l)=>{const c=i==="svg";e==="class"?U1(t,s,c):e==="style"?$1(t,n,s):Ec(e)?Tf(e)||K1(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):eN(t,e,s,c))?H1(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),W1(t,e,s,c))};function eN(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Mp(e)&&se(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Mp(e)&&He(n)?!1:e in t}const aI=new WeakMap,lI=new WeakMap,_l=Symbol("_moveCb"),Lp=Symbol("_enterCb"),cI={name:"TransitionGroup",props:Ye({},M1,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Jo(),s=LT();let i,r;return $T(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!oN(i[0].el,n.vnode.el,o))return;i.forEach(sN),i.forEach(iN);const a=i.filter(rN);oI(),a.forEach(l=>{const c=l.el,u=c.style;Fn(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=c[_l]=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",h),c[_l]=null,as(c,o))};c.addEventListener("transitionend",h)})}),()=>{const o=he(t),a=iI(o);let l=o.tag||Ke;i=r,r=e.default?$f(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&wo(u,Io(u,a,s,n))}if(i)for(let c=0;c<i.length;c++){const u=i[c];wo(u,Io(u,a,s,n)),aI.set(u,u.el.getBoundingClientRect())}return v(l,null,r)}}},tN=t=>delete t.mode;cI.props;const nN=cI;function sN(t){const e=t.el;e[_l]&&e[_l](),e[Lp]&&e[Lp]()}function iN(t){lI.set(t,t.el.getBoundingClientRect())}function rN(t){const e=aI.get(t),n=lI.get(t),s=e.left-n.left,i=e.top-n.top;if(s||i){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${i}px)`,r.transitionDuration="0s",t}}function oN(t,e,n){const s=t.cloneNode(),i=t[sr];i&&i.forEach(a=>{a.split(/\s+/).forEach(l=>l&&s.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&s.classList.add(a)),s.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(s);const{hasTransform:o}=rI(s);return r.removeChild(s),o}const aN={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},lN=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=i=>{if(!("key"in i))return;const r=fi(i.key);if(e.some(o=>o===r||aN[o]===r))return t(i)})},cN=Ye({patchProp:Z1},V1);let Fp;function uN(){return Fp||(Fp=m1(cN))}const hN=(...t)=>{const e=uN().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=fN(s);if(!i)return;const r=e._component;!se(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,dN(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function dN(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function fN(t){return He(t)?document.querySelector(t):t}const Qf=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n};const Ht=typeof window<"u",Yf=Ht&&"IntersectionObserver"in window,mN=Ht&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);function gN(t,e,n){const s=e.length-1;if(s<0)return t===void 0?n:t;for(let i=0;i<s;i++){if(t==null)return n;t=t[e[i]]}return t==null||t[e[s]]===void 0?n:t[e[s]]}function xc(t,e){if(t===e)return!0;if(t instanceof Date&&e instanceof Date&&t.getTime()!==e.getTime()||t!==Object(t)||e!==Object(e))return!1;const n=Object.keys(t);return n.length!==Object.keys(e).length?!1:n.every(s=>xc(t[s],e[s]))}function Up(t,e,n){return t==null||!e||typeof e!="string"?n:t[e]!==void 0?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),gN(t,e.split("."),n))}function uI(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:t},(n,s)=>e+s)}function Me(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(t==null||t===""))return isNaN(+t)?String(t):isFinite(+t)?`${Number(t)}${e}`:void 0}function Lh(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}function Bp(t){if(t&&"$el"in t){const e=t.$el;return(e==null?void 0:e.nodeType)===Node.TEXT_NODE?e.nextElementSibling:e}return t}const $p=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function Su(t,e){return e.every(n=>t.hasOwnProperty(n))}function hI(t,e){const n={},s=new Set(Object.keys(t));for(const i of e)s.has(i)&&(n[i]=t[i]);return n}function jp(t,e,n){const s=Object.create(null),i=Object.create(null);for(const r in t)e.some(o=>o instanceof RegExp?o.test(r):o===r)&&!(n!=null&&n.some(o=>o===r))?s[r]=t[r]:i[r]=t[r];return[s,i]}function Xf(t,e){const n={...t};return e.forEach(s=>delete n[s]),n}const dI=/^on[^a-z]/,pN=t=>dI.test(t),_N=["onAfterscriptexecute","onAnimationcancel","onAnimationend","onAnimationiteration","onAnimationstart","onAuxclick","onBeforeinput","onBeforescriptexecute","onChange","onClick","onCompositionend","onCompositionstart","onCompositionupdate","onContextmenu","onCopy","onCut","onDblclick","onFocusin","onFocusout","onFullscreenchange","onFullscreenerror","onGesturechange","onGestureend","onGesturestart","onGotpointercapture","onInput","onKeydown","onKeypress","onKeyup","onLostpointercapture","onMousedown","onMousemove","onMouseout","onMouseover","onMouseup","onMousewheel","onPaste","onPointercancel","onPointerdown","onPointerenter","onPointerleave","onPointermove","onPointerout","onPointerover","onPointerup","onReset","onSelect","onSubmit","onTouchcancel","onTouchend","onTouchmove","onTouchstart","onTransitioncancel","onTransitionend","onTransitionrun","onTransitionstart","onWheel"];function Jf(t){const[e,n]=jp(t,[dI]),s=Xf(e,_N),[i,r]=jp(n,["class","style","id",/^data-/]);return Object.assign(i,e),Object.assign(r,s),[i,r]}function vs(t){return t==null?[]:Array.isArray(t)?t:[t]}function yN(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(n,t))}function Wp(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return t+n.repeat(Math.max(0,e-t.length))}function Hp(t,e){return(arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0").repeat(Math.max(0,e-t.length))+t}function vN(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let s=0;for(;s<t.length;)n.push(t.substr(s,e)),s+=e;return n}function Jt(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const s={};for(const i in t)s[i]=t[i];for(const i in e){const r=t[i],o=e[i];if(Lh(r)&&Lh(o)){s[i]=Jt(r,o,n);continue}if(Array.isArray(r)&&Array.isArray(o)&&n){s[i]=n(r,o);continue}s[i]=o}return s}function fI(t){return t.map(e=>e.type===Ke?fI(e.children):e).flat()}function Zs(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(Zs.cache.has(t))return Zs.cache.get(t);const e=t.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return Zs.cache.set(t,e),e}Zs.cache=new Map;function Ba(t,e){if(!e||typeof e!="object")return[];if(Array.isArray(e))return e.map(n=>Ba(t,n)).flat(1);if(Array.isArray(e.children))return e.children.map(n=>Ba(t,n)).flat(1);if(e.component){if(Object.getOwnPropertySymbols(e.component.provides).includes(t))return[e.component];if(e.component.subTree)return Ba(t,e.component.subTree).flat(1)}return[]}function mI(t){const e=Ds({}),n=b(t);return Qo(()=>{for(const s in n.value)e[s]=n.value[s]},{flush:"sync"}),Vf(e)}function Fh(t,e){return t.includes(e)}const $i=()=>[Function,Array];function zp(t,e){return e="on"+Zn(e),!!(t[e]||t[`${e}Once`]||t[`${e}Capture`]||t[`${e}OnceCapture`]||t[`${e}CaptureOnce`])}function EN(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),s=1;s<e;s++)n[s-1]=arguments[s];if(Array.isArray(t))for(const i of t)i(...n);else typeof t=="function"&&t(...n)}function TN(t,e){if(!(Ht&&typeof CSS<"u"&&typeof CSS.supports<"u"&&CSS.supports(`selector(${e})`)))return null;try{return!!t&&t.matches(e)}catch{return null}}const IN=["top","bottom"],wN=["start","end","left","right"];function CN(t,e){let[n,s]=t.split(" ");return s||(s=Fh(IN,n)?"start":Fh(wN,n)?"top":"center"),{side:qp(n,e),align:qp(s,e)}}function qp(t,e){return t==="start"?e?"right":"left":t==="end"?e?"left":"right":t}class Ru{constructor(e){let{x:n,y:s,width:i,height:r}=e;this.x=n,this.y=s,this.width=i,this.height=r}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function bN(t){const e=t.getBoundingClientRect(),n=getComputedStyle(t),s=n.transform;if(s){let i,r,o,a,l;if(s.startsWith("matrix3d("))i=s.slice(9,-1).split(/, /),r=+i[0],o=+i[5],a=+i[12],l=+i[13];else if(s.startsWith("matrix("))i=s.slice(7,-1).split(/, /),r=+i[0],o=+i[3],a=+i[4],l=+i[5];else return new Ru(e);const c=n.transformOrigin,u=e.x-a-(1-r)*parseFloat(c),h=e.y-l-(1-o)*parseFloat(c.slice(c.indexOf(" ")+1)),d=r?e.width/r:t.offsetWidth+1,f=o?e.height/o:t.offsetHeight+1;return new Ru({x:u,y:h,width:d,height:f})}else return new Ru(e)}function AN(t,e,n){if(typeof t.animate>"u")return{finished:Promise.resolve()};let s;try{s=t.animate(e,n)}catch{return{finished:Promise.resolve()}}return typeof s.finished>"u"&&(s.finished=new Promise(i=>{s.onfinish=()=>{i(s)}})),s}const Ci=2.4,Kp=.2126729,Gp=.7151522,Qp=.072175,SN=.55,RN=.58,PN=.57,kN=.62,wa=.03,Yp=1.45,NN=5e-4,DN=1.25,xN=1.25,Xp=.078,Jp=12.82051282051282,Ca=.06,Zp=.001;function e_(t,e){const n=(t.r/255)**Ci,s=(t.g/255)**Ci,i=(t.b/255)**Ci,r=(e.r/255)**Ci,o=(e.g/255)**Ci,a=(e.b/255)**Ci;let l=n*Kp+s*Gp+i*Qp,c=r*Kp+o*Gp+a*Qp;if(l<=wa&&(l+=(wa-l)**Yp),c<=wa&&(c+=(wa-c)**Yp),Math.abs(c-l)<NN)return 0;let u;if(c>l){const h=(c**SN-l**RN)*DN;u=h<Zp?0:h<Xp?h-h*Jp*Ca:h-Ca}else{const h=(c**kN-l**PN)*xN;u=h>-Zp?0:h>-Xp?h-h*Jp*Ca:h+Ca}return u*100}const yl=.20689655172413793,ON=t=>t>yl**3?Math.cbrt(t):t/(3*yl**2)+4/29,VN=t=>t>yl?t**3:3*yl**2*(t-4/29);function gI(t){const e=ON,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function pI(t){const e=VN,n=(t[0]+16)/116;return[e(n+t[1]/500)*.95047,e(n),e(n-t[2]/200)*1.08883]}const MN=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],LN=t=>t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055,FN=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],UN=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function _I(t){const e=Array(3),n=LN,s=MN;for(let i=0;i<3;++i)e[i]=Math.round(yN(n(s[i][0]*t[0]+s[i][1]*t[1]+s[i][2]*t[2]))*255);return{r:e[0],g:e[1],b:e[2]}}function Zf(t){let{r:e,g:n,b:s}=t;const i=[0,0,0],r=UN,o=FN;e=r(e/255),n=r(n/255),s=r(s/255);for(let a=0;a<3;++a)i[a]=o[a][0]*e+o[a][1]*n+o[a][2]*s;return i}function Uh(t){return!!t&&/^(#|var\(--|(rgb|hsl)a?\()/.test(t)}function BN(t){return Uh(t)&&!/^((rgb|hsl)a?\()?var\(--/.test(t)}const t_=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,$N={rgb:(t,e,n,s)=>({r:t,g:e,b:n,a:s}),rgba:(t,e,n,s)=>({r:t,g:e,b:n,a:s}),hsl:(t,e,n,s)=>n_({h:t,s:e,l:n,a:s}),hsla:(t,e,n,s)=>n_({h:t,s:e,l:n,a:s}),hsv:(t,e,n,s)=>bo({h:t,s:e,v:n,a:s}),hsva:(t,e,n,s)=>bo({h:t,s:e,v:n,a:s})};function bn(t){if(typeof t=="number")return{r:(t&16711680)>>16,g:(t&65280)>>8,b:t&255};if(typeof t=="string"&&t_.test(t)){const{groups:e}=t.match(t_),{fn:n,values:s}=e,i=s.split(/,\s*/).map(r=>r.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(r)/100:parseFloat(r));return $N[n](...i)}else if(typeof t=="string"){let e=t.startsWith("#")?t.slice(1):t;return[3,4].includes(e.length)?e=e.split("").map(n=>n+n).join(""):[6,8].includes(e.length),WN(e)}else if(typeof t=="object"){if(Su(t,["r","g","b"]))return t;if(Su(t,["h","s","l"]))return bo(yI(t));if(Su(t,["h","s","v"]))return bo(t)}throw new TypeError(`Invalid color: ${t==null?t:String(t)||t.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function bo(t){const{h:e,s:n,v:s,a:i}=t,r=a=>{const l=(a+e/60)%6;return s-s*n*Math.max(Math.min(l,4-l,1),0)},o=[r(5),r(3),r(1)].map(a=>Math.round(a*255));return{r:o[0],g:o[1],b:o[2],a:i}}function n_(t){return bo(yI(t))}function yI(t){const{h:e,s:n,l:s,a:i}=t,r=s+n*Math.min(s,1-s),o=r===0?0:2-2*s/r;return{h:e,s:o,v:r,a:i}}function ba(t){const e=Math.round(t).toString(16);return("00".substr(0,2-e.length)+e).toUpperCase()}function jN(t){let{r:e,g:n,b:s,a:i}=t;return`#${[ba(e),ba(n),ba(s),i!==void 0?ba(Math.round(i*255)):""].join("")}`}function WN(t){t=HN(t);let[e,n,s,i]=vN(t,2).map(r=>parseInt(r,16));return i=i===void 0?i:i/255,{r:e,g:n,b:s,a:i}}function HN(t){return t.startsWith("#")&&(t=t.slice(1)),t=t.replace(/([^0-9a-f])/gi,"F"),(t.length===3||t.length===4)&&(t=t.split("").map(e=>e+e).join("")),t.length!==6&&(t=Wp(Wp(t,6),8,"F")),t}function zN(t,e){const n=gI(Zf(t));return n[0]=n[0]+e*10,_I(pI(n))}function qN(t,e){const n=gI(Zf(t));return n[0]=n[0]-e*10,_I(pI(n))}function KN(t){const e=bn(t);return Zf(e)[1]}function vI(t){const e=Math.abs(e_(bn(0),bn(t)));return Math.abs(e_(bn(16777215),bn(t)))>Math.min(e,50)?"#fff":"#000"}function J(t,e){return n=>Object.keys(t).reduce((s,i)=>{const o=typeof t[i]=="object"&&t[i]!=null&&!Array.isArray(t[i])?t[i]:{type:t[i]};return n&&i in n?s[i]={...o,default:n[i]}:s[i]=o,e&&!s[i].source&&(s[i].source=e),s},{})}const We=J({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component"),ir=Symbol.for("vuetify:defaults");function GN(t){return Se(t)}function em(){const t=Ot(ir);if(!t)throw new Error("[Vuetify] Could not find defaults instance");return t}function Oc(t,e){const n=em(),s=Se(t),i=b(()=>{if(Cn(e==null?void 0:e.disabled))return n.value;const o=Cn(e==null?void 0:e.scoped),a=Cn(e==null?void 0:e.reset),l=Cn(e==null?void 0:e.root);if(s.value==null&&!(o||a||l))return n.value;let c=Jt(s.value,{prev:n.value});if(o)return c;if(a||l){const u=Number(a||1/0);for(let h=0;h<=u&&!(!c||!("prev"in c));h++)c=c.prev;return c&&typeof l=="string"&&l in c&&(c=Jt(Jt(c,{prev:c}),c[l])),c}return c.prev?Jt(c.prev,c):c});return pi(ir,i),i}function QN(t,e){var n,s;return typeof((n=t.props)==null?void 0:n[e])<"u"||typeof((s=t.props)==null?void 0:s[Zs(e)])<"u"}function YN(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:em();const s=pn("useDefaults");if(e=e??s.type.name??s.type.__name,!e)throw new Error("[Vuetify] Could not determine component name");const i=b(()=>{var l;return(l=n.value)==null?void 0:l[t._as??e]}),r=new Proxy(t,{get(l,c){var h,d,f,m;const u=Reflect.get(l,c);return c==="class"||c==="style"?[(h=i.value)==null?void 0:h[c],u].filter(g=>g!=null):typeof c=="string"&&!QN(s.vnode,c)?((d=i.value)==null?void 0:d[c])??((m=(f=n.value)==null?void 0:f.global)==null?void 0:m[c])??u:u}}),o=lt();Qo(()=>{if(i.value){const l=Object.entries(i.value).filter(c=>{let[u]=c;return u.startsWith(u[0].toUpperCase())});o.value=l.length?Object.fromEntries(l):void 0}else o.value=void 0});function a(){const l=JN(ir,s);pi(ir,b(()=>o.value?Jt((l==null?void 0:l.value)??{},o.value):l==null?void 0:l.value))}return{props:r,provideSubDefaults:a}}function ea(t){if(t._setup=t._setup??t.setup,!t.name)return t;if(t._setup){t.props=J(t.props??{},t.name)();const e=Object.keys(t.props).filter(n=>n!=="class"&&n!=="style");t.filterProps=function(s){return hI(s,e)},t.props._as=String,t.setup=function(s,i){const r=em();if(!r.value)return t._setup(s,i);const{props:o,provideSubDefaults:a}=YN(s,s._as??t.name,r),l=t._setup(o,i);return a(),l}}return t}function Te(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(t?ea:qk)(e)}function tm(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return Te()({name:n??Zn(tn(t.replace(/__/g,"-"))),props:{tag:{type:String,default:e},...We()},setup(s,i){let{slots:r}=i;return()=>{var o;return Os(s.tag,{class:[t,s.class],style:s.style},(o=r.default)==null?void 0:o.call(r))}}})}const XN="cubic-bezier(0.4, 0, 0.2, 1)";function pn(t,e){const n=Jo();if(!n)throw new Error(`[Vuetify] ${t} ${e||"must be called from inside a setup function"}`);return n}function ts(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const e=pn(t).type;return Zs((e==null?void 0:e.aliasName)||(e==null?void 0:e.name))}let EI=0,$a=new WeakMap;function ns(){const t=pn("getUid");if($a.has(t))return $a.get(t);{const e=EI++;return $a.set(t,e),e}}ns.reset=()=>{EI=0,$a=new WeakMap};function JN(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:pn("injectSelf");const{provides:n}=e;if(n&&t in n)return n[t]}function Le(t){const e=pn("useRender");e.render=t}const nm=J({border:[Boolean,Number,String]},"border");function sm(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ts();return{borderClasses:b(()=>{const s=je(t)?t.value:t.border,i=[];if(s===!0||s==="")i.push(`${e}--border`);else if(typeof s=="string"||s===0)for(const r of String(s).split(" "))i.push(`border-${r}`);return i})}}const ZN=[null,"default","comfortable","compact"],_i=J({density:{type:String,default:"default",validator:t=>ZN.includes(t)}},"density");function _r(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ts();return{densityClasses:b(()=>`${e}--density-${t.density}`)}}const im=J({elevation:{type:[Number,String],validator(t){const e=parseInt(t);return!isNaN(e)&&e>=0&&e<=24}}},"elevation");function rm(t){return{elevationClasses:b(()=>{const n=je(t)?t.value:t.elevation,s=[];return n==null||s.push(`elevation-${n}`),s})}}const yr=J({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function vr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ts();return{roundedClasses:b(()=>{const s=je(t)?t.value:t.rounded,i=[];if(s===!0||s==="")i.push(`${e}--rounded`);else if(typeof s=="string"||s===0)for(const r of String(s).split(" "))i.push(`rounded-${r}`);return i})}}const ss=J({tag:{type:String,default:"div"}},"tag"),vl=Symbol.for("vuetify:theme"),Vn=J({theme:String},"theme");function s_(){return{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}}function eD(){var s,i;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:s_();const e=s_();if(!t)return{...e,isDisabled:!0};const n={};for(const[r,o]of Object.entries(t.themes??{})){const a=o.dark||r==="dark"?(s=e.themes)==null?void 0:s.dark:(i=e.themes)==null?void 0:i.light;n[r]=Jt(a,o)}return Jt(e,{...t,themes:n})}function tD(t){const e=eD(t),n=Se(e.defaultTheme),s=Se(e.themes),i=b(()=>{const u={};for(const[h,d]of Object.entries(s.value)){const f=u[h]={...d,colors:{...d.colors}};if(e.variations)for(const m of e.variations.colors){const g=f.colors[m];if(g)for(const _ of["lighten","darken"]){const E=_==="lighten"?zN:qN;for(const w of uI(e.variations[_],1))f.colors[`${m}-${_}-${w}`]=jN(E(bn(g),w))}}for(const m of Object.keys(f.colors)){if(/^on-[a-z]/.test(m)||f.colors[`on-${m}`])continue;const g=`on-${m}`,_=bn(f.colors[m]);f.colors[g]=vI(_)}}return u}),r=b(()=>i.value[n.value]),o=b(()=>{const u=[];r.value.dark&&Us(u,":root",["color-scheme: dark"]),Us(u,":root",i_(r.value));for(const[m,g]of Object.entries(i.value))Us(u,`.v-theme--${m}`,[`color-scheme: ${g.dark?"dark":"normal"}`,...i_(g)]);const h=[],d=[],f=new Set(Object.values(i.value).flatMap(m=>Object.keys(m.colors)));for(const m of f)/^on-[a-z]/.test(m)?Us(d,`.${m}`,[`color: rgb(var(--v-theme-${m})) !important`]):(Us(h,`.bg-${m}`,[`--v-theme-overlay-multiplier: var(--v-theme-${m}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${m})) !important`,`color: rgb(var(--v-theme-on-${m})) !important`]),Us(d,`.text-${m}`,[`color: rgb(var(--v-theme-${m})) !important`]),Us(d,`.border-${m}`,[`--v-border-color: var(--v-theme-${m})`]));return u.push(...h,...d),u.map((m,g)=>g===0?m:`    ${m}`).join("")});function a(){return{style:[{children:o.value,id:"vuetify-theme-stylesheet",nonce:e.cspNonce||!1}]}}function l(u){if(e.isDisabled)return;const h=u._context.provides.usehead;if(h)if(h.push){const f=h.push(a);Ht&&Be(o,()=>{f.patch(a)})}else Ht?(h.addHeadObjs(b(a)),Qo(()=>h.updateDOM())):h.addHeadObjs(a());else{let m=function(){if(typeof document<"u"&&!f){const g=document.createElement("style");g.type="text/css",g.id="vuetify-theme-stylesheet",e.cspNonce&&g.setAttribute("nonce",e.cspNonce),f=g,document.head.appendChild(f)}f&&(f.innerHTML=o.value)};var d=m;let f=Ht?document.getElementById("vuetify-theme-stylesheet"):null;Ht?Be(o,m,{immediate:!0}):m()}}const c=b(()=>e.isDisabled?void 0:`v-theme--${n.value}`);return{install:l,isDisabled:e.isDisabled,name:n,themes:s,current:r,computedThemes:i,themeClasses:c,styles:o,global:{name:n,current:r}}}function Vs(t){pn("provideTheme");const e=Ot(vl,null);if(!e)throw new Error("Could not find Vuetify theme injection");const n=b(()=>t.theme??e.name.value),s=b(()=>e.themes.value[n.value]),i=b(()=>e.isDisabled?void 0:`v-theme--${n.value}`),r={...e,name:n,current:s,themeClasses:i};return pi(vl,r),r}function Us(t,e,n){t.push(`${e} {
`,...n.map(s=>`  ${s};
`),`}
`)}function i_(t){const e=t.dark?2:1,n=t.dark?1:2,s=[];for(const[i,r]of Object.entries(t.colors)){const o=bn(r);s.push(`--v-theme-${i}: ${o.r},${o.g},${o.b}`),i.startsWith("on-")||s.push(`--v-theme-${i}-overlay-multiplier: ${KN(r)>.18?e:n}`)}for(const[i,r]of Object.entries(t.variables)){const o=typeof r=="string"&&r.startsWith("#")?bn(r):void 0,a=o?`${o.r}, ${o.g}, ${o.b}`:void 0;s.push(`--v-${i}: ${a??r}`)}return s}function om(t){return mI(()=>{const e=[],n={};if(t.value.background)if(Uh(t.value.background)){if(n.backgroundColor=t.value.background,!t.value.text&&BN(t.value.background)){const s=bn(t.value.background);if(s.a==null||s.a===1){const i=vI(s);n.color=i,n.caretColor=i}}}else e.push(`bg-${t.value.background}`);return t.value.text&&(Uh(t.value.text)?(n.color=t.value.text,n.caretColor=t.value.text):e.push(`text-${t.value.text}`)),{colorClasses:e,colorStyles:n}})}function ri(t,e){const n=b(()=>({text:je(t)?t.value:e?t[e]:null})),{colorClasses:s,colorStyles:i}=om(n);return{textColorClasses:s,textColorStyles:i}}function El(t,e){const n=b(()=>({background:je(t)?t.value:e?t[e]:null})),{colorClasses:s,colorStyles:i}=om(n);return{backgroundColorClasses:s,backgroundColorStyles:i}}const nD=["elevated","flat","tonal","outlined","text","plain"];function am(t,e){return v(Ke,null,[t&&v("span",{key:"overlay",class:`${e}__overlay`},null),v("span",{key:"underlay",class:`${e}__underlay`},null)])}const Vc=J({color:String,variant:{type:String,default:"elevated",validator:t=>nD.includes(t)}},"variant");function lm(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ts();const n=b(()=>{const{variant:r}=Cn(t);return`${e}--variant-${r}`}),{colorClasses:s,colorStyles:i}=om(b(()=>{const{variant:r,color:o}=Cn(t);return{[["elevated","flat"].includes(r)?"background":"text"]:o}}));return{colorClasses:s,colorStyles:i,variantClasses:n}}const TI=J({divided:Boolean,...nm(),...We(),..._i(),...im(),...yr(),...ss(),...Vn(),...Vc()},"VBtnGroup"),r_=Te()({name:"VBtnGroup",props:TI(),setup(t,e){let{slots:n}=e;const{themeClasses:s}=Vs(t),{densityClasses:i}=_r(t),{borderClasses:r}=sm(t),{elevationClasses:o}=rm(t),{roundedClasses:a}=vr(t);Oc({VBtn:{height:"auto",color:Ue(t,"color"),density:Ue(t,"density"),flat:!0,variant:Ue(t,"variant")}}),Le(()=>v(t.tag,{class:["v-btn-group",{"v-btn-group--divided":t.divided},s.value,r.value,i.value,o.value,a.value,t.class],style:t.style},n))}});function Bh(t,e){let n;function s(){n=bf(),n.run(()=>e.length?e(()=>{n==null||n.stop(),s()}):e())}Be(t,i=>{i&&!n?s():i||(n==null||n.stop(),n=void 0)},{immediate:!0}),Af(()=>{n==null||n.stop()})}function mn(t,e,n){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:h=>h,i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:h=>h;const r=pn("useProxiedModel"),o=Se(t[e]!==void 0?t[e]:n),a=Zs(e),c=b(a!==e?()=>{var h,d,f,m;return t[e],!!(((h=r.vnode.props)!=null&&h.hasOwnProperty(e)||(d=r.vnode.props)!=null&&d.hasOwnProperty(a))&&((f=r.vnode.props)!=null&&f.hasOwnProperty(`onUpdate:${e}`)||(m=r.vnode.props)!=null&&m.hasOwnProperty(`onUpdate:${a}`)))}:()=>{var h,d;return t[e],!!((h=r.vnode.props)!=null&&h.hasOwnProperty(e)&&((d=r.vnode.props)!=null&&d.hasOwnProperty(`onUpdate:${e}`)))});Bh(()=>!c.value,()=>{Be(()=>t[e],h=>{o.value=h})});const u=b({get(){const h=t[e];return s(c.value?h:o.value)},set(h){const d=i(h),f=he(c.value?t[e]:o.value);f===d||s(f)===h||(o.value=d,r==null||r.emit(`update:${e}`,d))}});return Object.defineProperty(u,"externalValue",{get:()=>c.value?t[e]:o.value}),u}const sD=J({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),iD=J({value:null,disabled:Boolean,selectedClass:String},"group-item");function rD(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const s=pn("useGroupItem");if(!s)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const i=ns();pi(Symbol.for(`${e.description}:id`),i);const r=Ot(e,null);if(!r){if(!n)return r;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${e.description}`)}const o=Ue(t,"value"),a=b(()=>!!(r.disabled.value||t.disabled));r.register({id:i,value:o,disabled:a},s),xs(()=>{r.unregister(i)});const l=b(()=>r.isSelected(i)),c=b(()=>l.value&&[r.selectedClass.value,t.selectedClass]);return Be(l,u=>{s.emit("group:selected",{value:u})}),{id:i,isSelected:l,toggle:()=>r.select(i,!l.value),select:u=>r.select(i,u),selectedClass:c,value:o,disabled:a,group:r}}function oD(t,e){let n=!1;const s=Ds([]),i=mn(t,"modelValue",[],d=>d==null?[]:II(s,vs(d)),d=>{const f=lD(s,d);return t.multiple?f:f[0]}),r=pn("useGroup");function o(d,f){const m=d,g=Symbol.for(`${e.description}:id`),E=Ba(g,r==null?void 0:r.vnode).indexOf(f);E>-1?s.splice(E,0,m):s.push(m)}function a(d){if(n)return;l();const f=s.findIndex(m=>m.id===d);s.splice(f,1)}function l(){const d=s.find(f=>!f.disabled);d&&t.mandatory==="force"&&!i.value.length&&(i.value=[d.id])}Pc(()=>{l()}),xs(()=>{n=!0});function c(d,f){const m=s.find(g=>g.id===d);if(!(f&&(m!=null&&m.disabled)))if(t.multiple){const g=i.value.slice(),_=g.findIndex(w=>w===d),E=~_;if(f=f??!E,E&&t.mandatory&&g.length<=1||!E&&t.max!=null&&g.length+1>t.max)return;_<0&&f?g.push(d):_>=0&&!f&&g.splice(_,1),i.value=g}else{const g=i.value.includes(d);if(t.mandatory&&g)return;i.value=f??!g?[d]:[]}}function u(d){if(t.multiple,i.value.length){const f=i.value[0],m=s.findIndex(E=>E.id===f);let g=(m+d)%s.length,_=s[g];for(;_.disabled&&g!==m;)g=(g+d)%s.length,_=s[g];if(_.disabled)return;i.value=[s[g].id]}else{const f=s.find(m=>!m.disabled);f&&(i.value=[f.id])}}const h={register:o,unregister:a,selected:i,select:c,disabled:Ue(t,"disabled"),prev:()=>u(s.length-1),next:()=>u(1),isSelected:d=>i.value.includes(d),selectedClass:b(()=>t.selectedClass),items:b(()=>s),getItemIndex:d=>aD(s,d)};return pi(e,h),h}function aD(t,e){const n=II(t,[e]);return n.length?t.findIndex(s=>s.id===n[0]):-1}function II(t,e){const n=[];return e.forEach(s=>{const i=t.find(o=>xc(s,o.value)),r=t[s];(i==null?void 0:i.value)!=null?n.push(i.id):r!=null&&n.push(r.id)}),n}function lD(t,e){const n=[];return e.forEach(s=>{const i=t.findIndex(r=>r.id===s);if(~i){const r=t[i];n.push(r.value!=null?r.value:i)}}),n}const wI=Symbol.for("vuetify:v-btn-toggle"),cD=J({...TI(),...sD()},"VBtnToggle");Te()({name:"VBtnToggle",props:cD(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const{isSelected:s,next:i,prev:r,select:o,selected:a}=oD(t,wI);return Le(()=>{const l=r_.filterProps(t);return v(r_,Vt({class:["v-btn-toggle",t.class]},l,{style:t.style}),{default:()=>{var c;return[(c=n.default)==null?void 0:c.call(n,{isSelected:s,next:i,prev:r,select:o,selected:a})]}})}),{next:i,prev:r,select:o}}});const uD=J({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),ji=Te(!1)({name:"VDefaultsProvider",props:uD(),setup(t,e){let{slots:n}=e;const{defaults:s,disabled:i,reset:r,root:o,scoped:a}=Vf(t);return Oc(s,{reset:r,root:o,scoped:a,disabled:i}),()=>{var l;return(l=n.default)==null?void 0:l.call(n)}}});const hD={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",eyeDropper:"mdi-eyedropper"},dD={component:t=>Os(bI,{...t,class:"mdi"})},dt=[String,Function,Object,Array],$h=Symbol.for("vuetify:icons"),Mc=J({icon:{type:dt},tag:{type:String,required:!0}},"icon"),o_=Te()({name:"VComponentIcon",props:Mc(),setup(t,e){let{slots:n}=e;return()=>{const s=t.icon;return v(t.tag,null,{default:()=>{var i;return[t.icon?v(s,null,null):(i=n.default)==null?void 0:i.call(n)]}})}}}),CI=ea({name:"VSvgIcon",inheritAttrs:!1,props:Mc(),setup(t,e){let{attrs:n}=e;return()=>v(t.tag,Vt(n,{style:null}),{default:()=>[v("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(t.icon)?t.icon.map(s=>Array.isArray(s)?v("path",{d:s[0],"fill-opacity":s[1]},null):v("path",{d:s},null)):v("path",{d:t.icon},null)])]})}});ea({name:"VLigatureIcon",props:Mc(),setup(t){return()=>v(t.tag,null,{default:()=>[t.icon]})}});const bI=ea({name:"VClassIcon",props:Mc(),setup(t){return()=>v(t.tag,{class:t.icon},null)}}),fD={svg:{component:CI},class:{component:bI}};function mD(t){return Jt({defaultSet:"mdi",sets:{...fD,mdi:dD},aliases:{...hD,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z"}},t)}const gD=t=>{const e=Ot($h);if(!e)throw new Error("Missing Vuetify Icons provide!");return{iconData:b(()=>{var l;const s=Cn(t);if(!s)return{component:o_};let i=s;if(typeof i=="string"&&(i=i.trim(),i.startsWith("$")&&(i=(l=e.aliases)==null?void 0:l[i.slice(1)])),!i)throw new Error(`Could not find aliased icon "${s}"`);if(Array.isArray(i))return{component:CI,icon:i};if(typeof i!="string")return{component:o_,icon:i};const r=Object.keys(e.sets).find(c=>typeof i=="string"&&i.startsWith(`${c}:`)),o=r?i.slice(r.length+1):i;return{component:e.sets[r??e.defaultSet].component,icon:o}})}},pD=["x-small","small","default","large","x-large"],Lc=J({size:{type:[String,Number],default:"default"}},"size");function Fc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ts();return mI(()=>{let n,s;return Fh(pD,t.size)?n=`${e}--size-${t.size}`:t.size&&(s={width:Me(t.size),height:Me(t.size)}),{sizeClasses:n,sizeStyles:s}})}const _D=J({color:String,start:Boolean,end:Boolean,icon:dt,...We(),...Lc(),...ss({tag:"i"}),...Vn()},"VIcon"),zn=Te()({name:"VIcon",props:_D(),setup(t,e){let{attrs:n,slots:s}=e;const i=Se(),{themeClasses:r}=Vs(t),{iconData:o}=gD(b(()=>i.value||t.icon)),{sizeClasses:a}=Fc(t),{textColorClasses:l,textColorStyles:c}=ri(Ue(t,"color"));return Le(()=>{var h,d;const u=(h=s.default)==null?void 0:h.call(s);return u&&(i.value=(d=fI(u).filter(f=>f.type===Yo&&f.children&&typeof f.children=="string")[0])==null?void 0:d.children),v(o.value.component,{tag:t.tag,icon:o.value.icon,class:["v-icon","notranslate",r.value,a.value,l.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":t.start,"v-icon--end":t.end},t.class],style:[a.value?void 0:{fontSize:Me(t.size),height:Me(t.size),width:Me(t.size)},c.value,t.style],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>[u]})}),{}}});function AI(t,e){const n=Se(),s=lt(!1);if(Yf){const i=new IntersectionObserver(r=>{t==null||t(r,i),s.value=!!r.find(o=>o.isIntersecting)},e);xs(()=>{i.disconnect()}),Be(n,(r,o)=>{o&&(i.unobserve(o),s.value=!1),r&&i.observe(r)},{flush:"post"})}return{intersectionRef:n,isIntersecting:s}}function yD(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const n=Se(),s=Se();if(Ht){const i=new ResizeObserver(r=>{t==null||t(r,i),r.length&&(e==="content"?s.value=r[0].contentRect:s.value=r[0].target.getBoundingClientRect())});xs(()=>{i.disconnect()}),Be(n,(r,o)=>{o&&(i.unobserve(Bp(o)),s.value=void 0),r&&i.observe(Bp(r))},{flush:"post"})}return{resizeRef:n,contentRect:Df(s)}}const vD=J({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...We(),...Lc(),...ss({tag:"div"}),...Vn()},"VProgressCircular"),ED=Te()({name:"VProgressCircular",props:vD(),setup(t,e){let{slots:n}=e;const s=20,i=2*Math.PI*s,r=Se(),{themeClasses:o}=Vs(t),{sizeClasses:a,sizeStyles:l}=Fc(t),{textColorClasses:c,textColorStyles:u}=ri(Ue(t,"color")),{textColorClasses:h,textColorStyles:d}=ri(Ue(t,"bgColor")),{intersectionRef:f,isIntersecting:m}=AI(),{resizeRef:g,contentRect:_}=yD(),E=b(()=>Math.max(0,Math.min(100,parseFloat(t.modelValue)))),w=b(()=>Number(t.width)),T=b(()=>l.value?Number(t.size):_.value?_.value.width:Math.max(w.value,32)),C=b(()=>s/(1-w.value/T.value)*2),O=b(()=>w.value/T.value*C.value),A=b(()=>Me((100-E.value)/100*i));return Qo(()=>{f.value=r.value,g.value=r.value}),Le(()=>v(t.tag,{ref:r,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!t.indeterminate,"v-progress-circular--visible":m.value,"v-progress-circular--disable-shrink":t.indeterminate==="disable-shrink"},o.value,a.value,c.value,t.class],style:[l.value,u.value,t.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":t.indeterminate?void 0:E.value},{default:()=>[v("svg",{style:{transform:`rotate(calc(-90deg + ${Number(t.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${C.value} ${C.value}`},[v("circle",{class:["v-progress-circular__underlay",h.value],style:d.value,fill:"transparent",cx:"50%",cy:"50%",r:s,"stroke-width":O.value,"stroke-dasharray":i,"stroke-dashoffset":0},null),v("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:s,"stroke-width":O.value,"stroke-dasharray":i,"stroke-dashoffset":A.value},null)]),n.default&&v("div",{class:"v-progress-circular__content"},[n.default({value:E.value})])]})),{}}}),cm=J({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function um(t){return{dimensionStyles:b(()=>({height:Me(t.height),maxHeight:Me(t.maxHeight),maxWidth:Me(t.maxWidth),minHeight:Me(t.minHeight),minWidth:Me(t.minWidth),width:Me(t.width)}))}}const TD={badge:"Badge",open:"Open",close:"Close",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},ID={af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1},a_="$vuetify.",l_=(t,e)=>t.replace(/\{(\d+)\}/g,(n,s)=>String(e[+s])),SI=(t,e,n)=>function(s){for(var i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];if(!s.startsWith(a_))return l_(s,r);const a=s.replace(a_,""),l=t.value&&n.value[t.value],c=e.value&&n.value[e.value];let u=Up(l,a,null);return u||(`${s}${t.value}`,u=Up(c,a,null)),u||(u=s),typeof u!="string"&&(u=s),l_(u,r)};function RI(t,e){return(n,s)=>new Intl.NumberFormat([t.value,e.value],s).format(n)}function Pu(t,e,n){const s=mn(t,e,t[e]??n.value);return s.value=t[e]??n.value,Be(n,i=>{t[e]==null&&(s.value=n.value)}),s}function PI(t){return e=>{const n=Pu(e,"locale",t.current),s=Pu(e,"fallback",t.fallback),i=Pu(e,"messages",t.messages);return{name:"vuetify",current:n,fallback:s,messages:i,t:SI(n,s,i),n:RI(n,s),provide:PI({current:n,fallback:s,messages:i})}}}function wD(t){const e=lt((t==null?void 0:t.locale)??"en"),n=lt((t==null?void 0:t.fallback)??"en"),s=Se({en:TD,...t==null?void 0:t.messages});return{name:"vuetify",current:e,fallback:n,messages:s,t:SI(e,n,s),n:RI(e,n),provide:PI({current:e,fallback:n,messages:s})}}const Tl=Symbol.for("vuetify:locale");function CD(t){return t.name!=null}function bD(t){const e=t!=null&&t.adapter&&CD(t==null?void 0:t.adapter)?t==null?void 0:t.adapter:wD(t),n=SD(e,t);return{...e,...n}}function AD(){const t=Ot(Tl);if(!t)throw new Error("[Vuetify] Could not find injected locale instance");return t}function SD(t,e){const n=Se((e==null?void 0:e.rtl)??ID),s=b(()=>n.value[t.current.value]??!1);return{isRtl:s,rtl:n,rtlClasses:b(()=>`v-locale--is-${s.value?"rtl":"ltr"}`)}}function Uc(){const t=Ot(Tl);if(!t)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:t.isRtl,rtlClasses:t.rtlClasses}}const c_={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},hm=J({location:String},"location");function dm(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:s}=Uc();return{locationStyles:b(()=>{if(!t.location)return{};const{side:r,align:o}=CN(t.location.split(" ").length>1?t.location:`${t.location} center`,s.value);function a(c){return n?n(c):0}const l={};return r!=="center"&&(e?l[c_[r]]=`calc(100% - ${a(r)}px)`:l[r]=0),o!=="center"?e?l[c_[o]]=`calc(100% - ${a(o)}px)`:l[o]=0:(r==="center"?l.top=l.left="50%":l[{top:"left",bottom:"left",left:"top",right:"top"}[r]]="50%",l.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[r]),l})}}const RD=J({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...We(),...hm({location:"top"}),...yr(),...ss(),...Vn()},"VProgressLinear"),PD=Te()({name:"VProgressLinear",props:RD(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const s=mn(t,"modelValue"),{isRtl:i,rtlClasses:r}=Uc(),{themeClasses:o}=Vs(t),{locationStyles:a}=dm(t),{textColorClasses:l,textColorStyles:c}=ri(t,"color"),{backgroundColorClasses:u,backgroundColorStyles:h}=El(b(()=>t.bgColor||t.color)),{backgroundColorClasses:d,backgroundColorStyles:f}=El(t,"color"),{roundedClasses:m}=vr(t),{intersectionRef:g,isIntersecting:_}=AI(),E=b(()=>parseInt(t.max,10)),w=b(()=>parseInt(t.height,10)),T=b(()=>parseFloat(t.bufferValue)/E.value*100),C=b(()=>parseFloat(s.value)/E.value*100),O=b(()=>i.value!==t.reverse),A=b(()=>t.indeterminate?"fade-transition":"slide-x-transition"),z=b(()=>t.bgOpacity==null?t.bgOpacity:parseFloat(t.bgOpacity));function x(D){if(!g.value)return;const{left:j,right:ie,width:B}=g.value.getBoundingClientRect(),Y=O.value?B-D.clientX+(ie-B):D.clientX-j;s.value=Math.round(Y/B*E.value)}return Le(()=>v(t.tag,{ref:g,class:["v-progress-linear",{"v-progress-linear--absolute":t.absolute,"v-progress-linear--active":t.active&&_.value,"v-progress-linear--reverse":O.value,"v-progress-linear--rounded":t.rounded,"v-progress-linear--rounded-bar":t.roundedBar,"v-progress-linear--striped":t.striped},m.value,o.value,r.value,t.class],style:[{bottom:t.location==="bottom"?0:void 0,top:t.location==="top"?0:void 0,height:t.active?Me(w.value):0,"--v-progress-linear-height":Me(w.value),...a.value},t.style],role:"progressbar","aria-hidden":t.active?"false":"true","aria-valuemin":"0","aria-valuemax":t.max,"aria-valuenow":t.indeterminate?void 0:C.value,onClick:t.clickable&&x},{default:()=>[t.stream&&v("div",{key:"stream",class:["v-progress-linear__stream",l.value],style:{...c.value,[O.value?"left":"right"]:Me(-w.value),borderTop:`${Me(w.value/2)} dotted`,opacity:z.value,top:`calc(50% - ${Me(w.value/4)})`,width:Me(100-T.value,"%"),"--v-progress-linear-stream-to":Me(w.value*(O.value?1:-1))}},null),v("div",{class:["v-progress-linear__background",u.value],style:[h.value,{opacity:z.value,width:Me(t.stream?T.value:100,"%")}]},null),v(pr,{name:A.value},{default:()=>[t.indeterminate?v("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(D=>v("div",{key:D,class:["v-progress-linear__indeterminate",D,d.value],style:f.value},null))]):v("div",{class:["v-progress-linear__determinate",d.value],style:[f.value,{width:Me(C.value,"%")}]},null)]}),n.default&&v("div",{class:"v-progress-linear__content"},[n.default({value:C.value,buffer:T.value})])]})),{}}}),fm=J({loading:[Boolean,String]},"loader");function mm(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ts();return{loaderClasses:b(()=>({[`${e}--loading`]:t.loading}))}}function kI(t,e){var s;let{slots:n}=e;return v("div",{class:`${t.name}__loader`},[((s=n.default)==null?void 0:s.call(n,{color:t.color,isActive:t.active}))||v(PD,{absolute:t.absolute,active:t.active,color:t.color,height:"2",indeterminate:!0},null)])}const kD=["static","relative","fixed","absolute","sticky"],NI=J({position:{type:String,validator:t=>kD.includes(t)}},"position");function DI(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ts();return{positionClasses:b(()=>t.position?`${e}--${t.position}`:void 0)}}function ND(){const t=pn("useRoute");return b(()=>{var e;return(e=t==null?void 0:t.proxy)==null?void 0:e.$route})}function xI(t,e){const n=Fk("RouterLink"),s=b(()=>!!(t.href||t.to)),i=b(()=>(s==null?void 0:s.value)||zp(e,"click")||zp(t,"click"));if(typeof n=="string")return{isLink:s,isClickable:i,href:Ue(t,"href")};const r=t.to?n.useLink(t):void 0,o=ND();return{isLink:s,isClickable:i,route:r==null?void 0:r.route,navigate:r==null?void 0:r.navigate,isActive:r&&b(()=>{var a,l,c;return t.exact?o.value?((c=r.isExactActive)==null?void 0:c.value)&&xc(r.route.value.query,o.value.query):(l=r.isExactActive)==null?void 0:l.value:(a=r.isActive)==null?void 0:a.value}),href:b(()=>t.to?r==null?void 0:r.route.value.href:t.href)}}const OI=J({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");function DD(t,e){Be(()=>{var n;return(n=t.isActive)==null?void 0:n.value},n=>{t.isLink.value&&n&&e&&As(()=>{e(!0)})},{immediate:!0})}const jh=Symbol("rippleStop"),xD=80;function u_(t,e){t.style.transform=e,t.style.webkitTransform=e}function Wh(t){return t.constructor.name==="TouchEvent"}function VI(t){return t.constructor.name==="KeyboardEvent"}const OD=function(t,e){var h;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=0,i=0;if(!VI(t)){const d=e.getBoundingClientRect(),f=Wh(t)?t.touches[t.touches.length-1]:t;s=f.clientX-d.left,i=f.clientY-d.top}let r=0,o=.3;(h=e._ripple)!=null&&h.circle?(o=.15,r=e.clientWidth/2,r=n.center?r:r+Math.sqrt((s-r)**2+(i-r)**2)/4):r=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const a=`${(e.clientWidth-r*2)/2}px`,l=`${(e.clientHeight-r*2)/2}px`,c=n.center?a:`${s-r}px`,u=n.center?l:`${i-r}px`;return{radius:r,scale:o,x:c,y:u,centerX:a,centerY:l}},Il={show(t,e){var f;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((f=e==null?void 0:e._ripple)!=null&&f.enabled))return;const s=document.createElement("span"),i=document.createElement("span");s.appendChild(i),s.className="v-ripple__container",n.class&&(s.className+=` ${n.class}`);const{radius:r,scale:o,x:a,y:l,centerX:c,centerY:u}=OD(t,e,n),h=`${r*2}px`;i.className="v-ripple__animation",i.style.width=h,i.style.height=h,e.appendChild(s);const d=window.getComputedStyle(e);d&&d.position==="static"&&(e.style.position="relative",e.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),u_(i,`translate(${a}, ${l}) scale3d(${o},${o},${o})`),i.dataset.activated=String(performance.now()),setTimeout(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),u_(i,`translate(${c}, ${u}) scale3d(1,1,1)`)},0)},hide(t){var r;if(!((r=t==null?void 0:t._ripple)!=null&&r.enabled))return;const e=t.getElementsByClassName("v-ripple__animation");if(e.length===0)return;const n=e[e.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const s=performance.now()-Number(n.dataset.activated),i=Math.max(250-s,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var a;t.getElementsByClassName("v-ripple__animation").length===1&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),((a=n.parentNode)==null?void 0:a.parentNode)===t&&t.removeChild(n.parentNode)},300)},i)}};function MI(t){return typeof t>"u"||!!t}function Ao(t){const e={},n=t.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||t[jh])){if(t[jh]=!0,Wh(t))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(e.center=n._ripple.centered||VI(t),n._ripple.class&&(e.class=n._ripple.class),Wh(t)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{Il.show(t,n,e)},n._ripple.showTimer=window.setTimeout(()=>{var s;(s=n==null?void 0:n._ripple)!=null&&s.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},xD)}else Il.show(t,n,e)}}function h_(t){t[jh]=!0}function $t(t){const e=t.currentTarget;if(e!=null&&e._ripple){if(window.clearTimeout(e._ripple.showTimer),t.type==="touchend"&&e._ripple.showTimerCommit){e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,e._ripple.showTimer=window.setTimeout(()=>{$t(t)});return}window.setTimeout(()=>{e._ripple&&(e._ripple.touched=!1)}),Il.hide(e)}}function LI(t){const e=t.currentTarget;e!=null&&e._ripple&&(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}let So=!1;function FI(t){!So&&(t.keyCode===$p.enter||t.keyCode===$p.space)&&(So=!0,Ao(t))}function UI(t){So=!1,$t(t)}function BI(t){So&&(So=!1,$t(t))}function $I(t,e,n){const{value:s,modifiers:i}=e,r=MI(s);if(r||Il.hide(t),t._ripple=t._ripple??{},t._ripple.enabled=r,t._ripple.centered=i.center,t._ripple.circle=i.circle,Lh(s)&&s.class&&(t._ripple.class=s.class),r&&!n){if(i.stop){t.addEventListener("touchstart",h_,{passive:!0}),t.addEventListener("mousedown",h_);return}t.addEventListener("touchstart",Ao,{passive:!0}),t.addEventListener("touchend",$t,{passive:!0}),t.addEventListener("touchmove",LI,{passive:!0}),t.addEventListener("touchcancel",$t),t.addEventListener("mousedown",Ao),t.addEventListener("mouseup",$t),t.addEventListener("mouseleave",$t),t.addEventListener("keydown",FI),t.addEventListener("keyup",UI),t.addEventListener("blur",BI),t.addEventListener("dragstart",$t,{passive:!0})}else!r&&n&&jI(t)}function jI(t){t.removeEventListener("mousedown",Ao),t.removeEventListener("touchstart",Ao),t.removeEventListener("touchend",$t),t.removeEventListener("touchmove",LI),t.removeEventListener("touchcancel",$t),t.removeEventListener("mouseup",$t),t.removeEventListener("mouseleave",$t),t.removeEventListener("keydown",FI),t.removeEventListener("keyup",UI),t.removeEventListener("dragstart",$t),t.removeEventListener("blur",BI)}function VD(t,e){$I(t,e,!1)}function MD(t){delete t._ripple,jI(t)}function LD(t,e){if(e.value===e.oldValue)return;const n=MI(e.oldValue);$I(t,e,n)}const gm={mounted:VD,unmounted:MD,updated:LD},FD=J({active:{type:Boolean,default:void 0},symbol:{type:null,default:wI},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:dt,appendIcon:dt,block:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...nm(),...We(),..._i(),...cm(),...im(),...iD(),...fm(),...hm(),...NI(),...yr(),...OI(),...Lc(),...ss({tag:"button"}),...Vn(),...Vc({variant:"elevated"})},"VBtn"),WI=Te()({name:"VBtn",directives:{Ripple:gm},props:FD(),emits:{"group:selected":t=>!0},setup(t,e){let{attrs:n,slots:s}=e;const{themeClasses:i}=Vs(t),{borderClasses:r}=sm(t),{colorClasses:o,colorStyles:a,variantClasses:l}=lm(t),{densityClasses:c}=_r(t),{dimensionStyles:u}=um(t),{elevationClasses:h}=rm(t),{loaderClasses:d}=mm(t),{locationStyles:f}=dm(t),{positionClasses:m}=DI(t),{roundedClasses:g}=vr(t),{sizeClasses:_,sizeStyles:E}=Fc(t),w=rD(t,t.symbol,!1),T=xI(t,n),C=b(()=>{var D;return t.active!==void 0?t.active:T.isLink.value?(D=T.isActive)==null?void 0:D.value:w==null?void 0:w.isSelected.value}),O=b(()=>(w==null?void 0:w.disabled.value)||t.disabled),A=b(()=>t.variant==="elevated"&&!(t.disabled||t.flat||t.border)),z=b(()=>{if(!(t.value===void 0||typeof t.value=="symbol"))return Object(t.value)===t.value?JSON.stringify(t.value,null,0):t.value});function x(D){var j;O.value||T.isLink.value&&(D.metaKey||D.ctrlKey||D.shiftKey||D.button!==0||n.target==="_blank")||((j=T.navigate)==null||j.call(T,D),w==null||w.toggle())}return DD(T,w==null?void 0:w.select),Le(()=>{var ge,Fe;const D=T.isLink.value?"a":t.tag,j=!!(t.prependIcon||s.prepend),ie=!!(t.appendIcon||s.append),B=!!(t.icon&&t.icon!==!0),Y=(w==null?void 0:w.isSelected.value)&&(!T.isLink.value||((ge=T.isActive)==null?void 0:ge.value))||!w||((Fe=T.isActive)==null?void 0:Fe.value);return Ss(v(D,{type:D==="a"?void 0:"button",class:["v-btn",w==null?void 0:w.selectedClass.value,{"v-btn--active":C.value,"v-btn--block":t.block,"v-btn--disabled":O.value,"v-btn--elevated":A.value,"v-btn--flat":t.flat,"v-btn--icon":!!t.icon,"v-btn--loading":t.loading,"v-btn--slim":t.slim,"v-btn--stacked":t.stacked},i.value,r.value,Y?o.value:void 0,c.value,h.value,d.value,m.value,g.value,_.value,l.value,t.class],style:[Y?a.value:void 0,u.value,f.value,E.value,t.style],disabled:O.value||void 0,href:T.href.value,onClick:x,value:z.value},{default:()=>{var ye;return[am(!0,"v-btn"),!t.icon&&j&&v("span",{key:"prepend",class:"v-btn__prepend"},[s.prepend?v(ji,{key:"prepend-defaults",disabled:!t.prependIcon,defaults:{VIcon:{icon:t.prependIcon}}},s.prepend):v(zn,{key:"prepend-icon",icon:t.prependIcon},null)]),v("span",{class:"v-btn__content","data-no-activator":""},[!s.default&&B?v(zn,{key:"content-icon",icon:t.icon},null):v(ji,{key:"content-defaults",disabled:!B,defaults:{VIcon:{icon:t.icon}}},{default:()=>{var oe;return[((oe=s.default)==null?void 0:oe.call(s))??t.text]}})]),!t.icon&&ie&&v("span",{key:"append",class:"v-btn__append"},[s.append?v(ji,{key:"append-defaults",disabled:!t.appendIcon,defaults:{VIcon:{icon:t.appendIcon}}},s.append):v(zn,{key:"append-icon",icon:t.appendIcon},null)]),!!t.loading&&v("span",{key:"loader",class:"v-btn__loader"},[((ye=s.loader)==null?void 0:ye.call(s))??v(ED,{color:typeof t.loading=="boolean"?void 0:t.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[Go("ripple"),!O.value&&t.ripple,null]])}),{}}});const Bc=["sm","md","lg","xl","xxl"],d_=Symbol.for("vuetify:display"),f_={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},UD=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:f_;return Jt(f_,t)};function m_(t){return Ht&&!t?window.innerWidth:typeof t=="object"&&t.clientWidth||0}function g_(t){return Ht&&!t?window.innerHeight:typeof t=="object"&&t.clientHeight||0}function p_(t){const e=Ht&&!t?window.navigator.userAgent:"ssr";function n(m){return!!e.match(m)}const s=n(/android/i),i=n(/iphone|ipad|ipod/i),r=n(/cordova/i),o=n(/electron/i),a=n(/chrome/i),l=n(/edge/i),c=n(/firefox/i),u=n(/opera/i),h=n(/win/i),d=n(/mac/i),f=n(/linux/i);return{android:s,ios:i,cordova:r,electron:o,chrome:a,edge:l,firefox:c,opera:u,win:h,mac:d,linux:f,touch:mN,ssr:e==="ssr"}}function BD(t,e){const{thresholds:n,mobileBreakpoint:s}=UD(t),i=lt(g_(e)),r=lt(p_(e)),o=Ds({}),a=lt(m_(e));function l(){i.value=g_(),a.value=m_()}function c(){l(),r.value=p_()}return Qo(()=>{const u=a.value<n.sm,h=a.value<n.md&&!u,d=a.value<n.lg&&!(h||u),f=a.value<n.xl&&!(d||h||u),m=a.value<n.xxl&&!(f||d||h||u),g=a.value>=n.xxl,_=u?"xs":h?"sm":d?"md":f?"lg":m?"xl":"xxl",E=typeof s=="number"?s:n[s],w=a.value<E;o.xs=u,o.sm=h,o.md=d,o.lg=f,o.xl=m,o.xxl=g,o.smAndUp=!u,o.mdAndUp=!(u||h),o.lgAndUp=!(u||h||d),o.xlAndUp=!(u||h||d||f),o.smAndDown=!(d||f||m||g),o.mdAndDown=!(f||m||g),o.lgAndDown=!(m||g),o.xlAndDown=!g,o.name=_,o.height=i.value,o.width=a.value,o.mobile=w,o.mobileBreakpoint=s,o.platform=r.value,o.thresholds=n}),Ht&&window.addEventListener("resize",l,{passive:!0}),{...Vf(o),update:c,ssr:!!e}}const HI=(()=>Bc.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),zI=(()=>Bc.reduce((t,e)=>{const n="offset"+Zn(e);return t[n]={type:[String,Number],default:null},t},{}))(),qI=(()=>Bc.reduce((t,e)=>{const n="order"+Zn(e);return t[n]={type:[String,Number],default:null},t},{}))(),__={col:Object.keys(HI),offset:Object.keys(zI),order:Object.keys(qI)};function $D(t,e,n){let s=t;if(!(n==null||n===!1)){if(e){const i=e.replace(t,"");s+=`-${i}`}return t==="col"&&(s="v-"+s),t==="col"&&(n===""||n===!0)||(s+=`-${n}`),s.toLowerCase()}}const jD=["auto","start","end","center","baseline","stretch"],WD=J({cols:{type:[Boolean,String,Number],default:!1},...HI,offset:{type:[String,Number],default:null},...zI,order:{type:[String,Number],default:null},...qI,alignSelf:{type:String,default:null,validator:t=>jD.includes(t)},...We(),...ss()},"VCol"),Ro=Te()({name:"VCol",props:WD(),setup(t,e){let{slots:n}=e;const s=b(()=>{const i=[];let r;for(r in __)__[r].forEach(a=>{const l=t[a],c=$D(r,a,l);c&&i.push(c)});const o=i.some(a=>a.startsWith("v-col-"));return i.push({"v-col":!o||!t.cols,[`v-col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),i});return()=>{var i;return Os(t.tag,{class:[s.value,t.class],style:t.style},(i=n.default)==null?void 0:i.call(n))}}}),pm=["start","end","center"],KI=["space-between","space-around","space-evenly"];function _m(t,e){return Bc.reduce((n,s)=>{const i=t+Zn(s);return n[i]=e(),n},{})}const HD=[...pm,"baseline","stretch"],GI=t=>HD.includes(t),QI=_m("align",()=>({type:String,default:null,validator:GI})),zD=[...pm,...KI],YI=t=>zD.includes(t),XI=_m("justify",()=>({type:String,default:null,validator:YI})),qD=[...pm,...KI,"stretch"],JI=t=>qD.includes(t),ZI=_m("alignContent",()=>({type:String,default:null,validator:JI})),y_={align:Object.keys(QI),justify:Object.keys(XI),alignContent:Object.keys(ZI)},KD={align:"align",justify:"justify",alignContent:"align-content"};function GD(t,e,n){let s=KD[t];if(n!=null){if(e){const i=e.replace(t,"");s+=`-${i}`}return s+=`-${n}`,s.toLowerCase()}}const QD=J({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:GI},...QI,justify:{type:String,default:null,validator:YI},...XI,alignContent:{type:String,default:null,validator:JI},...ZI,...We(),...ss()},"VRow"),Hh=Te()({name:"VRow",props:QD(),setup(t,e){let{slots:n}=e;const s=b(()=>{const i=[];let r;for(r in y_)y_[r].forEach(o=>{const a=t[o],l=GD(r,o,a);l&&i.push(l)});return i.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),i});return()=>{var i;return Os(t.tag,{class:["v-row",s.value,t.class],style:t.style},(i=n.default)==null?void 0:i.call(n))}}});const YD=J({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function Qt(t,e,n){return Te()({name:t,props:YD({mode:n,origin:e}),setup(s,i){let{slots:r}=i;const o={onBeforeEnter(a){s.origin&&(a.style.transformOrigin=s.origin)},onLeave(a){if(s.leaveAbsolute){const{offsetTop:l,offsetLeft:c,offsetWidth:u,offsetHeight:h}=a;a._transitionInitialStyles={position:a.style.position,top:a.style.top,left:a.style.left,width:a.style.width,height:a.style.height},a.style.position="absolute",a.style.top=`${l}px`,a.style.left=`${c}px`,a.style.width=`${u}px`,a.style.height=`${h}px`}s.hideOnLeave&&a.style.setProperty("display","none","important")},onAfterLeave(a){if(s.leaveAbsolute&&(a!=null&&a._transitionInitialStyles)){const{position:l,top:c,left:u,width:h,height:d}=a._transitionInitialStyles;delete a._transitionInitialStyles,a.style.position=l||"",a.style.top=c||"",a.style.left=u||"",a.style.width=h||"",a.style.height=d||""}}};return()=>{const a=s.group?nN:pr;return Os(a,{name:s.disabled?"":t,css:!s.disabled,...s.group?void 0:{mode:s.mode},...s.disabled?{}:o},r.default)}}})}function ew(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return Te()({name:t,props:{mode:{type:String,default:n},disabled:Boolean},setup(s,i){let{slots:r}=i;return()=>Os(pr,{name:s.disabled?"":t,css:!s.disabled,...s.disabled?{}:e},r.default)}})}function tw(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",s=tn(`offset-${n}`);return{onBeforeEnter(o){o._parent=o.parentNode,o._initialStyle={transition:o.style.transition,overflow:o.style.overflow,[n]:o.style[n]}},onEnter(o){const a=o._initialStyle;o.style.setProperty("transition","none","important"),o.style.overflow="hidden";const l=`${o[s]}px`;o.style[n]="0",o.offsetHeight,o.style.transition=a.transition,t&&o._parent&&o._parent.classList.add(t),requestAnimationFrame(()=>{o.style[n]=l})},onAfterEnter:r,onEnterCancelled:r,onLeave(o){o._initialStyle={transition:"",overflow:o.style.overflow,[n]:o.style[n]},o.style.overflow="hidden",o.style[n]=`${o[s]}px`,o.offsetHeight,requestAnimationFrame(()=>o.style[n]="0")},onAfterLeave:i,onLeaveCancelled:i};function i(o){t&&o._parent&&o._parent.classList.remove(t),r(o)}function r(o){const a=o._initialStyle[n];o.style.overflow=o._initialStyle.overflow,a!=null&&(o.style[n]=a),delete o._initialStyle}}Qt("fab-transition","center center","out-in");Qt("dialog-bottom-transition");Qt("dialog-top-transition");Qt("fade-transition");Qt("scale-transition");Qt("scroll-x-transition");Qt("scroll-x-reverse-transition");Qt("scroll-y-transition");Qt("scroll-y-reverse-transition");Qt("slide-x-transition");Qt("slide-x-reverse-transition");const nw=Qt("slide-y-transition");Qt("slide-y-reverse-transition");ew("expand-transition",tw());const XD=ew("expand-x-transition",tw("",!0)),ym=J({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:t=>t!==!0}},"transition"),Ni=(t,e)=>{let{slots:n}=e;const{transition:s,disabled:i,...r}=t,{component:o=pr,...a}=typeof s=="object"?s:{};return Os(o,Vt(typeof s=="string"?{name:i?"":s}:a,r,{disabled:i}),n)},JD=J({active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...We(),...ym({transition:{component:nw}})},"VCounter"),ZD=Te()({name:"VCounter",functional:!0,props:JD(),setup(t,e){let{slots:n}=e;const s=b(()=>t.max?`${t.value} / ${t.max}`:String(t.value));return Le(()=>v(Ni,{transition:t.transition},{default:()=>[Ss(v("div",{class:["v-counter",t.class],style:t.style},[n.default?n.default({counter:s.value,max:t.max,value:t.value}):s.value]),[[Gf,t.active]])]})),{}}});const ex=J({text:String,clickable:Boolean,...We(),...Vn()},"VLabel"),sw=Te()({name:"VLabel",props:ex(),setup(t,e){let{slots:n}=e;return Le(()=>{var s;return v("label",{class:["v-label",{"v-label--clickable":t.clickable},t.class],style:t.style},[t.text,(s=n.default)==null?void 0:s.call(n)])}),{}}}),tx=J({floating:Boolean,...We()},"VFieldLabel"),Aa=Te()({name:"VFieldLabel",props:tx(),setup(t,e){let{slots:n}=e;return Le(()=>v(sw,{class:["v-field-label",{"v-field-label--floating":t.floating},t.class],style:t.style,"aria-hidden":t.floating||void 0},n)),{}}});function iw(t){const{t:e}=AD();function n(s){let{name:i}=s;const r={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[i],o=t[`onClick:${i}`],a=o&&r?e(`$vuetify.input.${r}`,t.label??""):void 0;return v(zn,{icon:t[`${i}Icon`],"aria-label":a,onClick:o},null)}return{InputIcon:n}}const rw=J({focused:Boolean,"onUpdate:focused":$i()},"focus");function vm(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ts();const n=mn(t,"focused"),s=b(()=>({[`${e}--focused`]:n.value}));function i(){n.value=!0}function r(){n.value=!1}return{focusClasses:s,isFocused:n,focus:i,blur:r}}const nx=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],ow=J({appendInnerIcon:dt,bgColor:String,clearable:Boolean,clearIcon:{type:dt,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:dt,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:t=>nx.includes(t)},"onClick:clear":$i(),"onClick:appendInner":$i(),"onClick:prependInner":$i(),...We(),...fm(),...yr(),...Vn()},"VField"),aw=Te()({name:"VField",inheritAttrs:!1,props:{id:String,...rw(),...ow()},emits:{"update:focused":t=>!0,"update:modelValue":t=>!0},setup(t,e){let{attrs:n,emit:s,slots:i}=e;const{themeClasses:r}=Vs(t),{loaderClasses:o}=mm(t),{focusClasses:a,isFocused:l,focus:c,blur:u}=vm(t),{InputIcon:h}=iw(t),{roundedClasses:d}=vr(t),{rtlClasses:f}=Uc(),m=b(()=>t.dirty||t.active),g=b(()=>!t.singleLine&&!!(t.label||i.label)),_=ns(),E=b(()=>t.id||`input-${_}`),w=b(()=>`${E.value}-messages`),T=Se(),C=Se(),O=Se(),A=b(()=>["plain","underlined"].includes(t.variant)),{backgroundColorClasses:z,backgroundColorStyles:x}=El(Ue(t,"bgColor")),{textColorClasses:D,textColorStyles:j}=ri(b(()=>t.error||t.disabled?void 0:m.value&&l.value?t.color:t.baseColor));Be(m,Y=>{if(g.value){const ge=T.value.$el,Fe=C.value.$el;requestAnimationFrame(()=>{const ye=bN(ge),oe=Fe.getBoundingClientRect(),pe=oe.x-ye.x,Rt=oe.y-ye.y-(ye.height/2-oe.height/2),Ft=oe.width/.75,Pt=Math.abs(Ft-ye.width)>1?{maxWidth:Me(Ft)}:void 0,wt=getComputedStyle(ge),wr=getComputedStyle(Fe),Kc=parseFloat(wt.transitionDuration)*1e3||150,Gc=parseFloat(wr.getPropertyValue("--v-field-label-scale")),sn=wr.getPropertyValue("color");ge.style.visibility="visible",Fe.style.visibility="hidden",AN(ge,{transform:`translate(${pe}px, ${Rt}px) scale(${Gc})`,color:sn,...Pt},{duration:Kc,easing:XN,direction:Y?"normal":"reverse"}).finished.then(()=>{ge.style.removeProperty("visibility"),Fe.style.removeProperty("visibility")})})}},{flush:"post"});const ie=b(()=>({isActive:m,isFocused:l,controlRef:O,blur:u,focus:c}));function B(Y){Y.target!==document.activeElement&&Y.preventDefault()}return Le(()=>{var pe,Rt,Ft;const Y=t.variant==="outlined",ge=i["prepend-inner"]||t.prependInnerIcon,Fe=!!(t.clearable||i.clear),ye=!!(i["append-inner"]||t.appendInnerIcon||Fe),oe=()=>i.label?i.label({...ie.value,label:t.label,props:{for:E.value}}):t.label;return v("div",Vt({class:["v-field",{"v-field--active":m.value,"v-field--appended":ye,"v-field--center-affix":t.centerAffix??!A.value,"v-field--disabled":t.disabled,"v-field--dirty":t.dirty,"v-field--error":t.error,"v-field--flat":t.flat,"v-field--has-background":!!t.bgColor,"v-field--persistent-clear":t.persistentClear,"v-field--prepended":ge,"v-field--reverse":t.reverse,"v-field--single-line":t.singleLine,"v-field--no-label":!oe(),[`v-field--variant-${t.variant}`]:!0},r.value,z.value,a.value,o.value,d.value,f.value,t.class],style:[x.value,t.style],onClick:B},n),[v("div",{class:"v-field__overlay"},null),v(kI,{name:"v-field",active:!!t.loading,color:t.error?"error":typeof t.loading=="string"?t.loading:t.color},{default:i.loader}),ge&&v("div",{key:"prepend",class:"v-field__prepend-inner"},[t.prependInnerIcon&&v(h,{key:"prepend-icon",name:"prependInner"},null),(pe=i["prepend-inner"])==null?void 0:pe.call(i,ie.value)]),v("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(t.variant)&&g.value&&v(Aa,{key:"floating-label",ref:C,class:[D.value],floating:!0,for:E.value,style:j.value},{default:()=>[oe()]}),v(Aa,{ref:T,for:E.value},{default:()=>[oe()]}),(Rt=i.default)==null?void 0:Rt.call(i,{...ie.value,props:{id:E.value,class:"v-field__input","aria-describedby":w.value},focus:c,blur:u})]),Fe&&v(XD,{key:"clear"},{default:()=>[Ss(v("div",{class:"v-field__clearable",onMousedown:Pt=>{Pt.preventDefault(),Pt.stopPropagation()}},[i.clear?i.clear():v(h,{name:"clear"},null)]),[[Gf,t.dirty]])]}),ye&&v("div",{key:"append",class:"v-field__append-inner"},[(Ft=i["append-inner"])==null?void 0:Ft.call(i,ie.value),t.appendInnerIcon&&v(h,{key:"append-icon",name:"appendInner"},null)]),v("div",{class:["v-field__outline",D.value],style:j.value},[Y&&v(Ke,null,[v("div",{class:"v-field__outline__start"},null),g.value&&v("div",{class:"v-field__outline__notch"},[v(Aa,{ref:C,floating:!0,for:E.value},{default:()=>[oe()]})]),v("div",{class:"v-field__outline__end"},null)]),A.value&&g.value&&v(Aa,{ref:C,floating:!0,for:E.value},{default:()=>[oe()]})])])}),{controlRef:O}}});function sx(t){const e=Object.keys(aw.props).filter(n=>!pN(n)&&n!=="class"&&n!=="style");return hI(t,e)}const ix=J({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...We(),...ym({transition:{component:nw,leaveAbsolute:!0,group:!0}})},"VMessages"),rx=Te()({name:"VMessages",props:ix(),setup(t,e){let{slots:n}=e;const s=b(()=>vs(t.messages)),{textColorClasses:i,textColorStyles:r}=ri(b(()=>t.color));return Le(()=>v(Ni,{transition:t.transition,tag:"div",class:["v-messages",i.value,t.class],style:[r.value,t.style],role:"alert","aria-live":"polite"},{default:()=>[t.active&&s.value.map((o,a)=>v("div",{class:"v-messages__message",key:`${a}-${s.value}`},[n.message?n.message({message:o}):o]))]})),{}}}),ox=Symbol.for("vuetify:form");function ax(){return Ot(ox,null)}const lx=J({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...rw()},"validation");function cx(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ts(),n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ns();const s=mn(t,"modelValue"),i=b(()=>t.validationValue===void 0?s.value:t.validationValue),r=ax(),o=Se([]),a=lt(!0),l=b(()=>!!(vs(s.value===""?null:s.value).length||vs(i.value===""?null:i.value).length)),c=b(()=>!!(t.disabled??(r==null?void 0:r.isDisabled.value))),u=b(()=>!!(t.readonly??(r==null?void 0:r.isReadonly.value))),h=b(()=>{var C;return(C=t.errorMessages)!=null&&C.length?vs(t.errorMessages).concat(o.value).slice(0,Math.max(0,+t.maxErrors)):o.value}),d=b(()=>{let C=(t.validateOn??(r==null?void 0:r.validateOn.value))||"input";C==="lazy"&&(C="input lazy");const O=new Set((C==null?void 0:C.split(" "))??[]);return{blur:O.has("blur")||O.has("input"),input:O.has("input"),submit:O.has("submit"),lazy:O.has("lazy")}}),f=b(()=>{var C;return t.error||(C=t.errorMessages)!=null&&C.length?!1:t.rules.length?a.value?o.value.length||d.value.lazy?null:!0:!o.value.length:!0}),m=lt(!1),g=b(()=>({[`${e}--error`]:f.value===!1,[`${e}--dirty`]:l.value,[`${e}--disabled`]:c.value,[`${e}--readonly`]:u.value})),_=b(()=>t.name??Cn(n));jf(()=>{r==null||r.register({id:_.value,validate:T,reset:E,resetValidation:w})}),xs(()=>{r==null||r.unregister(_.value)}),Pc(async()=>{d.value.lazy||await T(!0),r==null||r.update(_.value,f.value,h.value)}),Bh(()=>d.value.input,()=>{Be(i,()=>{if(i.value!=null)T();else if(t.focused){const C=Be(()=>t.focused,O=>{O||T(),C()})}})}),Bh(()=>d.value.blur,()=>{Be(()=>t.focused,C=>{C||T()})}),Be(f,()=>{r==null||r.update(_.value,f.value,h.value)});function E(){s.value=null,As(w)}function w(){a.value=!0,d.value.lazy?o.value=[]:T(!0)}async function T(){let C=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const O=[];m.value=!0;for(const A of t.rules){if(O.length>=+(t.maxErrors??1))break;const x=await(typeof A=="function"?A:()=>A)(i.value);if(x!==!0){if(x!==!1&&typeof x!="string"){console.warn(`${x} is not a valid value. Rule functions must return boolean true or a string.`);continue}O.push(x||"")}}return o.value=O,m.value=!1,a.value=C,o.value}return{errorMessages:h,isDirty:l,isDisabled:c,isReadonly:u,isPristine:a,isValid:f,isValidating:m,reset:E,resetValidation:w,validate:T,validationClasses:g}}const Em=J({id:String,appendIcon:dt,centerAffix:{type:Boolean,default:!0},prependIcon:dt,hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:t=>["horizontal","vertical"].includes(t)},"onClick:prepend":$i(),"onClick:append":$i(),...We(),..._i(),...lx()},"VInput"),wl=Te()({name:"VInput",props:{...Em()},emits:{"update:modelValue":t=>!0},setup(t,e){let{attrs:n,slots:s,emit:i}=e;const{densityClasses:r}=_r(t),{rtlClasses:o}=Uc(),{InputIcon:a}=iw(t),l=ns(),c=b(()=>t.id||`input-${l}`),u=b(()=>`${c.value}-messages`),{errorMessages:h,isDirty:d,isDisabled:f,isReadonly:m,isPristine:g,isValid:_,isValidating:E,reset:w,resetValidation:T,validate:C,validationClasses:O}=cx(t,"v-input",c),A=b(()=>({id:c,messagesId:u,isDirty:d,isDisabled:f,isReadonly:m,isPristine:g,isValid:_,isValidating:E,reset:w,resetValidation:T,validate:C})),z=b(()=>{var x;return(x=t.errorMessages)!=null&&x.length||!g.value&&h.value.length?h.value:t.hint&&(t.persistentHint||t.focused)?t.hint:t.messages});return Le(()=>{var B,Y,ge,Fe;const x=!!(s.prepend||t.prependIcon),D=!!(s.append||t.appendIcon),j=z.value.length>0,ie=!t.hideDetails||t.hideDetails==="auto"&&(j||!!s.details);return v("div",{class:["v-input",`v-input--${t.direction}`,{"v-input--center-affix":t.centerAffix,"v-input--hide-spin-buttons":t.hideSpinButtons},r.value,o.value,O.value,t.class],style:t.style},[x&&v("div",{key:"prepend",class:"v-input__prepend"},[(B=s.prepend)==null?void 0:B.call(s,A.value),t.prependIcon&&v(a,{key:"prepend-icon",name:"prepend"},null)]),s.default&&v("div",{class:"v-input__control"},[(Y=s.default)==null?void 0:Y.call(s,A.value)]),D&&v("div",{key:"append",class:"v-input__append"},[t.appendIcon&&v(a,{key:"append-icon",name:"append"},null),(ge=s.append)==null?void 0:ge.call(s,A.value)]),ie&&v("div",{class:"v-input__details"},[v(rx,{id:u.value,active:j,messages:z.value},{message:s.message}),(Fe=s.details)==null?void 0:Fe.call(s,A.value)])])}),{reset:w,resetValidation:T,validate:C,isValid:_,errorMessages:h}}}),ku=Symbol("Forwarded refs");function Nu(t,e){let n=t;for(;n;){const s=Reflect.getOwnPropertyDescriptor(n,e);if(s)return s;n=Object.getPrototypeOf(n)}}function ux(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),s=1;s<e;s++)n[s-1]=arguments[s];return t[ku]=n,new Proxy(t,{get(i,r){if(Reflect.has(i,r))return Reflect.get(i,r);if(!(typeof r=="symbol"||r.startsWith("$")||r.startsWith("__"))){for(const o of n)if(o.value&&Reflect.has(o.value,r)){const a=Reflect.get(o.value,r);return typeof a=="function"?a.bind(o.value):a}}},has(i,r){if(Reflect.has(i,r))return!0;if(typeof r=="symbol"||r.startsWith("$")||r.startsWith("__"))return!1;for(const o of n)if(o.value&&Reflect.has(o.value,r))return!0;return!1},set(i,r,o){if(Reflect.has(i,r))return Reflect.set(i,r,o);if(typeof r=="symbol"||r.startsWith("$")||r.startsWith("__"))return!1;for(const a of n)if(a.value&&Reflect.has(a.value,r))return Reflect.set(a.value,r,o);return!1},getOwnPropertyDescriptor(i,r){var a;const o=Reflect.getOwnPropertyDescriptor(i,r);if(o)return o;if(!(typeof r=="symbol"||r.startsWith("$")||r.startsWith("__"))){for(const l of n){if(!l.value)continue;const c=Nu(l.value,r)??("_"in l.value?Nu((a=l.value._)==null?void 0:a.setupState,r):void 0);if(c)return c}for(const l of n){const c=l.value&&l.value[ku];if(!c)continue;const u=c.slice();for(;u.length;){const h=u.shift(),d=Nu(h.value,r);if(d)return d;const f=h.value&&h.value[ku];f&&u.push(...f)}}}}})}function hx(t,e){if(!Yf)return;const n=e.modifiers||{},s=e.value,{handler:i,options:r}=typeof s=="object"?s:{handler:s,options:{}},o=new IntersectionObserver(function(){var h;let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l=arguments.length>1?arguments[1]:void 0;const c=(h=t._observe)==null?void 0:h[e.instance.$.uid];if(!c)return;const u=a.some(d=>d.isIntersecting);i&&(!n.quiet||c.init)&&(!n.once||u||c.init)&&i(u,a,l),u&&n.once?lw(t,e):c.init=!0},r);t._observe=Object(t._observe),t._observe[e.instance.$.uid]={init:!1,observer:o},o.observe(t)}function lw(t,e){var s;const n=(s=t._observe)==null?void 0:s[e.instance.$.uid];n&&(n.observer.unobserve(t),delete t._observe[e.instance.$.uid])}const dx={mounted:hx,unmounted:lw},cw=dx,fx=["color","file","time","date","datetime-local","week","month"],mx=J({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...Em(),...ow()},"VTextField"),gx=Te()({name:"VTextField",directives:{Intersect:cw},inheritAttrs:!1,props:mx(),emits:{"click:control":t=>!0,"mousedown:control":t=>!0,"update:focused":t=>!0,"update:modelValue":t=>!0},setup(t,e){let{attrs:n,emit:s,slots:i}=e;const r=mn(t,"modelValue"),{isFocused:o,focus:a,blur:l}=vm(t),c=b(()=>typeof t.counterValue=="function"?t.counterValue(r.value):typeof t.counterValue=="number"?t.counterValue:(r.value??"").toString().length),u=b(()=>{if(n.maxlength)return n.maxlength;if(!(!t.counter||typeof t.counter!="number"&&typeof t.counter!="string"))return t.counter}),h=b(()=>["plain","underlined"].includes(t.variant));function d(A,z){var x,D;!t.autofocus||!A||(D=(x=z[0].target)==null?void 0:x.focus)==null||D.call(x)}const f=Se(),m=Se(),g=Se(),_=b(()=>fx.includes(t.type)||t.persistentPlaceholder||o.value||t.active);function E(){var A;g.value!==document.activeElement&&((A=g.value)==null||A.focus()),o.value||a()}function w(A){s("mousedown:control",A),A.target!==g.value&&(E(),A.preventDefault())}function T(A){E(),s("click:control",A)}function C(A){A.stopPropagation(),E(),As(()=>{r.value=null,EN(t["onClick:clear"],A)})}function O(A){var x;const z=A.target;if(r.value=z.value,(x=t.modelModifiers)!=null&&x.trim&&["text","search","password","tel","url"].includes(t.type)){const D=[z.selectionStart,z.selectionEnd];As(()=>{z.selectionStart=D[0],z.selectionEnd=D[1]})}}return Le(()=>{const A=!!(i.counter||t.counter!==!1&&t.counter!=null),z=!!(A||i.details),[x,D]=Jf(n),{modelValue:j,...ie}=wl.filterProps(t),B=sx(t);return v(wl,Vt({ref:f,modelValue:r.value,"onUpdate:modelValue":Y=>r.value=Y,class:["v-text-field",{"v-text-field--prefixed":t.prefix,"v-text-field--suffixed":t.suffix,"v-input--plain-underlined":h.value},t.class],style:t.style},x,ie,{centerAffix:!h.value,focused:o.value}),{...i,default:Y=>{let{id:ge,isDisabled:Fe,isDirty:ye,isReadonly:oe,isValid:pe}=Y;return v(aw,Vt({ref:m,onMousedown:w,onClick:T,"onClick:clear":C,"onClick:prependInner":t["onClick:prependInner"],"onClick:appendInner":t["onClick:appendInner"],role:t.role},B,{id:ge.value,active:_.value||ye.value,dirty:ye.value||t.dirty,disabled:Fe.value,focused:o.value,error:pe.value===!1}),{...i,default:Rt=>{let{props:{class:Ft,...Pt}}=Rt;const wt=Ss(v("input",Vt({ref:g,value:r.value,onInput:O,autofocus:t.autofocus,readonly:oe.value,disabled:Fe.value,name:t.name,placeholder:t.placeholder,size:1,type:t.type,onFocus:E,onBlur:l},Pt,D),null),[[Go("intersect"),{handler:d},null,{once:!0}]]);return v(Ke,null,[t.prefix&&v("span",{class:"v-text-field__prefix"},[v("span",{class:"v-text-field__prefix__text"},[t.prefix])]),i.default?v("div",{class:Ft,"data-no-activator":""},[i.default(),wt]):Yn(wt,{class:Ft}),t.suffix&&v("span",{class:"v-text-field__suffix"},[v("span",{class:"v-text-field__suffix__text"},[t.suffix])])])}})},details:z?Y=>{var ge;return v(Ke,null,[(ge=i.details)==null?void 0:ge.call(i,Y),A&&v(Ke,null,[v("span",null,null),v(ZD,{active:t.persistentCounter||o.value,value:c.value,max:u.value},i.counter)])])}:void 0})}),ux({},f,m,g)}}),px={name:"InputToDo",data(){return{oTodos:[],sTodoTitle:""}},firestore:{oTodos:wh},methods:{fnSubmitTodo(){[...this.sTodoTitle].length>0&&(VP(Eh(wh),{todo_title:this.sTodoTitle,b_completed:!1,b_edit:!1,timeStamp:new Intl.DateTimeFormat().format(new Date)}),this.sTodoTitle="")}}};function _x(t,e,n,s,i,r){return ml(),zf(Hh,{class:"mb-3 d-flex"},{default:Nt(()=>[v(Ro,{cols:"12",sm:"8"},{default:Nt(()=>[v(gx,{modelValue:i.sTodoTitle,"onUpdate:modelValue":e[0]||(e[0]=o=>i.sTodoTitle=o),variant:"underlined",clearable:"",placeholder:"할일을 여기에 입력!",onKeyup:lN(r.fnSubmitTodo,["enter"]),class:"mr-0 mr-sm-n10 mb-n6 mb-sm-8"},null,8,["modelValue","onKeyup"])]),_:1}),v(Ro,{cols:"12",sm:"4"},{default:Nt(()=>[v(WI,{class:"add-btn float-right",density:"comfortable",rounded:"pill",size:"x-large",color:"grey-darken-3",onClick:r.fnSubmitTodo},{default:Nt(()=>[gl(" 추가"),v(zn,{end:"",icon:"mdi-plus-thick",color:"grey-darken-3"})]),_:1},8,["onClick"])]),_:1})]),_:1})}const yx=Qf(px,[["render",_x]]);const vx=Te()({name:"VCardActions",props:We(),setup(t,e){let{slots:n}=e;return Oc({VBtn:{slim:!0,variant:"text"}}),Le(()=>{var s;return v("div",{class:["v-card-actions",t.class],style:t.style},[(s=n.default)==null?void 0:s.call(n)])}),{}}}),uw=tm("v-card-subtitle"),hw=tm("v-card-title");function Ex(t){return{aspectStyles:b(()=>{const e=Number(t.aspectRatio);return e?{paddingBottom:String(1/e*100)+"%"}:void 0})}}const dw=J({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...We(),...cm()},"VResponsive"),v_=Te()({name:"VResponsive",props:dw(),setup(t,e){let{slots:n}=e;const{aspectStyles:s}=Ex(t),{dimensionStyles:i}=um(t);return Le(()=>{var r;return v("div",{class:["v-responsive",{"v-responsive--inline":t.inline},t.class],style:[i.value,t.style]},[v("div",{class:"v-responsive__sizer",style:s.value},null),(r=n.additional)==null?void 0:r.call(n),n.default&&v("div",{class:["v-responsive__content",t.contentClass]},[n.default()])])}),{}}}),Tx=J({alt:String,cover:Boolean,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...dw(),...We(),...ym()},"VImg"),fw=Te()({name:"VImg",directives:{intersect:cw},props:Tx(),emits:{loadstart:t=>!0,load:t=>!0,error:t=>!0},setup(t,e){let{emit:n,slots:s}=e;const i=pn("VImg"),r=lt(""),o=Se(),a=lt(t.eager?"loading":"idle"),l=lt(),c=lt(),u=b(()=>t.src&&typeof t.src=="object"?{src:t.src.src,srcset:t.srcset||t.src.srcset,lazySrc:t.lazySrc||t.src.lazySrc,aspect:Number(t.aspectRatio||t.src.aspect||0)}:{src:t.src,srcset:t.srcset,lazySrc:t.lazySrc,aspect:Number(t.aspectRatio||0)}),h=b(()=>u.value.aspect||l.value/c.value||0);Be(()=>t.src,()=>{d(a.value!=="idle")}),Be(h,(D,j)=>{!D&&j&&o.value&&E(o.value)}),jf(()=>d());function d(D){if(!(t.eager&&D)&&!(Yf&&!D&&!t.eager)){if(a.value="loading",u.value.lazySrc){const j=new Image;j.src=u.value.lazySrc,E(j,null)}u.value.src&&As(()=>{var j;n("loadstart",((j=o.value)==null?void 0:j.currentSrc)||u.value.src),setTimeout(()=>{var ie;if(!i.isUnmounted)if((ie=o.value)!=null&&ie.complete){if(o.value.naturalWidth||m(),a.value==="error")return;h.value||E(o.value,null),a.value==="loading"&&f()}else h.value||E(o.value),g()})})}}function f(){var D;i.isUnmounted||(g(),E(o.value),a.value="loaded",n("load",((D=o.value)==null?void 0:D.currentSrc)||u.value.src))}function m(){var D;i.isUnmounted||(a.value="error",n("error",((D=o.value)==null?void 0:D.currentSrc)||u.value.src))}function g(){const D=o.value;D&&(r.value=D.currentSrc||D.src)}let _=-1;xs(()=>{clearTimeout(_)});function E(D){let j=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const ie=()=>{if(clearTimeout(_),i.isUnmounted)return;const{naturalHeight:B,naturalWidth:Y}=D;B||Y?(l.value=Y,c.value=B):!D.complete&&a.value==="loading"&&j!=null?_=window.setTimeout(ie,j):(D.currentSrc.endsWith(".svg")||D.currentSrc.startsWith("data:image/svg+xml"))&&(l.value=1,c.value=1)};ie()}const w=b(()=>({"v-img__img--cover":t.cover,"v-img__img--contain":!t.cover})),T=()=>{var ie;if(!u.value.src||a.value==="idle")return null;const D=v("img",{class:["v-img__img",w.value],style:{objectPosition:t.position},src:u.value.src,srcset:u.value.srcset,alt:t.alt,crossorigin:t.crossorigin,referrerpolicy:t.referrerpolicy,draggable:t.draggable,sizes:t.sizes,ref:o,onLoad:f,onError:m},null),j=(ie=s.sources)==null?void 0:ie.call(s);return v(Ni,{transition:t.transition,appear:!0},{default:()=>[Ss(j?v("picture",{class:"v-img__picture"},[j,D]):D,[[Gf,a.value==="loaded"]])]})},C=()=>v(Ni,{transition:t.transition},{default:()=>[u.value.lazySrc&&a.value!=="loaded"&&v("img",{class:["v-img__img","v-img__img--preload",w.value],style:{objectPosition:t.position},src:u.value.lazySrc,alt:t.alt,crossorigin:t.crossorigin,referrerpolicy:t.referrerpolicy,draggable:t.draggable},null)]}),O=()=>s.placeholder?v(Ni,{transition:t.transition,appear:!0},{default:()=>[(a.value==="loading"||a.value==="error"&&!s.error)&&v("div",{class:"v-img__placeholder"},[s.placeholder()])]}):null,A=()=>s.error?v(Ni,{transition:t.transition,appear:!0},{default:()=>[a.value==="error"&&v("div",{class:"v-img__error"},[s.error()])]}):null,z=()=>t.gradient?v("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${t.gradient})`}},null):null,x=lt(!1);{const D=Be(h,j=>{j&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{x.value=!0})}),D())})}return Le(()=>{const D=v_.filterProps(t);return Ss(v(v_,Vt({class:["v-img",{"v-img--booting":!x.value},t.class],style:[{width:Me(t.width==="auto"?l.value:t.width)},t.style]},D,{aspectRatio:h.value,"aria-label":t.alt,role:t.alt?"img":void 0}),{additional:()=>v(Ke,null,[v(T,null,null),v(C,null,null),v(z,null,null),v(O,null,null),v(A,null,null)]),default:s.default}),[[Go("intersect"),{handler:d,options:t.options},null,{once:!0}]])}),{currentSrc:r,image:o,state:a,naturalWidth:l,naturalHeight:c}}}),Ix=J({start:Boolean,end:Boolean,icon:dt,image:String,text:String,...We(),..._i(),...yr(),...Lc(),...ss(),...Vn(),...Vc({variant:"flat"})},"VAvatar"),E_=Te()({name:"VAvatar",props:Ix(),setup(t,e){let{slots:n}=e;const{themeClasses:s}=Vs(t),{colorClasses:i,colorStyles:r,variantClasses:o}=lm(t),{densityClasses:a}=_r(t),{roundedClasses:l}=vr(t),{sizeClasses:c,sizeStyles:u}=Fc(t);return Le(()=>v(t.tag,{class:["v-avatar",{"v-avatar--start":t.start,"v-avatar--end":t.end},s.value,i.value,a.value,l.value,c.value,o.value,t.class],style:[r.value,u.value,t.style]},{default:()=>{var h;return[t.image?v(fw,{key:"image",src:t.image,alt:"",cover:!0},null):t.icon?v(zn,{key:"icon",icon:t.icon},null):((h=n.default)==null?void 0:h.call(n))??t.text,am(!1,"v-avatar")]}})),{}}}),wx=J({appendAvatar:String,appendIcon:dt,prependAvatar:String,prependIcon:dt,subtitle:[String,Number],title:[String,Number],...We(),..._i()},"VCardItem"),Cx=Te()({name:"VCardItem",props:wx(),setup(t,e){let{slots:n}=e;return Le(()=>{var c;const s=!!(t.prependAvatar||t.prependIcon),i=!!(s||n.prepend),r=!!(t.appendAvatar||t.appendIcon),o=!!(r||n.append),a=!!(t.title!=null||n.title),l=!!(t.subtitle!=null||n.subtitle);return v("div",{class:["v-card-item",t.class],style:t.style},[i&&v("div",{key:"prepend",class:"v-card-item__prepend"},[n.prepend?v(ji,{key:"prepend-defaults",disabled:!s,defaults:{VAvatar:{density:t.density,icon:t.prependIcon,image:t.prependAvatar}}},n.prepend):s&&v(E_,{key:"prepend-avatar",density:t.density,icon:t.prependIcon,image:t.prependAvatar},null)]),v("div",{class:"v-card-item__content"},[a&&v(hw,{key:"title"},{default:()=>{var u;return[((u=n.title)==null?void 0:u.call(n))??t.title]}}),l&&v(uw,{key:"subtitle"},{default:()=>{var u;return[((u=n.subtitle)==null?void 0:u.call(n))??t.subtitle]}}),(c=n.default)==null?void 0:c.call(n)]),o&&v("div",{key:"append",class:"v-card-item__append"},[n.append?v(ji,{key:"append-defaults",disabled:!r,defaults:{VAvatar:{density:t.density,icon:t.appendIcon,image:t.appendAvatar}}},n.append):r&&v(E_,{key:"append-avatar",density:t.density,icon:t.appendIcon,image:t.appendAvatar},null)])])}),{}}}),bx=tm("v-card-text"),Ax=J({appendAvatar:String,appendIcon:dt,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:dt,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...nm(),...We(),..._i(),...cm(),...im(),...fm(),...hm(),...NI(),...yr(),...OI(),...ss(),...Vn(),...Vc({variant:"elevated"})},"VCard"),Sx=Te()({name:"VCard",directives:{Ripple:gm},props:Ax(),setup(t,e){let{attrs:n,slots:s}=e;const{themeClasses:i}=Vs(t),{borderClasses:r}=sm(t),{colorClasses:o,colorStyles:a,variantClasses:l}=lm(t),{densityClasses:c}=_r(t),{dimensionStyles:u}=um(t),{elevationClasses:h}=rm(t),{loaderClasses:d}=mm(t),{locationStyles:f}=dm(t),{positionClasses:m}=DI(t),{roundedClasses:g}=vr(t),_=xI(t,n),E=b(()=>t.link!==!1&&_.isLink.value),w=b(()=>!t.disabled&&t.link!==!1&&(t.link||_.isClickable.value));return Le(()=>{const T=E.value?"a":t.tag,C=!!(s.title||t.title!=null),O=!!(s.subtitle||t.subtitle!=null),A=C||O,z=!!(s.append||t.appendAvatar||t.appendIcon),x=!!(s.prepend||t.prependAvatar||t.prependIcon),D=!!(s.image||t.image),j=A||x||z,ie=!!(s.text||t.text!=null);return Ss(v(T,{class:["v-card",{"v-card--disabled":t.disabled,"v-card--flat":t.flat,"v-card--hover":t.hover&&!(t.disabled||t.flat),"v-card--link":w.value},i.value,r.value,o.value,c.value,h.value,d.value,m.value,g.value,l.value,t.class],style:[a.value,u.value,f.value,t.style],href:_.href.value,onClick:w.value&&_.navigate,tabindex:t.disabled?-1:void 0},{default:()=>{var B;return[D&&v("div",{key:"image",class:"v-card__image"},[s.image?v(ji,{key:"image-defaults",disabled:!t.image,defaults:{VImg:{cover:!0,src:t.image}}},s.image):v(fw,{key:"image-img",cover:!0,src:t.image},null)]),v(kI,{name:"v-card",active:!!t.loading,color:typeof t.loading=="boolean"?void 0:t.loading},{default:s.loader}),j&&v(Cx,{key:"item",prependAvatar:t.prependAvatar,prependIcon:t.prependIcon,title:t.title,subtitle:t.subtitle,appendAvatar:t.appendAvatar,appendIcon:t.appendIcon},{default:s.item,prepend:s.prepend,title:s.title,subtitle:s.subtitle,append:s.append}),ie&&v(bx,{key:"text"},{default:()=>{var Y;return[((Y=s.text)==null?void 0:Y.call(s))??t.text]}}),(B=s.default)==null?void 0:B.call(s),s.actions&&v(vx,null,{default:s.actions}),am(w.value,"v-card")]}}),[[Go("ripple"),w.value&&t.ripple]])}),{}}});const mw=Symbol.for("vuetify:selection-control-group"),gw=J({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:dt,trueIcon:dt,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:xc},...We(),..._i(),...Vn()},"SelectionControlGroup"),Rx=J({...gw({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup");Te()({name:"VSelectionControlGroup",props:Rx(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const s=mn(t,"modelValue"),i=ns(),r=b(()=>t.id||`v-selection-control-group-${i}`),o=b(()=>t.name||r.value),a=new Set;return pi(mw,{modelValue:s,forceUpdate:()=>{a.forEach(l=>l())},onForceUpdate:l=>{a.add(l),Af(()=>{a.delete(l)})}}),Oc({[t.defaultsTarget]:{color:Ue(t,"color"),disabled:Ue(t,"disabled"),density:Ue(t,"density"),error:Ue(t,"error"),inline:Ue(t,"inline"),modelValue:s,multiple:b(()=>!!t.multiple||t.multiple==null&&Array.isArray(s.value)),name:o,falseIcon:Ue(t,"falseIcon"),trueIcon:Ue(t,"trueIcon"),readonly:Ue(t,"readonly"),ripple:Ue(t,"ripple"),type:Ue(t,"type"),valueComparator:Ue(t,"valueComparator")}}),Le(()=>{var l;return v("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":t.inline},t.class],style:t.style,role:t.type==="radio"?"radiogroup":void 0},[(l=n.default)==null?void 0:l.call(n)])}),{}}});const pw=J({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...We(),...gw()},"VSelectionControl");function Px(t){const e=Ot(mw,void 0),{densityClasses:n}=_r(t),s=mn(t,"modelValue"),i=b(()=>t.trueValue!==void 0?t.trueValue:t.value!==void 0?t.value:!0),r=b(()=>t.falseValue!==void 0?t.falseValue:!1),o=b(()=>!!t.multiple||t.multiple==null&&Array.isArray(s.value)),a=b({get(){const f=e?e.modelValue.value:s.value;return o.value?vs(f).some(m=>t.valueComparator(m,i.value)):t.valueComparator(f,i.value)},set(f){if(t.readonly)return;const m=f?i.value:r.value;let g=m;o.value&&(g=f?[...vs(s.value),m]:vs(s.value).filter(_=>!t.valueComparator(_,i.value))),e?e.modelValue.value=g:s.value=g}}),{textColorClasses:l,textColorStyles:c}=ri(b(()=>{if(!(t.error||t.disabled))return a.value?t.color:t.baseColor})),{backgroundColorClasses:u,backgroundColorStyles:h}=El(b(()=>a.value&&!t.error&&!t.disabled?t.color:void 0)),d=b(()=>a.value?t.trueIcon:t.falseIcon);return{group:e,densityClasses:n,trueValue:i,falseValue:r,model:a,textColorClasses:l,textColorStyles:c,backgroundColorClasses:u,backgroundColorStyles:h,icon:d}}const T_=Te()({name:"VSelectionControl",directives:{Ripple:gm},inheritAttrs:!1,props:pw(),emits:{"update:modelValue":t=>!0},setup(t,e){let{attrs:n,slots:s}=e;const{group:i,densityClasses:r,icon:o,model:a,textColorClasses:l,textColorStyles:c,backgroundColorClasses:u,backgroundColorStyles:h,trueValue:d}=Px(t),f=ns(),m=b(()=>t.id||`input-${f}`),g=lt(!1),_=lt(!1),E=Se();i==null||i.onForceUpdate(()=>{E.value&&(E.value.checked=a.value)});function w(O){g.value=!0,TN(O.target,":focus-visible")!==!1&&(_.value=!0)}function T(){g.value=!1,_.value=!1}function C(O){t.readonly&&i&&As(()=>i.forceUpdate()),a.value=O.target.checked}return Le(()=>{var D,j;const O=s.label?s.label({label:t.label,props:{for:m.value}}):t.label,[A,z]=Jf(n),x=v("input",Vt({ref:E,checked:a.value,disabled:!!(t.readonly||t.disabled),id:m.value,onBlur:T,onFocus:w,onInput:C,"aria-disabled":!!(t.readonly||t.disabled),type:t.type,value:d.value,name:t.name,"aria-checked":t.type==="checkbox"?a.value:void 0},z),null);return v("div",Vt({class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":t.disabled,"v-selection-control--error":t.error,"v-selection-control--focused":g.value,"v-selection-control--focus-visible":_.value,"v-selection-control--inline":t.inline},r.value,t.class]},A,{style:t.style}),[v("div",{class:["v-selection-control__wrapper",l.value],style:c.value},[(D=s.default)==null?void 0:D.call(s,{backgroundColorClasses:u,backgroundColorStyles:h}),Ss(v("div",{class:["v-selection-control__input"]},[((j=s.input)==null?void 0:j.call(s,{model:a,textColorClasses:l,textColorStyles:c,backgroundColorClasses:u,backgroundColorStyles:h,inputNode:x,icon:o.value,props:{onFocus:w,onBlur:T,id:m.value}}))??v(Ke,null,[o.value&&v(zn,{key:"icon",icon:o.value},null),x])]),[[Go("ripple"),t.ripple&&[!t.disabled&&!t.readonly,null,["center","circle"]]]])]),O&&v(sw,{for:m.value,clickable:!0,onClick:ie=>ie.stopPropagation()},{default:()=>[O]})])}),{isFocused:g,input:E}}}),_w=J({indeterminate:Boolean,indeterminateIcon:{type:dt,default:"$checkboxIndeterminate"},...pw({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),I_=Te()({name:"VCheckboxBtn",props:_w(),emits:{"update:modelValue":t=>!0,"update:indeterminate":t=>!0},setup(t,e){let{slots:n}=e;const s=mn(t,"indeterminate"),i=mn(t,"modelValue");function r(l){s.value&&(s.value=!1)}const o=b(()=>s.value?t.indeterminateIcon:t.falseIcon),a=b(()=>s.value?t.indeterminateIcon:t.trueIcon);return Le(()=>{const l=Xf(T_.filterProps(t),["modelValue"]);return v(T_,Vt(l,{modelValue:i.value,"onUpdate:modelValue":[c=>i.value=c,r],class:["v-checkbox-btn",t.class],style:t.style,type:"checkbox",falseIcon:o.value,trueIcon:a.value,"aria-checked":s.value?"mixed":void 0}),n)}),{}}}),kx=J({...Em(),...Xf(_w(),["inline"])},"VCheckbox"),Nx=Te()({name:"VCheckbox",inheritAttrs:!1,props:kx(),emits:{"update:modelValue":t=>!0,"update:focused":t=>!0},setup(t,e){let{attrs:n,slots:s}=e;const i=mn(t,"modelValue"),{isFocused:r,focus:o,blur:a}=vm(t),l=ns(),c=b(()=>t.id||`checkbox-${l}`);return Le(()=>{const[u,h]=Jf(n),d=wl.filterProps(t),f=I_.filterProps(t);return v(wl,Vt({class:["v-checkbox",t.class]},u,d,{modelValue:i.value,"onUpdate:modelValue":m=>i.value=m,id:c.value,focused:r.value,style:t.style}),{...s,default:m=>{let{id:g,messagesId:_,isDisabled:E,isReadonly:w}=m;return v(I_,Vt(f,{id:g.value,"aria-describedby":_.value,disabled:E.value,readonly:w.value},h,{modelValue:i.value,"onUpdate:modelValue":T=>i.value=T,onFocus:o,onBlur:a}),s)}})}),{}}}),Dx={name:"ToDoList",data(){return{oTodos:[]}},firestore:{oTodos:wh},methods:{fnRemoveTodo(t){LP(Eh(Ih,"vuefire_todo",t))},fnCheckboxChange(t){const e=t.id;MP(Eh(Ih,"vuefire_todo",e),{b_completed:t.b_completed})}}};function xx(t,e,n,s,i,r){return ml(!0),E1(Ke,null,e1(this.oTodos,o=>(ml(),zf(Hh,{key:o.id,class:yo(["list-group-item ma-1",{"list-group-item-success":o.b_completed}])},{default:Nt(()=>[v(Ro,{cols:"12",sm:"8"},{default:Nt(()=>[v(Hh,{class:"d-flex align-center ma-n7"},{default:Nt(()=>[v(Nx,{onChange:a=>r.fnCheckboxChange(o),class:"mt-5 flex-grow-0 flex-shrink-0",modelValue:o.b_completed,"onUpdate:modelValue":a=>o.b_completed=a,color:"lime-accent-2"},null,8,["onChange","modelValue","onUpdate:modelValue"]),Xo("p",{class:yo(["list",{"todo-done":o.b_completed}])},_u(o.b_completed?"(완료)":"")+" "+_u(o.todo_title),3)]),_:2},1024)]),_:2},1024),v(Ro,{sm:"4",class:"d-flex justify-end align-center pa-1"},{default:Nt(()=>[v(uw,{class:"list-date"},{default:Nt(()=>[gl(_u(o.timeStamp),1)]),_:2},1024),v(WI,{"min-width":"0",block:"",class:"text-caption flex-grow-0",variant:"outlined",size:"small",rounded:"pill",color:"lime-accent-2",onClick:a=>r.fnRemoveTodo(o.id)},{default:Nt(()=>[gl("삭제 "),v(zn,{end:"",icon:"mdi-trash-can-outline"})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["class"]))),128)}const Ox=Qf(Dx,[["render",xx],["__scopeId","data-v-42c13e6b"]]);const Vx={name:"App",components:{InputToDo:yx,ToDoList:Ox}},Mx=t=>(Nk("data-v-6958375d"),t=t(),Dk(),t),Lx=Mx(()=>Xo("span",null,"To Do List",-1)),Fx={class:"card-body"};function Ux(t,e,n,s,i,r){const o=up("InputToDo"),a=up("ToDoList");return ml(),zf(Ro,{class:"mx-auto",cols:"12",md:"8"},{default:Nt(()=>[v(Sx,{class:"pa-sm-15 pa-6",color:"grey-darken-3",rounded:"xl"},{default:Nt(()=>[v(hw,{class:"title text-h5 text-sm-h4 mt-8 mb-12 mt-sm-6 mb-sm-16"},{default:Nt(()=>[v(zn,{start:"",icon:"mdi-format-list-checks",color:"lime-accent-1"}),Lx]),_:1}),Xo("div",Fx,[v(o),v(a)])]),_:1})]),_:1})}const Bx=Qf(Vx,[["render",Ux],["__scopeId","data-v-6958375d"]]);const $x="modulepreload",jx=function(t){return"/ToDoList/"+t},w_={},Wx=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=jx(r),r in w_)return;w_[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":$x,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})};async function Hx(){(await Wx(()=>import("./webfontloader-523643f5.js").then(e=>e.w),[])).load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}const zh={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function zx(t,e){const n=[];let s=[];const i=yw(t),r=vw(t),o=(i.getDay()-zh[e.slice(-2).toUpperCase()]+7)%7,a=(r.getDay()-zh[e.slice(-2).toUpperCase()]+7)%7;for(let l=0;l<o;l++){const c=new Date(i);c.setDate(c.getDate()-(o-l)),s.push(c)}for(let l=1;l<=r.getDate();l++){const c=new Date(t.getFullYear(),t.getMonth(),l);s.push(c),s.length===7&&(n.push(s),s=[])}for(let l=1;l<7-a;l++){const c=new Date(r);c.setDate(c.getDate()+l),s.push(c)}return s.length>0&&n.push(s),n}function qx(t){const e=new Date(t);for(;e.getDay()!==0;)e.setDate(e.getDate()-1);return e}function Kx(t){const e=new Date(t);for(;e.getDay()!==6;)e.setDate(e.getDate()+1);return e}function yw(t){return new Date(t.getFullYear(),t.getMonth(),1)}function vw(t){return new Date(t.getFullYear(),t.getMonth()+1,0)}function Gx(t){const e=t.split("-").map(Number);return new Date(e[0],e[1]-1,e[2])}const Qx=/^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;function Ew(t){if(t==null)return new Date;if(t instanceof Date)return t;if(typeof t=="string"){let e;if(Qx.test(t))return Gx(t);if(e=Date.parse(t),!isNaN(e))return new Date(e)}return null}const C_=new Date(2e3,0,2);function Yx(t){const e=zh[t.slice(-2).toUpperCase()];return uI(7).map(n=>{const s=new Date(C_);s.setDate(C_.getDate()+e+n);const i=new Intl.DateTimeFormat(t,{weekday:"short"}).format(s);return i.charAt(0).toUpperCase()+i.slice(1)})}function Xx(t,e,n,s){const i=Ew(t)??new Date,r=s==null?void 0:s[e];if(typeof r=="function")return r(i,e,n);let o={};switch(e){case"fullDateWithWeekday":o={weekday:"long",day:"numeric",month:"long",year:"numeric"};break;case"hours12h":o={hour:"numeric",hour12:!0};break;case"normalDateWithWeekday":o={weekday:"short",day:"numeric",month:"short"};break;case"keyboardDate":o={day:"2-digit",month:"2-digit",year:"numeric"};break;case"monthAndDate":o={month:"long",day:"numeric"};break;case"monthAndYear":o={month:"long",year:"numeric"};break;case"month":o={month:"long"};break;case"monthShort":o={month:"short"};break;case"dayOfMonth":o={day:"numeric"};break;case"shortDate":o={year:"2-digit",month:"numeric",day:"numeric"};break;case"weekdayShort":o={weekday:"short"};break;case"year":o={year:"numeric"};break;default:o=r??{timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(n,o).format(i)}function Jx(t,e){const n=t.toJsDate(e),s=n.getFullYear(),i=Hp(String(n.getMonth()+1),2,"0"),r=Hp(String(n.getDate()),2,"0");return`${s}-${i}-${r}`}function Zx(t){const[e,n,s]=t.split("-").map(Number);return new Date(e,n-1,s)}function eO(t,e){const n=new Date(t);return n.setMinutes(n.getMinutes()+e),n}function tO(t,e){const n=new Date(t);return n.setHours(n.getHours()+e),n}function nO(t,e){const n=new Date(t);return n.setDate(n.getDate()+e),n}function sO(t,e){const n=new Date(t);return n.setDate(n.getDate()+e*7),n}function iO(t,e){const n=new Date(t);return n.setMonth(n.getMonth()+e),n}function rO(t){return t.getFullYear()}function oO(t){return t.getMonth()}function aO(t){return new Date(t.getFullYear(),t.getMonth()+1,1)}function lO(t){return t.getHours()}function cO(t){return t.getMinutes()}function uO(t){return new Date(t.getFullYear(),0,1)}function hO(t){return new Date(t.getFullYear(),11,31)}function dO(t,e){return qh(t,e[0])&&mO(t,e[1])}function fO(t){const e=new Date(t);return e instanceof Date&&!isNaN(e.getTime())}function qh(t,e){return t.getTime()>e.getTime()}function mO(t,e){return t.getTime()<e.getTime()}function b_(t,e){return t.getTime()===e.getTime()}function gO(t,e){return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function pO(t,e){return t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function _O(t,e,n){const s=new Date(t),i=new Date(e);return n==="month"?s.getMonth()-i.getMonth()+(s.getFullYear()-i.getFullYear())*12:Math.floor((s.getTime()-i.getTime())/(1e3*60*60*24))}function yO(t,e){const n=new Date(t);return n.setHours(e),n}function vO(t,e){const n=new Date(t);return n.setMinutes(e),n}function EO(t,e){const n=new Date(t);return n.setMonth(e),n}function TO(t,e){const n=new Date(t);return n.setFullYear(e),n}function IO(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate())}function wO(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),23,59,59,999)}class CO{constructor(e){this.locale=e.locale,this.formats=e.formats}date(e){return Ew(e)}toJsDate(e){return e}toISO(e){return Jx(this,e)}parseISO(e){return Zx(e)}addMinutes(e,n){return eO(e,n)}addHours(e,n){return tO(e,n)}addDays(e,n){return nO(e,n)}addWeeks(e,n){return sO(e,n)}addMonths(e,n){return iO(e,n)}getWeekArray(e){return zx(e,this.locale)}startOfWeek(e){return qx(e)}endOfWeek(e){return Kx(e)}startOfMonth(e){return yw(e)}endOfMonth(e){return vw(e)}format(e,n){return Xx(e,n,this.locale,this.formats)}isEqual(e,n){return b_(e,n)}isValid(e){return fO(e)}isWithinRange(e,n){return dO(e,n)}isAfter(e,n){return qh(e,n)}isBefore(e,n){return!qh(e,n)&&!b_(e,n)}isSameDay(e,n){return gO(e,n)}isSameMonth(e,n){return pO(e,n)}setMinutes(e,n){return vO(e,n)}setHours(e,n){return yO(e,n)}setMonth(e,n){return EO(e,n)}setYear(e,n){return TO(e,n)}getDiff(e,n,s){return _O(e,n,s)}getWeekdays(){return Yx(this.locale)}getYear(e){return rO(e)}getMonth(e){return oO(e)}getNextMonth(e){return aO(e)}getHours(e){return lO(e)}getMinutes(e){return cO(e)}startOfDay(e){return IO(e)}endOfDay(e){return wO(e)}startOfYear(e){return uO(e)}endOfYear(e){return hO(e)}}const bO=Symbol.for("vuetify:date-options"),A_=Symbol.for("vuetify:date-adapter");function AO(t,e){const n=Jt({adapter:CO,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"cs-CZ",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},t);return{options:n,instance:SO(n,e)}}function SO(t,e){const n=Ds(typeof t.adapter=="function"?new t.adapter({locale:t.locale[e.current.value]??e.current.value,formats:t.formats}):t.adapter);return Be(e.current,s=>{n.locale=t.locale[s]??s??n.locale}),n}function Tw(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:e,...n}=t,s=Jt(e,n),{aliases:i={},components:r={},directives:o={}}=s,a=GN(s.defaults),l=BD(s.display,s.ssr),c=tD(s.theme),u=mD(s.icons),h=bD(s.locale),d=AO(s.date,h);return{install:m=>{for(const g in o)m.directive(g,o[g]);for(const g in r)m.component(g,r[g]);for(const g in i)m.component(g,ea({...i[g],name:g,aliasName:i[g].name}));if(c.install(m),m.provide(ir,a),m.provide(d_,l),m.provide(vl,c),m.provide($h,u),m.provide(Tl,h),m.provide(bO,d.options),m.provide(A_,d.instance),Ht&&s.ssr)if(m.$nuxt)m.$nuxt.hook("app:suspense:resolve",()=>{l.update()});else{const{mount:g}=m;m.mount=function(){const _=g(...arguments);return As(()=>l.update()),m.mount=g,_}}ns.reset(),m.mixin({computed:{$vuetify(){return Ds({defaults:bi.call(this,ir),display:bi.call(this,d_),theme:bi.call(this,vl),icons:bi.call(this,$h),locale:bi.call(this,Tl),date:bi.call(this,A_)})}}})},defaults:a,display:l,theme:c,icons:u,locale:h,date:d}}const RO="3.4.10";Tw.version=RO;function bi(t){var s,i;const e=this.$,n=((s=e.parent)==null?void 0:s.provides)??((i=e.vnode.appContext)==null?void 0:i.provides);if(n&&t in n)return n[t]}const PO=Tw({theme:{themes:{light:{colors:{primary:"#1867C0",secondary:"#5CBBF6"}}}},defaults:{VBtn:{variant:"plain"}}});function Iw(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function ww(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kO=ww,Cw=new lr("auth","Firebase",ww());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl=new Do("@firebase/auth");function NO(t,...e){Cl.logLevel<=le.WARN&&Cl.warn(`Auth (${cr}): ${t}`,...e)}function ja(t,...e){Cl.logLevel<=le.ERROR&&Cl.error(`Auth (${cr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(t,...e){throw Tm(t,...e)}function bw(t,...e){return Tm(t,...e)}function DO(t,e,n){const s=Object.assign(Object.assign({},kO()),{[e]:n});return new lr("auth","Firebase",s).create(e,{appName:t.name})}function Tm(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Cw.create(t,...e)}function Ie(t,e,...n){if(!t)throw Tm(e,...n)}function Qr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ja(e),new Error(e)}function bl(t,e){t||Qr(e)}function xO(){return R_()==="http:"||R_()==="https:"}function R_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xO()||hC()||"connection"in navigator)?navigator.onLine:!0}function VO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,n){this.shortDelay=e,this.longDelay=n,bl(n>e,"Short delay should be less than long delay!"),this.isMobile=gd()||Ny()}get(){return OO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MO(t,e){bl(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FO=new ta(3e4,6e4);function Sw(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $c(t,e,n,s,i={}){return Rw(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=pd(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Aw.fetch()(Pw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Rw(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},LO),e);try{const i=new UO(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Sa(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Sa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Sa(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw DO(t,u,c);S_(t,u)}}catch(i){if(i instanceof Xn)throw i;S_(t,"network-request-failed",{message:String(i)})}}function Pw(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?MO(t.config,i):`${t.config.apiScheme}://${i}`}class UO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(bw(this.auth,"network-request-failed")),FO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Sa(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=bw(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BO(t,e){return $c(t,"POST","/v1/accounts:delete",e)}async function $O(t,e){return $c(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jO(t,e=!1){const n=Mt(t),s=await n.getIdToken(e),i=kw(s);Ie(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Yr(Du(i.auth_time)),issuedAtTime:Yr(Du(i.iat)),expirationTime:Yr(Du(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Du(t){return Number(t)*1e3}function kw(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ja("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ha(n);return i?JSON.parse(i):(ja("Failed to decode base64 JWT payload"),null)}catch(i){return ja("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function WO(t){const e=kw(t);return Ie(e,"internal-error"),Ie(typeof e.exp<"u","internal-error"),Ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kh(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Xn&&HO(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function HO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yr(this.lastLoginAt),this.creationTime=Yr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Al(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Kh(t,$O(n,{idToken:s}));Ie(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?GO(r.providerUserInfo):[],a=KO(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Nw(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function qO(t){const e=Mt(t);await Al(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function KO(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function GO(t){return t.map(e=>{var{providerId:n}=e,s=Iw(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QO(t,e){const n=await Rw(t,{},async()=>{const s=pd({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Pw(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Aw.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function YO(t,e){return $c(t,"POST","/v2/accounts:revokeToken",Sw(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ie(e.idToken,"internal-error"),Ie(typeof e.idToken<"u","internal-error"),Ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):WO(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Ie(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await QO(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Po;return s&&(Ie(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(Ie(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(Ie(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Po,this.toJSON())}_performRefresh(){return Qr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(t,e){Ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Wi{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Iw(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Nw(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Kh(this,this.stsTokenManager.getToken(this.auth,e));return Ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jO(this,e)}reload(){return qO(this)}_assign(e){this!==e&&(Ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Wi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Al(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Kh(this,BO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:T,emailVerified:C,isAnonymous:O,providerData:A,stsTokenManager:z}=n;Ie(T&&z,e,"internal-error");const x=Po.fromJSON(this.name,z);Ie(typeof T=="string",e,"internal-error"),os(h,e.name),os(d,e.name),Ie(typeof C=="boolean",e,"internal-error"),Ie(typeof O=="boolean",e,"internal-error"),os(f,e.name),os(m,e.name),os(g,e.name),os(_,e.name),os(E,e.name),os(w,e.name);const D=new Wi({uid:T,auth:e,email:d,emailVerified:C,displayName:h,isAnonymous:O,photoURL:m,phoneNumber:f,tenantId:g,stsTokenManager:x,createdAt:E,lastLoginAt:w});return A&&Array.isArray(A)&&(D.providerData=A.map(j=>Object.assign({},j))),_&&(D._redirectEventId=_),D}static async _fromIdTokenResponse(e,n,s=!1){const i=new Po;i.updateFromServerResponse(n);const r=new Wi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Al(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_=new Map;function Gs(t){bl(t instanceof Function,"Expected a class definition");let e=P_.get(t);return e?(bl(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,P_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Dw.type="NONE";const k_=Dw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(t,e,n){return`firebase:${t}:${e}:${n}`}class Hi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=xu(this.userKey,i.apiKey,r),this.fullPersistenceKey=xu("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Wi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Hi(Gs(k_),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Gs(k_);const o=xu(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Wi._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Hi(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Hi(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(eV(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(XO(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nV(e))return"Blackberry";if(sV(e))return"Webos";if(JO(e))return"Safari";if((e.includes("chrome/")||ZO(e))&&!e.includes("edge/"))return"Chrome";if(tV(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function XO(t=kn()){return/firefox\//i.test(t)}function JO(t=kn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ZO(t=kn()){return/crios\//i.test(t)}function eV(t=kn()){return/iemobile/i.test(t)}function tV(t=kn()){return/android/i.test(t)}function nV(t=kn()){return/blackberry/i.test(t)}function sV(t=kn()){return/webos/i.test(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xw(t,e=[]){let n;switch(t){case"Browser":n=N_(kn());break;case"Worker":n=`${N_(kn())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${cr}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iV{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rV(t,e={}){return $c(t,"GET","/v2/passwordPolicy",Sw(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oV=6;class aV{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:oV,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lV{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new D_(this),this.idTokenSubscription=new D_(this),this.beforeStateQueue=new iV(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Gs(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Hi.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Al(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=VO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Mt(e):null;return n&&Ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Gs(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rV(this),n=new aV(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new lr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await YO(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Gs(e)||this._popupRedirectResolver;Ie(n,this,"argument-error"),this.redirectPersistenceManager=await Hi.create(this,[Gs(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ie(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&NO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function cV(t){return Mt(t)}class D_{constructor(e){this.auth=e,this.observer=null,this.addObserver=vC(n=>this.observer=n)}get next(){return Ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function uV(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Gs);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}new ta(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ta(2e3,1e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ta(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ta(5e3,15e3);var x_="@firebase/auth",O_="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dV(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function fV(t){Nn(new dn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;Ie(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xw(t)},c=new lV(s,i,r,l);return uV(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Nn(new dn("auth-internal",e=>{const n=cV(e.getProvider("auth").getImmediate());return(s=>new hV(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),zt(x_,O_,dV(t)),zt(x_,O_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mV=5*60;cC("authIdTokenMaxAge");fV("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gV=new Map,pV={activated:!1,tokenObservers:[]};function gn(t){return gV.get(t)||Object.assign({},pV)}const V_={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _V{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new eo,this.pending.promise.catch(n=>{}),await yV(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new eo,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function yV(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vV={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Sl=new lr("appCheck","AppCheck",vV);function Ow(t){if(!gn(t).activated)throw Sl.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EV="firebase-app-check-database",TV=1,Gh="firebase-app-check-store";let Ra=null;function IV(){return Ra||(Ra=new Promise((t,e)=>{try{const n=indexedDB.open(EV,TV);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(Sl.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(Gh,{keyPath:"compositeKey"})}}}catch(n){e(Sl.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Ra)}function wV(t,e){return CV(bV(t),e)}async function CV(t,e){const s=(await IV()).transaction(Gh,"readwrite"),r=s.objectStore(Gh).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},s.onerror=l=>{var c;a(Sl.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function bV(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh=new Do("@firebase/app-check");function M_(t,e){return xy()?wV(t,e).catch(n=>{Qh.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AV={error:"UNKNOWN_ERROR"};function SV(t){return Ul.encodeString(JSON.stringify(t),!1)}async function Yh(t,e=!1){const n=t.app;Ow(n);const s=gn(n);let i=s.token,r;if(i&&!$r(i)&&(s.token=void 0,i=void 0),!i){const l=await s.cachedTokenPromise;l&&($r(l)?i=l:await M_(n,void 0))}if(!e&&i&&$r(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await gn(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Qh.warn(l.message):Qh.error(l),r=l}let a;return i?r?$r(i)?a={token:i.token,internalError:r}:a=F_(r):(a={token:i.token},s.token=i,await M_(n,i)):a=F_(r),o&&NV(n,a),a}async function RV(t){const e=t.app;Ow(e);const{provider:n}=gn(e);{const{token:s}=await n.getToken();return{token:s}}}function PV(t,e,n,s){const{app:i}=t,r=gn(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&$r(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),L_(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>L_(t))}function Vw(t,e){const n=gn(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function L_(t){const{app:e}=t,n=gn(e);let s=n.tokenRefresher;s||(s=kV(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function kV(t){const{app:e}=t;return new _V(async()=>{const n=gn(e);let s;if(n.token?s=await Yh(t,!0):s=await Yh(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=gn(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},V_.RETRIAL_MIN_WAIT,V_.RETRIAL_MAX_WAIT)}function NV(t,e){const n=gn(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function $r(t){return t.expireTimeMillis-Date.now()>0}function F_(t){return{token:SV(AV),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DV{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=gn(this.app);for(const n of e)Vw(this.app,n.next);return Promise.resolve()}}function xV(t,e){return new DV(t,e)}function OV(t){return{getToken:e=>Yh(t,e),getLimitedUseToken:()=>RV(t),addTokenListener:e=>PV(t,"INTERNAL",e),removeTokenListener:e=>Vw(t.app,e)}}const VV="@firebase/app-check",MV="0.8.1",LV="app-check",U_="app-check-internal";function FV(){Nn(new dn(LV,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return xV(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(U_).initialize()})),Nn(new dn(U_,t=>{const e=t.getProvider("app-check").getImmediate();return OV(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),zt(VV,MV)}FV();const Mw=Symbol("firebaseApp");function Im(t){return Jo()&&Ot(Mw,null)||Fy(t)}const An=()=>{};function wm(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function UV(t,e,n){const s=(""+e).split("."),i=s.pop(),r=s.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(i),1,n):r[i]=n}function yi(t){return!!t&&typeof t=="object"}const BV=Object.prototype;function $V(t){return yi(t)&&Object.getPrototypeOf(t)===BV}function Cm(t){return yi(t)&&t.type==="document"}function jV(t){return yi(t)&&t.type==="collection"}function WV(t){return Cm(t)||jV(t)}function HV(t){return yi(t)&&t.type==="query"}function zV(t){return yi(t)&&"ref"in t}function qV(t){return yi(t)&&typeof t.bucket=="string"}function KV(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const GV=Symbol.for("v-scx");function QV(){return!!Ot(GV,0)}const Pa=new WeakMap;function YV(t,e){if(!Pa.has(t)){const n=bf(!0);Pa.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),Pa.delete(t)}}return Pa.get(t)}const B_="@firebase/database",$_="1.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lw="";function XV(t){Lw=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JV{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ot(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:to(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZV{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Jn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new JV(e)}}catch{}return new ZV},Qs=Fw("localStorage"),Xh=Fw("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=new Do("@firebase/database"),eM=function(){let t=1;return function(){return t++}}(),Uw=function(t){const e=wC(t),n=new yC;n.update(e);const s=n.digest();return Ul.encodeByteArray(s)},na=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=na.apply(null,s):typeof s=="object"?e+=ot(s):e+=s,e+=" "}return e};let ei=null,j_=!0;const tM=function(t,e){F(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(zi.logLevel=le.VERBOSE,ei=zi.log.bind(zi),e&&Xh.set("logging_enabled",!0)):typeof t=="function"?ei=t:(ei=null,Xh.remove("logging_enabled"))},pt=function(...t){if(j_===!0&&(j_=!1,ei===null&&Xh.get("logging_enabled")===!0&&tM(!0)),ei){const e=na.apply(null,t);ei(e)}},sa=function(t){return function(...e){pt(t,...e)}},Jh=function(...t){const e="FIREBASE INTERNAL ERROR: "+na(...t);zi.error(e)},oi=function(...t){const e=`FIREBASE FATAL ERROR: ${na(...t)}`;throw zi.error(e),new Error(e)},Kt=function(...t){const e="FIREBASE WARNING: "+na(...t);zi.warn(e)},nM=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Kt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Bw=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},sM=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},rr="[MIN_NAME]",ai="[MAX_NAME]",Er=function(t,e){if(t===e)return 0;if(t===rr||e===ai)return-1;if(e===rr||t===ai)return 1;{const n=W_(t),s=W_(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},iM=function(t,e){return t===e?0:t<e?-1:1},kr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ot(e))},bm=function(t){if(typeof t!="object"||t===null)return ot(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ot(e[s]),n+=":",n+=bm(t[e[s]]);return n+="}",n},$w=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function nn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const jw=function(t){F(!Bw(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},rM=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},oM=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},aM=new RegExp("^-?(0*)\\d{1,10}$"),lM=-2147483648,cM=2147483647,W_=function(t){if(aM.test(t)){const e=Number(t);if(e>=lM&&e<=cM)return e}return null},ia=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Kt("Exception was thrown by user callback.",n),e},Math.floor(0))}},uM=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Xr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hM{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Kt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dM{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(pt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Kt(e)}}class Zh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Zh.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am="5",Ww="v",Hw="s",zw="r",qw="f",Kw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Gw="ls",Qw="p",ed="ac",Yw="websocket",Xw="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fM{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Qs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Qs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function mM(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Jw(t,e,n){F(typeof e=="string","typeof type must == string"),F(typeof n=="object","typeof params must == object");let s;if(e===Yw)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Xw)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);mM(t)&&(n.ns=t.namespace);const i=[];return nn(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gM{constructor(){this.counters_={}}incrementCounter(e,n=1){Jn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return tC(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou={},Vu={};function Sm(t){const e=t.toString();return Ou[e]||(Ou[e]=new gM),Ou[e]}function pM(t,e){const n=t.toString();return Vu[n]||(Vu[n]=e()),Vu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _M{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&ia(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_="start",yM="close",vM="pLPCommand",EM="pRTLPCB",Zw="id",e0="pw",t0="ser",TM="cb",IM="seg",wM="ts",CM="d",bM="dframe",n0=1870,s0=30,AM=n0-s0,SM=25e3,RM=3e4;class Di{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=sa(e),this.stats_=Sm(n),this.urlFn=l=>(this.appCheckToken&&(l[ed]=this.appCheckToken),Jw(n,Xw,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new _M(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(RM)),sM(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Rm((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===H_)this.id=a,this.password=l;else if(o===yM)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[H_]="t",s[t0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[TM]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Ww]=Am,this.transportSessionId&&(s[Hw]=this.transportSessionId),this.lastSessionId&&(s[Gw]=this.lastSessionId),this.applicationId&&(s[Qw]=this.applicationId),this.appCheckToken&&(s[ed]=this.appCheckToken),typeof location<"u"&&location.hostname&&Kw.test(location.hostname)&&(s[zw]=qw);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Di.forceAllow_=!0}static forceDisallow(){Di.forceDisallow_=!0}static isAvailable(){return Di.forceAllow_?!0:!Di.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!rM()&&!oM()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ot(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ry(n),i=$w(s,AM);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[bM]="t",s[Zw]=e,s[e0]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ot(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Rm{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=eM(),window[vM+this.uniqueCallbackIdentifier]=e,window[EM+this.uniqueCallbackIdentifier]=n,this.myIFrame=Rm.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){pt("frame writing exception"),a.stack&&pt(a.stack),pt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||pt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Zw]=this.myID,e[e0]=this.myPW,e[t0]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+s0+s.length<=n0;){const o=this.pendingSegs.shift();s=s+"&"+IM+i+"="+o.seg+"&"+wM+i+"="+o.ts+"&"+CM+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(SM)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{pt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PM=16384,kM=45e3;let Rl=null;typeof MozWebSocket<"u"?Rl=MozWebSocket:typeof WebSocket<"u"&&(Rl=WebSocket);class on{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=sa(this.connId),this.stats_=Sm(n),this.connURL=on.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Ww]=Am,typeof location<"u"&&location.hostname&&Kw.test(location.hostname)&&(o[zw]=qw),n&&(o[Hw]=n),s&&(o[Gw]=s),i&&(o[ed]=i),r&&(o[Qw]=r),Jw(e,Yw,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Qs.set("previous_websocket_failure",!0);try{let s;Dy(),this.mySock=new Rl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){on.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Rl!==null&&!on.forceDisallow_}static previouslyFailed(){return Qs.isInMemoryStorage||Qs.get("previous_websocket_failure")===!0}markConnectionHealthy(){Qs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=to(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(F(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ot(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=$w(n,PM);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(kM))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}on.responsesRequiredToBeHealthy=2;on.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Di,on]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=on&&on.isAvailable();let s=n&&!on.previouslyFailed();if(e.webSocketOnly&&(n||Kt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[on];else{const i=this.transports_=[];for(const r of ko.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ko.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ko.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NM=6e4,DM=5e3,xM=10*1024,OM=100*1024,Mu="t",z_="d",VM="s",q_="r",MM="e",K_="o",G_="a",Q_="n",Y_="p",LM="h";class FM{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=sa("c:"+this.id+":"),this.transportManager_=new ko(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Xr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>OM?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>xM?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Mu in e){const n=e[Mu];n===G_?this.upgradeIfSecondaryHealthy_():n===q_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===K_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=kr("t",e),s=kr("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Y_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:G_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Q_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=kr("t",e),s=kr("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=kr(Mu,e);if(z_ in e){const s=e[z_];if(n===LM){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Q_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===VM?this.onConnectionShutdown_(s):n===q_?this.onReset_(s):n===MM?Jh("Server Error: "+s):n===K_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Jh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Am!==s&&Kt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Xr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(NM))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Xr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(DM))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Y_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Qs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e){this.allowedEvents_=e,this.listeners_={},F(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){F(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl extends r0{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!gd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Pl}getInitialEvent(e){return F(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_=32,J_=768;class xe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function be(){return new xe("")}function fe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Rs(t){return t.pieces_.length-t.pieceNum_}function Ne(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new xe(t.pieces_,e)}function o0(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function UM(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function a0(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function l0(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new xe(e,0)}function nt(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof xe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new xe(n,0)}function ue(t){return t.pieceNum_>=t.pieces_.length}function Zt(t,e){const n=fe(t),s=fe(e);if(n===null)return e;if(n===s)return Zt(Ne(t),Ne(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function c0(t,e){if(Rs(t)!==Rs(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function ln(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Rs(t)>Rs(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class BM{constructor(e,n){this.errorPrefix_=n,this.parts_=a0(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Bl(this.parts_[s]);u0(this)}}function $M(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Bl(e),u0(t)}function jM(t){const e=t.parts_.pop();t.byteLength_-=Bl(e),t.parts_.length>0&&(t.byteLength_-=1)}function u0(t){if(t.byteLength_>J_)throw new Error(t.errorPrefix_+"has a key path longer than "+J_+" bytes ("+t.byteLength_+").");if(t.parts_.length>X_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+X_+") or object contains a cycle "+$s(t))}function $s(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm extends r0{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Pm}getInitialEvent(e){return F(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=1e3,WM=60*5*1e3,Z_=30*1e3,HM=1.3,zM=3e4,qM="server_kill",ey=3;class qn extends i0{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=qn.nextPersistentConnectionId_++,this.log_=sa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Nr,this.maxReconnectDelay_=WM,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Dy())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Pm.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Pl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ot(r)),F(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new eo,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),F(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;qn.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Jn(e,"w")){const s=Ki(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Kt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||_C(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Z_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=pC(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ot(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Jh("Unrecognized action received from server: "+ot(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){F(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Nr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Nr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>zM&&(this.reconnectDelay_=Nr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*HM)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+qn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){F(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?pt("getToken() completed but was canceled"):(pt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new FM(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,f=>{Kt(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(qM)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Kt(h),l())}}}interrupt(e){pt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){pt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Xm(this.interruptReasons_)&&(this.reconnectDelay_=Nr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>bm(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new xe(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){pt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ey&&(this.reconnectDelay_=Z_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){pt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ey&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Lw.replace(/\./g,"-")]=1,gd()?e["framework.cordova"]=1:Ny()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Pl.getInstance().currentlyOnline();return Xm(this.interruptReasons_)&&e}}qn.nextPersistentConnectionId_=0;qn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new me(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new me(rr,e),i=new me(rr,n);return this.compare(s,i)!==0}minPost(){return me.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ka;class h0 extends jc{static get __EMPTY_NODE(){return ka}static set __EMPTY_NODE(e){ka=e}compare(e,n){return Er(e.name,n.name)}isDefinedOn(e){throw ar("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return me.MIN}maxPost(){return new me(ai,ka)}makePost(e,n){return F(typeof e=="string","KeyIndex indexValue must always be a string."),new me(e,ka)}toString(){return".key"}}const qi=new h0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class tt{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??tt.RED,this.left=i??xt.EMPTY_NODE,this.right=r??xt.EMPTY_NODE}copy(e,n,s,i,r){return new tt(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return xt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return xt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}tt.RED=!0;tt.BLACK=!1;class KM{copy(e,n,s,i,r){return this}insert(e,n,s){return new tt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class xt{constructor(e,n=xt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new xt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,tt.BLACK,null,null))}remove(e){return new xt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,tt.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Na(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Na(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Na(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Na(this.root_,null,this.comparator_,!0,e)}}xt.EMPTY_NODE=new KM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GM(t,e){return Er(t.name,e.name)}function km(t,e){return Er(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let td;function QM(t){td=t}const d0=function(t){return typeof t=="number"?"number:"+jw(t):"string:"+t},f0=function(t){if(t.isLeafNode()){const e=t.val();F(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Jn(e,".sv"),"Priority must be a string or number.")}else F(t===td||t.isEmpty(),"priority of unexpected type.");F(t===td||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ty;class Ze{constructor(e,n=Ze.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,F(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),f0(this.priorityNode_)}static set __childrenNodeConstructor(e){ty=e}static get __childrenNodeConstructor(){return ty}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ze(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ze.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ue(e)?this:fe(e)===".priority"?this.priorityNode_:Ze.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ze.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=fe(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(F(s!==".priority"||Rs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ze.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ne(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+d0(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=jw(this.value_):e+=this.value_,this.lazyHash_=Uw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ze.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ze.__childrenNodeConstructor?-1:(F(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ze.VALUE_TYPE_ORDER.indexOf(n),r=Ze.VALUE_TYPE_ORDER.indexOf(s);return F(i>=0,"Unknown leaf type: "+n),F(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ze.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let m0,g0;function YM(t){m0=t}function XM(t){g0=t}class JM extends jc{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Er(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return me.MIN}maxPost(){return new me(ai,new Ze("[PRIORITY-POST]",g0))}makePost(e,n){const s=m0(e);return new me(n,new Ze("[PRIORITY-POST]",s))}toString(){return".priority"}}const vt=new JM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZM=Math.log(2);class eL{constructor(e){const n=r=>parseInt(Math.log(r)/ZM,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const kl=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new tt(d,h.node,tt.BLACK,null,null);{const f=parseInt(u/2,10)+l,m=i(l,f),g=i(f+1,c);return h=t[f],d=n?n(h):h,new tt(d,h.node,tt.BLACK,m,g)}},r=function(l){let c=null,u=null,h=t.length;const d=function(m,g){const _=h-m,E=h;h-=m;const w=i(_+1,E),T=t[_],C=n?n(T):T;f(new tt(C,T.node,g,null,w))},f=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const g=l.nextBitIsOne(),_=Math.pow(2,l.count-(m+1));g?d(_,tt.BLACK):(d(_,tt.BLACK),d(_,tt.RED))}return u},o=new eL(t.length),a=r(o);return new xt(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lu;const Ai={};class $n{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return F(Ai&&vt,"ChildrenNode.ts has not been loaded"),Lu=Lu||new $n({".priority":Ai},{".priority":vt}),Lu}get(e){const n=Ki(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof xt?n:null}hasIndex(e){return Jn(this.indexSet_,e.toString())}addIndex(e,n){F(e!==qi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(me.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=kl(s,e.getCompare()):a=Ai;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new $n(u,c)}addToIndexes(e,n){const s=za(this.indexes_,(i,r)=>{const o=Ki(this.indexSet_,r);if(F(o,"Missing index implementation for "+r),i===Ai)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(me.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),kl(a,o.getCompare())}else return Ai;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new me(e.name,a))),l.insert(e,e.node)}});return new $n(s,this.indexSet_)}removeFromIndexes(e,n){const s=za(this.indexes_,i=>{if(i===Ai)return i;{const r=n.get(e.name);return r?i.remove(new me(e.name,r)):i}});return new $n(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dr;class Ee{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&f0(this.priorityNode_),this.children_.isEmpty()&&F(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Dr||(Dr=new Ee(new xt(km),null,$n.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Dr}updatePriority(e){return this.children_.isEmpty()?this:new Ee(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Dr:n}}getChild(e){const n=fe(e);return n===null?this:this.getImmediateChild(n).getChild(Ne(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(F(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new me(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Dr:this.priorityNode_;return new Ee(i,o,r)}}updateChild(e,n){const s=fe(e);if(s===null)return n;{F(fe(e)!==".priority"||Rs(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Ne(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(vt,(o,a)=>{n[o]=a.val(e),s++,r&&Ee.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+d0(this.getPriority().val())+":"),this.forEachChild(vt,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Uw(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new me(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new me(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new me(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,me.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,me.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ra?-1:0}withIndex(e){if(e===qi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Ee(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===qi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(vt),i=n.getIterator(vt);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===qi?null:this.indexMap_.get(e.toString())}}Ee.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class tL extends Ee{constructor(){super(new xt(km),Ee.EMPTY_NODE,$n.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ee.EMPTY_NODE}isEmpty(){return!1}}const ra=new tL;Object.defineProperties(me,{MIN:{value:new me(rr,Ee.EMPTY_NODE)},MAX:{value:new me(ai,ra)}});h0.__EMPTY_NODE=Ee.EMPTY_NODE;Ze.__childrenNodeConstructor=Ee;QM(ra);XM(ra);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nL=!0;function _t(t,e=null){if(t===null)return Ee.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),F(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ze(n,_t(e))}if(!(t instanceof Array)&&nL){const n=[];let s=!1;if(nn(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=_t(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new me(o,l)))}}),n.length===0)return Ee.EMPTY_NODE;const r=kl(n,GM,o=>o.name,km);if(s){const o=kl(n,vt.getCompare());return new Ee(r,_t(e),new $n({".priority":o},{".priority":vt}))}else return new Ee(r,_t(e),$n.Default)}else{let n=Ee.EMPTY_NODE;return nn(t,(s,i)=>{if(Jn(t,s)&&s.substring(0,1)!=="."){const r=_t(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(_t(e))}}YM(_t);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sL extends jc{constructor(e){super(),this.indexPath_=e,F(!ue(e)&&fe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Er(e.name,n.name):r}makePost(e,n){const s=_t(e),i=Ee.EMPTY_NODE.updateChild(this.indexPath_,s);return new me(n,i)}maxPost(){const e=Ee.EMPTY_NODE.updateChild(this.indexPath_,ra);return new me(ai,e)}toString(){return a0(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iL extends jc{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Er(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return me.MIN}maxPost(){return me.MAX}makePost(e,n){const s=_t(e);return new me(n,s)}toString(){return".value"}}const rL=new iL;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oL(t){return{type:"value",snapshotNode:t}}function aL(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function lL(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ny(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function cL(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=vt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return F(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return F(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:rr}hasEnd(){return this.endSet_}getIndexEndValue(){return F(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return F(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ai}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return F(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===vt}copy(){const e=new Nm;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function sy(t){const e={};if(t.isDefault())return e;let n;if(t.index_===vt?n="$priority":t.index_===rL?n="$value":t.index_===qi?n="$key":(F(t.index_ instanceof sL,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ot(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=ot(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+ot(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=ot(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+ot(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function iy(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==vt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl extends i0{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=sa("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(F(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Nl.getListenId_(e,s),a={};this.listens_[o]=a;const l=sy(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Ki(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Nl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=sy(e._queryParams),s=e._path.toString(),i=new eo;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+pd(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=to(a.responseText)}catch{Kt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Kt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uL{constructor(){this.rootNode_=Ee.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(){return{value:null,children:new Map}}function p0(t,e,n){if(ue(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=fe(e);t.children.has(s)||t.children.set(s,Dl());const i=t.children.get(s);e=Ne(e),p0(i,e,n)}}function nd(t,e,n){t.value!==null?n(e,t.value):hL(t,(s,i)=>{const r=new xe(e.toString()+"/"+s);nd(i,r,n)})}function hL(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dL{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&nn(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry=10*1e3,fL=30*1e3,mL=5*60*1e3;class gL{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new dL(e);const s=ry+(fL-ry)*Math.random();Xr(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;nn(e,(i,r)=>{r>0&&Jn(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Xr(this.reportStats_.bind(this),Math.floor(Math.random()*2*mL))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Sn||(Sn={}));function _0(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function y0(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function v0(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Sn.ACK_USER_WRITE,this.source=_0()}operationForChild(e){if(ue(this.path)){if(this.affectedTree.value!=null)return F(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new xe(e));return new xl(be(),n,this.revert)}}else return F(fe(this.path)===e,"operationForChild called for unrelated child."),new xl(Ne(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Sn.OVERWRITE}operationForChild(e){return ue(this.path)?new li(this.source,be(),this.snap.getImmediateChild(e)):new li(this.source,Ne(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Sn.MERGE}operationForChild(e){if(ue(this.path)){const n=this.children.subtree(new xe(e));return n.isEmpty()?null:n.value?new li(this.source,be(),n.value):new No(this.source,be(),n)}else return F(fe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new No(this.source,Ne(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ue(e))return this.isFullyInitialized()&&!this.filtered_;const n=fe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function pL(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(cL(o.childName,o.snapshotNode))}),xr(t,i,"child_removed",e,s,n),xr(t,i,"child_added",e,s,n),xr(t,i,"child_moved",r,s,n),xr(t,i,"child_changed",e,s,n),xr(t,i,"value",e,s,n),i}function xr(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>yL(t,a,l)),o.forEach(a=>{const l=_L(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function _L(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function yL(t,e,n){if(e.childName==null||n.childName==null)throw ar("Should only compare child_ events.");const s=new me(e.childName,e.snapshotNode),i=new me(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(t,e){return{eventCache:t,serverCache:e}}function Jr(t,e,n,s){return E0(new Dm(e,n,s),t.serverCache)}function T0(t,e,n,s){return E0(t.eventCache,new Dm(e,n,s))}function sd(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ci(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fu;const vL=()=>(Fu||(Fu=new xt(iM)),Fu);class Pe{constructor(e,n=vL()){this.value=e,this.children=n}static fromObject(e){let n=new Pe(null);return nn(e,(s,i)=>{n=n.set(new xe(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:be(),value:this.value};if(ue(e))return null;{const s=fe(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Ne(e),n);return r!=null?{path:nt(new xe(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ue(e))return this;{const n=fe(e),s=this.children.get(n);return s!==null?s.subtree(Ne(e)):new Pe(null)}}set(e,n){if(ue(e))return new Pe(n,this.children);{const s=fe(e),r=(this.children.get(s)||new Pe(null)).set(Ne(e),n),o=this.children.insert(s,r);return new Pe(this.value,o)}}remove(e){if(ue(e))return this.children.isEmpty()?new Pe(null):new Pe(null,this.children);{const n=fe(e),s=this.children.get(n);if(s){const i=s.remove(Ne(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Pe(null):new Pe(this.value,r)}else return this}}get(e){if(ue(e))return this.value;{const n=fe(e),s=this.children.get(n);return s?s.get(Ne(e)):null}}setTree(e,n){if(ue(e))return n;{const s=fe(e),r=(this.children.get(s)||new Pe(null)).setTree(Ne(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Pe(this.value,o)}}fold(e){return this.fold_(be(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(nt(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,be(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(ue(e))return null;{const r=fe(e),o=this.children.get(r);return o?o.findOnPath_(Ne(e),nt(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,be(),n)}foreachOnPath_(e,n,s){if(ue(e))return this;{this.value&&s(n,this.value);const i=fe(e),r=this.children.get(i);return r?r.foreachOnPath_(Ne(e),nt(n,i),s):new Pe(null)}}foreach(e){this.foreach_(be(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(nt(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.writeTree_=e}static empty(){return new hn(new Pe(null))}}function Zr(t,e,n){if(ue(e))return new hn(new Pe(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Zt(i,e);return r=r.updateChild(o,n),new hn(t.writeTree_.set(i,r))}else{const i=new Pe(n),r=t.writeTree_.setTree(e,i);return new hn(r)}}}function oy(t,e,n){let s=t;return nn(n,(i,r)=>{s=Zr(s,nt(e,i),r)}),s}function ay(t,e){if(ue(e))return hn.empty();{const n=t.writeTree_.setTree(e,new Pe(null));return new hn(n)}}function id(t,e){return vi(t,e)!=null}function vi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Zt(n.path,e)):null}function ly(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(vt,(s,i)=>{e.push(new me(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new me(s,i.value))}),e}function Es(t,e){if(ue(e))return t;{const n=vi(t,e);return n!=null?new hn(new Pe(n)):new hn(t.writeTree_.subtree(e))}}function rd(t){return t.writeTree_.isEmpty()}function or(t,e){return I0(be(),t.writeTree_,e)}function I0(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(F(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=I0(nt(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(nt(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w0(t,e){return R0(e,t)}function EL(t,e,n,s,i){F(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Zr(t.visibleWrites,e,n)),t.lastWriteId=s}function TL(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function IL(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);F(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&wL(a,s.path)?i=!1:ln(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return CL(t),!0;if(s.snap)t.visibleWrites=ay(t.visibleWrites,s.path);else{const a=s.children;nn(a,l=>{t.visibleWrites=ay(t.visibleWrites,nt(s.path,l))})}return!0}else return!1}function wL(t,e){if(t.snap)return ln(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ln(nt(t.path,n),e))return!0;return!1}function CL(t){t.visibleWrites=C0(t.allWrites,bL,be()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function bL(t){return t.visible}function C0(t,e,n){let s=hn.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)ln(n,o)?(a=Zt(n,o),s=Zr(s,a,r.snap)):ln(o,n)&&(a=Zt(o,n),s=Zr(s,be(),r.snap.getChild(a)));else if(r.children){if(ln(n,o))a=Zt(n,o),s=oy(s,a,r.children);else if(ln(o,n))if(a=Zt(o,n),ue(a))s=oy(s,be(),r.children);else{const l=Ki(r.children,fe(a));if(l){const c=l.getChild(Ne(a));s=Zr(s,be(),c)}}}else throw ar("WriteRecord should have .snap or .children")}}return s}function b0(t,e,n,s,i){if(!s&&!i){const r=vi(t.visibleWrites,e);if(r!=null)return r;{const o=Es(t.visibleWrites,e);if(rd(o))return n;if(n==null&&!id(o,be()))return null;{const a=n||Ee.EMPTY_NODE;return or(o,a)}}}else{const r=Es(t.visibleWrites,e);if(!i&&rd(r))return n;if(!i&&n==null&&!id(r,be()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(ln(c.path,e)||ln(e,c.path))},a=C0(t.allWrites,o,e),l=n||Ee.EMPTY_NODE;return or(a,l)}}}function AL(t,e,n){let s=Ee.EMPTY_NODE;const i=vi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(vt,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Es(t.visibleWrites,e);return n.forEachChild(vt,(o,a)=>{const l=or(Es(r,new xe(o)),a);s=s.updateImmediateChild(o,l)}),ly(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Es(t.visibleWrites,e);return ly(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function SL(t,e,n,s,i){F(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=nt(e,n);if(id(t.visibleWrites,r))return null;{const o=Es(t.visibleWrites,r);return rd(o)?i.getChild(n):or(o,i.getChild(n))}}function RL(t,e,n,s){const i=nt(e,n),r=vi(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Es(t.visibleWrites,i);return or(o,s.getNode().getImmediateChild(n))}else return null}function PL(t,e){return vi(t.visibleWrites,e)}function kL(t,e,n,s,i,r,o){let a;const l=Es(t.visibleWrites,e),c=vi(l,be());if(c!=null)a=c;else if(n!=null)a=or(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function NL(){return{visibleWrites:hn.empty(),allWrites:[],lastWriteId:-1}}function od(t,e,n,s){return b0(t.writeTree,t.treePath,e,n,s)}function A0(t,e){return AL(t.writeTree,t.treePath,e)}function cy(t,e,n,s){return SL(t.writeTree,t.treePath,e,n,s)}function Ol(t,e){return PL(t.writeTree,nt(t.treePath,e))}function DL(t,e,n,s,i,r){return kL(t.writeTree,t.treePath,e,n,s,i,r)}function xm(t,e,n){return RL(t.writeTree,t.treePath,e,n)}function S0(t,e){return R0(nt(t.treePath,e),t.writeTree)}function R0(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xL{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;F(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),F(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,ny(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,lL(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,aL(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,ny(s,e.snapshotNode,i.oldSnap));else throw ar("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OL{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const P0=new OL;class Om{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Dm(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return xm(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ci(this.viewCache_),r=DL(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function VL(t,e){F(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),F(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function ML(t,e,n,s,i){const r=new xL;let o,a;if(n.type===Sn.OVERWRITE){const c=n;c.source.fromUser?o=ad(t,e,c.path,c.snap,s,i,r):(F(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ue(c.path),o=Vl(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===Sn.MERGE){const c=n;c.source.fromUser?o=FL(t,e,c.path,c.children,s,i,r):(F(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ld(t,e,c.path,c.children,s,i,a,r))}else if(n.type===Sn.ACK_USER_WRITE){const c=n;c.revert?o=$L(t,e,c.path,s,i,r):o=UL(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Sn.LISTEN_COMPLETE)o=BL(t,e,n.path,s,r);else throw ar("Unknown operation type: "+n.type);const l=r.getChanges();return LL(e,o,l),{viewCache:o,changes:l}}function LL(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=sd(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(oL(sd(e)))}}function k0(t,e,n,s,i,r){const o=e.eventCache;if(Ol(s,n)!=null)return e;{let a,l;if(ue(n))if(F(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ci(e),u=c instanceof Ee?c:Ee.EMPTY_NODE,h=A0(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=od(s,ci(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=fe(n);if(c===".priority"){F(Rs(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=cy(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Ne(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=cy(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=xm(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return Jr(e,a,o.isFullyInitialized()||ue(n),t.filter.filtersNodes())}}function Vl(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ue(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),f,null)}else{const f=fe(n);if(!l.isCompleteForPath(n)&&Rs(n)>1)return e;const m=Ne(n),_=l.getNode().getImmediateChild(f).updateChild(m,s);f===".priority"?c=u.updatePriority(l.getNode(),_):c=u.updateChild(l.getNode(),f,_,m,P0,null)}const h=T0(e,c,l.isFullyInitialized()||ue(n),u.filtersNodes()),d=new Om(i,h,r);return k0(t,h,n,i,d,a)}function ad(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Om(i,e,r);if(ue(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Jr(e,c,!0,t.filter.filtersNodes());else{const h=fe(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Jr(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=Ne(n),f=a.getNode().getImmediateChild(h);let m;if(ue(d))m=s;else{const g=u.getCompleteChild(h);g!=null?o0(d)===".priority"&&g.getChild(l0(d)).isEmpty()?m=g:m=g.updateChild(d,s):m=Ee.EMPTY_NODE}if(f.equals(m))l=e;else{const g=t.filter.updateChild(a.getNode(),h,m,d,u,o);l=Jr(e,g,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function uy(t,e){return t.eventCache.isCompleteForChild(e)}function FL(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=nt(n,l);uy(e,fe(u))&&(a=ad(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=nt(n,l);uy(e,fe(u))||(a=ad(t,a,u,c,i,r,o))}),a}function hy(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function ld(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ue(n)?c=s:c=new Pe(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),m=hy(t,f,d);l=Vl(t,l,new xe(h),m,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const m=e.serverCache.getNode().getImmediateChild(h),g=hy(t,m,d);l=Vl(t,l,new xe(h),g,i,r,o,a)}}),l}function UL(t,e,n,s,i,r,o){if(Ol(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(ue(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Vl(t,e,n,l.getNode().getChild(n),i,r,a,o);if(ue(n)){let c=new Pe(null);return l.getNode().forEachChild(qi,(u,h)=>{c=c.set(new xe(u),h)}),ld(t,e,n,c,i,r,a,o)}else return e}else{let c=new Pe(null);return s.foreach((u,h)=>{const d=nt(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),ld(t,e,n,c,i,r,a,o)}}function BL(t,e,n,s,i){const r=e.serverCache,o=T0(e,r.getNode(),r.isFullyInitialized()||ue(n),r.isFiltered());return k0(t,o,n,s,P0,i)}function $L(t,e,n,s,i,r){let o;if(Ol(s,n)!=null)return e;{const a=new Om(s,e,i),l=e.eventCache.getNode();let c;if(ue(n)||fe(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=od(s,ci(e));else{const h=e.serverCache.getNode();F(h instanceof Ee,"serverChildren would be complete if leaf node"),u=A0(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=fe(n);let h=xm(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Ne(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,Ee.EMPTY_NODE,Ne(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=od(s,ci(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ol(s,be())!=null,Jr(e,c,o,t.filter.filtersNodes())}}function jL(t,e){const n=ci(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ue(e)&&!n.getImmediateChild(fe(e)).isEmpty())?n.getChild(e):null}function dy(t,e,n,s){e.type===Sn.MERGE&&e.source.queryId!==null&&(F(ci(t.viewCache_),"We should always have a full cache before handling merges"),F(sd(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=ML(t.processor_,i,e,n,s);return VL(t.processor_,r.viewCache),F(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,WL(t,r.changes,r.viewCache.eventCache.getNode(),null)}function WL(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return pL(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fy;function HL(t){F(!fy,"__referenceConstructor has already been defined"),fy=t}function Vm(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return F(r!=null,"SyncTree gave us an op for an invalid query."),dy(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(dy(o,e,n,s));return r}}function Mm(t,e){let n=null;for(const s of t.views.values())n=n||jL(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let my;function zL(t){F(!my,"__referenceConstructor has already been defined"),my=t}class gy{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Pe(null),this.pendingWriteTree_=NL(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function qL(t,e,n,s,i){return EL(t.pendingWriteTree_,e,n,s,i),i?Hc(t,new li(_0(),e,n)):[]}function xi(t,e,n=!1){const s=TL(t.pendingWriteTree_,e);if(IL(t.pendingWriteTree_,e)){let r=new Pe(null);return s.snap!=null?r=r.set(be(),!0):nn(s.children,o=>{r=r.set(new xe(o),!0)}),Hc(t,new xl(s.path,r,n))}else return[]}function Wc(t,e,n){return Hc(t,new li(y0(),e,n))}function KL(t,e,n){const s=Pe.fromObject(n);return Hc(t,new No(y0(),e,s))}function GL(t,e,n,s){const i=O0(t,s);if(i!=null){const r=V0(i),o=r.path,a=r.queryId,l=Zt(o,e),c=new li(v0(a),l,n);return M0(t,o,c)}else return[]}function QL(t,e,n,s){const i=O0(t,s);if(i){const r=V0(i),o=r.path,a=r.queryId,l=Zt(o,e),c=Pe.fromObject(n),u=new No(v0(a),l,c);return M0(t,o,u)}else return[]}function N0(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Zt(o,e),c=Mm(a,l);if(c)return c});return b0(i,e,r,n,!0)}function Hc(t,e){return D0(e,t.syncPointTree_,null,w0(t.pendingWriteTree_,be()))}function D0(t,e,n,s){if(ue(t.path))return x0(t,e,n,s);{const i=e.get(be());n==null&&i!=null&&(n=Mm(i,be()));let r=[];const o=fe(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=S0(s,o);r=r.concat(D0(a,l,c,u))}return i&&(r=r.concat(Vm(i,t,s,n))),r}}function x0(t,e,n,s){const i=e.get(be());n==null&&i!=null&&(n=Mm(i,be()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=S0(s,o),u=t.operationForChild(o);u&&(r=r.concat(x0(u,a,l,c)))}),i&&(r=r.concat(Vm(i,t,s,n))),r}function O0(t,e){return t.tagToQueryMap.get(e)}function V0(t){const e=t.indexOf("$");return F(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new xe(t.substr(0,e))}}function M0(t,e,n){const s=t.syncPointTree_.get(e);F(s,"Missing sync point for query tag that we're tracking");const i=w0(t.pendingWriteTree_,e);return Vm(s,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Lm(n)}node(){return this.node_}}class Fm{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=nt(this.path_,e);return new Fm(this.syncTree_,n)}node(){return N0(this.syncTree_,this.path_)}}const YL=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},py=function(t,e,n){if(!t||typeof t!="object")return t;if(F(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return XL(t[".sv"],e,n);if(typeof t[".sv"]=="object")return JL(t[".sv"],e);F(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},XL=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:F(!1,"Unexpected server value: "+t)}},JL=function(t,e,n){t.hasOwnProperty("increment")||F(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&F(!1,"Unexpected increment value: "+s);const i=e.node();if(F(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},ZL=function(t,e,n,s){return Um(e,new Fm(n,t),s)},eF=function(t,e,n){return Um(t,new Lm(e),n)};function Um(t,e,n){const s=t.getPriority().val(),i=py(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=py(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ze(a,_t(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ze(i))),o.forEachChild(vt,(a,l)=>{const c=Um(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function $m(t,e){let n=e instanceof xe?e:new xe(e),s=t,i=fe(n);for(;i!==null;){const r=Ki(s.node.children,i)||{children:{},childCount:0};s=new Bm(i,s,r),n=Ne(n),i=fe(n)}return s}function Tr(t){return t.node.value}function L0(t,e){t.node.value=e,cd(t)}function F0(t){return t.node.childCount>0}function tF(t){return Tr(t)===void 0&&!F0(t)}function zc(t,e){nn(t.node.children,(n,s)=>{e(new Bm(n,t,s))})}function U0(t,e,n,s){n&&!s&&e(t),zc(t,i=>{U0(i,e,!0,s)}),n&&s&&e(t)}function nF(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function oa(t){return new xe(t.parent===null?t.name:oa(t.parent)+"/"+t.name)}function cd(t){t.parent!==null&&sF(t.parent,t.name,t)}function sF(t,e,n){const s=tF(n),i=Jn(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,cd(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,cd(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iF=/[\[\].#$\/\u0000-\u001F\u007F]/,rF=/[\[\].#$\u0000-\u001F\u007F]/,Uu=10*1024*1024,B0=function(t){return typeof t=="string"&&t.length!==0&&!iF.test(t)},oF=function(t){return typeof t=="string"&&t.length!==0&&!rF.test(t)},aF=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),oF(t)},$0=function(t,e,n){const s=n instanceof xe?new BM(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+$s(s));if(typeof e=="function")throw new Error(t+"contains a function "+$s(s)+" with contents = "+e.toString());if(Bw(e))throw new Error(t+"contains "+e.toString()+" "+$s(s));if(typeof e=="string"&&e.length>Uu/3&&Bl(e)>Uu)throw new Error(t+"contains a string greater than "+Uu+" utf8 bytes "+$s(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(nn(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!B0(o)))throw new Error(t+" contains an invalid key ("+o+") "+$s(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);$M(s,o),$0(t,a,s),jM(s)}),i&&r)throw new Error(t+' contains ".value" child '+$s(s)+" in addition to actual children.")}},lF=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!B0(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!aF(n))throw new Error(IC(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cF{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function uF(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!c0(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ei(t,e,n){uF(t,n),hF(t,s=>ln(s,e)||ln(e,s))}function hF(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(dF(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function dF(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();ei&&pt("event: "+n.toString()),ia(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fF="repo_interrupt",mF=25;class gF{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new cF,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Dl(),this.transactionQueueTree_=new Bm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function pF(t,e,n){if(t.stats_=Sm(t.repoInfo_),t.forceRestClient_||uM())t.server_=new Nl(t.repoInfo_,(s,i,r,o)=>{_y(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>yy(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ot(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new qn(t.repoInfo_,e,(s,i,r,o)=>{_y(t,s,i,r,o)},s=>{yy(t,s)},s=>{yF(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=pM(t.repoInfo_,()=>new gL(t.stats_,t.server_)),t.infoData_=new uL,t.infoSyncTree_=new gy({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Wc(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),jm(t,"connected",!1),t.serverSyncTree_=new gy({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Ei(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function _F(t){const n=t.infoData_.getNode(new xe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function j0(t){return YL({timestamp:_F(t)})}function _y(t,e,n,s,i){t.dataUpdateCount++;const r=new xe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=za(n,c=>_t(c));o=QL(t.serverSyncTree_,r,l,i)}else{const l=_t(n);o=GL(t.serverSyncTree_,r,l,i)}else if(s){const l=za(n,c=>_t(c));o=KL(t.serverSyncTree_,r,l)}else{const l=_t(n);o=Wc(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Hm(t,r)),Ei(t.eventQueue_,a,o)}function yy(t,e){jm(t,"connected",e),e===!1&&EF(t)}function yF(t,e){nn(e,(n,s)=>{jm(t,n,s)})}function jm(t,e,n){const s=new xe("/.info/"+e),i=_t(n);t.infoData_.updateSnapshot(s,i);const r=Wc(t.infoSyncTree_,s,i);Ei(t.eventQueue_,s,r)}function vF(t){return t.nextWriteId_++}function EF(t){W0(t,"onDisconnectEvents");const e=j0(t),n=Dl();nd(t.onDisconnect_,be(),(i,r)=>{const o=ZL(i,r,t.serverSyncTree_,e);p0(n,i,o)});let s=[];nd(n,be(),(i,r)=>{s=s.concat(Wc(t.serverSyncTree_,i,r));const o=CF(t,i);Hm(t,o)}),t.onDisconnect_=Dl(),Ei(t.eventQueue_,be(),s)}function TF(t){t.persistentConnection_&&t.persistentConnection_.interrupt(fF)}function W0(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),pt(n,...e)}function H0(t,e,n){return N0(t.serverSyncTree_,e,n)||Ee.EMPTY_NODE}function Wm(t,e=t.transactionQueueTree_){if(e||qc(t,e),Tr(e)){const n=q0(t,e);F(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&IF(t,oa(e),n)}else F0(e)&&zc(e,n=>{Wm(t,n)})}function IF(t,e,n){const s=n.map(c=>c.currentWriteId),i=H0(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];F(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Zt(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{W0(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(xi(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();qc(t,$m(t.transactionQueueTree_,e)),Wm(t,t.transactionQueueTree_),Ei(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)ia(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Kt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Hm(t,e)}},o)}function Hm(t,e){const n=z0(t,e),s=oa(n),i=q0(t,n);return wF(t,i,s),s}function wF(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Zt(n,l.path);let u=!1,h;if(F(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(xi(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=mF)u=!0,h="maxretry",i=i.concat(xi(t.serverSyncTree_,l.currentWriteId,!0));else{const d=H0(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){$0("transaction failed: Data returned ",f,l.path);let m=_t(f);typeof f=="object"&&f!=null&&Jn(f,".priority")||(m=m.updatePriority(d.getPriority()));const _=l.currentWriteId,E=j0(t),w=eF(m,d,E);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=w,l.currentWriteId=vF(t),o.splice(o.indexOf(_),1),i=i.concat(qL(t.serverSyncTree_,l.path,w,l.currentWriteId,l.applyLocally)),i=i.concat(xi(t.serverSyncTree_,_,!0))}else u=!0,h="nodata",i=i.concat(xi(t.serverSyncTree_,l.currentWriteId,!0))}Ei(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}qc(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)ia(s[a]);Wm(t,t.transactionQueueTree_)}function z0(t,e){let n,s=t.transactionQueueTree_;for(n=fe(e);n!==null&&Tr(s)===void 0;)s=$m(s,n),e=Ne(e),n=fe(e);return s}function q0(t,e){const n=[];return K0(t,e,n),n.sort((s,i)=>s.order-i.order),n}function K0(t,e,n){const s=Tr(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);zc(e,i=>{K0(t,i,n)})}function qc(t,e){const n=Tr(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,L0(e,n.length>0?n:void 0)}zc(e,s=>{qc(t,s)})}function CF(t,e){const n=oa(z0(t,e)),s=$m(t.transactionQueueTree_,e);return nF(s,i=>{Bu(t,i)}),Bu(t,s),U0(s,i=>{Bu(t,i)}),n}function Bu(t,e){const n=Tr(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(F(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(F(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(xi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?L0(e,void 0):n.length=r+1,Ei(t.eventQueue_,oa(e),i);for(let o=0;o<s.length;o++)ia(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bF(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function AF(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Kt(`Invalid query segment '${n}' in query '${t}'`)}return e}const vy=function(t,e){const n=SF(t),s=n.namespace;n.domain==="firebase.com"&&oi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&oi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||nM();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new fM(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new xe(n.pathString)}},SF=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=bF(t.substring(u,h)));const d=AF(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return ue(this._path)?null:o0(this._path)}get ref(){return new Ir(this._repo,this._path)}get _queryIdentifier(){const e=iy(this._queryParams),n=bm(e);return n==="{}"?"default":n}get _queryObject(){return iy(this._queryParams)}isEqual(e){if(e=Mt(e),!(e instanceof zm))return!1;const n=this._repo===e._repo,s=c0(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+UM(this._path)}}class Ir extends zm{constructor(e,n){super(e,n,new Nm,!1)}get parent(){const e=l0(this._path);return e===null?null:new Ir(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}HL(Ir);zL(Ir);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RF="FIREBASE_DATABASE_EMULATOR_HOST",ud={};let PF=!1;function kF(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||oi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),pt("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=vy(r,i),a=o.repoInfo,l,c;typeof process<"u"&&{}&&(c={}[RF]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=vy(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Zh(Zh.OWNER):new dM(t.name,t.options,e);lF("Invalid Firebase Database URL",o),ue(o.path)||oi("Database URL must point to the root of a Firebase Database (not including a child path).");const h=DF(a,t,u,new hM(t.name,n));return new xF(h,t)}function NF(t,e){const n=ud[e];(!n||n[t.key]!==t)&&oi(`Database ${e}(${t.repoInfo_}) has already been deleted.`),TF(t),delete n[t.key]}function DF(t,e,n,s){let i=ud[e.name];i||(i={},ud[e.name]=i);let r=i[t.toURLString()];return r&&oi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new gF(t,PF,n,s),i[t.toURLString()]=r,r}class xF{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(pF(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ir(this._repo,be())),this._rootInternal}_delete(){return this._rootInternal!==null&&(NF(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&oi("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OF(t){XV(cr),Nn(new dn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return kF(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),zt(B_,$_,t),zt(B_,$_,"esm2017")}qn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};qn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};OF();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0="firebasestorage.googleapis.com",VF="storageBucket",MF=2*60*1e3,LF=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends Xn{constructor(e,n,s=0){super($u(e),`Firebase Storage: ${n} (${$u(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Mn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return $u(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var On;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(On||(On={}));function $u(t){return"storage/"+t}function FF(){const t="An unknown error occurred, please check the error payload for server response.";return new Mn(On.UNKNOWN,t)}function UF(){return new Mn(On.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function BF(){return new Mn(On.CANCELED,"User canceled the upload/download.")}function $F(t){return new Mn(On.INVALID_URL,"Invalid URL '"+t+"'.")}function jF(t){return new Mn(On.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Ey(t){return new Mn(On.INVALID_ARGUMENT,t)}function Q0(){return new Mn(On.APP_DELETED,"The Firebase app was deleted.")}function WF(t){return new Mn(On.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=cn.makeFromUrl(e,n)}catch{return new cn(e,"")}if(s.path==="")return s;throw jF(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(C){C.path.charAt(C.path.length-1)==="/"&&(C.path_=C.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(C){C.path_=decodeURIComponent(C.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),m={bucket:1,path:3},g=n===G0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",E=new RegExp(`^https?://${g}/${i}/${_}`,"i"),T=[{regex:a,indices:l,postModify:r},{regex:f,indices:m,postModify:c},{regex:E,indices:{bucket:1,path:2},postModify:c}];for(let C=0;C<T.length;C++){const O=T[C],A=O.regex.exec(e);if(A){const z=A[O.indices.bucket];let x=A[O.indices.path];x||(x=""),s=new cn(z,x),O.postModify(s);break}}if(s==null)throw $F(e);return s}}class HF{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zF(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(..._){c||(c=!0,e.apply(null,_))}function h(_){i=setTimeout(()=>{i=null,t(f,l())},_)}function d(){r&&clearTimeout(r)}function f(_,...E){if(c){d();return}if(_){d(),u.call(null,_,...E);return}if(l()||o){d(),u.call(null,_,...E);return}s<64&&(s*=2);let T;a===1?(a=2,T=0):T=(s+Math.random())*1e3,h(T)}let m=!1;function g(_){m||(m=!0,d(),!c&&(i!==null?(_||(a=2),clearTimeout(i),h(0)):_||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,g(!0)},n),g}function qF(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KF(t){return t!==void 0}function Ty(t,e,n,s){if(s<e)throw Ey(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Ey(`Invalid value for '${t}'. Expected ${n} or less.`)}function GF(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ml;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ml||(Ml={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QF(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YF{constructor(e,n,s,i,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,m)=>{this.resolve_=f,this.reject_=m,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new Da(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Ml.NO_ERROR,l=r.getStatus();if(!a||QF(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Ml.ABORT;s(!1,new Da(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new Da(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());KF(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=FF();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Q0():BF();o(l)}else{const l=UF();o(l)}};this.canceled_?n(!1,new Da(!1,null,!0)):this.backoffId_=zF(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&qF(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Da{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function XF(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function JF(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ZF(t,e){e&&(t["X-Firebase-GMPID"]=e)}function e2(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function t2(t,e,n,s,i,r,o=!0){const a=GF(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return ZF(c,e),XF(c,n),JF(c,r),e2(c,s),new YF(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n2(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function s2(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,n){this._service=e,n instanceof cn?this._location=n:this._location=cn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ll(e,n)}get root(){const e=new cn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return s2(this._location.path)}get storage(){return this._service}get parent(){const e=n2(this._location.path);if(e===null)return null;const n=new cn(this._location.bucket,e);return new Ll(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw WF(e)}}function Iy(t,e){const n=e==null?void 0:e[VF];return n==null?null:cn.makeFromBucketSpec(n,t)}class i2{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=G0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=MF,this._maxUploadRetryTime=LF,this._requests=new Set,i!=null?this._bucket=cn.makeFromBucketSpec(i,this._host):this._bucket=Iy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=cn.makeFromBucketSpec(this._url,e):this._bucket=Iy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ty("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ty("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ll(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new HF(Q0());{const o=t2(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const wy="@firebase/storage",Cy="0.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r2="storage";function o2(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new i2(n,s,i,e,cr)}function a2(){Nn(new dn(r2,o2,"PUBLIC").setMultipleInstances(!0)),zt(wy,Cy,""),zt(wy,Cy,"esm2017")}a2();const ju=new WeakMap;function Y0(t,e){return ju.has(e)||ju.set(e,t||{f:{},r:{},s:{},u:{}}),ju.get(e)}function l2(t,e,n,s){if(!t)return n;const[i,r]=X0(t);if(!i)return n;const o=Y0(void 0,s)[i]||{},a=e||r;return a&&a in o?o[a]:n}function c2(t,e,n,s){if(!t)return;const[i,r]=X0(t);if(!i)return;const o=Y0(void 0,s)[i],a=e||r;if(a)return n.then(l=>{o[a]=l}).catch(An),a}function X0(t){return WV(t)||HV(t)?["f",t.path]:zV(t)?["r",t.toString()]:qV(t)?["s",t.toString()]:[]}const Wu=new WeakMap;function u2(t,e,n){const s=Im();Wu.has(s)||Wu.set(s,new Map);const i=Wu.get(s),r=c2(e,n,t,s);return r&&i.set(r,t),r?()=>i.delete(r):An}const h2={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function hd(t,e,n,s){if(!$V(t))return[t,{}];const i=[{},{}],r=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,d]=u;Object.getOwnPropertyNames(a).forEach(f=>{const m=Object.getOwnPropertyDescriptor(a,f);m&&!m.enumerable&&Object.defineProperty(h,f,m)});for(const f in a){const m=a[f];if(m==null||m instanceof Date||m instanceof Ge||m instanceof _c)h[f]=m;else if(Cm(m)){const g=c+f;h[f]=g in n?l[f]:m.path,d[g]=m.converter?m:m.withConverter(s.converter)}else if(Array.isArray(m)){h[f]=Array(m.length);for(let g=0;g<m.length;g++){const _=m[g];_&&_.path in r&&(h[f][g]=r[_.path])}o(m,l[f]||h[f],c+f+".",[h[f],d])}else yi(m)?(h[f]={},o(m,l[f],c+f+".",[h[f],d])):h[f]=m}}return o(t,e,"",i),i}const qm={reset:!1,wait:!0,maxRefDepth:2,converter:h2,snapshotOptions:{serverTimestamps:"estimate"}};function Fl(t){for(const e in t)t[e].unsub()}function dd(t,e,n,s,i,r,o,a,l){const[c,u]=hd(s.data(t.snapshotOptions),wm(e,n),i,t);r.set(e,n,c),fd(t,e,n,i,u,r,o,a,l)}function d2({ref:t,target:e,path:n,depth:s,resolve:i,reject:r,ops:o},a){const l=Object.create(null);let c=An;return a.once?tT(t).then(u=>{u.exists()?dd(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())}).catch(r):c=yf(t,u=>{u.exists()?dd(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())},r),()=>{c(),Fl(l)}}function fd(t,e,n,s,i,r,o,a,l){const c=Object.keys(i);if(Object.keys(s).filter(g=>c.indexOf(g)<0).forEach(g=>{s[g].unsub(),delete s[g]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const d=c.length,f=Object.create(null);function m(g){g in f&&++h>=d&&a(n)}c.forEach(g=>{const _=s[g],E=i[g],w=`${n}.${g}`;if(f[w]=!0,_)if(_.path!==E.path)_.unsub();else return;s[g]={data:()=>wm(e,w),unsub:d2({ref:E,target:e,path:w,depth:o,ops:r,resolve:m.bind(null,w),reject:l},t),path:E.path}})}function f2(t,e,n,s,i,r){const o=Object.assign({},qm,r),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let d=Se(c?[]:t.value);c||n.set(t,h,[]);const f=s;let m,g=An;const _=[],E={added:({newIndex:T,doc:C})=>{_.splice(T,0,Object.create(null));const O=_[T],[A,z]=hd(C.data(l),void 0,O,o);n.add(Un(d),T,A),fd(o,d,`${h}.${T}`,O,z,n,0,s.bind(null,C),i)},modified:({oldIndex:T,newIndex:C,doc:O})=>{const A=Un(d),z=_[T],x=A[T],[D,j]=hd(O.data(l),x,z,o);_.splice(C,0,z),n.remove(A,T),n.add(A,C,D),fd(o,d,`${h}.${C}`,z,j,n,0,s,i)},removed:({oldIndex:T})=>{const C=Un(d);n.remove(C,T),Fl(_.splice(T,1)[0])}};function w(T){const C=T.docChanges(a);if(!m&&C.length){m=!0;let O=0;const A=C.length,z=Object.create(null);for(let x=0;x<A;x++)z[C[x].doc.id]=!0;s=x=>{x&&x.id in z&&++O>=A&&(c&&(n.set(t,h,Un(d)),d=t),f(Un(d)),s=An)}}C.forEach(O=>{E[O.type](O)}),C.length||(c&&(n.set(t,h,Un(d)),d=t),s(Un(d)))}return u?OP(e).then(w).catch(i):g=yf(e,w,i),T=>{if(g(),T){const C=typeof T=="function"?T():[];n.set(t,h,C)}_.forEach(Fl)}}function m2(t,e,n,s,i,r){const o=Object.assign({},qm,r),a="value",l=Object.create(null);s=KV(s,()=>wm(t,a));let c=An;function u(h){h.exists()?dd(o,t,a,h,l,n,0,s,i):(n.set(t,a,null),s(null))}return o.once?tT(e).then(u).catch(i):c=yf(e,u,i),h=>{if(c(),h){const d=typeof h=="function"?h():null;n.set(t,a,d)}Fl(l)}}const by=Symbol();function g2(t,e){let n=An;const s=Object.assign({},qm,e),i=Un(t),r=s.target||Se();QV()&&(s.once=!0);const o=l2(i,s.ssrKey,by,Im()),a=o!==by;a&&(r.value=o);let l=!a;const c=Se(!1),u=Se(),h=lt(),d=hT();let f=An;function m(){let E=Un(t);const w=new Promise((T,C)=>{if(n(s.reset),!E)return n=An,T(null);c.value=l,l=!0,E.converter||(E=E.withConverter(s.converter)),n=(Cm(E)?m2:f2)(r,E,p2,T,C,s)}).catch(T=>(h.value===w&&(u.value=T),Promise.reject(T))).finally(()=>{h.value===w&&(c.value=!1)});h.value=w}let g=An;je(t)&&(g=Be(t,m)),m(),i&&(f=u2(h.value,i,s.ssrKey)),Jo()&&WT(()=>h.value),d&&Af(_);function _(E=s.reset){g(),f(),n(E)}return Object.defineProperties(r,{error:{get:()=>u},data:{get:()=>r},pending:{get:()=>c},promise:{get:()=>h},stop:{get:()=>_}})}const p2={set:(t,e,n)=>UV(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)},Or=new WeakMap;function _2(t,e,n){e&&e[t]&&(e[t](n),delete e[t])}const y2={bindName:"$firestoreBind",unbindName:"$firestoreUnbind"},v2=function(e,n,s){const i=Object.assign({},y2,n),{bindName:r,unbindName:o}=i,a=e.config.globalProperties;a[o]=function(c,u){_2(c,Or.get(this),u),delete this.$firestoreRefs[c]},a[r]=function(c,u,h){const d=Object.assign({},i,h),f=Ue(this.$data,c);Or.has(this)||Or.set(this,{});const m=Or.get(this);m[c]&&m[c](d.reset);const g=YV(s||Im(),e).run(()=>bf()),{promise:_,stop:E}=e.runWithContext(()=>g.run(()=>g2(u,{target:f,...d}))),w=T=>{E(T),g.stop()};return m[c]=w,this.$firestoreRefs[c]=u,_.value},e.mixin({beforeCreate(){this.$firestoreRefs=Object.create(null)},created(){const{firestore:l}=this.$options,c=typeof l=="function"?l.call(this):l;if(c)for(const u in c)this[r](u,c[u],i)},beforeUnmount(){const l=Or.get(this);if(l)for(const c in l)l[c]();this.$firestoreRefs=null}})};function E2(t){return(e,n)=>v2(n,t,e)}function T2(t,{firebaseApp:e,modules:n=[]}){t.provide(Mw,e);for(const s of n)s(e,t)}function I2(t){Hx(),t.use(PO).use(T2,{modules:[E2()]})}const J0=hN(Bx);I2(J0);J0.mount("#app");
