class Producto {
    constructor(nombre, id, precio, color, stock,) {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.color = color;
        this.stock = stock;
    }
}


const buzos = [];
const pantalones = [];
const remeras = [];
const abrigos = [];

//Buzos
buzos.push (new Producto('Buzo oversized', 1, 11000, 'Gris', 20));
buzos.push (new Producto('Buzo oversized', 2, 11000, 'Negro', 40));
buzos.push (new Producto('Buzo Round Neck', 3, 11000, 'Gris', 20));
//Pantalones
pantalones.push (new Producto('Pantalon wide', 4, 10000, 'Arena', 15));
//Remeras
remeras.push (new Producto('Remera oversized', 5, 5300, 'Azul marino', 30));
//Abrigos
abrigos.push (new Producto('Polera agrigento', 6, 11800, 'Beige', 20));
abrigos.push (new Producto('Saco de paño', 7, 35000, 'Beige', 10 ));
abrigos.push (new Producto('Trench euro', 8, 32000, 'Beige', 10));


let sectionProductos = document.getElementById('section-productos');

function crearCard (producto) {

    let card = document.createElement("div");
    card.setAttribute("class", "card card-producto");
    card.style.width = "18rem";

    sectionProductos.appendChild(card);

    let cardImg = document.createElement("div");
    cardImg.innerHTML = `<img src="./imagenes/${producto.id}.webp" class="card-img-top" alt="${producto.nombre}"></img>`;
    card.appendChild(cardImg);

    let cardBody = document.createElement("div");
    cardBody.innerHTML = `<h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text"> Precio: $${producto.precio} </p>
                            <button class="btn btn-dark">Comprar</button>`;
    card.appendChild(cardBody);
    cardBody.setAttribute("class", "card-body");
}

for (const buzo of buzos ) {
    crearCard(buzo);
}

for (const pantalon of pantalones) {
    crearCard(pantalon);
}

for (const remera of remeras) {
    crearCard(remera);
}

for (const abrigo of abrigos) {
    crearCard(abrigo);
}





