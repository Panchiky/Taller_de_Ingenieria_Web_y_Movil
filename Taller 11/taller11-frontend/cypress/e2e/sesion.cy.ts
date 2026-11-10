// Pruebas de interfaz del inicio de sesión.
// Requiere el backend (npm run dev) y el frontend (ionic serve) en ejecución.

describe('Inicio de sesión', () => {
  it('inicia sesión con un usuario de prueba', () => {
    cy.visit('/login')
    cy.get('input[autocomplete="username"]').type('ana')
    cy.get('input[type="password"]').type('ana-12345')
    cy.get('ion-button[type="submit"]').click()

    cy.url().should('include', '/publicaciones')
    cy.get('.usuario').should('have.text', 'ana')
  })

  // 6: Completa esta prueba (una prueba sin función queda pendiente).
  it('no inicia sesión si la contraseña es incorrecta')

  // 6: Completa esta prueba (una prueba sin función queda pendiente).
  it('cierra la sesión con el botón Salir')
})
