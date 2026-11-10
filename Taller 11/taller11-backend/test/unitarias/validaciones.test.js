// Pruebas unitarias de utils/validaciones.js

const { describe, test } = require("node:test");
const assert = require("node:assert/strict");
const { validarPublicacion } = require("../../utils/validaciones");

describe("validarPublicacion", () => {
  test("acepta una publicación con title y body", () => {
    assert.equal(validarPublicacion({ title: "Hola", body: "Mundo" }), null);
  });

  // 2: Completa esta prueba.
  test("rechaza una publicación sin title", () => {
    assert.equal(validarPublicacion({ body: "Mundo" }), "Debes enviar title y body");
  });

  // 2: Completa esta prueba.
  test("rechaza un title vacío", () => {
    assert.equal(validarPublicacion({ title: "", body: "Mundo" }), "Debes enviar title y body");
  });

  // 2: Completa esta prueba.  
  test("rechaza cuando no se envían datos", () => {
    assert.equal(validarPublicacion(undefined), "Debes enviar title y body");
  });
});
