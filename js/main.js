// animasi card
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card');

    // Inisialisasi ScrollReveal dengan interval
    ScrollReveal().reveal(cards, {
        duration: 1500, 
        origin: 'right', 
        distance: '50px', 
        easing: 'ease-in-out',
        reset: true, 
        interval: 500 
    });
});
// animasi card
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card-1');

    // Inisialisasi ScrollReveal dengan interval
    ScrollReveal().reveal(cards, {
        duration: 1500, 
        origin: 'bottom', 
        distance: '50px', 
        easing: 'ease-in-out',
        reset: true, 
        interval: 500 
    });
});
// animasi card
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card-2');

    // Inisialisasi ScrollReveal dengan interval
    ScrollReveal().reveal(cards, {
        duration: 2000, 
        origin: 'top', 
        distance: '50px', 
        easing: 'ease-in-out',
        reset: true, 
        interval: 500 
    });
});
// animasi card
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card-3');

    // Inisialisasi ScrollReveal dengan interval
    ScrollReveal().reveal(cards, {
        duration: 2000, 
        origin: 'bottom', 
        distance: '50px', 
        easing: 'ease-in-out',
        reset: true, 
        interval: 500 
    });
});
// animasi card
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card-4');

    // Inisialisasi ScrollReveal dengan interval
    ScrollReveal().reveal(cards, {
        duration: 1500, 
        origin: 'top', 
        distance: '50px', 
        easing: 'ease-in-out',
        reset: true, 
        interval: 500 
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.img-fluid');

    // Inisialisasi ScrollReveal dengan interval
    ScrollReveal().reveal(cards, {
        duration: 1500, 
        origin: 'bottom', 
        distance: '50px', 
        easing: 'ease-in-out',
        reset: true, 
        interval: 500 
    });
});




// efek ngetiik untuk about us

// Teks yang akan diubah menjadi efek mengetik
const text = "Als wir 2019 gegründet wurden, war es unsere Mission, die Pflegekrise in Deutschland zu lindern. Es wird immer schwieriger, geeignetes Personal im Pflegebereich zu finden. Durch die Besetzung international qualifizierter Pflegekräfte adressieren wir unbesetzte Stellen in Deutschland. Dies verringert die Belastung für Fachkräfte und verbessert die Dienstleistungen für diejenigen, die Dienstleistungen benötigen. Der Fokus liegt hier jedoch nicht nur auf Deutschland. Daher wurde das Herkunftsland, die Philippinen, von uns speziell ausgewählt. Die Zusammenarbeit mit den Inseln bietet eine gute Alternative, um den dortigen Pflegekräfteüberschuss mit dem landesweiten Pflegekräftemangel in Verbindung zu bringen und diesen so zu überwinden. Die Rekrutierung von ausgebildetem Pflegepersonal erfolgt sorgfältig durch ambitionierte und international interessierte Bewerber.";

// Element yang akan diberikan efek mengetik
const typewriterElement = document.getElementById("typewriter-text");

// Fungsi untuk menambahkan efek mengetik
function typewriterEffect() {
  let i = 0;
  const speed = 10; // Kecepatan mengetik (ms)

  function type() {
    if (i < text.length) {
      typewriterElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Jalankan efek mengetik saat dokumen telah dimuat
document.addEventListener("DOMContentLoaded", function () {
  typewriterEffect();
});


