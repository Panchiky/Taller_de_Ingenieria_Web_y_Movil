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
  test("responde 401 si la contraseña es incorrecta", async () => {
    const respuesta = await request(app).post("/api/login").send({ username: "ana", password: "incorrecta" });
    assert.equal(respuesta.status, 401);
  });
});

describe("GET /api/usuarios/yo", () => {
  // 3: Completa esta prueba.
  test("responde 401 sin token", async () => {
    const respuesta = await request(app).get("/api/usuarios/yo");
    assert.equal(respuesta.status, 401);
  });

  // 3: Completa esta prueba.
  test("responde 401 con un token alterado", async () => {
    const login = await request(app).post("/api/login").send({ username: "ana", password: "ana-12345" });
    const alterado = login.body.token.slice(0, -2) + "xx"; // cambiamos el final de la firma
    const respuesta = await request(app).get("/api/usuarios/yo").set("Authorization", `Bearer ${alterado}`);
    assert.equal(respuesta.status, 401);
  });
});

describe("Inicio de sesión con GitHub", () => {
  // 3: Completa esta prueba.
  test("la URL de autorización incluye client_id, state y PKCE", async () => {
    const respuesta = await request(app).get("/api/auth/github/url");
    assert.equal(respuesta.status, 200);

    const url = new URL(respuesta.body.url);
    assert.equal(url.origin + url.pathname, "https://github.com/login/oauth/authorize");
    assert.equal(url.searchParams.get("client_id"), "cliente-de-prueba");
    assert.match(url.searchParams.get("state"), /^[0-9a-f]{32}$/);
    assert.ok(url.searchParams.get("code_challenge"));
    assert.equal(url.searchParams.get("code_challenge_method"), "S256");
  });

  // 3: Completa esta prueba.
  test("responde 400 si el state no fue generado por el servidor", async () => {
    const respuesta = await request(app).post("/api/auth/github").send({ code: "codigo-falso", state: "state-inventado" });
    assert.equal(respuesta.status, 400);
  });
});
