const rollDice = (numDice) => {
  let sum = 0;
  for (let i = 0; i < numDice; i++) {
    sum += Math.floor(Math.random() * 6) + 1;
  }
  return sum;
};

const simulateProbability = (numDice, targetSum, trials = 10000) => {
  let successCount = 0;
  for (let i = 0; i < trials; i++) {
    if (rollDice(numDice) === targetSum) {
      successCount++;
    }
  }
  return (successCount / trials) * 100;
};

const numDice = parseInt(prompt("Enter number of dice:"), 10);
const targetSum = parseInt(prompt("Enter sum of eyes:"), 10);
if (isNaN(numDice) || isNaN(targetSum) || numDice < 1) {
  document.body.innerText = "Invalid input.";
} else {
  const probability = simulateProbability(numDice, targetSum);
  document.body.innerText = `Probability to get sum ${targetSum} with ${numDice} dice is ${probability.toFixed(2)}%`;
}
