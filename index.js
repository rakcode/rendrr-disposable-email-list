const config = require("./config");


module.exports.isDisposable = (email) => {
    let result = {isEmail: null, isDomain: null, isDisposable: null};

    isEmail = config.isEmail(email);
    if(isEmail) {
        result.isEmail = true;
        result.isDomain = false;
        email = email.split("@")[1];
    }else{
        isDomain = config.isDomain(email);
        if(isDomain) {
            result.isDomain = true;
            result.isEmail = false;
        }
    }

    result.isDisposable = config.isDisposable(email);

    return result;

}

let res = this.isDisposable("test@0-00.usa.cc");

console.log(res);