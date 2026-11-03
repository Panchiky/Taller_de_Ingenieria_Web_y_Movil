// Rutas de autenticación con GitHub (OAuth). Se montan en servidor.js en "/api/auth".

const express = require("express");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const usuarios = require("../datos/usuarios");

const router = express.Router();

// Valores state pendientes, cada uno con su code_verifier (PKCE) y su expiración.
// Clave: state → Valor: { codeVerifier, expira }
const estados = new Map();
const DIEZ_MINUTOS = 10 * 60 * 1000;

// Elige un nombre de usuario que no exista (ya está listo).
// Si "ana" ya existe, prueba "ana-github", luego "ana-github2", etc.
const nombreDisponible = (login) => {
  let nombre = login;
  let intento = 1;
  while (usuarios.some((u) => u.username === nombre)) {
    nombre = intento === 1 ? `${login}-github` : `${login}-github${intento}`;
    intento++;
  }
  return nombre;
};

// 3: Crear la ruta GET "/github/url" que genere el state y el PKCE,
//    y responda con la URL de autorización de GitHub.

// 4: Crear la ruta POST "/github" que reciba { code, state }, verifique el state,
//    intercambie el código con GitHub, obtenga el perfil y responda con NUESTRO JWT.

module.exports = router;
