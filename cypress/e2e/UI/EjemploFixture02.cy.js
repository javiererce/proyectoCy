const testData = require ("../../Fixture/titulos.json")
require('@cypress/xpath');

testData.forEach((testData) => {

    describe("Valida que "+ testData.title +" sea el titulo de "+testData.location,()=>{
        it('Validar que el titulo sea el correcto', () => {
            cy.visit(testData.location)
            cy.title().should("include",testData.title)
        })
    })
});

