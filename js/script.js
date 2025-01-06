console.log(document);
//select of the button in the dom
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