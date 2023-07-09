console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form successfully submitted!');
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const catCompliment = evt => {
	evt.preventDefault();

	alert('Be hypnotized by the fuzzy belly.');
}

let catPic = document.querySelector('img');

catPic.addEventListener("mouseover", catCompliment);