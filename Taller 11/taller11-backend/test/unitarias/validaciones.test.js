// Pruebas unitarias de utils/validaciones.js

const { describe, test } = require("node:test");
const assert = require("node:assert/strict");
const { validarPublicacion } = require("../../utils/validaciones");

describe("validarPublicacion", () => {
  test("acepta una publicación con title y body", () => {
    assert.equal(validarPublicacion({ title: "Hola", body: "Mundo" }), null);
  });

  // 2: Completa esta prueba.
  test.todo("rechaza una publicación sin title");

  // 2: Completa esta prueba.
  test.todo("rechaza un title vacío");

  // 2: Completa esta prueba.
  test.todo("rechaza cuando no se envían datos");
});
