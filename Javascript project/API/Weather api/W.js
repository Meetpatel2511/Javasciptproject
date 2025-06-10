// API key for OpenWeatherMap
const apiKey = "4d8fb5b93d4af21d66a2948710284366";

// Get DOM elements for the form and input
const searchForm = document.getElementById('searchForm');
const cityInput = document.getElementById('cityInput');

// Listen for form submission
searchForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent page refresh
  const city = cityInput.value.trim(); // Get city name, remove extra spaces
  if (city) getWeather(city); // Fetch weather if city is not empty
});

// Function to fetch and display weather data
function getWeather(city) {
  // Fetch weather data from OpenWeatherMap API
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json()) // Convert response to JSON
    .then(data => {
      // Check if API call was successful
      if (data.cod !== "200") {
        alert("City not found!");
        return;
      }

      // Update main weather display
      const now = new Date();
      document.getElementById('location').textContent = data.city.name; // City name
      document.getElementById('date').textContent = now.toDateString(); // Current date
      document.getElementById('condition').textContent = data.list[0].weather[0].main; // Weather condition
      document.getElementById('temperature').textContent = `${Math.round(data.list[0].main.temp)}°C`; // Current temp
      document.getElementById('high').textContent = `${Math.round(data.list[0].main.temp_max)}°`; // High temp
      document.getElementById('low').textContent = `${Math.round(data.list[0].main.temp_min)}°`; // Low temp

      // Clear previous hourly forecast
      const hourlyContainer = document.getElementById('hourlyForecast');
      hourlyContainer.innerHTML = '';

      // Display next 6 hours of forecast
      for (let i = 0; i < 6; i++) {
        const hourData = data.list[i];
        const hour = new Date(hourData.dt_txt).getHours(); // Get hour from timestamp
        const temp = Math.round(hourData.main.temp); // Round temperature
        const icon = hourData.weather[0].icon; // Weather icon code
        // Format time (e.g., "Now" for first entry, then "1PM", "2PM", etc.)
        const timeLabel = i === 0 ? 'Now' : `${hour % 12 || 12}${hour >= 12 ? 'PM' : 'AM'}`;

        // Add hourly forecast to the container
        hourlyContainer.innerHTML += `
          <div class="hour">
            <p>${timeLabel}</p>
            <img src="https://openweathermap.org/img/wn/${icon}.png" alt="Weather icon">
            <p>${temp}°C</p>
          </div>`;
      }
    })
    .catch(error => {
      // Handle fetch errors (e.g., network issues)
      console.error("Error fetching weather:", error);
      alert("Failed to get weather data. Check your connection or try again.");
    });
}

// Fetch weather for Switzerland on page load
getWeather('Switzerland');