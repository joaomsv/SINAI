/// <reference types="Cypress" />

class HomeEnergyPage {
    getSectionName () {
        return cy.get('.sectionName')
    }

    getPrimaryHeatingSourceSelect () {
        return cy.get('#primaryHeatingSource')
    }
    
    getNaturalGasField () {
        return cy.get('#naturalGasTextInput')
    }

    getElectricityField () {
        return cy.get('#electricityTextInput')
    }

    getGreenElectricityField () {
        return cy.get('#electricityGreenTextInput')
    }

    getFuelField () {
        return cy.get('#fuelTextInput')
    }

    getPropaneField () {
        return cy.get('#propaneTextInput')
    }

    getACField () {
        return cy.get('#energyAC')
    }

    getHeaterField () {
        return cy.get('#energyHeat')
    }

    getLightsToReplaceField () {
        return cy.get('#lightsToReplace')
    }

    getPwrMgmtSelect () {
        return cy.get('#pwrMgmtSelect')
    }

    getIncreaseGreenField () {
        return cy.get('#increaseGreenInput')
    }

    getColdWaterSelect () {
        return cy.get('#coldWaterSelect')
    }

    getLoadsPerWeekField () {
        return cy.get('#loadsPerWeek')
    }

    getAirDrySelect () {
        return cy.get('#AirDrySelect')
    }

    getPercentageAirDrySelect () {
        return cy.get('#percentageAirDrySelect')
    }

    getFridgeSelect () {
        return cy.get('#fridgeSelect')
    }

    getFurnaceSelect () {
        return cy.get('#furnaceSelect')
    }

    getWindowSelect () {
        return cy.get('#windowSelect')
    }

    getTransportationBtn () {
        return cy.get('#to-transportation')
    }
}

export default HomeEnergyPage