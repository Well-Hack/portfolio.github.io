
const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if(hr < 10) hr = '0' + hr;
    if(min < 10) min = '0' + min;
    if(s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
})
function carregar(){
var img = document.getElementById('imagem')
var data = new Date();
var hora = data.getHours();
    if(hora >= 0 && hora < 12){
        img.style.backgroundImage.src = ('../amanhecer.jpg')

    } else if(hora >= 12 && hora < 18){
        img.src = 'estilonoite.jpg'

    } else{
        img.src = ('../amanhecer.jpg')
    }
}