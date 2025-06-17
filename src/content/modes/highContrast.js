// High Contrast Mode implementation
import { createStyleElement, createControlButton } from '../utils/common';

export function applyHighContrastMode() {
  // Add a class to the body
  document.body.classList.add('neuro-high-contrast-mode');
  
  // Get website theme (dark or light) and site-specific settings
  const websiteTheme = window.neuroCustomizerContext?.websiteTheme || 'light';
  const siteSettings = window.neuroCustomizerContext?.siteSettings || {};
  
  // Determine initial color scheme based on website theme
  const initialScheme = websiteTheme === 'dark' ? 'yellow' : 'white';
  
  // Generate the list of selectors to exclude from high contrast
  const excludeSelectors = siteSettings.excludeFromHighContrast || [];
  const excludeFromContrastSelectors = excludeSelectors.length > 0 
    ? ':not(' + excludeSelectors.join('):not(') + ')' 
    : '';
  
  // Apply the main high contrast styles
  const baseStyles = createBaseStyles(websiteTheme, excludeFromContrastSelectors);
  createStyleElement('neuro-high-contrast-base', baseStyles, 'high-contrast');
  
  // Apply scheme-specific styles
  applyColorScheme(initialScheme);
  
  // Add color scheme toggle button
  createColorSchemeToggle(initialScheme === 'white' ? 'yellow' : 'white');
  
  // Fix for SVG images that might be getting clipped or hidden
  const svgFixStyles = createSvgFixStyles();
  createStyleElement('neuro-high-contrast-svg-fix', svgFixStyles, 'high-contrast');
  
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
  let css = '';
  
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
  let css = '';
  
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
  const existingScheme = document.getElementById('neuro-high-contrast-scheme');
  if (existingScheme) {
    existingScheme.remove();
  }
  
  // Apply the selected scheme
  let schemeStyles = '';
  
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
  createStyleElement('neuro-high-contrast-scheme', schemeStyles, 'high-contrast');
}

function createWhiteOnBlackScheme() {
  let css = '';
  
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
  let css = '';
  
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
  const iconAndLabel = nextScheme === 'yellow' 
    ? {
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="yellow" stroke="currentColor"><circle cx="12" cy="12" r="10"/></svg>',
        label: 'Yellow Mode'
      }
    : {
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="currentColor"><circle cx="12" cy="12" r="10"/></svg>',
        label: 'White Mode'
      };
  
  // Create toggle button
  createControlButton(
    'neuro-contrast-scheme-toggle',
    iconAndLabel.label,
    () => {
      applyColorScheme(nextScheme);
      document.getElementById('neuro-contrast-scheme-toggle').remove();
      createColorSchemeToggle(nextScheme === 'yellow' ? 'white' : 'yellow');
    },
    {
      position: 'top-right',
      icon: iconAndLabel.icon,
      tooltip: 'Switch to ' + iconAndLabel.label
    }
  );
}

/**
 * Apply YouTube-specific high contrast fixes
 * @param {string} websiteTheme - 'dark' or 'light'
 */
function applyYouTubeSpecificFixes(websiteTheme) {
  let ytFixCss = '';
  
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
  createStyleElement('neuro-high-contrast-youtube', ytFixCss, 'high-contrast');
}

/**
 * Apply Google-specific high contrast fixes
 * @param {string} websiteTheme - 'dark' or 'light'
 */
function applyGoogleSpecificFixes(websiteTheme) {
  let googleFixCss = '';
  
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
  createStyleElement('neuro-high-contrast-google', googleFixCss, 'high-contrast');
}
