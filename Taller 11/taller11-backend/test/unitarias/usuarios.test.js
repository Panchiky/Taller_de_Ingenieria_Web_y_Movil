// Pruebas unitarias de utils/usuarios.js

const { describe, test } = require("node:test");
const assert = require("node:assert/strict");
const { nombreDisponible } = require("../../utils/usuarios");

describe("nombreDisponible", () => {
  test("devuelve el mismo nombre si está libre", () => {
    const usuarios = [{ username: "ana" }];
    assert.equal(nombreDisponible("octocat", usuarios), "octocat");
  });

  // 2: Completa esta prueba.
  test.todo("agrega -github si el nombre ya existe");

  // 2: Completa esta prueba.
  test.todo("agrega -github2 si también existe ana-github");

  // 2: Completa esta prueba.
  test.todo("no modifica la lista de usuarios");
});
