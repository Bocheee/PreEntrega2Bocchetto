
/* BOTON PARA ABRIR EL MENU DEL CARRITO */
document.addEventListener('DOMContentLoaded', function(){
    let btnCarrito = document.getElementById('btn-carrito');
    let btnClosed = document.getElementById('btn-closed');
    let menuToggle = document.getElementById('menu-carrito');
    

    btnCarrito.addEventListener('click', function(){
        menuToggle.classList.toggle('active');
    });

    btnClosed.addEventListener('click', function(){
        menuToggle.classList.toggle('active')
    });
});



const burguers = [
    {
        nombre: "American",
        descripcion: "Medallon 120gr (blend secreto), cheddar x4, bacon ahumado, alioli de berenjena ahumada, pepinillos.",
        precio: "$10900",
        imagen: "IMAGENES/american.png",
    },
    {
        nombre: "Cheese Bacon",
        descripcion: "Medallon 120gr (blend secreto), cheddar x4, bacon ahumado",
        precio: "$10700",
        imagen:"IMAGENES/bacon-chese.jpg",
    },
    {
        nombre: "Candy",
        descripcion: "Medallon 120gr (blend secreto), cheddar x4, bacon ahumado, cebolla caramelizada",
        precio: "$10700",
        imagen:"IMAGENES/candy.png",
    },
    {
        nombre: "Crispy Onion",
        descripcion: "Medallon 120gr (blend secreto), cheddar x4, bacon ahumado, ali oli, mil islas, cebolla crispy, pepinillos (opcional)",
        precio: "$10900",
        imagen:"IMAGENES/crispy.png",
    }

];

const bebidas = [
    {
        nombre: "Coca Cola",
        precio: "$1000",
        imagen:"IMAGENES/cocabotella.jpg",
    },
    {
        nombre: "Agua",
        precio: "$900",
        imagen:"IMAGENES/agua.jpg",
    },
    {
        nombre: "Schweppes pomelo",
        precio: "$1000",
        imagen:"IMAGENES/swet.jpg",
    },
    {
        nombre: "Aquarius Pera",
        precio: "$1000",
        imagen:"IMAGENES/aquarius.webp",
    }
];

const frituras = [
    {
        nombre: "Papas Fritas",
        descripcion: "",
        precio: "$2000",
        imagen:"IMAGENES/papaFritas.webp",
    },
    {
        nombre: "Papas con Cheddar y Bacon",
        descripcion: "",
        precio: "$3500",
        imagen:"IMAGENES/papasFritas.png",
    },
    {
        nombre: "Nuggets",
        descripcion: "",
        precio: "$5000",
        imagen:"IMAGENES/nuggets.jpg",
    },
    {
        nombre: "Tequeños",
        descripcion: "",
        precio: "$5000",
        imagen:"IMAGENES/tequeños.webp",
    }
]

const containerProductos = document.querySelector("#productos"); //ESTE NO LO USO
const carritoVacio = document.querySelector("#carrito-vacio");
const contenedorProductosBurguers = document.querySelector('#contenedor-burguers');
const contenedorProductosBebidas = document.querySelector('#contenedor-bebidas');
const contenedorProductosFrito = document.querySelector('#contenedor-frito');
const carritoTotal = document.querySelector("#carrito-total");

/*
<div class="contenedor-producto">
    <img src="IMAGENES/american.png" alt="">
    <div class="detalles-productos" ">
        <h4 class="nombre-producto"></h4>
        <p class="descripcion-producto"></p>
        <p class="precio-producto"></p>
        <button class="carrito-add"><i class='bx bx-cart-add'></i></button>
    </div>
</div>*/
burguers.forEach((burguer) =>{
    let div = document.createElement("div");
    div.classList.add("burguers");
    div.innerHTML = `
    <div class="contenedor-producto">
        <img src="${burguer.imagen}" alt="">
        <div class="detalles-productos" ">
            <h4 class="nombre-producto">${burguer.nombre}</h4>
            <p class="descripcion-producto">${burguer.descripcion}</p>
            <p class="precio-producto">Simple: ${burguer.precio}</p>
            <button class="carrito-add"><i class='bx bx-cart-add'></i></button>
        </div>
    </div>
    `;

    document.addEventListener('DOMContentLoaded', function(){

        let button = document.getElementById('carrito-add');
        button.addEventListener("click", ()=>{
            console.log("burguer");
        });
    });
    contenedorProductosBurguers.append(div);

})



bebidas.forEach((bebida) =>{
    let div = document.createElement("div");
    div.classList.add("bebidas");
    div.innerHTML = `
    <div class="contenedor-producto">
        <img src="${bebida.imagen}" alt="">
        <div class="detalles-productos" ">
            <h4 class="nombre-producto">${bebida.nombre}</h4>
            <p class="precio-producto">${bebida.precio}</p>
            <button class="carrito-add"><i class='bx bx-cart-add'></i></button>
        </div>
    </div>
    `;
    contenedorProductosBebidas.append(div);
})

frituras.forEach((frito) =>{
    let div = document.createElement("div");
    div.classList.add("frituras");
    div.innerHTML = `
    <div class="contenedor-producto">
        <img src="${frito.imagen}" alt="">
        <div class="detalles-productos" ">
            <h4 class="nombre-producto">${frito.nombre}</h4>
            <p class="precio-producto">${frito.precio}</p>
            <button class="carrito-add"><i class='bx bx-cart-add'></i></button>
        </div>
    </div>
    `;
    contenedorProductosFrito.append(div);
})
