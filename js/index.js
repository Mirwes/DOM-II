// Your code goes here
//mouseover
const funBus = document.querySelector(".intro img");

funBus.addEventListener("mouseover", function(){
    funBus.style.transform = " scale(1.2)";
    funBus.style.transition = "transform 1s";
})
// mouseleave
funBus.addEventListener("mouseleave", function(){
    funBus.style.transform = "scale(1)";
});

const letsGo = document.querySelector(".content-section .img-content img");

letsGo.addEventListener("mouseover", function(){
    letsGo.style.transform = "scale(1.2)";
    letsGo.style.transition = " transform 1s";
})

letsGo.addEventListener("mouseleave", function(){
    letsGo.style.transform = "scale(1)";
})

// dbclick

const navBar = document.querySelectorAll(".nav a");

navBar.forEach((element) => {
    element.addEventListener("dblclick", () => {
        element.style.color = "red";
    })
});

// scroll
window.addEventListener('scroll', () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    if(scrolled === scrollable) {
        alert('You\'ve reached the bottom!');
        
    }
});

// resize

const adventurePic = document.querySelector('.content-destination img');
window.addEventListener('resize', () => {
    adventurePic.src = 'https://picsum.photos/seed/picsum/536/354';
});

//link

const link = document.querySelector('.nav a');
link.addEventListener('click', ( ) => {
    console.log('Do not let the link go off!');
});
//scroll
const body = document.querySelector('body');
window.addEventListener('scroll', () => {
    body.style.backgroundColor = "#65123A";
})

//Keydown

document.addEventListener('keydown', (e) => {
    if(e.key === 'a') {
        document.body.style = 'background-color: red'
    }
});

function mySelectFunction() {
    document.getElementsByClassName(".intro").select();
};

function mySelectFunction() {
    alert("You selected some text!");
};








