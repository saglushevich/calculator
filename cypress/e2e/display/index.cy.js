/* eslint-disable no-undef */

describe('display tests (FC)', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('output 6*2=12', () => {
        cy.get('button').contains("6").click();
        cy.get('[type=expression]').should('not.have.text');
        cy.get('[type=value]').should('have.text', '6');
        cy.get('button').contains('*').click();
        cy.get('[type=expression]').should('have.text', '6');
        cy.get('[type=value]').should('have.text', '*');
        cy.get('button').contains('2').click();
        cy.get('[type=expression]').should('have.text', '6*');
        cy.get('[type=value]').should('have.text', '2');
        cy.get('button').contains('=').click();
        cy.get('[type=expression]').should('not.have.text');
        cy.get('[type=value]').should('have.text', '12');
    });

    it('output 6*2+18/9%5-4=10', () => {
        cy.get('button').contains("6").click();
        cy.get('[type=expression]').should('not.have.text');
        cy.get('[type=value]').should('have.text', '6');

        cy.get('button').contains('*').click();
        cy.get('[type=expression]').should('have.text', '6');
        cy.get('[type=value]').should('have.text', '*');

        cy.get('button').contains('2').click();
        cy.get('[type=expression]').should('have.text', '6*');
        cy.get('[type=value]').should('have.text', '2');

        cy.get('button').contains('+').click();
        cy.get('[type=expression]').should('have.text', '6*2');
        cy.get('[type=value]').should('have.text', '+');

        cy.get('button').contains('1').click();
        cy.get('[type=expression]').should('have.text', '6*2+');
        cy.get('[type=value]').should('have.text', '1');

        cy.get('button').contains('8').click();
        cy.get('[type=expression]').should('have.text', '6*2+');
        cy.get('[type=value]').should('have.text', '18');

        cy.get('button').contains('/').click();
        cy.get('[type=expression]').should('have.text', '6*2+18');
        cy.get('[type=value]').should('have.text', '/');

        cy.get('button').contains('9').click();
        cy.get('[type=expression]').should('have.text', '6*2+18/');
        cy.get('[type=value]').should('have.text', '9');

        cy.get('button').contains('%').click();
        cy.get('[type=expression]').should('have.text', '6*2+18/9');
        cy.get('[type=value]').should('have.text', '%');

        cy.get('button').contains('5').click();
        cy.get('[type=expression]').should('have.text', '6*2+18/9%');
        cy.get('[type=value]').should('have.text', '5');

        cy.get('button').contains('-').click();
        cy.get('[type=expression]').should('have.text', '6*2+18/9%5');
        cy.get('[type=value]').should('have.text', '-');

        cy.get('button').contains('4').click();
        cy.get('[type=expression]').should('have.text', '6*2+18/9%5-');
        cy.get('[type=value]').should('have.text', '4');
        
        cy.get('button').contains('=').click();
        cy.get('[type=expression]').should('not.have.text');
        cy.get('[type=value]').should('have.text', '10');
    });

    it('Invalid input format', () => {
        cy.contains("Invalid input format").should('not.exist')
        cy.get('button').contains("6").click();
        cy.get('[type=expression]').should('not.have.text');
        cy.get('[type=value]').should('have.text', '6');

        cy.get('button').contains('*').click();
        cy.get('[type=expression]').should('have.text', '6');
        cy.get('[type=value]').should('have.text', '*');

        cy.get('button').contains('=').click();
        cy.get('[type=value]').should('have.text', '*');

        cy.contains("Invalid input format").should('exist')
    });
})

describe('display tests (CC)', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/classes');
    });

    it('output 6*2=12', () => {
        cy.get('button').contains("6").click();
        cy.get('[type=expression]').should('not.have.text');
        cy.get('[type=value]').should('have.text', '6');
        cy.get('button').contains('*').click();
        cy.get('[type=expression]').should('have.text', '6');
        cy.get('[type=value]').should('have.text', '*');
        cy.get('button').contains('2').click();
        cy.get('[type=expression]').should('have.text', '6*');
        cy.get('[type=value]').should('have.text', '2');
        cy.get('button').contains('=').click();
        cy.get('[type=expression]').should('not.have.text');
        cy.get('[type=value]').should('have.text', '12');
    });

    it('output 6*2+18/9%5-4=10', () => {
        cy.get('button').contains("6").click();
        cy.get('[type=expression]').should('not.have.text');
        cy.get('[type=value]').should('have.text', '6');

        cy.get('button').contains('*').click();
        cy.get('[type=expression]').should('have.text', '6');
        cy.get('[type=value]').should('have.text', '*');

        cy.get('button').contains('2').click();
        cy.get('[type=expression]').should('have.text', '6*');
        cy.get('[type=value]').should('have.text', '2');

        cy.get('button').contains('+').click();
        cy.get('[type=expression]').should('have.text', '6*2');
        cy.get('[type=value]').should('have.text', '+');

        cy.get('button').contains('1').click();
        cy.get('[type=expression]').should('have.text', '6*2+');
        cy.get('[type=value]').should('have.text', '1');

        cy.get('button').contains('8').click();
        cy.get('[type=expression]').should('have.text', '6*2+');
        cy.get('[type=value]').should('have.text', '18');

        cy.get('button').contains('/').click();
        cy.get('[type=expression]').should('have.text', '6*2+18');
        cy.get('[type=value]').should('have.text', '/');

        cy.get('button').contains('9').click();
        cy.get('[type=expression]').should('have.text', '6*2+18/');
        cy.get('[type=value]').should('have.text', '9');

        cy.get('button').contains('%').click();
        cy.get('[type=expression]').should('have.text', '6*2+18/9');
        cy.get('[type=value]').should('have.text', '%');

        cy.get('button').contains('5').click();
        cy.get('[type=expression]').should('have.text', '6*2+18/9%');
        cy.get('[type=value]').should('have.text', '5');

        cy.get('button').contains('-').click();
        cy.get('[type=expression]').should('have.text', '6*2+18/9%5');
        cy.get('[type=value]').should('have.text', '-');

        cy.get('button').contains('4').click();
        cy.get('[type=expression]').should('have.text', '6*2+18/9%5-');
        cy.get('[type=value]').should('have.text', '4');
        
        cy.get('button').contains('=').click();
        cy.get('[type=expression]').should('not.have.text');
        cy.get('[type=value]').should('have.text', '10');
    });

    it('Invalid input format', () => {
        cy.contains("Invalid input format").should('not.exist')
        cy.get('button').contains("6").click();
        cy.get('[type=expression]').should('not.have.text');
        cy.get('[type=value]').should('have.text', '6');

        cy.get('button').contains('*').click();
        cy.get('[type=expression]').should('have.text', '6');
        cy.get('[type=value]').should('have.text', '*');

        cy.get('button').contains('=').click();
        cy.get('[type=value]').should('have.text', '*');

        cy.contains("Invalid input format").should('exist')
    });
})