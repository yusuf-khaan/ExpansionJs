function fetchWeatherData(city) {
    return new Promise((resolve, reject) => {
        console.log(`Making API call for ${city}...`);

        setTimeout(() => {
            const apiKey = "APi KEY"
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
            
            fetch(apiUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Couldn't fetch weather data");
                    }
                    return response.json();
                })
                .then(data => resolve(data))
                .catch(error => reject(error));
        }, 2000);
    });
}

const city = 'London';
fetchWeatherData(city)
    .then(response => {
        console.log('API call successful:', response);
    })
    .catch(error => {
        console.error('API call failed:', error);
    });
