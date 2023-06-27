document.addEventListener('DOMContentLoaded', function() {
    colorSwitch = document.querySelector('.set-dark-mode');
    colorSwitch.addEventListener('change', cambiaTema);
});
    
var colorSwitch; // Variable para el interruptor DARK MODE
    
    function imprimir() { // Para uso de debug
        console.log(colorSwitch);
    }

    function cambiaTema(ev) {
      if (ev.target.checked) {
        document.documentElement.setAttribute('tema', 'dark');
        console.log('dark')
      } else {
        document.documentElement.setAttribute('tema', 'light');
        console.log('light')
      }
    }
  
    