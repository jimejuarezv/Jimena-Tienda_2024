// Function to fetch and load products
async function fetchProducts() {
    try {
        let response = await fetch('https://fakestoreapi.com/products');
        let products = await response.json();
        return products;
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

// Function to filter products by category
function filterProductsByCategory(products, category) {
    return products.filter(product => product.category === category);
}

// Function to search products by title
function searchProducts(products, searchTerm) {
    return products.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()));
}

// Function to load products into the page
function cargarProductos(productosList) {
    let divProductList = document.querySelector("#div_product_list");

    // Clear previous products
    divProductList.innerHTML = '';

    productosList.forEach(product => {
        let div = document.createElement("div");
        div.className = "item_product";

        const shortText = product.title.split(' ').slice(0, 5).join(' ');

        div.innerHTML = `
            <div class="box_img">
                <img src="${product.image}" alt="${shortText}">
            </div>
            <div class="caja_descri">
                <span class="name">${shortText}</span>
                <span class="price">Q${product.price}</span>
                <div class="buy_btn" id="comprar_${product.id}">Comprar</div>
            </div>
        `;

        divProductList.appendChild(div);
    });
}

// Function to initialize the category buttons and search functionality
async function initializeCategoryButtons() {
    let products = await fetchProducts();

    document.querySelectorAll('.category_btn').forEach(button => {
        button.addEventListener('click', () => {
            let category = button.getAttribute('data-category');
            let filteredProducts = filterProductsByCategory(products, category);
            cargarProductos(filteredProducts);
        });
    });

    document.querySelector('#searchInput').addEventListener('input', (event) => {
        let searchTerm = event.target.value;
        let searchedProducts = searchProducts(products, searchTerm);
        cargarProductos(searchedProducts);
    });
}

initializeCategoryButtons();

export { cargarProductos };
