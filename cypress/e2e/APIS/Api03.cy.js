import { beforeEach } from "mocha"
require('@cypress/xpath');

describe("Loguear -Basic Auth y Auth con Forms",function(){
    it('Loguea usando Auth de Cypress', () => {
        cy.visit("https://the-internet.herokuapp.com/basic_auth",{
            auth:{
                username: "admin",
                password: "admin"
            }
        })
        cy.get("p").should("include.text","Congratulations!")
    })

    it('Hago login en un form usando un request del tipo POST', () => {
        cy.visit("https://the-internet.herokuapp.com")
        cy.request({
            method: "POST",
            url: "/authenticate",
            form:true,
            body: {username:"tomsmith ",
            password:"SuperSecretPassword!"}
        })
        cy.getCookie("rack.session").should("exist")
        cy.visit("https://the-internet.herokuapp.com/secure")
        cy.title().should("exist").should("contain","The Internet")
    })

})