it('Serch term "Cypress"', () => {
  cy.visit('https://google.com');

  cy.get('.gLFyf').type('Cypress');
  cy.get('div.wM6W7d').first().should('contain', 'cypress');
})

it('Serch term "wiki"', () => {
  cy.visit('https://google.com');

  cy.get('.gLFyf').type('wiki');
  cy.get('div.wM6W7d').first().should('contain', 'wikipedia');
})

describe('multiple search tests', () => {

  const searchTerms = [
    {
      testData: 'Cypress',
      expectedResult: 'cypress'
    },
    {
      testData: 'wiki',
      expectedResult: 'wikipedia'
    },
    {
      testData: 'ama',
      expectedResult: 'Amazon'
    },
    {
      testData: 'roz',
      expectedResult: 'rozetka'
    },
    {
      testData: 'eldora',
      expectedResult: 'eldorado'
    }
  ]

  searchTerms.forEach(searchTerm => {
    it(`Serch term: ${searchTerm.testData}`, () => {
      cy.visit('https://google.com');

      cy.get('.gLFyf').type(searchTerm.testData);
      cy.get('div.wM6W7d').first().should('contain', searchTerm.expectedResult);
    })
  })

})

describe('Another option for multiple tests execution', () => {
  const searchTest = (searchTerm) => {
    return () => {
      cy.visit('https://google.com');

      cy.get('.gLFyf').type(searchTerm.testData);
      cy.get('div.wM6W7d').first().should('contain', searchTerm.expectedResult);
    };
  };

  it('test1', searchTest({
    testData: 'Cypress',
    expectedResult: 'cypress'
  }));

  it('test2', searchTest({
    testData: 'wiki',
    expectedResult: 'wikipedia'
  }));

  it('test3', searchTest({
    testData: 'ama',
    expectedResult: 'Amazon'
  }));

});