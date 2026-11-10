// Pruebas de integración de las rutas /api/posts

const { describe, test } = require("node:test");
const assert = require("node:assert/strict");
const request = require("supertest");
const app = require("../../app");

// Inicia sesión y devuelve el token (igual que la petición «Login» de Postman).
const iniciarSesion = async (username, password) => {
  const respuesta = await request(app).post("/api/login").send({ username, password });
  return respuesta.body.token;
};

describe("GET /api/posts", () => {
  test("responde 200 con las 5 publicaciones iniciales", async () => {
    const respuesta = await request(app).get("/api/posts");
    assert.equal(respuesta.status, 200);
    assert.equal(respuesta.body.length, 5);
  });

  // 3: Completa esta prueba.
  test.todo("filtra por usuario con ?userId=2");

  // 3: Completa esta prueba.
  test.todo("responde 404 si la publicación no existe");
});

describe("POST /api/posts", () => {
  // 3: Completa esta prueba.
  test.todo("responde 401 sin token");

  // 3: Completa esta prueba.
  test.todo("crea la publicación con el autor del token, no del body");

  // 3: Completa esta prueba.
  test.todo("responde 400 si falta el title");

  // 3: Completa esta prueba.
  test.todo("responde 400 si el JSON está mal escrito");
});

describe("PUT y DELETE /api/posts/:id", () => {
  // 3: Completa esta prueba.
  test.todo("responde 403 si ana edita una publicación de carla");

  // 3: Completa esta prueba.
  test.todo("el autor puede eliminar su propia publicación");
});
