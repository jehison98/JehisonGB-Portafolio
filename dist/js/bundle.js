(()=>{var e={35:()=>{[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map((function(e){return new bootstrap.Tooltip(e)}))},582:()=>{var e=document.getElementById("contact-form"),t=document.querySelectorAll("#contact-form label"),o=document.querySelectorAll("#contact-form input, #contact-form textarea"),n=document.getElementById("send-btn");o.forEach((function(e,o){e.addEventListener("keyup",(function(){t[o].style.opacity="1"}))}));var r=/^[a-zA-ZÀ-ÿ\s]{3,40}$/,a=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,i=/^\d{7,14}$/,s=/^.{3,500}$/,l={name:!1,email:!1,phone:!1,message:!1};function c(e){switch(e.target.name){case"name":d(r,e.target,"name");break;case"email":d(a,e.target,"email");break;case"phone":d(i,e.target,"phone");break;case"message":d(s,e.target,"message")}}function d(e,t,o){var r=document.querySelector("#form-".concat(o," input"));null==r&&(r=document.querySelector("#form-".concat(o," textarea"))),e.test(t.value)?function(e,t){e.style.border="2px solid #22bb33";var o=document.querySelector("#form-".concat(t," .alert-message"));o.style.opacity="0",setTimeout((function(){o.style.display="none"}),500),l[t]=!0}(r,o):u(r,o),m()?(n.disabled=!1,n.style.opacity="1",n.style.cursor="pointer"):(n.disabled=!0,n.style.opacity="0.2",n.style.cursor="not-allowed")}function u(e,t){e.style.border="2px solid #bb2124";var o=document.querySelector("#form-".concat(t," .alert-message"));o.style.display="block",setTimeout((function(){o.style.opacity="1"}),1),l[t]=!1}function m(){var e;for(var t in l){if(!l[t]){e=!1;break}e=!0}return e}o.forEach((function(e){e.addEventListener("keyup",c),e.addEventListener("blur",c)})),e.addEventListener("submit",(function(e){p.innerHTML='\n    <h3 class="modal-title" id="sendModalLabel">\n        Sending\n        <div class="dots"></div>\n        <div class="dots"></div>\n        <div class="dots"></div>\n    </h3>\n    ',f.innerHTML='\n    <div id="spin-loader" class="loader"></div>\n    ',e.preventDefault(),m()?function(){var e=document.getElementById("sendModal"),t=new bootstrap.Modal(e,{}),o={};for(var n in t.show(),l){var r=document.querySelector("#form-".concat(n," input, #form-").concat(n," textarea"));o[n]=r.value}fetch("https://nodejs-nodemail.herokuapp.com/",{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}}).then((function(e){e.ok&&(E(y,g,h,v),function(){for(var e in l){var t=document.querySelector("#form-".concat(e," label")),o=document.querySelector("#form-".concat(e," input, #form-").concat(e," textarea"));o.style.border="none",o.value="",o.placeholder=t.textContent,t.style.opacity="0",l[e]=!1}}())})).catch((function(e){return E(b,w,S,k)}))}():(function(){for(var e in l)if(!l[e]){var t=document.querySelector("#form-".concat(e," input"));null==t&&(t=document.querySelector("#form-".concat(e," textarea"))),u(t,e)}}(),scroll({top:document.getElementById("contact").offsetTop,behavior:"smooth"}))}));var p=document.querySelector("#sendModal .modal-content .modal-header"),f=document.querySelector("#sendModal .modal-content .modal-body"),y="check-icon",g="check-circle",h="Message sent successfully!",v="Thanks for your message. I will contact you as soon as possible",b="times-icon",w="times-circle",S="Oops! Something went wrong.",k="Please try again later or contact me with another contact option.";function E(e,t,o,n){var r=document.createElement("p"),a=document.createElement("i");p.innerHTML='\n    <h3 class="modal-title" id="sendModalLabel">\n        '.concat(o,"\n    </h3>\n    "),a.innerHTML='<i class="far fa-times-circle close-btn" data-bs-dismiss="modal" aria-label="Close"></i>',p.prepend(a),r.innerHTML=n,p.append(r),f.innerHTML='                    \n    <div id="'.concat(e,'">\n        <i class="far fa-').concat(t,'"></i>\n    </div>\n    ');var i=document.getElementById(e);i.style.display="block",setTimeout((function(){i.style.opacity="0.8",i.style.transform="scale(1)"}),500)}},898:()=>{var e=document.getElementById("body-overlay"),t=document.getElementById("nav-btn"),o=t.querySelector("i"),n=document.getElementById("navbar"),r=document.querySelectorAll("#navbar ul li"),a=document.getElementsByTagName("body")[0],i=!1;function s(){e.style.opacity="0",n.style.left="-100%",a.style.overflowY="initial",o.classList.remove("fa-times"),o.classList.add("fa-bars"),setTimeout((function(){n.style.display="none",e.style.display="none"}),500)}t.addEventListener("click",(function(){i?s():(e.style.display="block",n.style.display="flex",a.style.overflowY="hidden",o.classList.remove("fa-bars"),o.classList.add("fa-times"),setTimeout((function(){n.style.left="0%",e.style.opacity="0.7"}),1)),i=!i})),r.forEach((function(e){e.addEventListener("click",(function(){s(),i=!i}))})),e.addEventListener("click",(function(){s(),i=!i}))}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,o),a.exports}o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e+"../"})(),(()=>{"use strict";o.p,o.p,o.p,o.p,o.p,o.p,o.p,o.p,o.p,o.p,o.p,o.p,o.p,o.p,o.p,o(35),o(898);var e=[{id:1,title:"My First Page",subtitle:"Html, CSS, Bootstrap",imgUrl:"./assets/img/portafolio/first-page.png",repository:"https://github.com/jehison98/first-page",website:null,description:"I develop this page to lear html, css and bootsrap. \n        The page has a modern desing and includes all the necesary section to bring a good experience for the user.\n        In this project I only needed to know basic of html, css and bootstrap\n        "},{id:2,title:"Yigovia",subtitle:"C# / Monogame",imgUrl:"./assets/img/portafolio/yigovia1.png",repository:"https://github.com/jehison98/YIGOVIA-TEAM",website:null,description:"\n        Yigovia the videogame is a personal and scholarly project which I and two colleagues decided to undertake. Yigovia tells the story of a young farmer that has been captived and locked in a dungeon, this young man is waked up by a mysterious woman who gives him the clues to escape.\n        The skills needed to develop this project was: C#, Object Oriented Programming (OOP), Adobe Phostoshop, Project Managament, OST composer.\n        "},{id:3,title:"Houses Catalog",subtitle:"NodeJs, Mysql, JavaScript, CSS, HTML",imgUrl:"./assets/img/portafolio/house-catalog.png",repository:"https://github.com/jehison98/houses-catalog",website:"https://catalog-prototype.herokuapp.com/",description:"\n        I developed this project to learn how work NodeJs with MySql. \n        The project consists to show some houses images and information.\n        I launched the app in Heroku and the database in Clever Cloud.\n        Aditional technologys that I used to develop the app was: Handlebars, Express, Nodemailer, Bootstrap\n        "},{id:4,title:"Social Network",subtitle:"NodeJs, MongoDB, JavaScript, CSS, HTML",imgUrl:"./assets/img/portafolio/social-network.png",repository:"https://github.com/jehison98/img-network",website:null,description:"\n        I developed this project to learn how work NodeJs with MongoDB. \n        The project consists to upload images and it going to saved in a mongodb database. The users can like the photos and comment it.\n        Aditional technologys that I used to develop the app was: Handlebars, Express, MomentJS, Bootstrap, md5 \n        "},{id:5,title:"Copy of a Portafolio",subtitle:"Html, Sass, JavaScript, Webpack, GSAP",imgUrl:"./assets/img/portafolio/portafolio-copy.png",repository:"https://github.com/jehison98/Jehison-Portafolio",website:"https://jehison98.github.io/portafolio-copy-build/",description:"\n        I developed this project to learn how work Webpack. \n        I saw the portafolio of a youtuber who channel is Programador X and I tryed to copy his portafolio to learn how some technologyes like Webpack, GSAP, Sass works.\n        Aditional technologys that I used to develop the page was: Handlebars, Bootstrap \n        "}];function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var n,r=document.querySelector("#portafolio .row"),a=document.getElementById("portafolioModal"),i=new bootstrap.Modal(a,{}),s=function(e,o){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,o){if(e){if("string"==typeof e)return t(e,o);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,o):void 0}}(e))){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){l=!0,i=e},f:function(){try{s||null==n.return||n.return()}finally{if(l)throw i}}}}(e);try{for(s.s();!(n=s.n()).done;){var l=n.value,c=document.createElement("div");c.classList.add("col-md-6","col-lg-4"),c.innerHTML='\n        <div class="img-container">\n            <img class="img-fluid" src="'.concat(l.imgUrl,'" alt="').concat(l.title,'">\n            <div class="zoom-overlay">\n                <i class="fas fa-search-plus"></i>\n                <h4>').concat(l.title,"</h4>\n            </div>\n        </div>\n    "),r.append(c)}}catch(e){s.e(e)}finally{s.f()}document.querySelectorAll(".img-container .zoom-overlay").forEach((function(e,t){e.addEventListener("click",(function(){u(t+1),i.show()}))}));var d=1;function u(t){var o=document.querySelector("#portafolioModal .modal-content .modal-header h1"),n=document.querySelector("#portafolioModal .modal-content .modal-header h4"),r=document.querySelector("#portafolioModal .modal-content .modal-body img"),a=document.querySelector("#portafolioModal .modal-content .modal-footer p"),i=document.getElementById("link-site"),s=document.querySelector("#link-site a"),l=document.getElementById("git-repo"),c=document.querySelector("#git-repo a"),u=e.find((function(e){return e.id===t}));o.innerHTML=u.title,n.innerHTML=u.subtitle,r.setAttribute("src",u.imgUrl),r.setAttribute("alt",u.title),null!=u.repository?(l.disabled=!1,c.setAttribute("href",u.repository)):l.disabled=!0,null!=u.website?(i.disabled=!1,s.setAttribute("href",u.website)):i.disabled=!0,a.innerHTML=u.description,d=t}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}document.querySelector(".modal-body .fa-chevron-left").addEventListener("click",(function(){u(1===d?e.length:d-1)})),document.querySelector(".modal-body .fa-chevron-right").addEventListener("click",(function(){d===e.length?u(1):u(d+1)}));var p,f=document.getElementById("skills-imgs"),y=function(e,t){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=function(e,t){if(e){if("string"==typeof e)return m(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?m(e,t):void 0}}(e))){o&&(e=o);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return i=e.done,e},e:function(e){s=!0,a=e},f:function(){try{i||null==o.return||o.return()}finally{if(s)throw a}}}}([{id:1,title:"HTML",imgUrl:"./assets/img/skills/html.svg"},{id:2,title:"CSS 3",imgUrl:"./assets/img/skills/css3.svg"},{id:3,title:"JavaScript",imgUrl:"./assets/img/skills/javascript.svg"},{id:4,title:"NodeJS",imgUrl:"./assets/img/skills/nodejs.svg"},{id:5,title:"C#",imgUrl:"./assets/img/skills/c-sharp.svg"},{id:6,title:"Webpack",imgUrl:"./assets/img/skills/webpack.svg"},{id:7,title:"Bootstrap",imgUrl:"./assets/img/skills/bootstrap.svg"},{id:8,title:"Sass",imgUrl:"./assets/img/skills/sass.svg"}]);try{for(y.s();!(p=y.n()).done;){var g=p.value,h=document.createElement("div");h.classList.add("col-4","col-lg-3"),h.innerHTML='\n        <img class="img-fluid" src="'.concat(g.imgUrl,'" alt="').concat(g.title,' logo" data-bs-toggle="tooltip"\n        data-bs-placement="top" title="').concat(g.title,'">\n    '),f.append(h)}}catch(e){y.e(e)}finally{y.f()}o(582)})()})();