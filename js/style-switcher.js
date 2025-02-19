// Toggle style switcher

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler")

styleSwitcherToggle.addEventListener("click", ()=>{
    document.querySelector(".style-switcher").classList.toggle("open")
})

// hide style switcher on scroll
window.addEventListener("scroll", ()=>{
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open")
    }
})

// Theme colors
const alternateStyles = document.querySelectorAll(".alternate-style")

function setActiveStyle(color)
{
    alternateStyles.forEach((style) =>{
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled")
        }else{
            style.setAttribute("disabled", "true")
        }
    })
}


// Theme light and dark mode
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
    const icon = dayNight.querySelector("i");
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");
    document.body.classList.toggle("dark");

    // Saqlash
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

window.addEventListener("load", () => {
    const theme = localStorage.getItem("theme");
    if (theme) {
        document.body.classList.add(theme);
        if (theme === "dark") {
            dayNight.querySelector("i").classList.add("fa-sun");
        } else {
            dayNight.querySelector("i").classList.add("fa-moon");
        }
    }
});



// Like selected

const likeSelected = document.querySelectorAll(".like-icon")
const itag = document.querySelectorAll("i")

likeSelected.forEach((item)=>{
    item.addEventListener("click", ()=>{
        if(item.classList.contains("active")){
            item.classList.remove("active")
        }else{
            item.classList.add("active")
        }
    })
})

