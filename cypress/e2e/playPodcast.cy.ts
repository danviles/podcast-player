describe('E2E podcast player', () => {
  beforeEach('Frontpage can be opened', () => {
    cy.visit('http://localhost:5173/')
  })

  it ('Render search bar', () => {
    cy.get('input[placeholder="Search..."]').should('exist');
  })

  it('Search for Elvis', () => {
    cy.get('input[placeholder="Search..."]').click().type('Elvis{enter}');
  })

  it('Search for Elvis and check table', () => {
    cy.get('input[placeholder="Search..."]').click().type('Elvis{enter}');
    cy.get('table').should('exist')
    cy.get('table tbody tr').should('have.length.greaterThan', 1)
  })

  it('Reproduce first podcast of Elvis search and play', () => {
    cy.get('input[placeholder="Search..."]').click().type('Elvis{enter}');
    cy.get('table tbody tr').first().click()
    cy.url().should('include', '/podcast')
    cy.get('table').should('exist');
    cy.get('table tbody tr').should('have.length.greaterThan', 1);
    cy.get('table tbody tr').first().find('svg').click();
    cy.get('div[class="sticky bottom-0 z-10"]').should('exist');
    cy.get('.pr-2 > .gap-4 > .flex').click();
  })

})