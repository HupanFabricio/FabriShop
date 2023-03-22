const productos = [
    //ABRIGOS
    {
        id: "abrigo-01",
        titulo: "Campera Chelsea",
        img: "../img/Abrigos/Campera Chelsea.png",
        categorias: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 45000
    },
    {
        id: "abrigo-02",
        titulo: "Campera Inflada Niño Niña Corderito Abrigada Kids Invierno",
        img: "../img/Abrigos/Campera Inflada Niño Niña Corderito Abrigada Kids Invierno.png",
        categorias: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 9999
    },
    {
        id: "abrigo-03",
        titulo: "Camperas De Neopren Hombre Liquidación",
        img: "../img/Abrigos/Camperas De Neopren Hombre Liquidación.png",
        categorias: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 12500
    },
    {
        id: "abrigo-04",
        titulo: "Tapado Mujer Capucha Ultra Liviana Importada ...!!!",
        img: "../img/Abrigos/Tapado Mujer Capucha Ultra Liviana Importada ...!!!.png",
        categorias: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 22990
    },
    // CAMISETAS
    {
        id: "camiseta-01",
        titulo: "Camiseta Koi 2022 E-sports.png",
        img: "../img/Camisetas/Camiseta Koi 2022 E-sports.png",
        categorias: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 4550
    },
    {
        id: "camiseta-02",
        titulo: "Camiseta Musculosa Basquet Nba Bulls",
        img: "../img/Camisetas/Camiseta Musculosa Basquet Nba Bulls.png",
        categorias: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 3490
    },
    {
        id: "camiseta-03",
        titulo: "Camisetas G2 2023 E-sports",
        img: "../img/Camisetas/Camisetas G2 2023 E-sports.png",
        categorias: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 4450
    },
    // PANTALONES
    {
        id: "pantalon-01",
        titulo: "Bombacha Campo Pampero",
        img: "../img/Pantalones/Bombacha Campo Pampero.png",
        categorias: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 4450
    },
    {
        id: "pantalon-02",
        titulo: "Bombacha De Campo Pampero Lisa - T38 A T60 - Uso Intensivo",
        img: "../img/Pantalones/Bombacha De Campo Pampero Lisa - T38 A T60 - Uso Intensivo.png",
        categorias: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 7800
    },
    {
        id: "pantalon-03",
        titulo: "Pantalon Cargo Gabardina Pre Lavada For Men Hard Work",
        img: "../img/Pantalones/Pantalon Cargo Gabardina Pre Lavada For Men Hard Work.png",
        categorias: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 7900
    },
    {
        id: "pantalon-04",
        titulo: "Pantalon Cargo Gabardina",
        img: "../img/Pantalones/Pantalon Cargo Gabardina.png",
        categorias: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 7890
    },
    {
        id: "pantalon-05",
        titulo: "Pantalón Cargo",
        img: "../img/Pantalones/Pantalón Cargo.png",
        categorias: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 24000
    }
];

// MODELO
// {
//     id: ,
//     titulo: ,
//     img: ,
//     categorias: {
//         nombre: ,
//         id: 
//     },
//     precio: ,
// },

//Definiciones:
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");

//Funciones:
function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML="";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto")
        div.innerHTML=`
            <img class="producto-imagen" src="${producto.img}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$ ${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}" >Agregar</button>
            </div>
        `

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

//Cuando se carga por primera ves la pagina!
cargarProductos(productos); 

botonesCategorias.forEach(boton => {

    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));

        e.currentTarget.classList.add("active");

        if(e.currentTarget.id === "todos") {

            tituloPrincipal.innerHTML = "Todos los productos";
            cargarProductos(productos);

        } else {
            tituloPrincipal.innerHTML = `${e.currentTarget.id}`;
            const productosBoton = productos.filter(producto => producto.categorias.id === e.currentTarget.id);
            cargarProductos(productosBoton);

        }
    })

})

function actualizarBotonesAgregar() {

    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {

        boton.addEventListener("click", agregarAlCarrito)

    })
}

//Carro vacio por primera ves:
const productosEnCarrito = [];

function agregarAlCarrito (e) {

    const idBoton = e.currentTarget.id;

    const productoAgregado = productos.find(producto => producto.id === idBoton)

    productosEnCarrito.push(productoAgregado)
    console.log(productosEnCarrito)
}