// it('Test 1', () => {
//   cy.visit('https://google.com');
//   cy.contains('span', 'Увійти');
// })

// it('Test 2', () => {
//   cy.visit('https://google.com');
//   cy.contains('span', 'Увійти');
// })

// it('Test 3', () => {
//   cy.visit('https://google.com');
//   cy.contains('span', 'Увійти');
// })


// describe("Test suite with positive values", () => {
//   it('Test 1', () => {
//     cy.visit('https://google.com');
//     cy.contains('span', 'Увійти');
//   })
  
//   it('Test 2', () => {
//     cy.visit('https://google.com');
//     cy.contains('span', 'Увійти');
//   })
  
//   it('Test 3', () => {
//     cy.visit('https://google.com');
//     cy.contains('span', 'Увійти');
//   })
// })

// describe("Test suite with negative values", () => {
//   it('Test 1', () => {
//     cy.visit('https://google.com');
//     cy.contains('span', 'Увійти');
//   })
  
//   it('Test 2', () => {
//     cy.visit('https://google.com');
//     cy.contains('span', 'Увійти');
//   })
  
//   it('Test 3', () => {
//     cy.visit('https://google.com');
//     cy.contains('span', 'Увійти');
//   })
// })


describe("Authorization tests", () => {
  describe("Test suite with positive values", () => {
    it('Test 1', () => {
      cy.visit('https://google.com');
      cy.contains('span', 'Увійти');
    })
    
    it.skip('Test 2', () => {
      cy.visit('https://google.com');
      cy.contains('span', 'Увійти');
    })
    
    it('Test 3', () => {
      cy.visit('https://google.com');
      cy.contains('span', 'Увійти');
    })
  })
  
  describe("Test suite with negative values", () => {
    it('Test 1', () => {
      cy.visit('https://google.com');
      cy.contains('span', 'Увійти');
    })
    
    it.only('Test 2', () => {
      cy.visit('https://google.com');
      cy.contains('span', 'Увійти');
    })
    
    it('Test 3', () => {
      cy.visit('https://google.com');
      cy.contains('span', 'Увійти');
    })
  })
})