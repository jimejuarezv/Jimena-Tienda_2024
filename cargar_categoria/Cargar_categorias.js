function cargar_categorias(){
    fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(categorias => {
                imprimir_categorias(categorias)
            })
}

function imprimir_categorias(lista_categorias){
    let div_info  = document.querySelector("#div_summery_description");
    lista_categorias.forEach(element => {

        let div = document.createElement("div");
        div.innerHTML=`
            <input type="checkbox" id="${element}">
            <label for="${element}">${element}</label>
        `;
        div_info.appendChild(div);

    });
}
export { cargar_categorias }