const navBtn = document.querySelector('.nav__button');
const burgerBtn = document.querySelector('.nav__burger');
const navMenu = document.querySelector('.nav');
const navList = document.querySelector('.nav__ulList');
const allLinks = document.querySelectorAll('.nav__link');

const acordeonBoxes = document.querySelectorAll('.accordeon__card');
const btnOne = document.querySelector('.work__section-button-one');
const closeBtn = document.querySelector('.close');
const buidlingOne = document.querySelector('.building-one');

const handleShowMenu = () => {
	navMenu.classList.toggle('showNavigation');
	navList.classList.toggle('showMenu');
	burgerBtn.classList.toggle('hideBurger');
	navMenu.classList.remove('hideNavigation');
};

const handlehideMenu = () => {
	navMenu.classList.toggle('hideNavigation');
};

function closeCard() {
	if (this.classList.contains('accordeonOpen')) {
		this.classList.remove('accordeonOpen');
		handlePlusMinus();
	} else {
		let plus = this.children[0];
		closeAccordeonItems();
		handlePlusMinus();
		this.classList.toggle('accordeonOpen');
		plus.classList.add('hidePlus');
	}
}

const closeAccordeonItems = () => {
	const allActiveItems = document.querySelectorAll('.accordeonOpen');
	allActiveItems.forEach((item) => item.classList.remove('accordeonOpen'));
};

const handlePlusMinus = () => {
	const accordBtns = document.querySelectorAll('.accordeon__card-top');
	accordBtns.forEach((button) => button.classList.remove('hidePlus'));
};

const accordeonObserver = () => {
	const currentSection = window.scrollY;
	acordeonBoxes.forEach((box) => {
		if (
			box.classList.contains('accordeon-last') &&
			box.offsetTop <= currentSection + 100
		) {
			closeAccordeonItems();
			handlePlusMinus();
		}
	});
};
//this function saves mixed height for ScrollTrigger by closing accordeon

const handleBuidlingShow = () => {
	buidlingOne.classList.toggle('showBuilding');
	buidlingOne.classList.remove('hideBuilding');
};
const handBuldingClose = () => {
	buidlingOne.classList.toggle('showBuilding');
	buidlingOne.classList.add('hideBuilding');
};

burgerBtn.addEventListener('click', handleShowMenu);
navBtn.addEventListener('click', handleShowMenu);
navBtn.addEventListener('click', handlehideMenu);
allLinks.forEach((link) => link.addEventListener('click', handleShowMenu));
allLinks.forEach((link) => link.addEventListener('click', handlehideMenu));
acordeonBoxes.forEach((box) => box.addEventListener('click', closeCard));
btnOne.addEventListener('click', handleBuidlingShow);
closeBtn.addEventListener('click', handBuldingClose);
window.addEventListener('scroll', accordeonObserver);
