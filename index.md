---
layout: page
title: Główna
permalink: /
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
    <img id="hero-gallery-image" src="{{ '/assets/images/gallery03/7c50bc3a_original.jpg' | relative_url }}" alt="Salon">
    <button class="hero-gallery-nav prev" onclick="changeHeroImage(-1)">‹</button>
    <button class="hero-gallery-nav next" onclick="changeHeroImage(1)">›</button>
  </div>
  <div class="hero-gallery-counter" id="hero-gallery-counter">1 / 9</div>
</div>

<script>
const heroImages = [
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

## Apartament Bormio 15 w Czarnej Górze

Witamy w apartamencie Bormio 15, idealnym miejscu na wypoczynek w sercu Czarnej Góry. Nasz komfortowy apartament to doskonała baza wypadowa dla miłośników narciarstwa, górskich wędrówek i jazdy na rowerze.

## Dlaczego warto wybrać apartament Bormio 15?

### Wyjątkowa lokalizacja
- Zaledwie **150 metrów od wyciągu narciarskiego**
- Bezpośredni dostęp do tras narciarskich i szlaków górskich
- Czysty, górski klimat i wyjątkowe warunki śniegowe

### Komfort i wygoda
- Przestronny apartament **40 m²** na pierwszym piętrze
- W pełni wyposażona kuchnia
- Bezpłatne WiFi do 40 Mbps - idealne dla pracujących zdalnie
- Balkon z widokiem na góry
- Winda w budynku

### Dostępna infrastruktura
- Restauracja i sklep spożywczy w odległości 100 metrów
- Basen i sauna w pobliżu
- Bezpłatny parking

### Czyste powietrze
Czarna Góra to rejon o wyjątkowo czystym powietrzu. Poziomy PM2.5 i PM10 znacznie poniżej norm zdrowotnych.

## Aktywności przez cały rok

### Zima
- Narciarstwo i snowboarding
- Piesze wędrówki w rakietach śnieżnych
- Relaks w saunie po dniu na stoku

### Lato
- Górskie szlaki piesze
- Wycieczki rowerowe
- Spacery po okolicy

### Workation
Nasz apartament to doskonałe miejsce do pracy zdalnej:
- Stabilne WiFi
- Cicha lokalizacja
- Dwa ekspresy do kawy (przelewowy i Nespresso)
- Taras z możliwością pracy na świeżym powietrzu

---

## Zarezerwuj już dziś!

<form id="booking-form" class="booking-form">
  <div class="form-row">
    <div class="form-group">
      <label for="start-date">Data przyjazdu * <small>(dd.mm.rrrr)</small></label>
      <input type="date" id="start-date" name="start-date" required title="Wybierz datę przyjazdu">
    </div>

    <div class="form-group">
      <label for="end-date">Data wyjazdu * <small>(dd.mm.rrrr)</small></label>
      <input type="date" id="end-date" name="end-date" required title="Wybierz datę wyjazdu">
    </div>
  </div>

  <div class="form-group">
    <label for="adults">Liczba dorosłych *</label>
    <input type="number" id="adults" name="adults" min="1" max="4" value="2" required title="Podaj liczbę osób dorosłych (1-4)">
  </div>

  <div class="form-group">
    <label for="kids-count">Liczba dzieci (0-17 lat)</label>
    <input type="number" id="kids-count" name="kids-count" min="0" max="3" value="0" title="Podaj liczbę dzieci (0-3)">
  </div>

  <div id="kids-ages-container" style="display: none;">
    <label>Wiek dzieci:</label>
    <div id="kids-ages"></div>
  </div>

  <button type="submit" class="btn-primary">Sprawdź dostępność i ceny</button>
  <p class="form-note">Zostaniesz przekierowany do systemu rezerwacji Sunandsnow.pl</p>
</form>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('booking-form');
  const kidsCountInput = document.getElementById('kids-count');
  const kidsAgesContainer = document.getElementById('kids-ages-container');
  const kidsAgesDiv = document.getElementById('kids-ages');
  const startDateInput = document.getElementById('start-date');
  const endDateInput = document.getElementById('end-date');

  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0];
  startDateInput.setAttribute('min', today);
  endDateInput.setAttribute('min', today);

  // Update end date minimum when start date changes
  startDateInput.addEventListener('change', function() {
    const startDate = new Date(this.value);
    const nextDay = new Date(startDate);
    nextDay.setDate(startDate.getDate() + 1);
    endDateInput.setAttribute('min', nextDay.toISOString().split('T')[0]);

    // Reset end date if it's before new start date
    if (endDateInput.value && new Date(endDateInput.value) <= startDate) {
      endDateInput.value = '';
    }
  });

  // Show/hide kids age inputs based on number of kids
  kidsCountInput.addEventListener('input', function() {
    const numKids = parseInt(this.value) || 0;

    if (numKids > 0) {
      kidsAgesContainer.style.display = 'block';
      kidsAgesDiv.innerHTML = '';

      for (let i = 0; i < numKids; i++) {
        const ageInput = document.createElement('div');
        ageInput.className = 'kid-age-input';
        ageInput.innerHTML = `
          <label for="kid-age-${i}">Wiek dziecka ${i + 1} *</label>
          <input type="number" id="kid-age-${i}" name="kid-age-${i}" min="0" max="17" required title="Podaj wiek dziecka (0-17 lat)">
        `;
        kidsAgesDiv.appendChild(ageInput);
      }
    } else {
      kidsAgesContainer.style.display = 'none';
      kidsAgesDiv.innerHTML = '';
    }
  });

  // Handle form submission
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const startDate = startDateInput.value;
    const endDate = endDateInput.value;
    const adults = parseInt(document.getElementById('adults').value);
    const numKids = parseInt(kidsCountInput.value) || 0;

    // Validate dates
    if (!startDate || !endDate) {
      alert('Proszę wybrać daty przyjazdu i wyjazdu.');
      return;
    }

    if (new Date(endDate) <= new Date(startDate)) {
      alert('Data wyjazdu musi być późniejsza niż data przyjazdu.');
      return;
    }

    // Build the people string: adults-numKids-age1,position1,age2,position2,...
    let peopleString = `${adults}-${numKids}`;

    if (numKids > 0) {
      const ages = [];
      for (let i = 0; i < numKids; i++) {
        const ageInput = document.getElementById(`kid-age-${i}`);
        if (!ageInput || !ageInput.value) {
          alert(`Proszę podać wiek dziecka ${i + 1}.`);
          return;
        }
        const age = parseInt(ageInput.value);
        // Add age and position (position is i+1)
        ages.push(`${age},${i + 1}`);
      }
      peopleString += '-' + ages.join(',');
    }

    // Build the final URL
    const baseUrl = 'https://www.sunandsnow.pl/search/apartment/7620/803';
    const finalUrl = `${baseUrl}/${startDate}/${endDate}/${peopleString}?`;

    // Track booking form submission with PostHog
    const kidsAges = [];
    if (numKids > 0) {
      for (let i = 0; i < numKids; i++) {
        const ageInput = document.getElementById(`kid-age-${i}`);
        if (ageInput && ageInput.value) {
          kidsAges.push(parseInt(ageInput.value));
        }
      }
    }

    if (window.posthog) {
      posthog.capture('booking_form_submitted', {
        page: 'home',
        start_date: startDate,
        end_date: endDate,
        adults: adults,
        kids_count: numKids,
        kids_ages: kidsAges,
        booking_url: finalUrl
      });
    }

    // Redirect to booking system
    window.location.href = finalUrl;
  });
});
</script>

<style>
.booking-form {
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  margin: 2rem 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #333;
}

.form-group label small {
  font-weight: 400;
  font-size: 0.85rem;
  color: #888;
  margin-left: 0.25rem;
}

.form-group input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  box-sizing: border-box;
}

.form-group input:focus {
  outline: none;
  border-color: #0066cc;
  box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
}

#kids-ages-container {
  margin-top: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 4px;
}

#kids-ages-container label {
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
  display: block;
}

.kid-age-input {
  margin-bottom: 0.75rem;
}

.kid-age-input label {
  display: block;
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
  color: #666;
}

.kid-age-input input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.95rem;
  box-sizing: border-box;
}

.btn-primary {
  background: #0066cc;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  transition: background 0.3s ease;
}

.btn-primary:hover {
  background: #0052a3;
}

.btn-primary:active {
  transform: translateY(1px);
}

.form-note {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #666;
  text-align: center;
}

@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
  }

  .booking-form {
    padding: 1.5rem;
  }
}
</style>

---

### Lub skontaktuj się bezpośrednio

Telefon: **+48 22 450 26 26**
Email: **rezerwacja@sunandsnow.pl**
