describe('The Banking Page', () => {
    beforeEach(() => {
        cy.visit('');
        cy.visitRoute('[data-t-routing-banking]');

    });
    it('has the correct url displayed in the route', () => {
        cy.url().should('include', 'banking');
    });
    it('can do a deposit', () => {
        cy.get('[data-t-banking-amount-input]').type('100');
        cy.get('[data-t-banking-deposit-button').click();
        cy.get('[data-t-banking-balance]').should('contain', '$5,100.00');
        cy.get('[data-t-banking-amount-input]').should('be.empty');
        cy.focused().should('have.attr', 'data-t-banking-amount-input');
        //cy.screenshot();
    });
});