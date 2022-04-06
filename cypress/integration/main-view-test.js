describe('Sick Trick tests', () => {
  it('should render a title upon load', () => {
    cy.visit('http://localhost:3000/').get('.App').contains('Sick Trick Wish List')
  })

  it('should render an input form', () => {
    cy.get('[name="title"]')
      .should('be.visible')
      .get('[name="stance"]')
      .should('be.visible')
      .get('[name="obstacle"]')
      .should('be.visible')
  })
})
