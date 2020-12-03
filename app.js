const image = document.querySelector('.hero-img');
const navList = document.querySelector('.list-items');
const closeBtn = document.querySelector('.close-btn');
const hero = document.querySelector('.hero');
const about = document.querySelector('.about-company');
const btns = document.querySelectorAll('.btn');
const toggleBtns = document.querySelectorAll('.toggleBtn');
const header = document.getElementById('header');
const text = document.getElementById('text');


const items = [
    {
        img:'./images/desktop-image-hero-1.jpg',
        imgMobile:'./images/mobile-image-hero-1.jpg',
        text:`We provide unmatched quality, comfort, and style for property owners across the country. 
        Our experts combine form and function in bringing your vision to life. Create a room in your 
        own style with our collection and make your property a reflection of you and what you love`,
        header:'Discover innovative ways to decorate.'
    },
    {
        img:'./images/desktop-image-hero-2.jpg',
        imgMobile:'./images/mobile-image-hero-2.jpg',
        text: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
        Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
        store locator. Any questions? Don't hesitate to contact us today`,
        header:'We are available all across the globe.'
    },
    {
        img:'./images/desktop-image-hero-3.jpg',
        imgMobile:'./images/mobile-image-hero-3.jpg',
        text:`Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
        to ensure that every product is made as perfect and as consistent as possible. With three decades of 
        experience in this industry, we understand what customers want for their home and office.`,
        header:'Manufactured with the best materials',
    },
]

const mobile = window.matchMedia("(max-width: 431px)")

let currentItem = 0;
window.addEventListener('DOMContentLoaded', function(){
    showItem();
})


function showItem(){
    header.textContent = items[currentItem].header;
    text.textContent = items[currentItem].text;
    image.src = items[currentItem].img;

    if(mobile.matches){
        image.src = items[currentItem].imgMobile;
    }

    else{
        image.src = items[currentItem].img;
    }
}


btns.forEach(function(btn){
    btn.addEventListener('click', function(){
        if(btn.classList.contains('right-btn')){          
            currentItem++;
            if(currentItem > items.length - 1){
                currentItem = 0;
            }
        }
        showItem();

        if(btn.classList.contains('left-btn')){
            currentItem--;
            if(currentItem < 0){
                currentItem = items.length - 1
            }
        }
        showItem();
    })
})

toggleBtns.forEach(function(toggle){
    toggle.addEventListener('click', function(){
        if(toggle.classList.contains('bars-btn')){
            navList.classList.add('show-list');
            closeBtn.classList.add('spin-btn');

            hero.classList.add('overlay');
            about.classList.add('overlay');
        }

        if(toggle.classList.contains('close-btn')){
            navList.classList.remove('show-list');

            hero.classList.remove('overlay');
            about.classList.remove('overlay');
        }
    })
})