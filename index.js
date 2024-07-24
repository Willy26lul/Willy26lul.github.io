document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidad del carrito (si es necesario)
    const btnCart = document.querySelector('.container-icon');
    const containerCartProducts = document.querySelector('.container-cart-products');

    if (btnCart && containerCartProducts) {
        btnCart.addEventListener('click', () => {
            containerCartProducts.classList.toggle('hidden-cart');
        });
    }

    // Cargar productos desde localStorage
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const container = document.getElementById('productContainer');

    products.forEach(product => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.innerHTML = `
            <figure>
                <a href="product.html?img=${encodeURIComponent(product.imgSrc)}&title=${encodeURIComponent(product.title)}&description=${encodeURIComponent(product.description)}&download=${encodeURIComponent(product.download)}">
                    <img src="${product.imgSrc}" alt="${product.title}" />
                </a>
            </figure>
            <div class="info-product">
                <h2>${product.title}</h2>
                <p class="description hidden">${product.description}</p>
                <a href="${product.download}" download>
                    <button>Descargar</button>
                </a>
            </div>
        `;

        container.appendChild(itemDiv);
    });
});
