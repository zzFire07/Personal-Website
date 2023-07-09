document.addEventListener('DOMContentLoaded', function() {
    colorSwitch = document.querySelector('.set-dark-mode');
    colorSwitch.addEventListener('change', cambiaTema);
    personalBox = document.querySelector('.personal-info-box');
    window.addEventListener('scroll', movimientoPersonalBox);
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
      console.log(personalBox);
      console.log(window.scrollY)
    }

    function movimientoPersonalBox() {

    var initialOffset = personalBox.getBoundingClientRect().offsetTop;
    var maxOffset = 300;  

    var scrollPosition = window.scrollY;

  if (scrollPosition <= maxOffset) {
    personalBox.style.position = 'fixed';
    personalBox.style.padding =  '0px';
    personalBox.style.top = initialOffset + scrollPosition + 'px';
  } else {
    personalBox.style.position = 'absolute';
    personalBox.style.paddingTop =  maxOffset + 'px';
  }
}
  
    