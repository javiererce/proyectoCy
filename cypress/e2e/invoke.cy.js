const { should } = require('chai');

require('@cypress/xpath');

  describe("Alertas en Cypress",()=>{

    it('Invoke Text', () => {
      cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
      cy.title().should("eq","Input Validation")
      cy.wait(1000)
      cy.get('.page-body > :nth-child(5)').invoke("text").as("info")
      
      cy.get("@info").should("contains","The information")
      cy.get('#firstname').type("Maximiliano")
      cy.get('#surname').type("Erce Bessi")
      cy.get('#age').type(36)
      cy.get('#notes').type("Notas personales para escribir.")
      cy.get('[type="submit"]').click()
    });
   
  })