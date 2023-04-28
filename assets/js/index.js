let menu = document.querySelector(".menu");
let navbar = document.querySelector(".nav-items");
menu.addEventListener("click" , function(){
    menu.classList.toggle("fa-x");
    navbar.classList.toggle("hide");
})

let nav_links = document.querySelectorAll(".nav-link");

for(var i = 0 ; i < nav_links.length ; i++){
    nav_links[i].addEventListener("click" , function(){
        navbar.classList.toggle("hide");
        menu.classList.toggle("fa-x");
        
    })
}
nav_links.forEach((element) => {
    element.addEventListener("click" , function(){
        nav_links.forEach((nav)=>{nav.classList.remove("active")});
        element.classList.add("active");
    });
});

let section = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav ul li a");
window.onscroll = ()=>{
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop-50;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
        if(top >= offset && top < offset + height){
            nav_links.forEach(nav=>{
                nav.classList.remove("active");
                document.querySelector("header nav ul li a[href*=" + id + "]").classList.add("active");
            })
        }
    });
};

function readMore(){
let dots = document.getElementById("dots");
let more = document.getElementById("more");
let read = document.getElementById("read");

if(dots.style.display == "none"){
    dots.style.display = "inline";
    read.innerHTML = "Read more..";
    more.style.display = "none";
}
else{
    dots.style.display = "none";
    read.innerHTML = "Read less..";
    more.style.display = "inline";
}
}
