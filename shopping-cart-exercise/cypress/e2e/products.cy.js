describe('Product listing', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/')
  });

  it('should display four products', () => {
    cy.get('.product').should('have.length', 4);
  })

  it('should display product info', () => {
    cy.get('.product').first().find('h2').should('have.text', 'A Sign of Four');
    cy.get('.product').first().find('h3').should('have.text', 'Sir Arthur Conan Doyle');
    cy.get('.product').first().find('p').first().should('have.text', 'Lorem ipsum');
    cy.get('.product').first().find('p').last().should('have.text', 'Pris: 200 kr');
    cy.get('.product').first().find('button').should('exist');
  })
})