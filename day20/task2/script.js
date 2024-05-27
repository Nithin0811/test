
document.addEventListener('DOMContentLoaded', function () {
    // Fetch objects using Promise
    const fetchData = () => {
        return new Promise((resolve, reject) => {
            fetch('https://api.restful-api.dev/objects')
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

    // Display objects
    const displayObjects = (objects) => {
        const objectList = document.getElementById('objectList');
        if (objectList) {
            objects.forEach(object => {
                // const listItem = document.createElement('li');
                // listItem.classList.add('list-group-item');
                // listItem.textContent = object.id;

                // const listName = document.createElement('li');
                // listName.classList.add('list-group-item');
                // listName.textContent = object.name;

                const listData = document.createElement('li');
                listData.classList.add('list-group-item');
                if (object.data) {
                    listData.textContent = `ID: ${object.id}, 
                     Name: ${object.name},
                     Color: ${object.data.color || 'N/A'}, 
                     Capacity: ${object.data.capacity || 'N/A'}, 
                     Generation: ${object.data.generation || 'N/A'}, 
                     Price: ${object.data.price || 'N/A'},
                     Capacity: ${object.data.Capacity || 'N/A'}
                     `;
                  } else {
                    listData.textContent = `ID: ${object.id}, Name: ${object.name}, Data: N/A`;
                  }

                // objectList.appendChild(listItem);
                //objectList.appendChild(listName);
                objectList.appendChild(listData);


            });
        }
    };

    // Fetch data and display objects
    fetchData()
        .then(data => displayObjects(data))
        .catch(error => console.error('Error fetching data:', error));
});
