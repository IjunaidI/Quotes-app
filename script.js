let celebrities = [
	{	
		id: 1,
		name: "Abdul Sattar Edhi",
		title: "Founder, Edhi Foundation",
		readMoreUrl: "https://en.wikipedia.org/wiki/Abdul_Sattar_Edhi",
		imgURL: "abdul-sattar.JPG",
		quote: "No religion is higher than Humanity"
	},

	{
		id: 2,
		name: "Malala Yousufzai",
		title: "Female Education Activities",
		readMoreUrl: "https://en.wikipedia.org/wiki/Malala_Yousafzai",
		imgURL: "malala.jpg",
		quote: "One child, one teacher, one book, one pen can chnage the world"
	},

	{
		id: 3,
		name: "Abdul Qadeer Khan",
		title: "Nuclear Physiciat",
		readMoreUrl: "https://en.wikipedia.org/wiki/Abdul_Qadeer_Khan",
		imgURL: "abdul-qadeer.jpg",
		quote: "I am proud of my work for my country"
	},

	{
		id: 4,
		name: "Quaid-e-Azam",
		title: "Mohammad Ali Jinnah",
		readMoreUrl: "https://en.wikipedia.org/wiki/Muhammad_Ali_Jinnah",
		imgURL: "quaid-e-azam.jpg",
		quote: "With faith, discipline and selfless devotion to duty, there is nothing worthwhile that you cannot achieve."
	},

	{
		id: 5,
		name: "Arfa Karim",
		title: "Computer Prodigy",
		readMoreUrl: "https://en.wikipedia.org/wiki/Arfa_Karim",
		imgURL: "arfa.jpg",
		quote: "If you think shy, you act shy. If you think confident you act confident."
	},

	{
		id: 6,
		name: "Diana",
		title: "Princess of Wales",
		readMoreUrl: "https://en.wikipedia.org/wiki/Diana,_Princess_of_Wales",
		imgURL: "diana.jpg",
		quote: "Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you."
	},


	{
		id: 7,
		name: "Elon Musk",
		title: "Founder, SpaceX",
		readMoreUrl: "https://en.wikipedia.org/wiki/Elon_Musk",
		imgURL: "elon.jpg",
		quote: "I think it is possible for ordinary people to choose to be extraordinary."
	},

 // "edhi", "malala", "quaid-e-azam"
 ];
	

function initialize() {
	// console.log("assad")
	let celebritiesGroupEl = document.querySelector("#celebritries-List");
	for(let i = 0; i < celebrities.length; i ++){
		// console.log(celebrities[i])
		// bodyEl.innerHTML += "<div class='celebrity-img-div' style='background-image: url(images/"+ celebrities[i].imgURL+" )'> </div> "+ celebrities[i].name ;
		// bodyEl.innerHTML += celebrities[i].name;
		celebritiesGroupEl.innerHTML += `
					<div class="celebrity-img-div" 
					  style="background-image: url(images/${celebrities[i].imgURL})"
					  onclick="changeCeleb(${i})">
					  <p class="celebrity-img-text">${celebrities[i].name}</p>
				    </div>`
	}
	changeCeleb(0);
// 	function info(x){

// 	let display =parseInt(document.querySelector("div").id);
// 	console.log(display);
	
// 		display.innerHTML = celebrities[x].name+"\n"+celebrities[x].quote;

// }

}

function changeCeleb(celeIndex){
	document.querySelector("#celebrity-name").innerHTML = celebrities[celeIndex].name;
	document.querySelector("#celebrity-title").innerHTML = celebrities[celeIndex].title;
	document.querySelector("#celebrity-img").style["background-image"] = `url(images/${celebrities[celeIndex].imgURL})`;
	document.querySelector("#celebrity-quote").innerHTML = celebrities[celeIndex].quote;
	document.querySelector("#celebrity-link a").href = celebrities[celeIndex].readMoreUrl;
	
	// let rand1 = Math.floor(Math.random() * 255);
	// let rand2 = Math.floor(Math.random() * 255);
	// let rand3 = Math.floor(Math.random() * 255);
}


// function changeCeleb(){
// 	console.log("hi" + celeIndex);
// }