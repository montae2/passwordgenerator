# passwordgenerator
The project assignment was to create a password generator. The criteria for the application is as follows:

## Acceptance Criteria

```
GIVEN I need a new, secure password
I am presented with a series of inputs for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
THEN my input should be validated and at least one character type should be selected
WHEN all criteria are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is written to the page


HTML layout consisted of:
Form with a series with a results box and 3 checkboxes that would dictate the type of password generated based on the user's preference


JS logic consists of:
Starting with getting each element within the document by it's ID
Creating arrays for the character types that would be used to generate the passwords
Characters are identified by ASCII chart (chart can be found in the repository).

Create functions:
rangeOfAsc: loops through each ASC value and pushes them into an array
generatePassword: this holds all of the user options for the passwords
submitForm: this takes those selected user options and submits them

An empty array created so random characters could be added to it
for loop starts and loops through selecting random characters until input of length is reached and makes a string (which will be the password).
