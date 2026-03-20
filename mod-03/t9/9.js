const calculate = (calculation) => {
  if (calculation.includes("+")) {
    const numbers = calculation.split("+");
    return Number(numbers[0]) + Number(numbers[1]);
  }

  if (calculation.includes("-")) {
    const numbers = calculation.split("-");
    return Number(numbers[0]) - Number(numbers[1]);
  }

  if (calculation.includes("/")) {
    const numbers = calculation.split("/");
    return Number(numbers[0]) / Number(numbers[1]);
  }

  if (calculation.includes("*")) {
    const numbers = calculation.split("*");
    return Number(numbers[0]) * Number(numbers[1]);
  }
};

const result = document.getElementById("result");
const calculation = document.getElementById("calculation");
const calculateBtn = document.getElementById("start");

calculateBtn.addEventListener("click", () => {
  const finalResult = calculate(calculation.value);
  result.innerText = finalResult;
});
