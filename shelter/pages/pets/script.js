// console.log('Реализация бургер-меню на обеих страницах - 26 баллов \n Реализация слайдера карусели на странице мэйн - 36 баллов \n Реализация пагинации на странице Pets - 36 баллов \n Итого: 98 баллов \n PS: Попап чуть чуть не успел допилить, 3 часа до дедлайна, если будет время проверить чуть позже, то его тоже сделаю ')

const pets = [
  {
    "name": "Jennifer",
    "img": "../../assets/image/pets/jennifer.png",
		"img_modal": "../../assets/image/modal_pets/jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/image/pets/sophia.png",
		"img_modal": "../../assets/image/modal_pets/sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/image/pets/woody.png",
		"img_modal": "../../assets/image/modal_pets/woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/image/pets/scarlett.png",
		"img_modal": "../../assets/image/modal_pets/scarlett.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "../../assets/image/pets/katrine.png",
		"img_modal": "../../assets/image/modal_pets/katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/image/pets/timmy.png",
		"img_modal": "../../assets/image/modal_pets/timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/image/pets/freddie.png",
		"img_modal": "../../assets/image/modal_pets/freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/image/pets/charly.png",
		"img_modal": "../../assets/image/modal_pets/charly.png",
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

// ------------------------- pagination----------------------------

const BTN_FIRST = document.querySelector('#btn-first');
const BTN_PREV = document.querySelector('#btn-prev');
const BTN_CURRENT = document.querySelector('#btn-current');
const BTN_NEXT = document.querySelector('#btn-next');
const BTN_LAST = document.querySelector('#btn-last');
const PETS_GALLERY = document.querySelector('.pets__gallery');

let cardsNumberArray = []; // массив с номерами повторяющихся карточек по ([[3], [3], [2]])

const getPetsArray = () => {  // собираем массив с уникальными значениями ([[3], [3], [2]])
	let array = [];
	let subArray = [];
	const size = 3;
	for (let i = 0; array.length < 8; i++) {
		let number = Math.floor(Math.random() * 8);
		if (array.length === 0) {
			array.push(number)
		} if (array.indexOf(number) === -1) {
				array.push(number)
		}
	}
	for (let j = 0; j < Math.ceil(array.length / size); j++) {
		subArray[j] = array.slice((j * size), (j * size) + size)
	}
	for (let i = 0; cardsNumberArray.length < 6; i++)	{
		cardsNumberArray.push(subArray)
	}
}

getPetsArray ();

let arrayNumberCard = cardsNumberArray.flat(1); // массив с одинаковыми последовательностями карточек делаем массивом 2-го уровня

const countPetsArrayRandom = () => { // перемешиваем последовательности подмассивов
	let subArr = []; 
	for (let x = 0; x < arrayNumberCard.length; x++) {
		const shuffle = (array) => {
			let kof = array.length, j, i;
			while (kof) {
				i = Math.floor(Math.random() * kof--);
				j = array[kof];
				array[kof] = array[i];
				array[i] = j;
			}
			subArr.push(...array)
		}
		shuffle(arrayNumberCard[x])
	}
	return subArr;
}

const arrayNumberCardRandom = countPetsArrayRandom();


const createCardTemplate = (number) => { // собираем карточку
	const card = document.createElement('div');
	card.classList.add('cards');
	card.classList.add('pets');

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

const countCardsVisible = () => { //считаем количество карт на странице для разных расширений
	if (PETS_GALLERY.offsetWidth >= 1080) {
		return 8;
	} else if (PETS_GALLERY.offsetWidth <= 562) {
		return 3;
	} else {
		return 6;
	}
}

const countPages = () => (arrayNumberCardRandom.length / countCardsVisible() - 1); // количество страниц
let currentPage = 0;

function displayList (arrData, activeCard, page) {  // собираем стартовый набор крточек
	PETS_GALLERY.replaceChildren();

	const start = activeCard * page;
	const end = start + activeCard;
	const paginatedData = arrData.slice(start, end)

	paginatedData.forEach((elem) => {
		const card = createCardTemplate(elem);
		PETS_GALLERY.append(card);
	})
}

displayList(arrayNumberCardRandom, countCardsVisible(), currentPage)

const addClassButton = () => { 		// активные и пассивные кнопки 
	BTN_CURRENT.firstChild.innerText = currentPage + 1;
	if (currentPage === 0) {
		BTN_NEXT.classList.remove('passive');
		BTN_LAST.classList.remove('passive');
		BTN_FIRST.classList.add('passive');
		BTN_PREV.classList.add('passive');
	} else if (currentPage === countPages()) {
		BTN_NEXT.classList.add('passive');
		BTN_LAST.classList.add('passive');
		BTN_FIRST.classList.remove('passive');
		BTN_PREV.classList.remove('passive');
	} else {
		BTN_NEXT.classList.remove('passive');
		BTN_LAST.classList.remove('passive');
		BTN_FIRST.classList.remove('passive');
		BTN_PREV.classList.remove('passive');
	}
}

const moveNext = () => {  // далее перемотка
	if (currentPage < countPages()) {
		currentPage++;
		addClassButton();
		displayList(arrayNumberCardRandom, countCardsVisible(), currentPage);
	}
}

const movePrev = () => {
	if (currentPage > 0) {
		currentPage--;
		addClassButton();
		displayList(arrayNumberCardRandom, countCardsVisible(), currentPage);
	}
}

const moveFirst = () => {
	if (currentPage > 0) {
		currentPage = 0;
		addClassButton();
		displayList(arrayNumberCardRandom, countCardsVisible(), currentPage);
	}
}

const moveLast = () => {
	if (currentPage < countPages()) {
		currentPage = countPages();
		addClassButton();
		displayList(arrayNumberCardRandom, countCardsVisible(), currentPage);
	}
}

BTN_NEXT.addEventListener('click', moveNext);
BTN_PREV.addEventListener('click', movePrev);
BTN_FIRST.addEventListener('click', moveFirst);
BTN_LAST.addEventListener('click', moveLast)

// ------------------------- pop-ap----------------------------

const CARD = document.querySelectorAll('.card');
const POPUP = document.querySelector('.popup__pets')

const getClickedCard = () => {
	PETS_GALLERY.addEventListener('click', (event) => {
		if (event.target.parentElement.classList.contains('cards')) {
 			let manePets = event.target.parentElement.children[1].innerText;
			console.log(manePets)
			getPopupWindow();
		}
	})
}
getClickedCard()

const createPopup = (number) => { // собираем модуль
	const modalWindow = document.createElement('div');
	modalWindow.classList.add('modal__card');

	const imgContainer = document.createElement('div');
	imgContainer.classList.add('modal__image');
	modalWindow.append(imgContainer);

	const img = document.createElement('img');
	img.src = pets[number].img_modal;
	img.alt = pets[number].name;
	imgContainer.append(img);

	const content = document.createElement('div');
	content.classList.add('modal__content');
	modalWindow.append(content);

	const name = document.createElement('h2');
	name.innerText = pets[number].name;
	content.append(name);

	const type = document.createElement('h3');
	type.innerText = pets[number].type;
	content.append(type);

	const description = document.createElement('h4');
	description.innerText = pets[number].description;
	content.append(description);

	const list = document.createElement('ul');
	list.classList.add('pet__characteristic');
	content.append(list);
  
	let span1 = document.createElement('span');
	let span2 = document.createElement('span');
	let span3 = document.createElement('span');
	let span4 = document.createElement('span');
	
	const item1 = document.createElement('li');
	span1.innerText = `Age: ${pets[number].age}`
	item1.append(span1);
	list.append(item1);

	const item2 = document.createElement('li');
	span2.innerText = `Inoculations: ${pets[number].inoculations.toString()}`
	item2.append(span2);
	list.append(item2);
	
	const item3 = document.createElement('li');
	span3.innerText = `Diseases: ${pets[number].diseases.toString()}`
	item3.append(span3);
	list.append(item3);

	const item4 = document.createElement('li');
	span4.innerText = `Parasites: ${pets[number].parasites.toString()}`
	item4.append(span4);
	list.append(item4);
	
	return modalWindow;
}

const getPopupWindow = () => {
	POPUP.replaceChildren();
	POPUP.append(createPopup(2));
	POPUP.classList.toggle('active');
}