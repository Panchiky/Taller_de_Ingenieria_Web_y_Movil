// Pruebas de integración del inicio de sesión (contraseña y GitHub)

const { describe, test } = require("node:test");
const assert = require("node:assert/strict");
const request = require("supertest");
const app = require("../../app");

describe("POST /api/login", () => {
  test("responde 200 con un token si las credenciales son correctas", async () => {
    const respuesta = await request(app).post("/api/login").send({ username: "ana", password: "ana-12345" });
    assert.equal(respuesta.status, 200);
    assert.equal(respuesta.body.username, "ana");
    assert.ok(respuesta.body.token);
  });

  // 3: Completa esta prueba.
  test.todo("responde 401 si la contraseña es incorrecta");
});

describe("GET /api/usuarios/yo", () => {
  // 3: Completa esta prueba.
  test.todo("responde 401 sin token");

  // 3: Completa esta prueba.
  test.todo("responde 401 con un token alterado");
});

describe("Inicio de sesión con GitHub", () => {
  // 3: Completa esta prueba.
  test.todo("la URL de autorización incluye client_id, state y PKCE");

  // 3: Completa esta prueba.
  test.todo("responde 400 si el state no fue generado por el servidor");
});
