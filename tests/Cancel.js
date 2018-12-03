var employeeManagerPage = {}

var functions = require('../testAssets/functions')

let clickByText = functions.clickByText
let setForm = functions.setForm
let verifyForm = functions.verifyForm

module.exports = {
    beforeEach: browser => {
        employeeManagerPage = browser.page.EmployeeManagerPageObject()
        employeeManagerPage.navigate()
            .waitForElementVisible('@titleText', 5000)
        },
        after: browser => {
            browser.end()
        },

   'QOBB-60 Cancel prior to Save': browser => {
    // https://dmutah.atlassian.net/browse/QOBB-60

    // Set new field values for employee1
        clickByText(browser, 'Bernice Ortiz')
        setForm(employeeManagerPage, {name: 'Homer Simpson', phone: '1234567890', title: 'Manager'})
        // Click Cancel button
        clickByText(browser, ' Cancel ')
        // Verify fields have original values; cancelled worked
        verifyForm(employeeManagerPage, {name: 'Bernice Ortiz', phone: '4824931093', title: 'CEO'})
        // Click on another employee
        clickByText(browser, 'Marnie Barnett')
        // Click on first employee again and verify it still has original values
        clickByText(browser, 'Bernice Ortiz')
        verifyForm(employeeManagerPage, {name: 'Bernice Ortiz', phone: '4824931093', title: 'CEO'})
    },
    
    'QOBB-60 Cancel after to Save': browser => {
        // https://dmutah.atlassian.net/browse/QOBB-60
        
        // Set new values for employee 3 and Save
        clickByText(browser, 'Phillip Weaver')
        setForm(employeeManagerPage, {name: 'Joe Schmo', phone: '4564564567', title: 'Sales Manager'})
        clickByText(browser, ' Save ')
        // Set new values again for employee 3; Do not Save; then Cancel
        clickByText(browser, 'Joe Schmo')
        setForm(employeeManagerPage, {name: 'Harry Potter', phone: '3636363636', title: 'Wizard'})
        clickByText(browser, ' Cancel ')
        // Verify fields have the first set of values
        verifyForm(employeeManagerPage, {name: 'Joe Schmo', phone: '4564564567', title: 'Sales Manager'})
        // Click on employee4
        clickByText(browser, 'Teresa Osborne')
        // Click back on employee3 and verify it still has original values
        clickByText(browser, 'Joe Schmo')
        verifyForm(employeeManagerPage, {name: 'Joe Schmo', phone: '4564564567', title: 'Sales Manager'})
    }    
}    