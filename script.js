let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};

const list = document.querySelectorAll('[name="nav-a"]')

function activeLink(){
	list.forEach((item) =>
	item.classList.remove('active'))
	this.classList.add('active')
}

list.forEach((item) =>
item.addEventListener('click', activeLink))

function toggleMode(){
  const html = document.documentElement

  html.classList.toggle('light')
}

