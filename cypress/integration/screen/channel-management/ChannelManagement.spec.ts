import * as cypress from "cypress";

describe("Channel Management Integration test", () => {
  it("should able to access channel page", () => {
    cy.visit("/channel-management");
    cy.wait(3000);
  });

  it("should able to see channel table", () => {
    cy.get(".ant-table").find(".ant-table-tbody");
  });

  it("should able to remove channel table when length more than 1", () => {
    cy.get("#channelTable")
      .find("tbody tr")
      .each(($tr, index) => {
        if (index >= 0) {
          if ($tr.text() === "No Data") {
            return false;
          } else {
            return cy
              .get("#channelTable")
              .find(".ant-btn-dangerous")
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

  it("should click add channel", () => {
    cy.get(".ant-btn-primary").contains("+Add channel").click();
  });

  it("should able to type channel", () => {
    cy.get(".ant-modal-body")
      .get('[type="radio"]')
      .check("Api")
      .get("#channelName")
      .type("Channel Test")
      .get("#description")
      .type("Channel Test_Description")
      .get(".ant-btn")
      .contains("Create")
      .click();
  });

  it("should click row table", () => {
    cy.get(".ant-table-tbody").click({ multiple: true });
  });

  // Setting
  it("should able to click Setting menu", () => {
    cy.get(".ant-menu-title-content").contains("Setting").click();
  });

  it("should able to type edit api endpoint", () => {
    cy.get("#channelName")
      .type(" Api")
      .get("#description")
      .type(" Api")
      .get(".ant-btn")
      .contains("Save")
      .click();
  });

  it("should able to click Generate Token", () => {
    cy.get(".ant-btn-primary").contains("Generate Token").click().click();
    if (cy.get(".ant-modal-body")) {
      cy.contains("OK").click();
    }
  });

  it("should able to click show Token", () => {
    cy.get(".ant-input-suffix ").click();
  });

  it("should able to add Purpose Profile", () => {
    cy.get(".ant-select")
      .find(".ant-select-selector")
      .click()
      .type("{downarrow}{enter}");
  });

  it("should able to delete Purpose Profile", () => {
    cy.get(".ant-select").find(".ant-select-selection-item-remove").click();
  });

  it("should click add extra field", () => {
    cy.get(".ant-btn-primary").contains("+ Add").click();
  });

  it("should able to type extra field", () => {
    cy.get(".ant-modal-body")
      .get("#policyExtraFieldName")
      .type("Extra Field_Test")
      .get(".ant-select")
      .find("#policyExtraFieldType")
      .click()
      .type("{enter}", { force: true })
      .get("#policyExtraFieldDescription")
      .type("Extra Field_Des")
      .get("#default")
      .type("Test")
      .get("#isRequired")
      .click()
      .get(".ant-btn")
      .contains("Create")
      .click();
  });

  it("should click edit extra field", () => {
    cy.get(".ant-btn-primary").contains("Edit").click();
  });

  it("should able to type edit extra field", () => {
    cy.get(".ant-modal-body")
      .get("#policyExtraFieldName")
      .type("{backspace}{backspace}{backspace}{backspace}Edit")
      .get(".ant-select")
      .find("#policyExtraFieldType")
      .click({ force: true })
      .type("{downarrow}{enter}", { force: true })
      .get("#policyExtraFieldDescription")
      .type("{backspace}{backspace}{backspace}Edit")
      .get("#default")
      .type("{backspace}{backspace}{backspace}{backspace}Edit")
      .get("#isRequired")
      .click()
      .get(".ant-btn")
      .contains("Update")
      .click();
  });

  it("should able to remove extra field", () => {
    cy.contains("Remove").click().get(".ant-btn").contains("Yes").click();
  });

  // Activity Log
  it("should able to click Activity Log menu", () => {
    cy.contains("Activity Log").click();
  });
});
