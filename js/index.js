"use strict";

const DATA = [
	{
		"first name": "Олексій",
		"last name": "Петров",
		photo: "./img/trainers/trainer-m1.jpg",
		specialization: "Басейн",
		category: "майстер",
		experience: "8 років",
		description:
			"Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
	},
	{
		"first name": "Марина",
		"last name": "Іванова",
		photo: "./img/trainers/trainer-f1.png",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
	},
	{
		"first name": "Ігор",
		"last name": "Сидоренко",
		photo: "./img/trainers/trainer-m2.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
	},
	{
		"first name": "Тетяна",
		"last name": "Мороз",
		photo: "./img/trainers/trainer-f2.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "10 років",
		description:
			"Тетяна є експертом в бойових мистецтвах. Вона проводить тренування для професіоналів і новачків. Її підхід до навчання допомагає спортсменам досягати високих результатів.",
	},
	{
		"first name": "Сергій",
		"last name": "Коваленко",
		photo: "./img/trainers/trainer-m3.jpg",
		specialization: "Тренажерний зал",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Сергій фокусується на роботі з фітнесом та кардіотренуваннями. Він вдосконалив свої методики протягом багатьох років. Його учні завжди в формі та енергійні.",
	},
	{
		"first name": "Олена",
		"last name": "Лисенко",
		photo: "./img/trainers/trainer-f3.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "4 роки",
		description:
			"Олена спеціалізується на синхронному плаванні. Вона тренує команди різного рівня. Її команди завжди займають призові місця на змаганнях.",
	},
	{
		"first name": "Андрій",
		"last name": "Волков",
		photo: "./img/trainers/trainer-m4.jpg",
		specialization: "Бійцівський клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Андрій має досвід у вивченні різних бойових мистецтв. Він викладає техніку та тактику бою. Його учні здобувають перемоги на міжнародних турнірах.",
	},
	{
		"first name": "Наталія",
		"last name": "Романенко",
		photo: "./img/trainers/trainer-f4.jpg",
		specialization: "Дитячий клуб",
		category: "спеціаліст",
		experience: "3 роки",
		description:
			"Наталія розробила унікальну програму для дітей дошкільного віку. Вона допомагає дітям розвивати фізичні та ментальні навички. Її класи завжди веселі та динамічні.",
	},
	{
		"first name": "Віталій",
		"last name": "Козлов",
		photo: "./img/trainers/trainer-m5.jpg",
		specialization: "Тренажерний зал",
		category: "майстер",
		experience: "10 років",
		description:
			"Віталій спеціалізується на функціональному тренуванні. Він розробив ряд ефективних тренувальних програм. Його клієнти швидко досягають бажаних результатів.",
	},
	{
		"first name": "Юлія",
		"last name": "Кравченко",
		photo: "./img/trainers/trainer-f5.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "4 роки",
		description:
			"Юлія є експертом у водних видах спорту. Вона проводить тренування з аквагімнастики та аеробіки. Її учні демонструють вражаючі показники на змаганнях.",
	},
	{
		"first name": "Олег",
		"last name": "Мельник",
		photo: "./img/trainers/trainer-m6.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "12 років",
		description:
			"Олег є визнаним майстром в бойових мистецтвах. Він тренує чемпіонів різних вагових категорій. Його методики вважаються одними з найефективніших у світі бойових мистецтв.",
	},
	{
		"first name": "Лідія",
		"last name": "Попова",
		photo: "./img/trainers/trainer-f6.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Лідія має великий досвід у роботі з дітьми. Вона організовує різноманітні спортивні ігри та заняття. Її класи завжди допомагають дітям розвивати соціальні навички та командний дух.",
	},
	{
		"first name": "Роман",
		"last name": "Семенов",
		photo: "./img/trainers/trainer-m7.jpg",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Роман є експертом у кросфіту та функціональних тренуваннях. Він розробив власні програми для різних вікових груп. Його учні часто отримують нагороди на фітнес-турнірах.",
	},
	{
		"first name": "Анастасія",
		"last name": "Гончарова",
		photo: "./img/trainers/trainer-f7.jpg",
		specialization: "Басейн",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Анастасія фокусується на водних програмах для здоров'я та фітнесу. Вона проводить тренування для осіб з різним рівнем підготовки. Її учні відзначають покращення здоров'я та благополуччя після занять.",
	},
	{
		"first name": "Валентин",
		"last name": "Ткаченко",
		photo: "./img/trainers/trainer-m8.jpg",
		specialization: "Бійцівський клуб",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Валентин є експертом в таеквондо та кікбоксингу. Він викладає техніку, тактику та стратегію бою. Його учні часто стають чемпіонами на національних та міжнародних змаганнях.",
	},
	{
		"first name": "Лариса",
		"last name": "Петренко",
		photo: "./img/trainers/trainer-f8.jpg",
		specialization: "Дитячий клуб",
		category: "майстер",
		experience: "7 років",
		description:
			"Лариса розробила комплексну програму для розвитку фізичних та інтелектуальних навичок дітей. Вона проводить заняття в ігровій формі. Її методика допомагає дітям стати активними та розумними.",
	},
	{
		"first name": "Олексій",
		"last name": "Петров",
		photo: "./img/trainers/trainer-m9.jpg",
		specialization: "Басейн",
		category: "майстер",
		experience: "11 років",
		description:
			"Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
	},
	{
		"first name": "Марина",
		"last name": "Іванова",
		photo: "./img/trainers/trainer-f9.jpg",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
	},
	{
		"first name": "Ігор",
		"last name": "Сидоренко",
		photo: "./img/trainers/trainer-m10.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
	},
	{
		"first name": "Наталія",
		"last name": "Бондаренко",
		photo: "./img/trainers/trainer-f10.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "8 років",
		description:
			"Наталія є майстром у бойових мистецтвах. Вона вивчала різні техніки та стили, із якими працює зі своїми учнями. Її підхід до навчання відповідає найвищим стандартам.",
	},
	{
		"first name": "Андрій",
		"last name": "Семенов",
		photo: "./img/trainers/trainer-m11.jpg",
		specialization: "Тренажерний зал",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Андрій спеціалізується на функціональному тренуванні. Він розробив власну систему вправ для зміцнення корпусу. Його учні завжди отримують видимі результати.",
	},
	{
		"first name": "Софія",
		"last name": "Мельник",
		photo: "./img/trainers/trainer-f11.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "6 років",
		description:
			"Софія працює з аквагімнастикою. Вона вивчила різні техніки та стили плавання. Її заняття допомагають клієнтам розслабитися та покращити фізичну форму.",
	},
	{
		"first name": "Дмитро",
		"last name": "Ковальчук",
		photo: "./img/trainers/trainer-m12.png",
		specialization: "Дитячий клуб",
		category: "майстер",
		experience: "10 років",
		description:
			"Дмитро спеціалізується на розвитку дитячого спорту. Він розробив унікальну програму для малюків. Його методики забезпечують гармонійний розвиток дітей.",
	},
	{
		"first name": "Олена",
		"last name": "Ткаченко",
		photo: "./img/trainers/trainer-f12.jpg",
		specialization: "Бійцівський клуб",
		category: "спеціаліст",
		experience: "5 років",
		description:
			"Олена є відомим тренером у жіночому бойовому клубі. Вона вивчила різні техніки самооборони. Її підхід дозволяє її ученицям відчувати себе впевнено в будь-яких ситуаціях.",
	},
];

function trainers (DATA) {       // Картки тренерів
    const container = document.querySelector(".trainers-cards__container");
    const sorting = document.querySelector(".sorting");
    const sidebar = document.querySelector(".sidebar");
	const animation = document.createElement("div");
	animation.className = "animation";
	container.append(animation);
	const h1 = document.createElement("h1");
	animation.append(h1);
	const span1 = document.createElement("span");
	span1.innerText = "L";
	const span2 = document.createElement("span");
	span2.innerText = "O";
	const span3 = document.createElement("span");
	span3.innerText = "A";
	const span4 = document.createElement("span");
	span4.innerText = "D";
	const span5 = document.createElement("span");
	span5.innerText = "I";
	const span6 = document.createElement("span");
	span6.innerText = "N";
	const span7 = document.createElement("span");
	span7.innerText = "G";
	const span8 = document.createElement("span");
	span8.innerText = "!";

	h1.append(span1);
	h1.append(span2);
	h1.append(span3);
	h1.append(span4);
	h1.append(span5);
	h1.append(span6);
	h1.append(span7);
	h1.append(span8);

	sorting.hidden = false;
	sidebar.hidden = false;
	setTimeout(() => {
        animation.remove(); 
    

		const li = [];
		const photo = [];
		const p = [];
		const button = [];

		function fill (element){
			switch(element){
				case "li":
					for(let i = 0; i < DATA.length; i++){
						let tmp = document.createElement("li");
						tmp.className = "trainer";
						li.push(tmp);
					}
					break;
				case "img":
					for(let i = 0; i < DATA.length; i++){
						let tmp = document.createElement("img");
						tmp.className = "trainer__img";
						tmp.style.height = "300px";
						tmp.style.width = "280px";
						tmp.src = DATA[i].photo;
						photo.push(tmp);
					}
					break;
				case "p":
					for(let i = 0; i < DATA.length; i++){
						let tmp = document.createElement("p");
						tmp.className = "trainer__name";
						tmp.innerText = `${DATA[i]["first name"]} ${DATA[i]["last name"]}`;
						p.push(tmp);
					}
					break;
				case "button":
					for(let i = 0; i < DATA.length; i++){
						let tmp = document.createElement("button");
						tmp.className = "trainer__show-more";
						tmp.type = "button";
						tmp.innerText = "ПОКАЗАТИ";
						tmp.dataset.number = i;
						button.push(tmp);
					}
					break;
				default: 
					console.log("Wrong element.");
			}
		}
		fill("li");
		fill("img");
		fill("p");
		fill("button");

		container.append(...li);

		for(let i = 0; i < DATA.length; i++){
			li[i].append(photo[i]);
			li[i].append(p[i]);
			li[i].append(button[i]);
		}

	}, 2000); 
}
function info (DATA){              // Модальне вікно з інформацією про тренера
	const container = document.querySelector(".trainers-cards__container");
	container.addEventListener("click",(event)=>{
		if(event.target.className === "trainer__show-more"){
			const index = Number(event.target.dataset.number);
			
			document.body.style.overflowY = "hidden";  

			const modal = document.createElement("div");
			modal.className = "modal";
			document.body.append(modal);

			const modal__body = document.createElement("div");
			modal__body.className = "modal__body";
			modal.append(modal__body);

			const img = document.createElement("img");
			img.className = "modal__img";
			img.style.width = "280px";
			img.style.height = "300px";
			img.src = DATA[index].photo;
			modal__body.append(img);

			const modal__description = document.createElement("div");
			modal__description.className = "modal__description";
			modal__body.append(modal__description);

			const modal__close = document.createElement("button");
			modal__close.className = "modal__close";
			modal__body.append(modal__close);

			modal__close.addEventListener("click",(event)=>{
				modal.remove();
				document.body.style.overflowY = "auto";
			})

			const svg = document.createElement("svg");
			svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
			svg.setAttribute("width", "20px");
			svg.setAttribute("height", "20px");
			svg.setAttribute("viewBox", "0 0 72 72");
			modal__close.append(svg);

			const path = document.createElement("path");
			path.setAttribute("d", "M 19 15 C 17.977 15 16.951875 15.390875 16.171875 16.171875 C 14.609875 17.733875 14.609875 20.266125 16.171875 21.828125 L 30.34375 36 L 16.171875 50.171875 C 14.609875 51.733875 14.609875 54.266125 16.171875 55.828125 C 16.951875 56.608125 17.977 57 19 57 C 20.023 57 21.048125 56.609125 21.828125 55.828125 L 36 41.65625 L 50.171875 55.828125 C 51.731875 57.390125 54.267125 57.390125 55.828125 55.828125 C 57.391125 54.265125 57.391125 51.734875 55.828125 50.171875 L 41.65625 36 L 55.828125 21.828125 C 57.390125 20.266125 57.390125 17.733875 55.828125 16.171875 C 54.268125 14.610875 51.731875 14.609875 50.171875 16.171875 L 36 30.34375 L 21.828125 16.171875 C 21.048125 15.391875 20.023 15 19 15 z");
			svg.append(path);

			const modal__name = document.createElement("p");
			modal__name.className = "modal__name";
			modal__name.innerText = `${DATA[index]["first name"]} ${DATA[index]["last name"]}`
			modal__description.append(modal__name);

			const modal__point__category = document.createElement("p");
			modal__point__category.className = "modal__point modal__point--category";
			modal__point__category.innerText = DATA[index].category;
			modal__description.append(modal__point__category);

			const modal__point__experience = document.createElement("p");
			modal__point__experience.className = "modal__point modal__point--experience";
			modal__point__experience.innerText = DATA[index].experience;
			modal__description.append(modal__point__experience);
			
			const modal__point__specialization = document.createElement("p");
			modal__point__specialization.className = "modal__point modal__point--specialization";
			modal__point__specialization.innerText = DATA[index].specialization;
			modal__description.append(modal__point__specialization);

			const modal__text = document.createElement("p");
			modal__text.className = "modal__text";
			modal__text.innerText = DATA[index].description;
			modal__description.append(modal__text);
		}
	})
}
function trainer_sort () {          // Сортування карток тренерів
	const sorting = document.querySelector(".sorting");
	const buttons = document.querySelectorAll(".sorting__element.sorting__btn");
	const originalDATA = [...DATA];
	sorting.addEventListener("click",(event)=>{
		if(event.target.tagName.toLowerCase() === "button") {
			[...buttons].forEach((element)=>{
				if(element.className === "sorting__element sorting__btn sorting__btn--active"){
					element.className = "sorting__element sorting__btn";
				}
			});
			event.target.className = "sorting__element sorting__btn sorting__btn--active";
			if(event.target.innerText.toLowerCase() === "за замовчуванням"){
				const trainer = document.querySelectorAll(".trainer");
				trainer.forEach((element)=>{
					element.remove();
				})
				DATA.length = 0; 
				for(let el of originalDATA){
					DATA.push(el);
				}
				trainers(DATA);
			}
			if(event.target.innerText.toLowerCase() === "за прізвищем"){
				DATA.sort((a, b) => a["last name"].localeCompare(b["last name"]));
				const trainer = document.querySelectorAll(".trainer");
				trainer.forEach((element)=>{
					element.remove();
				})
				trainers(DATA);
			}
			if(event.target.innerText.toLowerCase() === "за досвідом"){
				DATA.sort((a, b) => Number(b.experience.slice(0,2)) - Number(a.experience.slice(0,2)));
				const trainer = document.querySelectorAll(".trainer");
				trainer.forEach((element)=>{
					element.remove();
				})
				trainers(DATA);
			}
		}
	});
}
function trainer_filter () {
	const button = document.querySelector(".filters__submit");
	const inputs = document.querySelectorAll(".filters__input");
	const buttons = document.querySelectorAll(".sorting__element.sorting__btn");
	const originalDATA = [...DATA];
	button.addEventListener("click",(event)=>{
		event.preventDefault();
		inputs.forEach((el)=>{
			switch(el.id){
				case "all-direction":
					if(el.checked === true){
						const trainer = document.querySelectorAll(".trainer");
						trainer.forEach((element)=>{
							element.remove();
						})
						DATA.length = 0; 
						for(let el of originalDATA){
							DATA.push(el);
						}
					}
					break;
				case "gym":
					if(el.checked === true){
						const updatedDATA = originalDATA.filter((el)=>{
							if(el.specialization === "Тренажерний зал"){
								return el;
							}
						})
						const trainer = document.querySelectorAll(".trainer");
						trainer.forEach((element)=>{
							element.remove();
						})
						DATA.length = 0; 
						for(let el of updatedDATA){
							DATA.push(el);
						}
					}
					break;
				case "fight-club":
					if(el.checked === true){
						const updatedDATA = originalDATA.filter((el)=>{
							if(el.specialization === "Бійцівський клуб"){
								return el;
							}
						})
						const trainer = document.querySelectorAll(".trainer");
						trainer.forEach((element)=>{
							element.remove();
						})
						DATA.length = 0; 
						for(let el of updatedDATA){
							DATA.push(el);
						}
					}
					break;
				case "kids-club":
					if(el.checked === true){
						const updatedDATA = originalDATA.filter((el)=>{
							if(el.specialization === "Дитячий клуб"){
								return el;
							}
						})
						const trainer = document.querySelectorAll(".trainer");
						trainer.forEach((element)=>{
							element.remove();
						})
						DATA.length = 0; 
						for(let el of updatedDATA){
							DATA.push(el);
						}
					}
					break;
				case "swimming-pool":
					if(el.checked === true){
						const updatedDATA = originalDATA.filter((el)=>{
							if(el.specialization === "Басейн"){
								return el;
							}
						})
						const trainer = document.querySelectorAll(".trainer");
						trainer.forEach((element)=>{
							element.remove();
						})
						DATA.length = 0; 
						for(let el of updatedDATA){
							DATA.push(el);
						}
					}
					break;
				default:
					break;
			}
		})
		inputs.forEach((el)=>{
			switch(el.id){
				case "master":
					if(el.checked === true){
						const updatedDATA = DATA.filter((el)=>{
							if(el.category === "майстер"){
								return el;
							}
						})
						const trainer = document.querySelectorAll(".trainer");
						trainer.forEach((element)=>{
							element.remove();
						})
						DATA.length = 0; 
						for(let el of updatedDATA){
							DATA.push(el);
						}
					}
					break;
				case "specialist":
					if(el.checked === true){
						const updatedDATA = DATA.filter((el)=>{
							if(el.category === "спеціаліст"){
								return el;
							}
						})
						const trainer = document.querySelectorAll(".trainer");
						trainer.forEach((element)=>{
							element.remove();
						})
						DATA.length = 0; 
						for(let el of updatedDATA){
							DATA.push(el);
						}
					}
					break;
				case "instructor":
					if(el.checked === true){
						const updatedDATA = DATA.filter((el)=>{
							if(el.category === "інструктор"){
								return el;
							}
						})
						const trainer = document.querySelectorAll(".trainer");
						trainer.forEach((element)=>{
							element.remove();
						})
						DATA.length = 0; 
						for(let el of updatedDATA){
							DATA.push(el);
						}
					}
					break;
				default:
					break;
			}
		});
		trainers(DATA);
		const buttons = document.querySelectorAll(".sorting__element.sorting__btn");
		[...buttons].forEach((element)=>{
			if(element.className === "sorting__element sorting__btn sorting__btn--active"){
				element.className = "sorting__element sorting__btn";
			}
		});
	});
	
}
trainers(DATA);
info(DATA);
trainer_sort();
trainer_filter();













