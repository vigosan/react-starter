describe('client', function() {
  it('displays a welcome message', () => {
    cy.visit('/');
    cy.get('h1').contains(/hello react-starter!/i);
  });
});
