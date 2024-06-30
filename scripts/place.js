// Function to calculate the wind chill temperature using ºC and km/h
const calculateWindChill = (temperature, windSpeed) => {
    let windChill = "";
    if (temperature <= 10 && windSpeed > 4.8) {
        windChill =
            13.12 +
            0.6215 * temperature -
            11.37 * windSpeed ** 0.16 +
            0.3965 * temperature * windSpeed ** 0.16;
        return windChill.toFixed(2) + " °C";
    } else {
        return "N/A";
    }
};

// Get the temperature and wind speed values
const temperatureElement = document.getElementById("temperature");
const windSpeedElement = document.getElementById("windSpeed");
const windChillElement = document.getElementById("windChillFactor");

// Parse the text content to floating-point numbers, stripping units
const temperature = parseFloat(temperatureElement.textContent);
const windSpeed = parseFloat(windSpeedElement.textContent);

// Calculate the wind chill factor
const windChill = calculateWindChill(temperature, windSpeed);

// Display the wind chill factor
windChillElement.textContent = windChill;

// Update the current year
const currentYear = document.querySelector("#currentYear");
const year = new Date().getFullYear();
currentYear.textContent = year;

// Update the last modified date
const lastModifiedDate = document.querySelector("#lastModified");
lastModifiedDate.textContent = new Date(document.lastModified).toLocaleString();
