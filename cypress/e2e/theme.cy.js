describe("Dark mode theme", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit("/", {
      onBeforeLoad(win) {
        win.localStorage.setItem("theme", "light");
      },
    });
    cy.get("html").should("not.have.attr", "data-theme");
  });

  it("toggles dark theme and persists to localStorage", () => {
    cy.get(".dark-mode-toggle").click();
    cy.get("html").should("have.attr", "data-theme", "dark");
    cy.window().its("localStorage.theme").should("eq", "dark");

    cy.get(".dark-mode-toggle").click();
    cy.get("html").should("not.have.attr", "data-theme");
    cy.window().its("localStorage.theme").should("eq", "light");
  });
});
