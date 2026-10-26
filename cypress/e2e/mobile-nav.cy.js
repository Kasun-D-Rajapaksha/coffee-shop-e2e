describe("Mobile navigation", () => {
  beforeEach(() => {
    cy.viewport("iphone-x");
    cy.visitHome();
  });

  it("opens and closes the mobile menu", () => {
    cy.get(".nav-toggle").click();
    cy.get("#mobile-nav").should("have.class", "open");
    cy.get(".nav-toggle").should("have.attr", "aria-expanded", "true");
    cy.get("body").should("have.css", "overflow", "hidden");

    cy.get('#mobile-nav a[href="#menu"]').click();
    cy.get("#mobile-nav").should("not.have.class", "open");
    cy.get(".nav-toggle").should("have.attr", "aria-expanded", "false");
    cy.get("body").should("not.have.css", "overflow", "hidden");
    cy.get("#menu").should("be.visible");
  });
});
