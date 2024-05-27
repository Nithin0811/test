document.addEventListener('DOMContentLoaded', function () {
    // Fetch universities using Promise
    const fetchData = () => {
        return new Promise((resolve, reject) => {
            fetch('http://universities.hipolabs.com/search?country=United+States')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch data');
                    }
                    return response.json();
                })
                .then(data => resolve(data))
                .catch(error => reject(error));
        });
    };

    // Display universities
    const displayUniversities = (universities) => {
        const universityList = document.getElementById('universityList');
        if (universityList) {
            universities.forEach(university => {
                const listItem = document.createElement('li');
                listItem.classList.add('list-group-item');
                listItem.textContent = `Univeristy Name: ${university.name}, 
                Univeristy Country: ${university.country}, 
                Univeristy Alpha_Two_Code: ${university.alpha_two_code}, 
                Univeristy Domain: ${university.domains}, 
                Univeristy Website: ${university.web_pages}`;
                universityList.appendChild(listItem);
            });
        }
    };

    // Fetch data and display universities
    fetchData()
        .then(data => displayUniversities(data))
        .catch(error => console.error('Error fetching data:', error));
});