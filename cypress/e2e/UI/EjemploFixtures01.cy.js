/// <reference types="Cypress" />
require('@cypress/xpath');

describe("Ejemplo con Fixture",()=>{

    before(function(){
        cy.visit("https://www.saucedemo.com/")
        cy.title().should("exist").should("contains","Swag Labs")
        cy.fixture('../Fixture/credenciales').then(function(data){
            globalThis.data = data;
        })
    })

    it('Validar el Login', () => {
        cy.get('[data-test="username"]').should("be.visible").type(data.nombre)
        cy.get('[data-test="password"]').should("be.visible").type(data.password)
        cy.get('[data-test="login-button"]').should("be.visible").click()
        cy.get('.title').should("be.visible")
        cy.title().should("contains","Swag Labs")
    })

})
//---------------------------------------------------------------------------------

