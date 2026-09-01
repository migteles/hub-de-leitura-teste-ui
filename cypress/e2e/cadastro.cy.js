/// <reference types="cypress"/>
import { faker } from '@faker-js/faker'

describe('Funcionalidade: Cadastro', () => {
  
  beforeEach(() => {
    cy.visit('register.html')
  });
  
  afterEach(() => {
    cy.screenshot()
  });

  it('Realizar Cadastro com sucesso', () => { 
    let email = faker.internet.email()
    let nome = faker.person.fullName()
    cy.get('#name').type(nome)
    cy.get('#email').type(email)
    cy.get('#phone').type('11940028922')
    cy.get('#password').type('Teste@123')
    cy.get('#confirm-password').type('Teste@123')
    cy.get('#terms-agreement').check()
    cy.get('#register-btn').click()
    // Resultado
    cy.url().should('include', 'dashboard.html')
    cy.get('#user-name').should('contain', name)
  });

  it('Falhar o Cadastro por não adicionar o nome', () => { 
    let email = faker.internet.email()
    cy.get('#email').type(email)
    cy.get('#phone').type('11940028922')
    cy.get('#password').type('Teste@123')
    cy.get('#confirm-password').type('Teste@123')
    cy.get('#terms-agreement').check()
    cy.get('#register-btn').click()
    // Resultado
    cy.get('#register-form').should('contain', 'Nome deve ter pelo menos 2 caracteres')
  });
  
  it('Falhar o Cadastro por não adicionar o email', () => { 
    let nome = faker.person.fullName()
    cy.get('#name').type(nome)
    cy.get('#phone').type('11940028922')
    cy.get('#password').type('Teste@123')
    cy.get('#confirm-password').type('Teste@123')
    cy.get('#terms-agreement').check()
    cy.get('#register-btn').click()
    // Resultado
    cy.get('#register-form').should('contain', 'Email válido é obrigatório')
  });
  
  it('Falhar o Cadastro por não adicionar a senha', () => { 
    let email = faker.internet.email()
    let nome = faker.person.fullName()
    cy.get('#name').type(nome)
    cy.get('#email').type(email)
    cy.get('#phone').type('11940028922')
    cy.get('#terms-agreement').check()
    cy.get('#register-btn').click()
    // Resultado
    cy.get('#register-form').should('contain', 'Por favor, crie uma senha com pelo menos 6 caracteres.')
  });
  
  it('Falhar o Cadastro pois as senhas não estão iguais', () => { 
    let email = faker.internet.email()
    let nome = faker.person.fullName()
    cy.get('#name').type(nome)
    cy.get('#email').type(email)
    cy.get('#phone').type('11940028922')
    cy.get('#password').type('Teste@123')
    cy.get('#confirm-password').type('Teste@12')
    cy.get('#terms-agreement').check()
    cy.get('#register-btn').click()
    // Resultado
    cy.get('#register-form').should('contain', 'Senhas não coincidem')
  });

  it('Falhar o Cadastro por não confirmar os termos de uso', () => { 
    let email = faker.internet.email()
    let nome = faker.person.fullName()
    cy.get('#name').type(nome)
    cy.get('#email').type(email)
    cy.get('#phone').type('11940028922')
    cy.get('#password').type('Teste@123')
    cy.get('#confirm-password').type('Teste@123')
    cy.get('#register-btn').click()
    // Resultado
    cy.get('#register-form').should('contain', 'Você deve aceitar os termos de uso')
  });
});