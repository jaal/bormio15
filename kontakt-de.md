---
layout: page
title: Kontakt
permalink: /de/contact/
lang: de
slug: contact
---

## Kontakt und Buchung

Alle Buchungen werden über **Sunandsnow.pl** vorgenommen

## Reservierungsabteilung

### Telefon
**+48 22 450 26 26**

Telefonische Kontaktzeiten:
- Montag - Freitag: 8:00 - 20:00 Uhr
- Samstag - Sonntag: 10:00 - 16:00 Uhr

### E-Mail
**rezerwacja@sunandsnow.pl**

### Apartment-Adresse
**Apartment Bormio 15**
Na Skarpie 10/15
57-512 Biała Woda
Polen

**GPS:** 50.2613466, 16.8115155

## Verfügbarkeit prüfen und buchen

<form id="booking-form" class="booking-form">
  <div class="form-row">
    <div class="form-group">
      <label for="start-date">Check-in-Datum * <small>(TT/MM/JJJJ)</small></label>
      <input type="date" id="start-date" name="start-date" required title="Wählen Sie das Check-in-Datum">
    </div>

    <div class="form-group">
      <label for="end-date">Check-out-Datum * <small>(TT/MM/JJJJ)</small></label>
      <input type="date" id="end-date" name="end-date" required title="Wählen Sie das Check-out-Datum">
    </div>
  </div>

  <div class="form-group">
    <label for="adults">Anzahl der Erwachsenen *</label>
    <input type="number" id="adults" name="adults" min="1" max="4" value="2" required title="Geben Sie die Anzahl der Erwachsenen ein (1-4)">
  </div>

  <div class="form-group">
    <label for="kids-count">Anzahl der Kinder (0-17 Jahre)</label>
    <input type="number" id="kids-count" name="kids-count" min="0" max="3" value="0" title="Geben Sie die Anzahl der Kinder ein (0-3)">
  </div>

  <div id="kids-ages-container" style="display: none;">
    <label>Alter der Kinder:</label>
    <div id="kids-ages"></div>
  </div>

  <button type="submit" class="btn-primary">Verfügbarkeit und Preise prüfen</button>
  <p class="form-note">Sie werden zum Buchungssystem von Sunandsnow.pl weitergeleitet</p>
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
          <label for="kid-age-${i}">Alter Kind ${i + 1} *</label>
          <input type="number" id="kid-age-${i}" name="kid-age-${i}" min="0" max="17" required title="Geben Sie das Alter des Kindes ein (0-17 Jahre)">
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
      alert('Bitte wählen Sie Check-in- und Check-out-Daten aus.');
      return;
    }

    if (new Date(endDate) <= new Date(startDate)) {
      alert('Das Check-out-Datum muss nach dem Check-in-Datum liegen.');
      return;
    }

    // Build the people string: adults-numKids-age1,position1,age2,position2,...
    let peopleString = `${adults}-${numKids}`;

    if (numKids > 0) {
      const ages = [];
      for (let i = 0; i < numKids; i++) {
        const ageInput = document.getElementById(`kid-age-${i}`);
        if (!ageInput || !ageInput.value) {
          alert(`Bitte geben Sie das Alter von Kind ${i + 1} ein.`);
          return;
        }
        const age = parseInt(ageInput.value);
        // Add age and position (position is i+1)
        ages.push(`${age},${i + 1}`);
      }
      peopleString += '-' + ages.join(',');
    }

    // Build the final URL
    const baseUrl = 'https://www.sunandsnow.pl/de/search/apartment/7620/803';
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
        page: 'contact_de',
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

### Oder kontaktieren Sie uns direkt

### Schritt 1: Kontaktieren Sie uns
Rufen Sie an oder schreiben Sie, und geben Sie an:
- Gewünschte Aufenthaltsdaten
- Anzahl der Personen
- Zusätzliche Fragen oder Wünsche

### Schritt 2: Verfügbarkeitsbestätigung
Wir überprüfen die Verfügbarkeit des Apartments für die gewählten Daten und senden Ihnen:
- Verfügbarkeitsbestätigung
- Preisdetails
- Reservierungsbedingungen

### Schritt 3: Reservierungsbestätigung
Nach Annahme der Bedingungen:
- Anzahlung per Überweisung (falls erforderlich)
- Sie erhalten eine Buchungsbestätigung
- Detaillierte Ankunfts- und Check-in-Anweisungen

### Schritt 4: Ihr Aufenthalt
- Check-in ab 16:00 Uhr
- Check-out bis 11:00 Uhr
- Am Anreisetag erhalten Sie die Schlüssel und alle notwendigen Informationen

## Kontaktformular

Senden Sie uns eine Nachricht an **rezerwacja@sunandsnow.pl** mit folgenden Informationen:
- Vor- und Nachname
- Kontakttelefon
- E-Mail
- Anreisedatum
- Abreisedatum
- Anzahl der Personen
- Zusätzliche Informationen/Fragen

## Lage

### Anfahrtskarte

**GPS-Adresse:**
Na Skarpie 10/15, 57-512 Biała Woda
GPS: 50.2613466, 16.8115155

[In Google Maps öffnen](https://maps.app.goo.gl/HMwJWPDvitMMTkCE8)

### Anfahrt mit dem Auto

**Von Wrocław (130 km, ca. 2 Std.):**
1. Nationalstraße DK8 Richtung Kłodzko
2. Dann über Lądek-Zdrój
3. Weiter nach Stronie Śląskie
4. Von Stronie Śląskie nach Czarna Góra (ca. 8 km)

**Von Warschau (450 km, ca. 5 Std.):**
1. Autobahn A4 Richtung Wrocław
2. Ausfahrt auf DK8 Richtung Kłodzko
3. Weiter wie von Wrocław

**Von Krakau (320 km, ca. 4 Std.):**
1. Über Częstochowa nach Wrocław
2. Dann DK8 Richtung Kłodzko
3. Weiter wie von Wrocław

**Kostenloser Parkplatz** am Gebäude verfügbar!

### Öffentliche Verkehrsmittel

**Zug + Bus:**
1. Zug nach Kłodzko
2. Bus von Kłodzko nach Stronie Śląskie
3. Lokaler Transfer oder Taxi nach Czarna Góra (8 km)

**Direktbus:**
- Von Wrocław nach Stronie Śląskie
- Dann lokaler Transfer

**Transfer vom Bahnhof/Flughafen:**
Wir können bei der Organisation eines Transfers helfen - fragen Sie bei der Buchung!

## Check-in-/Check-out-Zeiten

### Check-in
**Ab 16:00 Uhr**

Wenn Sie eine frühere Ankunft planen, kontaktieren Sie uns - wir werden versuchen, einen frühen Check-in zu ermöglichen (vorbehaltlich der Verfügbarkeit).

### Check-out
**Bis 11:00 Uhr**

Wenn Sie einen späteren Check-out wünschen, kontaktieren Sie uns bitte - wir werden versuchen, Ihren Wunsch zu erfüllen (vorbehaltlich der Verfügbarkeit).

## Sonderangebote

Fragen Sie nach Sonderangeboten für:
- **Wochenaufenthalte** - attraktive Preise für längere Buchungen
- **Nebensaison** - Aktionen während niedrigerer Auslastung
- **Gruppen** - Möglichkeit, mehrere Apartments zu mieten

## FAQ - Häufig gestellte Fragen

Suchen Sie nach Antworten auf spezifische Fragen? Besuchen Sie unsere [FAQ-Seite](/de/faq/).

## Datenschutzrichtlinie

Ihre persönlichen Daten werden gemäß DSGVO ausschließlich für Buchungszwecke verarbeitet und nicht an Dritte weitergegeben.

---
