//Creating an OBJECT reponsible for manager the modal behavior
export const Modal = {
	//properties
	wrapper: document.querySelector('.modal-wrapper'),
	message: document.querySelector('.modal .title'),
	btnClose: document.querySelector('.modal .btn-close'),

	//methods
	open: function() {
		Modal.wrapper.classList.add('open')
	},
	close() {
		Modal.wrapper.classList.remove('open')
	}
}

Modal.btnClose.addEventListener('click', closeModal)
function closeModal(){
	Modal.close();
}

window.addEventListener('keydown', handleKeydown);
function handleKeydown(event){
	if(event.key === 'Escape'){
		Modal.close();
	}
}
