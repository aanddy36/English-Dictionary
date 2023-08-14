let searchButton = document.querySelector(".hyperlink-a a");
let magnifyingGlass = document.querySelector(".fa-magnifying-glass");
let xMark = document.querySelector(".fa-xmark");
let inputBox = document.querySelector(".searcher");
let wrongText = document.querySelector(".wrong-text");


/*FUNCTION TO ACTIVE THE X MARK*/
setInterval(()=>{
    if(inputBox.value.length == 0){
        xMark.classList.add("disappear");
    }else{
        xMark.classList.remove("disappear");
    }
}, 100)

xMark.addEventListener("click",()=>{
    inputBox.value = "";
})

/*MODIFY URL ACCORDING TO THE WORD ENTERED WHEN PRESSING SEARCH BUTTON*/
searchButton.addEventListener("click",(e)=>{
    e.preventDefault();
    if(inputBox.value == ""){
        wrongText.style.display = "block";
        inputBox.classList.add("wrong-border");
        return;
    }
    location.assign(`word.html/${inputBox.value}`);
})

/*MODIFY URL ACCORDING TO THE WORD ENTERED WHEN PRESSING ENTER*/
window.addEventListener("keypress",(event)=>{
    if (event.key == "Enter"){
        if(inputBox.value == ""){
            wrongText.style.display = "block";
            inputBox.classList.add("wrong-border");
            return
        }
        location.assign(`word.html/${inputBox.value}`);
    }
})

//searchButton.addEventListener("click",()=>{
//    const url = `https://wordsapiv1.p.rapidapi.com/words/${inputBox.value}/examples`;
//    const options = {
//	method: 'GET',
//	headers: {
//		'X-RapidAPI-Key': '3fe9412164msh68fa0a54b638e9ep164706jsn96596cfc6b69',
//		'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
//	}
//    };
//    if(inputBox.value = ""){return};
//    try {
//	    definitionWord(url, options);
//   } catch (error) {
//    	console.error(error);
//    }
//})


async function definitionWord(url, options){
    const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
}

