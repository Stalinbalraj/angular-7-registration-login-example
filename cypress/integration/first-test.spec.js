describe("First test", () => {
  it("should visit login page", () => {
    cy.visit("/login");
    cy.get(".btn-link").click();
    cy.url().should("include", "/register");
   
  });
});

describe("User", () => {
  it("should register user", () => {
    cy.visit("/register");
    cy.get("#firstName").type("Stalin");
    cy.get("#lastName").type("balraj");
    cy.get("#username").type("Stalin");
    cy.get('#password').type('qwerty{enter}');
    
    
  });

  it("should login user", () => {
    cy.wait(2000);
    cy.get('#username').type("Stalin");
    cy.get('#password').type("qwerty");
    cy.get('.btn-primary').click();

    cy.get('h1').should('contain', 'Hi asdf');
    
  });
});
