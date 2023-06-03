const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hora = dateToday.getHours();
    let minuto = dateToday.getMinutes();
    let segundo = dateToday.getSeconds();

    if (horas < 10) hr = '0' + hora;
    if (minutos < 10) hr = '0' + minuto;
    if (segundos < 10) hr = '0' + segundo;

    horas.textContent = hora;
    minutos.textContent = minuto;
    segundos.textContent = segundo;
})