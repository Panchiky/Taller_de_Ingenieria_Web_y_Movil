/* eslint-disable @typescript-eslint/no-unused-vars -- quita esta línea al completar el paso 4 */
// Pruebas unitarias de src/services/api.ts
// fetch se reemplaza por una función simulada (vi.fn), así no se necesita el servidor.

import { afterEach, describe, expect, test, vi } from "vitest";
import { ErrorApi, crearPublicacion, eliminarPublicacion, encabezadosConToken, obtenerPublicaciones } from "./api";
import { guardarSesion } from "./sesion";

// Crea una respuesta HTTP con un cuerpo JSON, como la que enviaría nuestro servidor.
const respuestaJson = (status: number, cuerpo: unknown) =>
  new Response(JSON.stringify(cuerpo), { status, headers: { "Content-Type": "application/json" } });

afterEach(() => {
  vi.unstubAllGlobals();
  localStorage.clear();
});

describe("encabezadosConToken", () => {
  test("no agrega Authorization si no hay sesión", () => {
    expect(encabezadosConToken()).toEqual({});
  });

  // 4: Completa esta prueba.
  test.todo("agrega Authorization con el token de la sesión");
});

describe("obtenerPublicaciones", () => {
  // 4: Completa esta prueba.
  test.todo("agrega ?userId= a la URL al filtrar por usuario");
});

describe("crearPublicacion", () => {
  // 4: Completa esta prueba.
  test.todo("envía un POST con el token de la sesión");

  // 4: Completa esta prueba.
  test.todo("lanza un ErrorApi con el mensaje del servidor si responde 400");
});

describe("eliminarPublicacion", () => {
  // 4: Completa esta prueba.
  test.todo("acepta una respuesta 204 sin contenido");
});
