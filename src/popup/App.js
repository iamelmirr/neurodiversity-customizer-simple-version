import React, { useState, useEffect } from 'react';
import ModeButton from './components/ModeButton';
import { 
  DefaultIcon, 
  DyslexiaIcon, 
  FocusIcon,
  HighContrastIcon,
  CalmIcon 
} from './components/Icons';

const MODES = {
  DEFAULT: 'default',
  DYSLEXIA: 'dyslexia',
  FOCUS: 'focus',
  HIGH_CONTRAST: 'high-contrast',
  CALM: 'calm'
};

function App() {
  const [activeMode, setActiveMode] = useState(MODES.DEFAULT);
  const [theme, setTheme] = useState('light');

  // Check system theme preference
  useEffect(() => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(isDarkMode ? 'dark' : 'light');
    
    // Listen for theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      setTheme(e.matches ? 'dark' : 'light');
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  // Load saved mode from storage
  useEffect(() => {
    chrome.storage.local.get(['activeMode'], (result) => {
      if (result.activeMode) {
        setActiveMode(result.activeMode);
        applyMode(result.activeMode);
      }
    });
  }, []);

  // Apply dark/light theme to the popup
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleModeClick = (mode) => {
    setActiveMode(mode);
    
    // Save to local storage
    chrome.storage.local.set({ activeMode: mode });
    
    // Apply the mode
    applyMode(mode);
  };

  const applyMode = (mode) => {
    // Send message to content script to apply the selected mode
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'applyMode', mode });
    });
  };

  return (
    <div className={`p-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <header className="mb-4 text-center">
        <h1 className="text-xl font-bold">Neurodiversity Customizer</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">Customize web pages for better comfort and usability</p>
      </header>
      
      <div className="grid grid-cols-2 gap-3">
        <ModeButton 
          label="Default"
          icon={<DefaultIcon />}
          isActive={activeMode === MODES.DEFAULT}
          onClick={() => handleModeClick(MODES.DEFAULT)}
          tooltip="Reset to original page styles"
        />
        
        <ModeButton 
          label="Dyslexia"
          icon={<DyslexiaIcon />}
          isActive={activeMode === MODES.DYSLEXIA}
          onClick={() => handleModeClick(MODES.DYSLEXIA)}
          tooltip="Enhance readability with dyslexia-friendly text"
        />
        
        <ModeButton 
          label="Focus"
          icon={<FocusIcon />}
          isActive={activeMode === MODES.FOCUS}
          onClick={() => handleModeClick(MODES.FOCUS)}
          tooltip="Minimize distractions and help maintain focus"
        />
        
        <ModeButton 
          label="High Contrast"
          icon={<HighContrastIcon />}
          isActive={activeMode === MODES.HIGH_CONTRAST}
          onClick={() => handleModeClick(MODES.HIGH_CONTRAST)}
          tooltip="Maximize text/background contrast for better visibility"
        />
        
        <ModeButton 
          label="Calm"
          icon={<CalmIcon />}
          isActive={activeMode === MODES.CALM}
          onClick={() => handleModeClick(MODES.CALM)}
          tooltip="Reduce visual stimulation with muted colors"
          className="col-span-2 mx-auto w-1/2"
        />
      </div>
      
      <footer className="mt-4 text-center text-xs text-gray-500 dark:text-gray-400">
        <p>Press ESC to exit any tooltip</p>
      </footer>
    </div>
  );
}

export default App;
