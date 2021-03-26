// handle contact form inputs label transition
const filledInputClassName = 'form__input--filled';
const formInputs = document.querySelectorAll('.form input');
formInputs.forEach(input => {
  input.addEventListener('input', () => {
    const value = input.value.trim();
    value ? input.classList.add(filledInputClassName) : input.classList.remove(filledInputClassName);
  });
});

// handle contact form submission
const contactForm = document.querySelector('#contactForm');
contactForm.addEventListener('submit', evt => {
  evt.preventDefault()
  const formData = new FormData(contactForm);
  sendMessage(formData);
})

//TODO: send contact form data to the server
const sendMessage = (data) => {
  const arr = Array.from(data.values());
  console.log(`Contact form data: ${arr}`);
}

// handle newsletter form submission
const newsletterForm = document.querySelector('#newsletterForm');
newsletterForm.addEventListener('submit', evt => {
  evt.preventDefault()
  const formData = new FormData(newsletterForm);
  signUp(formData);
})

//TODO: send newsletter data to the server
const signUp = (data) => {
  const email = data.get('email');
  const consent = data.get('consent');

  email && consent === 'on' 
    ? console.log(`Newsletter form email: ${email}, ${consent}`)
    : alert('Email and accepting consent is required');
}

// handle lazy images loading
let lazyImages;
if ('IntersectionObserver' in window) {
  lazyImages = document.querySelectorAll('.lazy');
  const imageObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const image = entry.target;
        image.src = image.dataset.src;
        image.classList.remove('lazy');
        imageObserver.unobserve(image);
      }
    });
  });

  lazyImages.forEach((image) => {
    imageObserver.observe(image);
  });
}