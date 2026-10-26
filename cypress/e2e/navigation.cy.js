describe("Navigation", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visitHome();
  });

  const sections = ["about", "menu", "hours", "contact"];

  sections.forEach((id) => {
    it(`desktop nav scrolls to #${id}`, () => {
      cy.get('nav[aria-label="Main"]').contains("a", new RegExp(id, "i")).click();
      cy.get(`#${id}`).should("be.visible");
      cy.url().should("include", `#${id}`);
    });
  });

  it('hero "Explore Our Menu" goes to menu', () => {
    cy.visit("/");
    cy.contains("a.btn-primary", "Explore Our Menu").click();
    cy.get("#menu").should("be.visible");
    cy.url().should("include", "#menu");
  });

  it('hero "Find Us" goes to contact', () => {
    cy.visit("/");
    cy.contains("a.btn-outline", "Find Us").click();
    cy.get("#contact").should("be.visible");
    cy.url().should("include", "#contact");
  });

  it("footer year matches current calendar year", () => {
    cy.get("#year").should("contain.text", String(new Date().getFullYear()));
  });

  it("Get Directions links to Google Maps", () => {
    cy.get("#contact")
      .contains("a", "Get Directions")
      .should("have.attr", "href")
      .and("include", "google.com/maps");
  });
});
