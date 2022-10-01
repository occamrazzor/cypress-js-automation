class HomePage{
 
    getEditBox() {
        return cy.get('input[name="name"]:nth-child(2)') 
    }

    getTwoWayDataBinding() {
        return cy.get(':nth-child(4) > .ng-untouched')
    }

    getGender() {
        
        return cy.get('select')
    }

    getEntrepreneaur() {
        return cy.get('#inlineRadio3')
    }

    getShopTab() {
        return cy.get(':nth-child(2) > .nav-link')
    }

// Create class for the Home page and add all the objects as functions then export it.
// Next in the Test8Framework.js file import Homepage from '../pageObjects/HomePage'
// In the it{block create an object of the HomePage class to access the functions}
    // ---> const homePage = new HomePage()

}
export default HomePage;