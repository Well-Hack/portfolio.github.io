 function carregar(){
    var data = new Date()
    var hra = data.getHours()
    var img = window.document.getElementsByClassName("mudar")
        if (hra >= 10 && hra < 17){
            img.src = 'estilonoite.jpg'
            img.innerHTML = "teste"

        }
        else if(hra >= 17 && hra < 23){
            img.src = 'estilonoite.jpg'
            img.innerHTML = "teste"
        }
        else{
            img.src = 'estilonoite.jpg'
        }
}
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