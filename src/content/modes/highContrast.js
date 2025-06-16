// High Contrast Mode implementation

export function applyHighContrastMode() {
  // Add a class to the body
  document.body.classList.add('neuro-high-contrast-mode');
  
  // Create a style element
  const styleElement = document.createElement('style');
  styleElement.setAttribute('data-neuro-customizer', 'high-contrast');
  
  // CSS for high contrast mode
  styleElement.textContent = `
    /* Basic high contrast */
    body.neuro-high-contrast-mode {
      background-color: black !important;
      color: white !important;
    }
    
    /* Text elements */
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
    body.neuro-high-contrast-mode span,
    body.neuro-high-contrast-mode div {
      color: white !important;
      background-color: black !important;
      text-shadow: none !important;
      border-color: white !important;
    }
    
    /* Links */
    body.neuro-high-contrast-mode a:link,
    body.neuro-high-contrast-mode a:visited {
      color: yellow !important;
      background-color: black !important;
      text-decoration: underline !important;
    }
    
    body.neuro-high-contrast-mode a:hover,
    body.neuro-high-contrast-mode a:active {
      color: #FFFF66 !important;
      background-color: #333 !important;
    }
    
    /* Remove gradients and shadows */
    body.neuro-high-contrast-mode * {
      text-shadow: none !important;
      box-shadow: none !important;
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
    
    /* Images and media */
    body.neuro-high-contrast-mode img,
    body.neuro-high-contrast-mode video,
    body.neuro-high-contrast-mode canvas {
      border: 2px solid white !important;
      filter: contrast(120%) !important;
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
  
  console.log('High contrast mode applied');
}
