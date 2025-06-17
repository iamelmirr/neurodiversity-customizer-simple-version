// Focus mode (ADHD/Attention Support) implementation
import { createStyleElement, createControlButton, createDynamicContentObserver } from '../utils/common';

export function applyFocusMode() {
  // Add a class to the body
  document.body.classList.add('neuro-focus-mode');
  
  // Get website theme (dark or light) and site-specific settings
  const websiteTheme = window.neuroCustomizerContext?.websiteTheme || 'light';
  const siteSettings = window.neuroCustomizerContext?.siteSettings || {};
  
  // Create base focus styles
  const baseStyles = createBaseFocusStyles(websiteTheme);
  createStyleElement('neuro-focus-base', baseStyles, 'focus');
  
  // Apply site-specific fixes if needed
  if (siteSettings.isDynamic) {
    if (window.location.hostname.includes('youtube.com')) {
      applyYouTubeSpecificFixes(websiteTheme);
    }
    
    // Create observer for dynamic content
    createDynamicContentObserver(() => {
      applyFocusToNewElements(websiteTheme);
    });
  }
  
  // Create and add reading ruler
  createReadingRuler(websiteTheme);
  
  // Add keyboard hint tooltip
  createKeyboardHintTooltip(websiteTheme);
  
  console.log('Improved Focus mode applied with', websiteTheme, 'theme');
}

/**
 * Create the base CSS styles for focus mode
 * @param {string} websiteTheme - 'dark' or 'light'
 * @returns {string} CSS styles
 */
function createBaseFocusStyles(websiteTheme) {
  // Define color palette based on theme
  const colors = websiteTheme === 'dark'
    ? {
        highlight: 'rgba(120, 130, 240, 0.1)',
        border: 'rgba(120, 130, 240, 0.5)',
        muted: 'rgba(200, 200, 210, 0.8)',
        ruler: 'rgba(120, 130, 240, 0.1)',
        rulerBorder: 'rgba(120, 130, 240, 0.3)',
        text: '#E0E0E6',
        textHighlight: '#B4B1FF',
        paragraphBg: 'rgba(50, 50, 60, 0.4)'
      }
    : {
        highlight: 'rgba(99, 102, 241, 0.05)',
        border: 'rgba(99, 102, 241, 0.5)',
        muted: 'rgba(80, 80, 90, 0.7)',
        ruler: 'rgba(99, 102, 241, 0.05)',
        rulerBorder: 'rgba(99, 102, 241, 0.3)',
        text: '#333333',
        textHighlight: '#4F46E5',
        paragraphBg: 'rgba(245, 247, 250, 0.8)'
      };
  
  // Build CSS with concatenation to avoid template literal issues
  let css = '';
  
  // Base styles
  css += '/* Base styles */\n';
  css += 'body.neuro-focus-mode {\n';
  css += '  overflow-x: hidden !important;\n';
  css += '}\n\n';
  
  // Improved paragraph readability - subtle improvements to text
  css += '/* Improved paragraph readability - subtle improvements to text */\n';
  css += 'body.neuro-focus-mode p,\n';
  css += 'body.neuro-focus-mode li,\n';
  css += 'body.neuro-focus-mode h1,\n';
  css += 'body.neuro-focus-mode h2,\n';
  css += 'body.neuro-focus-mode h3,\n';
  css += 'body.neuro-focus-mode h4,\n';
  css += 'body.neuro-focus-mode h5,\n';
  css += 'body.neuro-focus-mode h6 {\n';
  css += '  line-height: 1.6 !important;\n';
  css += '  max-width: 70ch !important;\n';
  css += '  margin-left: auto !important;\n';
  css += '  margin-right: auto !important;\n';
  css += '  color: ' + colors.text + ' !important;\n';
  css += '}\n\n';
  
  // Subtle paragraph styling for improved focus
  css += '/* Subtle paragraph styling for improved focus */\n';
  css += 'body.neuro-focus-mode p,\n';
  css += 'body.neuro-focus-mode li {\n';
  css += '  margin-bottom: 1.2em !important;\n';
  css += '  padding-left: 0.75em !important;\n';
  css += '  border-left: 3px solid ' + colors.border + ' !important;\n';
  css += '  background-color: ' + colors.paragraphBg + ' !important;\n';
  css += '  padding: 0.5em 0.75em !important;\n';
  css += '  border-radius: 0 4px 4px 0 !important;\n';
  css += '  transition: background-color 0.2s ease, border-left-color 0.2s ease !important;\n';
  css += '}\n\n';
  
  // Current paragraph highlight when hovered
  css += '/* Current paragraph highlight when hovered */\n';
  css += 'body.neuro-focus-mode p:hover,\n';
  css += 'body.neuro-focus-mode li:hover {\n';
  css += '  background-color: ' + colors.highlight + ' !important;\n';
  css += '  border-left-color: ' + colors.textHighlight + ' !important;\n';
  css += '  border-left-width: 4px !important;\n';
  css += '}\n\n';
  
  // Add focus pulse animation
  css += '@keyframes focus-pulse {\n';
  css += '  0% { border-left-width: 3px; }\n';
  css += '  50% { border-left-width: 5px; }\n';
  css += '  100% { border-left-width: 3px; }\n';
  css += '}\n\n';
  
  // Reduce visual noise from sidebars and non-essential elements
  css += '/* Reduce visual noise from sidebars and non-essential elements */\n';
  css += 'body.neuro-focus-mode aside,\n';
  css += 'body.neuro-focus-mode .sidebar,\n';
  css += 'body.neuro-focus-mode nav:not([aria-label="breadcrumb"]):not([aria-label="Breadcrumb"]),\n';
  css += 'body.neuro-focus-mode footer,\n';
  css += 'body.neuro-focus-mode .footer,\n';
  css += 'body.neuro-focus-mode .related,\n';
  css += 'body.neuro-focus-mode .recommendations,\n';
  css += 'body.neuro-focus-mode [role="complementary"],\n';
  css += 'body.neuro-focus-mode [role="banner"] > *:not(nav):not(.search),\n';
  css += 'body.neuro-focus-mode .social-media,\n';
  css += 'body.neuro-focus-mode .share-buttons,\n';
  css += 'body.neuro-focus-mode .comments-section,\n';
  css += 'body.neuro-focus-mode .widget-area {\n';
  css += '  opacity: 0.5 !important;\n';
  css += '  filter: grayscale(30%) !important;\n';
  css += '  transition: opacity 0.3s ease, filter 0.3s ease !important;\n';
  css += '}\n\n';
  
  // Restore opacity on hover for accessibility
  css += '/* Restore opacity on hover for accessibility */\n';
  css += 'body.neuro-focus-mode aside:hover,\n';
  css += 'body.neuro-focus-mode .sidebar:hover,\n';
  css += 'body.neuro-focus-mode nav:hover,\n';
  css += 'body.neuro-focus-mode footer:hover,\n';
  css += 'body.neuro-focus-mode .footer:hover,\n';
  css += 'body.neuro-focus-mode .related:hover,\n';
  css += 'body.neuro-focus-mode .recommendations:hover,\n';
  css += 'body.neuro-focus-mode [role="complementary"]:hover,\n';
  css += 'body.neuro-focus-mode [role="banner"] > *:hover,\n';
  css += 'body.neuro-focus-mode .social-media:hover,\n';
  css += 'body.neuro-focus-mode .share-buttons:hover,\n';
  css += 'body.neuro-focus-mode .comments-section:hover,\n';
  css += 'body.neuro-focus-mode .widget-area:hover {\n';
  css += '  opacity: 1 !important;\n';
  css += '  filter: grayscale(0%) !important;\n';
  css += '}\n\n';
  
  // Improved link styles
  css += '/* Improved link styles */\n';
  css += 'body.neuro-focus-mode a {\n';
  css += '  color: ' + colors.textHighlight + ' !important;\n';
  css += '  text-decoration: underline !important;\n';
  css += '  text-underline-offset: 2px !important;\n';
  css += '  font-weight: bold !important;\n';
  css += '}\n\n';
  
  // Fade images slightly to reduce visual distraction
  css += '/* Fade images slightly to reduce visual distraction */\n';
  css += 'body.neuro-focus-mode img:not([src*="logo"]):not([alt*="logo"]):not([alt*="Logo"]) {\n';
  css += '  filter: saturate(90%) !important;\n';
  css += '  opacity: 0.9 !important;\n';
  css += '  transition: filter 0.3s ease, opacity 0.3s ease !important;\n';
  css += '}\n\n';
  
  // Restore images on hover
  css += '/* Restore images on hover */\n';
  css += 'body.neuro-focus-mode img:hover {\n';
  css += '  filter: saturate(100%) !important;\n';
  css += '  opacity: 1 !important;\n';
  css += '}\n\n';
  
  // Improved headings for better document structure scanning
  css += '/* Improved headings for better document structure scanning */\n';
  css += 'body.neuro-focus-mode h1,\n';
  css += 'body.neuro-focus-mode h2,\n';
  css += 'body.neuro-focus-mode h3 {\n';
  css += '  color: ' + colors.textHighlight + ' !important;\n';
  css += '  border-bottom: 1px solid ' + colors.border + ' !important;\n';
  css += '  padding-bottom: 0.3em !important;\n';
  css += '  margin-top: 1.5em !important;\n';
  css += '  font-weight: bold !important;\n';
  css += '}\n\n';
  
  // Reading ruler styles - hidden by default
  css += '/* Reading ruler styles - hidden by default */\n';
  css += '#neuro-reading-ruler {\n';
  css += '  position: fixed !important;\n';
  css += '  left: 0 !important;\n';
  css += '  right: 0 !important;\n';
  css += '  height: 30px !important;\n';
  css += '  background-color: ' + colors.ruler + ' !important;\n';
  css += '  border-top: 1px solid ' + colors.rulerBorder + ' !important;\n';
  css += '  border-bottom: 1px solid ' + colors.rulerBorder + ' !important;\n';
  css += '  z-index: 999999 !important;\n';
  css += '  pointer-events: none !important;\n';
  css += '  opacity: 0 !important;\n';
  css += '  transition: opacity 0.2s ease !important;\n';
  css += '}\n\n';
  
  // Show reading ruler when activated
  css += '/* Show reading ruler when activated */\n';
  css += '#neuro-reading-ruler.active {\n';
  css += '  opacity: 0.8 !important;\n';
  css += '}\n\n';
  
  // Keyboard shortcut hint tooltip
  css += '/* Keyboard shortcut hint tooltip */\n';
  css += '#neuro-keyboard-hint {\n';
  css += '  position: fixed !important;\n';
  css += '  bottom: 20px !important;\n';
  css += '  left: 50% !important;\n';
  css += '  transform: translateX(-50%) !important;\n';
  css += '  background-color: rgba(30, 30, 30, 0.8) !important;\n';
  css += '  color: white !important;\n';
  css += '  padding: 10px 15px !important;\n';
  css += '  border-radius: 8px !important;\n';
  css += '  z-index: 999999 !important;\n';
  css += '  font-family: system-ui, -apple-system, sans-serif !important;\n';
  css += '  font-size: 14px !important;\n';
  css += '  opacity: 0 !important;\n';
  css += '  transition: opacity 0.3s ease !important;\n';
  css += '}\n\n';
  
  return css;
}

/**
 * Create a reading ruler that follows the mouse
 * @param {string} websiteTheme - 'dark' or 'light'
 */
function createReadingRuler(websiteTheme) {
  // Create ruler element if it doesn't exist
  if (!document.getElementById('neuro-reading-ruler')) {
    const ruler = document.createElement('div');
    ruler.id = 'neuro-reading-ruler';
    document.body.appendChild(ruler);
    
    // Add to cleanup list
    if (!window.neuroCustomizerElements) {
      window.neuroCustomizerElements = [];
    }
    window.neuroCustomizerElements.push(ruler);
    
    // Add event listeners for mouse movement
    document.addEventListener('mousemove', handleMouseMove);
    
    // Add event listener for keyboard toggle
    document.addEventListener('keydown', handleKeyboardToggle);
    
    // Create ruler toggle button
    createRulerToggleButton(websiteTheme);
  }
}

/**
 * Handle mouse movement to update reading ruler position
 * @param {MouseEvent} event - Mouse event
 */
function handleMouseMove(event) {
  const ruler = document.getElementById('neuro-reading-ruler');
  if (ruler && ruler.classList.contains('active')) {
    ruler.style.top = (event.clientY - 15) + 'px';
  }
}

/**
 * Handle keyboard shortcuts for ruler toggle
 * @param {KeyboardEvent} event - Keyboard event
 */
function handleKeyboardToggle(event) {
  // Toggle ruler with Alt+R
  if (event.altKey && event.key === 'r') {
    event.preventDefault();
    toggleReadingRuler();
  }
}

/**
 * Toggle the reading ruler on/off
 */
function toggleReadingRuler() {
  const ruler = document.getElementById('neuro-reading-ruler');
  if (ruler) {
    ruler.classList.toggle('active');
  }
}

/**
 * Create a button to toggle the reading ruler
 * @param {string} websiteTheme - 'dark' or 'light'
 */
function createRulerToggleButton(websiteTheme) {
  // Create toggle button
  const icon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 19h18M3 14h18M3 9h18M3 4h18"/></svg>';
  createControlButton(
    'neuro-ruler-toggle',
    'Reading Guide',
    toggleReadingRuler,
    {
      position: 'bottom-left',
      icon,
      tooltip: 'Toggle reading guide (Alt+R)',
      size: 'small'
    }
  );
}

/**
 * Create a tooltip showing keyboard shortcuts
 * @param {string} websiteTheme - 'dark' or 'light'
 */
function createKeyboardHintTooltip(websiteTheme) {
  // Create hint element if it doesn't exist
  if (!document.getElementById('neuro-keyboard-hint')) {
    const hint = document.createElement('div');
    hint.id = 'neuro-keyboard-hint';
    hint.textContent = 'Tip: Use Alt+R to toggle the reading guide';
    document.body.appendChild(hint);
    
    // Add to cleanup list
    if (!window.neuroCustomizerElements) {
      window.neuroCustomizerElements = [];
    }
    window.neuroCustomizerElements.push(hint);
    
    // Show hint briefly, then fade out
    setTimeout(() => {
      hint.style.opacity = '1';
      
      setTimeout(() => {
        hint.style.opacity = '0';
      }, 5000);
    }, 2000);
  }
}

/**
 * Apply focus styles to newly added elements
 * @param {string} websiteTheme - 'dark' or 'light'
 */
function applyFocusToNewElements(websiteTheme) {
  // Add any dynamic content specific handling here
}

/**
 * Apply YouTube-specific focus mode fixes
 * @param {string} websiteTheme - 'dark' or 'light'
 */
function applyYouTubeSpecificFixes(websiteTheme) {
  let ytFixCss = '';
  
  // Improve video page focus
  ytFixCss += 'body.neuro-focus-mode ytd-watch-flexy #primary {\n';
  ytFixCss += '  max-width: 1000px !important;\n';
  ytFixCss += '  margin: 0 auto !important;\n';
  ytFixCss += '}\n\n';
  
  // Make comments more readable
  ytFixCss += 'body.neuro-focus-mode ytd-comment-thread-renderer {\n';
  ytFixCss += '  padding: 10px !important;\n';
  ytFixCss += '  border-bottom: 1px solid rgba(128, 128, 128, 0.2) !important;\n';
  ytFixCss += '}\n\n';
  
  // Apply YouTube-specific styles
  createStyleElement('neuro-focus-youtube', ytFixCss, 'focus');
}
