describe('the catchall route', () => {
    it('should send you to the home for anything it does not recognize', () => {
        cy.visit('michelleisthebest');
        cy.url().should('include', 'home');
    });
});