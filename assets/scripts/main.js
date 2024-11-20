import { Modal } from './modal.js';
import { AlertError } from "./alert-error.js";
import { notANumber, calculateIMC } from './utils.js'; 

// variables
const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

//Events
inputWeight.oninput = () => AlertError.close();
inputHeight.oninput = () => AlertError.close();

form.onsubmit = function(event) {
	event.preventDefault(); //avoid Page Load from form submit button, which is its natural behavior
	const weight = inputWeight.value;
	const height = inputHeight.value;

	const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

	if (weightOrHeightIsNotANumber){
		AlertError.open();
		return // interrompe a function já q não teríamos n°s válidos
	}

	AlertError.close(); 

	const result = calculateIMC(weight, height)
  displayResultMessage(result);
}
	
function displayResultMessage(result){
	Modal.message.innerText = `Seu IMC é de ${result}.`
	Modal.open();
}


//NOTES:
// A função acima chama propriedades e métodos de objetos de módulos (arquivos .js) separados desse script para manter maior organização
//As chamadas dos scripts dos outros módulos se faz através do 'import' e 'export' (vide material didático)
	



// 3 ways to create and assign a function to an event
// form.onsubmit = function() {
// }

// form.onsubmit = () => {}

// form.onsubmit = handleSubmit

// function handleSubmit(){}