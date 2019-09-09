# Disposable Email List
Hunt down every disposable email. Probabily the most reliable email check which can detect disposable email and trash them out of your marketing database, So you don't end up paying for un-neccesary junk.

Check with the list of more than **38,000** temp email provider domains for the validation. We update the list frequently, Help us getting stronger. Contribute to our [GitHub](https://github.com/rakcode/rendrr-disposable-email-list "GitHub") repository to keep the list up-to-date.



## Install
`npm i rendrr-disposable-email-list`

## Methods
Import the module to the file

    var disposableEmail = require('rendrr-disposable-email-list');

#### Standard Method

    var result = disposableEmail.isDisposable('dummy@temp-email.tld');
or you can use domain name also

    var result = disposableEmail.isDisposable('temp-email.tld');

#### Standard Response format
	{ 
		isEmail: true, //or false
		isDomain: false,  //or true
		isDisposable: false //or true
	}

## Additional Methods
### isValidEmail
###### Checking the string with Regular Expression
You can check the given string is a valid **email** with ignoring other test cases. you can provide either domain name or email address to validate

    let res = this.isValidEmail("dummy@temp-email.tld");

#### Response Format
###### Success
    { isEmail: true }

###### Error
    { isEmail: false }

### isValidDomain
###### Checking the string with Regular Expression
You can check the given string is a valid **domain** with validating whether its a valid email or not. you can provide either domain name or email address to validate

    let res = this.isValidDomain("dummy@temp-email.tld");
	//or
	let res = this.isValidDomain("temp-email.tld");

#### Response Format
    { isEmail: true, isDomain: true }