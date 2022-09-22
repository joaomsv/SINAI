/// <reference types="Cypress" />

class Homepage {
    getHouseholdField () {
        return cy.get('#ppl-in-household-input')
    }
    
    getZipCodeField () {
        return cy.get('#zip-code-input')
    }

    getGetStartedBtn () {
        return cy.get('#get-started')
    }

    getInvalidFamNumMsg () {
        return cy.get('#invalidNum')
    }

    getinvalidZipNumMsg () {
        return cy.get('#invalidZipNum')
    }

    getinvalidZipMsg () {
        return cy.get('#invalidZip')
    }
}

export default Homepage