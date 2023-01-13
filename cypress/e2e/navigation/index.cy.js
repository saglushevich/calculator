/* eslint-disable no-undef */

describe("navigation tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("switch page to settings", () => {
    cy.get("a").contains("Settings").click();
    cy.url().should("include", "/settings");
    cy.get("button").contains("Clear History").should("exist");
    cy.get("button").contains("Clear All").should("exist");
    cy.get("button").contains("Show/Hide history").should("not.exist");
    cy.get("[type=expression]").should("not.exist");
    cy.get("[type=value]").should("not.exist");
  });

  it("switch homepages", () => {
    cy.get("a").contains("Home (CC)").click();
    cy.url().should("include", "/classes");
    cy.url().should("not.include", "/settings");

    cy.get("a").contains("Home (FC)").click();
    cy.url().should("not.include", "/classes");
    cy.url().should("not.include", "/settings");
  });
});
