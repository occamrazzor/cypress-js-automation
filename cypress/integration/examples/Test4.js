/// <reference types="Cypress" />

//const { invoke } = require("cypress/types/lodash"); <--- This line automatically appeared and broke the testcase after invoke.
//was added in line 27. Diabling the offending line runs the test script without any issues.

describe("My  Fourth Test Suite", function (){
	it("My FourthTest case", function () {
		cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
	
		cy.get('#alertbtn').click()
		cy.get('[value="Confirm"]').click() //Note Cypress autoaccepts alerts and pop-ups
		//windows:alert trigger this event from cypress the pop up can be captured 
		//Note: Cypress can control the DOM and trigger window:alert events.
		
		cy.on('window:alert', (str) => {
			//Mocha
			 expect(str).to.equal('Hello , share this practice page and share your knowledge')
		})

		cy.on('window:confirm', (str) => {
			//Mocha
			expect(str).to.equal('Hello , Are you sure you want to confirm?')
		})
		// invoke method call a function and in jQuery removeattr function will remove the attribute of an element
		// cypress supports all jquery objects and functions
		// Assertions include, be , have  and comparing two strings

		cy.get('#opentab').invoke('removeAttr', 'target').click() // this will open the website in the same tab because default is new tab.
		cy.url().should('include', 'rahulshettyacademy')

		//browser navigation method
		cy.go('back')
		

	});
});
console.log('This will be printed in the web browser console');