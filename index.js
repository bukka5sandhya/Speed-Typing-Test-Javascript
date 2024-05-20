let spinnerEle = document.getElementById("spinner");
let timerEle = document.getElementById("timer");
let quoteDisplayEle = document.getElementById("quoteDisplay");
let resultEle = document.getElementById("result");
let quoteInputEle = document.getElementById("quoteInput");
let submitBtnEle = document.getElementById("submitBtn");
let resetBtnEle = document.getElementById("resetBtn");
let counter = 0;
spinnerEle.classList.toggle("d-none");

function startCounting() {
    counter += 1;
    timerEle.textContent = counter;
    console.log(counter);
}
let counterVal = setInterval(startCounting, 1000);

function getQuotation() {
    let options = {
        method: "GET"
    };
    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerEle.classList.add("d-none");

            let quote = jsonData.content;
            quoteDisplayEle.textContent = quote;
            console.log(jsonData.content);
        });
}

getQuotation();
startCounting();
resetBtnEle.onclick = function() {
    spinnerEle.classList.remove("d-none");
    getQuotation();
    startCounting();
    counter = 0;
    resultEle.textContent = "";
    quoteInputEle.textContent = "";
};
submitBtnEle.onclick = function() {
    if (quoteInputEle.value === quoteDisplayEle.textContent) {
        clearInterval(counterVal);
        resultEle.textContent = "You typed In " + counter + " Seconds ";
    } else {
        resultEle.textContent = "You typed Incorrect sentence";

    }
};
