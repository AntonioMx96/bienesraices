document.addEventListener('DOMContentLoaded', () => {
    eventListeners()
    darkMode()
})

function darkMode() {
    const prefiereDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
    const btnDarkMode = document.querySelector('.dark-mode-boton')
    console.log(prefiereDarkMode)

    if(prefiereDarkMode.matches){
        document.body.classList.add('dark-mode')
    }else{
        document.body.classList.remove('dark-mode')
    }
    prefiereDarkMode.addEventListener('change', function(){
        if(prefiereDarkMode.matches){
            document.body.classList.add('dark-mode')
        }else{
            document.body.classList.remove('dark-mode')
        }
    })
    btnDarkMode.addEventListener('click', function (e) {
        document.body.classList.toggle('dark-mode')
    })
}

function eventListeners() {
    const mobileMenu = document.querySelector('.mobile-menu')
    mobileMenu.addEventListener('click', navegacionResponsive)
}

function navegacionResponsive() {
    const navegacion = document.querySelector('.navegacion')
    /*if(navegacion.classList.contains('mostrar')){
        navegacion.classList.remove('mostrar')
    }else{
        navegacion.classList.add('mostrar')
    }*/
    navegacion.classList.toggle('mostrar')
}