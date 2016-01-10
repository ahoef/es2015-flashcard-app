export const flashcardContent = [
	{
		question: "What is a primitive in JavaScript?",
		answer: "A primitive (primitive value, primitive data type) is data that is not an object and has no methods. In JavaScript, there are 6 primitive data types: string, number, boolean, null, undefined, symbol (new in ECMAScript 2015).",
		source: "Mozilla Developer Network",
		sourceUrl: "https://developer.mozilla.org/en-US/docs/Glossary/Primitive"
	},
	{
		question: "What's the git command to change your last commit message?",
		answer: "<code>git commit --amend -m 'new message'</code>",
		source: "Git Documentation",
		sourceUrl: "https://git-scm.com/docs/git-commit-tree"
	},
	{
		question: "What does the <code>.reduce()</code> method do?",
		answer: "It applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.",
		source: "Mozilla Developer Network",
		sourceUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce"
	},
	{
		question: "What does the <code>.map()</code> method do?",
		answer: "It iterates through an array's contents, applies a function to each, and returns a new array",
		source: "Egghead.io",
		sourceUrl: "https://egghead.io/lessons/javascript-the-array-map-method"
	},
	{
		question: "What's the value of <code>keyword</code> in this code? <br> <code>var keyword = true && 'hello';</code> ",
		answer: "<code>'hello'</code>. If both values are truthy, the last truthy value is set. If there's a falsy, the first falsy value is set.",
		source: "Code School JavaScript Best Practices",
		sourceUrl: "https://www.codeschool.com/courses/javascript-best-practices"
	},
	{
		question: "What does the <code>while</code> statement do?",
		answer: "The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.",
		source: "Mozilla Developer Network",
		sourceUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while"
	},
	{
		question: "Are there true classes in JavaScript?",
		answer: "No. The class syntax is not introducing a new object-oriented inheritance model to JavaScript. JavaScript classes provide a much simpler and clearer syntax to create objects and deal with inheritance.",
		source: "Mozilla Developer Network",
		sourceUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes"
	},
	{
		question: "What is a radix?",
		answer: "The base for integer conversion in <code>.parseInt()</code>, necessary for browsers pre 2013<br><code>parseInt('010', 10); // 10</code>",
		source: "Mozilla Developer Network",
		sourceUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt"
	},
	{
		question: "What are the falsy values?",
		answer: "false, 0, empty strings (\"\"), NaN, null, and undefined ",
		source: "Mozilla Developer Network",
		sourceUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript"
	},
	{
		question: "What's an object literal?",
		answer: "An object literal is a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}).<br><code>var car = { myCar: \"Saturn\", getCar: carTypes(\"Honda\"), special: sales };</code>",
		source: "Mozilla Developer Network",
		sourceUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Object_literals"
	},
	{
		question: "What are the three parameters of <code>.forEach()</code>?",
		answer: "<code>[\"dog\", \"cat\", \"hen\"].forEach(function(currentValue, index, array) {// Do something with currentValue or array[index]});</code>",
		source: "Mozilla Developer Network",
		sourceUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript"
	},
	{
		question: "What is a pure function?",
		answer: "A pure function is a function that, given the same input, will always return the same output and does not have any observable side effect.",
		source: "Professor Frisby's Mostly Adequate Guide to Functional Programming",
		sourceUrl: "https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch3.html"
	},
	{
		question: "What are first class functions?",
		answer: "We can treat functions like any other data type and there is nothing particularly special about them - they may be stored in arrays, passed around, assigned to variables, what have you.",
		source: "Professor Frisby's Mostly Adequate Guide to Functional Programming",
		sourceUrl: "https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch1.html"
	},
	{
		question: "What's the definition of a side effect within a function?",
		answer: "A side effect is a change of system state or observable interaction with the outside world that occurs during the calculation of a result.",
		source: "Professor Frisby's Mostly Adequate Guide to Functional Programming",
		sourceUrl: "https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch3.html"
	},
	{
		question: "What's a closure?'",
		answer: "A closure is the combination of a function and the scope object in which it was created. Closures let you save state — as such, they can often be used in place of objects.",
		source: "Stack Overflow",
		sourceUrl: "http://stackoverflow.com/questions/111102/how-do-javascript-closures-work"
	}
];