# ES2015 Flashcard App

A basic MVC app written in vanilla ES2015 JavaScript, with a toolset of Babel, Gulp, Browserify and Sass. Users can view flashcard questions, click to reveal answers, and paginate forward and backward through cards.

[www.ahoef.co/flashcards](www.ahoef.co/flashcards)


### Development 

Clone or fork this repo, run `npm install` from the directory, then run `gulp`, and you're all set! A local server isn't required. 

I chose to set up my flashcard content around JavaScript, but you could easily change the questions and answers to whatever you'd like to study. Here's the schema for a card:

```javascript
{
	question: "What is a pure function?",
	answer: "A pure function is a function that, given the same input, will always return the same output and does not have any observable side effect.",
	source: "Professor Frisby's Mostly Adequate Guide to Functional Programming",
	sourceUrl: "https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch3.html"
}
```


