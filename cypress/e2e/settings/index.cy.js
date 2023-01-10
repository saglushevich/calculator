/* eslint-disable no-undef */

describe('settings tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it("Toggle light/dark theme", () => {
        cy.contains("Settings").click();

        cy.get('[type=settingsContent]').invoke('css', 'display', 'block');

        cy.get('div').contains("Dark Theme").click();
        cy.get('body').should('have.css', 'background-color', 'rgb(0, 0, 0)');

        cy.get('div').contains("Light Theme").click();
        cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)');

    })

    it("Clear history", () => {
        cy.get('button').contains("6").click();
        cy.get('button').contains("+").click();
        cy.get('button').contains("4").click();
        cy.get('button').contains("=").click();
        cy.get('[type=expression]').should('not.have.text');
        cy.get('[type=value]').should('have.text', "10");

        cy.get('button').contains("Show/Hide history").click();

        cy.get('[type=history]').within(() => {
            cy.get('li').should('have.text', '6+4=10');
        });

        cy.get('a').contains("Settings").click();
        cy.get('button').contains("Clear History").click();
        cy.get('a').contains("Home").click();

        cy.get('button').contains("Show/Hide history").click();

        cy.get('[type=history]').within(() => {
            cy.get('li').should('have.text', 'No items');
        });

        cy.get('[type=value]').should('have.text', "10");
    })

    it("Clear all", () => {
        cy.get('button').contains("6").click();
        cy.get('button').contains("+").click();
        cy.get('button').contains("4").click();
        cy.get('button').contains("=").click();
        cy.get('[type=value]').should('have.text', '10');

        cy.contains("Show/Hide history").click();

        cy.get('[type=history]').within(() => {
            cy.get('li').should('have.text', '6+4=10');
        });

        cy.get('a').contains("Settings").click();
        cy.get('button').contains("Clear All").click();
        cy.get('a').contains("Home").click();

        cy.get('button').contains("Show/Hide history").click();

        cy.get('[type=history]').within(() => {
            cy.get('li').should('have.text', 'No items');
        });

        cy.get('[type=expression]').should('not.have.text');
        cy.get('[type=value]').should('have.text', '0');
    })
});