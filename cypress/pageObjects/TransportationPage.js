/// <reference types="Cypress" />

class TransportationPage {
    getNumVehiclesSelect () {
        return cy.get('#numVehiclesInput')
    }

    getCurrentMaintSelect () {
        return cy.get('#maintCurrentSelect')
    }

    getAvgMilesField () {
        return cy.get('#vehicle1Miles')
    }

    getAvgMilesSelect () {
        return cy.get('#vehicle1Select')
    }

    getMileageField () {
        return cy.get('#vehicle1GasMileage')
    }

    getReduceMaint () {
        return cy.get('#maintReduceSelect')
    }

    getReduceAvgMilesField () {
        return cy.get('#reduceMilesInput1')
    }

    getReduceMilesSelect () {
        return cy.get('#reduceMilesSelect1')
    }

    getReduceMileageField () {
        return cy.get('#replaceVehicleInput1')
    }

    getWasteBtn () {
        return cy.get('#to-waste')
    }
}

export default TransportationPage