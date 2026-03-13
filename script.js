const search = document.getElementById("search");

if(search){

search.addEventListener("keyup", function(){

let keyword = search.value.toLowerCase();

document.querySelectorAll(".card").forEach(card => {

let text = card.textContent.toLowerCase();

if(text.indexOf(keyword) > -1){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}