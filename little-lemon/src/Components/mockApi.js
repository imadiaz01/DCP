// Mock data for available booking times
const availabilityData = {
  availableTimes: [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '2:00 PM',
    '3:00 PM',
  ],
  availableDates: [
    '2023-09-10',
    '2023-09-11',
    '2023-09-12',
  ],
};

// Mock function to fetch available times and dates
function fetchAPI() {
  return new Promise((resolve) => {
    // Simulate an API call with a delay
    setTimeout(() => {
      resolve(availabilityData);
    }, 1000); // Simulated 1-second delay
  });
}

export { fetchAPI };
