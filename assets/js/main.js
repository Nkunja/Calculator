// *** Write your code here***
let choice = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("btn"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        choice.innerText = "";
        break;
      case "DEL":
        if (choice.innerText) {
          choice.innerText = choice.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          choice.innerText = eval(choice.innerText);
        } catch {
          choice.innerText = "Syntax Error!";
        }
        break;
      default:
        choice.innerText += e.target.innerText;
    }
  });
});
