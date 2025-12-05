---
layout: page
title: Kontakt
permalink: /kontakt/
---

## Kontakt i Rezerwacja

Wszystkie rezerwacje odbywają się za pomocą serwisu **Sunandsnow.pl**

## Dział rezerwacji

### Telefon
**+48 22 450 26 26**

Godziny kontaktu telefonicznego:
- Poniedziałek - Piątek: 8:00 - 20:00
- Sobota - Niedziela: 10:00 - 16:00

### Email
**rezerwacja@sunandsnow.pl**

### Adres apartamentu
**Apartament Bormio 15**
Na Skarpie 10/15
57-512 Biała Woda
Polska

## Sprawdź dostępność i zarezerwuj

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
        page: 'kontakt',
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

### Lub skontaktuj się z nami bezpośrednio

### Krok 1: Skontaktuj się z nami
Zadzwoń lub napisz, podając:
- Preferowane daty pobytu
- Liczbę osób
- Ewentualne dodatkowe pytania lub życzenia

### Krok 2: Potwierdzenie dostępności
Sprawdzimy dostępność apartamentu w wybranym terminie i prześlemy Ci:
- Potwierdzenie dostępności
- Szczegóły cenowe
- Warunki rezerwacji

### Krok 3: Potwierdzenie rezerwacji
Po akceptacji warunków:
- Przelew zadatku (jeśli wymagany)
- Otrzymasz potwierdzenie rezerwacji
- Szczegółowe instrukcje dojazdu i zameldowania

### Krok 4: Twój pobyt
- Zameldowanie od 16:00
- Wymeldowanie do 11:00
- W dniu przyjazdu otrzymasz klucze i wszystkie niezbędne informacje

## Formularz kontaktowy

Wyślij nam wiadomość na adres **rezerwacja@sunandsnow.pl** z następującymi informacjami:
- Imię i nazwisko
- Telefon kontaktowy
- Email
- Data przyjazdu
- Data wyjazdu
- Liczba osób
- Dodatkowe informacje/pytania

## Lokalizacja

### Mapa dojazdu

**Adres GPS:**
Na Skarpie 10/15, 57-512 Biała Woda

[Otwórz w Google Maps](https://goo.gl/maps/) *(link do uzupełnienia)*

### Dojazd samochodem

**Z Wrocławia (130 km, ok. 2h):**
1. Droga krajowa DK8 w kierunku Kłodzka
2. Następnie przez Lądek-Zdrój
3. Dalej do Stronia Śląskiego
4. Z Stronia Śląskiego do Czarnej Góry (ok. 8 km)

**Z Warszawy (450 km, ok. 5h):**
1. Autostrada A4 w kierunku Wrocławia
2. Zjazd na DK8 w kierunku Kłodzka
3. Dalej jak z Wrocławia

**Z Krakowa (320 km, ok. 4h):**
1. Przez Częstochowę do Wrocławia
2. Następnie DK8 w kierunku Kłodzka
3. Dalej jak z Wrocławia

**Bezpłatny parking** dostępny przy budynku!

### Transport publiczny

**Pociąg + autobus:**
1. Pociąg do Kłodzka
2. Autobus z Kłodzka do Stronia Śląskiego
3. Transfer lokalny lub taxi do Czarnej Góry (8 km)

**Autobus bezpośredni:**
- Z Wrocławia do Stronia Śląskiego
- Następnie transfer lokalny

**Transfer z dworca/lotniska:**
Możemy pomóc w organizacji transferu - zapytaj podczas rezerwacji!

## Godziny zameldowania/wymeldowania

### Zameldowanie (Check-in)
**Od godziny 16:00**

Jeśli planujesz wcześniejszy przyjazd, skontaktuj się z nami - postaramy się umożliwić wcześniejsze zameldowanie (w miarę dostępności).

### Wymeldowanie (Check-out)
**Do godziny 11:00**

W przypadku chęci późniejszego wymeldowania, prosimy o kontakt - postaramy się spełnić Twoją prośbę (w miarę możliwości).

## Specjalne oferty

Zapytaj o specjalne oferty dla:
- **Pobyty tygodniowe** - atrakcyjne ceny dla dłuższych rezerwacji
- **Poza sezonem** - promocje w okresach niższego obłożenia
- **Grupy** - możliwość wynajęcia kilku apartamentów

## FAQ - Najczęstsze pytania

Szukasz odpowiedzi na konkretne pytanie? Sprawdź naszą [stronę FAQ](faq.md).

## Polityka prywatności

Twoje dane osobowe są przetwarzane zgodnie z RODO wyłącznie w celu obsługi rezerwacji i nie są przekazywane osobom trzecim.

## Śledź nas w social media

*[Tutaj można dodać linki do mediów społecznościowych, jeśli są dostępne]*

- Facebook: [Link]
- Instagram: [Link]

## Opinie gości

Przeczytaj, co mówią nasi goście:
- [Booking.com - Link]
- [Airbnb - Link]
- [Google Reviews - Link]

---

## Zarezerwuj już dziś!

### Telefon
**+48 22 450 26 26**

Godziny kontaktu telefonicznego:
- Poniedziałek - Piątek: 8:00 - 20:00
- Sobota - Niedziela: 10:00 - 16:00

### Email
**rezerwacja@sunandsnow.pl**

---
