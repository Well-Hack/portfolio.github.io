const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if(hr < 10) hr = '0' + hr;
    if(min < 10) min = '0' + min;
    if(s < 10) s = '0' + s;
    //testando
    var currentTime = new Date().getHours();
    if (6 <= currentTime && currentTime < 12) {
    
        document.body.style.backgroundImage = "blue";
    
    }else if (12 <= currentTime && currentTime < 18) {
    
        document.body.style.backgroundColor = "red";
    
    }else {
    
        document.body.style.backgroundColor = "black";
    
    }

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
})