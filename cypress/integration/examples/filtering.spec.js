describe("Filter", () => {
  before(() => {
    cy.visit("/data");
  });

  it("Focus on the country input", () => {
    cy.get('input[name="name"]').should("be.focused");
  });

  it("Accepts country value", () => {
    const countryValue = "us";
    cy.get('input[name="name"]')
      .type(countryValue)
      .should("have.value", countryValue);
    cy.get(".countries-container > div").should($divs => {
      expect($divs).to.have.length(8);
    });
  });

  it("Accepts capital value", () => {
    const capitalValue = "b";
    cy.get('input[name="capital"]')
      .type(capitalValue)
      .should("have.value", capitalValue);
    cy.get(".countries-container > div").should($divs => {
      expect($divs).to.have.length(2);
    });
  });

  it("Accepts population value", () => {
    const populationValue = "500000";
    cy.get('input[name="population"]')
      .type(populationValue)
      .should("have.value", populationValue);
    cy.get(".countries-container > div").should($divs => {
      expect($divs).to.have.length(1);
      expect($divs.eq(0)).to.contain("Australia");
    });
  });
});
