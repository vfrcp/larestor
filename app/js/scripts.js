/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/burger.js":
/*!*************************************!*\
  !*** ./src/js/components/burger.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ burger)
/* harmony export */ });
function burger(place, btn, change){
    const
        burgerMenu = document.querySelector(place),
        btnPlace = document.querySelector(btn);
    const changeF= (event) =>{
        console.log(event.target.tagName);
        if(event.target.tagName == "A" || event.target.closest("span") || event.target == btnPlace){
            if(btnPlace.classList.contains(change)){
                btnPlace.classList.remove(change);
                document.body.style.overflow = "auto";
                burgerMenu.style.top = "-1500px";
            }else{
                btnPlace.classList.add(change);
                document.body.style.overflow = "hidden";
                burgerMenu.style.top = "0";
            }
        }
    };
    burgerMenu.addEventListener("click", () => changeF(event));
    btnPlace.addEventListener("click", () => changeF(event));
}

/***/ }),

/***/ "./src/js/components/menuItemsHide.js":
/*!********************************************!*\
  !*** ./src/js/components/menuItemsHide.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Itemshide)
/* harmony export */ });
function Itemshide(place){
    const
        menu =document.querySelector(place),
        btnShow = menu.querySelector(".show"),
        dishs = menu.querySelectorAll(".menuItem");
    
    let showed = 1;
    const toggle = () =>{
        dishs.forEach(item => {
            if(showed){
                if(!item.hasAttribute("data-vegan")){
                    item.style.display = "none";
                }
            }else{
                item.style.display = 'flex';
            }
        });
        if(showed){
            showed--;
            btnShow.classList.add("showBefore");
        }else{
            showed++;
            btnShow.classList.remove("showBefore");
        }
        console.log(showed);
    };
    btnShow.addEventListener("click", toggle);
}

/***/ }),

/***/ "./src/js/components/slider.js":
/*!*************************************!*\
  !*** ./src/js/components/slider.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slider)
/* harmony export */ });
function slider(place){
    const
        slider = document.querySelector(place),
        wrapper = document.querySelector(".wraper"),
        btnNext = slider.querySelector(".next"),
        btnPrev = slider.querySelector(".prev"),
        slides= slider.querySelectorAll(".slide");

    let
        countSlide = 0,
        slideWidthpx,
        slideWidth;
    const nextSlide = () =>{
        slideWidthpx = window.getComputedStyle(slides[0], null).getPropertyValue("width");
        slideWidth = slideWidthpx.substr(0, slideWidthpx.length - 2);
        slideWidth = +slideWidth + 15;
        if(countSlide + 1 < slides.length){
            countSlide++;
            wrapper.style.left = (-slideWidth * countSlide) + "px";
        }else{
            countSlide = -1;
            nextSlide();
        }
    };
    const prevSlide = () =>{
        slideWidthpx = window.getComputedStyle(slides[0], null).getPropertyValue("width");
        slideWidth = slideWidthpx.substr(0, slideWidthpx.length - 2);
        slideWidth = +slideWidth + 15;
        if(countSlide <= slides.length && countSlide > 0){
            countSlide--;
            wrapper.style.left = (-slideWidth * countSlide) + "px";
        }else{
            countSlide = slides.length;
            prevSlide();
        }
    };

    btnNext.addEventListener("click", nextSlide);
    btnPrev.addEventListener("click", prevSlide);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/slider */ "./src/js/components/slider.js");
/* harmony import */ var _components_menuItemsHide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/menuItemsHide */ "./src/js/components/menuItemsHide.js");
/* harmony import */ var _components_burger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/burger */ "./src/js/components/burger.js");




window.addEventListener("DOMContentLoaded", () =>{
    (0,_components_slider__WEBPACK_IMPORTED_MODULE_0__.default)(".slider");
    (0,_components_menuItemsHide__WEBPACK_IMPORTED_MODULE_1__.default)(".menuSelf");
    (0,_components_burger__WEBPACK_IMPORTED_MODULE_2__.default)(".burgerMenu", ".burger", "burgerActive");
});

})();

/******/ })()
;
//# sourceMappingURL=scripts.js.map