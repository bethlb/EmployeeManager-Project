// Employee Manager functions

// Click on an item by it's text
var clickByText = (browser, text) => {
    browser
        .useXpath()
        .click(`//*[text()="${text}"]`)
        .useCss()
}

// Verify employee name is in left hand employee list
var verifyEmployeeInList = (Page, employeeElement, employeeName) => {
    Page
        .expect.element(employeeElement).text.to.equal(employeeName)
}

// Set all form values
var setForm = (Page, employee) => {
    Page
        .clearValue('@nameEntry')
        .setValue('@nameEntry', employee.name)
        .clearValue('@phoneEntry')
        .setValue('@phoneEntry', employee.phone)
        .clearValue('@titleEntry')
        .setValue('@titleEntry', employee.title)                
}

// Verify all form values
var verifyForm = (Page, employee) => {
    Page
        .verify.value('@nameEntry', employee.name)
        .verify.value('@phoneEntry', employee.phone)
        .verify.value('@titleEntry', employee.title)
}

// Set individual field
var setFieldValue = (Page, field, fieldValue) => {
    Page
        .clearValue(field)
        .setValue(field, fieldValue)
}

// Verify individual field
var verifyFieldValue = (Page, field, text) => {
    Page
        .verify.value(field, text)
}

// Fill in form values, Save and verify edit stuck
var editTest = (pageObject, oldEmployee, newEmployee, otherEmployee) => {
    pageObject    
        .clickEmployee(oldEmployee)
        .editEmployee(newEmployee)
        .click('@saveButton')
        .clickEmployee(otherEmployee)
        .expect.element('@cardTitle').text.to.equal(otherEmployee).before(500)
    pageObject
        .clickEmployee(newEmployee.name)
        .expect.element('@cardTitle').text.to.equal(newEmployee.name).before(500)
    pageObject.expect.element('@nameEntry').value.to.equal(newEmployee.name)
    pageObject.expect.element('@phoneEntry').value.to.equal(newEmployee.phone)
    pageObject.expect.element('@titleEntry').value.to.equal(newEmployee.title)
}

// Check button is enabled
var checkEnabled = (Page, button) => {
    Page
        .expect.element(button).to.not.have.attribute('disabled')
}

// Check button is disabled
var checkDisabled = (Page, button) => {
    Page
        .expect.element(button).to.have.attribute('disabled')
}

module.exports.clickByText = clickByText
module.exports.verifyEmployeeInList = verifyEmployeeInList
module.exports.setForm = setForm
module.exports.verifyForm = verifyForm
module.exports.setFieldValue = setFieldValue
module.exports.verifyFieldValue = verifyFieldValue
module.exports.editTest = editTest
module.exports.checkEnabled = checkEnabled
module.exports.checkDisabled = checkDisabled