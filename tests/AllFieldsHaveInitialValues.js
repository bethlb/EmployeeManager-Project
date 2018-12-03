var employeeManagerPage = {}

var testData = require('../testAssets/testData')

module.exports = {
    beforeEach: browser => {
        employeeManagerPage = browser.page.EmployeeManagerPageObject()
        employeeManagerPage.navigate()
            .waitForElementVisible('@titleText', 5000)
    },
    after: browser => {
        browser.end()
    },

    'QOBB-57 All Editor fields have initial values': () => {
    // https://dmutah.atlassian.net/browse/QOBB-57
        employeeManagerPage
            .click('@employee1')
        testData.initialFieldValues.forEach(test => {
            employeeManagerPage
                .expect.element(test.field).to.have.value.not.equals(test.fieldValue).before(1000)
        })
    }
}