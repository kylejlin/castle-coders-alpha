"use strict";(self.webpackChunkcastle_coders=self.webpackChunkcastle_coders||[]).push([[828],{828:(e,t,s)=>{s.r(t),s.d(t,{PreferencesWeb:()=>i});var r=s(5403);class i extends r.E_{constructor(){super(...arguments),this.group="CapacitorStorage"}async configure(e){let{group:t}=e;"string"===typeof t&&(this.group=t)}async get(e){return{value:this.impl.getItem(this.applyPrefix(e.key))}}async set(e){this.impl.setItem(this.applyPrefix(e.key),e.value)}async remove(e){this.impl.removeItem(this.applyPrefix(e.key))}async keys(){return{keys:this.rawKeys().map((e=>e.substring(this.prefix.length)))}}async clear(){for(const e of this.rawKeys())this.impl.removeItem(e)}async migrate(){var e;const t=[],s=[],r="_cap_",i=Object.keys(this.impl).filter((e=>0===e.indexOf(r)));for(const a of i){const r=a.substring(5),i=null!==(e=this.impl.getItem(a))&&void 0!==e?e:"",{value:n}=await this.get({key:r});"string"===typeof n?s.push(r):(await this.set({key:r,value:i}),t.push(r))}return{migrated:t,existing:s}}async removeOld(){const e=Object.keys(this.impl).filter((e=>0===e.indexOf("_cap_")));for(const t of e)this.impl.removeItem(t)}get impl(){return window.localStorage}get prefix(){return"NativeStorage"===this.group?"":"".concat(this.group,".")}rawKeys(){return Object.keys(this.impl).filter((e=>0===e.indexOf(this.prefix)))}applyPrefix(e){return this.prefix+e}}}}]);
//# sourceMappingURL=828.6ac05289.chunk.js.map