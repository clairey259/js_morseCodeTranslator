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
  " ": " ",
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
      console.log(this.input.split(" "));
      return this.input.split(" ");
    } else {
      console.log(inputArr);
      return inputArr;
    }
  }

  parseInputToOtherLanguage() {
    console.log(this.inputToArr());
    return this.inputToArr().map((item) => {
      console.log(item);
      return this.library[item];
    });
  }

  condensedArrtoString() {
    console.log(this.parseInputToOtherLanguage());
    const firstCharacter = this.parseInputToOtherLanguage()[0].split("");
    if (firstCharacter[0] === "." || firstCharacter[0] === "-") {
      return this.parseInputToOtherLanguage().join(" ");
    } else {
      return this.parseInputToOtherLanguage().join("");
    }
  }
}

//GET HTML ELEMENTS
const textInput = document.getElementById("input");
const textOutput = document.getElementById("output");
const translateButton = document.getElementById("submit");



// SET UP EVENT LISTENERS
translateButton.addEventListener("click", () => {
  const translateInput = new Translator(englishMorseCodeLibrary, textInput.value);
  textOutput.innerText = translateInput.condensedArrtoString();
});

console.log(textInput.value);

// function translate(library, input) {
//   return Object.keys(library).find((key) => library[key] === input);
// }
