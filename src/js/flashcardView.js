import controller from "./flashcardController.js";
import model from './flashcardModel.js';


$('.next').on('click', () => {
    const action = "next";
    controller.render(model, action); 
});

$('.back').on('click', () => {
    const action = "back";
    controller.render(model, action); 
});

$('.show-answer').on('click', () => {
    $('.answer').show(); 
});


