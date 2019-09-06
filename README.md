# Disposable Email List
Hunt down every disposable email. Probabily the most reliable email check which can detect disposable email and trash them out of your marketing database, So you don't end up paying for un-neccesary junk.

Help us getting stronger. Add your list of temp-emails when you fork this.

## Install
`npm i rendrr-disposable-email-list`

## Method
    var disposableEmail = require('rendrr-disposable-email-list');
    var result = disposableEmail.isDisposable('dummy@temp-email.tld');
or you can use domain name also


    var result = disposableEmail.isDisposable('temp-email.tld');

## Response format
	{ 
		isEmail: true, //or false - Checking Email with Regular expression
		isDomain: false,  //or true
		isDisposable: false //or true
	}