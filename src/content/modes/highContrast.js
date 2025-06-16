// High Contrast Mode implementation

export function applyHighContrastMode() {
  // Add a class to the body
  document.body.classList.add('neuro-high-contrast-mode');
    // Create a style element
  const styleElement = document.createElement('style');
  styleElement.setAttribute('data-neuro-customizer', 'high-contrast');
  
  // Improved CSS for high contrast mode
  styleElement.textContent = `
    /* Basic high contrast for body */
    body.neuro-high-contrast-mode {
      background-color: black !important;
      color: white !important;
    }
    
    /* Text elements - more targeted selectors */
    body.neuro-high-contrast-mode h1,
    body.neuro-high-contrast-mode h2,
    body.neuro-high-contrast-mode h3,
    body.neuro-high-contrast-mode h4,
    body.neuro-high-contrast-mode h5,
    body.neuro-high-contrast-mode h6,
    body.neuro-high-contrast-mode p,
    body.neuro-high-contrast-mode li,
    body.neuro-high-contrast-mode dt,
    body.neuro-high-contrast-mode dd,
    body.neuro-high-contrast-mode label,
    body.neuro-high-contrast-mode figcaption {
      color: white !important;
      text-shadow: none !important;
    }
    
    /* More selective background color application */
    body.neuro-high-contrast-mode article,
    body.neuro-high-contrast-mode section,
    body.neuro-high-contrast-mode nav,
    body.neuro-high-contrast-mode aside,
    body.neuro-high-contrast-mode header,
    body.neuro-high-contrast-mode footer,
    body.neuro-high-contrast-mode main {
      background-color: black !important;
    }
    
    /* Links */
    body.neuro-high-contrast-mode a:link,
    body.neuro-high-contrast-mode a:visited {
      color: yellow !important;
      text-decoration: underline !important;
    }
    
    body.neuro-high-contrast-mode a:hover,
    body.neuro-high-contrast-mode a:active {
      color: #FFFF66 !important;
      background-color: #333 !important;
    }
    
    /* Remove subtle visual effects but preserve images */
    body.neuro-high-contrast-mode * {
      text-shadow: none !important;
      box-shadow: none !important;
    }
    
    /* Only remove decorative background images, not content images */
    body.neuro-high-contrast-mode header,
    body.neuro-high-contrast-mode footer,
    body.neuro-high-contrast-mode nav,
    body.neuro-high-contrast-mode aside {
      background-image: none !important;
    }
    
    /* Increase font size slightly */
    body.neuro-high-contrast-mode {
      font-size: 110% !important;
    }
    
    /* Buttons and form elements */
    body.neuro-high-contrast-mode button,
    body.neuro-high-contrast-mode input,
    body.neuro-high-contrast-mode select,
    body.neuro-high-contrast-mode textarea {
      border: 2px solid white !important;
      background-color: black !important;
      color: white !important;
    }
    
    /* Ensure form elements are clearly visible */
    body.neuro-high-contrast-mode input:focus,
    body.neuro-high-contrast-mode select:focus,
    body.neuro-high-contrast-mode textarea:focus,
    body.neuro-high-contrast-mode button:focus {
      outline: 3px solid yellow !important;
    }
    
    /* Improved image handling - more gentle approach */
    body.neuro-high-contrast-mode img,body.neuro-high-contrast-mode svg {
      /* Only apply minimal contrast enhancement */
      filter: contrast(105%) !important;
      /* Don't override position to prevent layout issues */
      z-index: auto !important;
      /* Preserve original dimensions */
      max-width: 100% !important;
      height: auto !important;
    }
      /* Target background-size property to prevent image cutoff */
    body.neuro-high-contrast-mode [style*="background-size"] {
      background-size: auto !important;
    }
    
    /* Video elements - more gentle treatment */
    body.neuro-high-contrast-mode video,
    body.neuro-high-contrast-mode canvas {
      border: 1px solid white !important;
    }
    
    /* Tables */
    body.neuro-high-contrast-mode table,
    body.neuro-high-contrast-mode th,
    body.neuro-high-contrast-mode td {
      border: 2px solid white !important;
    }
    
    body.neuro-high-contrast-mode th {
      background-color: #333 !important;
      color: white !important;
    }
      /* Alternative mode: black on yellow */
    body.neuro-high-contrast-mode .alt-contrast,
    body.neuro-high-contrast-mode [data-high-contrast="yellow"] {
      background-color: yellow !important;
      color: black !important;
    }
  `;
  
  // Append the style element to the document head
  document.head.appendChild(styleElement);
    // Fix for SVG images that might be getting clipped or hidden
  const svgFix = document.createElement('style');
  svgFix.setAttribute('data-neuro-customizer', 'high-contrast-svg-fix');
  svgFix.textContent = `
    /* Special handling for SVG elements */
    body.neuro-high-contrast-mode svg {
      overflow: visible !important;
    }
    
    /* Fix for images inside containers with overflow:hidden */
    body.neuro-high-contrast-mode img {
      max-width: 100% !important;
      object-fit: contain !important;
    }
    
    /* Fix for background images */
    body.neuro-high-contrast-mode [style*="background-image"] {
      background-size: contain !important;
      background-position: center !important;
    }
    
    /* Prevent filtering or distortion of images */
    body.neuro-high-contrast-mode img,
    body.neuro-high-contrast-mode video,
    body.neuro-high-contrast-mode iframe,
    body.neuro-high-contrast-mode canvas,
    body.neuro-high-contrast-mode [style*="background-image"] {
      filter: none !important;
      -webkit-filter: none !important;
    }
    
    /* Ensure images within components are displayed properly */
    body.neuro-high-contrast-mode img[src],
    body.neuro-high-contrast-mode [style*="background-image"] {
      display: inline-block !important;
      visibility: visible !important;
    }
  `;
  document.head.appendChild(svgFix);
  
  // Add a color scheme toggle button
  const toggleButton = document.createElement('button');
  toggleButton.id = 'neuro-high-contrast-toggle';
  toggleButton.textContent = 'Switch to Yellow/Black';
  toggleButton.setAttribute('aria-label', 'Toggle high contrast color scheme between white on black and black on yellow');
  toggleButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 8px 12px;
    background-color: #333;
    color: white;
    border: 2px solid white;
    border-radius: 4px;
    font-size: 14px;
    z-index: 9999;
    cursor: pointer;
  `;
  
  // Toggle between color schemes
  let isYellowMode = false;
  toggleButton.addEventListener('click', () => {
    isYellowMode = !isYellowMode;
    
    if (isYellowMode) {
      // Apply yellow background / black text
      const yellowMode = document.createElement('style');
      yellowMode.id = 'neuro-high-contrast-yellow-mode';
      yellowMode.setAttribute('data-neuro-customizer', 'high-contrast-yellow');      yellowMode.textContent = `
        body.neuro-high-contrast-mode {
          background-color: yellow !important;
          color: black !important;
        }
        
        body.neuro-high-contrast-mode article,
        body.neuro-high-contrast-mode section,
        body.neuro-high-contrast-mode nav,
        body.neuro-high-contrast-mode aside,
        body.neuro-high-contrast-mode header,
        body.neuro-high-contrast-mode footer,
        body.neuro-high-contrast-mode main {
          background-color: yellow !important;
        }
        
        body.neuro-high-contrast-mode h1,
        body.neuro-high-contrast-mode h2,
        body.neuro-high-contrast-mode h3,
        body.neuro-high-contrast-mode h4,
        body.neuro-high-contrast-mode h5,
        body.neuro-high-contrast-mode h6,
        body.neuro-high-contrast-mode p,
        body.neuro-high-contrast-mode li,
        body.neuro-high-contrast-mode dt,
        body.neuro-high-contrast-mode dd,
        body.neuro-high-contrast-mode label,
        body.neuro-high-contrast-mode figcaption {
          color: black !important;
        }
        
        body.neuro-high-contrast-mode a:link,
        body.neuro-high-contrast-mode a:visited {
          color: blue !important;
        }
        
        body.neuro-high-contrast-mode a:hover,
        body.neuro-high-contrast-mode a:active {
          color: navy !important;
          background-color: #FFFF99 !important;
        }
        
        body.neuro-high-contrast-mode button,
        body.neuro-high-contrast-mode input,
        body.neuro-high-contrast-mode select,
        body.neuro-high-contrast-mode textarea {
          border: 2px solid black !important;
          background-color: yellow !important;
          color: black !important;
        }
        
        body.neuro-high-contrast-mode input:focus,
        body.neuro-high-contrast-mode select:focus,
        body.neuro-high-contrast-mode textarea:focus,
        body.neuro-high-contrast-mode button:focus {
          outline: 3px solid blue !important;
        }
        
        body.neuro-high-contrast-mode th {
          background-color: #FFCC00 !important;
          color: black !important;
        }
        
        /* Fix for potential text readability issues */
        body.neuro-high-contrast-mode [style*="color: white"],
        body.neuro-high-contrast-mode [style*="color:#fff"],
        body.neuro-high-contrast-mode [style*="color: #fff"],
        body.neuro-high-contrast-mode [style*="color:#ffffff"],
        body.neuro-high-contrast-mode [style*="color: #ffffff"] {
          color: black !important;
        }
      `;
      document.head.appendChild(yellowMode);
      toggleButton.textContent = 'Switch to Black/White';
      toggleButton.style.backgroundColor = '#FFCC00';
      toggleButton.style.color = 'black';
      toggleButton.style.borderColor = 'black';
    } else {
      // Remove yellow mode
      const yellowMode = document.getElementById('neuro-high-contrast-yellow-mode');
      if (yellowMode) {
        yellowMode.remove();
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
    disconnect: () => {
      // Remove toggle button if it exists
      const toggleButton = document.getElementById('neuro-high-contrast-toggle');
      if (toggleButton) {
        toggleButton.remove();
      }
      
      // Remove yellow mode styles if active
      const yellowMode = document.getElementById('neuro-high-contrast-yellow-mode');
      if (yellowMode) {
        yellowMode.remove();
      }
    }
  });
  
  console.log('Improved high contrast mode applied');
}
