---
layout: page
title: Apartament
permalink: /apartament/
lang: pl
slug: apartment
---

# Apartament Bormio 15

## Galeria

<style>
.apartment-gallery {
  max-width: 900px;
  margin: 2rem auto;
  position: relative;
}

.gallery-main {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.gallery-main img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  display: block;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.gallery-main img:hover {
  transform: scale(1.02);
}

.gallery-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.9);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.gallery-nav:hover {
  background: rgba(255,255,255,1);
  transform: translateY(-50%) scale(1.1);
}

.gallery-nav.prev {
  left: 20px;
}

.gallery-nav.next {
  right: 20px;
}

.gallery-caption {
  text-align: center;
  padding: 1rem;
  background: #f5f5f5;
  font-size: 1rem;
  color: #333;
  border-radius: 0 0 8px 8px;
}

.gallery-counter {
  text-align: center;
  padding: 0.5rem;
  color: #666;
  font-size: 0.9rem;
}

/* Lightbox styles */
.lightbox {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.95);
  z-index: 999999;
  align-items: center;
  justify-content: center;
  padding: 60px 20px 20px;
}

.lightbox.active {
  display: flex;
}

.lightbox-content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.lightbox-content img {
  max-width: 95%;
  max-height: 95%;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
  box-shadow: 0 0 30px rgba(0,0,0,0.5);
  background: white;
  min-width: 200px;
  min-height: 200px;
}

.lightbox-close {
  position: fixed;
  top: 20px;
  right: 20px;
  background: rgba(255,255,255,0.9);
  border: none;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10001;
  color: #333;
}

.lightbox-close:hover {
  background: #fff;
  transform: rotate(90deg);
  color: #000;
}

.lightbox-nav {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.9);
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10001;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  color: #333;
}

.lightbox-nav:hover {
  background: #fff;
  transform: translateY(-50%) scale(1.1);
}

.lightbox-nav.prev {
  left: 30px;
}

.lightbox-nav.next {
  right: 30px;
}

.lightbox-caption {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0,0,0,0.7);
  color: white;
  padding: 12px 24px;
  border-radius: 25px;
  font-size: 1.1rem;
  z-index: 10001;
  max-width: 80%;
  text-align: center;
}

@media (max-width: 768px) {
  .gallery-main img {
    height: 300px;
  }

  .gallery-nav {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }

  .gallery-nav.prev {
    left: 10px;
  }

  .gallery-nav.next {
    right: 10px;
  }

  .lightbox-nav {
    width: 50px;
    height: 50px;
    font-size: 28px;
  }

  .lightbox-nav.prev {
    left: 15px;
  }

  .lightbox-nav.next {
    right: 15px;
  }

  .lightbox-caption {
    font-size: 0.95rem;
    padding: 10px 20px;
    bottom: 20px;
  }
}
</style>

<div class="apartment-gallery">
  <div class="gallery-main">
    <img id="gallery-image" src="{{ '/assets/images/gallery03/7c50bc3a_original.jpg' | relative_url }}" alt="Salon">
    <button class="gallery-nav prev" onclick="changeImage(-1)">‹</button>
    <button class="gallery-nav next" onclick="changeImage(1)">›</button>
  </div>
  <div class="gallery-caption" id="gallery-caption">Salon</div>
  <div class="gallery-counter" id="gallery-counter">1 / 9</div>
</div>

<script>
const images = [
  {
    src: '{{ "/assets/images/gallery03/7c50bc3a_original.jpg" | relative_url }}',
    alt: 'Salon',
    caption: 'Salon'
  },
  {
    src: '{{ "/assets/images/gallery03/31889db2_original.jpg" | relative_url }}',
    alt: 'Salon - widok ogólny',
    caption: 'Salon'
  },
  {
    src: '{{ "/assets/images/gallery03/ab77ef4d_original.jpg" | relative_url }}',
    alt: 'Salon i kuchnia',
    caption: 'Salon i kuchnia'
  },
  {
    src: '{{ "/assets/images/gallery03/70acdc13_original.jpg" | relative_url }}',
    alt: 'Salon i sypialnia',
    caption: 'Salon i sypialnia'
  },
  {
    src: '{{ "/assets/images/gallery03/3b3383db_original.jpg" | relative_url }}',
    alt: 'Sypialnia',
    caption: 'Sypialnia'
  },
  {
    src: '{{ "/assets/images/gallery03/d4246741_original.jpg" | relative_url }}',
    alt: 'Sypialnia - łóżka',
    caption: 'Sypialnia'
  },
  {
    src: '{{ "/assets/images/gallery03/ae30c472_original.jpg" | relative_url }}',
    alt: 'Sypialnia - widok',
    caption: 'Sypialnia'
  },
  {
    src: '{{ "/assets/images/gallery03/d8d222f3_original.jpg" | relative_url }}',
    alt: 'Łazienka',
    caption: 'Łazienka'
  },
  {
    src: '{{ "/assets/images/gallery03/f6e67298_original.jpg" | relative_url }}',
    alt: 'Łazienka - prysznic',
    caption: 'Łazienka'
  }
];

let currentIndex = 0;

function updateGallery() {
  const img = document.getElementById('gallery-image');
  const caption = document.getElementById('gallery-caption');
  const counter = document.getElementById('gallery-counter');

  img.src = images[currentIndex].src;
  img.alt = images[currentIndex].alt;
  caption.textContent = images[currentIndex].caption;
  counter.textContent = `${currentIndex + 1} / ${images.length}`;
}

function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  updateGallery();
}

// Update lightbox image and caption
function updateLightbox() {
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxCaption = document.getElementById('lightbox-caption');

  if (lightboxImage && lightboxCaption) {
    lightboxImage.src = images[currentIndex].src;
    lightboxImage.alt = images[currentIndex].alt;
    lightboxCaption.textContent = images[currentIndex].caption;
  }
}

// Navigate lightbox
function navigateLightbox(direction) {
  changeImage(direction);
  updateLightbox();
}

// Create lightbox dynamically and append to body
document.addEventListener('DOMContentLoaded', function() {
  // Create lightbox element structure
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  lightbox.className = 'lightbox';

  const closeButton = document.createElement('button');
  closeButton.className = 'lightbox-close';
  closeButton.innerHTML = '✕';
  closeButton.onclick = closeLightbox;

  const prevButton = document.createElement('button');
  prevButton.className = 'lightbox-nav prev';
  prevButton.innerHTML = '‹';
  prevButton.onclick = function(e) {
    e.stopPropagation();
    navigateLightbox(-1);
  };

  const nextButton = document.createElement('button');
  nextButton.className = 'lightbox-nav next';
  nextButton.innerHTML = '›';
  nextButton.onclick = function(e) {
    e.stopPropagation();
    navigateLightbox(1);
  };

  const lightboxContent = document.createElement('div');
  lightboxContent.className = 'lightbox-content';

  const lightboxImage = document.createElement('img');
  lightboxImage.id = 'lightbox-image';
  lightboxImage.src = '';
  lightboxImage.alt = '';

  const lightboxCaption = document.createElement('div');
  lightboxCaption.id = 'lightbox-caption';
  lightboxCaption.className = 'lightbox-caption';
  lightboxCaption.textContent = '';

  lightboxContent.appendChild(lightboxImage);
  lightbox.appendChild(closeButton);
  lightbox.appendChild(prevButton);
  lightbox.appendChild(nextButton);
  lightbox.appendChild(lightboxContent);
  lightbox.appendChild(lightboxCaption);

  // Append directly to body
  document.body.appendChild(lightbox);

  // Click outside to close
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
      closeLightbox(e);
    }
  });

  // Touch swipe support for lightbox
  let lightboxTouchStartX = 0;
  let lightboxTouchEndX = 0;

  lightbox.addEventListener('touchstart', function(e) {
    lightboxTouchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightbox.addEventListener('touchend', function(e) {
    lightboxTouchEndX = e.changedTouches[0].screenX;
    if (lightboxTouchEndX < lightboxTouchStartX - 50) {
      navigateLightbox(1); // Swipe left
    }
    if (lightboxTouchEndX > lightboxTouchStartX + 50) {
      navigateLightbox(-1); // Swipe right
    }
  }, { passive: true });

  // Click on main image to open lightbox
  const galleryImage = document.getElementById('gallery-image');
  if (galleryImage) {
    galleryImage.addEventListener('click', function(e) {
      e.preventDefault();

      updateLightbox();
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }
});

// Close lightbox
function closeLightbox(event) {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
  const lightbox = document.getElementById('lightbox');

  if (lightbox && lightbox.classList.contains('active')) {
    // Lightbox is open - navigate in lightbox
    if (e.key === 'ArrowLeft') {
      navigateLightbox(-1);
    } else if (e.key === 'ArrowRight') {
      navigateLightbox(1);
    } else if (e.key === 'Escape') {
      closeLightbox({ target: lightbox });
    }
  } else {
    // Lightbox is closed - navigate in gallery
    if (e.key === 'ArrowLeft') {
      changeImage(-1);
    } else if (e.key === 'ArrowRight') {
      changeImage(1);
    }
  }
});

// Touch swipe support
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('DOMContentLoaded', function() {
  const galleryImage = document.getElementById('gallery-image');

  if (galleryImage) {
    galleryImage.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    });

    galleryImage.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    });
  }
});

function handleSwipe() {
  if (touchEndX < touchStartX - 50) {
    changeImage(1); // Swipe left
  }
  if (touchEndX > touchStartX + 50) {
    changeImage(-1); // Swipe right
  }
}
</script>

Zapraszamy do komfortowego **Apartamentu 15 Premium** w sercu Czarnej Góry, idealnego dla rodzin i grup przyjaciół pragnących aktywnie spędzić czas w górach.

## Szczegóły apartamentu

### Rozmiar i lokalizacja
- **Powierzchnia:** 40 m²
- **Piętro:** Parter (ground floor)
- **Dostęp:** Winda w budynku
- **Lokalizacja:** Aparthotel Panorama - budynek boczny
- **Adres:** ul. Biała Woda, ul. Na Skarpie 4

### Pomieszczenia

#### Sypialnia
- Dwa wygodne łóżka pojedyncze
- Jedno wygodne łóżko podwójne
- Szafa na ubrania
- Spokojne wnętrze zapewniające komfortowy sen

#### Salon
- Rozkładana sofa 2-osobowa (dodatkowe miejsce do spania)
- Telewizor
- Balkon/taras z meblami ogrodowymi
- Stół w salonie

#### Kuchnia
W pełni wyposażona kuchnia zawiera:
- Lodówkę z zamrażalnikiem
- Kuchenkę elektryczną z piekarnikiem
- Zmywarkę
- Kuchenkę mikrofalową
- Czajnik elektryczny
- Ekspres do kawy przelewowy
- Ekspres Nespresso
- Toster
- Komplet naczyń i sztućców
- Podstawowe przybory kuchenne
- Stół jadalny

#### Łazienka
- Prysznic
- WC
- Umywalka
- Ręczniki
- Suszarka do włosów

## Wyposażenie i udogodnienia

### Technologia
- **WiFi:** Bezpłatny internet do 40 Mbps
- **Telewizor:** Smart TV
- **Sejf:** Dla Twoich cennych rzeczy

### Dodatkowe udogodnienia
- Balkon/taras z meblami ogrodowymi
- Parking na terenie obiektu (nie gwarantowany)
- Winda w budynku
- Żelazko i deska do prasowania
- Suszarka do włosów w łazience
- Suszarka do ubrań
- Pralka w mieszkaniu
- Pościel i ręczniki zapewnione
- Self check-in (możliwość samodzielnego zameldowania)

## Zasady pobytu

### Pojemność
- **Maksymalna liczba gości:** 4 osoby
- Konfiguracja łóżek: 2 pojedyncze + 1 podwójne + rozkładana sofa 2-osobowa

### Polityka
- **Zakaz palenia** w apartamencie
- **Zwierzęta:** Akceptowane
- **Cisza nocna:** 22:00 - 7:00
- **Meldunek:** od 16:00
- **Wymeldowanie:** do 11:00
- **Kaucja zwrotna:** 300 PLN
- **Opłata klimatyczna:** 3,20 PLN/osobę/dobę

### Co znajduje się w pobliżu?

- **Wyciąg narciarski:** W pobliżu
- **Pizzeria, kawiarnia i sklep spożywczy:** W okolicy
- **Basen i sauna:** W pobliżu
- **Restauracje górskie:** W okolicy
- **Parking:** Na terenie obiektu (nie gwarantowany)

## Ceny i rezerwacja

Aby poznać aktualne ceny i dokonać rezerwacji, zapraszamy do kontaktu:

[Rezerwuj online](https://www.sunandsnow.pl/search/apartment/7620/803/2026-06-01/2026-06-07/2-2-11,1,11,1)

**Telefon:** +48 22 450 26 26
**Email:** rezerwacja@sunandsnow.pl

---

### Idealne dla:
- Rodzin z dziećmi
- Grup przyjaciół (do 4 osób)
- Par szukających spokojnego wypoczynku
- Osób pracujących zdalnie (workation)
- Miłośników narciarstwa i aktywności na świeżym powietrzu
