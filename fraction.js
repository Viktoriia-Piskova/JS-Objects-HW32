//create fraction's object and validate

document.getElementById('fractions').addEventListener('focusout', () => {readFraction(event)});
//document.getElementById('secondFraction').addEventListener('focusout', readFraction);


function readFraction(event) {
    console.log(event.target.getAttribute('id'));

    let objName = event.target.parentNode.parentNode.id;
    console.log(objName)
    return




// const firstFraction = {
//   num1: a,
//   denom1: b,
//   integer1: int1 
// }


}


document.getElementById('reduce').addEventListener('click', reduceFraction);


// document.getElementById('divide').addEventListener('click', divideFractions);
// document.getElementById('multiple').addEventListener('click', multipleFractions);
// document.getElementById('add').addEventListener('click', addFractions);
// document.getElementById('subtract').addEventListener('click', subtractFractions);



//read 2 common fractions


// reducing common fraction: 1) find the greatest common divider both for numerator and denominator; 2) divide both



//minus func + reduc

//plus func + reduc

//divide func 

//multiple funct



