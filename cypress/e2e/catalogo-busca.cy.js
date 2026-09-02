/// <reference types="cypress"/>
import catalogo from "../fixtures/livros.json"

describe('Funcionalidade: Busca no Catalogo de Livros', () => {

    beforeEach(() => {
        cy.visit('catalog.html')
    });

    it('Deve buscar o livro 1984 com sucesso', () => {
        cy.get('#search-input').type('1984')
        // Resultado
        cy.get('.card-title > .text-dark').should('contain', '1984')
    });

    it('Deve buscar um livro do arquivo da massa de dados', () => {
        cy.get('#search-input').type(catalogo[0].livro)
        // Resultado
        cy.get('.card-title > .text-dark').should('contain', catalogo[0].livro)
    });

    it('Deve buscar um livro com fixture', () => {
        cy.fixture('livros').then((cat) =>{
            cy.get('#search-input').type(cat[0].livro)
            // Resultado
            cy.get('.card-title > .text-dark').should('contain', cat[0].livro)
        })
    });

    it.only('Deve buscar um livro com fixture', () => {
        cy.fixture('livros').then((cat) =>{
            cat.forEach(item =>{
                cy.get('#search-input').clear().type(item.livro)
                // Resultado
                cy.get('.card-title > .text-dark').should('contain', item.livro)
            })
        })
    });

})