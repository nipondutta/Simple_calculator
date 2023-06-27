let screen = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let screenValue = '';
for (let b of buttons) {
    b.addEventListener('click', (event) => {
        let buttonText = event.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}