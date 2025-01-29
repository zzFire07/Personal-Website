document.addEventListener('DOMContentLoaded', function() {
  colorSwitch = document.querySelector('.set-dark-mode'); // Selecciono el interruptor de dark mode
  colorSwitch.addEventListener('change', cambiaTema); // Utilizo la funcion cambiaTema cada vez que el boton es presionado

  homeContainer = document.querySelector('.home'); // Selecciono el contenedor de la pagina principal
  navContainer = document.querySelector('.nav-container'); // Selecciono el contenedor de la barra de navegacion
  boxStylerContainer = document.querySelector('.box-styler'); // Selecciono el contenedor de los estilos de caja
  personalBox = document.querySelector('.personal-info-box'); // Selecciono la caja aside con mis datos personales.
  window.addEventListener('scroll', movimientoPersonalBox); // utilizo la funcion de movimiento junto con el scroll de la pagina


  buttonArticle1 = document.querySelector('.button-see-more-article-1'); // Selecciono el boton de la seccion de articulos
  buttonArticle2 = document.querySelector('.button-see-more-article-2'); // Selecciono el boton de la seccion de articulos
  buttonArticle3 = document.querySelector('.button-see-more-article-3'); // Selecciono el boton de la seccion de articulos
  textButtonArticle1 = document.querySelector('.button-see-more-article-1 p'); // Selecciono el texto del boton
  textButtonArticle2 = document.querySelector('.button-see-more-article-2 p'); // Selecciono el texto del boton
  textButtonArticle3 = document.querySelector('.button-see-more-article-3 p'); // Selecciono el texto del boton
  seeMoreArticle1 = document.querySelector('.see-more-article-1'); // Selecciono la seccion de articulos
  seeMoreArticle2 = document.querySelector('.see-more-article-2'); // Selecciono la seccion de articulos
  seeMoreArticle3 = document.querySelector('.see-more-article-3'); // Selecciono la seccion de articulos
  buttonArticle1.addEventListener('click', function() {mostrarMasArticulos(buttonArticle1)}); // Si se presiona el boton, se muestran mas articulos
  buttonArticle2.addEventListener('click', function() {mostrarMasArticulos(buttonArticle2)}); // Si se presiona el boton, se muestran mas articulos
  buttonArticle3.addEventListener('click', function() {mostrarMasArticulos(buttonArticle3)}); // Si se presiona el boton, se muestran mas articulos


  bigDiv = document.querySelector('.bg-div'); // Selecciono el div que contiene todo el contenido de la pagina


  hamburgerBox = document.querySelector('.nav-hamburger-box'); // Selecciono la caja con el menu hamburguesa
  hamburgerMenu = document.querySelector('.hamburger-menu'); // Selecciono el menu hamburguesa

  hamburgerLinks = document.querySelectorAll('.linkbox'); // Selecciono todos los links del menu hamburguesa
  
  hamburgerLinks.forEach(function(element) { // Para cada link, se agrega un evento de click que cierra el menu
    element.addEventListener('click', cerrarHamburguesa);
  });


  sectionSeparator = document.querySelectorAll('.section-scroll-progress'); // Selecciono todos los separadores de secciones
  window.addEventListener('scroll', movimientoSectionSeparator) // utilizo la funcion de movimiento junto con el scroll de la pagina

  hamburgerBox.addEventListener('click', activarHamburgesa ); // Si se presiona el boton de menu hamburguesa, se cambia la clase del menu
})

var colorSwitch; // Variable para el interruptor DARK MODE

  // Esta funcion cambia el tema del documento, entre un tema claro y uno obscuro.
  function cambiaTema(ev) { // Se utiliza el evento de "change" del boton como parametro
    if (ev.target.checked) { // Si el boton se presiona, se cambia el atributo "tema" del html a "dark"
      document.documentElement.setAttribute('tema', 'dark');
    } else {
      document.documentElement.setAttribute('tema', 'light');
    }
  }

  // Esta funcion mueve la caja con mis datos personales, para que este visible solo un tramo.
  function movimientoPersonalBox() {

  var homeHeight = window.innerHeight / 1.1; // Obtiene la altura de la ventana y se le agrega margen
  var boxStylerHeight = boxStylerContainer.getBoundingClientRect().height; // Obtiene la altura de la caja de estilos de la caja personal box
  var maxOffset = homeHeight - boxStylerHeight; // Establece la distancia maxima que se puede mover la caja

  var initialOffset = personalBox.getBoundingClientRect().offsetTop; // Obtiene la distancia entre la caja y el borde superior de la pagina
  var scrollPosition = window.scrollY; // Obtiene la posicion del scroll

if (scrollPosition <= maxOffset) { // Si la posicion del scroll es menor a la distancia maxima, se mueve la caja
  personalBox.style.position = 'fixed';
  personalBox.style.padding =  '0px';
  personalBox.style.top = initialOffset + scrollPosition + 'px';
} else {  // Si la posicion del scroll es mayor a la distancia maxima, se fija la caja en la distancia maxima
  personalBox.style.position = 'absolute';
  personalBox.style.paddingTop = maxOffset + 'px';
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

  // Esta funcion cierra el menu hamburguesa al hacer click en un link
  function cerrarHamburguesa() {
    hamburgerMenu.classList.remove('active');
    hamburgerBox.classList.remove('active');
  }
  
  // Esta funcion muestra mas articulos al hacer click en un boton
  function mostrarMasArticulos(button) {
    if (button === buttonArticle1) {
      if (seeMoreArticle1.classList.contains('active')) {
        seeMoreArticle1.classList.remove('active');
        textButtonArticle1.innerHTML = "See more..."
      }
      else{
        seeMoreArticle1.classList.toggle('active');
        textButtonArticle1.innerHTML = "See less..."
      }
    }
    if (button === buttonArticle2) {
      if (seeMoreArticle2.classList.contains('active')) {
        textButtonArticle2.innerHTML = "See more..."
        seeMoreArticle2.classList.remove('active');
      }
      else{
        seeMoreArticle2.classList.toggle('active');
        textButtonArticle2.innerHTML = "See less..."
      }
    }
    if (button === buttonArticle3) {
      if (seeMoreArticle3.classList.contains('active')) {
        textButtonArticle3.innerHTML = "See more..."
        seeMoreArticle3.classList.remove('active');
      }
      else{
        seeMoreArticle3.classList.toggle('active');
        textButtonArticle3.innerHTML = "See less..."
      }
    }
  }

  // Esta funcion cierra todos los articulos
  function cerrarArticulos() {
    seeMoreArticle1.classList.remove('active');
    textButtonArticle1.innerHTML = "See more..."

    seeMoreArticle2.classList.remove('active');
    textButtonArticle2.innerHTML = "See more..."

    seeMoreArticle3.classList.remove('active');
    textButtonArticle3.innerHTML = "See more..."
  }


