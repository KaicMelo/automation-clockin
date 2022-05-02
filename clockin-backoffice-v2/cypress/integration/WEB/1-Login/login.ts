// describe("Logging in to the backoffice", () => {
//   beforeEach(() => {
//     cy.visit("/");
//   });

//   it("Verificar login invalido", () => {
//     cy.get("#email").type(Cypress.env('emailFake'));
//     cy.get("#password").type(Cypress.env('password'));

//     cy.get('button[type="submit"]').click();
//     cy.contains('.gate-error', 'Incorrect login was used.').should('be.visible');
//   });

//   it("Verificar senha invalida", () => {
//     cy.get('#email').type(Cypress.env('email'));
//     cy.get("#password").type('123456789');

//     cy.get('button[type="submit"]').click();

//     cy.contains('.gate-error', 'Incorrect password was used').should('be.visible');
//   });

//   it("Verificar Environment invalido", () => {
//     cy.get("#tenant").type('clockinBeta');

//     cy.get("#email").type(Cypress.env('email'));
//     cy.get("#password").type(Cypress.env('password'));

//     cy.contains('li', 'Environment not found').should('be.visible');
//   });

//   it("Verificar Organization invalido", () => {
//     cy.get(":nth-child(1) > .wrap--w-full > .side-content--right > .cw-btn-subtle").click();
//     cy.get('#organization').type("clockinTeste");
//     cy.get('.gate-btn').click();

//     cy.contains('p', 'Invalid organization, please try again.').should('be.visible');
//   });

//   it("Verificar esqueci minha senha com email aleatório", () => {
//     cy.get('.gate-nav').click();
//     cy.get('#email').type(Cypress.env('emailFake'));
//     cy.get('.gate-btn').click();

//     cy.contains('p', 'Invalid email account, please try again.').should('be.visible');
//   });

//   it("Verificar esqueci minha senha com email invalida", () => {
//     cy.get('.gate-nav').click();
//     cy.get('#email').type('clockin');

//     cy.contains('p', 'Invalid Email').should('be.visible');
//   });

//   it("Verificar esqueci minha senha com email valido", () => {
//     cy.get('.gate-nav').click();
//     cy.get('#email').type(Cypress.env('email'));
//     cy.get('.gate-btn').click();

//     cy.contains('p', ' An email with instructions to reset your password has been sent to ').should('be.visible');
//   });

//   it.only("Verificar esqueci minha senha com email valido depois fazer login", () => {
//     cy.get('.gate-nav').click();
//     cy.get('#email').type(Cypress.env('email'));
//     cy.get('.gate-btn').click();
//     cy.wait(2000);
//     cy.get('.gate-btn').click();
    
    
//     cy.get("#email").type(Cypress.env('email'));
//     cy.get("#password").type(Cypress.env('password'));

//     cy.get('button[type="submit"]').click();
//     cy.contains('cw-card-title', 'Select an environment').should('be.visible');
//   });
// });