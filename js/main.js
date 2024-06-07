import { cargarProductos } from "../cargar_productos/cargar_productos.js";
import { cargar_categorias } from "../cargar_categoria/Cargar_categorias.js";
let DOM = document.querySelector("#root");
DOM.innerHTML=`
    <header></header>
    <main class="body">
        <section id="div_product_list"></section>
        <section id="div_summery_description"></section>
    </main>
    <footer></footer>
`

let lista_productos;

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        lista_productos = data;

        // mi programacion
        cargarProductos(lista_productos);
    });

cargar_categorias();