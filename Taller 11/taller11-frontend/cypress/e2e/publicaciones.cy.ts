// Pruebas de interfaz de las publicaciones.
// Requiere el backend (npm run dev) y el frontend (ionic serve) en ejecución.

describe('Publicaciones', () => {
  it('muestra las publicaciones del servidor', () => {
    cy.visitarConSesion('/publicaciones', 'ana', 'ana-12345')
    cy.contains('h2', 'Bienvenidos al Taller 11')
  })

  // 6: Completa esta prueba (una prueba sin función queda pendiente).
  it('crea una publicación')

  // 6: Completa esta prueba (una prueba sin función queda pendiente).
  it('no permite editar publicaciones de otros usuarios')
})
