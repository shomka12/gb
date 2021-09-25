let page = document.querySelector('.main-nav');
let menuButton = document.querySelector('.menu');
let closeButton = document.querySelector('.main-nav-close-btn');

menuButton.onclick = function() {
  page.classList.toggle('main-nav-close');
};

closeButton.onclick = function() {
      page.classList.toggle('main-nav-close');
    };
    
