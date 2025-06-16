# Chrome Web Store Permission Justifications

## Single Purpose Description
"This extension provides customized visual modes to improve web accessibility for neurodiverse users by applying different visual styles to web pages."

## Permission Justifications

### Storage Permission
"The storage permission is used to save the user's preferred visual mode (Default, Dyslexia-Friendly, Focus, High Contrast, or Calm) so it can be automatically applied when browsing websites and persists between browser sessions."

### ActiveTab Permission
"The activeTab permission is required to modify the appearance of the currently viewed web page when the user selects a different visual mode. This allows the extension to apply visual customizations only to the tab the user is currently viewing."

### Scripting Permission
"The scripting permission enables the extension to inject and execute the CSS modifications necessary for each visual mode. This is essential for implementing features like the reading ruler in Focus mode, specialized fonts in Dyslexia mode, and color adjustments in all modes."

### Host Permission (all_urls)
"The host permission for <all_urls> is necessary because the extension needs to apply the user's chosen visual customizations consistently across all websites they visit. The extension never collects or transmits any data from these sites; it only applies visual changes to improve readability and reduce visual stress for neurodiverse users."

## Privacy Statement
"The Neurodiversity Web Customizer extension does not collect, store, or transmit any user data or browsing information. The only data stored is the user's selected visual mode preference, which is saved locally on the user's device using Chrome's storage API. No information is shared with third parties or used for any purpose other than providing the core functionality of the extension."
