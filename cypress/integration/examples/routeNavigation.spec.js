describe("Routes", () => {
  before(() => {
    cy.visit("/");
  });

  it("Redirect to data route", () => {
    cy.get(".nav-list-item > a")
      .eq(1)
      .click();
    cy.location("pathname", { timeout: 60000 }).should("include", "/data");
  });

  it("requests data of countries", () => {
    cy.request("https://restcountries.eu/rest/v2/all").as("countries");

    cy.get("@countries").should(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.length.of.at.least(1);
    });
  });

  it("Redirect to favourites route", () => {
    cy.get(".nav-list-item > a")
      .eq(2)
      .click();
    cy.location("pathname", { timeout: 60000 }).should(
      "include",
      "/favourites"
    );
  });

  it("Redirect back to home route", () => {
    cy.get(".nav-list-item > a")
      .eq(0)
      .click();
    cy.location("pathname", { timeout: 60000 }).should("include", "/");
  });
});
