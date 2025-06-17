// Common utilities for all modes

/**
 * Loads a font from a URL if it's not already loaded
 * @param {string} fontName The name of the font
 * @param {string} fontUrl The URL to load the font from
 * @param {string} fontFormat The format of the font (e.g. 'woff', 'woff2')
 * @returns {HTMLElement} The created style element
 */
export function loadFont(fontName, fontUrl, fontFormat = 'woff2') {
  // Check if font is already loaded
  if (document.getElementById(`neuro-font-${fontName}`)) {
    return null;
  }
  
  // Create a style element with @font-face declaration
  const fontStyle = document.createElement('style');
  fontStyle.id = `neuro-font-${fontName}`;
  fontStyle.setAttribute('data-neuro-customizer', 'font');
  
  // Add improved font loading with multiple fallback formats
  if (fontFormat === 'stylesheet') {
    // For Google Fonts or similar services that provide complete stylesheets
    fontStyle.textContent = `@import url('${fontUrl}');`;
  } else {
    fontStyle.textContent = `
      @font-face {
        font-family: '${fontName}';
        src: url('${fontUrl}') format('${fontFormat}');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }
    `;
  }
  
  document.head.appendChild(fontStyle);
  
  // Also preload the font for faster rendering
  const preloadLink = document.createElement('link');
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
export function createStyleElement(id, css, mode) {
  const styleElement = document.createElement('style');
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
export function storeOriginalStyles(selector, attribute = 'data-neuro-original-style') {
  const elements = document.querySelectorAll(selector);
  elements.forEach(element => {
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
export function createDynamicContentObserver(callback) {
  const observer = new MutationObserver((mutations) => {
    let shouldCallback = false;
    
    for (const mutation of mutations) {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        shouldCallback = true;
        break;
      }
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
export function prefersReducedMotion() {
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
export function createControlButton(id, label, onClick, options = {}) {
  // Check if button already exists
  const existingButton = document.getElementById(id);
  if (existingButton) {
    return existingButton;
  }
  
  // Get theme for proper styling
  const websiteTheme = window.neuroCustomizerContext?.websiteTheme || 'light';
  
  // Default options
  const {
    position = 'bottom-right',
    icon = null,
    tooltip = label,
    size = 'medium'
  } = options;
  
  // Create button
  const button = document.createElement('button');
  button.id = id;
  button.setAttribute('data-neuro-customizer', 'control');
  button.setAttribute('aria-label', tooltip);
  button.setAttribute('title', tooltip);
  
  // Position mapping
  const positions = {
    'top-left': 'top: 20px; left: 20px;',
    'top-right': 'top: 20px; right: 20px;',
    'bottom-left': 'bottom: 20px; left: 20px;',
    'bottom-right': 'bottom: 20px; right: 20px;'
  };
  
  // Size mapping
  const sizes = {
    'small': 'padding: 8px; font-size: 14px;',
    'medium': 'padding: 10px; font-size: 16px;',
    'large': 'padding: 12px; font-size: 18px;'
  };
  
  // Colors based on theme
  const colors = websiteTheme === 'dark'
    ? {
        bg: 'rgba(50, 50, 60, 0.8)',
        text: '#FFFFFF',
        border: '#6366F1',
        hover: 'rgba(70, 70, 80, 0.9)'
      }
    : {
        bg: 'rgba(255, 255, 255, 0.8)',
        text: '#333333',
        border: '#6366F1',
        hover: 'rgba(240, 240, 250, 0.9)'
      };
  
  // Set styles
  button.style.cssText = `
    position: fixed;
    ${positions[position]};
    ${sizes[size]};
    z-index: 999999;
    background-color: ${colors.bg};
    color: ${colors.text};
    border: 2px solid ${colors.border};
    border-radius: 8px;
    cursor: pointer;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: background-color 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    backdrop-filter: blur(4px);
  `;
  
  // Add hover effect
  button.addEventListener('mouseover', () => {
    button.style.backgroundColor = colors.hover;
  });
  
  button.addEventListener('mouseout', () => {
    button.style.backgroundColor = colors.bg;
  });
  
  // Add icon if provided
  if (icon) {
    button.innerHTML = `${icon} ${label}`;
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
