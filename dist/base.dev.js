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
  " ": "/",
  "/": " ",
  "": ""
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
        var splitWordsArr = this.input.split("/");
        var splitLettersArr = splitWordsArr.map(function (words) {
          return words.split(" ");
        });
        console.log(splitLettersArr);
        return splitLettersArr;
      } else {
        var inputLowerCase = this.input.toLowerCase();

        var _splitWordsArr = inputLowerCase.split(" ");

        var _splitLettersArr = _splitWordsArr.map(function (words) {
          return words.split("");
        });

        console.log(_splitLettersArr);
        return _splitLettersArr;
      }
    }
  }, {
    key: "parseInputToOtherLanguage",
    value: function parseInputToOtherLanguage() {
      var _this = this;

      var translatedArr = this.inputToArr().map(function (word) {
        return word.map(function (letter) {
          return _this.library[letter];
        });
      });
      console.log(translatedArr);
      return translatedArr;
    }
  }, {
    key: "condensedArrtoString",
    value: function condensedArrtoString() {
      console.log(this.parseInputToOtherLanguage());
      var jointString = this.parseInputToOtherLanguage().join("");
      var jointArr = jointString.split("");
      console.log(jointArr[0]);

      if (jointArr[0] === "." || jointArr[0] === "-") {
        var joinLettersArr = this.parseInputToOtherLanguage().map(function (word) {
          return word.join(" ");
        });
        return joinLettersArr.join(" / ");
      } else {
        var _joinLettersArr = this.parseInputToOtherLanguage().map(function (word) {
          return word.join("");
        });

        return _joinLettersArr.join(" ");
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
console.log(textInput.value);