var employeeManagerPage = {}

var functions = require('../testAssets/functions')
var testData = require('../testAssets/testData')

let clickByText = functions.clickByText
let verifyEmployeeInList = functions.verifyEmployeeInList
let setForm = functions.setForm
let verifyForm = functions.verifyForm

var setFieldValue = (Page, field, fieldValue) => {
    Page
        .clearValue(field)
        .setValue(field, fieldValue)
}

var verifyFieldValue = (Page, field, text) => {
    Page
        .verify.value(field, text)
}

module.exports = {
    beforeEach: browser => {
        employeeManagerPage = browser.page.EmployeeManagerPageObject()
        employeeManagerPage.navigate()
            .waitForElementVisible('@titleText', 5000)
    },

    after: browser => {
        browser.end()
        employeeManagerPage.api.pause(5000)
    },

    'QOBB-80 Verify new employee appears in left list when added': browser => {
    // https://dmutah.atlassian.net/browse/QOBB-80

        clickByText(browser, ' + Add Employee ')
        verifyEmployeeInList(employeeManagerPage, '@newEmployee', 'New Employee')
    },

    'QOBB-80 Verify new employee has correct employee number': browser => {
    // https://dmutah.atlassian.net/browse/QOBB-80

        var new_emp_num = 0
        var last_emp_num = 0
        employeeManagerPage
            .getAttribute('@lastEmployee', 'name', function (result) {
                last_emp_num = Number(result.value.substring(8))
            })
        clickByText(browser, ' + Add Employee ')
        clickByText(browser, 'New Employee')
        employeeManagerPage
            .getText('@employeeID', function (result) {
                new_emp_num = Number(result.value)
            })
            .verify.ok(new_emp_num = last_emp_num + 1, 'New Employee has correct id')
    },

    'QOBB-80 Verify new employee field prompts have valid values': browser => {
    // https://dmutah.atlassian.net/browse/QOBB-80

        clickByText(browser, ' + Add Employee ')
        clickByText(browser, 'New Employee')
        testData.fieldPrompts.forEach(test => {
            employeeManagerPage
                .getText(test.field, function (result) {
                    employeeManagerPage.verify.ok(result.value == test.fieldPrompt)  
                })       
        })
    },

    'QOBB-80 Verify new employee Save is working': browser => {
    // https://dmutah.atlassian.net/browse/QOBB-80

        clickByText(browser, ' + Add Employee ')
        clickByText(browser, 'New Employee')
        setForm(employeeManagerPage, {name: 'Casper the Ghost', phone: '1212121212', title: 'Friendly Ghost'} )
        clickByText(browser, ' Save ')
        clickByText(browser, 'Phillip Weaver')
        clickByText(browser, 'Casper the Ghost')
        verifyForm(employeeManagerPage, {name: 'Casper the Ghost', phone: '1212121212', title: 'Friendly Ghost'} )
    }
}