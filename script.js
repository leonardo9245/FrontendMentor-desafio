const menu = document.getElementById("menu-container");
const toggle = document.querySelector("nav .toggle");
const up = document.querySelector(".back-to-top");

toggle.addEventListener('click', ()=>{
    menu.classList.toggle('open')
});

//close when click in element.

const link =  document.querySelectorAll("nav ul a");

for(const links of link){
    links.addEventListener('click', ()=>{
        menu.classList.remove('open');
    })
}


window.addEventListener('scroll',()=>{

    if(window.scrollY >= 500){
        up.classList.add('show');
    }else{
        up.classList.remove('show')
    }
})
