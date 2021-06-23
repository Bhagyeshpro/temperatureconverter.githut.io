const celciusInput = document.getElementById('celcius');
const farhenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('kelvin');

const inputs = document.getElementsByClassName('inputs');

for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener("input", function (e) {
        let userNumber = parseFloat(e.target.value);

        switch (e.target.name) {
            case "celcius":
                farhenheitInput.value = (userNumber + 1.8) + 32; 
                kelvinInput.value = userNumber + 273.1;
                break;

            case "fahrenheit":
                celciusInput.value = (userNumber - 32) * 0.556;
                kelvinInput.value = (userNumber - 32) * 0.556 + 273.15;
                break;

            case "kelvin":
                celciusInput.value = userNumber - 273.15;
                farhenheitInput.value = ((userNumber - 273.15) * 1.8) + 32;
                break;


        }

    });
}