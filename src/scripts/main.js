const textElement = document.getElementById("message")
const articleOne = document.getElementById("one")
const articleTwo = document.getElementById("two")

textElement.addEventListener("keyup", function(event){
    console.log("letters")
    articleOne.innerHTML = event.target.value;
    articleTwo.innerHTML = event.target.value;
})