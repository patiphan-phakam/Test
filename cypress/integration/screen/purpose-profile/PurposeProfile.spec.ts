import * as cypress from "cypress";

describe("Purpose Profile Integration test", () => {
  it("should able to access purpose profile page", () => {
    cy.visit("/purpose-profile");
    cy.wait(3000);
  });

  it("should able to see purpose profile table", () => {
    cy.get(".ant-table").find(".ant-table-tbody");
  });

  it("should able to remove purpose profile table when length more than 1", () => {
    cy.get(".ant-table")
      .find(".ant-table-tbody")
      .get("tbody tr")
      .each(($tr, index) => {
        if (index >= 0) {
          if ($tr.text() == "No Data") {
            return false;
          } else {
            return cy
              .get(".ant-btn-dangerous")
              .contains("Remove")
              .click()
              .get(".ant-btn")
              .contains("Yes")
              .click()
              .wait(3000);
          }
        }
      });
  });

  it("should click add purpose profile", () => {
    cy.get(".ant-btn-primary").contains("+Add").click();
  });

  it("should able to type purpose profile", () => {
    cy.get(".ant-modal-body")
      .get("#name")
      .type("Purpose Profile Test")
      .get(".ant-select")
      .click()
      .type("{enter}")
      .get(".ant-btn")
      .contains("Create")
      .click();
  });

  it("should click row table", () => {
    cy.wait(1000);
    cy.get(".ant-table-tbody").click({ multiple: true });
  });

  it("should click add purpose", () => {
    cy.get(".ant-btn-primary").click();
  });

  it("should able to type purposes", () => {
    cy.get(".ant-modal-body")
      .get(".ant-select")
      .click()
      .type("{downarrow}{enter}")
      // .get('#consentText').type('Data Element Description')
      .wait(1000)
      .get(".ant-btn")
      .contains("Create")
      .click();
  });

  it("should click edit purposes", () => {
    cy.wait(3000);
    cy.get(".ant-btn-primary").contains("Edit").click();
  });

  it("should able to type edit purposes", () => {
    cy.get(".ant-modal-body")
      .get("#consentText")
      .type("-01")
      .get(".ant-btn")
      .contains("Update")
      .click();
  });

  it("should able to remove purposes", () => {
    cy.wait(3000);
    cy.contains("Remove").click().get(".ant-btn").contains("Yes").click();
  });
});
