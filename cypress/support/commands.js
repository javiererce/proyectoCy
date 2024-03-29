
 Cypress.Commands.add('login', () => {
    cy.visit("https://the-internet.herokuapp.com")
    cy.request({
        method: "POST",
        url: "/authenticate",
        form:true,
        body: {username:"tomsmith",
        password:"SuperSecretPassword!"
       }
    })
    cy.getCookie("rack.session").should("exist")
    cy.visit("https://the-internet.herokuapp.com/secure")
 })
//---------------------------------------------------------
 Cypress.Commands.add('iframe', { prevSubject: 'element'}, (iframe, selector) => { 
    Cypress.log({
        name: 'iframe',
        consoleProps(){
            return{
                iframe:iframe,
            }
        }
    })
    return new Cypress.Promise(resolve =>{
        resolve(iframe.contents().find(selector));
    })
  })
//------------------------------------------------



//---------------------------------------------------------------