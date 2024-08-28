const accessKey = '8LBtBwv08kT-bo0LofzxkmnPOb4OOKj4Hz-CQe9u6wE'; // Replace with your actual Unsplash API access key

async function fetchImages(searchTerm) {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${accessKey}`);

    if (response.ok) {
        const data = await response.json();
        displayImages(data.results);
    } else {
        console.error('Error fetching images:', response.statusText);
    }
}

function displayImages(images) {
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = ''; // Clear previous images

    images.forEach(image => {
        const imgDiv = document.createElement('div');
        
        // Create image element
        const imgElement = document.createElement('img');
        imgElement.src = image.urls.small;
        imgElement.alt = image.alt_description;
        imgDiv.appendChild(imgElement);
        
        // Create anchor tag with button
        const anchorTag = document.createElement('a');
        anchorTag.href = `second.html?image=${encodeURIComponent(image.urls.small)}`;
        anchorTag.target = '_blank'; // Open in new tab
        
        const button = document.createElement('button');
        button.textContent = 'Add Caption';
        anchorTag.appendChild(button);
        
        imgDiv.appendChild(anchorTag);
        imageContainer.appendChild(imgDiv);
    });
}

function handleSubmit() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const searchTerm = document.getElementById('search-term').value;

    if (name && email && searchTerm) {
        fetchImages(searchTerm);
    } else {
        alert('Please fill in all fields.');
    }
}
