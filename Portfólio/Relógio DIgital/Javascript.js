
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
var data = new Date();
var hr = dateToday.getHours()
var mudar = document.getElementsByClassName('mudar')
 function background(){
        if (hr >= 10 && hr < 17){
            body.style.background.src = 'estilonoite.jpg'

        }
        else if(hr >= 18 && hr < 23){
            mudar.src = 'amanhecer.jpg'
            
        }
        else{
            body.style.background.src =  '../amanhecer.jpg'
        }
}