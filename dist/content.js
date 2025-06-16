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

  // Remove any custom elements we've added (buttons, tooltips, etc.)
  if (window.neuroCustomizerElements) {
    window.neuroCustomizerElements.forEach(function (element) {
      if (element && element.parentNode) {
        element.remove();
      }
    });
    window.neuroCustomizerElements = [];
  }

  // Remove any inline styles we've added
  var elementsWithInlineStyles = document.querySelectorAll('[data-neuro-original-style]');
  elementsWithInlineStyles.forEach(function (element) {
    var originalStyle = element.getAttribute('data-neuro-original-style');
    element.setAttribute('style', originalStyle || '');
    element.removeAttribute('data-neuro-original-style');
  });

  // Remove specific UI elements by ID
  var elementsToRemove = ['neuro-reading-ruler', 'neuro-keyboard-hint', 'neuro-high-contrast-toggle', 'neuro-high-contrast-yellow-mode', 'neuro-focus-highlight'];
  elementsToRemove.forEach(function (id) {
    var element = document.getElementById(id);
    if (element) {
      element.remove();
    }
  });

  // Also remove any elements with data-neuro-customizer attribute
  var customElements = document.querySelectorAll('[data-neuro-customizer]');
  customElements.forEach(function (element) {
    return element.remove();
  });
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

  // CSS for focus mode - redesigned to be more subtle and practical
  styleElement.textContent = "\n    /* Base styles */\n    body.neuro-focus-mode {\n      overflow-x: hidden !important;\n    }\n    \n    /* Improved paragraph readability - subtle improvements to text */\n    body.neuro-focus-mode p,\n    body.neuro-focus-mode li,\n    body.neuro-focus-mode h1,\n    body.neuro-focus-mode h2,\n    body.neuro-focus-mode h3,\n    body.neuro-focus-mode h4,\n    body.neuro-focus-mode h5,\n    body.neuro-focus-mode h6 {\n      line-height: 1.6 !important;\n      max-width: 70ch !important; /* Optimum reading width */\n      margin-left: auto !important;\n      margin-right: auto !important;\n    }\n    \n    /* Subtle paragraph spacing for improved focus */\n    body.neuro-focus-mode p,\n    body.neuro-focus-mode li {\n      margin-bottom: 1.2em !important;\n      padding-left: 0.5em !important;\n      border-left: 3px solid rgba(99, 102, 241, 0.1) !important; /* Very subtle left border */\n    }\n    \n    /* Current paragraph highlight when hovered */\n    body.neuro-focus-mode p:hover,\n    body.neuro-focus-mode li:hover {\n      background-color: rgba(99, 102, 241, 0.05) !important;\n      border-left-color: rgba(99, 102, 241, 0.5) !important;\n    }\n    \n    /* Reduce animation distractions without breaking functionality */\n    body.neuro-focus-mode * {\n      animation-duration: 0.1s !important; /* Shortens animations rather than removing them */\n    }\n    \n    /* Subtly reduce visual prominence of likely distracting elements */\n    body.neuro-focus-mode aside,\n    body.neuro-focus-mode [role=\"complementary\"],\n    body.neuro-focus-mode nav:not([aria-label=\"breadcrumb\"]):not([aria-label=\"Breadcrumb\"]),\n    body.neuro-focus-mode [role=\"banner\"],\n    body.neuro-focus-mode [role=\"navigation\"],\n    body.neuro-focus-mode footer,\n    body.neuro-focus-mode [role=\"contentinfo\"] {\n      opacity: 0.75 !important;\n      filter: grayscale(30%) !important;\n      transition: opacity 0.2s ease, filter 0.2s ease !important;\n    }\n    \n    /* Restore on hover/focus */\n    body.neuro-focus-mode aside:hover,\n    body.neuro-focus-mode [role=\"complementary\"]:hover,\n    body.neuro-focus-mode nav:hover,\n    body.neuro-focus-mode [role=\"banner\"]:hover,\n    body.neuro-focus-mode [role=\"navigation\"]:hover,\n    body.neuro-focus-mode footer:hover,\n    body.neuro-focus-mode [role=\"contentinfo\"]:hover,\n    body.neuro-focus-mode aside:focus-within,\n    body.neuro-focus-mode [role=\"complementary\"]:focus-within,\n    body.neuro-focus-mode nav:focus-within,\n    body.neuro-focus-mode [role=\"banner\"]:focus-within,\n    body.neuro-focus-mode [role=\"navigation\"]:focus-within,\n    body.neuro-focus-mode footer:focus-within,\n    body.neuro-focus-mode [role=\"contentinfo\"]:focus-within {\n      opacity: 1 !important;\n      filter: none !important;\n    }\n    \n    /* Only target actual ads, not general images */\n    body.neuro-focus-mode iframe[src*=\"ad.doubleclick\"],\n    body.neuro-focus-mode iframe[src*=\"googleadservices\"],\n    body.neuro-focus-mode div[id^=\"div-gpt-ad\"],\n    body.neuro-focus-mode div[data-ad],\n    body.neuro-focus-mode div[class^=\"AdTheme\"] {\n      opacity: 0.3 !important;\n    }\n    \n    /* Only reduce distraction from autoplaying videos, not all videos */\n    body.neuro-focus-mode video[autoplay],\n    body.neuro-focus-mode video[data-autoplay=\"true\"] {\n      opacity: 0.4 !important;\n    }\n    \n    /* Improve visibility of videos on hover */\n    body.neuro-focus-mode video:hover {\n      opacity: 1 !important;\n      filter: none !important;\n    }\n    \n    /* Reading ruler styles - improved contrast and visibility */\n    #neuro-reading-ruler {\n      position: fixed;\n      left: 0;\n      width: 100%;\n      height: 32px;\n      background-color: rgba(99, 102, 241, 0.05);\n      border-top: 1px solid rgba(99, 102, 241, 0.3);\n      border-bottom: 1px solid rgba(99, 102, 241, 0.3);\n      pointer-events: none;\n      z-index: 9999;\n      box-shadow: 0 0 8px 8px rgba(99, 102, 241, 0.02);\n      transition: top 0.1s ease;\n    }\n  ";

  // Append the style element to the document head
  document.head.appendChild(styleElement);
  // Create reading ruler element
  var readingRuler = document.createElement('div');
  readingRuler.id = 'neuro-reading-ruler';
  readingRuler.style.top = '100px';
  document.body.appendChild(readingRuler);

  // Reading ruler follows mouse with a smoother experience
  var updateRulerPosition = function updateRulerPosition(e) {
    if (!e || !e.clientY) return; // Skip if no valid event

    // Get current ruler position
    var currentTop = parseInt(readingRuler.style.top) || 0;

    // Calculate new position with slight smoothing (avoid jarring movements)
    var targetTop = e.clientY;
    var newTop = currentTop + (targetTop - currentTop) * 0.3; // Smooth easing

    // Apply the new position
    readingRuler.style.top = "".concat(newTop, "px");
  };

  // Add mousemove listener for reading ruler
  document.addEventListener('mousemove', updateRulerPosition);

  // Add alternate keyboard control for the reading ruler
  document.addEventListener('keydown', function (e) {
    // Allow moving the reading ruler with arrow keys
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      // Only handle if no input element is focused
      if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA' && !document.activeElement.isContentEditable) {
        e.preventDefault(); // Prevent page scrolling

        // Get current position
        var currentTop = parseInt(readingRuler.style.top) || 0;

        // Move up or down by 20px
        var newTop = currentTop + (e.key === 'ArrowDown' ? 20 : -20);
        readingRuler.style.top = "".concat(newTop, "px");
      }
    }
  });

  // Store the observers to remove them later
  if (!window.neuroCustomizerObservers) {
    window.neuroCustomizerObservers = [];
  }
  window.neuroCustomizerObservers.push({
    disconnect: function disconnect() {
      document.removeEventListener('mousemove', updateRulerPosition);
      document.removeEventListener('keydown', function (e) {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
          e.preventDefault();
        }
      });
    }
  });

  // Add hint tooltip for keyboard controls
  var keyboardHintTooltip = document.createElement('div');
  keyboardHintTooltip.id = 'neuro-keyboard-hint';
  keyboardHintTooltip.style.cssText = "\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    padding: 10px 15px;\n    background-color: rgba(79, 70, 229, 0.1);\n    border: 1px solid rgba(79, 70, 229, 0.3);\n    border-radius: 4px;\n    font-size: 12px;\n    color: #4f46e5;\n    z-index: 9999;\n    pointer-events: none;\n    opacity: 0.9;\n    transition: opacity 0.3s ease;\n  ";
  keyboardHintTooltip.textContent = 'Tip: Use ↑/↓ keys to move reading ruler';
  document.body.appendChild(keyboardHintTooltip);

  // Hide the tooltip after 8 seconds
  setTimeout(function () {
    keyboardHintTooltip.style.opacity = '0';
    // Remove from DOM after fade out
    setTimeout(function () {
      return keyboardHintTooltip.remove();
    }, 300);
  }, 8000);
  console.log('Improved Focus mode applied');
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

  // Improved CSS for high contrast mode
  styleElement.textContent = "\n    /* Basic high contrast for body */\n    body.neuro-high-contrast-mode {\n      background-color: black !important;\n      color: white !important;\n    }\n    \n    /* Text elements - more targeted selectors */\n    body.neuro-high-contrast-mode h1,\n    body.neuro-high-contrast-mode h2,\n    body.neuro-high-contrast-mode h3,\n    body.neuro-high-contrast-mode h4,\n    body.neuro-high-contrast-mode h5,\n    body.neuro-high-contrast-mode h6,\n    body.neuro-high-contrast-mode p,\n    body.neuro-high-contrast-mode li,\n    body.neuro-high-contrast-mode dt,\n    body.neuro-high-contrast-mode dd,\n    body.neuro-high-contrast-mode label,\n    body.neuro-high-contrast-mode figcaption {\n      color: white !important;\n      text-shadow: none !important;\n    }\n    \n    /* More selective background color application */\n    body.neuro-high-contrast-mode article,\n    body.neuro-high-contrast-mode section,\n    body.neuro-high-contrast-mode nav,\n    body.neuro-high-contrast-mode aside,\n    body.neuro-high-contrast-mode header,\n    body.neuro-high-contrast-mode footer,\n    body.neuro-high-contrast-mode main {\n      background-color: black !important;\n    }\n    \n    /* Links */\n    body.neuro-high-contrast-mode a:link,\n    body.neuro-high-contrast-mode a:visited {\n      color: yellow !important;\n      text-decoration: underline !important;\n    }\n    \n    body.neuro-high-contrast-mode a:hover,\n    body.neuro-high-contrast-mode a:active {\n      color: #FFFF66 !important;\n      background-color: #333 !important;\n    }\n    \n    /* Remove subtle visual effects but preserve images */\n    body.neuro-high-contrast-mode * {\n      text-shadow: none !important;\n      box-shadow: none !important;\n    }\n    \n    /* Only remove decorative background images, not content images */\n    body.neuro-high-contrast-mode header,\n    body.neuro-high-contrast-mode footer,\n    body.neuro-high-contrast-mode nav,\n    body.neuro-high-contrast-mode aside {\n      background-image: none !important;\n    }\n    \n    /* Increase font size slightly */\n    body.neuro-high-contrast-mode {\n      font-size: 110% !important;\n    }\n    \n    /* Buttons and form elements */\n    body.neuro-high-contrast-mode button,\n    body.neuro-high-contrast-mode input,\n    body.neuro-high-contrast-mode select,\n    body.neuro-high-contrast-mode textarea {\n      border: 2px solid white !important;\n      background-color: black !important;\n      color: white !important;\n    }\n    \n    /* Ensure form elements are clearly visible */\n    body.neuro-high-contrast-mode input:focus,\n    body.neuro-high-contrast-mode select:focus,\n    body.neuro-high-contrast-mode textarea:focus,\n    body.neuro-high-contrast-mode button:focus {\n      outline: 3px solid yellow !important;\n    }\n    \n    /* Improved image handling - more gentle approach */\n    body.neuro-high-contrast-mode img,body.neuro-high-contrast-mode svg {\n      /* Only apply minimal contrast enhancement */\n      filter: contrast(105%) !important;\n      /* Don't override position to prevent layout issues */\n      z-index: auto !important;\n      /* Preserve original dimensions */\n      max-width: 100% !important;\n      height: auto !important;\n    }\n      /* Target background-size property to prevent image cutoff */\n    body.neuro-high-contrast-mode [style*=\"background-size\"] {\n      background-size: auto !important;\n    }\n    \n    /* Video elements - more gentle treatment */\n    body.neuro-high-contrast-mode video,\n    body.neuro-high-contrast-mode canvas {\n      border: 1px solid white !important;\n    }\n    \n    /* Tables */\n    body.neuro-high-contrast-mode table,\n    body.neuro-high-contrast-mode th,\n    body.neuro-high-contrast-mode td {\n      border: 2px solid white !important;\n    }\n    \n    body.neuro-high-contrast-mode th {\n      background-color: #333 !important;\n      color: white !important;\n    }\n      /* Alternative mode: black on yellow */\n    body.neuro-high-contrast-mode .alt-contrast,\n    body.neuro-high-contrast-mode [data-high-contrast=\"yellow\"] {\n      background-color: yellow !important;\n      color: black !important;\n    }\n  ";

  // Append the style element to the document head
  document.head.appendChild(styleElement);
  // Fix for SVG images that might be getting clipped or hidden
  var svgFix = document.createElement('style');
  svgFix.setAttribute('data-neuro-customizer', 'high-contrast-svg-fix');
  svgFix.textContent = "\n    /* Special handling for SVG elements */\n    body.neuro-high-contrast-mode svg {\n      overflow: visible !important;\n    }\n    \n    /* Fix for images inside containers with overflow:hidden */\n    body.neuro-high-contrast-mode img {\n      max-width: 100% !important;\n      object-fit: contain !important;\n    }\n    \n    /* Fix for background images */\n    body.neuro-high-contrast-mode [style*=\"background-image\"] {\n      background-size: contain !important;\n      background-position: center !important;\n    }\n    \n    /* Prevent filtering or distortion of images */\n    body.neuro-high-contrast-mode img,\n    body.neuro-high-contrast-mode video,\n    body.neuro-high-contrast-mode iframe,\n    body.neuro-high-contrast-mode canvas,\n    body.neuro-high-contrast-mode [style*=\"background-image\"] {\n      filter: none !important;\n      -webkit-filter: none !important;\n    }\n    \n    /* Ensure images within components are displayed properly */\n    body.neuro-high-contrast-mode img[src],\n    body.neuro-high-contrast-mode [style*=\"background-image\"] {\n      display: inline-block !important;\n      visibility: visible !important;\n    }\n  ";
  document.head.appendChild(svgFix);

  // Add a color scheme toggle button
  var toggleButton = document.createElement('button');
  toggleButton.id = 'neuro-high-contrast-toggle';
  toggleButton.textContent = 'Switch to Yellow/Black';
  toggleButton.setAttribute('aria-label', 'Toggle high contrast color scheme between white on black and black on yellow');
  toggleButton.style.cssText = "\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    padding: 8px 12px;\n    background-color: #333;\n    color: white;\n    border: 2px solid white;\n    border-radius: 4px;\n    font-size: 14px;\n    z-index: 9999;\n    cursor: pointer;\n  ";

  // Toggle between color schemes
  var isYellowMode = false;
  toggleButton.addEventListener('click', function () {
    isYellowMode = !isYellowMode;
    if (isYellowMode) {
      // Apply yellow background / black text
      var yellowMode = document.createElement('style');
      yellowMode.id = 'neuro-high-contrast-yellow-mode';
      yellowMode.setAttribute('data-neuro-customizer', 'high-contrast-yellow');
      yellowMode.textContent = "\n        body.neuro-high-contrast-mode {\n          background-color: yellow !important;\n          color: black !important;\n        }\n        \n        body.neuro-high-contrast-mode article,\n        body.neuro-high-contrast-mode section,\n        body.neuro-high-contrast-mode nav,\n        body.neuro-high-contrast-mode aside,\n        body.neuro-high-contrast-mode header,\n        body.neuro-high-contrast-mode footer,\n        body.neuro-high-contrast-mode main {\n          background-color: yellow !important;\n        }\n        \n        body.neuro-high-contrast-mode h1,\n        body.neuro-high-contrast-mode h2,\n        body.neuro-high-contrast-mode h3,\n        body.neuro-high-contrast-mode h4,\n        body.neuro-high-contrast-mode h5,\n        body.neuro-high-contrast-mode h6,\n        body.neuro-high-contrast-mode p,\n        body.neuro-high-contrast-mode li,\n        body.neuro-high-contrast-mode dt,\n        body.neuro-high-contrast-mode dd,\n        body.neuro-high-contrast-mode label,\n        body.neuro-high-contrast-mode figcaption {\n          color: black !important;\n        }\n        \n        body.neuro-high-contrast-mode a:link,\n        body.neuro-high-contrast-mode a:visited {\n          color: blue !important;\n        }\n        \n        body.neuro-high-contrast-mode a:hover,\n        body.neuro-high-contrast-mode a:active {\n          color: navy !important;\n          background-color: #FFFF99 !important;\n        }\n        \n        body.neuro-high-contrast-mode button,\n        body.neuro-high-contrast-mode input,\n        body.neuro-high-contrast-mode select,\n        body.neuro-high-contrast-mode textarea {\n          border: 2px solid black !important;\n          background-color: yellow !important;\n          color: black !important;\n        }\n        \n        body.neuro-high-contrast-mode input:focus,\n        body.neuro-high-contrast-mode select:focus,\n        body.neuro-high-contrast-mode textarea:focus,\n        body.neuro-high-contrast-mode button:focus {\n          outline: 3px solid blue !important;\n        }\n        \n        body.neuro-high-contrast-mode th {\n          background-color: #FFCC00 !important;\n          color: black !important;\n        }\n        \n        /* Fix for potential text readability issues */\n        body.neuro-high-contrast-mode [style*=\"color: white\"],\n        body.neuro-high-contrast-mode [style*=\"color:#fff\"],\n        body.neuro-high-contrast-mode [style*=\"color: #fff\"],\n        body.neuro-high-contrast-mode [style*=\"color:#ffffff\"],\n        body.neuro-high-contrast-mode [style*=\"color: #ffffff\"] {\n          color: black !important;\n        }\n      ";
      document.head.appendChild(yellowMode);
      toggleButton.textContent = 'Switch to Black/White';
      toggleButton.style.backgroundColor = '#FFCC00';
      toggleButton.style.color = 'black';
      toggleButton.style.borderColor = 'black';
    } else {
      // Remove yellow mode
      var _yellowMode = document.getElementById('neuro-high-contrast-yellow-mode');
      if (_yellowMode) {
        _yellowMode.remove();
      }
      toggleButton.textContent = 'Switch to Yellow/Black';
      toggleButton.style.backgroundColor = '#333';
      toggleButton.style.color = 'white';
      toggleButton.style.borderColor = 'white';
    }
  });
  document.body.appendChild(toggleButton);

  // Store reference to toggle button to remove later
  if (!window.neuroCustomizerElements) {
    window.neuroCustomizerElements = [];
  }
  window.neuroCustomizerElements.push(toggleButton);

  // Add cleanup function to remove toggle button
  if (!window.neuroCustomizerObservers) {
    window.neuroCustomizerObservers = [];
  }
  window.neuroCustomizerObservers.push({
    disconnect: function disconnect() {
      // Remove toggle button if it exists
      var toggleButton = document.getElementById('neuro-high-contrast-toggle');
      if (toggleButton) {
        toggleButton.remove();
      }

      // Remove yellow mode styles if active
      var yellowMode = document.getElementById('neuro-high-contrast-yellow-mode');
      if (yellowMode) {
        yellowMode.remove();
      }
    }
  });
  console.log('Improved high contrast mode applied');
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