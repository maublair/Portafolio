/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) => { 
    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navId)

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/* ==================== REMOVE MENU MOBILE ==================== */
const navLink = document.querySelectorAll('.nav__link')

function linkAction() { 
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 80;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* ===== SCROLL REVEAL ANIMATION ===== */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1000,
    delay: 200
//     reset: true
})
sr.reveal('.home, .about, .skills, .work')

/* ==================== Slider ==================== */

addEventListener('DOMContentLoaded', () => {
    
    const imagenes = ['./assets/img/1.jpg', './assets/img/2.jpg', './assets/img/3.jpg']
    let i = 1
    const img1 = document.querySelector('#img1')
    const img2 = document.querySelector('#img2')
    const progressBar = document.querySelector('#progressBar')
    const divIndicadores = document.querySelector('#indicadores')
    const porcentajeBase = 100 / imagenes.length
    let porcentajeActual = porcentajeBase
    for (let index = 0; index < imagenes.length; index++) { 
        const div = document.createElement('div')
        div.classList.add('circles')
        div.id = index
        divIndicadores.appendChild(div)
    }

    progressBar.style.width = `${porcentajeBase}%`
    img1.src = imagenes[0]
    const circulos = document.querySelectorAll('.circles')
    circulos[0].classList.add('resaltado')

    const slideShow = () => {
        img2.src = imagenes[i]
        const circuloActual = Array.from(circulos).find(el => el.id == i)
        Array.from(circulos).forEach(cir => cir.classList.remove('resaltado'))
        circuloActual.classList.add('resaltado')
        img2.classList.add('activeSlider')
        i++
        porcentajeActual += porcentajeBase
        progressBar.style.width = `${porcentajeActual}%`
        if (i === imagenes.length) {
            i = 0
            porcentajeActual = porcentajeBase - porcentajeBase
        }

        setTimeout(() => {
            img1.src = img2.src
            img2.classList.remove('activeSlider')
        }, 1000)
    }
    setInterval(slideShow, 2000)
})

/*    boton cambio de fondo    
const fondoBody = document.querySelector('#switch input[type="checkbox"]');
const fondo = document.querySelector('l-main');

            function cambiaFondo(ev){
                if(ev.target.checked){
                    fondo.style.backgroundImage = "url('#')";
                } else {
                    fondo.style.backgroundImage = "url('../img/fondo.gif')";
                }
            }
            colorSwitch.addEventListener('change', cambiaTema);
*/
