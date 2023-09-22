import React, { useState, useEffect } from 'react';
import { fetchAPI } from '../mockApi'; // Import the mock API function
import './bookingForm.css'

function BookingForm({ onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Regular Reservation'); // Set a default value
  const [availableTimes, setAvailableTimes] = useState([]);
  const [availableDates, setAvailableDates] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    // When the component mounts, fetch available dates from the mock API
    fetchAPI()
      .then((data) => {
        // Assuming the API returns an object with availableTimes and availableDates
        setAvailableTimes(data.availableTimes);
        setAvailableDates(data.availableDates);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = [];

    if (!name) {
      validationErrors.push('Please enter your name.');
    }
    if (!email) {
      validationErrors.push('Please enter your email.');
    }
    if (!availableDates.includes(bookingDate)) {
      validationErrors.push('Selected booking date is not available.');
    }
    if (!bookingTime) {
      validationErrors.push('Please select a time for your reservation.');
    }

    if (validationErrors.length > 0) {
      // Display all validation errors in a single alert
      alert(validationErrors.join('\n'));
      return;
    }

    // Reset errors if there are no validation errors
    setErrors([]);

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Booking Date:', bookingDate);
    console.log('Booking Time:', bookingTime);
    console.log('Number of Guests:', guests);
    console.log('Occasion:', occasion);

    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          autoComplete="on"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="bookingDate">Booking Date:</label>
        <input
          type="date"
          id="bookingDate"
          name="bookingDate"
          value={bookingDate}
          min={availableDates[0]}
          max={availableDates[availableDates.length - 1]}
          onChange={(e) => setBookingDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="bookingTime">Booking Time:</label>
        <select
          id="bookingTime"
          name="bookingTime"
          value={bookingTime}
          onChange={(e) => setBookingTime(e.target.value)}
        >
          <option value="">Select a time</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="guests">Number of Guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="occasion">Occasion:</label>
        <select
          id="occasion"
          name="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="Regular Reservation">Regular Reservation</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Pick-up">Pick-up</option>
          <option value="VIP">VIP</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default BookingForm;
