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
}

export default Homepage