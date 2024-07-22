// Manejo del carrito
document.addEventListener('DOMContentLoaded', function() {
    const btnCart = document.querySelector('.container-icon');
    const containerCartProducts = document.querySelector('.container-cart-products');

    btnCart.addEventListener('click', () => {
        containerCartProducts.classList.toggle('hidden-cart');
    });
});

// Carga dinámica de contenido en la página de producto
document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const img = params.get('img');
    const title = params.get('title');
    const download = params.get('download');
    
    // Verifica si los parámetros existen y si los elementos están en el DOM
    if (img && title && download) {
        const imgElement = document.querySelector('.product-detail img');
        const titleElement = document.querySelector('.product-detail h2');
        const downloadLink = document.querySelector('.product-detail a');

        if (imgElement) imgElement.src = img;
        if (titleElement) titleElement.textContent = title;
        if (downloadLink) downloadLink.href = download;
    }
});
