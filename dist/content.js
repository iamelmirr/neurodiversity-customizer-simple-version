/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/content/modes/calm.js":
/*!***********************************!*\
  !*** ./src/content/modes/calm.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyCalmMode: () => (/* binding */ applyCalmMode)
/* harmony export */ });
// Calm/Low-Stimulation Mode (Autism-Friendly) implementation

function applyCalmMode() {
  // Add a class to the body
  document.body.classList.add('neuro-calm-mode');

  // Create a style element
  var styleElement = document.createElement('style');
  styleElement.setAttribute('data-neuro-customizer', 'calm');

  // CSS for calm/low-stimulation mode
  styleElement.textContent = "\n    /* Soft color palette */\n    body.neuro-calm-mode {\n      background-color: #F0F3F6 !important;\n      color: #333 !important;\n      filter: saturate(85%) !important;\n      transition: none !important;\n    }\n    \n    /* Apply softer colors to all elements */\n    body.neuro-calm-mode * {\n      animation: none !important;\n      transition: none !important;\n    }\n    \n    /* Muted text */\n    body.neuro-calm-mode h1,\n    body.neuro-calm-mode h2,\n    body.neuro-calm-mode h3,\n    body.neuro-calm-mode h4,\n    body.neuro-calm-mode h5,\n    body.neuro-calm-mode h6,\n    body.neuro-calm-mode p,\n    body.neuro-calm-mode li,\n    body.neuro-calm-mode span {\n      color: #404040 !important;\n      font-weight: normal !important;\n      text-shadow: none !important;\n    }\n    \n    /* Soften backgrounds */\n    body.neuro-calm-mode div,\n    body.neuro-calm-mode section,\n    body.neuro-calm-mode article,\n    body.neuro-calm-mode aside,\n    body.neuro-calm-mode nav {\n      background-image: none !important;\n      box-shadow: none !important;\n    }\n    \n    /* Remove or reduce busy backgrounds */\n    body.neuro-calm-mode [style*=\"background-image\"] {\n      background-image: none !important;\n      background-color: #F0F3F6 !important;\n    }\n    \n    /* Reduce font boldness */\n    body.neuro-calm-mode strong,\n    body.neuro-calm-mode b {\n      font-weight: normal !important;\n    }\n    \n    /* Enlarge clickable elements */\n    body.neuro-calm-mode a,\n    body.neuro-calm-mode button,\n    body.neuro-calm-mode input[type=\"button\"],\n    body.neuro-calm-mode input[type=\"submit\"] {\n      padding: 0.5em !important;\n      margin: 0.3em !important;\n      border-radius: 4px !important;\n    }\n    \n    /* Suppress hover effects */\n    body.neuro-calm-mode a:hover,\n    body.neuro-calm-mode button:hover,\n    body.neuro-calm-mode *:hover {\n      transform: none !important;\n      filter: none !important;\n      background-image: none !important;\n    }\n    \n    /* Soften links */\n    body.neuro-calm-mode a:link,\n    body.neuro-calm-mode a:visited {\n      color: #2A5D8A !important;\n      text-decoration: underline !important;\n    }\n    \n    /* Suppress blinking or flashing elements */\n    body.neuro-calm-mode [class*=\"blink\"],\n    body.neuro-calm-mode [class*=\"flash\"],\n    body.neuro-calm-mode [class*=\"alert\"] {\n      animation: none !important;\n      opacity: 0.8 !important;\n    }\n    \n    /* Clearly separate UI elements */\n    body.neuro-calm-mode button,\n    body.neuro-calm-mode input,\n    body.neuro-calm-mode select,\n    body.neuro-calm-mode textarea {\n      margin: 0.5em !important;\n      border: 1px solid #AAAAAA !important;\n    }\n    \n    /* Reduce contrast for images */\n    body.neuro-calm-mode img,\n    body.neuro-calm-mode video {\n      opacity: 0.9 !important;\n      filter: saturate(90%) brightness(105%) !important;\n    }\n  ";

  // Append the style element to the document head
  document.head.appendChild(styleElement);

  // Store original styles for elements we'll modify
  var elementsToModify = document.querySelectorAll('[style*="animation"], [style*="transition"], [style*="blink"], [style*="flash"]');
  elementsToModify.forEach(function (element) {
    if (!element.hasAttribute('data-neuro-original-style')) {
      element.setAttribute('data-neuro-original-style', element.getAttribute('style') || '');
      element.style.animation = 'none';
      element.style.transition = 'none';
    }
  });
  console.log('Calm/low-stimulation mode applied');
}

/***/ }),

/***/ "./src/content/modes/default.js":
/*!**************************************!*\
  !*** ./src/content/modes/default.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resetToDefaultMode: () => (/* binding */ resetToDefaultMode)
/* harmony export */ });
// Default mode implementation - resets to original page styles

function resetToDefaultMode() {
  // Remove any style elements we've added
  var customStyles = document.querySelectorAll('style[data-neuro-customizer]');
  customStyles.forEach(function (style) {
    return style.remove();
  });

  // Remove any classes we've added to the body
  document.body.classList.remove('neuro-dyslexia-mode', 'neuro-focus-mode', 'neuro-high-contrast-mode', 'neuro-calm-mode');

  // Remove any observer or event listeners we've added
  if (window.neuroCustomizerObservers) {
    window.neuroCustomizerObservers.forEach(function (observer) {
      return observer.disconnect();
    });
    window.neuroCustomizerObservers = [];
  }

  // Remove any inline styles we've added
  var elementsWithInlineStyles = document.querySelectorAll('[data-neuro-original-style]');
  elementsWithInlineStyles.forEach(function (element) {
    var originalStyle = element.getAttribute('data-neuro-original-style');
    element.setAttribute('style', originalStyle || '');
    element.removeAttribute('data-neuro-original-style');
  });

  // Remove reading ruler if present
  var readingRuler = document.getElementById('neuro-reading-ruler');
  if (readingRuler) {
    readingRuler.remove();
  }
  console.log('Reset to default mode complete');
}

/***/ }),

/***/ "./src/content/modes/dyslexia.js":
/*!***************************************!*\
  !*** ./src/content/modes/dyslexia.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyDyslexiaMode: () => (/* binding */ applyDyslexiaMode)
/* harmony export */ });
// Dyslexia-friendly mode implementation

function applyDyslexiaMode() {
  // Add a class to the body for potential CSS selectors
  document.body.classList.add('neuro-dyslexia-mode');

  // Create a style element
  var styleElement = document.createElement('style');
  styleElement.setAttribute('data-neuro-customizer', 'dyslexia');

  // CSS for dyslexia-friendly mode
  styleElement.textContent = "\n    /* Apply OpenDyslexic font to all text elements */\n    body.neuro-dyslexia-mode {\n      font-family: 'OpenDyslexic', 'Lexend', sans-serif !important;\n    }\n    \n    body.neuro-dyslexia-mode * {\n      font-family: 'OpenDyslexic', 'Lexend', sans-serif !important;\n      font-style: normal !important; /* No italics */\n    }\n    \n    /* Increase letter spacing */\n    body.neuro-dyslexia-mode p, \n    body.neuro-dyslexia-mode li, \n    body.neuro-dyslexia-mode h1,\n    body.neuro-dyslexia-mode h2,\n    body.neuro-dyslexia-mode h3,\n    body.neuro-dyslexia-mode h4,\n    body.neuro-dyslexia-mode h5,\n    body.neuro-dyslexia-mode h6,\n    body.neuro-dyslexia-mode span,\n    body.neuro-dyslexia-mode div {\n      letter-spacing: 0.05em !important;\n      word-spacing: 0.1em !important;\n      line-height: 1.5 !important;\n    }\n    \n    /* Improve paragraphs and text blocks */\n    body.neuro-dyslexia-mode p,\n    body.neuro-dyslexia-mode div {\n      line-height: 1.8 !important;\n      margin-bottom: 1.2em !important;\n    }\n    \n    /* Ensure text has a clean background */\n    body.neuro-dyslexia-mode p,\n    body.neuro-dyslexia-mode li,\n    body.neuro-dyslexia-mode h1,\n    body.neuro-dyslexia-mode h2,\n    body.neuro-dyslexia-mode h3,\n    body.neuro-dyslexia-mode h4,\n    body.neuro-dyslexia-mode h5,\n    body.neuro-dyslexia-mode h6 {\n      background-color: transparent !important;\n      padding: 0.1em 0 !important;\n    }\n    \n    /* Ensure sufficient contrast for text */\n    body.neuro-dyslexia-mode * {\n      text-shadow: none !important;\n    }\n\n    /* Simplify backgrounds behind text */\n    body.neuro-dyslexia-mode article,\n    body.neuro-dyslexia-mode section,\n    body.neuro-dyslexia-mode main,\n    body.neuro-dyslexia-mode .content,\n    body.neuro-dyslexia-mode [role=\"main\"],\n    body.neuro-dyslexia-mode [role=\"article\"] {\n      background-image: none !important;\n      background-color: inherit !important;\n    }\n  ";

  // Append the style element to the document head
  document.head.appendChild(styleElement);

  // Load OpenDyslexic font if not already loaded
  if (!document.getElementById('neuro-dyslexic-font')) {
    var fontLink = document.createElement('link');
    fontLink.id = 'neuro-dyslexic-font';
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://cdn.jsdelivr.net/npm/open-dyslexic@1.0.3/open-dyslexic-regular.woff';
    document.head.appendChild(fontLink);
  }
  console.log('Dyslexia-friendly mode applied');
}

/***/ }),

/***/ "./src/content/modes/focus.js":
/*!************************************!*\
  !*** ./src/content/modes/focus.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyFocusMode: () => (/* binding */ applyFocusMode)
/* harmony export */ });
// Focus mode (ADHD/Attention Support) implementation

function applyFocusMode() {
  // Add a class to the body
  document.body.classList.add('neuro-focus-mode');

  // Create a style element
  var styleElement = document.createElement('style');
  styleElement.setAttribute('data-neuro-customizer', 'focus');

  // CSS for focus mode
  styleElement.textContent = "\n    /* Main content emphasis */\n    body.neuro-focus-mode {\n      overflow-x: hidden !important;\n    }\n    \n    /* Dim non-main content areas */\n    body.neuro-focus-mode > *:not(main):not(article):not([role=\"main\"]):not([role=\"article\"]):not(.content):not(#content) {\n      opacity: 0.6 !important;\n      filter: blur(1px) !important;\n      transition: opacity 0.3s ease, filter 0.3s ease !important;\n    }\n    \n    body.neuro-focus-mode > *:not(main):not(article):not([role=\"main\"]):not([role=\"article\"]):not(.content):not(#content):hover {\n      opacity: 1 !important;\n      filter: blur(0) !important;\n    }\n    \n    /* Emphasize main content */\n    body.neuro-focus-mode main,\n    body.neuro-focus-mode article,\n    body.neuro-focus-mode [role=\"main\"],\n    body.neuro-focus-mode [role=\"article\"],\n    body.neuro-focus-mode .content,\n    body.neuro-focus-mode #content {\n      box-shadow: 0 0 0 1000px rgba(0, 0, 0, 0.05) !important;\n      position: relative !important;\n      z-index: 1 !important;\n      background-color: rgba(255, 255, 255, 0.95) !important;\n    }\n    \n    /* Increase spacing for readability */\n    body.neuro-focus-mode p,\n    body.neuro-focus-mode li {\n      line-height: 1.8 !important;\n      margin-bottom: 1.5em !important;\n    }\n    \n    /* Suppress animations and distracting elements */\n    body.neuro-focus-mode * {\n      animation: none !important;\n      transition: opacity 0.3s ease, filter 0.3s ease !important;\n    }\n    \n    /* Specific distracting elements */\n    body.neuro-focus-mode iframe[src*=\"ads\"],\n    body.neuro-focus-mode iframe[src*=\"doubleclick\"],\n    body.neuro-focus-mode div[class*=\"ad-\"],\n    body.neuro-focus-mode div[id*=\"ad-\"],\n    body.neuro-focus-mode [class*=\"social\"],\n    body.neuro-focus-mode [id*=\"social\"] {\n      opacity: 0.3 !important;\n      filter: grayscale(100%) blur(2px) !important;\n    }\n    \n    /* Hide auto-playing videos, animated GIFs */\n    body.neuro-focus-mode video,\n    body.neuro-focus-mode [class*=\"player\"],\n    body.neuro-focus-mode [id*=\"player\"] {\n      opacity: 0.1 !important;\n      filter: grayscale(100%) !important;\n    }\n    \n    /* Reading ruler styles */\n    #neuro-reading-ruler {\n      position: fixed;\n      left: 0;\n      width: 100%;\n      height: 40px;\n      background-color: rgba(255, 255, 0, 0.05);\n      border-top: 1px solid rgba(255, 255, 0, 0.3);\n      border-bottom: 1px solid rgba(255, 255, 0, 0.3);\n      pointer-events: none;\n      z-index: 9999;\n      box-shadow: 0 0 10px 10px rgba(255, 255, 0, 0.02);\n      transition: top 0.1s ease;\n    }\n  ";

  // Append the style element to the document head
  document.head.appendChild(styleElement);

  // Create reading ruler element
  var readingRuler = document.createElement('div');
  readingRuler.id = 'neuro-reading-ruler';
  readingRuler.style.top = '100px';
  document.body.appendChild(readingRuler);

  // Reading ruler follows mouse or scroll position
  var updateRulerPosition = function updateRulerPosition(e) {
    var y = e.clientY || window.innerHeight / 2;
    readingRuler.style.top = "".concat(y, "px");
  };
  document.addEventListener('mousemove', updateRulerPosition);

  // Store the observer to remove it later
  if (!window.neuroCustomizerObservers) {
    window.neuroCustomizerObservers = [];
  }
  window.neuroCustomizerObservers.push({
    disconnect: function disconnect() {
      document.removeEventListener('mousemove', updateRulerPosition);
    }
  });
  console.log('Focus mode applied');
}

/***/ }),

/***/ "./src/content/modes/highContrast.js":
/*!*******************************************!*\
  !*** ./src/content/modes/highContrast.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyHighContrastMode: () => (/* binding */ applyHighContrastMode)
/* harmony export */ });
// High Contrast Mode implementation

function applyHighContrastMode() {
  // Add a class to the body
  document.body.classList.add('neuro-high-contrast-mode');

  // Create a style element
  var styleElement = document.createElement('style');
  styleElement.setAttribute('data-neuro-customizer', 'high-contrast');

  // CSS for high contrast mode
  styleElement.textContent = "\n    /* Basic high contrast */\n    body.neuro-high-contrast-mode {\n      background-color: black !important;\n      color: white !important;\n    }\n    \n    /* Text elements */\n    body.neuro-high-contrast-mode h1,\n    body.neuro-high-contrast-mode h2,\n    body.neuro-high-contrast-mode h3,\n    body.neuro-high-contrast-mode h4,\n    body.neuro-high-contrast-mode h5,\n    body.neuro-high-contrast-mode h6,\n    body.neuro-high-contrast-mode p,\n    body.neuro-high-contrast-mode li,\n    body.neuro-high-contrast-mode dt,\n    body.neuro-high-contrast-mode dd,\n    body.neuro-high-contrast-mode span,\n    body.neuro-high-contrast-mode div {\n      color: white !important;\n      background-color: black !important;\n      text-shadow: none !important;\n      border-color: white !important;\n    }\n    \n    /* Links */\n    body.neuro-high-contrast-mode a:link,\n    body.neuro-high-contrast-mode a:visited {\n      color: yellow !important;\n      background-color: black !important;\n      text-decoration: underline !important;\n    }\n    \n    body.neuro-high-contrast-mode a:hover,\n    body.neuro-high-contrast-mode a:active {\n      color: #FFFF66 !important;\n      background-color: #333 !important;\n    }\n    \n    /* Remove gradients and shadows */\n    body.neuro-high-contrast-mode * {\n      text-shadow: none !important;\n      box-shadow: none !important;\n      background-image: none !important;\n    }\n    \n    /* Increase font size slightly */\n    body.neuro-high-contrast-mode {\n      font-size: 110% !important;\n    }\n    \n    /* Buttons and form elements */\n    body.neuro-high-contrast-mode button,\n    body.neuro-high-contrast-mode input,\n    body.neuro-high-contrast-mode select,\n    body.neuro-high-contrast-mode textarea {\n      border: 2px solid white !important;\n      background-color: black !important;\n      color: white !important;\n    }\n    \n    /* Ensure form elements are clearly visible */\n    body.neuro-high-contrast-mode input:focus,\n    body.neuro-high-contrast-mode select:focus,\n    body.neuro-high-contrast-mode textarea:focus,\n    body.neuro-high-contrast-mode button:focus {\n      outline: 3px solid yellow !important;\n    }\n    \n    /* Images and media */\n    body.neuro-high-contrast-mode img,\n    body.neuro-high-contrast-mode video,\n    body.neuro-high-contrast-mode canvas {\n      border: 2px solid white !important;\n      filter: contrast(120%) !important;\n    }\n    \n    /* Tables */\n    body.neuro-high-contrast-mode table,\n    body.neuro-high-contrast-mode th,\n    body.neuro-high-contrast-mode td {\n      border: 2px solid white !important;\n    }\n    \n    body.neuro-high-contrast-mode th {\n      background-color: #333 !important;\n      color: white !important;\n    }\n    \n    /* Alternative mode: black on yellow */\n    body.neuro-high-contrast-mode .alt-contrast,\n    body.neuro-high-contrast-mode [data-high-contrast=\"yellow\"] {\n      background-color: yellow !important;\n      color: black !important;\n    }\n  ";

  // Append the style element to the document head
  document.head.appendChild(styleElement);
  console.log('High contrast mode applied');
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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/content/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modes_dyslexia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modes/dyslexia */ "./src/content/modes/dyslexia.js");
/* harmony import */ var _modes_focus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modes/focus */ "./src/content/modes/focus.js");
/* harmony import */ var _modes_highContrast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modes/highContrast */ "./src/content/modes/highContrast.js");
/* harmony import */ var _modes_calm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modes/calm */ "./src/content/modes/calm.js");
/* harmony import */ var _modes_default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modes/default */ "./src/content/modes/default.js");
// Content script for Neurodiversity Web Customizer
// This will be injected into web pages to apply the selected visual mode







// Check if a mode is already active on this page
var currentMode = null;

// Initialize: check if we should apply a saved mode
chrome.runtime.sendMessage({
  action: 'getModeStatus'
}, function (response) {
  if (response && response.activeMode && response.activeMode !== 'default') {
    applyMode(response.activeMode);
  }
});

// Listen for messages from popup or background
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'applyMode') {
    applyMode(request.mode);
    sendResponse({
      success: true
    });
  }
  return true;
});

// Function to apply the selected mode
function applyMode(mode) {
  // First, remove any existing mode
  if (currentMode) {
    (0,_modes_default__WEBPACK_IMPORTED_MODULE_4__.resetToDefaultMode)();
  }

  // Apply the requested mode
  switch (mode) {
    case 'dyslexia':
      (0,_modes_dyslexia__WEBPACK_IMPORTED_MODULE_0__.applyDyslexiaMode)();
      break;
    case 'focus':
      (0,_modes_focus__WEBPACK_IMPORTED_MODULE_1__.applyFocusMode)();
      break;
    case 'high-contrast':
      (0,_modes_highContrast__WEBPACK_IMPORTED_MODULE_2__.applyHighContrastMode)();
      break;
    case 'calm':
      (0,_modes_calm__WEBPACK_IMPORTED_MODULE_3__.applyCalmMode)();
      break;
    case 'default':
    default:
      // Already reset above
      break;
  }

  // Update current mode
  currentMode = mode === 'default' ? null : mode;
}
})();

/******/ })()
;
//# sourceMappingURL=content.js.map