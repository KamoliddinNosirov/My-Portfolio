// typing animation
var typed = new Typed(".typing", {
    strings:["", "Web Developer", "Freelance", "YouTuber"],
    typeSpeed:200,
    BackSpeed:60,
    loop:true
})

const liActive_1 = document.querySelector(".li-1")
const liActive_2 = document.querySelector(".li-2")
const liActive_3 = document.querySelector(".li-3")
const liActive_4 = document.querySelector(".li-4")
const liActive_5 = document.querySelector(".li-5")

liActive_1.addEventListener("click", ()=>{
    liActive_1.classList.add("active")
    liActive_2.classList.remove("active")
    liActive_3.classList.remove("active")
    liActive_4.classList.remove("active")
    liActive_5.classList.remove("active")
})

liActive_2.addEventListener("click", ()=>{
    liActive_1.classList.remove("active")
    liActive_2.classList.add("active")
    liActive_3.classList.remove("active")
    liActive_4.classList.remove("active")
    liActive_5.classList.remove("active")
})

liActive_3.addEventListener("click", ()=>{
    liActive_1.classList.remove("active")
    liActive_2.classList.remove("active")
    liActive_3.classList.add("active")
    liActive_4.classList.remove("active")
    liActive_5.classList.remove("active")
})

liActive_4.addEventListener("click", ()=>{
    liActive_1.classList.remove("active")
    liActive_2.classList.remove("active")
    liActive_3.classList.remove("active")
    liActive_4.classList.add("active")
    liActive_5.classList.remove("active")
})

liActive_5.addEventListener("click", ()=>{
    liActive_1.classList.remove("active")
    liActive_2.classList.remove("active")
    liActive_3.classList.remove("active")
    liActive_4.classList.remove("active")
    liActive_5.classList.add("active")
})