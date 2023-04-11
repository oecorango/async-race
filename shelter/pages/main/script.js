console.log('Реализация бургер-меню на обеих страницах - 26 баллов \n Реализация слайдера карусели на странице мэйн - 36 баллов \n Реализация пагинации на странице Pets - 36 баллов \n Итого: 98 баллов \n PS: Попап чуть чуть не успел допилить, 3 часа до дедлайна, если будет время проверить чуть позже, то его тоже сделаю \n PPS: Все засыпаю ;) Модальное окно почти сделал, код конечно кривой, да еще и чуть не дописан, завтра точно добью ')

const pets = [
  {
		"id": "001",
    "name": "Jennifer",
    "img": "../../assets/image/pets/jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
		"id": "002",
    "name": "Sophia",
    "img": "../../assets/image/pets/sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
		"id": "003",
    "name": "Woody",
    "img": "../../assets/image/pets/woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
		"id": "004",
    "name": "Scarlett",
    "img": "../../assets/image/pets/scarlett.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
		"id": "005",
    "name": "Katrine",
    "img": "../../assets/image/pets/katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
		"id": "006",
    "name": "Timmy",
    "img": "../../assets/image/pets/timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
		"id": "007",
    "name": "Freddie",
    "img": "../../assets/image/pets/freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
		"id": "008",
    "name": "Charly",
    "img": "../../assets/image/pets/charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
]



// -------------------------hamburger----------------------------

const hamburgerContainer = document.querySelector('.navigation__container');
const hamburgerMenu = document.querySelector('.navigation__list');
const hamburgerButton = document.querySelector('.hamburger__icon');
const body = document.body;

if (hamburgerMenu && hamburgerButton) {
	hamburgerButton.addEventListener('click', () => {
		hamburgerContainer.classList.toggle('active')
		hamburgerMenu.classList.toggle('active')
		hamburgerButton.classList.toggle('active')
		body.classList.toggle('lock')
	})

	hamburgerContainer.addEventListener('click', event => {
		if (event.target.classList.contains('navigation__container')) {
			hamburgerContainer.classList.remove('active')
			hamburgerMenu.classList.remove('active')
			hamburgerButton.classList.remove('active')
			body.classList.remove('lock')
		}
	})

	hamburgerMenu.querySelectorAll('.navigation__link').forEach(link => {
		link.addEventListener('click', () => {
			hamburgerContainer.classList.remove('active')
			hamburgerMenu.classList.remove('active')
			hamburgerButton.classList.remove('active')
			body.classList.remove('lock')
		})
	})
}


const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(link => {
	link.addEventListener('click', event => {
		event.preventDefault();
		const sectionID = link.getAttribute('href').substring(1);
		document.getElementById(sectionID).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	})
})

// -------------------------slider----------------------------

const CAROUSEL = document.querySelector('.carousel__list')
const BTN_LEFT = document.querySelector('.carousel__prev');
const BTN_RIGHT = document.querySelector('.carousel__next');
const ITEM_LEFT = document.querySelector('#item-left');
const ITEM_RIGHT = document.querySelector('#item-right');
const ITEM_ACTIVE = document.querySelector('#item-active');

const idCardNumbers = [];
for (let i = 0; idCardNumbers.length < 6; i++) {
	let number = Math.floor(Math.random() * 8);
	if (idCardNumbers.length === 0) {
		idCardNumbers.push(number)
	} else {
		if (idCardNumbers.indexOf(number) === -1) {
			idCardNumbers.push(number)
		}
	}
}

const createCardTemplate = (number) => {
	// const numberCard = number;
	const card = document.createElement('div');
	card.classList.add('cards');
	card.id = pets[number].id;

	const img = document.createElement('img');
	img.src = pets[number].img;
	img.alt = 'pet';
	card.append(img)

	const header = document.createElement('h3');
	header.classList.add('pets-card-title');
	header.innerText = pets[number].name;
	card.append(header);

	const button = document.createElement('button');
	button.classList.add('button');
	button.classList.add('button__carousel');
	button.innerText = 'Learn more';
	card.append(button);

	return card;
}

const createFirstCardKit = () => {
	ITEM_ACTIVE.replaceChildren();
	for (let i = 0; i < 3; i++) {
		const card = createCardTemplate(idCardNumbers[i]);
		ITEM_ACTIVE.appendChild(card);
	}
	ITEM_LEFT.replaceChildren();
	for (let i = 0; i < 3; i++) {
		const card = createCardTemplate(idCardNumbers[i + 3]);
		ITEM_LEFT.appendChild(card);
	}
	ITEM_RIGHT.replaceChildren();
	for (let i = 0; i < 3; i++) {
		const card = createCardTemplate(idCardNumbers[i + 3]);
		ITEM_RIGHT.appendChild(card);
	}
}
createFirstCardKit()

const moveLeft = () => {
	CAROUSEL.classList.add('transition-left');
	BTN_LEFT.removeEventListener('click', moveLeft);
	BTN_RIGHT.removeEventListener('click', moveRight);
}

const moveRight = () => {
	CAROUSEL.classList.add('transition-right');
	BTN_RIGHT.removeEventListener('click', moveRight);
	BTN_LEFT.removeEventListener('click', moveLeft);
}

BTN_LEFT.addEventListener('click', moveLeft);
BTN_RIGHT.addEventListener('click', moveRight);

CAROUSEL.addEventListener('animationend', (event) => {
	let changedItem;
	if (event.animationName === 'move-left-3card' || event.animationName === 'move-left-2card' || event.animationName ===  'move-left-1card') {
		CAROUSEL.classList.remove('transition-left');
		changedItem = ITEM_LEFT;
		CAROUSEL.classList.remove('transition-right');
		ITEM_RIGHT.innerHTML = ITEM_ACTIVE.innerHTML;
		ITEM_ACTIVE.innerHTML = ITEM_LEFT.innerHTML;
	} else {
		CAROUSEL.classList.remove('transition-right');
		changedItem = ITEM_RIGHT;
		CAROUSEL.classList.remove('transition-left');
		ITEM_LEFT.innerHTML = ITEM_ACTIVE.innerHTML;
		ITEM_ACTIVE.innerHTML = ITEM_RIGHT.innerHTML;
	}

	let arrayIdItemActive = [+ITEM_ACTIVE.children[0].id - 1, +ITEM_ACTIVE.children[1].id - 1, +ITEM_ACTIVE.children[2].id - 1];
	for (let i = 0; arrayIdItemActive.length < 6; i++) {
		let number = Math.floor(Math.random() * 8);
 		if (arrayIdItemActive.indexOf(number) === -1) {
			arrayIdItemActive.push(number)
		}	
	}

	changedItem.innerHTML = '';
		for (let i = 0; i < 3; i++) {
		const card = createCardTemplate(arrayIdItemActive[i + 3]);
		changedItem.appendChild(card);
	}

	BTN_LEFT.addEventListener('click', moveLeft);
	BTN_RIGHT.addEventListener('click', moveRight);
})

// -------------------------pop-app----------------------------
