describe("My site", () => {
  it("Works", () => {
    cy.visit("/")
    cy.get(".toolbar__title").should("have.text", "Personal Site Data")
    cy.get("form").should("exist")
    //It's hard to do cypress on vuetify
  })
})
