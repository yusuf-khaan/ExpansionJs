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
        console.log("API call successful:", response);
    })
    .catch(error => {
        console.error("API call failed:", error);
    });



//using jsonplaceholder for title and 

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log("Posted data titles:", data.title, "Posted data userID ", data.userId));
  .catch((error) => console.error('Error making the POST request:', error));
