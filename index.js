var typed = new Typed(".text",{
    strings:["Full stack Developer", "Mern Stack Developer", "Web Developer"],
    typeSpeed : 10,
    backSpeed : 100,
    backDelay : 1000,
    loop : true
});



function gotowhatsapp() {
    
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    // var service = document.getElementById("service").value;

    var url = "https://wa.me/919182868227?text=" 
    + "Name: " + name + "%0a"
    + "Phone: " + phone + "%0a"
    + "Email: " + email  + "%0a"
    // + "Service: " + service; 

    window.open(url, '_blank').focus();
}





// imported js thankyo text from codepen

"use strict";
let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});
let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";
let rotateText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
    // rotate out letters of current word
    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });
    // reveal and rotate in letters of next word
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });
    currentWordIndex =
        currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
rotateText();
setInterval(rotateText, 1000);
