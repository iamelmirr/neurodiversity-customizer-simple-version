# Chrome Web Store Submission Guide

This document provides detailed information for submitting your Neurodiversity Web Customizer extension to the Chrome Web Store.

## Required Items for Submission

### 1. Technical Requirements

- **Manifest Version**: Your extension uses Manifest V3, which is the current recommended version.
- **Permissions**: The extension uses the minimum necessary permissions (`storage`, `activeTab`, `scripting`).
- **Content Security Policy**: The extension follows security best practices.

### 2. Store Listing Content

#### Basic Information
- **Name**: "Neurodiversity Web Customizer"
- **Summary**: "Customize web pages for better comfort and usability for neurodiverse users."
- **Detailed Description**: 

```
The Neurodiversity Web Customizer empowers users with neurodiversity to tailor any webpage's visual presentation for greater comfort and reduced visual stress.

FEATURES:
• Non-destructive: Only applies visual modifications without hiding, moving, or removing any page elements.
• Simple: Five clearly distinct modes that are easy to toggle between.
• Accessible: Fully keyboard navigable and screen-reader compatible.
• Persistent: Your last selected mode is automatically applied to all web pages.
• Theme Aware: Follows your browser/system dark/light mode preference.

AVAILABLE MODES:
1. Default Mode - Resets to original webpage styles
2. Dyslexia-Friendly Mode - Enhances readability with specialized fonts and spacing
3. Focus Mode - Minimizes distractions for ADHD/attention support
4. High Contrast Mode - Maximizes visibility for visual processing challenges
5. Calm/Low-Stimulation Mode - Reduces sensory overload for autistic users

This extension never collects or transmits any user data. All settings are stored locally on your device.
```

- **Category**: Accessibility
- **Language**: English (or your preferred language)

#### Visual Assets
- **Icon**: A 128x128 PNG icon (ensure this is high quality and represents your extension)
- **Screenshots**: 1-3 screenshots showing the extension in action
  - Size: 1280x800 or 640x400 pixels
  - Content suggestions:
    1. The popup UI showing the different modes
    2. Before/after of a webpage with Dyslexia mode applied
    3. Before/after of a webpage with Focus mode applied

- **Promotional Images** (optional but recommended):
  - Small promotional tile: 440x280 pixels
  - Large promotional tile: 920x680 pixels
  - Marquee promotional tile: 1400x560 pixels

### 3. Privacy and Security

#### Privacy Practices
- Data collection: "This extension does not collect any user data."
- Permission justification:
  - `storage`: "To save user preferences for which mode was last selected."
  - `activeTab`: "To apply visual customizations to the active tab."
  - `scripting`: "To inject CSS styles for the different visual modes."

#### Privacy Policy
For personal/small projects, a simple privacy policy hosted on GitHub Pages or similar service is sufficient. You can create a basic page stating:

```
Privacy Policy for Neurodiversity Web Customizer

The Neurodiversity Web Customizer extension does not collect, transmit, or store any user data beyond the local browser storage on the user's device. The only data stored is the user's preferred visual mode, which is saved locally using Chrome's storage API.

This extension does not use analytics, does not track user behavior, and does not share any information with third parties.

Last updated: [Current Date]
```

## Submission Tips

1. **Be Patient**: The review process typically takes a few business days, but can sometimes take longer.

2. **Address Feedback**: If your submission is rejected, carefully read the feedback and address all issues before resubmitting.

3. **Version Control**: Keep track of which version you've submitted to make updates easier.

4. **Test Thoroughly**: Before submission, test your extension across different websites to ensure it works correctly in various contexts.

5. **Support Email**: Use an email address you check regularly, as this is how Google will contact you with any issues.
