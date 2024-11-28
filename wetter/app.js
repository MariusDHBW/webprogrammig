const apiKey = "efe5248a8a4e4ab2b16115636242811"; // Ersetze dies mit deinem WeatherAPI API-Schlüssel

async function getWeather() {
    const city = document.getElementById('cityInput').value;
    if (!city) {
        document.getElementById('weatherResult').innerHTML = "Bitte eine Stadt eingeben.";
        return;
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=de`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            document.getElementById('weatherResult').innerHTML = "Stadt nicht gefunden.";
        } else {
            const temperature = data.current.temp_c;
            const description = data.current.condition.text;
            const humidity = data.current.humidity;
            const windSpeed = data.current.wind_kph;

            document.getElementById('weatherResult').innerHTML = `
                <p>Temperatur: ${temperature} °C</p>
                <p>Beschreibung: ${description}</p>
                <p>Luftfeuchtigkeit: ${humidity} %</p>
                <p>Windgeschwindigkeit: ${windSpeed} km/h</p>
            `;
        }
    } catch (error) {
        document.getElementById('weatherResult').innerHTML = "Fehler beim Abrufen der Wetterdaten.";
    }
}
