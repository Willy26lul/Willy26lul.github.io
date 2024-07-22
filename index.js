document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidad del carrito
    const btnCart = document.querySelector('.container-icon');
    const containerCartProducts = document.querySelector('.container-cart-products');

    if (btnCart && containerCartProducts) {
        btnCart.addEventListener('click', () => {
            containerCartProducts.classList.toggle('hidden-cart');
        });
    }

    // Opcional: Añadir funcionalidad para el menú en dispositivos móviles
    const navMenu = document.querySelector('nav');
    if (navMenu) {
        const menuToggle = document.createElement('button');
        menuToggle.textContent = '☰';
        menuToggle.classList.add('menu-toggle');
        navMenu.insertAdjacentElement('beforebegin', menuToggle);

        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Carga de productos desde el CSV
    Papa.parse('products.csv', {
        download: true,
        header: true,
        complete: function(results) {
            console.log('CSV data loaded:', results.data); // Verificar si los datos se cargan correctamente
            const container = document.getElementById('product-container');

            results.data.forEach(product => {
                // Crear y agregar los elementos de producto
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('item');
                itemDiv.innerHTML = `
                    <figure>
                        <a href="product.html?img=${encodeURIComponent(product['Ruta Image Reference'])}&title=${encodeURIComponent(product.Title)}&description=${encodeURIComponent(product.Description)}&download=${encodeURIComponent(product.RutaDescarga)}" data-description="${product.Description}">
                            <img src="${product['Ruta Image Reference']}" alt="${product.Title}" />
                        </a>
                    </figure>
                    <div class="info-product">
                        <h2>${product.Title}</h2>
                        <p class="description hidden">${product.Description}</p>
                        <a href="${product.RutaDescarga}" download="${product.RutaDescarga}">
                            <button>Descargar</button>
                        </a>
                    </div>
                `;

                container.appendChild(itemDiv);
            });
        },
        error: function(error) {
            console.error('Error loading CSV:', error); // Mostrar errores en la carga del CSV
        }
    });
});
