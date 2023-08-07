const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('show');
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('show');
});
