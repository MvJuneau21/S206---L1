/// <reference = cypress>

describe("Testes de criação, registro e login", ()=>{
  it.skip("Teste de criação de usuario com sucesso", ()=>{
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type("MÁRMORE")
    cy.get('#Text1').type("MÁRMORE")
    cy.get('#username').type("MÁRMORE")
    cy.get('#password').type("MÁRMORE")
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should("contain.text", "Registration successful")
  })
})

it.skip("Teste criação de usuario com falha", () =>{
  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type("MÁRMORE")
    cy.get('#Text1').type("MÁRMORE")
    cy.get('#username').type("MÁRMORE")
    cy.get('.btn-primary').should("be.disabled")
})

it.skip("Teste de login com sucesso", ()=>{
  let infos = criarUser()
  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
  cy.get('#username').type(infos[0])
  cy.get('#password').type(infos[1])
  cy.get('.btn-primary').click()
  cy.get('h1.ng-binding').should('contain.text', infos[0])
})

it("Teste de login com delete", ()=>{
  let infos = criarUser()
  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
  cy.get('#username').type(infos[0])
  cy.get('#password').type(infos[1])
  cy.get('.btn-primary').click()
  cy.get('h1.ng-binding').should('contain.text', infos[0])
  cy.get('.ng-binding > a').click()
  cy.get('.btn').click()
  cy.get('#username').type(infos[0])
  cy.get('#password').type(infos[1])
  cy.get('.btn-primary').click()
})

function criarUser(){
  let hora = new Date().getHours().toString()
  let minuto = new Date().getMinutes().toString()
  let seg = new Date().getSeconds().toString()
  let ID = hora + minuto + seg +"ID"
  let Senha = hora + minuto + seg +"Senha"
  let Infos = [ID, Senha]

  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
  cy.get('.btn-link').click()
  cy.get('#firstName').type(ID)
  cy.get('#Text1').type(ID)
  cy.get('#username').type(ID)
  cy.get('#password').type(Senha)
  cy.get('.btn-primary').click()
  cy.get('.ng-binding').should("contain.text", "Registration successful")
  return Infos
}