// Taller 8: CRUD completo + middlewares + express.Router
// Este es el servidor del Taller 7 (con cors). Sigue los pasos del README
// y completa cada sección marcada con un número.

const express = require("express");
const cors = require("cors");
// 3: Importar morgan.

const app = express();

// 3: Registrar morgan para mostrar cada petición en la terminal (debe ser el primer middleware).
app.use(cors());
app.use(express.json());

let posts = [
  { userId: 1, id: 1, title: "Bienvenidos al Taller 8", body: "En este taller completaremos las operaciones CRUD de nuestra API y construiremos una aplicación con Ionic que las utilice." },
  { userId: 1, id: 2, title: "¿Qué es un backend?", body: "Es la parte de la aplicación que se ejecuta en el servidor y responde a las peticiones de los clientes." },
  { userId: 2, id: 3, title: "Métodos HTTP", body: "GET permite obtener datos, POST crear, PUT actualizar y DELETE eliminar." },
  { userId: 2, id: 4, title: "Formato JSON", body: "Los clientes y el servidor se comunican enviando y recibiendo datos en formato JSON." },
  { userId: 3, id: 5, title: "Postman", body: "Postman es una herramienta que permite enviar peticiones HTTP y revisar las respuestas del servidor." }
];

app.get("/", (req, res) => {
  res.send("¡Hola desde mi primer servidor con Express!");
});

app.get("/saludo/:nombre", (req, res) => {
  res.send(`¡Hola, ${req.params.nombre}!`);
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
    res.status(404).json({ error: "Publicación no encontrada" });
  }
});

app.post("/api/posts", (req, res) => {
  const datos = req.body;
  if (!datos || !datos.title || !datos.body) {
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

// 1: Crear la ruta DELETE "/api/posts/:id" que elimine una publicación.

// 2: Crear la ruta PUT "/api/posts/:id" que reemplace una publicación.

// 4: Convertir este middleware en una función con nombre: endpointDesconocido.
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// 5: Crear el middleware que maneja los errores (debe recibir 4 parámetros).

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
