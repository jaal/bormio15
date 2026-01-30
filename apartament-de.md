---
layout: page
title: Apartment
permalink: /de/apartment/
lang: de
slug: apartment
---

# Apartment Bormio 15

## Galerie

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
    <img id="gallery-image" src="{{ '/assets/images/gallery03/7c50bc3a_original.jpg' | relative_url }}" alt="Wohnzimmer">
    <button class="gallery-nav prev" onclick="changeImage(-1)">‹</button>
    <button class="gallery-nav next" onclick="changeImage(1)">›</button>
  </div>
  <div class="gallery-caption" id="gallery-caption">Wohnzimmer</div>
  <div class="gallery-counter" id="gallery-counter">1 / 9</div>
</div>

<script>
const images = [
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

Willkommen im komfortablen **Apartment 15 Premium** im Herzen von Czarna Góra, ideal für Familien und Freundesgruppen, die aktiv Zeit in den Bergen verbringen möchten.

## Apartment-Details

### Größe und Lage
- **Fläche:** 40 m²
- **Etage:** Erdgeschoss
- **Zugang:** Aufzug im Gebäude
- **Lage:** Aparthotel Panorama - Nebengebäude
- **Adresse:** ul. Biała Woda, ul. Na Skarpie 4

### Räume

#### Schlafzimmer
- Zwei komfortable Einzelbetten
- Ein komfortables Doppelbett
- Kleiderschrank
- Ruhiger Innenraum für erholsamen Schlaf

#### Wohnzimmer
- 2-Personen-Schlafsofa (zusätzlicher Schlafplatz)
- TV
- Balkon/Terrasse mit Gartenmöbeln
- Esstisch

#### Küche
Die voll ausgestattete Küche umfasst:
- Kühlschrank mit Gefrierfach
- Elektroherd mit Backofen
- Geschirrspüler
- Mikrowelle
- Wasserkocher
- Filterkaffeemaschine
- Nespresso-Maschine
- Toaster
- Komplettes Geschirr- und Besteckset
- Grundausstattung an Küchenutensilien
- Esstisch

#### Badezimmer
- Dusche
- WC
- Waschbecken
- Handtücher
- Haartrockner

## Ausstattung und Annehmlichkeiten

### Technologie
- **WLAN:** Kostenloses Internet bis zu 40 Mbps
- **TV:** Smart TV
- **Safe:** Für Ihre Wertsachen

### Zusätzliche Annehmlichkeiten
- Balkon/Terrasse mit Gartenmöbeln
- Parkplatz auf dem Gelände (nicht garantiert)
- Aufzug im Gebäude
- Bügeleisen und Bügelbrett
- Haartrockner im Badezimmer
- Wäscheständer
- Waschmaschine im Apartment
- Bettwäsche und Handtücher vorhanden
- Self-Check-in möglich

## Aufenthaltsregeln

### Kapazität
- **Maximale Personenanzahl:** 4 Personen
- Bettenkonfiguration: 2 Einzelbetten + 1 Doppelbett + 2-Personen-Schlafsofa

### Richtlinien
- **Nichtraucher** im Apartment
- **Haustiere:** Erlaubt
- **Ruhezeiten:** 22:00 - 07:00 Uhr
- **Check-in:** ab 16:00 Uhr
- **Check-out:** bis 11:00 Uhr
- **Kaution (erstattungsfähig):** 300 PLN
- **Kurtaxe:** 3,20 PLN/Person/Nacht

### Was gibt es in der Nähe?

- **Skilift:** In der Nähe
- **Pizzeria, Café und Lebensmittelgeschäft:** In der Umgebung
- **Pool und Sauna:** In der Nähe
- **Bergrestaurants:** In der Umgebung
- **Parkplatz:** Auf dem Gelände (nicht garantiert)

## Preise und Reservierungen

Um aktuelle Preise zu erfahren und eine Reservierung vorzunehmen, kontaktieren Sie uns bitte:

[Online buchen](https://www.sunandsnow.pl/apartament-panorama-aparthotelpanoramaczarnagoraresortsunsnow-15premiumbudynekbocznybormio-7620)

**Telefon:** +48 22 450 26 26
**E-Mail:** rezerwacja@sunandsnow.pl

---

### Ideal für:
- Familien mit Kindern
- Freundesgruppen (bis zu 4 Personen)
- Paare auf der Suche nach einem ruhigen Rückzugsort
- Remote-Arbeiter (Workation)
- Ski- und Outdoor-Aktivitätsbegeisterte
