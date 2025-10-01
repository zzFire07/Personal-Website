document.addEventListener('DOMContentLoaded', function() {
  colorSwitch = document.querySelector('.set-dark-mode');
  // ⬇️ NUEVO: aplica el tema guardado (si existe) antes de enganchar eventos
  const temaGuardado = localStorage.getItem('tema');
  if (temaGuardado) document.documentElement.setAttribute('tema', temaGuardado);
  // ⬇️ NUEVO: sincroniza el estado del switch con el atributo actual
  if (colorSwitch) colorSwitch.checked = (document.documentElement.getAttribute('tema') === 'dark');
  if (colorSwitch) colorSwitch.addEventListener('change', cambiaTema); // Utilizo la funcion cambiaTema cada vez que el boton es presionado
})

var colorSwitch; // Variable para el interruptor DARK MODE
// Esta funcion cambia el tema del documento, entre un tema claro y uno obscuro.
function cambiaTema(ev) { // Se utiliza el evento de "change" del boton como parametro
  if (ev.target.checked) { // Si el boton se presiona, se cambia el atributo "tema" del html a "dark"
    document.documentElement.setAttribute('tema', 'dark');
    localStorage.setItem('tema', 'dark'); // ⬅️ NUEVO: guarda preferencia
  } else {
    document.documentElement.setAttribute('tema', 'light');
    localStorage.setItem('tema', 'light'); // ⬅️ NUEVO: guarda preferencia
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


