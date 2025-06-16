// Default mode implementation - resets to original page styles

export function resetToDefaultMode() {
  // Remove any style elements we've added
  const customStyles = document.querySelectorAll('style[data-neuro-customizer]');
  customStyles.forEach(style => style.remove());
  
  // Remove any classes we've added to the body
  document.body.classList.remove(
    'neuro-dyslexia-mode',
    'neuro-focus-mode',
    'neuro-high-contrast-mode',
    'neuro-calm-mode'
  );
  
  // Remove any observer or event listeners we've added
  if (window.neuroCustomizerObservers) {
    window.neuroCustomizerObservers.forEach(observer => observer.disconnect());
    window.neuroCustomizerObservers = [];
  }
  
  // Remove any inline styles we've added
  const elementsWithInlineStyles = document.querySelectorAll('[data-neuro-original-style]');
  elementsWithInlineStyles.forEach(element => {
    const originalStyle = element.getAttribute('data-neuro-original-style');
    element.setAttribute('style', originalStyle || '');
    element.removeAttribute('data-neuro-original-style');
  });
  
  // Remove reading ruler if present
  const readingRuler = document.getElementById('neuro-reading-ruler');
  if (readingRuler) {
    readingRuler.remove();
  }
  
  console.log('Reset to default mode complete');
}
