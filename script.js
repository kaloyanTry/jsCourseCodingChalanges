// // 1) Function declaratioin
// function calcAge(birthyear) {
//   return 2022 - birthyear;
// }
// const consoleAge = calcAge(1978);
// console.log(consoleAge);

// // 2) Function expression =
// const calcAgeDecl = function (birthyear) {
//   return 2022 - birthyear;
// };
// const consoleAgeDecl = calcAgeDecl(1983);
// console.log(consoleAgeDecl);

// // 3) Function arrow =>
// const calcAgeArrow = (birthyear) => 2022 - birthyear;
// console.log(calcAgeArrow(2011));

/////////////////////////
// JS course coding chalanges:
// // Fundamental Part One, Coding Chalange #1, #2:
// // Test data:
// // const heightMark = 1.69;
// // const weightMark = 78;
// // const heightJohn = 1.95;
// // const weightJohn = 92;
// const heightMark = 1.88;
// const weightMark = 95;
// const heightJohn = 1.76;
// const weightJohn = 85;

// const BMI = function (mass, height) {
//   return (mass / height ** 2).toFixed(2);
// };

// const BMIMark = BMI(weightMark, heightMark);
// const BMIJohn = BMI(weightJohn, heightJohn);
// console.log(BMIMark);
// console.log(BMIJohn);

// const higherBMI =
//   BMIMark > BMIJohn ? `Mark's BMI: (${BMIMark})` : `John's BMI: (${BMIJohn})`;
// console.log(`${higherBMI} is higher`);

// // Fundamental Part One, Coding Chalange #3
// // Test data:
// // const dolphinsScores = [96, 108, 89];
// // const koalasScores = [88, 91, 110];
// const dolphinsScores = [97, 112, 101];
// const koalasScores = [159, 95, 106];

// const calcAvrgScore = function (scores) {
//   const sumScores = scores.reduce((prev, curr) => prev + curr);
//   return (sumScores / scores.length).toFixed(2);
// };

// const dolphinsAvrgScore = calcAvrgScore(dolphinsScores);
// const koalasAvrgScore = calcAvrgScore(koalasScores);

// if (dolphinsAvrgScore >= 100 && koalasAvrgScore >= 100) {
//   if (dolphinsAvrgScore > koalasAvrgScore) {
//     console.log(
//       `Dolphins won ${dolphinsAvrgScore} to ${koalasAvrgScore} against koalas.`
//     );
//   } else if (dolphinsAvrgScore < koalasAvrgScore) {
//     console.log(
//       `Koalas won ${koalasAvrgScore} to ${dolphinsAvrgScore} against dolphins.`
//     );
//   } else {
//     console.log(`It's a draw: ${koalasAvrgScore} to ${dolphinsAvrgScore}.`);
//   }
// }

// // Fundamental Part One, Coding Chalange #4
// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const output = `The bill was ${bill}, the tip was ${tip}, and the total value ${
//   bill + tip
// }`;

// console.log(output);

// // Fundamental Part Two, Coding Chalange #1:
// Test data:
// const dolphinsScores = [96, 108, 89];
// const koalasScores = [88, 91, 110];
// const dolphinsScores = [85, 54, 71];
// const koalasScores = [23, 34, 27];

// const calcAvrgScore = function (scores) {
//   const sumScores = scores.reduce((prev, curr) => prev + curr);
//   return (sumScores / scores.length).toFixed(2);
// };

// const dolphinsAvrgScore = calcAvrgScore(dolphinsScores);
// const koalasAvrgScore = calcAvrgScore(koalasScores);

// const checkWinner = function () {
//   if (dolphinsAvrgScore >= 2 * koalasAvrgScore) {
//     console.log(
//       `Dolphins won ${dolphinsAvrgScore} vs. ${koalasAvrgScore} against koalas.`
//     );
//   } else if (koalasAvrgScore >= 2 * dolphinsAvrgScore) {
//     console.log(
//       `Koalas won ${koalasAvrgScore} vs. ${dolphinsAvrgScore} against dolphins.`
//     );
//   } else {
//     console.log('No team wins...');
//   }
// };
// checkWinner();

// // Fundamental Part Two, Coding Chalange #2:
// const bills = [125, 555, 44];
// const tips = [];
// const totals = [];

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// bills.forEach(function (bill, tip) {
//   tip = calcTip(bill);
//   tips.push(tip);
//   totals.push(bill + tip);
// });
// console.log(bills);
// console.log(tips);
// console.log(totals);

// // Fundamental Part Two, Coding Chalange #3:
// const objMark = {
//   fullName: 'Mark',
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const objJohn = {
//   fullName: 'John',
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// objMark.calcBMI();
// objJohn.calcBMI();
// //console.log(objMark.bmi, objJohn.bmi);

// if (objMark.bmi > objJohn.bmi)
//   console.log(
//     `${objMark.fullName}'s BMI (${objMark
//       .calcBMI()
//       .toFixed(2)}) is higher than ${objJohn.fullName}'s (${objJohn
//       .calcBMI()
//       .toFixed(2)})!`
//   );

// if (objMark.bmi < objJohn.bmi)
//   console.log(
//     `${objJohn.fullName}'s BMI (${objJohn
//       .calcBMI()
//       .toFixed(2)}) is higher than ${objMark.fullName}'s (${objMark
//       .calcBMI()
//       .toFixed(2)})!`
//   );

//
// // Fundamental Part Two, Coding Chalange #4:
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// bills.forEach(function (bill, tip) {
//   tip = calcTip(bill);
//   tips.push(tip);
//   totals.push(bill + tip);
// });

// const calcAvrg = function (arr) {
//   const avr = arr.reduce((prev, curr) => prev + curr) / arr.length;
//   return avr;
// };
// console.log('Total bills, tips, and totals:');
// console.log(bills);
// console.log(tips);
// console.log(totals);
// console.log('Average bills, tips, and totals:');
// console.log(calcAvrg(bills));
// console.log(calcAvrg(tips));
// console.log(calcAvrg(totals));

///////////////////////////////////////
// Develooper skills and Editor setup
// const temperatures = [17, 21, 23];
// const printForcast = function (arr) {
//   arr.forEach((t, i) => console.log(`${t}°C in ${i + 1} days`));
// };
// printForcast(temperatures);

///////////////////////////////////
// Data Strucutres, Coding Chalange #1, #2
const game = {
  team1: 'Bayer Munich',
  team2: 'Borussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.1. Create players array for each team:
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

// 1.2. The first player is = gk and the others are fildPlayers:
const [gk1, ...fieldPlayers1] = players1;
console.log(gk1);
console.log(fieldPlayers1);

const [gk2, ...fieldPlayers2] = players2;
console.log(gk2);
console.log(fieldPlayers2);

// 1.3. Create allPlayers array, containing both teams:
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 1.4. Create players1Final = orginal team + substitutes:
const substitutes = ['Tiago', 'Coutinho', 'Perisic'];
const players1Final = [...players1, ...substitutes];
console.log(players1Final);

// 1.5. Create variable for each odd:
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 1.6. Create printGoals function: print goals in total and the scorers
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored.`);
  console.log(`Goals were scored by: ${players}`);
};
printGoals(...game.scored);

// 1.7. Print the more likely winer team:
team1 < team2 && console.log('Team1 is more likely to win.');
team1 > team2 && console.log('Team2 is more likely to win.');

// 2.1. Print #goal and scorers' names:
game.scored.forEach((n, i) => console.log(`Goal ${i + 1}: ${n}`));

// 2.2. Calculate average odd:
const odds = Object.values(game.odds); // take the values of odds:

const oddAvrg = odds.reduce((prev, curr) => prev + curr) / odds.length;
console.log(oddAvrg.toFixed(2));

// 2.3. Print odds with teams' names directly from the game object:
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

// 2.4. Bonus: Object scorers with the names and the numbers of goals:
const scorers = {};
game.scored.forEach(player => {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
});
console.log(scorers);

// 3.1. Create new array: events of the diff game no duplicates:
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

// 3.2. Remove the event at 64 minute:
gameEvents.delete(64);
console.log(gameEvents);

// 3.3. Calculate average time of even to happen
const lastEl = [...gameEvents.keys()].pop(); //calculate the last event of the game = end
const avrgEvent = lastEl / gameEvents.size; // calculate average time event
console.log(`An event happened, on average, every ${avrgEvent} minutes`);

// 3.4. Bonus: Print each event and minute:
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min} ${event}`);
}
