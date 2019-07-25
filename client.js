console.log('i love you');

// function addinator(number1, number2){    
//     return number1 + number2;
// }

// function addinator(number1, number2) {
//     return parseInt(number1) + parseInt(number2);
// }

// function addinator(number1, number2) {
//     return parseFloat(number1) + parseFloat(number2);
// }

function addinator(number1, number2) {
    if (!number2 ) {
        number2 = 0;
    }
    return parseFloat(number1) + parseFloat(number2);
}


