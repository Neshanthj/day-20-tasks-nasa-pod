// Asynchronous function to fetch and display NASA Astronomy Picture of the Day (APOD) data
async function nasaData() {
    try {
        // Fetch APOD data (20 images) from NASA API using the provided URL and API key
        let data = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=20");

        // Convert the fetched data to JSON format
        let res = await data.json();

        // Loop through each item in the fetched data
        for (let i = 0; i < res.length; i++) {
            console.log(res[i]); // Log each item to the console for reference

            // Get the DOM element where NASA APOD data will be displayed
            var nasaApod = document.getElementById('nasaApod');

            // Create a new div element to hold APOD data
            let nasaData = document.createElement('div');
            nasaData.setAttribute('class', 'col'); // Set class attribute for styling

            // Populate the created div with HTML content containing APOD details
            nasaData.innerHTML = `
                <div class="card m-3 exp">
                    <img src="${res[i].url}" class="card-img-top image" alt="...">
                    <div class="card-body text-center text">
                        <h5 class="card-title">${res[i].title}</h5>
                        <p class="card-text">Copyright: ${res[i].copyright}</p>
                        <p class="card-text">Date: ${res[i].date}</p>
                        <p class="card-text">Media: ${res[i].media_type}</p>
                    </div>
                    <div class="card card-header explanation">
                        <p>Explanation</p>
                        <p>${res[i].explanation}</p>
                    </div>
                </div>
            `;

            // Append the div containing APOD data to the 'nasaApod' element in the DOM
            nasaApod.appendChild(nasaData);
        }
    } catch (err) {
        // If an error occurs during fetching or processing, log the error to the console
        console.log(`Error found: ${err}`);
    }
}

// Trigger the fetching and display of NASA APOD data when the script runs
nasaData();
