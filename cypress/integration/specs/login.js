describe ('Login', () =>{
    it('Redirección a e home al login exitoso', () =>{
    cy.visit('http://localhost:8080/login')
    cy.get('#email').type('dantestriffe@gmail.com')
    cy.get('#password').type('123456789')
    cy.get('button.is-black').click()
    cy.get('.navbar-burger').click()
    cy.get('#navbarMenu').contains('Usuario')

  })
})