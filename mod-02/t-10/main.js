const candidates = [];
const candidateCount = prompt("Enter candidate count");

for (let i = 0; i < candidateCount; i++) {
  const name = prompt(`Name for candidate ${i + 1}`);

  candidates.push({ name: name, votes: 0 });
}

const voters = Number(prompt("Enter voter count"));

for (let i = 0; i < voters; i++) {
  const name = prompt(`Name of the candidate voter ${i + 1} votes for`);

  if (name == "") {
    continue;
  }

  const candidate = candidates.find((candidate) => candidate.name == name);

  candidate.votes += 1;
}

const orderedCandidates = candidates.sort((a, b) => b.votes - a.votes);
const winner = orderedCandidates[0];
console.log(`The winner is ${winner.name} with ${winner.votes} votes.`);

console.log("results:");
for (const candidate of orderedCandidates) {
  console.log(`${candidate.name}: ${candidate.votes} votes`);
}
