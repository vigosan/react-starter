describe('client', function() {
  it('displays a welcome message', () => {
    cy.visit('/');
    cy.findByText(/hello react-starter/i);
  });
});
