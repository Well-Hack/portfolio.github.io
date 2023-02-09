const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if(hr < 10) hr = '0' + hr;
    if(min < 10) min = '0' + min;
    if(s < 10) s = '0' + s;
    //testando
    function carregar(){
        var b = document.getElementById('mudar')
        var hra = data.getHours()
            if (hra > 10 && hra < 17){
            b.src = 'estilonoite.jpg'

            }
            else if(hra > 17 && hra < 12){
                b.src = 'estilonoite.jpg'
            }
            else{
                b.src = 'estilonoite.jpg'
            }
    }

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
})