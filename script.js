  AOS.init({
    duration: 700,
     once: false,        // supaya bisa animasi berkali-kali
    mirror: true,       // animasi saat scroll naik juga
    offset: 100 // bisa atur jarak trigger kalau perlu
  });
  
  
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

const menu = document.querySelector('.menu');
 const hamburger = document.querySelector('.hamburger');
 hamburger.addEventListener('click', function() {
    
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
    menu.classList.toggle('z-999');
    menu.classList.toggle('translate-y-0');
    menu.classList.toggle('-translate-y-full');
 });

