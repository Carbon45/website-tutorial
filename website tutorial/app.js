// HAMBURGER
const hamburger = document.querySelector('.hamburger')
const navUl = document.querySelector('.nav-ul');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active')
    navUl.classList.toggle('active')
})

document.querySelectorAll('.nav-a').forEach(n => n.addEventListener('click', function() {
    hamburger.classList.remove('active');
    navUl.classList.toggle('active');
}))

// SCROLL

const root = document.documentElement;
const marqueElementsDisplayed = getComputedStyle(root).getPropertyValue('--marque-elements-displayed');

const marqueContent = document.querySelector('.marque-content');

root.style.setProperty('--marque-elements', marqueContent.children.length);

for (let i = 0; i < marqueElementsDisplayed; i++) {
    marqueContent.appendChild(marqueContent.children[i].cloneNode(true))
}

// MEDIA QUERY 
const marqueAni = document.getElementById('marque-ani')
const marqueFixed = document.getElementById('marque-fixed')

function screenChange(e) {
    if(e.matches) { // if the screen is above 800px then...
        marqueAni.classList.add('hide');
        marqueFixed.classList.remove('hide');
    } else { // if the screen is below 800px then...
        marqueFixed.classList.add('hide');
        marqueAni.classList.remove('hide');
    }
}

const mediaQuery = window.matchMedia('(min-width: 800px)')

mediaQuery.addListener(screenChange)

screenChange(mediaQuery)

// ANIMATIONS 

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) { 
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const hiddenBlur = document.querySelectorAll('.hiddenb');
hiddenBlur.forEach((el) => observer.observe(el));

const slideRight = document.querySelectorAll('.slide-right');
slideRight.forEach((el) => observer.observe(el));

const slideLeft = document.querySelectorAll('.slide-left');
slideLeft.forEach((el) => observer.observe(el));