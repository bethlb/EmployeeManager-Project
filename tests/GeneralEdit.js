var employeeManagerPage = {}

var functions = require('../testAssets/functions')

let clickByText = functions.clickByText
let setFieldValue = functions.setFieldValue
let verifyFieldValue = functions.verifyFieldValue
let checkEnabled = functions.checkEnabled
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
    'QOBB-58 Name, Phone and Title can be edited; Save and Cancel active when fields are edited': browser => {
    // https://dmutah.atlassian.net/browse/QOBB-58

    // Name field can be edited; Save and Cancel buttons active when Name field is edited
        clickByText(browser, 'Bernice Ortiz')
        setFieldValue(employeeManagerPage, '@nameEntry', 'Bernice1')
        verifyFieldValue(employeeManagerPage, '@nameEntry', 'Bernice1')
        checkEnabled(employeeManagerPage, '@saveButton')
        checkEnabled(employeeManagerPage, '@cancelButton')
    // Phone field can be edited; Save and Cancel buttons active when Phone field is edited
        clickByText(browser, 'Marnie Barnett')
        setFieldValue(employeeManagerPage, '@phoneEntry', '1234567890')
        verifyFieldValue(employeeManagerPage, '@phoneEntry', '1234567890')            
        checkEnabled(employeeManagerPage, '@saveButton')
        checkEnabled(employeeManagerPage, '@cancelButton')
    // Title field can be edited; Save and Cancel buttons active when Title field is edited
        clickByText(browser, 'Phillip Weaver')
        setFieldValue(employeeManagerPage, '@titleEntry', 'Manager')
        verifyFieldValue(employeeManagerPage, '@titleEntry', 'Manager') 
        checkEnabled(employeeManagerPage, '@saveButton')
        checkEnabled(employeeManagerPage, '@cancelButton')
    }, 
 
    'QOBB-58 ID field cannot be edited; Save and Cancel not active for ID': browser => {
     // https://dmutah.atlassian.net/browse/QOBB-58

        clickByText(browser, 'Dollie Berry')
        browser.expect.element('idEntry').to.not.be.present
        checkDisabled(employeeManagerPage, '@saveButton')
        checkDisabled(employeeManagerPage, '@cancelButton')
    }
}