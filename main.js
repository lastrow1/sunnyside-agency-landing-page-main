const navicon = document.querySelector('.menuIcon');
const navLinks  = document.querySelector('.navlinks');


	console.log('Loaded')


navicon.addEventListener("click", function(){
	console.log('Clicked')
	navLinks.classList.toggle('navToggle')
})