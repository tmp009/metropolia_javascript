const operationSelect = document.getElementById("operation");

const number1 = document.getElementById("num1");
const number2 = document.getElementById("num2");
const result = document.getElementById("result");
const calculateBtn = document.getElementById("start");

calculateBtn.addEventListener("click", () => {
  const num1 = Number(number1.value);
  const num2 = Number(number2.value);
  let finalResult = null;
  switch (operationSelect.value) {
    case "add":
      finalResult = num1 + num2;
      break;

    case "sub":
      finalResult = num1 - num2;
      break;

    case "div":
      finalResult = num1 / num2;
      break;

    case "multi":
      finalResult = num1 * num2;
      break;
    default:
      break;
  }
  result.innerText = `${finalResult}`;
});
