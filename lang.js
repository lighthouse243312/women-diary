(function(){var ok=['en','vi','ko','ja'];var q=new URLSearchParams(location.search).get('lang');var s=null;try{s=localStorage.getItem('wd-lang')}catch(e){}
var n=(navigator.language||'en').slice(0,2).toLowerCase();var l=ok.indexOf(q)>-1?q:(ok.indexOf(s)>-1?s:(ok.indexOf(n)>-1?n:'en'));
function set(x){document.body.setAttribute('data-lang',x);document.documentElement.lang=x;[].forEach.call(document.querySelectorAll('.lang button'),function(b){b.classList.toggle('on',b.dataset.k===x)});try{localStorage.setItem('wd-lang',x)}catch(e){}}
document.addEventListener('DOMContentLoaded',function(){[].forEach.call(document.querySelectorAll('.lang button'),function(b){b.onclick=function(){set(b.dataset.k)}});set(l)});})();
