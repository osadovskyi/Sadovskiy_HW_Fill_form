
describe('Fill form test', () => {
    const dataFillForms = [
        {
            testData: {
                email: "tester1@gmail.com",
                password: "Password1"
            }
        },
        {
            testData: {
                email: "tester2@1secmail.com",
                password: "Password2"
            }
        },
        {
            testData: {
                email: "tester3@ukr.net",
                password: "Password3"
            }
        }
    ]

    dataFillForms.forEach(dataFillForm => {
        it(`Fill form with email ${dataFillForm.testData.email} and password ${dataFillForm.testData.password}`, () => {
            cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
            cy.get('.theme-preview[alt="Material Dark Theme"]').click();
            cy.get('[class="menu-title ng-tns-c141-9"]').click();
            cy.get('[class="menu-title ng-tns-c141-11"]').click();
            cy.get('#inputEmail1').type(dataFillForm.testData.email);
            cy.get('#inputPassword2').type(dataFillForm.testData.password);
        })
    })
});


describe('Fill Block Form', () => {
    const dataBlockForms = [
        {
            blockTestData: {
                FirstName: "tester",
                LastName: "wrong",
                Email: "tester@gmail.com",
                Website: "www.tester.com"
            },
            expectedResult: {
                FirstName: "tester",
                LastName: "wrong",
                Email: "tester@gmail.com",
                Website: "www.tester.com"  
            }
        },
        {
            blockTestData: {
                FirstName: "tester2",
                LastName: "wrong2",
                Email: "tester2@1secmail.com",
                Website: "www.tester2.ua"
            },
            expectedResult: {
                FirstName: "tester2",
                LastName: "wrong2",
                Email: "tester2@1secmail.com",
                Website: "www.tester2.ua"  
            }
        },
        {
            blockTestData: {
                FirstName: "tester3",
                LastName: "wrong3",
                Email: "tester3@ukr.net",
                Website: "www.tester3.eu"
            },
            expectedResult: {
                FirstName: "tester3",
                LastName: "wrong3",
                Email: "tester3@ukr.net",
                Website: "www.tester3.eu" 
            }   
        }
    ]

    dataBlockForms.forEach(dataBlockForm => {
        it(`Fill block form with Email ${dataBlockForm.blockTestData.Email} and Website ${dataBlockForm.blockTestData.Website}`, () => {
            cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
            cy.get('.theme-preview[alt="Material Dark Theme"]').click();
            cy.get('[class="menu-title ng-tns-c141-9"]').click();
            cy.get('[class="menu-title ng-tns-c141-11"]').click();
            cy.get('#inputFirstName').type(dataBlockForm.blockTestData.FirstName);
            cy.get('#inputLastName').type(dataBlockForm.blockTestData.LastName);
            cy.get('#inputEmail').type(dataBlockForm.blockTestData.Email);
            cy.get('#inputWebsite').type(dataBlockForm.blockTestData.Website);
            cy.get('#inputFirstName').should('have.value', dataBlockForm.expectedResult.FirstName);
            cy.get('#inputLastName').should('have.value', dataBlockForm.expectedResult.LastName);
            cy.get('#inputEmail').should('have.value', dataBlockForm.expectedResult.Email);
            cy.get('#inputWebsite').should('have.value', dataBlockForm.expectedResult.Website);

        })
    })
})






