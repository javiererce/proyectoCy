const { describe } = require('mocha');
const { enabled } = require('wd/lib/commands');

describe("Blog de www.thefreerangetesters.com",()=>{
    beforeEach(()=>{
        cy.visit("https://www.freerangetesters.com/blog")
    })

    it('Validar su titulo', () => {
        cy.title().should("include","Blog | Free Range Testers")
    });

    it('Validar que sea visible', () => {
        cy.get('[data-hook="header-navigation__"] > .UlUPo4').should("be.visible")
    });

    it('Validar que exista el boton Cursos', () => {
        cy.contains('Cursos').should("exist")
    });

    it('Validar que exista el boton ', () => {
        cy.get('#comp-l02x1m8d3label').should("exist")
    });

    it('Validar que el boton este habilitado', () => {
        cy.get('#comp-l02x1m8d3label:enabled').should("not.be.true")
    });

    it('Validar que hay un texto llamado COMENTARIO', () => {
        cy.get('#comp-l02x1m8d2label').click()
        cy.wait(3)
        cy.title().should("include","Cursos | Free Range Testers")
        cy.get('[style="font-size:46px;"] > span').contains("COMENTARIOS").should("have.text","COMENTARIOS")
    });

    it('Validar que el boton de curso funcione ', () => {
        cy.get('#comp-l02x1m8d2label').should("exist").click()
        cy.title().should("contain","Cursos | Free Range Testers")
        cy.get('.font_3 > span').should("contain","Aprender puede ser fácil.")
        cy.get('#comp-l8ru5rvh1 > [data-testid="linkElement"] > .M3I7Z2').should("be.visible")
    });
   
})
