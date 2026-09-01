const boton = document.getElementById("btn-cargar");
const estado = document.getElementById("estado");
const listaPosts = document.getElementById("lista-posts");

boton.addEventListener("click", function() {
    estado.textContent = "Cargando publicaciones...";
    listaPosts.innerHTML = "";

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(datos => {
            estado.textContent = "Publicaciones cargadas correctamente.";
            console.log(datos);
            datos.forEach(function(post) {
                const articulo = document.createElement("article");
                articulo.classList.add("post");

                const titulo = document.createElement("h3");
                titulo.textContent = post.title;

                const cuerpo = document.createElement("p");
                cuerpo.textContent = post.body;

                articulo.appendChild(titulo);
                articulo.appendChild(cuerpo);
            
                listaPosts.appendChild(articulo);
            }); 
        
        })
        .catch(error => {
            console.error(error);
            estado.textContent = "Ocurrió un error al cargar los datos.";
    });
});