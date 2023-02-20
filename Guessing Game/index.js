const form = document.querySelector("form");
const inputNum = form.querySelector("input");
const CheckBtn = form.querySelector("button");
const result = document.querySelector(".result");
const totalResultTxt = document.querySelector(".totalResult");
const remainAttemptTxt = document.querySelector(".remainAttempt");
const gameOverMsg = document.querySelector(".gameOverMsg");

var totalWin = 0;
var totalLost = 0;
var attempts = 0;
var remain = 0;
 

// Remaining attepmts


//check result 
const checkResult = (inputValue) => {
    const randomValue = Math.floor((Math.random() * 10) + 1);
    if( inputValue == randomValue )
    {
        result.innerHTML = `You have Won, Random number was: ${randomValue}`;
        totalWin++;
    }
    else
    {
        result.innerHTML = `You have Lost, Random number was: ${randomValue}`;
        totalLost++;
    }
    totalResultTxt.innerHTML = `won: ${totalWin}, lost: ${totalLost}`;
    
}
form.addEventListener("submit", function (e){
    e.preventDefault();
    inputValue = inputNum.value;
    
    attempts++;
    remain = 5 - attempts;
    remainAttemptTxt.innerHTML = `Remaining Attemps: ${remain}`;
    if(attempts > 5){
        inputNum.disabled = true;
        CheckBtn.disabled = true;
    }
    else{
        checkResult(inputValue);
    }
    inputNum.value = "";
});
//checkBtn
CheckBtn.addEventListener("click",checkResult());
