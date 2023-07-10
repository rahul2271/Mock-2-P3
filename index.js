const dataContainer = document.getElementById('data-container');
const skeletonLoader = document.getElementById('skeleton-loader');

// Fetch data from the JSON Placeholder API
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    // Hide the skeleton loader
    skeletonLoader.style.display = 'none';

    // Process and display the data
    data.forEach(post => {
      const postElement = document.createElement('div');
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      `;
      dataContainer.appendChild(postElement);
    });
  })
  .catch(error => {
    // Handle any errors that occur during the fetch
    console.error(error);
  });
