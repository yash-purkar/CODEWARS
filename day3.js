// Given an object, Write a arrow function which takes an object and prints the particular sentence "My name is Ankit Singhania. I scored 99 in Math and 96 in Computer from ISC board".
const obj = {
  name: "Ankit Singhania",
  school: {
    board: ["ISC"],
    marks: [
      { subject: "Math", percent: 99 },
      { subject: "Computer", percent: 96 },
    ],
  },
};

const printDetails = obj => {
  const { name, school: { board: [board], marks: [{ subject: mathSubject, percent: mathPercent }, { subject: computerSubject, percent: computerPercent }] } } = obj;
  console.log(`My name is ${name}. I scored ${mathPercent} in ${mathSubject} and ${computerPercent} in ${computerSubject} from ${board} board.`)
}

printDetails(obj);