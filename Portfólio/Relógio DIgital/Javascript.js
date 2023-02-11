
const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if(hr < 10) hr = '0' + hr;
    if(min < 10) min = '0' + min;
    if(s < 10) s = '0' + s;

    if (hr >= 6 && hr < 12) {
        document.getElementById("imagem").style.backgroundImage = "url('amanhecer.jpg')";
      } else if (hr >= 12 && hr < 16) {
        document.getElementById("imagem").style.backgroundImage = "url('diacidade.jpg')";
      } else if(hr >= 16 && hr < 18){
        document.getElementById("imagem").style.backgroundImage = "url('entardecer.jpg')";
      } else if(hr >= 18 && hr < 23){
        document.getElementById("imagem").style.backgroundImage = "url('estilonoite.jpg')";
      }else{
        document.getElementById("imagem").style.backgroundImage = "url('madrugada.jpg')";
      }

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
});


