const config = require("./config");


module.exports.isDisposable = (email) => {
    let result = {isEmail: false, isDomain: false, isDisposable: false};

    isEmail = config.isEmail(email);
    if(isEmail) {
        result.isEmail = true;
        email = email.split("@")[1];
    }else{
        isDomain = config.isDomain(email);
        if(isDomain) {
            result.isDomain = true;
        }
    }

    result.isDisposable = config.isDisposable(email);

    return result;

}

module.exports.isValidEmail = (email) => {
    let result = {isEmail: false};

    isEmail = config.isEmail(email);
    if(isEmail) {
        result.isEmail = true;
    }
    return result;
}

module.exports.isValidDomain = (email) => {
    let result = {isEmail: false, isDomain: false};

    isEmail = config.isEmail(email);
    if(isEmail) {
        result.isEmail = true;
        email = email.split("@")[1];
    }
    
    isDomain = config.isDomain(email);
    if(isDomain) {
        result.isDomain = true;
    }

    return result;

}