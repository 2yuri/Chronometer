const btnInit = document.getElementById("BtnIniciar")
const btnZerar = document.getElementById("BtnZerar")
const btnParar = document.getElementById("btnParar")
const btnContinuar = document.getElementById("BtnContinuar")

var chronometer_id = 0;


var h= 0; m= 0; s= 0; d = 0;
 
 btnContinuar.style.display='none';
 btnParar.style.display='none';

function startChronometer() {
  btnContinuar.style.display='none';
  btnInit.style.display='none';
  btnZerar.style.display='inline';
  btnParar.style.display='inline';


 const timer_horas = document.getElementById("horas");
 const timer_minutos = document.getElementById("minutos");
 const timer_segundos = document.getElementById("segundos");
 const timer_decimos = document.getElementById("decimos");

 h= 0; m= 0; s= 0; d = 0;

 chronometer_id = setInterval(function () { 
    timer_horas.innerHTML = h < 10 ? '0' + h : h;
    timer_minutos.innerHTML = m < 10 ? '0' + m : m;
    timer_segundos.innerHTML = s < 10 ? '0' + s : s;
    timer_decimos.innerHTML = d < 10 ? '0' + d : d;

    if(d < 9) { d += 1; }
    else if (s < 59) { d= 0; s+=1; }
    else if (m < 59) { d= 0; s=0; m+=1; }
    else if (h < 1000) { d= 0; s=0; m=0; h+=1; }
    else { alert('oi')}

 }, 100);
}

function continuar() {
  btnParar.style.display='inline';
  btnContinuar.style.display='none';


 const timer_horas = document.getElementById("horas");
 const timer_minutos = document.getElementById("minutos");
 const timer_segundos = document.getElementById("segundos");
 const timer_decimos = document.getElementById("decimos");

 chronometer_id = setInterval(function () { 
    timer_horas.innerHTML = h < 10 ? '0' + h : h;
    timer_minutos.innerHTML = m < 10 ? '0' + m : m;
    timer_segundos.innerHTML = s < 10 ? '0' + s : s;
    timer_decimos.innerHTML = d < 10 ? '0' + d : d;

    if(d < 9) { d += 1; }
    else if (s < 59) { d= 0; s+=1; }
    else if (m < 59) { d= 0; s=0; m+=1; }
    else if (h < 1000) { d= 0; s=0; m=0; h+=1; }
    else { alert('oi')}

 }, 100);
}


function parar() {
  btnParar.style.display='none';
  btnContinuar.style.display='inline';

  clearInterval(chronometer_id);
}

function zerarChronometer() {
  btnInit.style.display='inline';
  btnZerar.style.display='none';
  btnParar.style.display='none';
  btnContinuar.style.display='none';


  clearInterval(chronometer_id);


  document.getElementById("horas").innerHTML = "00";
  document.getElementById("minutos").innerHTML = "00";
  document.getElementById("segundos").innerHTML = "00";
  document.getElementById("decimos").innerHTML = "00";
  
}


btnInit.onclick = startChronometer;
btnZerar.onclick = zerarChronometer;
btnParar.onclick = parar;
btnContinuar.onclick = continuar;
