---
layout: page
title: Czarna Góra
permalink: /czarna-gora/
---

<style>
.czarna-gora-gallery {
  position: relative;
  overflow: hidden;
  margin: 2rem 0;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.czarna-gora-gallery img {
  width: 100%;
  height: auto;
  display: block;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.czarna-gora-gallery:hover img {
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

.gallery-info {
  text-align: center;
  padding: 1rem;
  background: #f5f5f5;
  color: #666;
  font-size: 0.9rem;
  border-radius: 0 0 8px 8px;
}

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

<script>
document.addEventListener('DOMContentLoaded', function() {
  const images = [
    {
      src: '{{ "/assets/images/czarna-gora/aerial-view.jpg" | relative_url }}',
      alt: 'Widok z lotu ptaka na Czarną Górę',
      caption: 'Widok z lotu ptaka na Czarną Górę'
    },
    {
      src: '{{ "/assets/images/czarna-gora/ski-lift.jpg" | relative_url }}',
      alt: 'Kolej linowa w Czarnej Górze',
      caption: 'Kolej linowa'
    },
    {
      src: '{{ "/assets/images/czarna-gora/summer-view.jpg" | relative_url }}',
      alt: 'Letni widok na góry',
      caption: 'Letni krajobraz'
    },
    {
      src: '{{ "/assets/images/czarna-gora/winter-landscape.jpg" | relative_url }}',
      alt: 'Zimowy krajobraz Czarnej Góry',
      caption: 'Zimowy krajobraz'
    },
    {
      src: '{{ "/assets/images/czarna-gora/observation-tower.jpg" | relative_url }}',
      alt: 'Wieża widokowa na szczycie',
      caption: 'Wieża widokowa'
    }
  ];

  let currentIndex = 0;

  const galleryDiv = document.querySelector('.czarna-gora-gallery');
  if (galleryDiv) {
    const prevBtn = document.createElement('button');
    prevBtn.className = 'gallery-nav prev';
    prevBtn.innerHTML = '‹';
    prevBtn.onclick = function(e) { e.stopPropagation(); changeImage(-1); };

    const nextBtn = document.createElement('button');
    nextBtn.className = 'gallery-nav next';
    nextBtn.innerHTML = '›';
    nextBtn.onclick = function(e) { e.stopPropagation(); changeImage(1); };

    galleryDiv.appendChild(prevBtn);
    galleryDiv.appendChild(nextBtn);

    const galleryImage = galleryDiv.querySelector('img');
    if (galleryImage) {
      galleryImage.addEventListener('click', openLightbox);
    }
  }

  function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;
    updateGallery();
  }

  function updateGallery() {
    const galleryImage = document.querySelector('.czarna-gora-gallery img');
    const caption = document.getElementById('gallery-caption');
    const counter = document.getElementById('gallery-counter');

    if (galleryImage) {
      galleryImage.src = images[currentIndex].src;
      galleryImage.alt = images[currentIndex].alt;
    }
    if (caption) caption.textContent = images[currentIndex].caption;
    if (counter) counter.textContent = (currentIndex + 1) + ' / ' + images.length;
  }

  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  lightbox.className = 'lightbox';

  const closeButton = document.createElement('button');
  closeButton.className = 'lightbox-close';
  closeButton.innerHTML = '✕';
  closeButton.onclick = closeLightbox;

  const lightboxPrevBtn = document.createElement('button');
  lightboxPrevBtn.className = 'lightbox-nav prev';
  lightboxPrevBtn.innerHTML = '‹';
  lightboxPrevBtn.onclick = function(e) { e.stopPropagation(); navigateLightbox(-1); };

  const lightboxNextBtn = document.createElement('button');
  lightboxNextBtn.className = 'lightbox-nav next';
  lightboxNextBtn.innerHTML = '›';
  lightboxNextBtn.onclick = function(e) { e.stopPropagation(); navigateLightbox(1); };

  const lightboxContent = document.createElement('div');
  lightboxContent.className = 'lightbox-content';

  const lightboxImage = document.createElement('img');
  lightboxImage.id = 'lightbox-image';

  const lightboxCaption = document.createElement('div');
  lightboxCaption.id = 'lightbox-caption';
  lightboxCaption.className = 'lightbox-caption';

  lightboxContent.appendChild(lightboxImage);
  lightbox.appendChild(closeButton);
  lightbox.appendChild(lightboxPrevBtn);
  lightbox.appendChild(lightboxNextBtn);
  lightbox.appendChild(lightboxContent);
  lightbox.appendChild(lightboxCaption);
  document.body.appendChild(lightbox);

  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) closeLightbox();
  });

  function openLightbox(e) {
    if (e) e.preventDefault();
    updateLightbox();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  function updateLightbox() {
    lightboxImage.src = images[currentIndex].src;
    lightboxImage.alt = images[currentIndex].alt;
    lightboxCaption.textContent = images[currentIndex].caption;
  }

  function navigateLightbox(direction) {
    changeImage(direction);
    updateLightbox();
  }

  document.addEventListener('keydown', function(e) {
    if (lightbox.classList.contains('active')) {
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
      else if (e.key === 'ArrowRight') navigateLightbox(1);
      else if (e.key === 'Escape') closeLightbox();
    } else {
      if (e.key === 'ArrowLeft') changeImage(-1);
      else if (e.key === 'ArrowRight') changeImage(1);
    }
  });

  let touchStartX = 0;
  if (galleryDiv) {
    galleryDiv.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    galleryDiv.addEventListener('touchend', function(e) {
      const touchEndX = e.changedTouches[0].screenX;
      if (touchEndX < touchStartX - 50) changeImage(1);
      if (touchEndX > touchStartX + 50) changeImage(-1);
    }, { passive: true });
  }

  lightbox.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightbox.addEventListener('touchend', function(e) {
    const touchEndX = e.changedTouches[0].screenX;
    if (touchEndX < touchStartX - 50) navigateLightbox(1);
    if (touchEndX > touchStartX + 50) navigateLightbox(-1);
  }, { passive: true });
});
</script>

## Czarna Góra - Twoja górska przygoda

<div class="czarna-gora-gallery">
  <img src="{{ '/assets/images/czarna-gora/aerial-view.jpg' | relative_url }}" alt="Widok z lotu ptaka na Czarną Górę">
</div>
<div class="gallery-info">
  <span id="gallery-caption">Widok z lotu ptaka na Czarną Górę</span> • <span id="gallery-counter">1 / 5</span>
</div>

Czarna Góra to malowniczy region w Sudetach, znany z doskonałych warunków narciarskich, czystego powietrza i pięknych krajobrazów przez cały rok.

## O lokalizacji

### Adres
**Na Skarpie 10/15**
**57-512 Biała Woda**
**Polska**

Apartament Bormio 15 znajduje się w sercu tej wyjątkowej lokalizacji, oferując łatwy dostęp do wszystkich atrakcji regionu.

## Narciarstwo i sporty zimowe

### Ośrodek narciarski Czarna Góra

Czarna Góra Resort to jeden z najnowocześniejszych ośrodków narciarskich w Polsce:

- **Trasy narciarskie:** Ponad 15 km tras o różnym stopniu trudności
- **Wyciągi:** Nowoczesne koleje i wyciągi krzesełkowe
- **Sztuczny śnieg:** Gwarancja śniegu od grudnia do marca
- **Szkoła narciarska:** Profesjonalni instruktorzy dla dzieci i dorosłych
- **Wypożyczalnia sprzętu:** Pełna oferta sprzętu narciarskiego i snowboardowego

#### Poziomy tras
- **Zielone trasy:** Idealne dla początkujących
- **Niebieskie trasy:** Średnio zaawansowane
- **Czerwone trasy:** Dla doświadczonych narciarzy
- **Czarne trasy:** Dla ekspertów

### Odległości od apartamentu
- 150m do wyciągu narciarskiego
- 200m do punktu wypożyczalni sprzętu
- 100m do restauracji przy stoku

## Relaks i regeneracja

### Strefa wellness
W pobliżu apartamentu znajdziesz:
- **Basen kryty** (200m)
- **Sauna fińska** (200m)
- **Masaże i SPA** (300m)

Idealne miejsce na relaks po aktywnym dniu w górach!

## Gastronomia

### Restauracje w okolicy
- **100m:** Restauracja górska z polską kuchnią
- **150m:** Pizzeria
- **200m:** Kawiarnia z widokiem na góry
- **100m:** Sklep spożywczy

## Letnie atrakcje

Czarna Góra to nie tylko zima! Latem region oferuje:

### Szlaki piesze
- Oznakowane szlaki górskie
- Spacery po okolicy
- Nordic walking
- Widokowe punkty na szczytach

### Rowerem po górach
- Ścieżki rowerowe (MTB)
- Wypożyczalnia rowerów
- Trasy o różnym stopniu trudności
- Serwis rowerowy

### Inne aktywności
- Wspinaczka w parku linowym
- Paintball
- Kąpiele w naturalnych zbiornikach wodnych
- Grzybobranie (sezon jesienny)

## Czyste powietrze

Czarna Góra słynie z **wyjątkowo czystego powietrza**:

### Pomiary jakości powietrza
- **PM2.5:** Znacznie poniżej norm WHO
- **PM10:** W granicach norm ekologicznych
- **Brak przemysłu:** Teren wolny od zanieczyszczeń przemysłowych

To idealne miejsce dla:
- Osób z problemami oddechowymi
- Rodzin z małymi dziećmi
- Wszystkich ceniących zdrowy tryb życia

## Jak dojechać?

### Samochodem
- Z Wrocławia: ~2 godziny (130 km)
- Z Warszawy: ~5 godzin (450 km)
- Z Krakowa: ~4 godziny (320 km)
- Z Poznania: ~3,5 godziny (280 km)

**Bezpłatny parking** przy apartamencie!

### Transportem publicznym
- Autobus z Wrocławia do Stronia Śląskiego
- Transfer lokalny do Czarnej Góry
- Możliwość organizacji transferu (zapytaj przy rezerwacji)

## Okoliczne atrakcje

### W pobliżu warto odwiedzić:
- **Stronie Śląskie** (8 km) - uzdrowisko z pięknymi krajobrazami
- **Jaskinia Niedźwiedzia** (15 km) - jedna z najpiękniejszych jaskiń w Polsce
- **Bystrzyca Kłodzka** (25 km) - zabytkowe miasteczko
- **Wodospad Wilczki** (12 km) - unikatowy podziemny wodospad

## Pogoda przez cały rok

### Zima (grudzień - marzec)
- Temperatura: -5°C do 5°C
- Śnieg: Gwarantowany przez armatki śnieżne
- Idealna pora na narty

### Wiosna i lato (kwiecień - wrzesień)
- Temperatura: 10°C do 25°C
- Słoneczne dni, świeże powietrze
- Idealna pora na wędrówki

### Jesień (październik - listopad)
- Temperatura: 5°C do 15°C
- Piękne kolory lasów
- Sezon grzybobrania

---
