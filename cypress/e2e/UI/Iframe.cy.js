/// <reference types="Cypress" />
require('@cypress/xpath');

describe("Trabajando con patallas modales ",()=>{

    before(() =>{
        cy.visit("https://www.webdriveruniversity.com/IFrame/index.html")
        cy.title().should("exist").should("contains","WebDriver | IFrame")
        cy.get('#frame').iframe('body #button-find-out-more > b').should("exist")
    })

    it('Validar test con iframe', () => {
        
    })

})