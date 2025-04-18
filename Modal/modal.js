'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnmodal = document.querySelectorAll('.show-modal');
const closemodal = document.querySelector('.close-modal');
const closebtn = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const addbtn = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < btnmodal.length; i++) {
  btnmodal[i].addEventListener('click', closebtn);
}
closemodal.addEventListener('click', addbtn);
overlay.addEventListener('click', addbtn);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});
