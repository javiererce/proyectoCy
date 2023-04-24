import { describe } from "mocha";

describe("Podcast de www.freerangetesters.com",()=>{
    beforeEach(()=>{
        cy.visit("https://www.freerangetesters.com/")
    })

    it('Validar boton de podcast', () => {
        cy.get('#comp-l02x1m8d3label').should("exist").click({force:true})
        cy.get('.font_5 > [style="letter-spacing:normal;"] > span').should("be.visible")
    });
    it('Validar boton de podcast', () => {
        cy.get('#comp-l02x1m8d3label').should("exist").click({force:true})
        cy.get('.font_5 > [style="letter-spacing:normal;"] > span').should("be.visible")
    });
})