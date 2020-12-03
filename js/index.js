// hamburger toggler

const hamburger = document.querySelector('.hamburger');
const navListContainer = document.querySelector('.nav_list_container');
const navLink = document.querySelectorAll('.nav_link');
const nav = document.querySelector('.nav');

// portfolio filter var

const filItem = document.querySelectorAll('.filters_item');
const filAll = document.querySelector('.filter_all');
const filWebsite = document.querySelector('.filter_website');
const filGames = document.querySelector('.filter_games');
const filPhotoshop = document.querySelector('.filter_photoshop');
const filDigitalArt = document.querySelector('.filter_digital-art');

const projAll = document.querySelectorAll('.single_portfolio');
const projWeb =document.querySelectorAll('.project_website');
const projGames =document.querySelectorAll('.project_games');
const projPhotoshop =document.querySelectorAll('.project_photoshop');
const projDigitalArt =document.querySelectorAll('.project_digital-art');

hamburger.addEventListener('click', () =>{
	navListContainer.classList.toggle('open');
})

navLink.forEach(link =>{
	link.addEventListener('click', () =>{
		navListContainer.classList.remove('open');
	})
})

window.addEventListener("scroll", () =>{
	nav.classList.toggle("fixed", window.scrollY > 500);
})

// portfolio filter

filAll.addEventListener("click", () =>{
	projAll.forEach((c) =>{
		c.classList.remove('hidden');
	})

	filItem.forEach((c) =>{
		c.classList.remove('selected');
	})
	filAll.classList.add('selected');
})

filWebsite.addEventListener("click", () =>{
	projAll.forEach((c) =>{
		c.classList.add('hidden');
	})
	projWeb.forEach((c) =>{
		c.classList.remove('hidden');
	})

	filItem.forEach((c) =>{
		c.classList.remove('selected');
	})
	filWebsite.classList.add('selected');
})

filGames.addEventListener("click", () =>{
	projAll.forEach((c) =>{
		c.classList.add('hidden');
	})
	projGames.forEach((c) =>{
		c.classList.remove('hidden');
	})

	filItem.forEach((c) =>{
		c.classList.remove('selected');
	})
	filGames.classList.add('selected');
})

filPhotoshop.addEventListener("click", () =>{
	projAll.forEach((c) =>{
		c.classList.add('hidden');
	})
	projPhotoshop.forEach((c) =>{
		c.classList.remove('hidden');
	})

	filItem.forEach((c) =>{
		c.classList.remove('selected');
	})
	filPhotoshop.classList.add('selected');
})

filDigitalArt.addEventListener("click", () =>{
	projAll.forEach((c) =>{
		c.classList.add('hidden');
	})
	projDigitalArt.forEach((c) =>{
		c.classList.remove('hidden');
	})

	filItem.forEach((c) =>{
		c.classList.remove('selected');
	})
	filDigitalArt.classList.add('selected');
})

