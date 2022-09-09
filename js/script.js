let leng = document.querySelector('.nav__lang');
leng.addEventListener('click', function () {
   let langShape = document.querySelector('.nav__lang span');
   langShape.classList.toggle('lang__active');
});


let burger = document.querySelector('.nav__burger');
let burgerMen = document.querySelector('.nav__burgers');
let block = document.querySelector('.nav__block');
burger.addEventListener('click', burgerActive);
burgerMen.addEventListener('click', burgerActive);


function burgerActive() {
   burger.classList.toggle('nav__burger-active');
   block.classList.toggle('nav__block-active');
}

let burgerMenu = document.querySelector('.nav__menu')
window.addEventListener('scroll', function () {
   let scrollPos = window.scrollY;
   if (scrollPos > 50) {
      burgerMenu.classList.add('menu__active');
   } else {
      burgerMenu.classList.remove('menu__active');
   }
})




























SmoothScroll({
   // Время скролла 400 = 0.4 секунды
   animationTime: 800,
   // Размер шага в пикселях
   stepSize: 75,

   // Дополнительные настройки:

   // Ускорение
   accelerationDelta: 30,
   // Максимальное ускорение
   accelerationMax: 2,

   // Поддержка клавиатуры
   keyboardSupport: true,
   // Шаг скролла стрелками на клавиатуре в пикселях
   arrowScroll: 50,

   // Pulse (less tweakable)
   // ratio of "tail" to "acceleration"
   pulseAlgorithm: true,
   pulseScale: 4,
   pulseNormalize: 1,

   // Поддержка тачпада
   touchpadSupport: true,
})