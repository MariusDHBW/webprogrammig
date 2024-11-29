/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("navMobile").style.width = "250px";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("navMobile").style.width = "0";
  }

  



function openLoginModal() {
    document.getElementById('loginModal').classList.add('show');
}

function closeLoginModal() {
    const loginModal = document.getElementById('loginModal');
    loginModal.classList.add('hide');
    setTimeout(() => {
        loginModal.classList.remove('show');
        loginModal.classList.remove('hide');
    }, 300);
}

function openRegisterModal() {
    document.getElementById('registerModal').classList.add('show');
}

function closeRegisterModal() {
    const registerModal = document.getElementById('registerModal');
    registerModal.classList.add('hide');
    setTimeout(() => {
        registerModal.classList.remove('show');
        registerModal.classList.remove('hide');
    }, 300);
}

function openCookiesModal() {
    document.getElementById('cookiesModal').classList.add('show');
}

function closeCookiesModal() {
    const cookiesModal = document.getElementById('cookiesModal');
    cookiesModal.classList.add('hide');
    cookiesModal.classList.remove('show');
    cookiesModal.classList.remove('hide');
}

function openSuccesPopupModal() {
    closeCookiesModal();
    const openSuccesPopupModal = document.getElementById('SuccesPopupModal');
    openSuccesPopupModal.classList.add('show');
    setTimeout(() => {
        closeSuccesPopupModal()
    }, 3000)
}

function closeSuccesPopupModal() {
    const successPopupModal = document.getElementById('SuccesPopupModal');
    successPopupModal.classList.add('hide');
    successPopupModal.classList.remove('show');
    successPopupModal.classList.remove('hide');
}











// Der API Key ist ein free trial der am 12.12.2024 abläuft es sollt aztomatisch zu eine free key werden aber keine ahnung od das auch funktioniert.

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


const apiKeyBilder = '47364965-d9dd8e2ac27bd2c4e738c5883'; // Dein Pixabay API-Schlüssel
const query = 'travel'; // Der Suchbegriff, nach dem du Bilder suchst
const numberOfImages = 20; // Anzahl der Bilder, die du laden möchtest

// Funktion, um die Bilder von Pixabay zu laden
function loadPixabayImages() {
    // URL der Pixabay API mit den Parametern für die Suche
    fetch(`https://pixabay.com/api/?key=${apiKeyBilder}&q=${query}&image_type=photo&per_page=${numberOfImages}&orientation=horizontal`)
        .then(response => response.json())  // JSON-Antwort erhalten
        .then(data => {
            // Durch die empfangenen Bilder iterieren
            const imageContainer = document.getElementById('image-container');
            data.hits.forEach(image => {
                // Erstelle ein neues img-Element für jedes Bild
                const img = document.createElement('img');
                img.src = image.webformatURL; // URL des Bildes in mittlerer Auflösung
                
                // Verwende die Tags als Alt-Text und ersetze Kommas durch Leerzeichen
                img.alt = image.tags.split(',').join(' ');  // Tags als Alt-Text für das Bild

                // Füge das Bild in den Container ein
                imageContainer.appendChild(img);
            });
        })
        .catch(error => {
            console.error('Fehler beim Laden der Bilder von Pixabay:', error);
        });
}

// Bilder laden, wenn die Seite geladen ist
loadPixabayImages();