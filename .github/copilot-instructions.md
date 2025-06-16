<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Neurodiversity Web Page Customizer

This is a Chrome extension built with React.js and Tailwind CSS that allows neurodiverse users to customize web pages. The extension provides multiple visual modes to improve readability and reduce visual stress.

## Core Principles

- Non-destructive: Only visual modifications; never hide, move, or remove page elements.
- Simplicity: Few, clearly distinct modes; easy to toggle between modes.
- Accessibility: Keyboard navigable and screen-reader compatible.
- Persistence: User's last selected mode is saved and automatically applied.

## Modes

1. Default Mode - Resets to original webpage styles
2. Dyslexia-Friendly Mode - Enhances readability with specialized fonts and spacing
3. Focus Mode - Minimizes distractions for ADHD/attention support
4. High Contrast Mode - Maximizes visibility for visual processing challenges
5. Calm/Low-Stimulation Mode - Reduces sensory overload for autistic users

## Project Structure

- `/src/popup`: React app for the extension's popup UI
- `/src/content`: Content scripts for injecting/removing CSS for each mode
- `/src/background`: Handles communication and settings persistence
- `/src/styles`: Tailwind config and CSS
- `/src/assets`: SVG icons and other assets
