// Focus mode (ADHD/Attention Support) implementation

export function applyFocusMode() {
  // Add a class to the body
  document.body.classList.add('neuro-focus-mode');
  
  // Create a style element
  const styleElement = document.createElement('style');
  styleElement.setAttribute('data-neuro-customizer', 'focus');
  
  // CSS for focus mode - redesigned to be more subtle and practical
  styleElement.textContent = `
    /* Base styles */
    body.neuro-focus-mode {
      overflow-x: hidden !important;
    }
    
    /* Improved paragraph readability - subtle improvements to text */
    body.neuro-focus-mode p,
    body.neuro-focus-mode li,
    body.neuro-focus-mode h1,
    body.neuro-focus-mode h2,
    body.neuro-focus-mode h3,
    body.neuro-focus-mode h4,
    body.neuro-focus-mode h5,
    body.neuro-focus-mode h6 {
      line-height: 1.6 !important;
      max-width: 70ch !important; /* Optimum reading width */
      margin-left: auto !important;
      margin-right: auto !important;
    }
    
    /* Subtle paragraph spacing for improved focus */
    body.neuro-focus-mode p,
    body.neuro-focus-mode li {
      margin-bottom: 1.2em !important;
      padding-left: 0.5em !important;
      border-left: 3px solid rgba(99, 102, 241, 0.1) !important; /* Very subtle left border */
    }
    
    /* Current paragraph highlight when hovered */
    body.neuro-focus-mode p:hover,
    body.neuro-focus-mode li:hover {
      background-color: rgba(99, 102, 241, 0.05) !important;
      border-left-color: rgba(99, 102, 241, 0.5) !important;
    }
    
    /* Reduce animation distractions without breaking functionality */
    body.neuro-focus-mode * {
      animation-duration: 0.1s !important; /* Shortens animations rather than removing them */
    }
    
    /* Subtly reduce visual prominence of likely distracting elements */
    body.neuro-focus-mode aside,
    body.neuro-focus-mode [role="complementary"],
    body.neuro-focus-mode nav:not([aria-label="breadcrumb"]):not([aria-label="Breadcrumb"]),
    body.neuro-focus-mode [role="banner"],
    body.neuro-focus-mode [role="navigation"],
    body.neuro-focus-mode footer,
    body.neuro-focus-mode [role="contentinfo"] {
      opacity: 0.75 !important;
      filter: grayscale(30%) !important;
      transition: opacity 0.2s ease, filter 0.2s ease !important;
    }
    
    /* Restore on hover/focus */
    body.neuro-focus-mode aside:hover,
    body.neuro-focus-mode [role="complementary"]:hover,
    body.neuro-focus-mode nav:hover,
    body.neuro-focus-mode [role="banner"]:hover,
    body.neuro-focus-mode [role="navigation"]:hover,
    body.neuro-focus-mode footer:hover,
    body.neuro-focus-mode [role="contentinfo"]:hover,
    body.neuro-focus-mode aside:focus-within,
    body.neuro-focus-mode [role="complementary"]:focus-within,
    body.neuro-focus-mode nav:focus-within,
    body.neuro-focus-mode [role="banner"]:focus-within,
    body.neuro-focus-mode [role="navigation"]:focus-within,
    body.neuro-focus-mode footer:focus-within,
    body.neuro-focus-mode [role="contentinfo"]:focus-within {
      opacity: 1 !important;
      filter: none !important;
    }
    
    /* Only target actual ads, not general images */
    body.neuro-focus-mode iframe[src*="ad.doubleclick"],
    body.neuro-focus-mode iframe[src*="googleadservices"],
    body.neuro-focus-mode div[id^="div-gpt-ad"],
    body.neuro-focus-mode div[data-ad],
    body.neuro-focus-mode div[class^="AdTheme"] {
      opacity: 0.3 !important;
    }
    
    /* Only reduce distraction from autoplaying videos, not all videos */
    body.neuro-focus-mode video[autoplay],
    body.neuro-focus-mode video[data-autoplay="true"] {
      opacity: 0.4 !important;
    }
    
    /* Improve visibility of videos on hover */
    body.neuro-focus-mode video:hover {
      opacity: 1 !important;
      filter: none !important;
    }
    
    /* Reading ruler styles - improved contrast and visibility */
    #neuro-reading-ruler {
      position: fixed;
      left: 0;
      width: 100%;
      height: 32px;
      background-color: rgba(99, 102, 241, 0.05);
      border-top: 1px solid rgba(99, 102, 241, 0.3);
      border-bottom: 1px solid rgba(99, 102, 241, 0.3);
      pointer-events: none;
      z-index: 9999;
      box-shadow: 0 0 8px 8px rgba(99, 102, 241, 0.02);
      transition: top 0.1s ease;
    }
  `;
  
  // Append the style element to the document head
  document.head.appendChild(styleElement);
    // Create reading ruler element
  const readingRuler = document.createElement('div');
  readingRuler.id = 'neuro-reading-ruler';
  readingRuler.style.top = '100px';
  document.body.appendChild(readingRuler);
  
  // Reading ruler follows mouse with a smoother experience
  const updateRulerPosition = (e) => {
    if (!e || !e.clientY) return; // Skip if no valid event
    
    // Get current ruler position
    const currentTop = parseInt(readingRuler.style.top) || 0;
    
    // Calculate new position with slight smoothing (avoid jarring movements)
    const targetTop = e.clientY;
    const newTop = currentTop + (targetTop - currentTop) * 0.3; // Smooth easing
    
    // Apply the new position
    readingRuler.style.top = `${newTop}px`;
  };
  
  // Add mousemove listener for reading ruler
  document.addEventListener('mousemove', updateRulerPosition);
  
  // Add alternate keyboard control for the reading ruler
  document.addEventListener('keydown', (e) => {
    // Allow moving the reading ruler with arrow keys
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      // Only handle if no input element is focused
      if (document.activeElement.tagName !== 'INPUT' && 
          document.activeElement.tagName !== 'TEXTAREA' &&
          !document.activeElement.isContentEditable) {
        
        e.preventDefault(); // Prevent page scrolling
        
        // Get current position
        const currentTop = parseInt(readingRuler.style.top) || 0;
        
        // Move up or down by 20px
        const newTop = currentTop + (e.key === 'ArrowDown' ? 20 : -20);
        readingRuler.style.top = `${newTop}px`;
      }
    }
  });
  
  // Store the observers to remove them later
  if (!window.neuroCustomizerObservers) {
    window.neuroCustomizerObservers = [];
  }
  
  window.neuroCustomizerObservers.push({
    disconnect: () => {
      document.removeEventListener('mousemove', updateRulerPosition);
      document.removeEventListener('keydown', (e) => {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
          e.preventDefault();
        }
      });
    }
  });
  
  // Add hint tooltip for keyboard controls
  const keyboardHintTooltip = document.createElement('div');
  keyboardHintTooltip.id = 'neuro-keyboard-hint';
  keyboardHintTooltip.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 15px;
    background-color: rgba(79, 70, 229, 0.1);
    border: 1px solid rgba(79, 70, 229, 0.3);
    border-radius: 4px;
    font-size: 12px;
    color: #4f46e5;
    z-index: 9999;
    pointer-events: none;
    opacity: 0.9;
    transition: opacity 0.3s ease;
  `;
  keyboardHintTooltip.textContent = 'Tip: Use ↑/↓ keys to move reading ruler';
  document.body.appendChild(keyboardHintTooltip);
  
  // Hide the tooltip after 8 seconds
  setTimeout(() => {
    keyboardHintTooltip.style.opacity = '0';
    // Remove from DOM after fade out
    setTimeout(() => keyboardHintTooltip.remove(), 300);
  }, 8000);
  
  console.log('Improved Focus mode applied');
}
