it('passes', () => {
  cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');

  cy.log('Open "Form Layouts" page');
  cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
  cy.get('[title="Forms"]').click();
  cy.get('[title="Form Layouts"]').click();

  // cy.log('Verify text in elements of Using the Grid form');
  // cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email');
  // cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password');

  // cy.log('Verify text in elements of Using the Basic form');
  // cy.contains('nb-card', 'Basic form').find('[for="exampleInputEmail1"]').should('contain', 'Email');
  // cy.contains('nb-card', 'Basic form').find('[for="exampleInputPassword1"]').should('contain', 'Password');


  // selenium like solution
  // const usingTheGridForm = cy.contains('nb-card', 'Using the Grid');
  // const basicForm = cy.contains('nb-card', 'Basic form');

  // cy.log('Verify text in elements of Using the Grid form');
  // usingTheGridForm.find('[for="inputEmail1"]').should('contain', 'Email');
  // usingTheGridForm.find('[for="inputPassword2"]').should('contain', 'Password');

  // cy.log('Verify text in elements of Using the Basic form');
  // basicForm.find('[for="exampleInputEmail1"]').should('contain', 'Email');
  // basicForm.find('[for="exampleInputPassword1"]').should('contain', 'Password');


  cy.contains('nb-card', 'Using the Grid').then(form => {

    cy.wrap(form).find('[for="inputEmail1"]').should('contain', 'Email');
    cy.wrap(form).find('[for="inputPassword2"]').should('contain', 'Password');
    
  });

})
