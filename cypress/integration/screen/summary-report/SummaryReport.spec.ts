import * as cypress from "cypress";

describe('Summary report Integration test', () => {
  it('should able to access summary report page', () => {
    cy.visit('/summary-report')
    cy.wait(3000);
  })

  it('should able to see summary report table', () => {
    cy.get('.ant-table')
      .find('.ant-table-tbody')
  })

  it('should click export', () => {
    cy.get('.ant-btn-primary').contains('Export').click()
  })

})
