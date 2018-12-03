var employeeManagerPage = {}

var functions = require('../testAssets/functions')
var testData = require('../testAssets/testData')

let clickByText = functions.clickByText
let setFieldValue = functions.setFieldValue
let verifyFieldValue = functions.verifyFieldValue
let verifyEmployeeInList = functions.verifyEmployeeInList

module.exports = {
    beforeEach: browser => {
        employeeManagerPage = browser.page.EmployeeManagerPageObject()
        employeeManagerPage.navigate()
            .waitForElementVisible('@titleText', 5000)
    },

    after: browser => {
        browser.end()
    },

    'QOBB-60 Test all valid value types for each field': browser => {
        // https://dmutah.atlassian.net/browse/QOBB-60

        testData.validFieldValues.forEach(test => {
            employeeManagerPage
                .navigate()
                clickByText(browser, 'Bernice Ortiz')
                setFieldValue(employeeManagerPage, '@nameEntry', test.nameField)
                setFieldValue(employeeManagerPage, '@phoneEntry', test.phoneField)
                setFieldValue(employeeManagerPage, '@titleEntry', test.titleField)
                clickByText(browser, ' Save ')
                verifyEmployeeInList(employeeManagerPage, '@employee1', test.nameField)
                verifyFieldValue(employeeManagerPage, '@nameEntry', test.nameField)
                verifyFieldValue(employeeManagerPage, '@phoneEntry', test.phoneField)
                verifyFieldValue(employeeManagerPage, '@titleEntry', test.titleField)                
        })
    }    
}    