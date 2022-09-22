/// <reference types="cypress" />
import CalculatorApi from '../apiObjects/CalculatorApi'
import HomePage from '../pageObjects/HomePage'
import HomeEnergyPage from '../pageObjects/HomeEnergyPage'
import TransportationPage from '../pageObjects/TransportationPage'
import WastePage from '../pageObjects/WastePage'
import ResultsPage from '../pageObjects/ResultsPage'

describe('Sinai Tests',()=>{
    beforeEach(() => {
        cy.visit('/')
    })
    
    it('Calculate carbon footprint: Simple happy path',()=>{
        const calculatorApi = new CalculatorApi()
        const homePage = new HomePage()
        const homeEnergyPage = new HomeEnergyPage()
        const transportationPage = new TransportationPage()
        const wastePage = new WastePage()
        const resultsPage = new ResultsPage()

        calculatorApi.getEGrid().as('egrid')

        homePage.getHouseholdField().type('1')
        homePage.getZipCodeField().type('12345')
        homePage.getGetStartedBtn().click()

        cy.wait('@egrid')
        homeEnergyPage.getPrimaryHeatingSourceSelect().select(1)
        homeEnergyPage.getNaturalGasField().type('23')
        homeEnergyPage.getElectricityField().type('44')
        homeEnergyPage.getGreenElectricityField().type('10')
        homeEnergyPage.getFuelField().type('72')
        homeEnergyPage.getPropaneField().type('37')
        homeEnergyPage.getACField().type('5')
        homeEnergyPage.getHeaterField().type('5')
        homeEnergyPage.getLightsToReplaceField().type('5')
        homeEnergyPage.getPwrMgmtSelect().select(1)
        homeEnergyPage.getIncreaseGreenField().type('10')
        homeEnergyPage.getColdWaterSelect().select(1)
        homeEnergyPage.getLoadsPerWeekField().type('10')
        homeEnergyPage.getAirDrySelect().select(1)
        homeEnergyPage.getPercentageAirDrySelect().select(1)
        homeEnergyPage.getFridgeSelect().select(1)
        homeEnergyPage.getFurnaceSelect().select(1)
        homeEnergyPage.getWindowSelect().select(1)
        homeEnergyPage.getTransportationBtn().click()

        transportationPage.getNumVehiclesSelect().select(1)
        transportationPage.getCurrentMaintSelect().select(1)
        transportationPage.getAvgMilesField().type('240')
        transportationPage.getAvgMilesSelect().select(1)
        transportationPage.getMileageField().type('21.4')
        transportationPage.getReduceMaint().select(1)
        transportationPage.getReduceAvgMilesField().type('120')
        transportationPage.getReduceMilesSelect().select(1)
        transportationPage.getReduceMileageField().type('25')
        transportationPage.getWasteBtn().click()

        wastePage.getAluminumCheckbox().check()
        wastePage.getPlasticCheckbox().check()
        wastePage.getGlassCheckbox().check()
        wastePage.getNewspaperCheckbox().check()
        wastePage.getMagazinesCheckbox().check()
        wastePage.getReportResultsBtn().click()

        resultsPage.getProgressCompleteMsg().should('contain.text','Congratulations! You have completed all the calculator sections.')
    })
})