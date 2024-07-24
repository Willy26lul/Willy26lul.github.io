document.getElementById('productForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('productTitle').value;
    const description = document.getElementById('productDescription').value;
    const imgFile = document.getElementById('productImg').files[0];
    const downloadFile = document.getElementById('productDownload').files[0];

    if (!title || !description || !imgFile || !downloadFile) {
        alert('Please fill in all fields');
        return;
    }

    // Subir archivos al servidor y obtener URLs
    const formData = new FormData();
    formData.append('imgFile', imgFile);
    formData.append('downloadFile', downloadFile);

    fetch('upload.php', { // Asegúrate de que esta URL sea correcta
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            const imgSrc = data.imgUrl; // La URL del archivo de imagen
            const downloadSrc = data.downloadUrl; // La URL del archivo de descarga

            const newProduct = {
                title,
                description,
                imgSrc,
                download: downloadSrc
            };

            let products = JSON.parse(localStorage.getItem('products')) || [];
            products.push(newProduct);
            localStorage.setItem('products', JSON.stringify(products));
            loadProducts();

            document.getElementById('confirmationMessage').style.display = 'block';
            document.getElementById('addAnotherProduct').style.display = 'inline';
        } else {
            alert('Error uploading files');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error uploading files');
    });
});
