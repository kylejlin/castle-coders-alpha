"use strict";(self.webpackChunkcastle_coders=self.webpackChunkcastle_coders||[]).push([[849],{5849:(e,i,t)=>{t.r(i),t.d(i,{KeepAwakeWeb:()=>a});var s=t(5403);class a extends s.E_{constructor(){super(...arguments),this.wakeLock=null,this._isSupported="undefined"!==typeof navigator&&"wakeLock"in navigator,this.handleVisibilityChange=()=>{"visible"===document.visibilityState&&this.keepAwake()}}async keepAwake(){this._isSupported||this.throwUnsupportedError(),this.wakeLock&&await this.allowSleep(),this.wakeLock=await navigator.wakeLock.request("screen"),document.addEventListener("visibilitychange",this.handleVisibilityChange),document.addEventListener("fullscreenchange",this.handleVisibilityChange)}async allowSleep(){var e;this._isSupported||this.throwUnsupportedError(),null===(e=this.wakeLock)||void 0===e||e.release(),this.wakeLock=null,document.removeEventListener("visibilitychange",this.handleVisibilityChange),document.removeEventListener("fullscreenchange",this.handleVisibilityChange)}async isSupported(){return{isSupported:this._isSupported}}async isKeptAwake(){this._isSupported||this.throwUnsupportedError();return{isKeptAwake:!!this.wakeLock}}throwUnsupportedError(){throw this.unavailable("Screen Wake Lock API not available in this browser.")}}}}]);
//# sourceMappingURL=849.13f74440.chunk.js.map