var employeeManagerPage = {}

var functions = require('../testAssets/functions')
var testData = require('../testAssets/testData')

let clickByText = functions.clickByText
let setFieldValue = functions.setFieldValue

module.exports = {
    beforeEach: browser => {
        employeeManagerPage = browser.page.EmployeeManagerPageObject()
        employeeManagerPage.navigate()
        // Note - .waitForElementVisible failed in tests two and on when used with nigthwatch 
        // "skip_testcases_on_fail" = fales.  Instead used pause before each test.  
        // .waitForElementVisible('.titleText', 5000)
        employeeManagerPage.api.pause(2000)
    },
    after: browser => {
        browser.end()
    },

    'QOBB-62 Test invalid value types for each field - Test 1': browser => {
    // https://dmutah.atlassian.net/browse/QOBB-62

        testData.invalidFieldValues.forEach (test => {
            employeeManagerPage
                .navigate()
                .click('@employee1')
                setFieldValue(employeeManagerPage, '@nameEntry', test.nameField)
                setFieldValue(employeeManagerPage, '@phoneEntry', test.phoneField)
                setFieldValue(employeeManagerPage, '@titleEntry', test.titleField)
                clickByText(browser, ' Save ')
                if (test.nameField.length < 1 || test.nameField.length > 30) {
                    browser.useXpath()
                    browser.expect.element(test.nameErrorElement).to.be.visible
                    browser.useCss()
                    employeeManagerPage.expect.element('@invalidInfo').to.have.css('border-bottom').which.equals('2px solid rgb(204, 0, 0)')
                    employeeManagerPage.expect.element('@invalidInfo').to.have.css('border-bottom', 'Red Underline Present').which.equals('2px solid rgb(204, 0, 0)')
                }  
                if (test.phoneField.length != 10 || isNaN(test.phoneField)) {
                    browser.useXpath()
                    browser.expect.element(test.phoneErrorElement).to.be.visible
                    browser.useCss()
                    employeeManagerPage.expect.element('@invalidInfo').to.have.css('border-bottom').which.equals('2px solid rgb(204, 0, 0)')
                    employeeManagerPage.expect.element('@invalidInfo').to.have.css('border-bottom', 'Red Underline Present').which.equals('2px solid rgb(204, 0, 0)')
                }    
                if (test.titleField.length < 1 || test.titleField.length > 30) {
                    browser.useXpath()
                    browser.expect.element(test.titleErrorElement).to.be.visible
                    browser.useCss()
                    employeeManagerPage.expect.element('@invalidInfo').to.have.css('border-bottom').which.equals('2px solid rgb(204, 0, 0)')
                    employeeManagerPage.expect.element('@invalidInfo').to.have.css('border-bottom', 'Red Underline Present').which.equals('2px solid rgb(204, 0, 0)')
                }      
        }) 
    },
}    