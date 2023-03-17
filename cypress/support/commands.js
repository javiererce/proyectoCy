
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
// -- This is a child command --
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
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('bloqueToolsQA', (name,email,dir1,dir2) => {
    cy.get('#userName').should("be.visible").type(name)
    cy.get("#userEmail").should("be.visible").type(email)
    cy.get("#currentAddress").should("be.visible").type(dir1)
    cy.get("#permanentAddress").should("be.visible").type(dir2)
    cy.ge("submit").should("be.visible").click({force:true})
 })
