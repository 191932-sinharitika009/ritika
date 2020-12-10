




//counter
const counters = document.querySelectorAll(".counter");
const speed = 200;

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target/speed;
        
        if(count < target){
         	counter.innerText =count + inc;
         	setTimeout(updateCount,1);

        } else{
         	count.innerText = target;
        }

	}  
	updateCount();

});







/*
//slider
const imageSlider = document.querySelector('.image-slider');
const myImages = document.querySelectorAll('.image-slider img');


const preBtn = querySelectorAll('#prebtn');
const nextBtn = querySelectorAll('#nextbtn');


let counter = 1;
const size = myImages[0].clientWidth;

imageSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';

//button listener
nextBtn.addEventListener('click', () => {
	imageSlider.style.transition="transform 0.4s ease-in-out";
    counter++;
    console.log(counter);
    imageSlider.style.transform='translateX(' + (-size * counter) + 'px)';

	
});*/











/*let para=document.querySelector("counter-no1");
let count=0;
let limit=999;
var clear;
clear=setInterval(ValueCount,1000);
function ValueCount(){
	count++;
	if(count==999){
		clearInterval(clear);

	}

}*/


/*var i=0;
var no=99;
setInterval(Anim(),1000);
function Anim(){
	i++;
	if (no==99){
		clearInterval(time);
	var target=document.getElementById('container');	
	}
}*/