import * as cypress from "cypress";

describe('Data subjects Integration test', () => {
  it('should able to access data subjects page', () => {
    cy.visit('/data-subjects')
    cy.wait(3000);
  })

  it('should able to see data subjects table', () => {
    cy.get('.ant-table')
      .find('.ant-table-tbody')
  })

  it('should click export', () => {
    cy.get('.ant-btn-primary').contains('Export').click()
  })

})
