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

    'QOBB-68 Name invalid; other fields valid': browser => {
    // https://dmutah.atlassian.net/browse/QOBB-68

        clickByText(browser, 'Bernice Ortiz')
        setForm(employeeManagerPage, {name: 'abcdefghilabcdefghilabcdefghijasd', phone: '1234567890', title: 'Manager'})
        checkDisabled(employeeManagerPage, '@saveButton')
    },
    
    'QOBB-68 Phone invalid; other fields valid': browser => {
        // https://dmutah.atlassian.net/browse/QOBB-68
        
        clickByText(browser, 'Bernice Ortiz')
        setForm(employeeManagerPage, {name: 'George Washington', phone: '12345678', title: 'President'})
        checkDisabled(employeeManagerPage, '@saveButton')
    },
    
    'QOBB-68 Title invalid; other fields valid': browser => {
        // https://dmutah.atlassian.net/browse/QOBB-68
        
        clickByText(browser, 'Bernice Ortiz')
        setForm(employeeManagerPage, {name: 'Martha  Washington', phone: '1234567890', title: 'abcdefghilabcdefghilabcdefghijasd'})
        checkDisabled(employeeManagerPage, '@saveButton')
    },
}    