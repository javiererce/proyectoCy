import { beforeEach } from "mocha"
require('@cypress/xpath');

describe("Sesiones y Cookies",()=>{
    beforeEach(()=>{
        cy.visit("https://the-internet.herokuapp.com/login")
        cy.title().should("contain","The Internet")
    });
    it('Sin sesion guardada', () => {
        cy.get("#username").should("be.visible").type("tomsmith")
        cy.get('#password').should("be.visible").type("SuperSecretPassword!")
        cy.get('.fa').should("be.visible").click()
        cy.get('#flash').should("contain","You logged into a secure area!")
        cy.getCookies().should("have.length",5).then((cookie)=>{
            expect(cookie[0]).to.have.property("name","optimizelyPendingLogEvents")
        })
    })
    it('Seteo de Cookie', () => {
        cy.get("#username").should("be.visible").type("tomsmith")
        cy.get('#password').should("be.visible").type("SuperSecretPassword!")
        cy.get('.fa').should("be.visible").click()
        cy.get('#flash').should("contain","You logged into a secure area!")
        cy.getCookie("cook").should("not.exist")
    })
})