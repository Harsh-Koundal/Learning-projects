
const preloading = document.querySelector('.preloading');
const loadingText = document.createElement('div');


preloading.classList.add('preloader');


preloading.appendChild(loadingText);


const messages = [
  'Loading assets...',
  'Initializing...',
  'Almost done...'
];

let index = 0;


loadingText.textContent = messages[index];
index++;


const interval = setInterval(() => {
  if (index < messages.length) {
    loadingText.textContent = messages[index];
    index++;
  } else {

    preloading.style.display = 'none';
    clearInterval(interval);
  }
}, 2000);
