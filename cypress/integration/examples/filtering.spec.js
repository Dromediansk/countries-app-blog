beforeEach(() => {
  cy.visit("/data");
});

describe("Filter", () => {
  it("Focus on the country input", () => {
    cy.get('input[name="name"]').should("be.focused");
  });

  it("Accepts input values", () => {
    const countryValue = "us";
    const capitalValue = "b";
    const populationValue = "500000";
    cy.get('input[name="name"]')
      .type(countryValue)
      .should("have.value", countryValue);
    cy.get(".countries-container > div").should($divs => {
      expect($divs).to.have.length(8);
    });

    cy.get('input[name="capital"]')
      .type(capitalValue)
      .should("have.value", capitalValue);
    cy.get(".countries-container > div").should($divs => {
      expect($divs).to.have.length(2);
    });

    cy.get('input[name="population"]')
      .type(populationValue)
      .should("have.value", populationValue);
    cy.get(".countries-container > div").should($divs => {
      expect($divs).to.have.length(1);
      expect($divs.eq(0)).to.contain("Australia");
    });
  });
});
