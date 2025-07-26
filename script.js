
AOS.init({
    duration: 500,
    once: false,        // supaya bisa animasi berkali-kali
    mirror: false,       // animasi saat scroll naik juga
    offset: 120 // bisa atur jarak trigger kalau perlu
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

//menu side scroll
const buttonRight = document.getElementById('buttonRightmenu');
const buttonLeft = document.getElementById('buttonLeftmenu');
const containerSideScroll = document.getElementById('containerSideScrollmenu');

buttonLeft.addEventListener('click',function(){
  containerSideScroll.scrollBy({left:-200,behavior:'smooth'});
});


buttonRight.addEventListener('click',function(){
  containerSideScroll.scrollBy({left:200,behavior:'smooth'});
});


//dummy testimoni
const testimoniData = [
  {
    nama: "Ibu Sari",
    komentar: "Makanannya enak, pengiriman tepat waktu!",
    rating: 5
  },
  {
    nama: "Pak Budi",
    komentar: "Pelayanan ramah, sangat puas!",
    rating: 4
  },
  {
    nama: "Mbak Rina",
    komentar: "Catering terbaik untuk acara keluarga!",
    rating: 5
  },
  {
    nama: "Mbak Dewi",
    komentar: "Catering ini sangat membantu acara saya, makanan lezat!",
    rating: 5
  },
  {
    nama: "Pak Joko",
    komentar: "Makanan selalu segar dan enak, sangat direkomendasikan!",
    rating: 5
  },
  {
    nama: "Bu Ani",
    komentar: "Porti makanannya pas, semua tamu puas.",
    rating: 4
  }
  
 
];


  const container = document.getElementById("testimoni-container");
  const buttonRightTestimoni = document.getElementById('buttonRighTestimoni');
  const buttonLeftTestimoni = document.getElementById('buttonLeftTestimoni');

  testimoniData.forEach(testi => {
    const card = document.createElement("div");
    card.className = "bg-gray-100 p-4 rounded-lg shadow-lg border-t-4 border-b-4 border-orange-400 min-h-45 min-w-50";
    card.innerHTML = `
      <strong class="text-lg text-gray-800">${testi.nama}</strong>
      <p class="mt-2 italic text-gray-600 ">"${testi.komentar}"</p>
      <p class="mt-2 text-yellow-500">Rating: ${"⭐".repeat(testi.rating)}</p>
    `;

    container.appendChild(card);
  });
  
 //testimoni side scroll

buttonLeftTestimoni.addEventListener('click',function(){
  container.scrollBy({left:-200,behavior:'smooth'});
  
});
buttonRightTestimoni.addEventListener('click',function(){
  container.scrollBy({left:200,behavior:'smooth'});
  
});

//shake

  const icon = document.getElementById("whatsapp-icon");
  function shakeIcon() {
    icon.classList.add("shake");

    setTimeout(() => {
      icon.classList.remove("shake");
    }, 500); 
  }
  setInterval(shakeIcon, 3000);

  icon.addEventListener("click", shakeIcon);

// Initialize Splide

  document.addEventListener('DOMContentLoaded', function () {
      var main = new Splide('#main-slider', {
        type       : 'fade',
        heightRatio: 0.5,
        pagination : false,
        arrows     : false,
        cover      : true,
      });

      var thumbnails = new Splide('#thumbnail-slider', {
        rewind          : true,
        fixedWidth      : 104,
        fixedHeight     : 58,
        isNavigation    : true,
         arrows          : false, // MATIKAN JUGA DI THUMBNAIL
        gap             : 10,
        focus           : 'center',
        pagination      : false,
        cover           : true,
        dragMinThreshold: {
          mouse: 4,
          touch: 10,
        },
        breakpoints : {
          640: {
            fixedWidth  : 66,
            fixedHeight : 38,
          },
        },
      });

      main.sync(thumbnails);
      main.mount();
      thumbnails.mount();
    });


