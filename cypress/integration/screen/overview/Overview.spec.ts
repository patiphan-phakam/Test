import * as cypress from "cypress";

describe('Overview Integration test', () => {
  it('should able to access overview page', () => {
    cy.visit('/dashboard')
    cy.wait(3000);
  })

  it('should able to see overview with 3 rows count', () => {
    cy.get('.ant-card')
      .should('have.length', 6)
  })

})
