"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//English => Morse Code Library
var englishMorseCodeLibrary = {
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
  " ": " "
}; //CREATING THE OBJECT

var Translator =
/*#__PURE__*/
function () {
  function Translator(library, input) {
    _classCallCheck(this, Translator);

    this.library = library;
    this.input = input;
  }

  _createClass(Translator, [{
    key: "inputToArr",
    value: function inputToArr() {
      var inputArr = this.input.split("");

      if (inputArr[0] === "." || inputArr[0] === "-") {
        console.log(this.input.split(" "));
        return this.input.split(" ");
      } else {
        console.log(inputArr);
        return inputArr;
      }
    }
  }, {
    key: "parseInputToOtherLanguage",
    value: function parseInputToOtherLanguage() {
      var _this = this;

      console.log(this.inputToArr());
      return this.inputToArr().map(function (item) {
        console.log(item);
        return _this.library[item];
      });
    }
  }, {
    key: "condensedArrtoString",
    value: function condensedArrtoString() {
      console.log(this.parseInputToOtherLanguage());
      var firstCharacter = this.parseInputToOtherLanguage()[0].split("");

      if (firstCharacter[0] === "." || firstCharacter[0] === "-") {
        return this.parseInputToOtherLanguage().join(" ");
      } else {
        return this.parseInputToOtherLanguage().join("");
      }
    }
  }]);

  return Translator;
}(); //GET HTML ELEMENTS


var textInput = document.getElementById("input");
var textOutput = document.getElementById("output");
var translateButton = document.getElementById("submit"); // SET UP EVENT LISTENERS

translateButton.addEventListener("click", function () {
  var translateInput = new Translator(englishMorseCodeLibrary, textInput.value);
  textOutput.innerText = translateInput.condensedArrtoString();
});
console.log(textInput.value); // function translate(library, input) {
//   return Object.keys(library).find((key) => library[key] === input);
// }