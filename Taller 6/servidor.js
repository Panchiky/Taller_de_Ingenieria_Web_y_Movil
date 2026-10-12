// Taller 6: Node.js + Express (Backend)
// Sigue los pasos del README y completa cada sección marcada con un número en forma secuencial (1,2,3...)

const express = require("express"); // Importar express
const app = express(); // Crear una instancia de express
app.use(express.json()); // Permitir que Express entienda los datos en formato JSON

// Datos de ejemplo. Tienen la misma estructura que las publicaciones de la API JSONPlaceholder.
let posts = [
  {
    userId: 1,
    id: 1,
    title: "Bienvenidos al Taller 6",
    body: "En este taller crearemos y levantaremos nuestro primer servidor con Node.js y Express."
  },
  {
    userId: 1,
    id: 2,
    title: "¿Qué es un backend?",
    body: "Es la parte de la aplicación que se ejecuta en el servidor y responde a las peticiones de los clientes."
  },
  {
    userId: 2,
    id: 3,
    title: "Métodos HTTP",
    body: "GET permite obtener datos, POST crear, PUT actualizar y DELETE eliminar."
  },
  {
    userId: 2,
    id: 4,
    title: "Formato JSON",
    body: "Los clientes y el servidor se comunican enviando y recibiendo datos en formato JSON."
  },
  {
    userId: 3,
    id: 5,
    title: "Postman",
    body: "Postman es una herramienta que permite enviar peticiones HTTP y revisar las respuestas del servidor."
  }
];

// Crear la rutas GET
app.get("/", (req, res) => {
  res.send("¡Hola desde mi servidor Pogo jeje!");
});

app.get("/saludo/:nombre", (req, res) => {
  res.send(`¡Hola ${req.params.nombre}!`);
});

app.get("/api/posts", (req, res) => {
  const userId = req.query.userId;
  if (userId) {
    const filtrados = posts.filter((p) => p.userId === Number(userId));
    return res.json(filtrados);
  }
  res.json(posts);
});

app.get("/api/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find((p) => p.id === id);

  if (post) {
    res.json(post);
  } else {
    res.status(404).send("Publicación no encontrada");
  }
});

// Crear la ruta POST
app.post("/api/posts", (req, res) => {
  const datos = req.body;
  if (!datos || !datos.title || !datos.body){
    return res.status(400).json({ error: "Debes enviar title y body" });
  }
  const nuevoPost = {
    userId: datos.userId || 1, 
    id: posts.length > 0 ? Math.max(...posts.map((p) => p.id)) + 1 : 1,
    title: datos.title,
    body: datos.body
  };
  posts.push(nuevoPost);
  res.status(201).json(nuevoPost);
});

// Codigo para manejar rutas no encontradas (404)
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// Levantamos el servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});