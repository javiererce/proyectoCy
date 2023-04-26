const { describe, it } = require("mocha");

describe("Login Feature",()=>{
    it('Success Lgin', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.get('#userName').should("be.visible").type('Maximiliano Erce')
        cy.get('#userEmail').should("be.visible").type('javiererce@gmail.com')
        cy.get('#currentAddress').should("be.visible").type('Laprida 443 San Isidro')
        cy.get('#permanentAddress').should("be.visible").type('Laprida 443 San Isidro')
        cy.get('#submit').should("be.visible").click({force:true})
    });
})