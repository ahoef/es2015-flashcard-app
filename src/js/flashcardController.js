import { flashcardContent } from './flashcardContent.js';
import model from './flashcardModel.js';

class FlashcardController {
    constructor(model){}

    /**
    * Includes promise chain to randomly display a card's content and remember the order
    * Called from ./app.js and ./flashcardView.js
    * @param {Object} model - flashcard model
    * @param {string} action - pagination direction a user clicks
    */
    render(model, action){
  	    model.generateRandomNum()
  		.then( number => {
  			return model.addIndexToOrderArray(number, action);
  		})
  		.then( data => {
  			return model.attachContentToDOM(action);
  		})
        .catch(error => {
            console.log(error);
        })
    }
}

let controller = new FlashcardController(model);
export default controller;
