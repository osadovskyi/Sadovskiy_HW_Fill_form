beforeEach(() => {
  cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/1');

  cy.log('Open "Form Layouts" page');
  cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
  cy.get('[title="Forms"]').click();
  cy.get('[title="Form Layouts"]').click();
})

it('Test 1', {retries: 2}, () => {
  cy.contains('nb-card1', 'Using the Grid').then(form => {
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
