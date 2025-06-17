// Dyslexia-friendly mode implementation
import { createStyleElement, loadFont, createDynamicContentObserver } from '../utils/common';

export function applyDyslexiaMode() {
  // Add a class to the body for potential CSS selectors
  document.body.classList.add('neuro-dyslexia-mode');
  
  // Get website theme (dark or light) and site-specific settings
  const websiteTheme = window.neuroCustomizerContext?.websiteTheme || 'light';
  const siteSettings = window.neuroCustomizerContext?.siteSettings || {};
  
  // Load custom fonts with reliable fallbacks
  loadDyslexiaFriendlyFonts();
  
  // Apply base dyslexia styles
  const baseStyles = createBaseDyslexiaStyles(websiteTheme);
  createStyleElement('neuro-dyslexia-base', baseStyles, 'dyslexia');
  
  // Apply site-specific fixes if needed
  if (siteSettings.isDynamic) {
    if (window.location.hostname.includes('youtube.com')) {
      applyYouTubeSpecificFixes(websiteTheme);
    }
    
    // Create observer for dynamic content
    createDynamicContentObserver(() => {
      // Reapply font to dynamically added content
      const dynStyles = 'body.neuro-dyslexia-mode * {\n' +
        '  font-family: \'OpenDyslexic\', \'Lexend\', \'Comic Neue\', \'Comic Sans MS\', \'Arial\', sans-serif !important;\n' +
        '}\n';
      createStyleElement('neuro-dyslexia-dynamic', dynStyles, 'dyslexia');
    });
  }
  
  console.log('Improved Dyslexia-friendly mode applied with', websiteTheme, 'theme');
}

function loadDyslexiaFriendlyFonts() {
  // Load OpenDyslexic font (primary)
  loadFont(
    'OpenDyslexic',
    'https://cdn.jsdelivr.net/npm/open-dyslexic@1.0.3/open-dyslexic-regular.woff2',
    'woff2'
  );
  
  // Load OpenDyslexic Bold
  loadFont(
    'OpenDyslexicBold',
    'https://cdn.jsdelivr.net/npm/open-dyslexic@1.0.3/open-dyslexic-bold.woff2',
    'woff2'
  );
  
  // Load Lexend as a backup (better than default system fallbacks)
  loadFont(
    'Lexend',
    'https://fonts.googleapis.com/css2?family=Lexend:wght@400;700&display=swap',
    'stylesheet'
  );
  
  // Load Comic Neue as another alternative
  loadFont(
    'ComicNeue',
    'https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap',
    'stylesheet'
  );
}

function createBaseDyslexiaStyles(websiteTheme) {
  // Define color palette based on theme
  const colors = websiteTheme === 'dark'
    ? {
        background: '#222222',
        text: '#F2F2F2',
        textBackground: 'rgba(50, 50, 50, 0.7)',
        links: '#92B4F4',
        headers: '#C4C9F4'
      }
    : {
        background: '#F8F9FA',
        text: '#333333',
        textBackground: 'rgba(255, 255, 255, 0.8)',
        links: '#0066CC',
        headers: '#3F51B5'
      };
    
  // Build CSS with concatenation instead of template literals
  let css = '';
  
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
  let ytFixCss = '';
  
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
  createStyleElement('neuro-dyslexia-youtube', ytFixCss, 'dyslexia');
}
