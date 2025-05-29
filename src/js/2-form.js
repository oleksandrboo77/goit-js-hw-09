const form = document.querySelector('.feedback-form');

const formData = { email: '', message: '' };

form.addEventListener('input', event => {
  const isEmail = event.target.classList.contains('js-email-item');
  const isMessage = event.target.classList.contains('js-textarea-item');

  if (!isEmail && !isMessage) return;

  const fieldType = isEmail ? 'email' : 'message';

  formData[fieldType] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

const savedData = localStorage.getItem('feedback-form-state');