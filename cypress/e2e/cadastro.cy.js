/// <reference types="cypress"/>
import { faker } from '@faker-js/faker'

describe('Funcionalidade: Contato', () => {
  
  beforeEach(() => {
    cy.visit('register.html')
  });
  
  it('Realizar Cadastro com sucesso', () => { 
    let email = `teste${Date.now()}@teste.com`
    cy.get('#name').type('Miguel Teles')
    cy.get('#email').type(email)
    cy.get('#password').type('Teste@123')
    cy.get('#confirm-password').type('Teste@123')
    cy.get('#terms-agreement').click()
    cy.get('#register-btn').click()
    cy.url().should('include', 'dashboard.html')
  });

});