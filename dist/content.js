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
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common */ "./src/content/utils/common.js");
// Calm/Low-Stimulation Mode (Autism-Friendly) implementation

function applyCalmMode() {
  var _window$neuroCustomiz, _window$neuroCustomiz2;
  // Add a class to the body
  document.body.classList.add('neuro-calm-mode');

  // Get website theme (dark or light) and site-specific settings
  var websiteTheme = ((_window$neuroCustomiz = window.neuroCustomizerContext) === null || _window$neuroCustomiz === void 0 ? void 0 : _window$neuroCustomiz.websiteTheme) || 'light';
  var siteSettings = ((_window$neuroCustomiz2 = window.neuroCustomizerContext) === null || _window$neuroCustomiz2 === void 0 ? void 0 : _window$neuroCustomiz2.siteSettings) || {};

  // Create base styles for calm mode
  var baseStyles = createBaseStyles(websiteTheme);
  (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.createStyleElement)('neuro-calm-base', baseStyles, 'calm');

  // Apply site-specific fixes
  if (siteSettings.isDynamic) {
    if (window.location.hostname.includes('youtube.com')) {
      applyYouTubeSpecificFixes(websiteTheme);
    } else if (window.location.hostname.includes('google.com')) {
      applyGoogleSpecificFixes(websiteTheme);
    }

    // Create observer for dynamic content
    (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.createDynamicContentObserver)(function () {
      removeAnimationsFromNewElements();
    });
  }

  // Store original styles for elements we'll modify
  storeOriginalStyles();
  console.log('Improved Calm/low-stimulation mode applied with', websiteTheme, 'theme');
}
function createBaseStyles(websiteTheme) {
  // Choose color palette based on website theme
  var colors = websiteTheme === 'dark' ? {
    background: '#2A2A33',
    text: '#E0E0E6',
    surface: '#353542',
    accent: '#8A85FF',
    links: '#B4B1FF',
    borders: '#454552'
  } : {
    background: '#F0F3F6',
    text: '#404040',
    surface: '#FFFFFF',
    accent: '#6366F1',
    links: '#5155E5',
    borders: '#D1D5DB'
  };

  // Build CSS with concatenation to avoid template literal issues
  var css = '';

  // Soft color palette
  css += 'body.neuro-calm-mode {\n';
  css += '  background-color: ' + colors.background + ' !important;\n';
  css += '  color: ' + colors.text + ' !important;\n';
  css += '  filter: saturate(85%) !important;\n';
  css += '  transition: none !important;\n';
  css += '}\n\n';

  // Apply softer colors to all elements
  css += 'body.neuro-calm-mode * {\n';
  css += '  animation: none !important;\n';
  css += '  transition: none !important;\n';
  css += '}\n\n';

  // Muted text
  css += 'body.neuro-calm-mode h1,\n';
  css += 'body.neuro-calm-mode h2,\n';
  css += 'body.neuro-calm-mode h3,\n';
  css += 'body.neuro-calm-mode h4,\n';
  css += 'body.neuro-calm-mode h5,\n';
  css += 'body.neuro-calm-mode h6,\n';
  css += 'body.neuro-calm-mode p,\n';
  css += 'body.neuro-calm-mode li,\n';
  css += 'body.neuro-calm-mode span {\n';
  css += '  color: ' + colors.text + ' !important;\n';
  css += '  font-weight: normal !important;\n';
  css += '  text-shadow: none !important;\n';
  css += '}\n\n';

  // Soften backgrounds but preserve structure
  css += 'body.neuro-calm-mode div,\n';
  css += 'body.neuro-calm-mode section,\n';
  css += 'body.neuro-calm-mode article,\n';
  css += 'body.neuro-calm-mode aside,\n';
  css += 'body.neuro-calm-mode nav {\n';
  css += '  background-image: none !important;\n';
  css += '  box-shadow: none !important;\n';
  css += '}\n\n';

  // Reduce busy backgrounds without destroying layouts
  css += 'body.neuro-calm-mode [style*="background-image"]:not(img):not([role="img"]) {\n';
  css += '  background-image: none !important;\n';
  css += '  background-color: ' + colors.surface + ' !important;\n';
  css += '}\n\n';
  css += '  background-color: ' + colors.surface + ' !important;\n';
  css += '}\n\n';

  // Reduce color intensity of images but preserve them
  css += 'body.neuro-calm-mode img,\n';
  css += 'body.neuro-calm-mode video,\n';
  css += 'body.neuro-calm-mode canvas,\n';
  css += 'body.neuro-calm-mode svg,\n';
  css += 'body.neuro-calm-mode [role="img"] {\n';
  css += '  filter: saturate(70%) brightness(0.95) !important;\n';
  css += '}\n\n';

  // Soften borders
  css += 'body.neuro-calm-mode * {\n';
  css += '  border-color: ' + colors.borders + ' !important;\n';
  css += '}\n\n';

  // Make links less vibrant but still visible
  css += 'body.neuro-calm-mode a:link,\n';
  css += 'body.neuro-calm-mode a:visited {\n';
  css += '  color: ' + colors.links + ' !important;\n';
  css += '  text-decoration: none !important;\n';
  css += '  border-bottom: 1px solid ' + colors.links + ' !important;\n';
  css += '}\n\n';

  // Reduce button intensity
  css += 'body.neuro-calm-mode button,\n';
  css += 'body.neuro-calm-mode input[type="button"],\n';
  css += 'body.neuro-calm-mode input[type="submit"] {\n';
  css += '  background-color: ' + colors.surface + ' !important;\n';
  css += '  color: ' + colors.text + ' !important;\n';
  css += '  border: 1px solid ' + colors.borders + ' !important;\n';
  css += '  box-shadow: none !important;\n';
  css += '}\n\n';

  // Improve focus
  css += 'body.neuro-calm-mode *:focus {\n';
  css += '  outline: 2px solid ' + colors.accent + ' !important;\n';
  css += '  outline-offset: 2px !important;\n';
  css += '}\n';

  // Soften links and buttons
  css += 'body.neuro-calm-mode a {\n';
  css += '  color: ' + colors.links + ' !important;\n';
  css += '  text-decoration: underline !important;\n';
  css += '  font-weight: normal !important;\n';
  css += '  text-shadow: none !important;\n';
  css += '}\n\n';
  css += 'body.neuro-calm-mode button,\n';
  css += 'body.neuro-calm-mode input[type="button"],\n';
  css += 'body.neuro-calm-mode input[type="submit"] {\n';
  css += '  background-color: ' + colors.surface + ' !important;\n';
  css += '  color: ' + colors.text + ' !important;\n';
  css += '  border: 1px solid ' + colors.borders + ' !important;\n';
  css += '  box-shadow: none !important;\n';
  css += '  text-shadow: none !important;\n';
  css += '}\n\n';

  // Soften input fields
  css += 'body.neuro-calm-mode input[type="text"],\n';
  css += 'body.neuro-calm-mode input[type="email"],\n';
  css += 'body.neuro-calm-mode input[type="password"],\n';
  css += 'body.neuro-calm-mode input[type="search"],\n';
  css += 'body.neuro-calm-mode textarea,\n';
  css += 'body.neuro-calm-mode select {\n';
  css += '  background-color: ' + colors.surface + ' !important;\n';
  css += '  color: ' + colors.text + ' !important;\n';
  css += '  border: 1px solid ' + colors.borders + ' !important;\n';
  css += '  box-shadow: none !important;\n';
  css += '}\n\n';

  // Preserve images but reduce their intensity
  css += 'body.neuro-calm-mode img,\n';
  css += 'body.neuro-calm-mode svg,\n';
  css += 'body.neuro-calm-mode video,\n';
  css += 'body.neuro-calm-mode canvas,\n';
  css += 'body.neuro-calm-mode [role="img"] {\n';
  css += '  filter: saturate(80%) contrast(90%) !important;\n';
  css += '  opacity: 0.9 !important;\n';
  css += '}\n\n';

  // Tone down borders
  css += 'body.neuro-calm-mode *:not(img) {\n';
  css += '  border-color: ' + colors.borders + ' !important;\n';
  css += '}\n\n';

  // Remove blinking elements and animations
  css += 'body.neuro-calm-mode *:not(input):not(textarea) {\n';
  css += '  animation: none !important;\n';
  css += '  transition: none !important;\n';
  css += '}\n\n';

  // Fix elements that need a background color
  css += 'body.neuro-calm-mode header,\n';
  css += 'body.neuro-calm-mode footer,\n';
  css += 'body.neuro-calm-mode aside,\n';
  css += 'body.neuro-calm-mode nav,\n';
  css += 'body.neuro-calm-mode .header,\n';
  css += 'body.neuro-calm-mode .footer,\n';
  css += 'body.neuro-calm-mode .sidebar,\n';
  css += 'body.neuro-calm-mode [role="banner"],\n';
  css += 'body.neuro-calm-mode [role="navigation"] {\n';
  css += '  background-color: ' + colors.surface + ' !important;\n';
  css += '}\n\n';
  return css;
}
function applyYouTubeSpecificFixes(websiteTheme) {
  var colors = websiteTheme === 'dark' ? {
    ytBackground: '#212121',
    ytSurface: '#303030',
    ytText: '#FFFFFF',
    ytBorders: '#444444'
  } : {
    ytBackground: '#FFFFFF',
    ytSurface: '#F9F9F9',
    ytText: '#0F0F0F',
    ytBorders: '#E5E5E5'
  };
  var ytFixCss = '';

  // Fix YouTube sidebar and header
  ytFixCss += 'body.neuro-calm-mode ytd-app {\n';
  ytFixCss += '  background-color: ' + colors.ytBackground + ' !important;\n';
  ytFixCss += '}\n\n';

  // Keep the sidebar visible and properly styled
  ytFixCss += 'body.neuro-calm-mode ytd-guide-renderer,\n';
  ytFixCss += 'body.neuro-calm-mode tp-yt-app-drawer {\n';
  ytFixCss += '  background-color: ' + colors.ytSurface + ' !important;\n';
  ytFixCss += '  display: block !important;\n';
  ytFixCss += '  visibility: visible !important;\n';
  ytFixCss += '}\n\n';

  // Fix YouTube video player
  ytFixCss += 'body.neuro-calm-mode .html5-video-player {\n';
  ytFixCss += '  filter: saturate(90%) !important;\n';
  ytFixCss += '}\n\n';

  // Fix video thumbnails
  ytFixCss += 'body.neuro-calm-mode ytd-thumbnail {\n';
  ytFixCss += '  opacity: 0.9 !important;\n';
  ytFixCss += '}\n\n';

  // Apply YouTube-specific styles
  (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.createStyleElement)('neuro-calm-youtube', ytFixCss, 'calm');
}
function applyGoogleSpecificFixes(websiteTheme) {
  var googleFixCss = '';

  // Fix Google search box
  googleFixCss += 'body.neuro-calm-mode .gLFyf {\n';
  googleFixCss += '  background-color: inherit !important;\n';
  googleFixCss += '  border: 1px solid currentColor !important;\n';
  googleFixCss += '}\n\n';

  // Apply Google-specific styles
  (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.createStyleElement)('neuro-calm-google', googleFixCss, 'calm');
}
function storeOriginalStyles() {
  // Store original background-color, color, and transition styles
  var elements = document.querySelectorAll('body, body *');
  elements.forEach(function (element) {
    var style = window.getComputedStyle(element);
    if (!element.hasAttribute('data-neuro-original-bg')) {
      element.setAttribute('data-neuro-original-bg', style.backgroundColor);
    }
    if (!element.hasAttribute('data-neuro-original-color')) {
      element.setAttribute('data-neuro-original-color', style.color);
    }
  });
}
function removeAnimationsFromNewElements() {
  var newElements = document.querySelectorAll('body *:not([data-neuro-processed])');
  newElements.forEach(function (element) {
    element.style.animation = 'none';
    element.style.transition = 'none';
    element.setAttribute('data-neuro-processed', 'true');
  });
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
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common */ "./src/content/utils/common.js");
// Dyslexia-friendly mode implementation

function applyDyslexiaMode() {
  var _window$neuroCustomiz, _window$neuroCustomiz2;
  // Add a class to the body for potential CSS selectors
  document.body.classList.add('neuro-dyslexia-mode');

  // Get website theme (dark or light) and site-specific settings
  var websiteTheme = ((_window$neuroCustomiz = window.neuroCustomizerContext) === null || _window$neuroCustomiz === void 0 ? void 0 : _window$neuroCustomiz.websiteTheme) || 'light';
  var siteSettings = ((_window$neuroCustomiz2 = window.neuroCustomizerContext) === null || _window$neuroCustomiz2 === void 0 ? void 0 : _window$neuroCustomiz2.siteSettings) || {};

  // Load custom fonts with reliable fallbacks
  loadDyslexiaFriendlyFonts();

  // Apply base dyslexia styles
  var baseStyles = createBaseDyslexiaStyles(websiteTheme);
  (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.createStyleElement)('neuro-dyslexia-base', baseStyles, 'dyslexia');

  // Apply site-specific fixes if needed
  if (siteSettings.isDynamic) {
    if (window.location.hostname.includes('youtube.com')) {
      applyYouTubeSpecificFixes(websiteTheme);
    }

    // Create observer for dynamic content
    (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.createDynamicContentObserver)(function () {
      // Reapply font to dynamically added content
      var dynStyles = 'body.neuro-dyslexia-mode * {\n' + '  font-family: \'OpenDyslexic\', \'Lexend\', \'Comic Neue\', \'Comic Sans MS\', \'Arial\', sans-serif !important;\n' + '}\n';
      (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.createStyleElement)('neuro-dyslexia-dynamic', dynStyles, 'dyslexia');
    });
  }
  console.log('Improved Dyslexia-friendly mode applied with', websiteTheme, 'theme');
}
function loadDyslexiaFriendlyFonts() {
  // Load OpenDyslexic font (primary)
  (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.loadFont)('OpenDyslexic', 'https://cdn.jsdelivr.net/npm/open-dyslexic@1.0.3/open-dyslexic-regular.woff2', 'woff2');

  // Load OpenDyslexic Bold
  (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.loadFont)('OpenDyslexicBold', 'https://cdn.jsdelivr.net/npm/open-dyslexic@1.0.3/open-dyslexic-bold.woff2', 'woff2');

  // Load Lexend as a backup (better than default system fallbacks)
  (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.loadFont)('Lexend', 'https://fonts.googleapis.com/css2?family=Lexend:wght@400;700&display=swap', 'stylesheet');

  // Load Comic Neue as another alternative
  (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.loadFont)('ComicNeue', 'https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap', 'stylesheet');
}
function createBaseDyslexiaStyles(websiteTheme) {
  // Define color palette based on theme
  var colors = websiteTheme === 'dark' ? {
    background: '#222222',
    text: '#F2F2F2',
    textBackground: 'rgba(50, 50, 50, 0.7)',
    links: '#92B4F4',
    headers: '#C4C9F4'
  } : {
    background: '#F8F9FA',
    text: '#333333',
    textBackground: 'rgba(255, 255, 255, 0.8)',
    links: '#0066CC',
    headers: '#3F51B5'
  };

  // Build CSS with concatenation instead of template literals
  var css = '';

  // OpenDyslexic font definitions
  css += '/* OpenDyslexic font definitions with multiple formats for better browser support */\n';
  css += '@font-face {\n';
  css += '  font-family: \'OpenDyslexic\';\n';
  css += '  src: url(\'https://cdn.jsdelivr.net/npm/open-dyslexic@1.0.3/open-dyslexic-regular.woff2\') format(\'woff2\'),\n';
  css += '       url(\'https://cdn.jsdelivr.net/npm/open-dyslexic@1.0.3/open-dyslexic-regular.woff\') format(\'woff\');\n';
  css += '  font-weight: normal;\n';
  css += '  font-style: normal;\n';
  css += '  font-display: swap;\n';
  css += '}\n\n';
  css += '@font-face {\n';
  css += '  font-family: \'OpenDyslexic\';\n';
  css += '  src: url(\'https://cdn.jsdelivr.net/npm/open-dyslexic@1.0.3/open-dyslexic-bold.woff2\') format(\'woff2\'),\n';
  css += '       url(\'https://cdn.jsdelivr.net/npm/open-dyslexic@1.0.3/open-dyslexic-bold.woff\') format(\'woff\');\n';
  css += '  font-weight: bold;\n';
  css += '  font-style: normal;\n';
  css += '  font-display: swap;\n';
  css += '}\n\n';

  // Apply dyslexia-friendly font family to all elements
  css += 'body.neuro-dyslexia-mode {\n';
  css += '  background-color: ' + colors.background + ' !important;\n';
  css += '  color: ' + colors.text + ' !important;\n';
  css += '}\n\n';

  // Apply font to all elements
  css += 'body.neuro-dyslexia-mode * {\n';
  css += '  font-family: \'OpenDyslexic\', \'Lexend\', \'Comic Neue\', \'Comic Sans MS\', \'Arial\', sans-serif !important;\n';
  css += '}\n\n';

  // Improve paragraphs readability
  css += 'body.neuro-dyslexia-mode p,\n';
  css += 'body.neuro-dyslexia-mode li,\n';
  css += 'body.neuro-dyslexia-mode span,\n';
  css += 'body.neuro-dyslexia-mode div {\n';
  css += '  line-height: 1.8 !important;\n';
  css += '  letter-spacing: 0.05em !important;\n';
  css += '  word-spacing: 0.1em !important;\n';
  css += '  font-size: 1.05em !important;\n';
  css += '}\n\n';

  // Increase spacing for paragraphs
  css += 'body.neuro-dyslexia-mode p {\n';
  css += '  margin-bottom: 1em !important;\n';
  css += '}\n\n';

  // Improve readability with text backgrounds on certain elements
  css += 'body.neuro-dyslexia-mode pre,\n';
  css += 'body.neuro-dyslexia-mode code,\n';
  css += 'body.neuro-dyslexia-mode blockquote {\n';
  css += '  background-color: ' + colors.textBackground + ' !important;\n';
  css += '  padding: 0.25em 0.5em !important;\n';
  css += '  border-radius: 4px !important;\n';
  css += '  box-decoration-break: clone !important;\n';
  css += '}\n\n';

  // Fix headings
  css += 'body.neuro-dyslexia-mode h1,\n';
  css += 'body.neuro-dyslexia-mode h2,\n';
  css += 'body.neuro-dyslexia-mode h3,\n';
  css += 'body.neuro-dyslexia-mode h4,\n';
  css += 'body.neuro-dyslexia-mode h5,\n';
  css += 'body.neuro-dyslexia-mode h6 {\n';
  css += '  color: ' + colors.headers + ' !important;\n';
  css += '  margin-top: 1.5em !important;\n';
  css += '  margin-bottom: 0.8em !important;\n';
  css += '  line-height: 1.4 !important;\n';
  css += '  font-weight: bold !important;\n';
  css += '}\n\n';

  // Size headings more clearly
  css += 'body.neuro-dyslexia-mode h1 { font-size: 1.8em !important; }\n';
  css += 'body.neuro-dyslexia-mode h2 { font-size: 1.6em !important; }\n';
  css += 'body.neuro-dyslexia-mode h3 { font-size: 1.4em !important; }\n';
  css += 'body.neuro-dyslexia-mode h4 { font-size: 1.3em !important; }\n';
  css += 'body.neuro-dyslexia-mode h5 { font-size: 1.2em !important; }\n';
  css += 'body.neuro-dyslexia-mode h6 { font-size: 1.1em !important; }\n\n';

  // Improve form fields
  css += 'body.neuro-dyslexia-mode input,\n';
  css += 'body.neuro-dyslexia-mode textarea,\n';
  css += 'body.neuro-dyslexia-mode select {\n';
  css += '  font-size: 1.05em !important;\n';
  css += '  padding: 0.5em !important;\n';
  css += '  line-height: 1.5 !important;\n';
  css += '}\n\n';

  // Links
  css += 'body.neuro-dyslexia-mode a {\n';
  css += '  color: ' + colors.links + ' !important;\n';
  css += '  text-decoration: underline !important;\n';
  css += '  text-underline-offset: 0.15em !important;\n';
  css += '}\n\n';

  // Improve focus states
  css += 'body.neuro-dyslexia-mode a:focus,\n';
  css += 'body.neuro-dyslexia-mode button:focus,\n';
  css += 'body.neuro-dyslexia-mode input:focus,\n';
  css += 'body.neuro-dyslexia-mode select:focus,\n';
  css += 'body.neuro-dyslexia-mode textarea:focus {\n';
  css += '  outline: 3px solid ' + colors.links + ' !important;\n';
  css += '  outline-offset: 2px !important;\n';
  css += '}\n\n';
  return css;
}
function applyYouTubeSpecificFixes(websiteTheme) {
  var ytFixCss = '';

  // Fix YouTube sidebar font
  ytFixCss += 'body.neuro-dyslexia-mode ytd-guide-renderer #guide-content,\n';
  ytFixCss += 'body.neuro-dyslexia-mode ytd-mini-guide-renderer {\n';
  ytFixCss += '  font-size: 0.9em !important;\n';
  ytFixCss += '}\n\n';

  // Fix video title
  ytFixCss += 'body.neuro-dyslexia-mode ytd-watch-metadata h1.title {\n';
  ytFixCss += '  line-height: 1.4 !important;\n';
  ytFixCss += '  font-size: 1.3em !important;\n';
  ytFixCss += '}\n\n';

  // Fix comments
  ytFixCss += 'body.neuro-dyslexia-mode ytd-comment-renderer #content-text {\n';
  ytFixCss += '  line-height: 1.6 !important;\n';
  ytFixCss += '}\n\n';

  // Apply YouTube-specific styles
  (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.createStyleElement)('neuro-dyslexia-youtube', ytFixCss, 'dyslexia');
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
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common */ "./src/content/utils/common.js");
// Focus mode (ADHD/Attention Support) implementation

function applyFocusMode() {
  var _window$neuroCustomiz, _window$neuroCustomiz2;
  // Add a class to the body
  document.body.classList.add('neuro-focus-mode');

  // Get website theme (dark or light) and site-specific settings
  var websiteTheme = ((_window$neuroCustomiz = window.neuroCustomizerContext) === null || _window$neuroCustomiz === void 0 ? void 0 : _window$neuroCustomiz.websiteTheme) || 'light';
  var siteSettings = ((_window$neuroCustomiz2 = window.neuroCustomizerContext) === null || _window$neuroCustomiz2 === void 0 ? void 0 : _window$neuroCustomiz2.siteSettings) || {};

  // Create base focus styles
  var baseStyles = createBaseFocusStyles(websiteTheme);
  (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.createStyleElement)('neuro-focus-base', baseStyles, 'focus');

  // Apply site-specific fixes if needed
  if (siteSettings.isDynamic) {
    if (window.location.hostname.includes('youtube.com')) {
      applyYouTubeSpecificFixes(websiteTheme);
    }

    // Create observer for dynamic content
    (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.createDynamicContentObserver)(function () {
      applyFocusToNewElements(websiteTheme);
    });
  }

  // Create and add reading ruler
  createReadingRuler(websiteTheme);

  // Add keyboard hint tooltip
  createKeyboardHintTooltip(websiteTheme);
  console.log('Improved Focus mode applied with', websiteTheme, 'theme');
}

/**
 * Create the base CSS styles for focus mode
 * @param {string} websiteTheme - 'dark' or 'light'
 * @returns {string} CSS styles
 */
function createBaseFocusStyles(websiteTheme) {
  // Define color palette based on theme
  var colors = websiteTheme === 'dark' ? {
    highlight: 'rgba(120, 130, 240, 0.1)',
    border: 'rgba(120, 130, 240, 0.5)',
    muted: 'rgba(200, 200, 210, 0.8)',
    ruler: 'rgba(120, 130, 240, 0.1)',
    rulerBorder: 'rgba(120, 130, 240, 0.3)',
    text: '#E0E0E6',
    textHighlight: '#B4B1FF',
    paragraphBg: 'rgba(50, 50, 60, 0.4)'
  } : {
    highlight: 'rgba(99, 102, 241, 0.05)',
    border: 'rgba(99, 102, 241, 0.5)',
    muted: 'rgba(80, 80, 90, 0.7)',
    ruler: 'rgba(99, 102, 241, 0.05)',
    rulerBorder: 'rgba(99, 102, 241, 0.3)',
    text: '#333333',
    textHighlight: '#4F46E5',
    paragraphBg: 'rgba(245, 247, 250, 0.8)'
  };

  // Build CSS with concatenation to avoid template literal issues
  var css = '';

  // Base styles
  css += '/* Base styles */\n';
  css += 'body.neuro-focus-mode {\n';
  css += '  overflow-x: hidden !important;\n';
  css += '}\n\n';

  // Improved paragraph readability - subtle improvements to text
  css += '/* Improved paragraph readability - subtle improvements to text */\n';
  css += 'body.neuro-focus-mode p,\n';
  css += 'body.neuro-focus-mode li,\n';
  css += 'body.neuro-focus-mode h1,\n';
  css += 'body.neuro-focus-mode h2,\n';
  css += 'body.neuro-focus-mode h3,\n';
  css += 'body.neuro-focus-mode h4,\n';
  css += 'body.neuro-focus-mode h5,\n';
  css += 'body.neuro-focus-mode h6 {\n';
  css += '  line-height: 1.6 !important;\n';
  css += '  max-width: 70ch !important;\n';
  css += '  margin-left: auto !important;\n';
  css += '  margin-right: auto !important;\n';
  css += '  color: ' + colors.text + ' !important;\n';
  css += '}\n\n';

  // Subtle paragraph styling for improved focus
  css += '/* Subtle paragraph styling for improved focus */\n';
  css += 'body.neuro-focus-mode p,\n';
  css += 'body.neuro-focus-mode li {\n';
  css += '  margin-bottom: 1.2em !important;\n';
  css += '  padding-left: 0.75em !important;\n';
  css += '  border-left: 3px solid ' + colors.border + ' !important;\n';
  css += '  background-color: ' + colors.paragraphBg + ' !important;\n';
  css += '  padding: 0.5em 0.75em !important;\n';
  css += '  border-radius: 0 4px 4px 0 !important;\n';
  css += '  transition: background-color 0.2s ease, border-left-color 0.2s ease !important;\n';
  css += '}\n\n';

  // Current paragraph highlight when hovered
  css += '/* Current paragraph highlight when hovered */\n';
  css += 'body.neuro-focus-mode p:hover,\n';
  css += 'body.neuro-focus-mode li:hover {\n';
  css += '  background-color: ' + colors.highlight + ' !important;\n';
  css += '  border-left-color: ' + colors.textHighlight + ' !important;\n';
  css += '  border-left-width: 4px !important;\n';
  css += '}\n\n';

  // Add focus pulse animation
  css += '@keyframes focus-pulse {\n';
  css += '  0% { border-left-width: 3px; }\n';
  css += '  50% { border-left-width: 5px; }\n';
  css += '  100% { border-left-width: 3px; }\n';
  css += '}\n\n';

  // Reduce visual noise from sidebars and non-essential elements
  css += '/* Reduce visual noise from sidebars and non-essential elements */\n';
  css += 'body.neuro-focus-mode aside,\n';
  css += 'body.neuro-focus-mode .sidebar,\n';
  css += 'body.neuro-focus-mode nav:not([aria-label="breadcrumb"]):not([aria-label="Breadcrumb"]),\n';
  css += 'body.neuro-focus-mode footer,\n';
  css += 'body.neuro-focus-mode .footer,\n';
  css += 'body.neuro-focus-mode .related,\n';
  css += 'body.neuro-focus-mode .recommendations,\n';
  css += 'body.neuro-focus-mode [role="complementary"],\n';
  css += 'body.neuro-focus-mode [role="banner"] > *:not(nav):not(.search),\n';
  css += 'body.neuro-focus-mode .social-media,\n';
  css += 'body.neuro-focus-mode .share-buttons,\n';
  css += 'body.neuro-focus-mode .comments-section,\n';
  css += 'body.neuro-focus-mode .widget-area {\n';
  css += '  opacity: 0.5 !important;\n';
  css += '  filter: grayscale(30%) !important;\n';
  css += '  transition: opacity 0.3s ease, filter 0.3s ease !important;\n';
  css += '}\n\n';

  // Restore opacity on hover for accessibility
  css += '/* Restore opacity on hover for accessibility */\n';
  css += 'body.neuro-focus-mode aside:hover,\n';
  css += 'body.neuro-focus-mode .sidebar:hover,\n';
  css += 'body.neuro-focus-mode nav:hover,\n';
  css += 'body.neuro-focus-mode footer:hover,\n';
  css += 'body.neuro-focus-mode .footer:hover,\n';
  css += 'body.neuro-focus-mode .related:hover,\n';
  css += 'body.neuro-focus-mode .recommendations:hover,\n';
  css += 'body.neuro-focus-mode [role="complementary"]:hover,\n';
  css += 'body.neuro-focus-mode [role="banner"] > *:hover,\n';
  css += 'body.neuro-focus-mode .social-media:hover,\n';
  css += 'body.neuro-focus-mode .share-buttons:hover,\n';
  css += 'body.neuro-focus-mode .comments-section:hover,\n';
  css += 'body.neuro-focus-mode .widget-area:hover {\n';
  css += '  opacity: 1 !important;\n';
  css += '  filter: grayscale(0%) !important;\n';
  css += '}\n\n';

  // Improved link styles
  css += '/* Improved link styles */\n';
  css += 'body.neuro-focus-mode a {\n';
  css += '  color: ' + colors.textHighlight + ' !important;\n';
  css += '  text-decoration: underline !important;\n';
  css += '  text-underline-offset: 2px !important;\n';
  css += '  font-weight: bold !important;\n';
  css += '}\n\n';

  // Fade images slightly to reduce visual distraction
  css += '/* Fade images slightly to reduce visual distraction */\n';
  css += 'body.neuro-focus-mode img:not([src*="logo"]):not([alt*="logo"]):not([alt*="Logo"]) {\n';
  css += '  filter: saturate(90%) !important;\n';
  css += '  opacity: 0.9 !important;\n';
  css += '  transition: filter 0.3s ease, opacity 0.3s ease !important;\n';
  css += '}\n\n';

  // Restore images on hover
  css += '/* Restore images on hover */\n';
  css += 'body.neuro-focus-mode img:hover {\n';
  css += '  filter: saturate(100%) !important;\n';
  css += '  opacity: 1 !important;\n';
  css += '}\n\n';

  // Improved headings for better document structure scanning
  css += '/* Improved headings for better document structure scanning */\n';
  css += 'body.neuro-focus-mode h1,\n';
  css += 'body.neuro-focus-mode h2,\n';
  css += 'body.neuro-focus-mode h3 {\n';
  css += '  color: ' + colors.textHighlight + ' !important;\n';
  css += '  border-bottom: 1px solid ' + colors.border + ' !important;\n';
  css += '  padding-bottom: 0.3em !important;\n';
  css += '  margin-top: 1.5em !important;\n';
  css += '  font-weight: bold !important;\n';
  css += '}\n\n';

  // Reading ruler styles - hidden by default
  css += '/* Reading ruler styles - hidden by default */\n';
  css += '#neuro-reading-ruler {\n';
  css += '  position: fixed !important;\n';
  css += '  left: 0 !important;\n';
  css += '  right: 0 !important;\n';
  css += '  height: 30px !important;\n';
  css += '  background-color: ' + colors.ruler + ' !important;\n';
  css += '  border-top: 1px solid ' + colors.rulerBorder + ' !important;\n';
  css += '  border-bottom: 1px solid ' + colors.rulerBorder + ' !important;\n';
  css += '  z-index: 999999 !important;\n';
  css += '  pointer-events: none !important;\n';
  css += '  opacity: 0 !important;\n';
  css += '  transition: opacity 0.2s ease !important;\n';
  css += '}\n\n';

  // Show reading ruler when activated
  css += '/* Show reading ruler when activated */\n';
  css += '#neuro-reading-ruler.active {\n';
  css += '  opacity: 0.8 !important;\n';
  css += '}\n\n';

  // Keyboard shortcut hint tooltip
  css += '/* Keyboard shortcut hint tooltip */\n';
  css += '#neuro-keyboard-hint {\n';
  css += '  position: fixed !important;\n';
  css += '  bottom: 20px !important;\n';
  css += '  left: 50% !important;\n';
  css += '  transform: translateX(-50%) !important;\n';
  css += '  background-color: rgba(30, 30, 30, 0.8) !important;\n';
  css += '  color: white !important;\n';
  css += '  padding: 10px 15px !important;\n';
  css += '  border-radius: 8px !important;\n';
  css += '  z-index: 999999 !important;\n';
  css += '  font-family: system-ui, -apple-system, sans-serif !important;\n';
  css += '  font-size: 14px !important;\n';
  css += '  opacity: 0 !important;\n';
  css += '  transition: opacity 0.3s ease !important;\n';
  css += '}\n\n';
  return css;
}

/**
 * Create a reading ruler that follows the mouse
 * @param {string} websiteTheme - 'dark' or 'light'
 */
function createReadingRuler(websiteTheme) {
  // Create ruler element if it doesn't exist
  if (!document.getElementById('neuro-reading-ruler')) {
    var ruler = document.createElement('div');
    ruler.id = 'neuro-reading-ruler';
    document.body.appendChild(ruler);

    // Add to cleanup list
    if (!window.neuroCustomizerElements) {
      window.neuroCustomizerElements = [];
    }
    window.neuroCustomizerElements.push(ruler);

    // Add event listeners for mouse movement
    document.addEventListener('mousemove', handleMouseMove);

    // Add event listener for keyboard toggle
    document.addEventListener('keydown', handleKeyboardToggle);

    // Create ruler toggle button
    createRulerToggleButton(websiteTheme);
  }
}

/**
 * Handle mouse movement to update reading ruler position
 * @param {MouseEvent} event - Mouse event
 */
function handleMouseMove(event) {
  var ruler = document.getElementById('neuro-reading-ruler');
  if (ruler && ruler.classList.contains('active')) {
    ruler.style.top = event.clientY - 15 + 'px';
  }
}

/**
 * Handle keyboard shortcuts for ruler toggle
 * @param {KeyboardEvent} event - Keyboard event
 */
function handleKeyboardToggle(event) {
  // Toggle ruler with Alt+R
  if (event.altKey && event.key === 'r') {
    event.preventDefault();
    toggleReadingRuler();
  }
}

/**
 * Toggle the reading ruler on/off
 */
function toggleReadingRuler() {
  var ruler = document.getElementById('neuro-reading-ruler');
  if (ruler) {
    ruler.classList.toggle('active');
  }
}

/**
 * Create a button to toggle the reading ruler
 * @param {string} websiteTheme - 'dark' or 'light'
 */
function createRulerToggleButton(websiteTheme) {
  // Create toggle button
  var icon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 19h18M3 14h18M3 9h18M3 4h18"/></svg>';
  (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.createControlButton)('neuro-ruler-toggle', 'Reading Guide', toggleReadingRuler, {
    position: 'bottom-left',
    icon: icon,
    tooltip: 'Toggle reading guide (Alt+R)',
    size: 'small'
  });
}

/**
 * Create a tooltip showing keyboard shortcuts
 * @param {string} websiteTheme - 'dark' or 'light'
 */
function createKeyboardHintTooltip(websiteTheme) {
  // Create hint element if it doesn't exist
  if (!document.getElementById('neuro-keyboard-hint')) {
    var hint = document.createElement('div');
    hint.id = 'neuro-keyboard-hint';
    hint.textContent = 'Tip: Use Alt+R to toggle the reading guide';
    document.body.appendChild(hint);

    // Add to cleanup list
    if (!window.neuroCustomizerElements) {
      window.neuroCustomizerElements = [];
    }
    window.neuroCustomizerElements.push(hint);

    // Show hint briefly, then fade out
    setTimeout(function () {
      hint.style.opacity = '1';
      setTimeout(function () {
        hint.style.opacity = '0';
      }, 5000);
    }, 2000);
  }
}

/**
 * Apply focus styles to newly added elements
 * @param {string} websiteTheme - 'dark' or 'light'
 */
function applyFocusToNewElements(websiteTheme) {
  // Add any dynamic content specific handling here
}

/**
 * Apply YouTube-specific focus mode fixes
 * @param {string} websiteTheme - 'dark' or 'light'
 */
function applyYouTubeSpecificFixes(websiteTheme) {
  var ytFixCss = '';

  // Improve video page focus
  ytFixCss += 'body.neuro-focus-mode ytd-watch-flexy #primary {\n';
  ytFixCss += '  max-width: 1000px !important;\n';
  ytFixCss += '  margin: 0 auto !important;\n';
  ytFixCss += '}\n\n';

  // Make comments more readable
  ytFixCss += 'body.neuro-focus-mode ytd-comment-thread-renderer {\n';
  ytFixCss += '  padding: 10px !important;\n';
  ytFixCss += '  border-bottom: 1px solid rgba(128, 128, 128, 0.2) !important;\n';
  ytFixCss += '}\n\n';

  // Apply YouTube-specific styles
  (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.createStyleElement)('neuro-focus-youtube', ytFixCss, 'focus');
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
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common */ "./src/content/utils/common.js");
// High Contrast Mode implementation

function applyHighContrastMode() {
  var _window$neuroCustomiz, _window$neuroCustomiz2;
  // Add a class to the body
  document.body.classList.add('neuro-high-contrast-mode');

  // Get website theme (dark or light) and site-specific settings
  var websiteTheme = ((_window$neuroCustomiz = window.neuroCustomizerContext) === null || _window$neuroCustomiz === void 0 ? void 0 : _window$neuroCustomiz.websiteTheme) || 'light';
  var siteSettings = ((_window$neuroCustomiz2 = window.neuroCustomizerContext) === null || _window$neuroCustomiz2 === void 0 ? void 0 : _window$neuroCustomiz2.siteSettings) || {};

  // Determine initial color scheme based on website theme
  var initialScheme = websiteTheme === 'dark' ? 'yellow' : 'white';

  // Generate the list of selectors to exclude from high contrast
  var excludeSelectors = siteSettings.excludeFromHighContrast || [];
  var excludeFromContrastSelectors = excludeSelectors.length > 0 ? ':not(' + excludeSelectors.join('):not(') + ')' : '';

  // Apply the main high contrast styles
  var baseStyles = createBaseStyles(websiteTheme, excludeFromContrastSelectors);
  (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.createStyleElement)('neuro-high-contrast-base', baseStyles, 'high-contrast');

  // Apply scheme-specific styles
  applyColorScheme(initialScheme);

  // Add color scheme toggle button
  createColorSchemeToggle(initialScheme === 'white' ? 'yellow' : 'white');

  // Fix for SVG images that might be getting clipped or hidden
  var svgFixStyles = createSvgFixStyles();
  (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.createStyleElement)('neuro-high-contrast-svg-fix', svgFixStyles, 'high-contrast');

  // Site-specific fixes
  if (siteSettings.isDynamic) {
    if (window.location.hostname.includes('youtube.com')) {
      applyYouTubeSpecificFixes(websiteTheme);
    } else if (window.location.hostname.includes('google.com')) {
      applyGoogleSpecificFixes(websiteTheme);
    }
  }
  console.log('Improved high contrast mode applied with', initialScheme, 'scheme');
}
function createBaseStyles(websiteTheme, excludeFromContrastSelectors) {
  // Build CSS with concatenation to avoid template literal issues
  var css = '';

  // Base high contrast styles
  css += '/* Base high contrast styles */\n';
  css += 'body.neuro-high-contrast-mode {\n';
  css += '  /* Will be overridden by specific color schemes */\n';
  css += '  transition: none !important;\n';
  css += '}\n\n';

  // Text elements - more targeted selectors
  css += '/* Text elements - more targeted selectors */\n';
  css += 'body.neuro-high-contrast-mode h1,\n';
  css += 'body.neuro-high-contrast-mode h2,\n';
  css += 'body.neuro-high-contrast-mode h3,\n';
  css += 'body.neuro-high-contrast-mode h4,\n';
  css += 'body.neuro-high-contrast-mode h5,\n';
  css += 'body.neuro-high-contrast-mode h6,\n';
  css += 'body.neuro-high-contrast-mode p,\n';
  css += 'body.neuro-high-contrast-mode li,\n';
  css += 'body.neuro-high-contrast-mode dt,\n';
  css += 'body.neuro-high-contrast-mode dd,\n';
  css += 'body.neuro-high-contrast-mode label,\n';
  css += 'body.neuro-high-contrast-mode figcaption' + excludeFromContrastSelectors + ' {\n';
  css += '  /* Will be set by scheme */\n';
  css += '  text-shadow: none !important;\n';
  css += '}\n\n';

  // Links - will be customized by scheme
  css += '/* Links - will be customized by scheme */\n';
  css += 'body.neuro-high-contrast-mode a:link,\n';
  css += 'body.neuro-high-contrast-mode a:visited {\n';
  css += '  text-decoration: underline !important;\n';
  css += '  text-decoration-thickness: 2px !important;\n';
  css += '  text-underline-offset: 3px !important;\n';
  css += '}\n\n';

  // Remove subtle visual effects but preserve images
  css += '/* Remove subtle visual effects but preserve images */\n';
  css += 'body.neuro-high-contrast-mode *' + excludeFromContrastSelectors + ' {\n';
  css += '  text-shadow: none !important;\n';
  css += '  box-shadow: none !important;\n';
  css += '}\n\n';

  // Only remove decorative background images, not content images
  css += '/* Only remove decorative background images, not content images */\n';
  css += 'body.neuro-high-contrast-mode header,\n';
  css += 'body.neuro-high-contrast-mode footer,\n';
  css += 'body.neuro-high-contrast-mode nav,\n';
  css += 'body.neuro-high-contrast-mode aside {\n';
  css += '  background-image: none !important;\n';
  css += '}\n\n';

  // Increase font size slightly for better readability
  css += '/* Increase font size slightly for better readability */\n';
  css += 'body.neuro-high-contrast-mode {\n';
  css += '  font-size: 110% !important;\n';
  css += '}\n\n';

  // Ensure form elements are clearly visible
  css += '/* Ensure form elements are clearly visible */\n';
  css += 'body.neuro-high-contrast-mode input,\n';
  css += 'body.neuro-high-contrast-mode select,\n';
  css += 'body.neuro-high-contrast-mode textarea,\n';
  css += 'body.neuro-high-contrast-mode button {\n';
  css += '  border-width: 2px !important;\n';
  css += '  outline-width: 2px !important;\n';
  css += '}\n\n';

  // Enhance focus states
  css += '/* Enhance focus states */\n';
  css += 'body.neuro-high-contrast-mode input:focus,\n';
  css += 'body.neuro-high-contrast-mode select:focus,\n';
  css += 'body.neuro-high-contrast-mode textarea:focus,\n';
  css += 'body.neuro-high-contrast-mode button:focus {\n';
  css += '  outline: 3px solid currentColor !important;\n';
  css += '  outline-offset: 2px !important;\n';
  css += '}\n\n';
  return css;
}
function createSvgFixStyles() {
  var css = '';

  // Fix SVG visibility with high contrast
  css += '/* Fix SVG visibility with high contrast */\n';
  css += 'body.neuro-high-contrast-mode svg {\n';
  css += '  stroke-width: 1.5 !important;\n';
  css += '  fill: currentColor !important;\n';
  css += '}\n\n';

  // Ensure icons remain visible
  css += '/* Ensure icons remain visible */\n';
  css += 'body.neuro-high-contrast-mode [class*="icon"],\n';
  css += 'body.neuro-high-contrast-mode [class*="Icon"],\n';
  css += 'body.neuro-high-contrast-mode [class*="logo"],\n';
  css += 'body.neuro-high-contrast-mode [class*="Logo"] {\n';
  css += '  opacity: 1 !important;\n';
  css += '}\n\n';
  return css;
}

/**
 * Apply specific color scheme for high contrast mode
 * @param {string} scheme Color scheme name ('white', 'yellow', 'black')
 */
function applyColorScheme(scheme) {
  // Remove any existing scheme styles
  var existingScheme = document.getElementById('neuro-high-contrast-scheme');
  if (existingScheme) {
    existingScheme.remove();
  }

  // Apply the selected scheme
  var schemeStyles = '';
  switch (scheme) {
    case 'white':
      schemeStyles = createWhiteOnBlackScheme();
      break;
    case 'yellow':
      schemeStyles = createYellowOnBlackScheme();
      break;
    default:
      schemeStyles = createWhiteOnBlackScheme();
  }

  // Apply scheme styles
  (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.createStyleElement)('neuro-high-contrast-scheme', schemeStyles, 'high-contrast');
}
function createWhiteOnBlackScheme() {
  var css = '';

  // Base styles for white on black
  css += '/* White on black scheme */\n';
  css += 'body.neuro-high-contrast-mode {\n';
  css += '  background-color: #000000 !important;\n';
  css += '  color: #FFFFFF !important;\n';
  css += '}\n\n';

  // Apply to all elements to override site styles
  css += 'body.neuro-high-contrast-mode *:not(img):not(video):not(svg):not([role="img"]) {\n';
  css += '  background-color: #000000 !important;\n';
  css += '  color: #FFFFFF !important;\n';
  css += '  border-color: #FFFFFF !important;\n';
  css += '}\n\n';

  // Links
  css += 'body.neuro-high-contrast-mode a:link,\n';
  css += 'body.neuro-high-contrast-mode a:visited {\n';
  css += '  color: #FFFFFF !important;\n';
  css += '  background-color: #000000 !important;\n';
  css += '  text-decoration-color: #FFFFFF !important;\n';
  css += '}\n\n';

  // Focus and hover states
  css += 'body.neuro-high-contrast-mode a:hover,\n';
  css += 'body.neuro-high-contrast-mode a:focus,\n';
  css += 'body.neuro-high-contrast-mode button:hover,\n';
  css += 'body.neuro-high-contrast-mode button:focus {\n';
  css += '  background-color: #FFFFFF !important;\n';
  css += '  color: #000000 !important;\n';
  css += '  outline: 2px solid #FFFFFF !important;\n';
  css += '}\n\n';

  // Form controls
  css += 'body.neuro-high-contrast-mode input,\n';
  css += 'body.neuro-high-contrast-mode textarea,\n';
  css += 'body.neuro-high-contrast-mode select {\n';
  css += '  background-color: #000000 !important;\n';
  css += '  color: #FFFFFF !important;\n';
  css += '  border: 2px solid #FFFFFF !important;\n';
  css += '}\n\n';
  return css;
}
function createYellowOnBlackScheme() {
  var css = '';

  // Base styles for yellow on black
  css += '/* Yellow on black scheme */\n';
  css += 'body.neuro-high-contrast-mode {\n';
  css += '  background-color: #000000 !important;\n';
  css += '  color: #FFFF00 !important;\n';
  css += '}\n\n';

  // Apply to all elements to override site styles
  css += 'body.neuro-high-contrast-mode *:not(img):not(video):not(svg):not([role="img"]) {\n';
  css += '  background-color: #000000 !important;\n';
  css += '  color: #FFFF00 !important;\n';
  css += '  border-color: #FFFF00 !important;\n';
  css += '}\n\n';

  // Links
  css += 'body.neuro-high-contrast-mode a:link,\n';
  css += 'body.neuro-high-contrast-mode a:visited {\n';
  css += '  color: #FFFF00 !important;\n';
  css += '  background-color: #000000 !important;\n';
  css += '  text-decoration-color: #FFFF00 !important;\n';
  css += '}\n\n';

  // Focus and hover states
  css += 'body.neuro-high-contrast-mode a:hover,\n';
  css += 'body.neuro-high-contrast-mode a:focus,\n';
  css += 'body.neuro-high-contrast-mode button:hover,\n';
  css += 'body.neuro-high-contrast-mode button:focus {\n';
  css += '  background-color: #FFFF00 !important;\n';
  css += '  color: #000000 !important;\n';
  css += '  outline: 2px solid #FFFF00 !important;\n';
  css += '}\n\n';

  // Form controls
  css += 'body.neuro-high-contrast-mode input,\n';
  css += 'body.neuro-high-contrast-mode textarea,\n';
  css += 'body.neuro-high-contrast-mode select {\n';
  css += '  background-color: #000000 !important;\n';
  css += '  color: #FFFF00 !important;\n';
  css += '  border: 2px solid #FFFF00 !important;\n';
  css += '}\n\n';
  return css;
}

/**
 * Create a toggle button to switch between color schemes
 * @param {string} nextScheme The next scheme to switch to
 */
function createColorSchemeToggle(nextScheme) {
  // Icon and label based on next scheme
  var iconAndLabel = nextScheme === 'yellow' ? {
    icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="yellow" stroke="currentColor"><circle cx="12" cy="12" r="10"/></svg>',
    label: 'Yellow Mode'
  } : {
    icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="currentColor"><circle cx="12" cy="12" r="10"/></svg>',
    label: 'White Mode'
  };

  // Create toggle button
  (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.createControlButton)('neuro-contrast-scheme-toggle', iconAndLabel.label, function () {
    applyColorScheme(nextScheme);
    document.getElementById('neuro-contrast-scheme-toggle').remove();
    createColorSchemeToggle(nextScheme === 'yellow' ? 'white' : 'yellow');
  }, {
    position: 'top-right',
    icon: iconAndLabel.icon,
    tooltip: 'Switch to ' + iconAndLabel.label
  });
}

/**
 * Apply YouTube-specific high contrast fixes
 * @param {string} websiteTheme - 'dark' or 'light'
 */
function applyYouTubeSpecificFixes(websiteTheme) {
  var ytFixCss = '';

  // Fix YouTube video controls
  ytFixCss += '/* Fix YouTube video controls */\n';
  ytFixCss += 'body.neuro-high-contrast-mode .ytp-chrome-bottom {\n';
  ytFixCss += '  background-color: rgba(0, 0, 0, 0.8) !important;\n';
  ytFixCss += '}\n\n';

  // Fix YouTube sidebar
  ytFixCss += '/* Fix YouTube sidebar */\n';
  ytFixCss += 'body.neuro-high-contrast-mode ytd-guide-entry-renderer {\n';
  ytFixCss += '  border-bottom: 1px solid currentColor !important;\n';
  ytFixCss += '}\n\n';

  // Fix YouTube thumbnails
  ytFixCss += '/* Preserve YouTube thumbnails but add border */\n';
  ytFixCss += 'body.neuro-high-contrast-mode ytd-thumbnail {\n';
  ytFixCss += '  border: 2px solid currentColor !important;\n';
  ytFixCss += '}\n\n';

  // Apply YouTube-specific styles
  (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.createStyleElement)('neuro-high-contrast-youtube', ytFixCss, 'high-contrast');
}

/**
 * Apply Google-specific high contrast fixes
 * @param {string} websiteTheme - 'dark' or 'light'
 */
function applyGoogleSpecificFixes(websiteTheme) {
  var googleFixCss = '';

  // Fix Google search box
  googleFixCss += '/* Fix Google search box */\n';
  googleFixCss += 'body.neuro-high-contrast-mode .gLFyf {\n';
  googleFixCss += '  border: 2px solid currentColor !important;\n';
  googleFixCss += '  padding: 5px !important;\n';
  googleFixCss += '}\n\n';

  // Fix Google search results
  googleFixCss += '/* Fix Google search results */\n';
  googleFixCss += 'body.neuro-high-contrast-mode .g {\n';
  googleFixCss += '  border-bottom: 1px solid currentColor !important;\n';
  googleFixCss += '  padding: 10px 0 !important;\n';
  googleFixCss += '}\n\n';

  // Apply Google-specific styles
  (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.createStyleElement)('neuro-high-contrast-google', googleFixCss, 'high-contrast');
}

/***/ }),

/***/ "./src/content/utils/common.js":
/*!*************************************!*\
  !*** ./src/content/utils/common.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createControlButton: () => (/* binding */ createControlButton),
/* harmony export */   createDynamicContentObserver: () => (/* binding */ createDynamicContentObserver),
/* harmony export */   createStyleElement: () => (/* binding */ createStyleElement),
/* harmony export */   loadFont: () => (/* binding */ loadFont),
/* harmony export */   prefersReducedMotion: () => (/* binding */ prefersReducedMotion),
/* harmony export */   storeOriginalStyles: () => (/* binding */ storeOriginalStyles)
/* harmony export */ });
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
// Common utilities for all modes

/**
 * Loads a font from a URL if it's not already loaded
 * @param {string} fontName The name of the font
 * @param {string} fontUrl The URL to load the font from
 * @param {string} fontFormat The format of the font (e.g. 'woff', 'woff2')
 * @returns {HTMLElement} The created style element
 */
function loadFont(fontName, fontUrl) {
  var fontFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'woff2';
  // Check if font is already loaded
  if (document.getElementById("neuro-font-".concat(fontName))) {
    return null;
  }

  // Create a style element with @font-face declaration
  var fontStyle = document.createElement('style');
  fontStyle.id = "neuro-font-".concat(fontName);
  fontStyle.setAttribute('data-neuro-customizer', 'font');

  // Add improved font loading with multiple fallback formats
  if (fontFormat === 'stylesheet') {
    // For Google Fonts or similar services that provide complete stylesheets
    fontStyle.textContent = "@import url('".concat(fontUrl, "');");
  } else {
    fontStyle.textContent = "\n      @font-face {\n        font-family: '".concat(fontName, "';\n        src: url('").concat(fontUrl, "') format('").concat(fontFormat, "');\n        font-weight: normal;\n        font-style: normal;\n        font-display: swap;\n      }\n    ");
  }
  document.head.appendChild(fontStyle);

  // Also preload the font for faster rendering
  var preloadLink = document.createElement('link');
  preloadLink.rel = 'preload';
  preloadLink.href = fontUrl;
  preloadLink.as = fontFormat === 'stylesheet' ? 'style' : 'font';
  preloadLink.setAttribute('data-neuro-customizer', 'font-preload');
  document.head.appendChild(preloadLink);

  // Track elements for cleanup
  if (!window.neuroCustomizerElements) {
    window.neuroCustomizerElements = [];
  }
  window.neuroCustomizerElements.push(fontStyle, preloadLink);
  return fontStyle;
}

/**
 * Creates and appends a style element with custom CSS
 * @param {string} id The ID to give the style element
 * @param {string} css The CSS content to add
 * @param {string} mode The mode this style belongs to
 * @returns {HTMLElement} The created style element
 */
function createStyleElement(id, css, mode) {
  var styleElement = document.createElement('style');
  styleElement.id = id;
  styleElement.setAttribute('data-neuro-customizer', mode);
  styleElement.textContent = css;
  document.head.appendChild(styleElement);
  return styleElement;
}

/**
 * Stores the original styles of elements to restore them later
 * @param {string} selector CSS selector for elements to store
 * @param {string} attribute The attribute to store original styles in
 */
function storeOriginalStyles(selector) {
  var attribute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'data-neuro-original-style';
  var elements = document.querySelectorAll(selector);
  elements.forEach(function (element) {
    if (!element.hasAttribute(attribute)) {
      element.setAttribute(attribute, element.getAttribute('style') || '');
    }
  });
}

/**
 * Creates MutationObserver to handle dynamically added elements
 * @param {Function} callback Function to call when new elements are added
 * @returns {MutationObserver} The created observer
 */
function createDynamicContentObserver(callback) {
  var observer = new MutationObserver(function (mutations) {
    var shouldCallback = false;
    var _iterator = _createForOfIteratorHelper(mutations),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var mutation = _step.value;
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          shouldCallback = true;
          break;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (shouldCallback) {
      callback();
    }
  });

  // Start observing
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Track observers for cleanup
  if (!window.neuroCustomizerObservers) {
    window.neuroCustomizerObservers = [];
  }
  window.neuroCustomizerObservers.push(observer);
  return observer;
}

/**
 * Gets user preference for animation (reduced or normal)
 * @returns {boolean} Whether user prefers reduced motion
 */
function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Creates a control button to add to the page
 * @param {string} id Button ID
 * @param {string} label Button label
 * @param {Function} onClick Click handler
 * @param {Object} options Additional options (position, icon, etc)
 * @returns {HTMLElement} The created button
 */
function createControlButton(id, label, onClick) {
  var _window$neuroCustomiz;
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  // Check if button already exists
  var existingButton = document.getElementById(id);
  if (existingButton) {
    return existingButton;
  }

  // Get theme for proper styling
  var websiteTheme = ((_window$neuroCustomiz = window.neuroCustomizerContext) === null || _window$neuroCustomiz === void 0 ? void 0 : _window$neuroCustomiz.websiteTheme) || 'light';

  // Default options
  var _options$position = options.position,
    position = _options$position === void 0 ? 'bottom-right' : _options$position,
    _options$icon = options.icon,
    icon = _options$icon === void 0 ? null : _options$icon,
    _options$tooltip = options.tooltip,
    tooltip = _options$tooltip === void 0 ? label : _options$tooltip,
    _options$size = options.size,
    size = _options$size === void 0 ? 'medium' : _options$size;

  // Create button
  var button = document.createElement('button');
  button.id = id;
  button.setAttribute('data-neuro-customizer', 'control');
  button.setAttribute('aria-label', tooltip);
  button.setAttribute('title', tooltip);

  // Position mapping
  var positions = {
    'top-left': 'top: 20px; left: 20px;',
    'top-right': 'top: 20px; right: 20px;',
    'bottom-left': 'bottom: 20px; left: 20px;',
    'bottom-right': 'bottom: 20px; right: 20px;'
  };

  // Size mapping
  var sizes = {
    'small': 'padding: 8px; font-size: 14px;',
    'medium': 'padding: 10px; font-size: 16px;',
    'large': 'padding: 12px; font-size: 18px;'
  };

  // Colors based on theme
  var colors = websiteTheme === 'dark' ? {
    bg: 'rgba(50, 50, 60, 0.8)',
    text: '#FFFFFF',
    border: '#6366F1',
    hover: 'rgba(70, 70, 80, 0.9)'
  } : {
    bg: 'rgba(255, 255, 255, 0.8)',
    text: '#333333',
    border: '#6366F1',
    hover: 'rgba(240, 240, 250, 0.9)'
  };

  // Set styles
  button.style.cssText = "\n    position: fixed;\n    ".concat(positions[position], ";\n    ").concat(sizes[size], ";\n    z-index: 999999;\n    background-color: ").concat(colors.bg, ";\n    color: ").concat(colors.text, ";\n    border: 2px solid ").concat(colors.border, ";\n    border-radius: 8px;\n    cursor: pointer;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n    transition: background-color 0.2s;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    backdrop-filter: blur(4px);\n  ");

  // Add hover effect
  button.addEventListener('mouseover', function () {
    button.style.backgroundColor = colors.hover;
  });
  button.addEventListener('mouseout', function () {
    button.style.backgroundColor = colors.bg;
  });

  // Add icon if provided
  if (icon) {
    button.innerHTML = "".concat(icon, " ").concat(label);
  } else {
    button.textContent = label;
  }

  // Add click handler
  button.addEventListener('click', onClick);

  // Add to page
  document.body.appendChild(button);

  // Track for cleanup
  if (!window.neuroCustomizerElements) {
    window.neuroCustomizerElements = [];
  }
  window.neuroCustomizerElements.push(button);
  return button;
}

// The simplified createControlButton function has been removed 
// as it was a duplicate of the more comprehensive version above

/***/ }),

/***/ "./src/content/utils/themeDetection.js":
/*!*********************************************!*\
  !*** ./src/content/utils/themeDetection.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   detectWebsiteTheme: () => (/* binding */ detectWebsiteTheme),
/* harmony export */   getSiteSpecificSettings: () => (/* binding */ getSiteSpecificSettings),
/* harmony export */   isYouTube: () => (/* binding */ isYouTube)
/* harmony export */ });
// Website theme detection utilities

/**
 * Detects whether the current website is using a dark or light theme
 * Uses multiple heuristics for more accurate detection
 * @returns {string} 'dark' or 'light'
 */
function detectWebsiteTheme() {
  try {
    // Get body and main content background colors
    var bodyStyles = window.getComputedStyle(document.body);
    var bodyBgColor = bodyStyles.backgroundColor;
    var bodyTextColor = bodyStyles.color;

    // Also check main content area if it exists
    var mainContentBgColor = bodyBgColor;
    var mainContentTextColor = bodyTextColor;

    // Try to find main content area for more accurate detection
    var mainContentSelectors = ['main', '[role="main"]', '#content', '.content', 'article', '.main-content', '#main-content'];
    for (var _i = 0, _mainContentSelectors = mainContentSelectors; _i < _mainContentSelectors.length; _i++) {
      var selector = _mainContentSelectors[_i];
      var mainContent = document.querySelector(selector);
      if (mainContent) {
        var mainStyles = window.getComputedStyle(mainContent);
        // Only use if background color is explicitly set
        if (mainStyles.backgroundColor && mainStyles.backgroundColor !== 'rgba(0, 0, 0, 0)') {
          mainContentBgColor = mainStyles.backgroundColor;
          mainContentTextColor = mainStyles.color;
          break;
        }
      }
    }

    // Convert RGB/RGBA to brightness value (0-255)
    var getBrightness = function getBrightness(color) {
      // Extract RGB values
      var rgb = color.match(/\d+/g);
      if (!rgb || rgb.length < 3) return 128; // Default to middle if can't detect

      // Calculate brightness using improved formula
      // Brightness = 0.299*R + 0.587*G + 0.114*B
      return Math.round(0.299 * parseInt(rgb[0]) + 0.587 * parseInt(rgb[1]) + 0.114 * parseInt(rgb[2]));
    };

    // Get brightness values
    var bodyBgBrightness = getBrightness(bodyBgColor);
    var bodyTextBrightness = getBrightness(bodyTextColor);
    var mainBgBrightness = getBrightness(mainContentBgColor);
    var mainTextBrightness = getBrightness(mainContentTextColor);

    // Special cases for common sites
    if (isYouTube()) {
      // Check for YouTube dark mode by looking for specific selectors
      var ytDarkMode = document.documentElement.getAttribute('dark') === 'true';
      if (ytDarkMode !== null) {
        return ytDarkMode === 'true' ? 'dark' : 'light';
      }
      // Fallback to checking specific YouTube dark mode elements
      var ytAppDark = document.querySelector('ytd-app[dark]');
      if (ytAppDark) {
        return ytAppDark.getAttribute('dark') === 'true' ? 'dark' : 'light';
      }
    }

    // Check meta theme-color tag
    var metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      var themeColor = metaThemeColor.getAttribute('content');
      if (themeColor) {
        // If theme color is specified, check its brightness
        var themeColorBrightness = getBrightness(themeColor);
        if (themeColorBrightness < 128) {
          return 'dark';
        } else if (themeColorBrightness > 200) {
          return 'light';
        }
      }
    }

    // Advanced heuristic: check common dark mode class names
    var htmlElement = document.documentElement;
    var bodyElement = document.body;
    var darkModeClasses = ['dark', 'dark-mode', 'darkmode', 'night-mode', 'nightmode', 'theme-dark', 'dark-theme'];
    var hasDarkClass = darkModeClasses.some(function (className) {
      return htmlElement.classList.contains(className) || bodyElement.classList.contains(className);
    });
    if (hasDarkClass) {
      return 'dark';
    }

    // Check for light mode classes too
    var lightModeClasses = ['light', 'light-mode', 'lightmode', 'day-mode', 'daymode', 'theme-light', 'light-theme'];
    var hasLightClass = lightModeClasses.some(function (className) {
      return htmlElement.classList.contains(className) || bodyElement.classList.contains(className);
    });
    if (hasLightClass) {
      return 'light';
    }

    // Use content area brightness as primary indicator if available
    if (mainBgBrightness !== bodyBgBrightness) {
      return mainBgBrightness < 128 ? 'dark' : 'light';
    }

    // Use body as fallback
    return bodyBgBrightness < 128 ? 'dark' : 'light';
  } catch (error) {
    console.error('Error detecting website theme:', error);
    return 'light'; // Default to light if detection fails
  }
}

/**
 * Determines if the current website is YouTube
 * @returns {boolean}
 */
function isYouTube() {
  return window.location.hostname.includes('youtube.com');
}

/**
 * Gets site-specific optimized settings for known websites
 * @returns {Object} Site-specific settings
 */
function getSiteSpecificSettings() {
  var hostname = window.location.hostname;

  // YouTube-specific settings
  if (hostname.includes('youtube.com')) {
    return {
      sidebarSelector: 'ytd-guide-renderer, tp-yt-app-drawer',
      contentSelector: 'ytd-page-manager',
      isDynamic: true,
      adSelectors: ['ytd-display-ad-renderer', 'ytd-ad-slot-renderer', 'ytd-in-feed-ad-layout-renderer'],
      preserveElements: [
      // Video player
      'video', '.html5-video-container', 'ytd-player', '.ytp-cued-thumbnail-overlay',
      // Sidebar and navigation
      '#guide-content', 'ytd-mini-guide-renderer', 'ytd-guide-section-renderer', 'ytd-guide-entry-renderer',
      // Thumbnails
      'ytd-thumbnail', 'ytd-playlist-thumbnail', 'yt-img-shadow'],
      excludeFromHighContrast: ['ytd-thumbnail', 'ytd-playlist-thumbnail', 'img[src*="ytimg"]', 'yt-img-shadow img', '.ytp-videowall-still', 'video', '.html5-video-container'],
      fixStyles: {
        sidebar: "\n          #guide-content {\n            background-color: inherit !important;\n          }\n          ytd-guide-entry-renderer, \n          ytd-guide-section-renderer {\n            background-color: transparent !important;\n          }\n          ytd-mini-guide-renderer {\n            background-color: inherit !important;\n          }\n        ",
        playerControls: "\n          .ytp-chrome-bottom {\n            background-color: rgba(0, 0, 0, 0.5) !important;\n          }\n          .ytp-chrome-controls button,\n          .ytp-time-display {\n            background-color: transparent !important;\n          }\n        "
      }
    };
  }

  // Google sites
  if (hostname.includes('google.com')) {
    return {
      isDynamic: true,
      preserveElements: ['.gb_Vd',
      // Google menu
      '.hdtb-mitem',
      // Search filters
      'img',
      // Images
      'g-img',
      // Google images
      '.kno-fv' // Knowledge panel images
      ],
      fixStyles: {
        searchBox: "\n          .gLFyf {\n            background-color: inherit !important;\n            border: 1px solid currentColor !important;\n          }\n        "
      }
    };
  }

  // Default settings for other sites
  return {
    isDynamic: false,
    preserveElements: ['img', 'video', 'svg', 'canvas', 'iframe', '[role="img"]']
  };
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
/* harmony import */ var _utils_themeDetection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/themeDetection */ "./src/content/utils/themeDetection.js");
// Content script for Neurodiversity Web Customizer
// This will be injected into web pages to apply the selected visual mode








// Check if a mode is already active on this page
var currentMode = null;
var websiteTheme = 'light';
var siteSettings = {};

// Initialize and detect website theme
function initialize() {
  // Detect website theme (dark or light)
  websiteTheme = (0,_utils_themeDetection__WEBPACK_IMPORTED_MODULE_5__.detectWebsiteTheme)();
  console.log('Detected website theme:', websiteTheme);

  // Get site-specific settings
  siteSettings = (0,_utils_themeDetection__WEBPACK_IMPORTED_MODULE_5__.getSiteSpecificSettings)();

  // Store theme and site settings in window for modes to access
  window.neuroCustomizerContext = {
    websiteTheme: websiteTheme,
    siteSettings: siteSettings,
    systemPrefersDark: window.matchMedia('(prefers-color-scheme: dark)').matches
  };

  // Listen for theme changes (system or website)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (event) {
    window.neuroCustomizerContext.systemPrefersDark = event.matches;

    // If a mode is active, reapply it to adapt to new system preference
    if (currentMode) {
      // Re-detect website theme as it might have changed
      window.neuroCustomizerContext.websiteTheme = (0,_utils_themeDetection__WEBPACK_IMPORTED_MODULE_5__.detectWebsiteTheme)();
      applyMode(currentMode);
    }
  });

  // Check if we should apply a saved mode
  chrome.runtime.sendMessage({
    action: 'getModeStatus'
  }, function (response) {
    if (response && response.activeMode && response.activeMode !== 'default') {
      applyMode(response.activeMode);
    }
  });

  // For dynamic sites, periodically check if theme has changed
  if (siteSettings.isDynamic) {
    setInterval(function () {
      var newTheme = (0,_utils_themeDetection__WEBPACK_IMPORTED_MODULE_5__.detectWebsiteTheme)();
      if (newTheme !== window.neuroCustomizerContext.websiteTheme) {
        window.neuroCustomizerContext.websiteTheme = newTheme;
        console.log('Website theme changed to:', newTheme);

        // Reapply current mode if active
        if (currentMode) {
          applyMode(currentMode);
        }
      }
    }, 2000); // Check every 2 seconds
  }
}

// Run initialization
initialize();

// Listen for messages from popup or background
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'applyMode') {
    applyMode(request.mode);
    sendResponse({
      success: true
    });
    return true;
  } else if (request.action === 'getCurrentMode') {
    sendResponse({
      currentMode: currentMode || 'default',
      websiteTheme: window.neuroCustomizerContext.websiteTheme
    });
    return true;
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