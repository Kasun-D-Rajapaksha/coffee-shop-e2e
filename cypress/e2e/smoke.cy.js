describe("Smoke", () => {
  it("loads the home page with expected title and hero", () => {
    cy.visit("/");
    cy.title().should("include", "Ember");
    cy.get("h1").should("contain.text", "Your Daily Dose of Happiness.");
  });

  it("serves critical static assets", () => {
    cy.request("/css/styles.css").its("status").should("eq", 200);
    cy.request("/js/main.js").its("status").should("eq", 200);
    cy.request("/assets/images/hero.webp").its("status").should("eq", 200);
  });
});
