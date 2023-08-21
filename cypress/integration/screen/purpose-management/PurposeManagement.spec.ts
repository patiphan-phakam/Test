import * as cypress from "cypress";

describe("Purpose Management Integration test", () => {
  it("should able to access purpose page", () => {
    cy.visit("/purpose");
    cy.wait(3000);
  });

  it("should able to see purpose table", () => {
    cy.get(".ant-table").find(".ant-table-tbody");
  });

  // it('should able to remove purpose table when length more than 1', () => {
  //   cy.get('.ant-table')
  //     .find('.ant-table-tbody')
  //     .get('tbody tr').each(($tr, index) => {
  //       if (index >= 0) {
  //         if ($tr.text() == 'No Data') {
  //           return false
  //         } else {
  //           return cy.get('.ant-btn-dangerous')
  //                 .contains('Remove')
  //                 .click()
  //                 .get('.ant-btn')
  //                 .contains('Yes')
  //                 .click().wait(3000)
  //         }
  //       }
  //     })
  // })

  it("should click add purpose", () => {
    cy.get(".ant-btn-primary").contains("+Add").click();
  });

  it("should able to type purpose", () => {
    cy.get(".ant-modal-body")
      .get("#name")
      .type("Purpose_Test")
      .get(".ant-select")
      .find("#policyId")
      .click()
      .type("{enter}", { force: true })
      .get("#expireValue")
      .type("1")
      .get(".ant-select")
      .contains("DAY")
      .click()
      .type("{downarrow}{downarrow}{downarrow}{downarrow}{enter}")
      .get("#description")
      .type("Purpose_Des")
      .get(".ant-btn")
      .contains("Create")
      .click();
  });

  it("should click row table", () => {
    cy.get(".ant-table-tbody")
      .wait(3000)
      .find("td")
      .contains("Purpose_Test")
      .click({ multiple: true });
  });

  // Settings
  it("should able to click Settings menu", () => {
    cy.contains("Settings").click();
  });

  it("should able to type edit purpose", () => {
    cy.get("#name")
      .type(" Name")
      .get("#expireValue")
      .type("{backspace}2")
      .get(".ant-select")
      .click()
      .type("{downarrow}{downarrow}{enter}")
      .get("#description")
      .type(" Test")
      .get(".ant-transfer-list-content-item")
      .find('input[type="checkbox"]')
      .check()
      .should("be.checked")
      .get(".anticon-right")
      .click()
      .get(".ant-btn")
      .contains("Save Draft")
      .click()
      .get(".ant-btn")
      .contains("OK")
      .click();
  });

  it("should able to click Publish", () => {
    cy.get(".ant-btn")
      .contains("Publish")
      .click()
      .get(".ant-btn")
      .contains("OK")
      .click();
  });

  // Activity
  it("should able to click Activity menu", () => {
    cy.contains("Activity").click();
  });
});
