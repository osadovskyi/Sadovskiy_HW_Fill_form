beforeEach(() => {
  cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/1');

  cy.log('Open "Form Layouts" page');
  cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
  cy.get('[title="Forms"]').click();
  cy.get('[title="Form Layouts"]').click();
})

describe('Positive scenarios', () => {
  it('Test 1', () => {
    cy.contains('nb-card', 'Using the Grid').then(form => {
      cy.wrap(form).find('[for="inputEmail1"]').should('contain', 'Email');
      cy.wrap(form).find('[for="inputPassword2"]').should('contain', 'Password');
    });
  })

  it('Test 2', () => {
    cy.contains('nb-card', 'Using the Grid').then(form => {
      cy.wrap(form).find('[for="inputEmail1"]').should('contain', 'Email');
      cy.wrap(form).find('[for="inputPassword2"]').should('contain', 'Password');
    });
  })
})


describe('Negative scenarios', () => {
  it('Test 1', () => {
    cy.contains('nb-card', 'Using the Grid').then(form => {
      cy.wrap(form).find('[for="inputEmail1"]').should('contain', 'Email');
      cy.wrap(form).find('[for="inputPassword2"]').should('contain', 'Password');
    });
  })

  it('Test 2', () => {
    cy.contains('nb-card', 'Using the Grid').then(form => {
      cy.wrap(form).find('[for="inputEmail1"]').should('contain', 'Email');
      cy.wrap(form).find('[for="inputPassword2"]').should('contain', 'Password');
    });
  })

})

afterEach(() => {
  cy.log('виконується після кожного тесту')
})

after(() => {
  cy.log('виконується після всіх тестів')
})