// Dyslexia-friendly mode implementation

export function applyDyslexiaMode() {
  // Add a class to the body for potential CSS selectors
  document.body.classList.add('neuro-dyslexia-mode');
  
  // Create a style element
  const styleElement = document.createElement('style');
  styleElement.setAttribute('data-neuro-customizer', 'dyslexia');
  
  // CSS for dyslexia-friendly mode
  styleElement.textContent = `
    /* Apply OpenDyslexic font to all text elements */
    body.neuro-dyslexia-mode {
      font-family: 'OpenDyslexic', 'Lexend', sans-serif !important;
    }
    
    body.neuro-dyslexia-mode * {
      font-family: 'OpenDyslexic', 'Lexend', sans-serif !important;
      font-style: normal !important; /* No italics */
    }
    
    /* Increase letter spacing */
    body.neuro-dyslexia-mode p, 
    body.neuro-dyslexia-mode li, 
    body.neuro-dyslexia-mode h1,
    body.neuro-dyslexia-mode h2,
    body.neuro-dyslexia-mode h3,
    body.neuro-dyslexia-mode h4,
    body.neuro-dyslexia-mode h5,
    body.neuro-dyslexia-mode h6,
    body.neuro-dyslexia-mode span,
    body.neuro-dyslexia-mode div {
      letter-spacing: 0.05em !important;
      word-spacing: 0.1em !important;
      line-height: 1.5 !important;
    }
    
    /* Improve paragraphs and text blocks */
    body.neuro-dyslexia-mode p,
    body.neuro-dyslexia-mode div {
      line-height: 1.8 !important;
      margin-bottom: 1.2em !important;
    }
    
    /* Ensure text has a clean background */
    body.neuro-dyslexia-mode p,
    body.neuro-dyslexia-mode li,
    body.neuro-dyslexia-mode h1,
    body.neuro-dyslexia-mode h2,
    body.neuro-dyslexia-mode h3,
    body.neuro-dyslexia-mode h4,
    body.neuro-dyslexia-mode h5,
    body.neuro-dyslexia-mode h6 {
      background-color: transparent !important;
      padding: 0.1em 0 !important;
    }
    
    /* Ensure sufficient contrast for text */
    body.neuro-dyslexia-mode * {
      text-shadow: none !important;
    }

    /* Simplify backgrounds behind text */
    body.neuro-dyslexia-mode article,
    body.neuro-dyslexia-mode section,
    body.neuro-dyslexia-mode main,
    body.neuro-dyslexia-mode .content,
    body.neuro-dyslexia-mode [role="main"],
    body.neuro-dyslexia-mode [role="article"] {
      background-image: none !important;
      background-color: inherit !important;
    }
  `;
  
  // Append the style element to the document head
  document.head.appendChild(styleElement);
  
  // Load OpenDyslexic font if not already loaded
  if (!document.getElementById('neuro-dyslexic-font')) {
    const fontLink = document.createElement('link');
    fontLink.id = 'neuro-dyslexic-font';
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://cdn.jsdelivr.net/npm/open-dyslexic@1.0.3/open-dyslexic-regular.woff';
    document.head.appendChild(fontLink);
  }
  
  console.log('Dyslexia-friendly mode applied');
}
