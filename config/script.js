document.addEventListener('DOMContentLoaded', function() {
    colorSwitch = document.querySelector('.set-dark-mode'); // Selecciono el interruptor de dark mode
    colorSwitch.addEventListener('change', cambiaTema); // Utilizo la funcion cambiaTema cada vez que el boton es presionado


    personalBox = document.querySelector('.personal-info-box'); // Selecciono la caja aside con mis datos personales.
    window.addEventListener('scroll', movimientoPersonalBox); // utilizo la funcion de movimiento junto con el scroll de la pagina


    bigDiv = document.querySelector('.bg-div'); // Selecciono el div que contiene todo el contenido de la pagina


    hamburgerBox = document.querySelector('.nav-hamburger-box'); // Selecciono la caja con el menu hamburguesa
    hamburgerMenu = document.querySelector('.hamburger-menu'); // Selecciono el menu hamburguesa

    sectionSeparator = document.querySelectorAll('.section-scroll-progress'); // Selecciono todos los separadores de secciones
    window.addEventListener('scroll', movimientoSectionSeparator) // utilizo la funcion de movimiento junto con el scroll de la pagina
    hamburgerBox.addEventListener('click', activarHamburgesa ); // Si se presiona el boton de menu hamburguesa, se cambia la clase del menu
})



var colorSwitch; // Variable para el interruptor DARK MODE

    // Esta funcion cambia el tema del documento, entre un tema claro y uno obscuro.
    function cambiaTema(ev) { // Se utiliza el evento de "change" del boton como parametro
      if (ev.target.checked) { // Si el boton se presiona, se cambia el atributo "tema" del html a "dark"
        document.documentElement.setAttribute('tema', 'dark');
        console.log('dark')
      } else {
        document.documentElement.setAttribute('tema', 'light');
        console.log('light')
      }
    }

    // Esta funcion mueve la caja con mis datos personales, para que este visible solo un tramo.
    function movimientoPersonalBox() {

    var initialOffset = personalBox.getBoundingClientRect().offsetTop; // Obtiene la distancia entre la caja y el borde superior de la pagina
    var maxOffset = 300;  // Establece como 300px la distancia maxima que se puede mover la caja

    var scrollPosition = window.scrollY; // Obtiene la posicion del scroll

  if (scrollPosition <= maxOffset) { // Si la posicion del scroll es menor a la distancia maxima, se mueve la caja
    personalBox.style.position = 'fixed';
    personalBox.style.padding =  '0px';
    personalBox.style.top = initialOffset + scrollPosition + 'px';
  } else {  // Si la posicion del scroll es mayor a la distancia maxima, se fija la caja en la distancia maxima
    personalBox.style.position = 'absolute';
    personalBox.style.paddingTop =  maxOffset + 'px';
  }
}

    // Esta funcion mueve los separadores de seccion, para que se vea el progreso de la pagina.
    function movimientoSectionSeparator() {

        var scrollPosition = window.scrollY; // Obtiene la posicion del scroll

        var webHeight = bigDiv.getBoundingClientRect().height; // Obtiene la altura de la pagina.

        sectionSeparator.forEach(function(element) { // Para cada separador de seccion, se cambia el ancho del elemento
          element.style.width = ((scrollPosition / webHeight * 170) * 1.1) + '%';
        });
    }
  
    function activarHamburgesa() {
      hamburgerMenu.classList.toggle('active');
      hamburgerBox.classList.toggle('active');
    }
    