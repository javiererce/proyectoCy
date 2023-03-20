require('@cypress/xpath');

describe("Testear la Home de www.freegrangetester", ()=>{
    beforeEach(()=>{
        cy.visit("https://www.freerangetesters.com/")
    });
    it('Should have a title', () => {
        cy.title().should("include","Aprender Testing")
        cy.get('#comp-l02x1m8d3label').click() 
        cy.get('#comp-l02x1m8d3label').click()
        cy.xpath('//*[@id="comp-l02x1m8d2label"]').click()   
    });

    it('Hay un link llamado blog en la barra de navegacion', () => {
        cy.get('#comp-l02x1m8d1label').should("have.text","Blog")    
    });

    it('Existe un boton llamado Empesa a aprenderen el HOME', () => {
        cy.visit("https://www.freerangetesters.com/")
        cy.get('#comp-krjarw4p > [data-testid="linkElement"] > .M3I7Z2').should("have.text","Empezá a aprender!").should("be.visible")
    });

    it('Determinar si un elemento existe', () => {
        cy.get('[style="letter-spacing:normal;"] > .color_15 > span').should("exist")
    }); 
});

//-------------------------

