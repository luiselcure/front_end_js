//Creación de las tarjetas a partir de un array de objetos
const catalogo = [
  { titulo: "Teclado mecánico", precio: 45000, categoria: "periféricos", descripcion: "Switches rojos" },
  { titulo: "Mouse inalámbrico", precio: 18000, categoria: "periféricos", descripcion: "Sensor de 1600 DPI" },
  { titulo: "Monitor 24 pulgadas", precio: 220000, categoria: "pantallas", descripcion: "Panel IPS Full HD" },
  { titulo: "Webcam HD", precio: 32000, categoria: "periféricos", descripcion: "Resolución 1080p" },
  { titulo: "Notebook 15 pulgadas", precio: 850000, categoria: "computadoras", descripcion: "16 GB de RAM y SSD de 512 GB" },
  { titulo: "Pad mouse", precio: 6000, categoria: "accesorios", descripcion: "Superficie de tela" },
];

const container = document.getElementById('prod-container')

//la función crea 
function createCard(producto){
  //La constante se usa para definir el elemento creado y luego se le asigna un nombre de clase.
    const card=document.createElement("div")
    card.className='card'

    const name =document.createElement('h3')
    name.textContent= producto.titulo
    
    const price= document.createElement('p')
    price.textContent=producto.precio
    
    const categorie= document.createElement('p')
    categorie.textContent=producto.categoria
    
    const description= document.createElement('p')
    description.textContent=producto.descripcion

    const btn = document.createElement('button')
    btn.className='addCart-btn'
    btn.textContent = 'Agregar al carrito' 

    btn.addEventListener('click', (e)=>{
      console.log(e.type)
    })

    card.appendChild(name)
    card.appendChild(price)
    card.appendChild(categorie)
    card.appendChild(description)
    card.appendChild(btn)

    return card
  }
//Revisa cada producto dentro del array del catalogo y luego muestra cada tarjeta individualmente dentro del contenedor 
   catalogo.forEach(producto => {
     const card = createCard(producto)
     container.appendChild(card)
   })


  