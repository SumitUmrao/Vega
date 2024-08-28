 // Get the image URL from the query parameter
 const params = new URLSearchParams(window.location.search);
 const imageUrl = params.get('image');
 const imgElement = document.getElementById('selectedImage');
 imgElement.src = imageUrl;

 // Add caption logic
 document.getElementById('addCaptionBtn').addEventListener('click', function() {
     const caption = document.getElementById('caption').value;
     const canvas = document.createElement('canvas');
     const imgWidth = imgElement.naturalWidth;
     const imgHeight = imgElement.naturalHeight;
     
     canvas.width = imgWidth;
     canvas.height = imgHeight;

     const ctx = canvas.getContext('2d');
     
     // Draw the image on the canvas
     ctx.drawImage(imgElement, 0, 0);

     // Set font and text properties
     ctx.font = '20px Arial';
     ctx.fillStyle = 'white';
     ctx.textAlign = 'center';
     ctx.strokeStyle = 'black'; // To add contrast to the text
     ctx.lineWidth = 2;

     // Calculate position for the caption at the bottom of the image
     const xPos = canvas.width / 2;
     const yPos = canvas.height - 20; // 20px from the bottom

     // Draw caption with a black outline for contrast
     ctx.strokeText(caption, xPos, yPos);
     ctx.fillText(caption, xPos, yPos);

     // Update the image source to include the caption
     imgElement.src = canvas.toDataURL();
 });

 // Download functionality
 document.getElementById('downloadBtn').addEventListener('click', function() {
     const link = document.createElement('a');
     link.href = imgElement.src;
     link.download = 'captioned-image.png';
     link.click();
 });
