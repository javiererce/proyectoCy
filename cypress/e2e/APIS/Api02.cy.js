import { beforeEach } from "mocha"
require('@cypress/xpath');

describe("Pruebas 02 de APIS con Cypress",()=>{
    it('El endpoint PUT responde con status 200', () => {
        cy.request({
            url:"https://jsonplaceholder.typicode.com/posts/2"
        }).then((response)=>{
            expect(response.status).to.eq(200)
        })
    })
    it('Validar el correcto funcionamiento del request PUT', () => {
        cy.request("PUT","https://jsonplaceholder.typicode.com/posts/2",{
            title: "El señor de los anillos",
            body: "Una pelicula de J. R. R. Tolkien"
        }).then((response) => {
            expect(response.body).to.have.property("title","El señor de los anillos")
            expect(response.body).to.have.property("body","Una pelicula de J. R. R. Tolkien")
        })
    })
    it('Validar el correcto funcionamiento del request DELETE', () => {
        cy.request("DELETE","https://jsonplaceholder.typicode.com/posts/2")
    })
    
});