/* eslint-disable no-undef */

describe("history tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/calculator");
  });

  it("show/hide history", () => {
    cy.get("[type=history]").should("not.exist");

    cy.get("button").contains("Show/Hide history").click();
    cy.get("[type=history]").should("exist");

    cy.get("button").contains("Show/Hide history").click();
    cy.get("[type=history]").should("not.exist");
  });

  it("add item to history", () => {
    cy.get("button").contains("6").click();
    cy.get("button").contains("+").click();
    cy.get("button").contains("4").click();
    cy.get("[type=expression]").should("have.text", "6+");
    cy.get("[type=value]").should("have.text", "4");
    cy.get("button").contains("=").click();

    cy.get("[type=value]").should("have.text", "10");

    cy.get("button").contains("Show/Hide history").click();
    cy.get("[type=history]").within(() => {
      cy.get("li").should("have.text", "6+4=10");
    });
  });

  it("get item from history", () => {
    cy.get("button").contains("6").click();
    cy.get("button").contains("+").click();
    cy.get("button").contains("4").click();
    cy.get("button").contains("=").click();
    cy.get("[type=value").should("have.text", "10");
    cy.get("button").contains("С").click();
    cy.get("[type=value").should("have.text", "0");
    cy.get("button").contains("Show/Hide history").click();
    cy.get("[type=history]").within(() => {
      cy.get("li").should("have.text", "6+4=10").click();
    });

    cy.get("[type=value").should("have.text", "10");
  });

  it("empty history", () => {
    cy.get("button").contains("Show/Hide history").click();
    cy.get("[type=history]").within(() => {
      cy.get("li").should("have.text", "No items");
    });
  });
});
