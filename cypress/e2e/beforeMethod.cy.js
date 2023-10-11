// before(() => {
//   cy.log('Спрацьовує один раз перед всіма тестами');
// })

// beforeEach(() => {
//   cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');

//   cy.log('Open "Form Layouts" page');
//   cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
//   cy.get('[title="Forms"]').click();
//   cy.get('[title="Form Layouts"]').click();
// })

// it('Test 1', () => {
//   cy.contains('nb-card', 'Using the Grid').then(form => {
//     cy.wrap(form).find('[for="inputEmail1"]').should('contain', 'Email');
//     cy.wrap(form).find('[for="inputPassword2"]').should('contain', 'Password');
//   });
// })

// it('Test 2', () => {
//   cy.contains('nb-card', 'Using the Grid').then(form => {
//     cy.wrap(form).find('[for="inputEmail1"]').should('contain', 'Email');
//     cy.wrap(form).find('[for="inputPassword21"]').should('contain', 'Password');
//   });
// })

// it('Test 3', () => {
//   cy.contains('nb-card', 'Using the Grid').then(form => {
//     cy.wrap(form).find('[for="inputEmail1"]').should('contain', 'Email');
//     cy.wrap(form).find('[for="inputPassword2"]').should('contain', 'Password');
//   });
// })

// describe('Positive scenarios', () => {
//   before(() => {
//     cy.log('Positive scenarios');
//   })

//   beforeEach(() => {
//     cy.log('Positive scenarios');
//     cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');

//     cy.log('Open "Form Layouts" page');
//     cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
//     cy.get('[title="Forms"]').click();
//     cy.get('[title="Form Layouts"]').click();
//   })

//   it('Test 1', () => {
//     cy.contains('nb-card', 'Using the Grid').then(form => {
//       cy.wrap(form).find('[for="inputEmail1"]').should('contain', 'Email');
//       cy.wrap(form).find('[for="inputPassword2"]').should('contain', 'Password');
//     });
//   })

//   it('Test 2', () => {
//     cy.contains('nb-card', 'Using the Grid').then(form => {
//       cy.wrap(form).find('[for="inputEmail1"]').should('contain', 'Email');
//       cy.wrap(form).find('[for="inputPassword2"]').should('contain', 'Password');
//     });
//   })
// })


// describe('Negative scenarios', () => {
//   before(() => {
//     cy.log('Negative scenarios');
//   })

//   beforeEach(() => {
//     cy.log('Negative scenarios');
//     cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');

//     cy.log('Open "Form Layouts" page');
//     cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
//     cy.get('[title="Forms"]').click();
//     cy.get('[title="Form Layouts"]').click();
//   })

//   it('Test 1', () => {
//     cy.contains('nb-card', 'Using the Grid').then(form => {
//       cy.wrap(form).find('[for="inputEmail1"]').should('contain', 'Email');
//       cy.wrap(form).find('[for="inputPassword2"]').should('contain', 'Password');
//     });
//   })

//   it('Test 2', () => {
//     cy.contains('nb-card', 'Using the Grid').then(form => {
//       cy.wrap(form).find('[for="inputEmail1"]').should('contain', 'Email');
//       cy.wrap(form).find('[for="inputPassword2"]').should('contain', 'Password');
//     });
//   })
// })


beforeEach(() => {
  cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/1');

  cy.log('Open "Form Layouts" page');
  cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
  cy.get('[title="Forms"]').click();
  cy.get('[title="Form Layouts"]').click();
})

describe('Positive scenarios', () => {
  before(() => {
    cy.log('Positive scenarios');
  })

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
  before(() => {
    cy.log('Negative scenarios');
  })

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