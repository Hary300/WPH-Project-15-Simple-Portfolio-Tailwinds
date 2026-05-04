const logo = document.querySelector('.logo');
logo.addEventListener('click', function () {
  window.scrollTo(0, 0);
});

const offsetMenu = document.querySelector('.offset-menu');
const checkedState = document.querySelector('.checked-state');

document.addEventListener('click', function (event) {
  const menuLiA = event.target.closest('.menu-li-a');
  const isContactUsBtn = event.target.closest('.contact-us-btn');

  if (menuLiA || isContactUsBtn) {
    checkedState.checked = false;
  }
});

const form = document.querySelector('.form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  let isValid = true;
  const nameInput = this.querySelector('#name');
  const emailInput = this.querySelector('#email');
  const messageInput = this.querySelector('#message');

  isValid = validateInput(nameInput, 'Please enter your name!') && isValid;
  isValid = validateInput(emailInput, 'Please enter your email!') && isValid;
  isValid =
    validateInput(messageInput, 'Please enter your message!') && isValid;

  if (isValid) {
    form.reset();
    const formInputs = form.querySelectorAll('.input');
    const submitButton = form.querySelector('.submit-button');

    formInputs.forEach((input) => (input.disabled = true));

    submitButton.disabled = true;
    submitButton.innerText = 'Sending Your Message...';

    setTimeout(() => {
      formInputs.forEach((input) => (input.disabled = false));

      submitButton.disabled = false;
      submitButton.innerText = 'Sending';
      renderModal();
    }, 1000);
  }
});

function validateInput(inputElement, message) {
  const isEmpty = inputElement.value.trim() === '';
  const parents = inputElement.closest('.input-field');
  const errorContainer = parents.querySelector('.error-container');

  if (isEmpty) {
    errorContainer.innerText = message;

    inputElement.classList.add('is-invalid');
    return false;
  }
  errorContainer.innerText = '';
  inputElement.classList.remove('is-invalid');
  return true;
}

const modal = document.querySelector('.modal');

function renderModal() {
  const boxModal = modal.querySelector('.box-modal');
  modal.classList.remove('opacity-0', 'scale-95', 'pointer-events-none');
  document.documentElement.classList.add('overflow-hidden');

  const success = {
    src: './assets/images/modal-success.png',
    title: 'MESSAGE SENT!',
    textButton: 'Back',
  };

  const fail = {
    src: './assets/images/modal-fail.png',
    title: 'SOMETHING WENT WRONG!',
    textButton: 'Try again',
  };

  const isSucces = Math.random() * 3 < 2;

  if (isSucces) {
    updateUI(success, boxModal);
  } else {
    updateUI(fail, boxModal);
  }
}

function updateUI(status, boxModal) {
  boxModal.innerHTML = `
<div>
  <img
    src="${status.src}"
    alt="check icon"
    class="max-w-30"
  />
</div>
<h3 class="text-center text-base md:text-xl">${status.title}</h3>
<button class="close-button btn mt-8">${status.textButton}</button>
  
  `;
}

document.addEventListener('click', function (event) {
  const isCloseButton = event.target.closest('.close-button');
  const isOverlay = event.target.closest('.overlay');

  if (isCloseButton || isOverlay) {
    modal.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
    document.documentElement.classList.remove('overflow-hidden');
  }
});
