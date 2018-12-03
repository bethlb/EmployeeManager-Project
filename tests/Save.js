var employeeManagerPage = {}

var functions = require('../testAssets/functions')

let clickByText = functions.clickByText
let setForm = functions.setForm
let verifyForm = functions.verifyForm
let verifyEmployeeInList = functions.verifyEmployeeInList
var editTest = functions.editTest
let checkEnabled = functions.checkEnabled

module.exports = {
        beforeEach: browser => {
                employeeManagerPage = browser.page.EmployeeManagerPageObject()
                employeeManagerPage.navigate()
                        .waitForElementVisible('@titleText', 5000)
        },

        after: browser => {
                browser.end()
        },

        'QOBB-59 No Save': browser => {
                // https://dmutah.atlassian.net/browse/QOBB-59

                clickByText(browser, 'Bernice Ortiz')
                setForm(employeeManagerPage, { name: 'Homer Simpson', phone: '1234567890', title: 'Manager' })
                // Verify selection list on left still has original name        
                verifyEmployeeInList(employeeManagerPage, '@employee1', 'Bernice Ortiz')
                // Click on another employee name and verify name on left of original employee is still initial name
                clickByText(browser, 'Marnie Barnett')
                verifyEmployeeInList(employeeManagerPage, '@employee1', 'Bernice Ortiz')
                // Click on first employee again and verify it still has original values
                clickByText(browser, 'Bernice Ortiz')
                verifyForm(employeeManagerPage, { name: 'Bernice Ortiz', phone: '4824931093', title: 'CEO' })
        },

        'QOBB-59 Single Save': browser => {
                // https://dmutah.atlassian.net/browse/QOBB-59

                // Edit fields and click Save
                editTest(employeeManagerPage, 'Marnie Barnett', { name: 'Homer Simpson', phone: '1234567890', title: 'Manager' }, 'Phillip Weaver')
                // Edit all fields again but do not click Save 
                clickByText(browser, "Homer Simpson")
                setForm(employeeManagerPage, { name: 'Marge Simpson', phone: '2323232323', title: 'CFO' })
                //  Verify the Save and Cancel buttons go Active
                checkEnabled(employeeManagerPage, '@saveButton')
                checkEnabled(employeeManagerPage, '@cancelButton')
                // Click on a different employee; then click on the first employee again; Verify fields have Saved 
                // values; not the recently added values that weren't Saved.
                clickByText(browser, "Phillip Weaver")
                clickByText(browser, "Homer Simpson")
                verifyForm(employeeManagerPage, { name: 'Homer Simpson', phone: '1234567890', title: 'Manager' })
        },
        
        'QOBB-59 Double Save': browser => {
                // https://dmutah.atlassian.net/browse/QOBB-59
                
                // Click on employee and set new values for all fields; then Save
                editTest(employeeManagerPage, 'Teresa Osborne', { name: 'Homer Simpson', phone: '1234567890', title: 'Manager' }, 'Phillip Weaver')
                // Edit all fields again, Verify the Save and Cancel buttons go Active; Click Save
                clickByText(browser, 'Homer Simpson')
                setForm(employeeManagerPage, { name: 'Marge Simpson', phone: '2323232323', title: 'CFO' })
                checkEnabled(employeeManagerPage, '@saveButton')
                checkEnabled(employeeManagerPage, '@cancelButton')
                clickByText(browser, ' Save ')
                // Click on a different employee; then click on the original employee again; verify fields have second 
                // Saved values   
                clickByText(browser, "Dollie Berry")
                clickByText(browser, "Marge Simpson")
                verifyForm(employeeManagerPage, { name: 'Marge Simpson', phone: '2323232323', title: 'CFO' })
        }
}
