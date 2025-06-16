// Background script for the Neurodiversity Web Customizer extension

// This is a persistent service worker that will handle events and keep track of state

// Listen for installation
chrome.runtime.onInstalled.addListener(() => {
  console.log('Neurodiversity Web Customizer installed');
  
  // Initialize storage with default values if needed
  chrome.storage.local.get(['activeMode'], (result) => {
    if (!result.activeMode) {
      chrome.storage.local.set({ activeMode: 'default' });
    }
  });
});

// Listen for tab updates to apply the stored mode to new pages
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url && tab.url.startsWith('http')) {
    chrome.storage.local.get(['activeMode'], (result) => {
      if (result.activeMode && result.activeMode !== 'default') {
        chrome.tabs.sendMessage(tabId, { 
          action: 'applyMode', 
          mode: result.activeMode 
        });
      }
    });
  }
});

// Listen for messages from popup or content scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getModeStatus') {
    chrome.storage.local.get(['activeMode'], (result) => {
      sendResponse({ activeMode: result.activeMode || 'default' });
    });
    return true; // Indicates we want to send a response asynchronously
  }
});
