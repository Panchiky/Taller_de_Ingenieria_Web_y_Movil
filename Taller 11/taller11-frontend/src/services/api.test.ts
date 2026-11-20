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
  test("agrega Authorization con el token de la sesión", () => {
    guardarSesion({ token: "abc123", id: 1, username: "ana" });
    expect(encabezadosConToken()).toEqual({ Authorization: "Bearer abc123" });
  });
});

describe("obtenerPublicaciones", () => {
  // 4: Completa esta prueba.
  test("agrega ?userId= a la URL al filtrar por usuario", async () => {
    const fetchSimulado = vi.fn().mockResolvedValue(respuestaJson(200, []));
    vi.stubGlobal("fetch", fetchSimulado);

    await obtenerPublicaciones(2);

    expect(fetchSimulado).toHaveBeenCalledWith("http://localhost:3000/api/posts?userId=2");
  });
});

describe("crearPublicacion", () => {
  // 4: Completa esta prueba.
  test("envía un POST con el token de la sesión", async () => {
    guardarSesion({ token: "abc123", id: 1, username: "ana" });
    const fetchSimulado = vi
      .fn()
      .mockResolvedValue(respuestaJson(201, { userId: 1, id: 6, title: "Hola", body: "Mundo" }));
    vi.stubGlobal("fetch", fetchSimulado);

    await crearPublicacion({ title: "Hola", body: "Mundo" });

    expect(fetchSimulado).toHaveBeenCalledWith(
      "http://localhost:3000/api/posts",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({ Authorization: "Bearer abc123" })
      })
    );
  });
  // 4: Completa esta prueba.
  test("lanza un ErrorApi con el mensaje del servidor si responde 400", async () => {
    const fetchSimulado = vi.fn().mockResolvedValue(respuestaJson(400, { error: "Debes enviar title y body" }));
    vi.stubGlobal("fetch", fetchSimulado);

    const error = await crearPublicacion({ title: "", body: "" }).catch((e) => e);

    expect(error).toBeInstanceOf(ErrorApi);
    expect(error.status).toBe(400);
    expect(error.message).toBe("Debes enviar title y body");
  });
});

describe("eliminarPublicacion", () => {
  // 4: Completa esta prueba.
  test("acepta una respuesta 204 sin contenido", async () => {
    const fetchSimulado = vi.fn().mockResolvedValue(new Response(null, { status: 204 }));
    vi.stubGlobal("fetch", fetchSimulado);

    await expect(eliminarPublicacion(1)).resolves.toBeUndefined();
  });
});
