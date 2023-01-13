/* eslint-disable no-undef */

describe('keyboard functional components', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('input numbers/operands 61-7+8*2/9=55.778', () => {
        cy.get('[type=value]').should('have.text', '0');
        cy.get('[type=expression]').should('not.have.text');

        cy.get('button').contains("6").click();
        cy.get('button').contains("1").click();
        cy.get('button').contains("-").click();
        cy.get('button').contains("7").click();
        cy.get('button').contains("+").click();
        cy.get('button').contains("8").click();
        cy.get('button').contains("*").click();
        cy.get('button').contains("2").click();
        cy.get('button').contains("/").click();
        cy.get('button').contains("9").click();
        cy.get('[type=expression]').should('have.text', "61-7+8*2/");
        cy.get('[type=value]').should('have.text', '9');
        cy.get('button').contains("=").click();

        cy.get('[type=value]').should('have.text', '55.778');
    });

    it('input non-integer numbers: 2 * (5.2 + .6) + (1.3 / .2)', () => {
        cy.get('[type=value]').should('have.text', '0');
        cy.get('button').contains('2').click();
        cy.get('button').contains('*').click();
        cy.get('button').contains('(').click();
        cy.get('button').contains('5').click();
        cy.get('button').contains('.').click();
        cy.get('button').contains('2').click();
        cy.get('button').contains('+').click();
        cy.get('button').contains('.').click();
        cy.get('button').contains('6').click();
        cy.get('button').contains(')').click();
        cy.get('button').contains('+').click();
        cy.get('button').contains('(').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('.').click();
        cy.get('button').contains('3').click();
        cy.get('button').contains('/').click();
        cy.get('button').contains('.').click();
        cy.get('button').contains('2').click();
        cy.get('button').contains(')').click();
        cy.get('[type=expression]').should('have.text', '2*(5.2+0.6)+(1.3/0.2');
        cy.get('[type=value]').should('have.text', ')');
        cy.get('button').contains('=').click();
        cy.get('[type=value]').should('have.text', '18.100');
    }) 

    it('big numbers : 56312*(45232.2+81235678.56)+(10395/34515243)%4567', () => {
        cy.get('[type=value]').should('have.text', '0');
        cy.get('button').contains('5').click();
        cy.get('button').contains('6').click();
        cy.get('button').contains('3').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('2').click();
        cy.get('button').contains('*').click();
        cy.get('button').contains('(').click();
        cy.get('button').contains('4').click();
        cy.get('button').contains('5').click();
        cy.get('button').contains('2').click();
        cy.get('button').contains('3').click();
        cy.get('button').contains('2').click();
        cy.get('button').contains('.').click();
        cy.get('button').contains('2').click();
        cy.get('button').contains('+').click();
        cy.get('button').contains('8').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('2').click();
        cy.get('button').contains('3').click();
        cy.get('button').contains('5').click();
        cy.get('button').contains('6').click();
        cy.get('button').contains('7').click();
        cy.get('button').contains('8').click();
        cy.get('button').contains('.').click();
        cy.get('button').contains('5').click();
        cy.get('button').contains('6').click();
        cy.get('button').contains(')').click();
        cy.get('button').contains('+').click();
        cy.get('button').contains('(').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('0').click();
        cy.get('button').contains('3').click();
        cy.get('button').contains('9').click();
        cy.get('button').contains('5').click();
        cy.get('button').contains('/').click();
        cy.get('button').contains('3').click();
        cy.get('button').contains('4').click();
        cy.get('button').contains('5').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('5').click();
        cy.get('button').contains('2').click();
        cy.get('button').contains('4').click();
        cy.get('button').contains('3').click();
        cy.get('button').contains(')').click();
        cy.get('button').contains('%').click();
        cy.get('button').contains('4').click();
        cy.get('button').contains('5').click();
        cy.get('button').contains('6').click();
        cy.get('button').contains('7').click();
        cy.get('button').contains('=').click();
        cy.get('[type=value]').should('have.text', '4577090646717.120');
    }) 

    it('input numbers with brackets: (5-8)*(2+6)+(13/.2)%(13%2)', () => {
        cy.get('button').contains('(').click();
        cy.get('button').contains('5').click();
        cy.get('button').contains('-').click();
        cy.get('button').contains('8').click();
        cy.get('button').contains(')').click();
        cy.get('button').contains('*').click();
        cy.get('button').contains('(').click();
        cy.get('button').contains('2').click();
        cy.get('button').contains('+').click();
        cy.get('button').contains('6').click();
        cy.get('button').contains(')').click();
        cy.get('button').contains('+').click();
        cy.get('button').contains('(').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('3').click();
        cy.get('button').contains('/').click();
        cy.get('button').contains('.').click();
        cy.get('button').contains('2').click();
        cy.get('button').contains(')').click();
        cy.get('button').contains('%').click();
        cy.get('button').contains('(').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('3').click();
        cy.get('button').contains('%').click();
        cy.get('button').contains('2').click();
        cy.get('button').contains(')').click();
        cy.get('button').contains('=').click();
        cy.get('[type=value]').should('have.text', '-24');
    }) 

    it('Change sign', () => {
        cy.get('[type=expression]').should('not.have.text');
        cy.get('[type=value]').should('have.text', '0');
        cy.get('button').contains('1').click();
        cy.get('button').contains('5').click();
        cy.get('button').contains('3').click();
        cy.get('[type=value]').should('have.text', '153');
        cy.get('button').contains('±').click();
        cy.get('[type=value]').should('have.text', '-153');
    })

    it('Clean function', () => {
        cy.get('[type=expression]').should('not.have.text');
        cy.get('[type=value]').should('have.text', '0');
        cy.get('button').contains('1').click();
        cy.get('button').contains('5').click();
        cy.get('button').contains('3').click();
        cy.get('button').contains('+').click();
        cy.get('button').contains('4').click();

        cy.get('[type=expression]').should('have.text', "153+");
        cy.get('[type=value]').should('have.text', '4');

        cy.get('button').contains('С').click();
        
        cy.get('[type=expression]').should('not.have.text');
        cy.get('[type=value]').should('have.text', '0');
    })
});

describe('keyboard class components', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/classes');
    });

    it('input numbers/operands 61-7+8*2/9=55.778', () => {
        cy.get('[type=value]').should('have.text', '0');
        cy.get('[type=expression]').should('not.have.text');

        cy.get('button').contains("6").click();
        cy.get('button').contains("1").click();
        cy.get('button').contains("-").click();
        cy.get('button').contains("7").click();
        cy.get('button').contains("+").click();
        cy.get('button').contains("8").click();
        cy.get('button').contains("*").click();
        cy.get('button').contains("2").click();
        cy.get('button').contains("/").click();
        cy.get('button').contains("9").click();
        cy.get('[type=expression]').should('have.text', "61-7+8*2/");
        cy.get('[type=value]').should('have.text', '9');
        cy.get('button').contains("=").click();

        cy.get('[type=value]').should('have.text', '55.778');
    });

    it('input non-integer numbers: 2*(5.2+.6)+(1.3/.2)', () => {
        cy.get('button').contains('2').click();
        cy.get('button').contains('*').click();
        cy.get('button').contains('(').click();
        cy.get('button').contains('5').click();
        cy.get('button').contains('.').click();
        cy.get('button').contains('2').click();
        cy.get('button').contains('+').click();
        cy.get('button').contains('.').click();
        cy.get('button').contains('6').click();
        cy.get('button').contains(')').click();
        cy.get('button').contains('+').click();
        cy.get('button').contains('(').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('.').click();
        cy.get('button').contains('3').click();
        cy.get('button').contains('/').click();
        cy.get('button').contains('.').click();
        cy.get('button').contains('2').click();
        cy.get('button').contains(')').click();
        cy.get('[type=expression]').should('have.text', '2*(5.2+0.6)+(1.3/0.2');
        cy.get('[type=value]').should('have.text', ')');
        cy.get('button').contains('=').click();
        cy.get('[type=value]').should('have.text', '18.100');
    }) 

    it('big numbers : 56312*(45232.2+81235678.56)+(10395/34515243)%4567', () => {
        cy.get('[type=value]').should('have.text', '0');
        cy.get('button').contains('5').click();
        cy.get('button').contains('6').click();
        cy.get('button').contains('3').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('2').click();
        cy.get('button').contains('*').click();
        cy.get('button').contains('(').click();
        cy.get('button').contains('4').click();
        cy.get('button').contains('5').click();
        cy.get('button').contains('2').click();
        cy.get('button').contains('3').click();
        cy.get('button').contains('2').click();
        cy.get('button').contains('.').click();
        cy.get('button').contains('2').click();
        cy.get('button').contains('+').click();
        cy.get('button').contains('8').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('2').click();
        cy.get('button').contains('3').click();
        cy.get('button').contains('5').click();
        cy.get('button').contains('6').click();
        cy.get('button').contains('7').click();
        cy.get('button').contains('8').click();
        cy.get('button').contains('.').click();
        cy.get('button').contains('5').click();
        cy.get('button').contains('6').click();
        cy.get('button').contains(')').click();
        cy.get('button').contains('+').click();
        cy.get('button').contains('(').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('0').click();
        cy.get('button').contains('3').click();
        cy.get('button').contains('9').click();
        cy.get('button').contains('5').click();
        cy.get('button').contains('/').click();
        cy.get('button').contains('3').click();
        cy.get('button').contains('4').click();
        cy.get('button').contains('5').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('5').click();
        cy.get('button').contains('2').click();
        cy.get('button').contains('4').click();
        cy.get('button').contains('3').click();
        cy.get('button').contains(')').click();
        cy.get('button').contains('%').click();
        cy.get('button').contains('4').click();
        cy.get('button').contains('5').click();
        cy.get('button').contains('6').click();
        cy.get('button').contains('7').click();
        cy.get('button').contains('=').click();
        cy.get('[type=value]').should('have.text', '4577090646717.120');
    }) 

    it('input numbers with brackets: (5-8)*(2+6)+(13/.2)%(13%2)', () => {
        cy.get('button').contains('(').click();
        cy.get('button').contains('5').click();
        cy.get('button').contains('-').click();
        cy.get('button').contains('8').click();
        cy.get('button').contains(')').click();
        cy.get('button').contains('*').click();
        cy.get('button').contains('(').click();
        cy.get('button').contains('2').click();
        cy.get('button').contains('+').click();
        cy.get('button').contains('6').click();
        cy.get('button').contains(')').click();
        cy.get('button').contains('+').click();
        cy.get('button').contains('(').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('3').click();
        cy.get('button').contains('/').click();
        cy.get('button').contains('.').click();
        cy.get('button').contains('2').click();
        cy.get('button').contains(')').click();
        cy.get('button').contains('%').click();
        cy.get('button').contains('(').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('3').click();
        cy.get('button').contains('%').click();
        cy.get('button').contains('2').click();
        cy.get('button').contains(')').click();
        cy.get('button').contains('=').click();
        cy.get('[type=value]').should('have.text', '-24');
    }) 

    it('Change sign', () => {
        cy.get('[type=expression]').should('not.have.text');
        cy.get('[type=value]').should('have.text', '0');
        cy.get('button').contains('1').click();
        cy.get('button').contains('5').click();
        cy.get('button').contains('3').click();
        cy.get('[type=value]').should('have.text', '153');
        cy.get('button').contains('±').click();
        cy.get('[type=value]').should('have.text', '-153');
    })

    it('Clean function', () => {
        cy.get('[type=expression]').should('not.have.text');
        cy.get('[type=value]').should('have.text', '0');
        cy.get('button').contains('1').click();
        cy.get('button').contains('5').click();
        cy.get('button').contains('3').click();
        cy.get('button').contains('+').click();
        cy.get('button').contains('4').click();

        cy.get('[type=expression]').should('have.text', "153+");
        cy.get('[type=value]').should('have.text', '4');

        cy.get('button').contains('С').click();
        
        cy.get('[type=expression]').should('not.have.text');
        cy.get('[type=value]').should('have.text', '0');
    })
  });
  