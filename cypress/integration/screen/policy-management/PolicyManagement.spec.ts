import * as cypress from "cypress";

describe("Policy Management Integration test", () => {
  it("should able to access policy page", () => {
    cy.visit("/policy-management");
    cy.wait(3000);
  });

  it("should able to see policy table", () => {
    cy.get(".ant-table").find(".ant-table-tbody");
  });

  it("should click row table", () => {
    cy.get(".ant-table-tbody").click({ multiple: true });
  });

  // Policy
  it("should input text", () => {
    cy.get(".ql-editor").type("{del}{selectall}{backspace}").type("test");
  });

  it("should click save button", () => {
    cy.get(".ant-btn-primary").contains("Save").click();
  });

  it("should click ok button to save", () => {
    cy.get(".ant-btn-primary").get(".ant-modal-body").contains("OK").click();
  });

  // Policy Configuration
  it("should able to click Policy Configuration menu", () => {
    cy.contains("Policy Configuration").click();
  });

  it("should click add policy configuration", () => {
    cy.get(".ant-btn-primary").click();
  });

  it("should able to type policy configuration data", () => {
    cy.get(".ant-modal-body")
      .get("#key")
      .type("test")
      .get("#value")
      .type("7")
      .get("#status")
      .click()
      .get(".ant-btn")
      .contains("Create")
      .click();
  });

  it("should able to remove policy configuration data", () => {
    cy.contains("Remove").click().get(".ant-btn").contains("Yes").click();
  });

  // Data element
  it("should able to click data element menu", () => {
    cy.contains("Data element").click();
  });

  it("should click add data element", () => {
    cy.get(".ant-btn-primary").contains("+ Add").click();
  });

  it("should able to type data element", () => {
    cy.get(".ant-modal-body")
      .get("#dataElementName")
      .type("Data Element Test")
      .get(".ant-select")
      .click()
      .type("{downarrow}{enter}")
      .get("#description")
      .type("Data Element Description")
      .get(".ant-btn")
      .contains("Create")
      .click();
  });

  it("should click edit data element", () => {
    cy.get(".ant-btn-primary").contains("Edit").click();
  });

  it("should able to type edit data element", () => {
    cy.get(".ant-modal-body")
      .get("#dataElementName")
      .type("{del}{backspace}{backspace}{backspace}{backspace}edit")
      .get(".ant-select")
      .click()
      .type("{downarrow}{downarrow}{downarrow}{enter}")
      .get(".ant-btn")
      .contains("Update")
      .click();
  });

  it("should able to remove data element", () => {
    cy.contains("Remove").click().get(".ant-btn").contains("Yes").click();
  });
});
