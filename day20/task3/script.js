document.addEventListener("DOMContentLoaded", function() {
    // Fetch crime data from the API
    fetchCrimeData()
      .then(displayCrimeData)
      .catch(handleError);
  });
  
  // Function to fetch crime data using Promise
  function fetchCrimeData() {
    const url = 'https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2023-01';
    
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }
  
  // Function to display crime data on the webpage
  function displayCrimeData(data) {
    const crimeDataDiv = document.getElementById('crimeData');
    if (!data || data.length === 0) {
      crimeDataDiv.innerHTML = '<p>No crime data available</p>';
      return;
    }
    
    const crimes = data.slice(0, 50); // Displaying only first 10 crimes
    
    const crimeList = document.createElement('ul');
    crimeList.classList.add('list-group');
    
    crimes.forEach(crime => {
      const crimeItem = document.createElement('li');
      crimeItem.classList.add('list-group-item');
      crimeItem.textContent = `${crime.category}:
      Street ID: ${crime.location.street.id} 
      Street Area: ${crime.location.street.name}, 
      location Type: ${crime.location_type}, 
      Latitude: ${crime.location.latitude},
      Longitude: ${crime.location.longitude},
      Month of Crime: ${crime.month} 
      `;
      crimeList.appendChild(crimeItem);
    });
    
    crimeDataDiv.appendChild(crimeList);
  }
  
  // Function to handle errors
  function handleError(error) {
    console.error('Error fetching data:', error);
    const crimeDataDiv = document.getElementById('crimeData');
    crimeDataDiv.innerHTML = '<p>Error fetching data. Please try again later.</p>';
  }
  