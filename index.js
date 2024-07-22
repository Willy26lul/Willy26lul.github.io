document.addEventListener('DOMContentLoaded', function() {
    const btnCart = document.querySelector('.container-icon');
    const containerCartProducts = document.querySelector('.container-cart-products');
    const navMenu = document.querySelector('nav');

    btnCart.addEventListener('click', () => {
        containerCartProducts.classList.toggle('hidden-cart');
    });

    // Opcional: Añadir funcionalidad para el menú en dispositivos móviles
    const menuToggle = document.createElement('button');
    menuToggle.textContent = '☰';
    menuToggle.classList.add('menu-toggle');
    navMenu.insertAdjacentElement('beforebegin', menuToggle);

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});
