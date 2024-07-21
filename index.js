// index.js

document.addEventListener('DOMContentLoaded', function() {
    console.log('Bienvenido a RevitFamilies!');

    const addProductButton = document.getElementById('add-product-button');

    addProductButton.addEventListener('click', function() {
        const productName = prompt('Introduce el nombre del producto:');
        const productDescription = prompt('Introduce la descripción del producto:');
        const productImage = prompt('Introduce la URL de la imagen del producto:');
        const downloadLink = prompt('Introduce el enlace de descarga del producto:');

        if (productName && productDescription && productImage && downloadLink) {
            const productPage = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>${productName}</title>
                    <link rel="stylesheet" href="index.css">
                </head>
                <body>
                    <main>
                        <h1>${productName}</h1>
                        <img src="${productImage}" alt="${productName}" style="max-width: 100%; height: auto;">
                        <p>${productDescription}</p>
                        <a href="${downloadLink}" download>
                            <button>Descargar</button>
                        </a>
                    </main>
                </body>
                </html>
            `;

            const productBlob = new Blob([productPage], { type: 'text/html' });
            const productUrl = URL.createObjectURL(productBlob);
            const productLink = document.createElement('a');
            productLink.href = productUrl;
            productLink.download = `${productName}.html`;
            document.body.appendChild(productLink);
            productLink.click();
            document.body.removeChild(productLink);
        } else {
            alert('Todos los campos son obligatorios.');
        }
    });
});
