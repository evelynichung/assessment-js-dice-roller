let numberOfDice = document.querySelector("#number-of-dice");
let rollBtn = document.querySelector("#roll-btn");
let totalRolls = document.querySelector("#total-rolls");
let showAllRollsBtn = document.querySelector("#show-all-rolls-btn");
let allRollsElement = document.querySelector("#dieRolls");

rollBtn.addEventListener("click", function (event) {
  let totalDiceInput = Number(numberOfDice.value);
  let dieRolls = []; // empty array
  let x = 0; // x = count

  while (x < totalDiceInput) {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
    dieRolls.push(roll);
    x = x + 1;
  }

  console.log(dieRolls);
  totalRolls.innerHTML = x;
});

showAllRollsBtn.addEventListener("click", function (event) {
  // loop through each roll in the dieRolls array
  // for each, create a List Item tag ( <li>...</li>)
  // containing the result of that single die roll
  // You will add each LI element to the innerHTML
  // of an "All Rolls" Ordered List you are creating in this step.

  for (let i = 0; i < dieRolls.length; i++) {
    const newDiceString = '<li class="dice">' + dieRolls[i] + "</li>";
    allRollsElement.innerHTML = allRollsElement.innerHTML + newDiceString;
  }
});

console.log(allRollsElement);
