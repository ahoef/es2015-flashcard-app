import { flashcardContent } from './flashcardContent.js';
import model from './flashcardModel.js';

class FlashcardController {
  constructor(model){
  }

  render(model, action){

  	model.generateRandomNum()
  		.then( number => {
  			return model.addIndexToOrderArray(number, action);
  		})
  		.then( data => {
  			return model.attachContentToDOM(action);
  		})

		console.log(model);
    
  }
}

let controller = new FlashcardController(model);
export default controller;
