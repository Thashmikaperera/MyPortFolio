//active menu
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while (--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);

//sticky navbar
const header = document.querySelector("header");
window.addEventListener("scroll",function (){
    header.classList.toggle("sticky",window.scrollY >50)
})

//------------------------- toggle icon  navBar -------------------------//

let menuIcon = document.querySelector("#menu-icon");
let navList = document.querySelector(".navlist");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navList.classList.toggle("open");
}

window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x");
    navList.classList.remove("open");
}

function sendEmail(){
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let address = document.querySelector('#address').value;
    let contact = document.querySelector('#phone').value;
    let message = document.querySelector('#message').value;
    let subject = document.querySelector('#subject').value;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "pthashmika@gmail.com",
        Password : "8F90DE6CB2E3F501C68F464D994FBB1D653E",
        To : 'pthashmika@gmail.com',
        From : "pthashmika@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
        message => alert(message)
    );
}

/*

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else {
            entry.target.classList.remove("show-items")
        }
    })
})

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((e1)=>observer.observe(e1));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((e1)=>observer.observe(e1));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((e1)=>observer.observe(e1));
*/





