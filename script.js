//Hacer funcionar el buscador en la barra de navegación

 const searchBar = document.getElementById("navSearch")

 function dibujar (list){
     container.innerHTML="";
     list.forEach(producto => {
       container.appendChild(createCard(producto))
     });
 }
 searchBar.addEventListener("input", () => {
   const text = searchBar.value.toLowerCase()

   const filterData= catalogo.filter(producto=>{
     return producto.titulo.toLowerCase().includes(text)
   })
   dibujar(filterData)
 })

 dibujar(catalogo)
