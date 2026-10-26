describe("Menu tabs", () => {
  const categories = [
    "espresso",
    "cappuccino",
    "latte",
    "americano",
    "iced",
    "signature",
    "pastries",
  ];

  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit("/#menu");
    cy.get("#menu").should("be.visible");
  });

  categories.forEach((category) => {
    it(`shows ${category} panel when tab is selected`, () => {
      cy.get(`.menu-tab[data-category="${category}"]`).click();
      cy.get(`.menu-tab[data-category="${category}"]`).should(
        "have.attr",
        "aria-selected",
        "true"
      );
      cy.get(`.menu-category[data-category="${category}"]`)
        .should("be.visible")
        .and("not.have.attr", "hidden");
      cy.get(`.menu-category[data-category="${category}"] .menu-card`).should(
        "have.length.at.least",
        1
      );
      cy.get(
        `.menu-category[data-category="${category}"] img[loading="lazy"]`
      ).first()
        .should("be.visible")
        .and(($img) => {
          expect($img[0].naturalWidth).to.be.greaterThan(0);
        });
    });
  });
});
