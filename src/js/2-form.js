const form = document.querySelector('.feedback-form');
const formData = { email: '', message: '' };

const loadFormData = () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    try {
      const { email, message } = JSON.parse(savedData);
      form.elements.email.value = email ? email.trim() : '';
      form.elements.message.value = message ? message.trim() : '';
      formData.email = email ? email.trim() : '';
      formData.message = message ? message.trim() : '';
    } catch (error) {
      console.error('Error parsing saved form data:', error);
    }
  }
};

const handleInput = event => {
  const { name, value } = event.target;
  if (name === 'email' || name === 'message') {
    formData[name] = value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
};

const handleSubmit = event => {
  event.preventDefault();

  if (!formData.email.trim() || !formData.message.trim()) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  form.reset();
  formData.email = '';
  formData.message = '';
};

loadFormData();
form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);
