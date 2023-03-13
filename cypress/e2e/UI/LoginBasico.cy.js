import { beforeEach } from "mocha"
require('@cypress/xpath');

describe("Login de https://the-internet.herokuapp.com/login",()=>{
    beforeEach(()=>{
        cy.visit("https://the-internet.herokuapp.com/login")
    });

    it('Validar el Login con datos validos', () => {
        cy.title().should("contain","The Internet")
        cy.get('#username').should("be.visible").type("tomsmith")
        cy.get('#password').should("be.visible").type("SuperSecretPassword!")
        cy.get('.fa').should("be.visible").click({force:true})
        cy.get('#flash').should("contain"," You logged into a secure area!")
        cy.get('.subheader').should("exist")
    });

    it('Validar mensaje de error cuando nos logueamos con datos incorrectos', () => {
        cy.title().should("contain","The Internet")
        cy.get('#username').should("be.visible").type("tomsitha")
        cy.get('#password').should("be.visible").type("SuperSecreaword!")
        cy.get('.fa').should("be.visible").click({force:true})
        cy.get('#flash').should("be.visible").should("contain"," Your username is invalid!")
    });

});