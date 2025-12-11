---
layout: page
title: Contact
permalink: /en/contact/
lang: en
slug: contact
---

## Contact and Booking

All bookings are made through **Sunandsnow.pl**

## Reservations Department

### Phone
**+48 22 450 26 26**

Phone contact hours:
- Monday - Friday: 8:00 AM - 8:00 PM
- Saturday - Sunday: 10:00 AM - 4:00 PM

### Email
**rezerwacja@sunandsnow.pl**

### Apartment Address
**Apartment Bormio 15**
Na Skarpie 10/15
57-512 Biała Woda
Poland

**GPS:** 50.2613466, 16.8115155

## Check Availability and Book

<form id="booking-form" class="booking-form">
  <div class="form-row">
    <div class="form-group">
      <label for="start-date">Check-in date * <small>(dd/mm/yyyy)</small></label>
      <input type="date" id="start-date" name="start-date" required title="Select check-in date">
    </div>

    <div class="form-group">
      <label for="end-date">Check-out date * <small>(dd/mm/yyyy)</small></label>
      <input type="date" id="end-date" name="end-date" required title="Select check-out date">
    </div>
  </div>

  <div class="form-group">
    <label for="adults">Number of adults *</label>
    <input type="number" id="adults" name="adults" min="1" max="4" value="2" required title="Enter number of adults (1-4)">
  </div>

  <div class="form-group">
    <label for="kids-count">Number of children (0-17 years)</label>
    <input type="number" id="kids-count" name="kids-count" min="0" max="3" value="0" title="Enter number of children (0-3)">
  </div>

  <div id="kids-ages-container" style="display: none;">
    <label>Children's ages:</label>
    <div id="kids-ages"></div>
  </div>

  <button type="submit" class="btn-primary">Check Availability and Prices</button>
  <p class="form-note">You will be redirected to the Sunandsnow.pl booking system</p>
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
          <label for="kid-age-${i}">Child ${i + 1} age *</label>
          <input type="number" id="kid-age-${i}" name="kid-age-${i}" min="0" max="17" required title="Enter child's age (0-17 years)">
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
      alert('Please select check-in and check-out dates.');
      return;
    }

    if (new Date(endDate) <= new Date(startDate)) {
      alert('Check-out date must be after check-in date.');
      return;
    }

    // Build the people string: adults-numKids-age1,position1,age2,position2,...
    let peopleString = `${adults}-${numKids}`;

    if (numKids > 0) {
      const ages = [];
      for (let i = 0; i < numKids; i++) {
        const ageInput = document.getElementById(`kid-age-${i}`);
        if (!ageInput || !ageInput.value) {
          alert(`Please enter the age of child ${i + 1}.`);
          return;
        }
        const age = parseInt(ageInput.value);
        // Add age and position (position is i+1)
        ages.push(`${age},${i + 1}`);
      }
      peopleString += '-' + ages.join(',');
    }

    // Build the final URL
    const baseUrl = 'https://www.sunandsnow.pl/en/search/apartment/7620/803';
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
        page: 'contact_en',
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

### Or Contact Us Directly

### Step 1: Contact Us
Call or write, providing:
- Preferred stay dates
- Number of people
- Any additional questions or requests

### Step 2: Availability Confirmation
We'll check the apartment's availability for the chosen dates and send you:
- Availability confirmation
- Pricing details
- Reservation terms

### Step 3: Reservation Confirmation
After accepting the terms:
- Down payment transfer (if required)
- You'll receive booking confirmation
- Detailed arrival and check-in instructions

### Step 4: Your Stay
- Check-in from 4:00 PM
- Check-out until 11:00 AM
- On arrival day, you'll receive keys and all necessary information

## Contact Form

Send us a message to **rezerwacja@sunandsnow.pl** with the following information:
- First and last name
- Contact phone
- Email
- Arrival date
- Departure date
- Number of people
- Additional information/questions

## Location

### Directions Map

**GPS Address:**
Na Skarpie 10/15, 57-512 Biała Woda
GPS: 50.2613466, 16.8115155

[Open in Google Maps](https://maps.app.goo.gl/HMwJWPDvitMMTkCE8)

### Directions by Car

**From Wrocław (130 km, approx. 2h):**
1. National road DK8 towards Kłodzko
2. Then through Lądek-Zdrój
3. Continue to Stronie Śląskie
4. From Stronie Śląskie to Czarna Góra (approx. 8 km)

**From Warsaw (450 km, approx. 5h):**
1. A4 highway towards Wrocław
2. Exit onto DK8 towards Kłodzko
3. Continue as from Wrocław

**From Krakow (320 km, approx. 4h):**
1. Through Częstochowa to Wrocław
2. Then DK8 towards Kłodzko
3. Continue as from Wrocław

**Free parking** available at the building!

### Public Transport

**Train + bus:**
1. Train to Kłodzko
2. Bus from Kłodzko to Stronie Śląskie
3. Local transfer or taxi to Czarna Góra (8 km)

**Direct bus:**
- From Wrocław to Stronie Śląskie
- Then local transfer

**Transfer from station/airport:**
We can help arrange transfer - ask when booking!

## Check-in/Check-out Times

### Check-in
**From 4:00 PM**

If you're planning an earlier arrival, contact us - we'll try to enable early check-in (subject to availability).

### Check-out
**Until 11:00 AM**

If you wish a later check-out, please contact us - we'll try to fulfill your request (subject to availability).

## Special Offers

Ask about special offers for:
- **Weekly stays** - attractive prices for longer bookings
- **Off-season** - promotions during lower occupancy periods
- **Groups** - possibility of renting multiple apartments

## FAQ - Frequently Asked Questions

Looking for answers to specific questions? Check our [FAQ page](/en/faq/).

## Privacy Policy

Your personal data is processed in accordance with GDPR solely for booking purposes and is not shared with third parties.

---
