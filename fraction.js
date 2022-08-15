//create fraction's object and validate
const firstFraction = {
    int1: 0
};
const secondFraction = {
    int2: 0
};
const resultFraction = {
    int: ""
};

document.getElementById('firstFraction').addEventListener('focusout', () => { readFirstFraction(event) });
document.getElementById('secondFraction').addEventListener('focusout', () => { readSecondFraction(event) });
document.getElementById('divide').addEventListener('click', divideFractions);
document.getElementById('multiple').addEventListener('click', multipleFractions);
document.getElementById('subtract').addEventListener('click', subtractFractions);
document.getElementById('add').addEventListener('click', addFractions);


function readFirstFraction(event) {
    let objProp = event.target.getAttribute('id');
    let objValue = Number(event.target.value);
    firstFraction[objProp] = objValue;
}


function readSecondFraction(event) {
    let objProp = event.target.getAttribute('id');
    let objValue = Number(event.target.value);
    secondFraction[objProp] = objValue;
}


function validate() {
    if (firstFraction.denom1 === 0 || secondFraction.denom2 === 0) {
        alert("Denominator can't be a zero");
        return false;
    }
    else if (!firstFraction.denom1 || !secondFraction.denom2 || !firstFraction.num1 || !secondFraction.num2) {
        alert("Please, enter valid data")
        return false
    }
    else {
        return true
    }

}

function displayResult() {
    if (resultFraction.num > resultFraction.denom) {
        resultFraction.int = Math.floor(resultFraction.num / resultFraction.denom);
        resultFraction.num = resultFraction.num % resultFraction.denom;
        
    }

    else if(resultFraction.num = resultFraction.denom){
        resultFraction.int += 1;
        resultFraction.num = '';
        resultFraction.denom = '';
        
    }

    for (let i = resultFraction.num; i > 1; i--) {
        if (resultFraction.num % i == 0 && resultFraction.denom % i == 0) {
            resultFraction.num = resultFraction.num / i;
            resultFraction.denom = resultFraction.denom / i;
            return
        }
    }


    document.getElementById('intResult').innerHTML = `${resultFraction.int}`;
    document.getElementById('numResult').innerHTML = `${resultFraction.num}`;
    document.getElementById('denomResult').innerHTML = `${resultFraction.denom}`;
}

function addFractions() {
    let valid = validate();
    if (valid === false) {
        return false
    }

    let intResult = firstFraction.int1 + secondFraction.int2;
    let commonDenom = firstFraction.denom1 * secondFraction.denom2;
    let resultNum = firstFraction.num1 * secondFraction.denom2 + secondFraction.num2 * firstFraction.denom1;

    resultFraction.int = intResult;
    resultFraction.num = resultNum;
    resultFraction.denom = commonDenom;

    displayResult()
}

function subtractFractions() {
    let valid = validate();
    if (valid === false) {
        return false
    }

    let intResult = firstFraction.int1 - secondFraction.int2;
    let commonDenom = firstFraction.denom1 * secondFraction.denom2;
    let resultNum = firstFraction.num1 * secondFraction.denom2 - secondFraction.num2 * firstFraction.denom1;

    resultFraction.int = intResult;
    resultFraction.num = resultNum;
    resultFraction.denom = commonDenom;

    displayResult()
}


function multipleFractions() {
    let valid = validate();
    if (valid === false) {
        return false
    }

    let multipleNum1 = firstFraction.int1 * firstFraction.denom1 + firstFraction.num1;
    let multipleNum2 = secondFraction.int2 * secondFraction.denom2 + secondFraction.num2;
    resultFraction.num = multipleNum1 * multipleNum2;
    resultFraction.denom = firstFraction.denom1 * secondFraction.denom2;

    displayResult()
}

function divideFractions() {
    let valid = validate();
    if (valid === false) {
        return false
    }

    let multipleNum1 = firstFraction.int1 * firstFraction.denom1 + firstFraction.num1;
    let multipleNum2 = secondFraction.int2 * secondFraction.denom2 + secondFraction.num2;

    resultFraction.num = multipleNum1 * secondFraction.denom2;
    resultFraction.denom = firstFraction.denom1 * multipleNum2;

    displayResult()
}






