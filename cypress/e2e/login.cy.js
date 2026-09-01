/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('login.html')
    });

    it('Login de usuário realizado com sucesso', () => {
        cy.get('#email').type('usuario@teste.com')
        cy.get('#password').type('user123')
        cy.get('#login-btn').click()
        /// Resultado
        cy.get('#alert-container').should('contain', 'Login realizado com sucesso!')
        cy.url().should('include', 'dashboard.html')
    });

    it('Login usuario normal usando comandos customizados', () => {
        cy.login('usuario@teste.com', 'user123')
    });

    it('Login admin usando comandos customizados', () => {
        cy.login('admin@biblioteca.com', 'admin123')
        /// Resultado
        cy.get('#alert-container').should('contain', 'Login realizado com sucesso!')
        cy.url().should('include', 'dashboard.html')
    });

});