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

  it('should be able type in the forms', () => {
    cy.get('[name="title"]')
      .type('Christ Air')
      .should('have.value', 'Christ Air')
      .get('[name="stance"]')
      .select('regular')
      .should('have.value', 'regular')
      .get('[name="obstacle"]')
      .select('Ledge')
      .should('have.value', 'Ledge')
  })

  it('should be able to submit a new trick', () => {
    cy.get('.send-it-button').click().get('.trick-view').contains('Christ Air')
  })

  it('should be able to delete a trick', () => {
    cy.get('.trick-view')
      .contains('heelflip')
      .get('#deleteheelflip')
      .click()
      .get('.trick-view')
      .contains('heelflip')
      .should('not.exist')
  })
})
