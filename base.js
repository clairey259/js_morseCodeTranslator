//English => Morse Code Library
const englishMorseCodeLibrary = {
  ".-": "a",
  "-.-.": "b",
  "-...": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  a: ".-",
  c: "-.-.",
  b: "-...",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  " ": "/",
  "/": " ",
  "": "",
};

//CREATING THE OBJECT
class Translator {
  constructor(library, input) {
    this.library = library;
    this.input = input;
  }

  inputToArr() {
    const inputArr = this.input.split("");
    if (inputArr[0] === "." || inputArr[0] === "-") {
      const splitWordsArr = this.input.split("/");
      const splitLettersArr = splitWordsArr.map((words) => {
        return words.split(" ");
      });
      console.log(splitLettersArr);
      return splitLettersArr;
    } else {
      const inputLowerCase = this.input.toLowerCase();
      const splitWordsArr = inputLowerCase.split(" ");
      const splitLettersArr = splitWordsArr.map((words) => {
        return words.split("");
      });
      console.log(splitLettersArr);
      return splitLettersArr;
    }
  }

  parseInputToOtherLanguage() {
    const translatedArr = this.inputToArr().map((word) => {
      return word.map((letter) => {
        return this.library[letter];
      });
    });
    console.log(translatedArr);
    return translatedArr;
  }

  condensedArrtoString() {
    console.log(this.parseInputToOtherLanguage());
    const jointString = this.parseInputToOtherLanguage().join("");
    const jointArr = jointString.split("");
    console.log(jointArr[0]);
    if (jointArr[0] === "." || jointArr[0] === "-") {
      const joinLettersArr = this.parseInputToOtherLanguage().map((word) =>
        word.join(" ")
      );
      return joinLettersArr.join(" / ");
    } else {
      const joinLettersArr = this.parseInputToOtherLanguage().map((word) =>
        word.join("")
      );
      return joinLettersArr.join(" ");
    }
  }
}

//GET HTML ELEMENTS
const textInput = document.getElementById("input");
const textOutput = document.getElementById("output");
const translateButton = document.getElementById("submit");

// SET UP EVENT LISTENERS
translateButton.addEventListener("click", () => {
  const translateInput = new Translator(
    englishMorseCodeLibrary,
    textInput.value
  );
  textOutput.innerText = translateInput.condensedArrtoString();
});

console.log(textInput.value);
