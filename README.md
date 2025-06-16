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

## License

MIT
