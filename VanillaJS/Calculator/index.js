const displayValue = document.getElementById('display');

const number = document
.querySelectorAll('.numbers')
.forEach((item) => {
    item.addEventListener('click', (e) => {
        if(displayValue.innerText === "0" || displayValue.innerText === "NaN") {
            displayValue.innerText = "";
        }
        displayValue.innerText += e.target.innerHTML.trim();
    })
})

const calculate = document
.querySelectorAll('.operations')
.forEach((item) => {
    item.addEventListener('click', (e) => {
        let lastValue = displayValue.innerText.substring(displayValue.innerText.length - 1, displayValue.innerText);
        
        if( e.target.innerHTML === "=") {
            console.log(e.target.innerHTML);

            displayValue.innerText = eval(displayValue.innerText);
        } else {
            if(!isNaN(lastValue)) {
                displayValue.innerText += e.target.innerHTML;
            }
        }

    })
})

