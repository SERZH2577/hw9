function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},u=t.parcelRequired7c6;null==u&&((u=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var u={id:e,exports:{}};return r[e]=u,t.call(u.exports,u,u.exports),u.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequired7c6=u);var l=u("eWCmQ");document.querySelector(".form");const o=document.querySelector('[name="delay"]'),a=document.querySelector('[name="step"]'),i=document.querySelector('[name="amount"]'),d=document.querySelector(".btn-promise");d.addEventListener("click",(function(e){e.preventDefault(),""!==o.value&&""!==a.value&&""!==i.value&&(d.setAttribute("disabled",""),setTimeout((()=>{s+=1,m(s,o.value),f=setInterval((()=>{s+=1,m(s,a.value),s>=Number(i.value)&&(clearInterval(f),s=0,c=0,d.removeAttribute("disabled"))}),a.value)}),o.value))}));let c=Number(o.value),s=0,f=null;function m(t,r){const n=Math.random()>.5;new Promise(((u,o)=>n?u(e(l).Notify.success(`✅ Fulfilled promise ${t} in ${c+=Number(r)}ms`)):o(e(l).Notify.failure(`❌ Rejected promise ${t} in ${c+=Number(r)}ms`)))).then((e=>e)).catch((e=>e))}
//# sourceMappingURL=03-promises.4de0553e.js.map
