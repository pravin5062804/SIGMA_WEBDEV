let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

arr.forEach((button) => {
    button.addEventListener("click", (e) => {

        let value = e.target.innerText; 

        if (value === '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        }
        else if (value === "C") {
            string = "";
            input.value = string;
        }
        else if (value === "backspace") {
            string = string.slice(0, -1);
            input.value = string;
        }
        else {
            if (value === "×") value = "*";
            if (value === "÷") value = "/";
            if (value === "−") value = "-";

            string += value;
            input.value = string;
        }
    });
});