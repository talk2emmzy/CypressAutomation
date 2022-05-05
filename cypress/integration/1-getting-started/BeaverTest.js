<reference types="cypress" />

describe('Loacting Elements', function()
{
    it('Verify the user can login with a valid ID and Password', function()
    {
    cy.visit('http://demo.automationtesting.in/')
    //cy.title().should('eq','DataBeaver')
    cy.get("#enterimg").click()
    // cy.get("#inputPassword").type("123456789")
    // cy.get("[ng-hide='loginVm.logging']").click()
    
 })

//     it('Verify that the user can register', function()
//     {
//     cy.visit('http://23.22.151.143')
//     cy.title().should('eq','DataBeaver')
//     cy.get('a').click()
//     cy.get("#exampleInputEmail1").type("fghj")
//     cy.get("#exampleInputEmail2").type("dfghjk")
//     cy.get(":nth-child(3) > #exampleInputEmail4").type("rfghj@tdghd.com")
//     cy.get(":nth-child(4) > #exampleInputEmail4").type("09089988978")
//     cy.get(":nth-child(5) > #exampleInputEmail4").type("fghjk")
//     cy.get(".btn").click()
// })
//     it('Verify the user can ', function()
//     {
//     cy.visit('http://23.22.151.143')
//     cy.title().should('eq','DataBeaver')
//     cy.get("#inputEmail").type("talk2emmzy@gmail.com")
//     cy.get("#inputPassword").type("123456789")
//     cy.get("[ng-hide='loginVm.logging']").click()

// })

})