function t(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}const e=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]"),s=document.querySelector("body");e.addEventListener("click",(function(){s.style.backgroundColor=`${t()}`,e.setAttribute("disabled",""),e.classList.add("btn-disabled"),d.removeAttribute("disabled"),d.classList.remove("btn-disabled"),a=setInterval((()=>{s.style.backgroundColor=`${t()}`}),1e3)})),d.addEventListener("click",(function(){clearInterval(a),e.removeAttribute("disabled"),e.classList.remove("btn-disabled"),d.setAttribute("disabled",""),d.classList.add("btn-disabled")}));let a=null;
//# sourceMappingURL=01-color-switcher.53773fd7.js.map
