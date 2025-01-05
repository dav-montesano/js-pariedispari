console.log(document);
//select of the button in the dom
const submitButton = document.querySelector(`#submitButton`);
submitButton.addEventListener(`click`, function(event) {
    event.preventDefault()
    const spinnerEL = submitButton.querySelector(`#spinner`)
    const statusSpan = submitButton.querySelector(`.status`)
    const resultCard = document.querySelector(`#result-card-success`)
    const resultAmount = document.querySelector(`#result-success`)
    const originalStatusText = statusSpan.innerHTML
    //everytime i click the result in card is hidden and button animated 
    resultCard.classList.add(`d-none`)
    submitButton.disabled = true;
    spinnerEL.classList.toggle(`d-none`)
    statusSpan.innerHTML= `Loading`

    //importing value of input at the click of the button
    const inputWord = document.querySelector(`#input-palindroma`)
    console.log(inputWord.value)
    inputWord.classList.remove(`is-invalid`);
    // if (inputWord.value.trim() === "") {
    //     inputWord.classList.add(`is-invalid`);
    //     resultCard.classList.add(`d-none`);
    //     submitButton.disabled = false;
    //     spinnerEL.classList.add(`d-none`)
    // }
    
    
    //function-logic to validate if palindroma is true
    function getPalindromaCheck(word) {
        if (word.trim() === "") {
            inputWord.classList.add(`is-invalid`);
            resultCard.classList.add(`d-none`);
            submitButton.disabled = false;
            spinnerEL.classList.add(`d-none`)
            statusSpan.innerHTML= originalStatusText
            const check = false;
            return check;
        } else if (word.trim() !== "") {
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
            // inputWord.classList.remove(`is-invalid`);
            submitButton.disabled = false;
            spinnerEL.classList.toggle(`d-none`)
            statusSpan.innerHTML= originalStatusText
            resultCard.classList.remove(`d-none`);
            resultAmount.innerHTML = `The word "${inputWord.value}" is palindroma`;
        }, 1500);     
    }
    









})