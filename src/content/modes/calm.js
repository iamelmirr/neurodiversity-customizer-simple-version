// Calm/Low-Stimulation Mode (Autism-Friendly) implementation
import { createStyleElement, createDynamicContentObserver } from '../utils/common';

export function applyCalmMode() {
  // Add a class to the body
  document.body.classList.add('neuro-calm-mode');
  
  // Get website theme (dark or light) and site-specific settings
  const websiteTheme = window.neuroCustomizerContext?.websiteTheme || 'light';
  const siteSettings = window.neuroCustomizerContext?.siteSettings || {};
  
  // Create base styles for calm mode
  const baseStyles = createBaseStyles(websiteTheme);
  createStyleElement('neuro-calm-base', baseStyles, 'calm');
  
  // Apply site-specific fixes
  if (siteSettings.isDynamic) {
    if (window.location.hostname.includes('youtube.com')) {
      applyYouTubeSpecificFixes(websiteTheme);
    } else if (window.location.hostname.includes('google.com')) {
      applyGoogleSpecificFixes(websiteTheme);
    }
    
    // Create observer for dynamic content
    createDynamicContentObserver(() => {
      removeAnimationsFromNewElements();
    });
  }
  
  // Store original styles for elements we'll modify
  storeOriginalStyles();
  
  console.log('Improved Calm/low-stimulation mode applied with', websiteTheme, 'theme');
}

function createBaseStyles(websiteTheme) {
  // Choose color palette based on website theme
  const colors = websiteTheme === 'dark' 
    ? {
        background: '#2A2A33',
        text: '#E0E0E6',
        surface: '#353542',
        accent: '#8A85FF',
        links: '#B4B1FF',
        borders: '#454552'
      }
    : {
        background: '#F0F3F6', 
        text: '#404040',
        surface: '#FFFFFF',
        accent: '#6366F1',
        links: '#5155E5',
        borders: '#D1D5DB'
      };
  
  // Build CSS with concatenation to avoid template literal issues
  let css = '';
  
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
  const colors = websiteTheme === 'dark' 
    ? {
        ytBackground: '#212121',
        ytSurface: '#303030',
        ytText: '#FFFFFF',
        ytBorders: '#444444'
      }
    : {
        ytBackground: '#FFFFFF',
        ytSurface: '#F9F9F9',
        ytText: '#0F0F0F',
        ytBorders: '#E5E5E5'
      };
  
  let ytFixCss = '';
  
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
  createStyleElement('neuro-calm-youtube', ytFixCss, 'calm');
}

function applyGoogleSpecificFixes(websiteTheme) {
  let googleFixCss = '';
  
  // Fix Google search box
  googleFixCss += 'body.neuro-calm-mode .gLFyf {\n';
  googleFixCss += '  background-color: inherit !important;\n';
  googleFixCss += '  border: 1px solid currentColor !important;\n';
  googleFixCss += '}\n\n';
  
  // Apply Google-specific styles
  createStyleElement('neuro-calm-google', googleFixCss, 'calm');
}

function storeOriginalStyles() {
  // Store original background-color, color, and transition styles
  const elements = document.querySelectorAll('body, body *');
  elements.forEach(element => {
    const style = window.getComputedStyle(element);
    if (!element.hasAttribute('data-neuro-original-bg')) {
      element.setAttribute('data-neuro-original-bg', style.backgroundColor);
    }
    if (!element.hasAttribute('data-neuro-original-color')) {
      element.setAttribute('data-neuro-original-color', style.color);
    }
  });
}

function removeAnimationsFromNewElements() {
  const newElements = document.querySelectorAll('body *:not([data-neuro-processed])');
  newElements.forEach(element => {
    element.style.animation = 'none';
    element.style.transition = 'none';
    element.setAttribute('data-neuro-processed', 'true');
  });
}
