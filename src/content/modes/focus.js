// Focus mode (ADHD/Attention Support) implementation

export function applyFocusMode() {
  // Add a class to the body
  document.body.classList.add('neuro-focus-mode');
  
  // Create a style element
  const styleElement = document.createElement('style');
  styleElement.setAttribute('data-neuro-customizer', 'focus');
  
  // CSS for focus mode
  styleElement.textContent = `
    /* Main content emphasis */
    body.neuro-focus-mode {
      overflow-x: hidden !important;
    }
    
    /* Dim non-main content areas */
    body.neuro-focus-mode > *:not(main):not(article):not([role="main"]):not([role="article"]):not(.content):not(#content) {
      opacity: 0.6 !important;
      filter: blur(1px) !important;
      transition: opacity 0.3s ease, filter 0.3s ease !important;
    }
    
    body.neuro-focus-mode > *:not(main):not(article):not([role="main"]):not([role="article"]):not(.content):not(#content):hover {
      opacity: 1 !important;
      filter: blur(0) !important;
    }
    
    /* Emphasize main content */
    body.neuro-focus-mode main,
    body.neuro-focus-mode article,
    body.neuro-focus-mode [role="main"],
    body.neuro-focus-mode [role="article"],
    body.neuro-focus-mode .content,
    body.neuro-focus-mode #content {
      box-shadow: 0 0 0 1000px rgba(0, 0, 0, 0.05) !important;
      position: relative !important;
      z-index: 1 !important;
      background-color: rgba(255, 255, 255, 0.95) !important;
    }
    
    /* Increase spacing for readability */
    body.neuro-focus-mode p,
    body.neuro-focus-mode li {
      line-height: 1.8 !important;
      margin-bottom: 1.5em !important;
    }
    
    /* Suppress animations and distracting elements */
    body.neuro-focus-mode * {
      animation: none !important;
      transition: opacity 0.3s ease, filter 0.3s ease !important;
    }
    
    /* Specific distracting elements */
    body.neuro-focus-mode iframe[src*="ads"],
    body.neuro-focus-mode iframe[src*="doubleclick"],
    body.neuro-focus-mode div[class*="ad-"],
    body.neuro-focus-mode div[id*="ad-"],
    body.neuro-focus-mode [class*="social"],
    body.neuro-focus-mode [id*="social"] {
      opacity: 0.3 !important;
      filter: grayscale(100%) blur(2px) !important;
    }
    
    /* Hide auto-playing videos, animated GIFs */
    body.neuro-focus-mode video,
    body.neuro-focus-mode [class*="player"],
    body.neuro-focus-mode [id*="player"] {
      opacity: 0.1 !important;
      filter: grayscale(100%) !important;
    }
    
    /* Reading ruler styles */
    #neuro-reading-ruler {
      position: fixed;
      left: 0;
      width: 100%;
      height: 40px;
      background-color: rgba(255, 255, 0, 0.05);
      border-top: 1px solid rgba(255, 255, 0, 0.3);
      border-bottom: 1px solid rgba(255, 255, 0, 0.3);
      pointer-events: none;
      z-index: 9999;
      box-shadow: 0 0 10px 10px rgba(255, 255, 0, 0.02);
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
  
  // Reading ruler follows mouse or scroll position
  const updateRulerPosition = (e) => {
    const y = e.clientY || window.innerHeight / 2;
    readingRuler.style.top = `${y}px`;
  };
  
  document.addEventListener('mousemove', updateRulerPosition);
  
  // Store the observer to remove it later
  if (!window.neuroCustomizerObservers) {
    window.neuroCustomizerObservers = [];
  }
  
  window.neuroCustomizerObservers.push({
    disconnect: () => {
      document.removeEventListener('mousemove', updateRulerPosition);
    }
  });
  
  console.log('Focus mode applied');
}
