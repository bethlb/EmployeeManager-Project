module.exports = {
    fieldPrompts: [
        {
            field: '@namePrompt',
            fieldPrompt: 'Name'
        },
        {
            field: '@phonePrompt',
            fieldPrompt: 'Phone Number'
        },
        {
            field: '@titlePrompt',
            fieldPrompt: 'Title'
        } 
    ],
    initialEmployeeList: [
        {
            employee: '@employee1',
            text: 'Bernice Ortiz'
        },
        {
            employee: '@employee2',
            text: 'Marnie Barnett'
        },        
        {
            employee: '@employee3',
            text: 'Phillip Weaver'
        },
        {
            employee: '@employee4',
            text: 'Teresa Osborne'
        },        
        {
            employee: '@employee5',
            text: 'Dollie Berry'
        },
        {
            employee: '@employee6',
            text: 'Harriett Williamson'
        },
        {
            employee: '@employee7',
            text: 'Ruby Estrada'
        },
        {
            employee: '@employee8',
            text: 'Lou White'
        },
        {
            employee: '@employee9',
            text: 'Eve Sparks'
        },
        {
            employee: '@employee10',
            text: 'Lois Brewer'
        }                                        
    ],
    initialFieldValues: [
        {
            field: '@nameEntry',
            fieldValue: ''
        },
        {
            field: '@phoneEntry',
            fieldValue: ''
        },
        {
            field: '@titleEntry',
            fieldValue: ''
        }               
    ],
    invalidFieldValues: [
        {
            nameField: 'Tom Brady',
            phoneField: 'abc',
            titleField: 'Football Star',
            nameErrorElement: '(//div)[text()="The name field must be between 1 and 30 characters long. "]',
            phoneErrorElement: '(//div)[text()="The phone number must be 10 digits long. "]',
            titleErrorElement: '(//div)[text()="The title field must be between 1 and 30 characters long. "]'
        },
        {
            nameField: 'Tom Brady',
            phoneField: 'ABCDEFGHI',
            titleField: 'Football Star',
            nameErrorElement: '(//div)[text()="The name field must be between 1 and 30 characters long. "]',
            phoneErrorElement: '(//div)[text()="The phone number must be 10 digits long. "]',
            titleErrorElement: '(//div)[text()="The title field must be between 1 and 30 characters long. "]'            
        },
        {
            nameField: 'Tom Brady',
            phoneField: '!@#$%&*()_',
            titleField: 'Football Star',
            nameErrorElement: '(//div)[text()="The name field must be between 1 and 30 characters long. "]',
            phoneErrorElement: '(//div)[text()="The phone number must be 10 digits long. "]',
            titleErrorElement: '(//div)[text()="The title field must be between 1 and 30 characters long. "]'            
        },     
        {
            nameField: ' \uE003',
            phoneField: ' \uE003',
            titleField: ' \uE003',
            nameErrorElement: '(//div)[text()="The name field must be between 1 and 30 characters long. "]',
            phoneErrorElement: '(//div)[text()="The phone number must be 10 digits long. "]',
            titleErrorElement: '(//div)[text()="The title field must be between 1 and 30 characters long. "]'            
        },     
        {
            nameField: 'abcdefghijabcdefghilabcdefghijk',
            phoneField: '12345678901',
            titleField: 'abcdefghijabcdefghilabcdefghijk',
            nameErrorElement: '(//div)[text()="The name field must be between 1 and 30 characters long. "]',
            phoneErrorElement: '(//div)[text()="The phone number must be 10 digits long. "]',
            titleErrorElement: '(//div)[text()="The title field must be between 1 and 30 characters long. "]'            
        }     
    ],
    validFieldValues: [
        {
            nameField: 'Queen Elizabeth12$$',
            phoneField: '1234567890',
            titleField: 'Manager'
        },
        {
            nameField: 'Queen Elizabeth12$$',
            phoneField: '1234567890',
            titleField: 'Manager-(Dept 1)'
        },
        {
            nameField: 'Q',
            phoneField: '3334445555',
            titleField: 'M'
        }        
    ]
}