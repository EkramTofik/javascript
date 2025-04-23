const content1 = document.querySelector('.content1');
const content2 = document.querySelector('.content2');
const content3 = document.querySelector('.content3');
const content4 = document.querySelector('.content4');
const content5 = document.querySelector('.content5');
const content6 = document.querySelector('.content6');
const box = document.querySelector('.box');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const arrowleft = document.querySelector('#arrowleft');
const arrowright = document.querySelector('#arrowright');
const contents = [content1, content2, content3, content4, content5, content6];
let counter = 1;
arrowright.addEventListener('click', function () {
  if (counter <= 2) {
    contents.forEach((c) => (c.style.display = 'none'));
    for (let x = counter; x < counter + 4 && x < contents.length; x++) {
      contents[x].style.display = 'block';
      box.appendChild(contents[x]);
    }
    counter++;
  } else {
    counter = 0;
  }
});
let count = 2;
arrowleft.addEventListener('click', function () {
  if (count >= 0) {
    box.innerHTML = ''; // ✅ clear previous elements
    contents.forEach((c) => (c.style.display = 'none'));
    for (let x = count; x < count + 4 && x < contents.length; x++) {
      contents[x].style.display = 'block';
      box.appendChild(contents[x]);
    }
    count--;
  } else {
    count = 0;
  }
});
