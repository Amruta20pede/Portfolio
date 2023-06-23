
//menu icon
let menuIcon =document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


//sticky navbar
window.onscroll=()=>{
    let header=document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY >100);
};


const skillsContent= document.getElementsByClassName('skills__content'),
    skillsHeader= document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass= this.parentNode.className

    for(i=0;i<skillsContent.length;i++){
        skillsContent[i].className= 'skills__content skills__close'
    }
    if(itemClass==='skills__content skills__close'){
        this.parentNode.className= 'skills__content skills__open'
    }
}

skillsHeader.forEach((el)=>{
    el.addEventListener('click',toggleSkills)
})

// Qualifications 

const tabs= document.querySelectorAll('[data-target]'),
    tabContents= document.querySelectorAll('[data-content]')

tabs.forEach(tab=>{
    tab.addEventListener('click', ()=>{
        const target= document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent=>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tab.forEach(tab=>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

//dark light mode
let darkModeIcon =document.querySelector('#darkMode-icon');

darkModeIcon.onclick =()=>{
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};


ScrollReveal({
    reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});
ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
ScrollReveal().reveal('.home-img img,.contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img',{origin:'left'});
