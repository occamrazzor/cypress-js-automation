class ProductPage{
    checkOutButton() {
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }

    prodCheckOut() {
        return cy.contains('Checkout')
    }

    prodEnterCountry() {
        return cy.get('#country')
    }

    prodSelectCountry() {
        return cy.get('.suggestions > ul > li > a')
    }

    prodCheckBox2() {
        return cy.get('#checkbox2')
    }

    prodPurchaseBtn() {
        return cy.get('input[type="submit"]')
    }
}
export default ProductPage;