// Website theme detection utilities

/**
 * Detects whether the current website is using a dark or light theme
 * Uses multiple heuristics for more accurate detection
 * @returns {string} 'dark' or 'light'
 */
export function detectWebsiteTheme() {
  try {
    // Get body and main content background colors
    const bodyStyles = window.getComputedStyle(document.body);
    const bodyBgColor = bodyStyles.backgroundColor;
    const bodyTextColor = bodyStyles.color;
    
    // Also check main content area if it exists
    let mainContentBgColor = bodyBgColor;
    let mainContentTextColor = bodyTextColor;
    
    // Try to find main content area for more accurate detection
    const mainContentSelectors = [
      'main',
      '[role="main"]',
      '#content',
      '.content',
      'article',
      '.main-content',
      '#main-content'
    ];
    
    for (const selector of mainContentSelectors) {
      const mainContent = document.querySelector(selector);
      if (mainContent) {
        const mainStyles = window.getComputedStyle(mainContent);
        // Only use if background color is explicitly set
        if (mainStyles.backgroundColor && mainStyles.backgroundColor !== 'rgba(0, 0, 0, 0)') {
          mainContentBgColor = mainStyles.backgroundColor;
          mainContentTextColor = mainStyles.color;
          break;
        }
      }
    }
    
    // Convert RGB/RGBA to brightness value (0-255)
    const getBrightness = (color) => {
      // Extract RGB values
      const rgb = color.match(/\d+/g);
      if (!rgb || rgb.length < 3) return 128; // Default to middle if can't detect
      
      // Calculate brightness using improved formula
      // Brightness = 0.299*R + 0.587*G + 0.114*B
      return Math.round(
        (0.299 * parseInt(rgb[0])) + 
        (0.587 * parseInt(rgb[1])) + 
        (0.114 * parseInt(rgb[2]))
      );
    };
    
    // Get brightness values
    const bodyBgBrightness = getBrightness(bodyBgColor);
    const bodyTextBrightness = getBrightness(bodyTextColor);
    const mainBgBrightness = getBrightness(mainContentBgColor);
    const mainTextBrightness = getBrightness(mainContentTextColor);
    
    // Special cases for common sites
    if (isYouTube()) {
      // Check for YouTube dark mode by looking for specific selectors
      const ytDarkMode = document.documentElement.getAttribute('dark') === 'true';
      if (ytDarkMode !== null) {
        return ytDarkMode === 'true' ? 'dark' : 'light';
      }
      // Fallback to checking specific YouTube dark mode elements
      const ytAppDark = document.querySelector('ytd-app[dark]');
      if (ytAppDark) {
        return ytAppDark.getAttribute('dark') === 'true' ? 'dark' : 'light';
      }
    }
    
    // Check meta theme-color tag
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      const themeColor = metaThemeColor.getAttribute('content');
      if (themeColor) {
        // If theme color is specified, check its brightness
        const themeColorBrightness = getBrightness(themeColor);
        if (themeColorBrightness < 128) {
          return 'dark';
        } else if (themeColorBrightness > 200) {
          return 'light';
        }
      }
    }
    
    // Advanced heuristic: check common dark mode class names
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    
    const darkModeClasses = ['dark', 'dark-mode', 'darkmode', 'night-mode', 'nightmode', 'theme-dark', 'dark-theme'];
    const hasDarkClass = darkModeClasses.some(className => 
      htmlElement.classList.contains(className) || bodyElement.classList.contains(className)
    );
    
    if (hasDarkClass) {
      return 'dark';
    }
    
    // Check for light mode classes too
    const lightModeClasses = ['light', 'light-mode', 'lightmode', 'day-mode', 'daymode', 'theme-light', 'light-theme'];
    const hasLightClass = lightModeClasses.some(className => 
      htmlElement.classList.contains(className) || bodyElement.classList.contains(className)
    );
    
    if (hasLightClass) {
      return 'light';
    }
    
    // Use content area brightness as primary indicator if available
    if (mainBgBrightness !== bodyBgBrightness) {
      return mainBgBrightness < 128 ? 'dark' : 'light';
    }
    
    // Use body as fallback
    return bodyBgBrightness < 128 ? 'dark' : 'light';
  } catch (error) {
    console.error('Error detecting website theme:', error);
    return 'light'; // Default to light if detection fails
  }
}

/**
 * Determines if the current website is YouTube
 * @returns {boolean}
 */
export function isYouTube() {
  return window.location.hostname.includes('youtube.com');
}

/**
 * Gets site-specific optimized settings for known websites
 * @returns {Object} Site-specific settings
 */
export function getSiteSpecificSettings() {
  const hostname = window.location.hostname;
  
  // YouTube-specific settings
  if (hostname.includes('youtube.com')) {
    return {
      sidebarSelector: 'ytd-guide-renderer, tp-yt-app-drawer',
      contentSelector: 'ytd-page-manager',
      isDynamic: true,
      adSelectors: [
        'ytd-display-ad-renderer',
        'ytd-ad-slot-renderer',
        'ytd-in-feed-ad-layout-renderer'
      ],
      preserveElements: [
        // Video player
        'video',
        '.html5-video-container',
        'ytd-player',
        '.ytp-cued-thumbnail-overlay',
        // Sidebar and navigation
        '#guide-content',
        'ytd-mini-guide-renderer',
        'ytd-guide-section-renderer',
        'ytd-guide-entry-renderer',
        // Thumbnails
        'ytd-thumbnail',
        'ytd-playlist-thumbnail',
        'yt-img-shadow'
      ],
      excludeFromHighContrast: [
        'ytd-thumbnail',
        'ytd-playlist-thumbnail',
        'img[src*="ytimg"]',
        'yt-img-shadow img',
        '.ytp-videowall-still',
        'video',
        '.html5-video-container'
      ],
      fixStyles: {
        sidebar: `
          #guide-content {
            background-color: inherit !important;
          }
          ytd-guide-entry-renderer, 
          ytd-guide-section-renderer {
            background-color: transparent !important;
          }
          ytd-mini-guide-renderer {
            background-color: inherit !important;
          }
        `,
        playerControls: `
          .ytp-chrome-bottom {
            background-color: rgba(0, 0, 0, 0.5) !important;
          }
          .ytp-chrome-controls button,
          .ytp-time-display {
            background-color: transparent !important;
          }
        `
      }
    };
  }
  
  // Google sites
  if (hostname.includes('google.com')) {
    return {
      isDynamic: true,
      preserveElements: [
        '.gb_Vd', // Google menu
        '.hdtb-mitem', // Search filters
        'img', // Images
        'g-img', // Google images
        '.kno-fv', // Knowledge panel images
      ],
      fixStyles: {
        searchBox: `
          .gLFyf {
            background-color: inherit !important;
            border: 1px solid currentColor !important;
          }
        `
      }
    };
  }
  
  // Default settings for other sites
  return {    isDynamic: false,
    preserveElements: [
      'img',
      'video',
      'svg',
      'canvas',
      'iframe',
      '[role="img"]'
    ]
  };
}
