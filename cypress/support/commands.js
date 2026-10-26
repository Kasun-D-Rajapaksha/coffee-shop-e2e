Cypress.Commands.add("visitHome", () => {
  cy.visit("/");
  cy.get("h1").should("be.visible");
});
