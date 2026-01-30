---
layout: page
title: Startseite
permalink: /de/
lang: de
slug: home
---

<style>
.hero-gallery {
  max-width: 100%;
  margin: 0 auto 2rem;
  position: relative;
}

.hero-gallery-main {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.hero-gallery-main img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  display: block;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.hero-gallery-main img:hover {
  transform: scale(1.02);
}

.hero-gallery-nav {
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

.hero-gallery-nav:hover {
  background: rgba(255,255,255,1);
  transform: translateY(-50%) scale(1.1);
}

.hero-gallery-nav.prev {
  left: 20px;
}

.hero-gallery-nav.next {
  right: 20px;
}

.hero-gallery-counter {
  text-align: center;
  padding: 0.5rem;
  color: #666;
  font-size: 0.9rem;
}

/* Lightbox styles */
.hero-lightbox {
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

.hero-lightbox.active {
  display: flex;
}

.hero-lightbox-content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.hero-lightbox-content img {
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

.hero-lightbox-close {
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

.hero-lightbox-close:hover {
  background: #fff;
  transform: rotate(90deg);
  color: #000;
}

.hero-lightbox-nav {
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

.hero-lightbox-nav:hover {
  background: #fff;
  transform: translateY(-50%) scale(1.1);
}

.hero-lightbox-nav.prev {
  left: 30px;
}

.hero-lightbox-nav.next {
  right: 30px;
}

.hero-lightbox-caption {
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
  .hero-gallery-main img {
    height: 300px;
  }

  .hero-gallery-nav {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }

  .hero-gallery-nav.prev {
    left: 10px;
  }

  .hero-gallery-nav.next {
    right: 10px;
  }

  .hero-lightbox-nav {
    width: 50px;
    height: 50px;
    font-size: 28px;
  }

  .hero-lightbox-nav.prev {
    left: 15px;
  }

  .hero-lightbox-nav.next {
    right: 15px;
  }

  .hero-lightbox-caption {
    font-size: 0.95rem;
    padding: 10px 20px;
    bottom: 20px;
  }
}
</style>

<div class="hero-gallery">
  <div class="hero-gallery-main">
    <img id="hero-gallery-image" src="{{ '/assets/images/gallery03/7c50bc3a_original.jpg' | relative_url }}" alt="Wohnzimmer">
    <button class="hero-gallery-nav prev" onclick="changeHeroImage(-1)">‹</button>
    <button class="hero-gallery-nav next" onclick="changeHeroImage(1)">›</button>
  </div>
  <div class="hero-gallery-counter" id="hero-gallery-counter">1 / 9</div>
</div>

<script>
const heroImages = [
  {
    src: '{{ "/assets/images/gallery03/7c50bc3a_original.jpg" | relative_url }}',
    alt: 'Wohnzimmer',
    caption: 'Wohnzimmer'
  },
  {
    src: '{{ "/assets/images/gallery03/31889db2_original.jpg" | relative_url }}',
    alt: 'Wohnzimmer - Gesamtansicht',
    caption: 'Wohnzimmer'
  },
  {
    src: '{{ "/assets/images/gallery03/ab77ef4d_original.jpg" | relative_url }}',
    alt: 'Wohnzimmer und Küche',
    caption: 'Wohnzimmer und Küche'
  },
  {
    src: '{{ "/assets/images/gallery03/70acdc13_original.jpg" | relative_url }}',
    alt: 'Wohnzimmer und Schlafzimmer',
    caption: 'Wohnzimmer und Schlafzimmer'
  },
  {
    src: '{{ "/assets/images/gallery03/3b3383db_original.jpg" | relative_url }}',
    alt: 'Schlafzimmer',
    caption: 'Schlafzimmer'
  },
  {
    src: '{{ "/assets/images/gallery03/d4246741_original.jpg" | relative_url }}',
    alt: 'Schlafzimmer - Betten',
    caption: 'Schlafzimmer'
  },
  {
    src: '{{ "/assets/images/gallery03/ae30c472_original.jpg" | relative_url }}',
    alt: 'Schlafzimmer - Aussicht',
    caption: 'Schlafzimmer'
  },
  {
    src: '{{ "/assets/images/gallery03/d8d222f3_original.jpg" | relative_url }}',
    alt: 'Badezimmer',
    caption: 'Badezimmer'
  },
  {
    src: '{{ "/assets/images/gallery03/f6e67298_original.jpg" | relative_url }}',
    alt: 'Badezimmer - Dusche',
    caption: 'Badezimmer'
  }
];

let heroCurrentIndex = 0;

function updateHeroGallery() {
  const img = document.getElementById('hero-gallery-image');
  const counter = document.getElementById('hero-gallery-counter');

  if (img && counter) {
    img.src = heroImages[heroCurrentIndex].src;
    img.alt = heroImages[heroCurrentIndex].alt;
    counter.textContent = `${heroCurrentIndex + 1} / ${heroImages.length}`;
  }
}

function changeHeroImage(direction) {
  heroCurrentIndex += direction;
  if (heroCurrentIndex < 0) heroCurrentIndex = heroImages.length - 1;
  if (heroCurrentIndex >= heroImages.length) heroCurrentIndex = 0;
  updateHeroGallery();
}

// Update hero lightbox image and caption
function updateHeroLightbox() {
  const lightboxImage = document.getElementById('hero-lightbox-image');
  const lightboxCaption = document.getElementById('hero-lightbox-caption');

  if (lightboxImage && lightboxCaption) {
    lightboxImage.src = heroImages[heroCurrentIndex].src;
    lightboxImage.alt = heroImages[heroCurrentIndex].alt;
    lightboxCaption.textContent = heroImages[heroCurrentIndex].caption;
  }
}

// Navigate hero lightbox
function navigateHeroLightbox(direction) {
  changeHeroImage(direction);
  updateHeroLightbox();
}

// Close hero lightbox
function closeHeroLightbox(event) {
  const lightbox = document.getElementById('hero-lightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

// Create hero lightbox dynamically and append to body
document.addEventListener('DOMContentLoaded', function() {
  // Create lightbox element structure
  const lightbox = document.createElement('div');
  lightbox.id = 'hero-lightbox';
  lightbox.className = 'hero-lightbox';

  const closeButton = document.createElement('button');
  closeButton.className = 'hero-lightbox-close';
  closeButton.innerHTML = '✕';
  closeButton.onclick = closeHeroLightbox;

  const prevButton = document.createElement('button');
  prevButton.className = 'hero-lightbox-nav prev';
  prevButton.innerHTML = '‹';
  prevButton.onclick = function(e) {
    e.stopPropagation();
    navigateHeroLightbox(-1);
  };

  const nextButton = document.createElement('button');
  nextButton.className = 'hero-lightbox-nav next';
  nextButton.innerHTML = '›';
  nextButton.onclick = function(e) {
    e.stopPropagation();
    navigateHeroLightbox(1);
  };

  const lightboxContent = document.createElement('div');
  lightboxContent.className = 'hero-lightbox-content';

  const lightboxImage = document.createElement('img');
  lightboxImage.id = 'hero-lightbox-image';
  lightboxImage.src = '';
  lightboxImage.alt = '';

  const lightboxCaption = document.createElement('div');
  lightboxCaption.id = 'hero-lightbox-caption';
  lightboxCaption.className = 'hero-lightbox-caption';
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
      closeHeroLightbox(e);
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
      navigateHeroLightbox(1); // Swipe left
    }
    if (lightboxTouchEndX > lightboxTouchStartX + 50) {
      navigateHeroLightbox(-1); // Swipe right
    }
  }, { passive: true });

  // Click on main image to open lightbox
  const galleryImage = document.getElementById('hero-gallery-image');
  if (galleryImage) {
    galleryImage.addEventListener('click', function(e) {
      e.preventDefault();

      updateHeroLightbox();
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }
});

// Keyboard navigation for hero gallery
document.addEventListener('keydown', function(e) {
  const lightbox = document.getElementById('hero-lightbox');

  if (lightbox && lightbox.classList.contains('active')) {
    // Lightbox is open - navigate in lightbox
    if (e.key === 'ArrowLeft') {
      navigateHeroLightbox(-1);
    } else if (e.key === 'ArrowRight') {
      navigateHeroLightbox(1);
    } else if (e.key === 'Escape') {
      closeHeroLightbox({ target: lightbox });
    }
  }
});

// Touch swipe support for hero gallery
let heroTouchStartX = 0;
let heroTouchEndX = 0;

document.addEventListener('DOMContentLoaded', function() {
  const galleryImage = document.getElementById('hero-gallery-image');

  if (galleryImage) {
    galleryImage.addEventListener('touchstart', function(e) {
      heroTouchStartX = e.changedTouches[0].screenX;
    });

    galleryImage.addEventListener('touchend', function(e) {
      heroTouchEndX = e.changedTouches[0].screenX;
      handleHeroSwipe();
    });
  }
});

function handleHeroSwipe() {
  if (heroTouchEndX < heroTouchStartX - 50) {
    changeHeroImage(1); // Swipe left
  }
  if (heroTouchEndX > heroTouchStartX + 50) {
    changeHeroImage(-1); // Swipe right
  }
}
</script>

## Wohnung 15 Premium in Czarna Góra

Willkommen in der Wohnung Bormio 15, dem perfekten Ort für einen Urlaub im Herzen von Czarna Góra. Unsere komfortable Wohnung ist ein ausgezeichneter Ausgangspunkt für Skibegeisterte, Bergwanderer und Radfahrer.

## Warum die Wohnung Bormio 15 wählen?

### Außergewöhnliche Lage
- Nur **150 Meter vom Skilift** entfernt
- Direkter Zugang zu Skipisten und Bergwanderwegen
- Saubere Bergluft und hervorragende Schneebedingungen

### Komfort und Bequemlichkeit
- Geräumige **40 m²** Wohnung im ersten Stock
- Voll ausgestattete Küche
- Kostenloses WLAN bis 40 Mbps - ideal für Fernarbeiter
- Balkon mit Bergblick
- Aufzug im Gebäude

### Verfügbare Infrastruktur
- Restaurant und Lebensmittelgeschäft innerhalb von 100 Metern
- Schwimmbad und Sauna in der Nähe
- Kostenloser Parkplatz

### Saubere Luft
Czarna Góra ist ein Gebiet mit außergewöhnlich sauberer Luft. Die PM2.5- und PM10-Werte liegen deutlich unter den Gesundheitsstandards.

## Ganzjährige Aktivitäten

### Winter
- Skifahren und Snowboarden
- Schneeschuhwandern
- Entspannung in der Sauna nach einem Tag auf der Piste

### Sommer
- Bergwanderwege
- Radtouren
- Spaziergänge in der Umgebung

### Workation
Unsere Wohnung ist ein ausgezeichneter Ort für die Fernarbeit:
- Stabiles WLAN
- Ruhige Lage
- Zwei Kaffeemaschinen (Filterkaffee und Nespresso)
- Terrasse mit der Möglichkeit, im Freien zu arbeiten

---

## Buchen Sie noch heute!

[Online buchen](https://www.sunandsnow.pl/apartament-panorama-aparthotelpanoramaczarnagoraresortsunsnow-15premiumbudynekbocznybormio-7620)

---

### Oder kontaktieren Sie uns direkt

**Telefon:** +48 22 450 26 26
**E-Mail:** rezerwacja@sunandsnow.pl
