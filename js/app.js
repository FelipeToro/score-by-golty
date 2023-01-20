//======================================
//ANIMACIÓN DEL MENÚ DE NAVEGACIÓN
//======================================

const hamburgerMenu = document.querySelector('.header__hamburger-menu');
const nav = document.querySelector('.header__nav');
const h = document.querySelector('.header');
const coleccion = document.querySelector('.header__coleccion');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('open');
    hamburgerMenu.classList.toggle('header__hamburger-menu--active');
    nav.classList.toggle('header__nav--active');
    h.classList.toggle('header--active');
    coleccion.classList.toggle('header__coleccion--active');
})

//======================================
//ANIMACIÓN MARQUEE
//======================================

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}