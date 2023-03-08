
///<reference types="Cypress" />
require('@cypress/xpath');

describe('Practica con CheckBox', () => {
    beforeEach(()=>{
        cy.visit("https://testingqarvn.com.es/prueba-de-campos-checkbox/")
        cy.title().should("eq","Prueba de campos Checkbox | TestingQaRvn")
        cy.wait(1000)
    })

    it('logearse con datos validos', () => {
        cy.get('#wsf-1-field-29').should("be.visible").type("Maximiliano")
        cy.get('#wsf-1-field-30').should("be.visible").type("Erce")
        cy.get('#wsf-1-field-31').should("be.visible").type("javier@gmail.com")
        cy.get('#wsf-1-field-32').should("be.visible").type("0145857425")
        cy.get('#wsf-1-field-33').should("be.visible").type("Av siempre viva")
        cy.get('#wsf-1-label-36-row-3').should("be.visible").click()
        cy.get('#wsf-1-field-34').should("be.visible").click()
        cy.get('p').contains("Gracias por tu encuesta.")
        
    });

    it('logearse con datos con mail NO validos', () => {
        cy.get('#wsf-1-field-29').should("be.visible").type("Maximiliano")
        cy.get('#wsf-1-field-30').should("be.visible").type("Erce")
        cy.get('#wsf-1-field-31').should("be.visible").type("javiergmail.com")
        cy.get('#wsf-1-field-32').should("be.visible").type("0145857425")
        cy.get('#wsf-1-field-33').should("be.visible").type("Av siempre viva")
        cy.get('#wsf-1-label-36-row-3').should("be.visible").click()
        cy.get('#wsf-1-field-34').should("be.visible").click()
        cy.get('#wsf-1-invalid-feedback-31').contains("Please provide a valid email.")        
    });

}) 