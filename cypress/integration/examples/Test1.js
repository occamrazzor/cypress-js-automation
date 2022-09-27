/// <reference types="Cypress" />

describe("My First Test Suite", function () {
	it("My FirstTest case", function () {
		cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
		cy.get(".search-keyword").type("ca");
		// To verify all four items are displayed need .visible to discard the invisible 5th element
		cy.get(".product:visible").should("have.length", 4);
	});
});
