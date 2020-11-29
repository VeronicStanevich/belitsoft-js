function spyOn (func) {
    var callNumber = 0;
    let returnValues;
    let passedArguments = [];

    let spy = function (...args) {
        callNumber++;
        returnValues = func(...args);
        passedArguments.push(...args);

        return returnValues;
    }

    spy.callCount = function() {
        return callNumber;
    }
    spy.returned = function(v) {
        return v === returnValues;
    }
    spy.wasCalledWith = function(arg) {
        return passedArguments.includes(arg);
    }

    return spy;
}

