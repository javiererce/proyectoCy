class freerangeHome{
    //Locators
    empezarButton(){
        return cy.get("#comp-krjarw4p > [data-testid='linkElement'] > .M3I7Z2")
    }
    //Acciones sobre los elementos
    navigateToHome(){
        cy.visit("https://www.freerangetesters.com/")
    }
   
}

export default freerangeHome