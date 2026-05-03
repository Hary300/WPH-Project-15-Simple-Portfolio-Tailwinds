const logo = document.querySelector('.logo');
logo.addEventListener('click', function () {
  window.scrollTo(0, 0);
});

const offsetMenu = document.querySelector('.offset-menu');
const checkedState = document.querySelector('.checked-state');

document.addEventListener('click', function (event) {
  const isNavLink = event.target.closest('.nav-link');
  const isContactUsBtn = event.target.closest('.contact-us-btn');

  if (isNavLink || isContactUsBtn) {
    checkedState.checked = false;
  }
});
