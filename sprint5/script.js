// Scrolltrigger
  
gsap.registerPlugin(ScrollTrigger);

gsap.set(".container", {rotate:0}),
gsap.to(".container", {rotate: 180, scrollTrigger: {
      trigger: ".wrapper .h",
      start: "bottom bottom",
      end: "+=1000",
      markers:true,
      pin:true,
      scrub: true
}})

// Change Letters
let divs = document.querySelectorAll(".wrapper")

var letters = ["T","Y","P","O","G","R","A","P","H","I","E"]

for(let i = 0; i < letters.length; i++) {
    divs[i].addEventListener("click", function() {
        shuffle(letters);
        for(let i = 0; i < letters.length; i++) {
            divs[i].innerHTML = "<span>" + letters[i] + "</span>";
        }
    });
}

// Array SHuffle
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }