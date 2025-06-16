// Content script for Neurodiversity Web Customizer
// This will be injected into web pages to apply the selected visual mode

import { applyDyslexiaMode } from './modes/dyslexia';
import { applyFocusMode } from './modes/focus';
import { applyHighContrastMode } from './modes/highContrast';
import { applyCalmMode } from './modes/calm';
import { resetToDefaultMode } from './modes/default';

// Check if a mode is already active on this page
let currentMode = null;

// Initialize: check if we should apply a saved mode
chrome.runtime.sendMessage({ action: 'getModeStatus' }, (response) => {
  if (response && response.activeMode && response.activeMode !== 'default') {
    applyMode(response.activeMode);
  }
});

// Listen for messages from popup or background
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'applyMode') {
    applyMode(request.mode);
    sendResponse({ success: true });
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
