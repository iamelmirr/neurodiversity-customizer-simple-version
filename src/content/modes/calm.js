// Calm/Low-Stimulation Mode (Autism-Friendly) implementation

export function applyCalmMode() {
  // Add a class to the body
  document.body.classList.add('neuro-calm-mode');
  
  // Create a style element
  const styleElement = document.createElement('style');
  styleElement.setAttribute('data-neuro-customizer', 'calm');
  
  // CSS for calm/low-stimulation mode
  styleElement.textContent = `
    /* Soft color palette */
    body.neuro-calm-mode {
      background-color: #F0F3F6 !important;
      color: #333 !important;
      filter: saturate(85%) !important;
      transition: none !important;
    }
    
    /* Apply softer colors to all elements */
    body.neuro-calm-mode * {
      animation: none !important;
      transition: none !important;
    }
    
    /* Muted text */
    body.neuro-calm-mode h1,
    body.neuro-calm-mode h2,
    body.neuro-calm-mode h3,
    body.neuro-calm-mode h4,
    body.neuro-calm-mode h5,
    body.neuro-calm-mode h6,
    body.neuro-calm-mode p,
    body.neuro-calm-mode li,
    body.neuro-calm-mode span {
      color: #404040 !important;
      font-weight: normal !important;
      text-shadow: none !important;
    }
    
    /* Soften backgrounds */
    body.neuro-calm-mode div,
    body.neuro-calm-mode section,
    body.neuro-calm-mode article,
    body.neuro-calm-mode aside,
    body.neuro-calm-mode nav {
      background-image: none !important;
      box-shadow: none !important;
    }
    
    /* Remove or reduce busy backgrounds */
    body.neuro-calm-mode [style*="background-image"] {
      background-image: none !important;
      background-color: #F0F3F6 !important;
    }
    
    /* Reduce font boldness */
    body.neuro-calm-mode strong,
    body.neuro-calm-mode b {
      font-weight: normal !important;
    }
    
    /* Enlarge clickable elements */
    body.neuro-calm-mode a,
    body.neuro-calm-mode button,
    body.neuro-calm-mode input[type="button"],
    body.neuro-calm-mode input[type="submit"] {
      padding: 0.5em !important;
      margin: 0.3em !important;
      border-radius: 4px !important;
    }
    
    /* Suppress hover effects */
    body.neuro-calm-mode a:hover,
    body.neuro-calm-mode button:hover,
    body.neuro-calm-mode *:hover {
      transform: none !important;
      filter: none !important;
      background-image: none !important;
    }
    
    /* Soften links */
    body.neuro-calm-mode a:link,
    body.neuro-calm-mode a:visited {
      color: #2A5D8A !important;
      text-decoration: underline !important;
    }
    
    /* Suppress blinking or flashing elements */
    body.neuro-calm-mode [class*="blink"],
    body.neuro-calm-mode [class*="flash"],
    body.neuro-calm-mode [class*="alert"] {
      animation: none !important;
      opacity: 0.8 !important;
    }
    
    /* Clearly separate UI elements */
    body.neuro-calm-mode button,
    body.neuro-calm-mode input,
    body.neuro-calm-mode select,
    body.neuro-calm-mode textarea {
      margin: 0.5em !important;
      border: 1px solid #AAAAAA !important;
    }
    
    /* Reduce contrast for images */
    body.neuro-calm-mode img,
    body.neuro-calm-mode video {
      opacity: 0.9 !important;
      filter: saturate(90%) brightness(105%) !important;
    }
  `;
  
  // Append the style element to the document head
  document.head.appendChild(styleElement);
  
  // Store original styles for elements we'll modify
  const elementsToModify = document.querySelectorAll('[style*="animation"], [style*="transition"], [style*="blink"], [style*="flash"]');
  elementsToModify.forEach(element => {
    if (!element.hasAttribute('data-neuro-original-style')) {
      element.setAttribute('data-neuro-original-style', element.getAttribute('style') || '');
      element.style.animation = 'none';
      element.style.transition = 'none';
    }
  });
  
  console.log('Calm/low-stimulation mode applied');
}
