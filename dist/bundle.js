(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _flashcardController = require('./flashcardController.js');

var _flashcardController2 = _interopRequireDefault(_flashcardController);

var _flashcardModel = require('./flashcardModel.js');

var _flashcardModel2 = _interopRequireDefault(_flashcardModel);

var _flashcardView = require('./flashcardView.js');

var _flashcardView2 = _interopRequireDefault(_flashcardView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_flashcardController2.default.render(_flashcardModel2.default);

},{"./flashcardController.js":3,"./flashcardModel.js":4,"./flashcardView.js":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var flashcardContent = exports.flashcardContent = [{
	question: "What is a primitive in JavaScript?",
	answer: "A primitive (primitive value, primitive data type) is data that is not an object and has no methods. In JavaScript, there are 6 primitive data types: string, number, boolean, null, undefined, symbol (new in ECMAScript 2015).",
	source: "Mozilla Developer Network",
	sourceUrl: "https://developer.mozilla.org/en-US/docs/Glossary/Primitive"
}, {
	question: "What's the git command to change your last commit message?",
	answer: "<code>git commit --amend -m 'new message'</code>",
	source: "Git Documentation",
	sourceUrl: "https://git-scm.com/docs/git-commit-tree"
}, {
	question: "What does the <code>.reduce()</code> method do?",
	answer: "It applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.",
	source: "Mozilla Developer Network",
	sourceUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce"
}, {
	question: "What does the <code>.map()</code> method do?",
	answer: "It iterates through an array's contents, applies a function to each, and returns a new array",
	source: "Egghead.io",
	sourceUrl: "https://egghead.io/lessons/javascript-the-array-map-method"
}, {
	question: "What's the value of <code>keyword</code> in this code? <br> <code>var keyword = true && 'hello';</code> ",
	answer: "<code>'hello'</code>. If both values are truthy, the last truthy value is set. If there's a falsy, the first falsy value is set.",
	source: "Code School JavaScript Best Practices",
	sourceUrl: "https://www.codeschool.com/courses/javascript-best-practices"
}, {
	question: "What does the <code>while</code> statement do?",
	answer: "The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.",
	source: "Mozilla Developer Network",
	sourceUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while"
}, {
	question: "Are there true classes in JavaScript?",
	answer: "No. The class syntax is not introducing a new object-oriented inheritance model to JavaScript. JavaScript classes provide a much simpler and clearer syntax to create objects and deal with inheritance.",
	source: "Mozilla Developer Network",
	sourceUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes"
}, {
	question: "What is a radix?",
	answer: "The base for integer conversion in <code>.parseInt()</code>, necessary for browsers pre 2013<br><code>parseInt('010', 10); // 10</code>",
	source: "Mozilla Developer Network",
	sourceUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt"
}, {
	question: "What are the falsy values?",
	answer: "false, 0, empty strings (\"\"), NaN, null, and undefined ",
	source: "Mozilla Developer Network",
	sourceUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript"
}, {
	question: "What's an object literal?",
	answer: "An object literal is a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}).<br><code>var car = { myCar: \"Saturn\", getCar: carTypes(\"Honda\"), special: sales };</code>",
	source: "Mozilla Developer Network",
	sourceUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Object_literals"
}, {
	question: "What are the three parameters of the callback in <code>.forEach()</code>?",
	answer: "<code>currentValue, index, array</code>. Ex:<br><code>[\"dog\", \"cat\", \"hen\"].forEach( (currentValue, index, array) => {});</code>",
	source: "Mozilla Developer Network",
	sourceUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript"
}, {
	question: "What is a pure function?",
	answer: "A pure function is a function that, given the same input, will always return the same output and does not have any observable side effect.",
	source: "Professor Frisby's Mostly Adequate Guide to Functional Programming",
	sourceUrl: "https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch3.html"
}, {
	question: "What are first class functions?",
	answer: "We can treat functions like any other data type and there is nothing particularly special about them - they may be stored in arrays, passed around, assigned to variables, what have you.",
	source: "Professor Frisby's Mostly Adequate Guide to Functional Programming",
	sourceUrl: "https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch1.html"
}, {
	question: "What's the definition of a side effect within a function?",
	answer: "A side effect is a change of system state or observable interaction with the outside world that occurs during the calculation of a result.",
	source: "Professor Frisby's Mostly Adequate Guide to Functional Programming",
	sourceUrl: "https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch3.html"
}, {
	question: "What's a closure?",
	answer: "A closure is the combination of a function and the scope object in which it was created. Closures let you save state — as such, they can often be used in place of objects.",
	source: "Stack Overflow",
	sourceUrl: "http://stackoverflow.com/questions/111102/how-do-javascript-closures-work"
}, {
	question: "What's the spread operator?",
	answer: "The spread operator allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) are expected.",
	source: "Mozilla Developer Network",
	sourceUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator"
}, {
	question: "What would the <code>.call()</code> method return in this example? <br><code>function add(c, d) {return this.a + this.b + c + d} <br> var o = {a:1, b:3};</code>",
	answer: "The <code>call()</code> method calls a function with a given this value and arguments provided individually.<br><code>add.call(o, 5, 7); <br>// 1 + 3 + 5 + 7 = 16</code>",
	source: "Mozilla Developer Network",
	sourceUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#As_a_constructor"
}, {
	question: "What would the <code>.apply()</code> method return in this example? <br><code>function add(c, d) {<br>return this.a + this.b + c + d} <br> var o = {a:1, b:3};</code>",
	answer: "The <code>apply()</code> method calls a function with a given this value and arguments provided as an array (or an array-like object).<br><code>add.apply(o, [10, 20]); <br>// 1 + 3 + 10 + 20 = 34</code>",
	source: "Mozilla Developer Network",
	sourceUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#As_a_constructor"
}];

},{}],3:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _flashcardContent = require('./flashcardContent.js');

var _flashcardModel = require('./flashcardModel.js');

var _flashcardModel2 = _interopRequireDefault(_flashcardModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FlashcardController = function () {
    function FlashcardController(model) {
        _classCallCheck(this, FlashcardController);
    }

    /**
    * Includes promise chain to randomly display a card's content and remember the order
    * Called from ./app.js and ./flashcardView.js
    * @param {Object} model - flashcard model
    * @param {string} action - pagination direction a user clicks
    */

    _createClass(FlashcardController, [{
        key: 'render',
        value: function render(model, action) {
            model.generateRandomNum().then(function (number) {
                return model.addIndexToOrderArray(number, action);
            }).then(function (data) {
                return model.attachContentToDOM(action);
            }).catch(function (error) {
                console.log(error);
            });
        }
    }]);

    return FlashcardController;
}();

var controller = new FlashcardController(_flashcardModel2.default);
exports.default = controller;

},{"./flashcardContent.js":2,"./flashcardModel.js":4}],4:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flashcardContent = require('./flashcardContent.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FlashcardModel = function () {
  function FlashcardModel() {
    _classCallCheck(this, FlashcardModel);

    this.randomIndex = Math.floor(Math.random() * _flashcardContent.flashcardContent.length);
    this.orderArray = [];
  }

  /**
  * Generates a random number and saves it to this.randomIndex
  */

  _createClass(FlashcardModel, [{
    key: 'generateRandomNum',
    value: function generateRandomNum() {
      var number = Math.floor(Math.random() * _flashcardContent.flashcardContent.length);
      // this.randomIndex = number;
      return Promise.resolve(number);
    }

    /**
    * If the action is not 'back', remember the order of random numbers generated
    * @param {number} number - value from this.randomIndex
    * @param {string} action - pagination direction a user clicks
    */

  }, {
    key: 'addIndexToOrderArray',
    value: function addIndexToOrderArray(number, action) {
      if (action != 'back') {
        this.orderArray.push(number);
      }
      return Promise.resolve(true);
    }

    /**
    * Determine card content based on action and attach to DOM
    * @param {string} action - pagination direction a user clicks
    */

  }, {
    key: 'attachContentToDOM',
    value: function attachContentToDOM(action) {
      var setQandA = function setQandA(index) {
        var card = _flashcardContent.flashcardContent[index];
        var question = card.question;
        var answer = card.answer + '<small><a href="' + card.sourceUrl + '">' + card.source + '</a></small>';

        $('.question').html(question);
        $('.answer').html(answer).hide();
      };

      if (action === 'back') {
        if (this.orderArray.length > 1) {
          // this.orderArray.pop();
          // const previousIndex = this.orderArray[this.orderArray.length - 1];
          var previousIndex = this.orderArray.pop();
          setQandA(previousIndex);
        } else {
          $('.back').addClass('faded');
        }
      } else {
        setQandA(this.randomIndex);
        $('.back').removeClass('faded');
      }

      return Promise.resolve(true);
    }
  }]);

  return FlashcardModel;
}();

var model = new FlashcardModel();

exports.default = model;

},{"./flashcardContent.js":2}],5:[function(require,module,exports){
'use strict';

var _flashcardController = require('./flashcardController.js');

var _flashcardController2 = _interopRequireDefault(_flashcardController);

var _flashcardModel = require('./flashcardModel.js');

var _flashcardModel2 = _interopRequireDefault(_flashcardModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$('.next').on('click', function () {
	var action = "next";
	_flashcardController2.default.render(_flashcardModel2.default, action);
});

$('.back').on('click', function () {
	var action = "back";
	_flashcardController2.default.render(_flashcardModel2.default, action);
});

$('.show-answer').on('click', function () {
	$('.answer').show();
});

},{"./flashcardController.js":3,"./flashcardModel.js":4}]},{},[1]);
