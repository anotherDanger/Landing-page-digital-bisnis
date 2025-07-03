AOS.init({
    duration: 500,
    once: false,
    mirror: true,
    offset: 120
  });
  
  
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

const menu = document.getElementById('menu');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', function() {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    menu.classList.add('flex');
    menu.classList.add('z-99');
    setTimeout(() => {
    menu.classList.remove('-translate-y-10','opacity-0');
    menu.classList.add('translate-y-0','opacity-100');
    }, 10);
  } else {
    menu.classList.remove('flex');
    menu.classList.remove('translate-y-0','opacity-100')
    menu.classList.add('-translate-y-10','opacity-0');
    // Sembunyikan setelah transisi
    setTimeout(() => {
      menu.classList.add('hidden');
    }, 500); // Sesuai duration-500
  }
});


const buttonRight = document.getElementById('buttonRight');
const buttonLeft = document.getElementById('buttonLeft');
const containerSideScroll = document.getElementById('containerSideScroll');

buttonLeft.addEventListener('click',function(){
  containerSideScroll.scrollBy({left:-200,behavior:'smooth'});
});


buttonRight.addEventListener('click',function(){
  containerSideScroll.scrollBy({left:200,behavior:'smooth'});
});
