import * as cypress from "cypress";

describe('Login test', () => {
  it('should able to access policy page', () => {
    cy.visit('/')
  })

  it('should able to type username', () => {
    cy.get('#username')
      .type('film')
  })

  it('should able to type password', () => {
    cy.get('#password')
      .type('P@ssword1234')
  })

  it('should able to click sign in', () => {
    cy.get('.LoginPage__button')
      .click()
  })

})
