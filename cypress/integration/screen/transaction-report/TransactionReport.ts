import * as cypress from 'cypress'

describe('Policy Management Integration test', () => {
  it('should be access transaction report page', () => {
    cy.visit('/transaction-report')
  })

  it('Should be seeing transaction report info', () => {
    cy.server()
    cy.route('/purpose-consent-records').as('getTxnReports')
    cy.wait('@getTxnReports').then(interception => {
      cy.get('.assertion-table')
        .find('tbody tr:last')
        .contains('td', /.*/g)
        .should('be.visible')
    })
  })
})
