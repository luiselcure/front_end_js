const catalogo = [
  { titulo: "Teclado mecánico", precio: 45000, categoria: "periféricos", descripcion: "Switches rojos" },
  { titulo: "Mouse inalámbrico", precio: 18000, categoria: "periféricos", descripcion: "Sensor de 1600 DPI" },
  { titulo: "Monitor 24 pulgadas", precio: 220000, categoria: "pantallas", descripcion: "Panel IPS Full HD" },
  { titulo: "Webcam HD", precio: 32000, categoria: "periféricos", descripcion: "Resolución 1080p" },
  { titulo: "Notebook 15 pulgadas", precio: 850000, categoria: "computadoras", descripcion: "16 GB de RAM y SSD de 512 GB" },
  { titulo: "Pad mouse", precio: 6000, categoria: "accesorios", descripcion: "Superficie de tela" },
];

function createCard(producto){
    const card=document.createElement("div")
    card.classNam='card'

    const name =document.createElement('h3')
    name.textContent= producto.titulo
    
  
    

}