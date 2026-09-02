/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';
import cadastroPage from '../support/pages/cadastro-page'

describe('Funcionalidade: Cadastro', () => {
  
  beforeEach(() => {
    cadastroPage.visitarPaginaCadastro()
  });

  it.skip('Realizar Cadastro com sucesso', () => { 
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

  it.skip('Falhar o Cadastro por não adicionar o nome', () => { 
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
  
  it.skip('Falhar o Cadastro por não adicionar o email', () => { 
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
  
  it.skip('Falhar o Cadastro por não adicionar a senha', () => { 
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
  
  it.skip('Falhar o Cadastro pois as senhas não estão iguais', () => { 
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

  it.skip('Falhar o Cadastro por não confirmar os termos de uso', () => { 
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

  it.skip('Realizar cadastro com sucesso usando comandos customizados', () => {
    let email = faker.internet.email()
    let nome = faker.person.fullName()  
    cy.preencherCadastro(
    nome,
    email,
    '40028922',
    'teste123',
    'teste123'
    )
    // Resultado
    cy.url().should('include', 'dashboard.html')
    cy.get('#user-name').should('contain', name)
  });

  it('Realizar cadastro com sucesso usando Page Objects', () => {
    let email = `teste${Date.now()}@teste.com`
    cadastroPage.preencherCadastro('nome', email, '40028922', 'teste123', 'teste123')
    // Resultado
    cy.url().should('include', 'dashboard.html')
  });

  it('Cadastro falhar utilizando Page Objects', () => {
    let email = `teste${Date.now()}@teste.com`
    cadastroPage.preencherCadastro('', email, '40028922', 'teste123', 'teste123')
    // Resultado
    cy.get('#register-form').should('contain', 'Nome deve ter pelo menos 2 caracteres')
  });

});