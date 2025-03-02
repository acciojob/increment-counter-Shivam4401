//your JS code here. If required.
let val = document.querySelector("#counter");
let btn = document.querySelector("#incrementBtn");

let count = 0;

function counterValue () {
	alert(`localhost:3000 says
	${count}`);
	count++;
	val.textContent = count;
}

btn.addEventListener("click",counterValue);

