import { flashcardContent } from './flashcardContent.js';

class FlashcardModel {
  	constructor(){
	  	this.randomIndex = 0;
	  	this.orderArray = [];
	}
	
	generateRandomNum() {
  		const number = Math.floor((Math.random() * flashcardContent.length));
  		this.randomIndex = number;
  		return Promise.resolve(number);
  	} 

  	addIndexToOrderArray(number, action) {
  		if (action != 'back') {
	  		this.orderArray.push(number);
	  	}
  		return Promise.resolve(true);
  	}

  	attachContentToDOM(action) {
  		let question;
  		let answer;
  		let previousIndex;

  		if (action === 'back') {
  			if (this.orderArray.length > 1) {
  				this.orderArray.pop();
  				previousIndex = this.orderArray[this.orderArray.length - 1];

  				question = flashcardContent[previousIndex].question;
  				answer = flashcardContent[previousIndex].answer;

  			} else {
  				$('.back').hide();
  			}

  		} else {

  			previousIndex = this.orderArray[this.orderArray.length - 2];
  			question = flashcardContent[this.randomIndex].question;
  			answer = flashcardContent[this.randomIndex].answer;
  			$('.back').show();
  		}

  		
  		$('.question').html(question);
  		$('.answer').html(answer).hide();


  		return Promise.resolve(true);
  	}

}

const model = new FlashcardModel();

export default model;