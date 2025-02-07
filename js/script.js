console.log(document);
//PALINDROMA CHECK
const submitButton = document.querySelector(`#submitButton`);
submitButton.addEventListener(`click`, function(event) {
    event.preventDefault()
    const spinnerEL = submitButton.querySelector(`#spinner`)
    const statusSpan = submitButton.querySelector(`.status`)
    const resultCard = document.querySelector(`#result-card-success`)
    const failCard = document.querySelector(`#result-card-fail`)
    const resultAmount = document.querySelector(`#result-success`)
    const resultFail = document.querySelector(`#result-fail`)
    const originalStatusText = statusSpan.innerHTML
    //everytime i click the results in card is hidden and button animated 
    resultCard.classList.add(`d-none`)
    failCard.classList.add(`d-none`)
    submitButton.disabled = true;
    spinnerEL.classList.toggle(`d-none`)
    statusSpan.innerHTML= `Loading`

    //importing value of input at the click of the button
    const inputWord = document.querySelector(`#input-palindroma`)
    console.log(inputWord.value)
    //at the click I want to remove any invalid state present from previous validations
    inputWord.classList.remove(`is-invalid`);
     
    //check on the format of the input
    if (inputWord.value.trim() === "") {
        inputWord.classList.add(`is-invalid`);
        resultCard.classList.add(`d-none`);
        submitButton.disabled = false;
        spinnerEL.classList.add(`d-none`)
        statusSpan.innerHTML= originalStatusText
    } else {
        //function-logic to validate the word is palindroma
        function getPalindromaCheck(word) {
            const arrWord1 = word.split("");
            console.log(arrWord1);
            const strWord1 = arrWord1.join("");
            console.log(strWord1);

            const arrWord2 = arrWord1.reverse();
            console.log(arrWord2);
            const strWord2 = arrWord2.join("");
            console.log(strWord2);

            if (strWord1 === strWord2) {
                const check = true;
                return check;
            } else {
                const check = false;
            return check;
            }
        }
    }

    const resultCheck = getPalindromaCheck(inputWord.value);
    if (resultCheck === true) {
        setTimeout(() => {
            submitButton.disabled = false;
            spinnerEL.classList.toggle(`d-none`)
            statusSpan.innerHTML= originalStatusText
            resultCard.classList.remove(`d-none`);
            resultAmount.innerHTML = `The word "${inputWord.value}" is palindroma`;
        }, 1500);    
    }
    if (resultCheck === false) {
        setTimeout(() => {
            submitButton.disabled = false;
            spinnerEL.classList.toggle(`d-none`)
            statusSpan.innerHTML= originalStatusText
            failCard.classList.remove(`d-none`);
            resultFail.innerHTML = `The word "${inputWord.value}" is NOT palindroma`;
        }, 1500);    
    }
})

//PARI E DISPARI CHECK
//listen the button on the pari e dispari check
const submitButtonPlay = document.querySelector(`#submitButton-play`);
submitButtonPlay.addEventListener(`click`, function(event) {
    event.preventDefault()
    const spinnerPlay = submitButtonPlay.querySelector(`#spinner-play`)
    const statusPlayBtn = submitButtonPlay.querySelector(`.status-play`)
    const resultWinPlay = document.querySelector(`#result-card-success-play`)
    const resultWinMessage = document.querySelector(`#result-success-play`)
    const resultLostPlay = document.querySelector(`#result-card-fail-play`)
    const resultLostMessage = document.querySelector(`#result-fail-play`)
    const originalStatusPlay = statusPlayBtn.innerHTML
    resultWinPlay.classList.add(`d-none`)
    resultLostPlay.classList.add(`d-none`)
    spinnerPlay.classList.toggle(`d-none`)
    statusPlayBtn.innerHTML=`Loading`
    submitButtonPlay.disabled= true;

    //read the selection between pari and dispari from user
    const selectedRadioPlay = document.querySelector(`input[name="radioPariDispari"]:checked`)
    console.log(`User gioca: ${selectedRadioPlay.value}`); // Mostra il valore ("Pari" o "Dispari")
    //assign the left selection between pari e dispari to the computer
    let computerPlay;
    if (selectedRadioPlay.value === `pari`) {
        computerPlay = `dispari`;
    } else {
        computerPlay = `pari`;
    }
    console.log(`Computer gioca: ${computerPlay}`);

    //read the value enter by the user
    const selectedUserNumber = document.querySelector(`#select-number-play`)
    console.log(`Il numero scelto dal user è: ${selectedUserNumber.value}`)
    //generate and save a random number by the computer
    const computerNumber = Math.floor(Math.random() * 6);
    console.log(`Il numero del computer è: ${computerNumber}`)
    //sum the value input from user to the one random genearated by computer
    const sumPlay = Number(selectedUserNumber.value) + computerNumber;
    console.log(`La somma dei due numeri è: ${sumPlay}`)

    function pariDispariWinner (result) {
        if (sumPlay % 2 === 0) {
            if (computerPlay === `pari`) {
                return false;
            } else {
                return true;
            }
        } else {
            if (computerPlay === `pari`) {
                return true;
            } else {
                return false
            }
        }
    }
    
    const resultWinner = pariDispariWinner(sumPlay);
    if (resultWinner === true) {
        setTimeout(() => {
            submitButtonPlay.disabled = false;
            spinnerPlay.classList.toggle(`d-none`)
            statusPlayBtn.innerHTML= originalStatusPlay
            resultWinPlay.classList.remove(`d-none`);
            resultWinMessage.innerHTML = `You WON!<br>Your number: "${selectedUserNumber.value}".<br> The computer's number: "${computerNumber}".<br> You play: "${selectedRadioPlay.value}". <br> The sum is: "${sumPlay}".`;
        }, 1500);    
    }
    if (resultWinner === false) {
        setTimeout(() => {
            submitButtonPlay.disabled = false;
            spinnerPlay.classList.toggle(`d-none`)
            statusPlayBtn.innerHTML= originalStatusPlay
            resultLostPlay.classList.remove(`d-none`);
            resultLostMessage.innerHTML = `You LOST!!<br>Your number: "${selectedUserNumber.value}".<br> The computer's number: "${computerNumber}".<br> You play: "${selectedRadioPlay.value}". <br> The sum is: "${sumPlay}".`;
        }, 1500);    
    }

    
})



//assign the winner based on the pari-dispari selection (user VS computer)
