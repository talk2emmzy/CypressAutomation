describe('TEST SUITE', () => {
    
    it('verify page title Positive', () => 
    {
    cy.visit('http://demo.automationtesting.in')
    // cy.title().should('eq','DataBeaver')
     cy.get("#enterimg").click()

     Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    // cy.get("#inputPassword").type("123456789")
    // cy.get("[ng-hide='loginVm.logging']").click()
    
   
})
    //it('verify page title Positive', () => 
    //{
    //cy.visit('https://oms.omnibiz.com/#/')
   //cy.title().should('eq','Login')
    //cy.get("input.form__input").type("okoye@omnibiz.com")
    //})

    //it('verify page title Positive', () => 
    //{
    //cy.visit('https://oms.omnibiz.com/#/')
    //cy.title().should('eq','Login')
    //cy.get("input.form__input").type("okoye@omnibiz.com")
   //})
  })