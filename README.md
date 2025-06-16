# Neurodiversity Web Page Customizer

A Chrome extension that empowers neurodiverse users to tailor the visual presentation of any webpage for better comfort and usability, using React.js and Tailwind CSS.

## Features

- **Non-destructive**: Only visual modifications; never hides, moves, or removes page elements.
- **Simple**: Few, clearly distinct modes; easy to toggle between modes and reset to Default.
- **Accessible**: Keyboard navigable, screen-reader compatible, and visually accessible.
- **Persistent**: User's last selected mode is saved and automatically applied.
- **Theme Awareness**: Follows browser/system dark/light theme preference.

## Available Modes

1. **Default Mode**: Instantly reverts all visual changes, restoring original webpage appearance.

2. **Dyslexia-Friendly Mode**: Enhances readability for users with dyslexia and related visual processing differences.
   - Applies a dyslexia-optimized font (OpenDyslexic, Lexend).
   - Increases letter, word, and line spacing.
   - Disables italics; enforces regular, upright text.
   - Simplifies backgrounds behind text.

3. **Focus Mode (ADHD/Attention Support)**: Minimizes distractions and helps users maintain attention on main content.
   - Subtly dims or blurs non-content areas without hiding them.
   - Emphasizes main content block.
   - Increases line and paragraph spacing for easier tracking.
   - Suppresses animations and adds a "reading ruler" to help keep place in text.

4. **High Contrast Mode**: Supports users with visual processing challenges or sensory fatigue.
   - Maximizes contrast between foreground text and background.
   - Removes gradients and shadows.
   - Enlarges text slightly for legibility.
   - Ensures all interactive elements have clear, visible outlines.

5. **Calm/Low-Stimulation Mode (Autism-Friendly)**: Reduces sensory overload and visual stress.
   - Applies soft, muted color palette.
   - Suppresses all animations, transitions, and hover effects.
   - Removes or blurs busy backgrounds.
   - Reduces font boldness and enlarges clickable elements.

## Development

### Prerequisites

- Node.js and npm

### Installation

1. Clone this repository
2. Run `npm install` to install dependencies
3. Run `npm start` to start the development build with watch mode
4. **Important**: Replace the placeholder `icon.png` in the `public` folder with a real PNG icon before loading the extension
5. Load the extension in Chrome:
   - Open `chrome://extensions/`
   - Enable Developer mode
   - Click "Load unpacked"
   - Select the `dist` folder in this project

### Building for Production

Run `npm run build` to create a production build in the `dist` folder.

## Important Notes

### Icon Placeholder
The current project includes a text file named `icon.png` as a placeholder. This needs to be replaced with an actual PNG image before the extension can be loaded correctly in Chrome. You can create icons in sizes 16x16, 48x48, and 128x128 pixels or use a single icon file as specified in the current manifest.

### Content Script Structure
The content scripts for each mode are organized in the `/src/content/modes` directory. Each mode has its own implementation file that applies specific CSS styles and behaviors.

## Publishing to the Chrome Web Store

To publish your extension to the Chrome Web Store, follow these steps:

### 1. Prepare for Submission

1. **Create production build and package**:
   ```
   npm run package
   ```
   This will create a file called `neurodiversity-customizer.zip` in your project root.

2. **Create Chrome Web Store Developer Account**:
   - Go to the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole/)
   - Sign in with your Google account
   - Pay the one-time $5 developer registration fee (if you haven't already)

3. **Prepare assets**:
   - **Icon**: Create a high-quality 128x128 PNG icon
   - **Screenshots**: Take at least 1-3 screenshots (1280x800 or 640x400)
   - **Promotional images** (optional):
     - Small: 440x280
     - Large: 920x680
     - Marquee: 1400x560

### 2. Submit Your Extension

1. Go to the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole/)
2. Click "New Item"
3. Upload your `neurodiversity-customizer.zip` file
4. Fill in the listing information:
   - **Store listing**:
     - Detailed description of the extension
     - Category: Accessibility
     - Language
     - Screenshots and promotional images
   - **Privacy practices**:
     - Declare how your extension uses data
     - Add a privacy policy URL if needed
   - **Distribution settings**:
     - Choose visibility (public, private, or unlisted)
     - Select which countries to publish in

5. Click "Submit for review"

### 3. Review Process

- Your extension will undergo a review by Google, which may take a few hours to several days
- You'll receive an email once the review is complete
- If there are issues, you can make changes and resubmit

### 4. Extension Updates

To update your extension after it's published:

1. Make your changes and increment the version number in `manifest.json`
2. Run `npm run package` to create a new ZIP file
3. Go to your extension in the Developer Dashboard
4. Click "Package" > "Upload new package"
5. Submit for review again

## License

MIT
