/// <reference types='cypress'/>


describe("Framework Test Suite with Json data file in fixtures folder", function () {
    before(function () {
        // runs once before all the tests in the block for setup and fixture takes example file name and .then for promise
        // This return the data from  cy.fixture('example') and resolves the promise and stores the content in data
        // The scope of data is restricted in the fixture block
        cy.fixture('example').then(function (data) {
            this.data=data

        })
    })
    
	it('framework test', function () {
       
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        // CSS Select using Parent child cascade form->input->class form-control: nth-child(1) out of 10
        // however angular manipulates the class attributes dynamically as such fails, so use the name attribute
        //cy.get('form input.form-control:nth-child(1)').type('occam') <--This will fail
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get('select').select(this.data.gender) //Static drop down list use select

        // note data can be stored in the fixtures folder that can be accessed during runtime 
	
    });
    
  
});
console.log('This will be printed in the web browser console');