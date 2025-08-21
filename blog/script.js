document.addEventListener('DOMContentLoaded', function() {
  colorSwitch = document.querySelector('.set-dark-mode'); // Selecciono el interruptor de dark mode
  colorSwitch.addEventListener('change', cambiaTema); // Utilizo la funcion cambiaTema cada vez que el boton es presionado
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


  function activarHamburgesa() {
    hamburgerMenu.classList.toggle('active');
    hamburgerBox.classList.toggle('active');
  }

  // Esta funcion cierra el menu hamburguesa al hacer click en un link
  function cerrarHamburguesa() {
    hamburgerMenu.classList.remove('active');
    hamburgerBox.classList.remove('active');
  }


