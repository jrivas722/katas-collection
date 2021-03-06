// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

// Your task is to return the number of JavaScript developers coming from Europe.

var list1 = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "JavaScript"
  },
  {
    firstName: "Maia",
    lastName: "S.",
    country: "Tahiti",
    continent: "Europe",
    age: 28,
    language: "JavaScript"
  },
  {
    firstName: "Shufen",
    lastName: "L.",
    country: "Taiwan",
    continent: "Asia",
    age: 35,
    language: "HTML"
  },
  {
    firstName: "Sumayah",
    lastName: "M.",
    country: "Tajikistan",
    continent: "Asia",
    age: 30,
    language: "CSS"
  }
];

// My solution

const europeDevs = list1.filter(
  devs =>
    devs.continent.includes("Europe") && devs.language.includes("JavaScript")
);

console.log(europeDevs.length);

// Another Solution

const countDevelopers = list => {
  let counter = 0;
  for (let i of list) {
    if (i.continent === "Europe" && i.language === "JavaScript") {
      counter++;
    }
  }
  return counter;
};

// Better Solution

const countDevelopers = list =>
  list.filter(x => x.continent == "Europe" && x.language == "JavaScript")
    .length;

countDevelopers(list1);
