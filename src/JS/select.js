let displayedError = '';

function showErrorText(elementId) {
  const errorText = document.getElementById(elementId);
  if (displayedError !== elementId) {
    errorText.style.display = 'block';
    if (displayedError !== '') {
      const previousError = document.getElementById(displayedError);
      previousError.style.display = 'none';
    }
    displayedError = elementId;
  }
}

function limparTexto() {
  const errorText = document.getElementById(displayedError);
  if (errorText) {
    errorText.style.display = 'none';
    displayedError = '';
  }
}