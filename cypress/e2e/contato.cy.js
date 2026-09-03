describe('Funcionalidade: Contato', () => {
  
  beforeEach(() => {
    cy.visit('index.html')
  });

  afterEach(() => {
    cy.screenshot()
  });
  
  it('Deve preencher o formulário de contato com sucesso', () => {
    cy.get('[name="name"]').type('Miguel Teles')
    cy.get('[name="email"]').type('miguelteles@teste.com')
    cy.get('[name="subject"]').select('Suporte Técnico')
    cy.get('[name="message"]').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    cy.contains('#alert-container', 'Contato enviado com sucesso!').should('be.visible')
  });

  it('Deve validar mensagem de erro sem preencher o nome', () => {
    cy.get('[name="email"]').type('miguelteles@teste.com')
    cy.get('[name="subject"]').select('Suporte Técnico')
    cy.get('[name="message"]').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    cy.contains('#alert-container', 'Por favor, preencha o campo Nome.').should('be.visible')
  });

  it('Deve validar mensagem de erro sem preencher o email', () => {
    cy.get('[name="name"]').type('Miguel Teles')
    cy.get('[name="subject"]').select('Suporte Técnico')
    cy.get('[name="message"]').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    cy.contains('#alert-container', 'Por favor, preencha o campo E-mail.').should('be.visible')
  });

  it('Deve validar mensagem de erro sem selecionar o assunto', () => {
    cy.get('[name="name"]').type('Miguel Teles')
    cy.get('[name="email"]').type('miguelteles@teste.com')
    cy.get('[name="message"]').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    cy.contains('#alert-container', 'Por favor, selecione o Assunto.').should('be.visible')
  });

  it('Deve validar mensagem de erro sem preencher a mensagem', () => {
    cy.get('[name="name"]').type('Miguel Teles')
    cy.get('[name="email"]').type('miguelteles@teste.com')
    cy.get('[name="subject"]').select('Suporte Técnico')
    cy.get('#btn-submit').click()
    cy.contains('#alert-container', 'Por favor, escreva sua Mensagem.').should('be.visible')
  });

});