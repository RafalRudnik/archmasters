gsap.registerPlugin(ScrollTrigger, TextPlugin);
const headerTxt = document.querySelector('.header__main');
const aboutLeftCard = document.querySelector('.about-left');
const aboutRightCard = document.querySelector('.about-right');
const aboutMiddelCard = document.querySelector('.about__card-txt--middle');

const imgDesc = document.querySelectorAll('.work__section-img-txt');
const workDescOne = document.querySelector('.work-desc-one');
const workDescTwo = document.querySelector('.work-desc-two');
const allWorkSections = document.querySelectorAll('section');
const allWorkDesc = document.querySelectorAll('.work-descriptions');
const allWorkDescriptionBox = document.querySelectorAll('.work__section-desc');
const btnOne = document.querySelector('.work__section-button-one');
const btnTwo = document.querySelector('.work__section-button-two');
const btnThree = document.querySelector('.work__section-button-three');
const contactBanner = document.querySelector('.contact__baner-anim');

let resolution = gsap.matchMedia();

resolution.add('(min-width: 768px)', () => {
	allWorkDescriptionBox.forEach((section) => {
		gsap.fromTo(
			section,
			{ opacity: 1 },
			{
				opacity: 0,
				duration: 1,
				ease: 'easeInOut',
				scrollTrigger: {
					trigger: section,
					start: 'top 0%',
					end: 'bottom -50%', //gdzie ma sie skonczyc
					scrub: true, //scroll dziala w obie strony
					pin: true,
				},
			}
		);
	});

	imgDesc.forEach((desc) => {
		gsap.fromTo(
			desc,
			{ y: '-=0px', opacity: 0.5 },
			{
				y: '+=130px',
				stagger: 0.2,
				duration: 1,
				opacity: 1,
				ease: 'easeInOut',
				scrollTrigger: {
					trigger: desc,
					start: 'top 30%',
					end: 'bottom -20%', //gdzie ma sie skonczyc
					scrub: true, //scroll dziala w obie strony
					pin: true,
				},
			}
		);
	});
});

gsap.fromTo(
	headerTxt,
	{ y: 0, opacity: 1 },
	{
		y: '+=100',
		opacity: 0,
		stagger: 0.2,
		duration: 1,
		ease: 'easeInOut',
		scrollTrigger: {
			trigger: headerTxt,
			start: 'center center',
			end: 'bottom 0', //gdzie ma sie skonczyc
			scrub: true, //scroll dziala w obie strony
			pin: true,
		},
	}
);

gsap.fromTo(
	aboutLeftCard,
	{ x: '-=50' },
	{
		x: 0,
		stagger: 0.2,
		duration: 1,
		ease: 'easeInOut',
		scrollTrigger: {
			trigger: aboutLeftCard,
			start: 'top 50%',
			end: 'top 0%', //gdzie ma sie skonczyc
			scrub: true, //scroll dziala w obie strony
		},
	}
);
gsap.fromTo(
	aboutRightCard,
	{ x: '+=50' },
	{
		x: 0,
		stagger: 0.2,
		duration: 1,
		ease: 'easeInOut',
		scrollTrigger: {
			trigger: aboutRightCard,
			start: 'top 50%',
			end: 'top 0%', //gdzie ma sie skonczyc
			scrub: true, //scroll dziala w obie strony
		},
	}
);
gsap.fromTo(
	aboutMiddelCard,
	{ y: '+=100' },
	{
		y: 0,
		stagger: 0.2,
		duration: 1,
		ease: 'easeInOut',
		scrollTrigger: {
			trigger: aboutMiddelCard,
			start: 'top 50%',
			end: 'top -30%', //gdzie ma sie skonczyc
			// scrub: true, //scroll dziala w obie strony
		},
	}
);

gsap.fromTo(
	contactBanner,
	{ y: 0 },
	{
		y: '+=100',
		duration: 1,
		ease: 'easeInOut',
		scrollTrigger: {
			trigger: contactBanner,
			start: 'top 60%',
			end: 'top: 30%', //gdzie ma sie skonczyc
			scrub: true, //scroll dziala w obie strony
			pin: true,
		},
	}
);

const handleObserver = () => {
	const currentSection = window.scrollY;
	let workDescOne = document.querySelector('.work-desc-one');
	let workDescTwo = document.querySelector('.work-desc-two');
	let workDescThree = document.querySelector('.work-desc-three');
	allWorkSections.forEach((section) => {
		if (
			section.classList.contains('work__section-one') &&
			section.offsetTop <= currentSection + 600
		) {
			btnOne.classList.add('btnAnim');
			if (workDescOne.classList.contains('unactive-desc')) {
				workDescOne.classList.remove('unactive-desc');
			}
			workDescOne.classList.add('active-desc');
			if (workDescOne.classList.contains('active-desc')) {
				test();
			}
		} else if (
			section.classList.contains('work__section-two') &&
			section.offsetTop <= currentSection + 600
		) {
			btnTwo.classList.add('btnAnim');
			btnOne.classList.remove('btnAnim');
			workDescOne.classList.remove('active-desc');
			workDescOne.classList.add('unactive-desc');
			if (workDescTwo.classList.contains('unactive-desc')) {
				workDescTwo.classList.remove('unactive-desc');
			}
			workDescTwo.classList.add('active-desc');
			if (workDescTwo.classList.contains('active-desc')) {
				test();
			}
			test2();
		} else if (
			section.classList.contains('work__section-three') &&
			section.offsetTop <= currentSection + 600
		) {
			btnTwo.classList.remove('btnAnim');
			btnThree.classList.add('btnAnim');
			workDescTwo.classList.remove('active-desc');
			workDescOne.classList.remove('unactive-desc');
			workDescTwo.classList.add('unactive-desc');
			if (workDescThree.classList.contains('unactive-desc')) {
				workDescThree.classList.remove('unactive-desc');
			}
			workDescThree.classList.add('active-desc');
			if (workDescThree.classList.contains('active-desc')) {
				test();
			}
			test2();
		} else if (
			section.classList.contains('contact') &&
			section.offsetTop <= currentSection + 400
		) {
			btnThree.classList.remove('btnAnim');
			workDescThree.classList.remove('active-desc');
			workDescTwo.classList.remove('unactive-desc');
			workDescThree.classList.add('unactive-desc');
			test2();
		} else if (
			section.classList.contains('work__section-one') &&
			section.offsetTop >= currentSection + 2000
		) {
			handleAllBtns();
			removeActiveSection();
		}
	});
};
const handleAllBtns = () => {
	const allBtns = document.querySelectorAll('.work__section-button');
	allBtns.forEach((btn) => btn.classList.remove('btnAnim'));
};

const removeActiveSection = () => {
	allWorkSections.forEach((section) => section.classList.remove('active-desc'));
	allWorkDesc.forEach((desc) => (desc.textContent = ''));
};

const test = () => {
	let activeDesc = document.querySelector('.active-desc');
	gsap.to(activeDesc, {
		duration: 0.7,
		delay: 0,
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptate consectetur, aspernatur apartamens sur cor cos',
		ease: 'none',
	});
};
const test2 = () => {
	let activeDesc = document.querySelector('.unactive-desc');
	gsap.to(activeDesc, {
		duration: 0.7,
		delay: 0,
		text: '',
		ease: 'none',
	});
};

window.addEventListener('scroll', handleObserver);
