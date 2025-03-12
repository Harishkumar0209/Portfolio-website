const menu = document.querySelector('.menu')
const menuList = document.querySelector('nav ul')
menu.addEventListener('click',()=>{
    menuList.classList.toggle('showmenu')
})

var typed = new Typed(".text", {
    Strings:["Frontend Developer" , "Web Developer", "Digital Marketer", "Content Writer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:100,
    looped:true
});

