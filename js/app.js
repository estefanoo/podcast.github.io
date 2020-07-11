const botonMenu = document.querySelector('.menu-nav__menu-responsive')
const botonCerrar = document.querySelector('.menu-nav__item--botonCerrar')
const menu = document.querySelector('.menu-nav__list')

const screenPosicion = window.innerHeight;

eventListener()

function eventListener() {
    //Abrir y cerrar el menu en modo resposive
    
    botonMenu.addEventListener('click', abrirMenu)
    botonCerrar.addEventListener('click', cerrarMenu)
    window.addEventListener( 'load', mostrarContenidoPortada)
    window.addEventListener( 'scroll', mostrarContenidoPodcast)
    window.addEventListener( 'scroll', mostrarContenidoInformacion)
}

function mostrarContenidoPortada() {
    const portadaTitulo = document.querySelector('.portada__titulo')
    const portadaSubtitulo = document.querySelector('.portada__subtitulo')

    portadaTitulo.classList.add('mostrar-contenido')
    portadaSubtitulo.classList.add('mostrar-contenido')
}

function mostrarContenidoPodcast() {
    const podcastInfo = document.querySelector('.podcast')
    let podcastInfoPosicion = podcastInfo.getBoundingClientRect().top
    
    if(podcastInfoPosicion < screenPosicion){
        podcastInfo.classList.add('mostrar-contenido')
    }
}

function mostrarContenidoInformacion() {
    const informacionImagen = document.querySelector('.informacion__imagen')
    const informacionPersona = document.querySelector('.informacion__persona')
    let imagenInfoPosicion = informacionImagen.getBoundingClientRect().top
    let personaInfoPosicion = informacionPersona.getBoundingClientRect().top
    
    if( imagenInfoPosicion < screenPosicion){
        informacionImagen.classList.add('mostrar-contenido')
    }

    if (personaInfoPosicion < screenPosicion) {
        informacionPersona.classList.add('mostrar-contenido')
    }
}


//function abrir menu
function abrirMenu(){
        if(menu.style.height = '0'){
            menu.style.height = '400px'
        }
}

//function cerrar    menu
function cerrarMenu(){
    if(menu.style.height = '400px'){
        menu.style.height = '0'
    }
}