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
        const setQandA = index => {
            const card = flashcardContent[index];
            const question = card.question;
            const answer = `${card.answer}
                  <small><a href="${card.sourceUrl}">
                  ${card.source}</a></small>` ;

            $('.question').html(question);
            $('.answer').html(answer).hide();
        }

  		if (action === 'back') {
  			if (this.orderArray.length > 1) {
  				this.orderArray.pop();
  				const previousIndex = this.orderArray[this.orderArray.length - 1];
                setQandA(previousIndex);
  			} else {
  				$('.back').hide();
  			}

  		} else {
            setQandA(this.randomIndex);
            $('.back').show();
  		}

  		return Promise.resolve(true);
  	}
}

const model = new FlashcardModel();

export default model;