describe('The Home Component', () => {
    beforeEach(() => {
        cy.visit('');
    });
    it('what should it do?', () => {
        cy.url().should('include', 'home');
    });
});