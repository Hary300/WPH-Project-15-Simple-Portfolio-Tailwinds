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
