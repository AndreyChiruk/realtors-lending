new Swiper('.swiper', {
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickble: true,
	},

	slidesPerView: 3,
	breakpoints: {
		1100: {
			slidesPerView: 3,
			spaceBetween: 70,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 50,
		},
		100: {
			slidesPerView: 1,
		}
	},
	spaceBetween: 70,
});

const userWidth = window.screen.width;
if(userWidth <= 286){
	let text = document.querySelector('.application__large__text');
	text.innerHTML = '<p class="application__large__text">ПЕРСОНАЛЬНЫЙ РИЭЛТОР В МОСКВЕ</p>';
}


let summary1 = document.querySelector('.s1');
let plus1 = document.querySelector('.p1');
let summary2 = document.querySelector('.s2');
let plus2 = document.querySelector('.p2');
let summary3 = document.querySelector('.s3');
let plus3 = document.querySelector('.p3');
let summary4 = document.querySelector('.s4');
let plus4 = document.querySelector('.p4');
let summary5 = document.querySelector('.s5');
let plus5 = document.querySelector('.p5');


var x1 = 0;
const tapSum1 = () =>{
	if(x1 == 0){
 		plus1.innerHTML = "-";
 		x1++;
 	}
 	else{
 		plus1.innerHTML = "+";
 		x1--;
 	}
}
summary1.addEventListener('click', tapSum1, false);



var x2 = 0;
const tapSum2 = () =>{
	if(x2 == 0){
 		plus2.innerHTML = "-";
 		x2++;
 	}
 	else{
 		plus2.innerHTML = "+";
 		x2--;
 	}
}
summary2.addEventListener('click', tapSum2, false);



var x3 = 0;
const tapSum3 = () =>{
	if(x3 == 0){
 		plus3.innerHTML = "-";
 		x3++;
 	}
 	else{
 		plus3.innerHTML = "+";
 		x3--;
 	}
}
summary3.addEventListener('click', tapSum3, false);



var x4 = 0;
const tapSum4 = () =>{
	if(x4 == 0){
 		plus4.innerHTML = "-";
 		x4++;
 	}
 	else{
 		plus4.innerHTML = "+";
 		x4--;
 	}
}
summary4.addEventListener('click', tapSum4, false);



var x5 = 0;
const tapSum5 = () =>{
	if(x5 == 0){
 		plus5.innerHTML = "-";
 		x5++;
 	}
 	else{
 		plus5.innerHTML = "+";
 		x5--;
 	}
}
summary5.addEventListener('click', tapSum5, false);





let popUp = document.querySelector('.pop__up');
let plusPopUp = document.querySelector('.pop__up__plus');
let body = document.querySelector('body');
let popUpArea = document.querySelector('#pop__up__area');
// let realtorsId = document.querySelector('#realtors__id');
// let servicesId = document.querySelector('#services__id');
// let commnetsId = document.querySelector('#commnets__id');
// let mapId = document.querySelector('#map__id');

const popUpClose = () => {
	popUp.style.display = "none";
	body.style.overflow = "visible"; 
}
plusPopUp.addEventListener('click', popUpClose, false);
// realtorsId.addEventListener('click', popUpClose, false);
// servicesId.addEventListener('click', popUpClose, false);
// commnetsId.addEventListener('click', popUpClose, false);
// mapId.addEventListener('click', popUpClose, false);


let buttons = document.querySelectorAll('.btn');
console.log(buttons.length);

if(buttons.length > 0){
	for(var buttonX = 0; buttonX < buttons.length; buttonX++){
		const popUpAcrive = () =>{
			popUp.style.display = "flex";
			body.style.overflow = "hidden";
			popUpArea.style.display = "block";
		}

		buttons[buttonX].addEventListener('click', popUpAcrive, false);
	}
}


popUpArea.addEventListener('click', () => {
  	popUp.style.display = "none";
	body.style.overflow = "visible";
	popUpArea.style.display = "none"; 
});


const input = document.querySelector('.pop__up__input');
const input2 = document.querySelector('.offer__number');


input.addEventListener('keydown', function(event) {
	// Разрешаем: backspace, delete, tab и escape
	if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
		// Разрешаем: Ctrl+A
		(event.keyCode == 65 && event.ctrlKey === true) ||
		// Разрешаем: home, end, влево, вправо
		(event.keyCode >= 35 && event.keyCode <= 39)) {
		
		// Ничего не делаем
		return;
	} else {
		// Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
		if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
			event.preventDefault();
		}
	}
});
input2.addEventListener('keydown', function(event) {
	// Разрешаем: backspace, delete, tab и escape
	if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
		// Разрешаем: Ctrl+A
		(event.keyCode == 65 && event.ctrlKey === true) ||
		// Разрешаем: home, end, влево, вправо
		(event.keyCode >= 35 && event.keyCode <= 39)) {
		
		// Ничего не делаем
		return;
	} else {
		// Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
		if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
			event.preventDefault();
		}
	}
});