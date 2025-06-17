// Content script for Neurodiversity Web Customizer
// This will be injected into web pages to apply the selected visual mode

import { applyDyslexiaMode } from './modes/dyslexia';
import { applyFocusMode } from './modes/focus';
import { applyHighContrastMode } from './modes/highContrast';
import { applyCalmMode } from './modes/calm';
import { resetToDefaultMode } from './modes/default';
import { detectWebsiteTheme, getSiteSpecificSettings } from './utils/themeDetection';

// Check if a mode is already active on this page
let currentMode = null;
let websiteTheme = 'light';
let siteSettings = {};

// Initialize and detect website theme
function initialize() {
  // Detect website theme (dark or light)
  websiteTheme = detectWebsiteTheme();
  console.log('Detected website theme:', websiteTheme);
  
  // Get site-specific settings
  siteSettings = getSiteSpecificSettings();
  
  // Store theme and site settings in window for modes to access
  window.neuroCustomizerContext = {
    websiteTheme,
    siteSettings,
    systemPrefersDark: window.matchMedia('(prefers-color-scheme: dark)').matches
  };
  
  // Listen for theme changes (system or website)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    window.neuroCustomizerContext.systemPrefersDark = event.matches;
    
    // If a mode is active, reapply it to adapt to new system preference
    if (currentMode) {
      // Re-detect website theme as it might have changed
      window.neuroCustomizerContext.websiteTheme = detectWebsiteTheme();
      applyMode(currentMode);
    }
  });
  
  // Check if we should apply a saved mode
  chrome.runtime.sendMessage({ action: 'getModeStatus' }, (response) => {
    if (response && response.activeMode && response.activeMode !== 'default') {
      applyMode(response.activeMode);
    }
  });
  
  // For dynamic sites, periodically check if theme has changed
  if (siteSettings.isDynamic) {
    setInterval(() => {
      const newTheme = detectWebsiteTheme();
      if (newTheme !== window.neuroCustomizerContext.websiteTheme) {
        window.neuroCustomizerContext.websiteTheme = newTheme;
        console.log('Website theme changed to:', newTheme);
        
        // Reapply current mode if active
        if (currentMode) {
          applyMode(currentMode);
        }
      }
    }, 2000); // Check every 2 seconds
  }
}

// Run initialization
initialize();

// Listen for messages from popup or background
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'applyMode') {
    applyMode(request.mode);
    sendResponse({ success: true });
    return true;
  } else if (request.action === 'getCurrentMode') {
    sendResponse({ 
      currentMode: currentMode || 'default',
      websiteTheme: window.neuroCustomizerContext.websiteTheme
    });
    return true;
  }
  return true;
});

// Function to apply the selected mode
function applyMode(mode) {
  // First, remove any existing mode
  if (currentMode) {
    resetToDefaultMode();
  }
  
  // Apply the requested mode
  switch (mode) {
    case 'dyslexia':
      applyDyslexiaMode();
      break;
    case 'focus':
      applyFocusMode();
      break;
    case 'high-contrast':
      applyHighContrastMode();
      break;
    case 'calm':
      applyCalmMode();
      break;
    case 'default':
    default:
      // Already reset above
      break;
  }
  
  // Update current mode
  currentMode = mode === 'default' ? null : mode;
}
