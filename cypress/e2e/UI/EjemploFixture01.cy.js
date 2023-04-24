require('@cypress/xpath');

describe("Pruebas de carga por Fixture", ()=>{
    beforeEach(()=>{
        cy.fixture('../fixture/ejemplo').then(function(data){
            globalThis.data = data;
        });
    });
    it('Test 01 cargando desde Json', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq","DEMOQA")
        cy.get('#userName').should("be.visible").type(data.nombre)
        cy.get('#userEmail').should("be.visible").type(data.email)
        cy.get('#currentAddress').should("be.visible").type(data.direccion01)
        cy.get('#permanentAddress').should("be.visible").type(data.direccion02)
        cy.get('#submit').should("be.visible").click()
    });

});
