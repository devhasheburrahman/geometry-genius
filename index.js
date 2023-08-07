let serial = 0;

// 1st card 
document.getElementById('fast-card').addEventListener('click', function () {
    const fastName = document.getElementById('fastname').innerText;

    serial += 1;
    const fastInputstring = document.getElementById('fast-input').value;
    const fastInput = parseInt(fastInputstring);

    const fSecondInputString = document.getElementById('secend-input').value;

    const secondInput = parseInt(fSecondInputString);

    const fastCalculation = 0.5 * fastInput * secondInput;
    



    if (isNaN(fastInput)) {
        alert("Error: Please enter a valid number.");
        return;
    }
    if (isNaN(secondInput)) {
        alert("Error: Please enter a valid number.");
        return;
    }
    if (fastInput < 0) {
        alert("Error: Please enter a valid number.+")
        return;
    }
    if (secondInput < 0) {
        alert("Error: Please enter a valid number.+")
        return;
    }



    displayData(fastName, fastCalculation)

})


// 2nd card 
document.getElementById('second-card').addEventListener('click', function () {
    const secondName = document.getElementById('second-name').innerText;

    const sFastInputstring = document.getElementById('sFest-input').value;

    const sFastInput = parseInt(sFastInputstring);

    const sSecondInputString = document.getElementById('sSecond-input').value;
    const sSecondInput = parseInt(sSecondInputString);

    const sSecondCalculation = sFastInput * sSecondInput;

    if (isNaN(sFastInput)) {
        alert("Error: Please enter a valid number.");
        return;
    }
    if (isNaN(sSecondInput)) {
        alert("Error: Please enter a valid number.");
        return;
    }
    if (sFastInput < 0) {
        alert("Error: Please enter a valid number.+")
        return;
    }
    if (sSecondInput < 0) {
        alert("Error: Please enter a valid number.+")
        return;
    }


    serial += 1;
    displayData(secondName, sSecondCalculation)

})

// third-card
document.getElementById('third-card').addEventListener('click', function () {
    const thirdName = document.getElementById('third-name').innerText;
    const tFastInputString = document.getElementById('tFast-input').value;
    const tFastInput = parseInt(tFastInputString);
    const tSecondInputString = document.getElementById('tSecond-input').value;
    const tSecondInput = parseInt(tSecondInputString);

    const thirdCalculation = tFastInput * tSecondInput;

    if (isNaN(tFastInput)) {
        alert("Error: Please enter a valid number.");
        return;
    }
    if (isNaN(tSecondInput)) {
        alert("Error: Please enter a valid number.");
        return;
    }
    if (tFastInput < 0) {
        alert("Error: Please enter a valid number.+")
        return;
    }
    if (tSecondInput < 0) {
        alert("Error: Please enter a valid number.+")
        return;
    }


    serial += 1;
    displayData(thirdName, thirdCalculation)


})

// 4th card 

document.getElementById('fourth-card').addEventListener('click', function () {
    const fourthName = document.getElementById('fourth-name').innerText;

    const fourFastInputString = document.getElementById('fourFast-input').value;
    const fourFastInput = parseInt(fourFastInputString);

    const fourSecondInputString = document.getElementById('fourSecond-input').value;
    const fourSecondInput = parseInt(fourSecondInputString);

    const fourthCalculation = 0.5 * fourFastInput * fourSecondInput;

    if (isNaN(fourFastInput)) {
        alert("Error: Please enter a valid number.");
        return;
    }
    if (isNaN(fourSecondInput)) {
        alert("Error: Please enter a valid number.");
        return;
    }
    if (fourFastInput < 0) {
        alert("Error: Please enter a valid number.+")
        return;
    }
    if (fourSecondInput < 0) {
        alert("Error: Please enter a valid number.+")
        return;
    }

    serial += 1;
    displayData(fourthName, fourthCalculation);


})

// five card 
document.getElementById('five-card').addEventListener('click', function () {
    const fiveName = document.getElementById('five-name').innerText;

    const fiveFastInputString = document.getElementById('fiveFast-input').value;
    const fiveFastInput = parseInt(fiveFastInputString);

    const fiveSecondInputString = document.getElementById('fiveSecond-input').value;
    const fiveSecondInput = parseInt(fiveSecondInputString);

    const fiveCalculation = 0.5 * fiveFastInput * fiveSecondInput;

    if (isNaN(fiveFastInput)) {
        alert("Error: Please enter a valid number.");
        return;
    }
    if (isNaN(fiveSecondInput)) {
        alert("Error: Please enter a valid number.");
        return;
    }
    if (fiveFastInput < 0) {
        alert("Error: Please enter a valid number.+")
        return;
    }
    if (fiveSecondInput < 0) {
        alert("Error: Please enter a valid number.+")
        return;
    }

    serial += 1;
    displayData(fiveName, fiveCalculation);


})

// six card


document.getElementById('six-card').addEventListener('click', function () {
    const sixName = document.getElementById('six-name').innerText;

    const sixFastInputString = document.getElementById('sixFast-input').value;
    const sixFastInput = parseInt(sixFastInputString);

    const sixSecondInputString = document.getElementById('sixSecond-input').value;
    const sixSecondInput = parseInt(sixSecondInputString);


    const sixCalculationString = 3.14 * sixFastInput * sixSecondInput;
    const sixCalculation = parseFloat(sixCalculationString).toFixed(2);
    if (isNaN(sixFastInput)) {
        alert("Error: Please enter a valid number.");
        return;
    }
    if (isNaN(sixSecondInput)) {
        alert("Error: Please enter a valid number.");
        return;
    }
    if (sixFastInput < 0) {
        alert("Error: Please enter a valid number.+")
        return;
    }
    if (sixSecondInput < 0) {
        alert("Error: Please enter a valid number.+")
        return;
    }



    serial += 1;
    displayData(sixName, sixCalculation);

})


// common function to display data


function displayData(fastName, fastCalculation,) {

    const container = document.getElementById('container')


    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${fastName}</td>
    <td>${fastCalculation}</td>
    
    <td><button class='btn-primary p-1 rounded-md '>convart to m<sup>2</sup></button></td>

 `;
    container.appendChild(tr);




}


