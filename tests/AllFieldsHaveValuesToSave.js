var employeeManagerPage = {}

var functions = require('../testAssets/functions')

let clickByText = functions.clickByText
let setForm = functions.setForm
let checkDisabled = functions.checkDisabled

module.exports = {
    beforeEach: browser => {
        employeeManagerPage = browser.page.EmployeeManagerPageObject()
        employeeManagerPage.navigate()
            .waitForElementVisible('@titleText', 5000)
    },
    after: browser => {
        browser.end()
    },

    'QOBB-67 Every field must be populated to Save - Missing name value': browser => {
    // https://dmutah.atlassian.net/browse/QOBB-67
    // Test combinations of less than all fields populated.  Check for inactive Save button.

        clickByText(browser, 'Phillip Weaver')
        setForm(employeeManagerPage, {name: '', phone: '1234567890', title: 'Manager'})
        checkDisabled(employeeManagerPage, '@saveButton')            
    },
    
    'QOBB-67 Every field must be populated to Save - Missing phone value': browser => {
        // https://dmutah.atlassian.net/browse/QOBB-67
        // Test combinations of less than all fields populated.  Check for inactive Save button.
        
        clickByText(browser, 'Dollie Berry')
        setForm(employeeManagerPage, {name: 'Cooper Boullianne', phone: '', title: 'Big Shot'})
        checkDisabled(employeeManagerPage, '@saveButton')            
    },
    
    'QOBB-67 Every field must be populated to Save - Missing title value': browser => {
        // https://dmutah.atlassian.net/browse/QOBB-67
        // Test combinations of less than all fields populated.  Check for inactive Save button.
        
        clickByText(browser, 'Ruby Estrada')
        setForm(employeeManagerPage, {name: 'New Guy', phone: '1234567890', title: ''})
        checkDisabled(employeeManagerPage, '@saveButton')    
    },
}  