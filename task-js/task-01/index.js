const hamburger= document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const menuOpen = document.getElementsByClassName("open");
const menuClose = document.getElementsByClassName("close");
// 
// 
menuOpen[0].addEventListener("click", () =>{
    console.log("running...");
    console.log("mobile-menu");
    mobileMenu.style.left ="0";
    menuOpen[0].style.display ="none";
    menuClose[0].style.display ="block";
});


menuClose[0].addEventListener("click", () =>{
    console.log("running...");
    console.log("mobile-menu");
    mobileMenu.style.left ="-100%";
    menuOpen[0].style.display ="block";
    menuClose[0].style.display ="none";
});

const modelBtn = document.getElementById("btn");
const modeBody = document.getElementById("model");
// 
const body = document.querySelector("body");
console.log("body");
body.addEventListener("click" ,(event) =>{
    console.log("body clicked");
    console.log("event.target");
    if (event.target.classList.value === "model"){
        model.style.display ="none";
    }
} )

modelBtn.addEventListener("click" ,() => {
    model.style.display = "flex";
});




// const closeIcon = document.getElementsByClassName("fa-solid");
// const accordion =document.getElementsByClassName("accordion");
// 
// closeIcon[0].addEventListener("mouseover",() =>{
    // accordion[0].style.heigh ="auto";
// })
// 
// 
document.querySelectorAll('.accordion-heading').forEach(heading => {
    heading.addEventListener('click', function () {
      this.parentElement.classList.toggle('active');
    });
  });
  