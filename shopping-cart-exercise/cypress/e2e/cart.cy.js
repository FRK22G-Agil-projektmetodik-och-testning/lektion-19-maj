describe('Cart', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/')

    // Inför varje testa lägg två produkter i varukorgen
    cy.get('.product > button').first().click();
    cy.get('.product > button').last().click();
  });

  it('should display sum of cart', () => {
    cy.get('.cart > p').should('have.text', '2');
  })

  it('should display number of items in cart', () => {
    cy.get('.cart__link').click();

    cy.get('.cart__items > ul > li').should('have.length', 2);
  })

  it('should remove a item in cart if clicked on it', () => {
    cy.get('.cart__link').click();

    cy.get('.cart__items > ul > li').first().click();

    cy.get('.cart__items > ul > li').should('have.length', 1);
  })

  it('should update sum after removing item in cart', () => {
    cy.get('.cart__link').click();

    cy.get('.cart__items > ul > li').first().click();

    cy.get('.cart__items > h3').last().should('have.text', 'Summa: 150 kr');
  });

  it('should display sum of cart items', () => {
    cy.get('.cart__link').click();

    cy.get('.cart__items > h3').last().should('have.text', 'Summa: 350 kr');
  });
})