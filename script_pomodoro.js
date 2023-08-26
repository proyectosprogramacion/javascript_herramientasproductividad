//Botones
const btnEmpezar = document.getElementById('btnEmpezar');
const btnPomodoro = document.getElementById('btnPomodoro');
const btnDescansoCorto = document.getElementById('btnDescansoCorto');
const btnDescansoLargo = document.getElementById('btnDescansoLargo');

//Horas y minutos
const minutos25 = document.getElementById('minutos25');
const minutos05 = document.getElementById('minutos05');
const minutos10 = document.getElementById('minutos10');
const minuto_25= document.getElementById("minuto_25")
const segundo_25= document.getElementById("segundo_25")
const minuto_05= document.getElementById("minuto_05")
const segundo_05= document.getElementById("segundo_05")
const minuto_10= document.getElementById("minuto_10")
const segundo_10= document.getElementById("segundo_10")


//Banderas para gestionar que boton esta seleccionado
let banderaMinuto25, banderaMinuto05, banderaMinuto10 = false;

//Audio
const audio = new Audio("button-sound.mp3");

//Variables auxiliares
let myInterval;
let estado = true;



function cambiarPomodoro(){
  estado=true;
  //alert ("Cambiar pomodoro")
  minutos25.style.display="block";
  minutos05.style.display="none";
  minutos10.style.display="none";
  banderaMinuto25=true;
  banderaMinuto05=false;
  banderaMinuto10=false;

}


function cambiarDescansoCorto(){
  estado=true;
  //alert ("Cambiar descanso corto")
  minutos25.style.display="none";
  minutos05.style.display="block";
  minutos10.style.display="none";
  banderaMinuto25=false;
  banderaMinuto05=true;
  banderaMinuto10=false;
}


function cambiarDescansoLargo(){
  estado=true;
  //alert ("Cambiar descanso largo")
  minutos25.style.display="none";
  minutos05.style.display="none";
  minutos10.style.display="block";
  banderaMinuto25=false;
  banderaMinuto05=false;
  banderaMinuto10=true;
}

function empezar(){
  if(banderaMinuto25==true && banderaMinuto05==false && banderaMinuto10==false ){
    reloj25minutos();
  }else if(banderaMinuto25==false && banderaMinuto05==true && banderaMinuto10==false){
    reloj05minutos();
  }else if(banderaMinuto25==false && banderaMinuto05==false && banderaMinuto10==true){
    reloj10minutos();
  }else{
    reloj25minutos();
  }

}


function reloj25minutos () {
  const duracionSesion = Number.parseInt(minuto_25.textContent)

  if (estado) {
    estado = false;
    let totalSegundos = duracionSesion * 60;

    const actualizarSegundos = () => {
      const minutosDiv = minuto_25
      const segundosDiv = segundo_25

      totalSegundos--;

      let minutosLeft = Math.floor(totalSegundos / 60);
      let segundosLeft = totalSegundos % 60;

      if (segundosLeft < 10) {
        segundosDiv.textContent = '0' + segundosLeft;
      } else {
        segundosDiv.textContent = segundosLeft;
      }
      minutosDiv.textContent = `${minutosLeft}`

      if (minutosLeft === 0 && segundosLeft === 0) {
        audio.play()
        clearInterval(myInterval);
        estado=true;
      }
    }
    myInterval = setInterval(actualizarSegundos, 1000);
  } else {
    alert('La sesión ya ha empezado.')
  }
}




function reloj05minutos() {
  const duracionSesion = Number.parseInt(minuto_05.textContent)

  if (estado) {
    estado = false;
    let totalSegundos = duracionSesion * 60;

    const actualizarSegundos = () => {
      const minutosDiv = minuto_05;
      const segundosDiv = segundo_05;

      totalSegundos--;

      let minutosLeft = Math.floor(totalSegundos / 60);
      let segundosLeft = totalSegundos % 60;

      if (segundosLeft < 10) {
        segundosDiv.textContent = '0' + segundosLeft;
      } else {
        segundosDiv.textContent = segundosLeft;
      }
      minutosDiv.textContent = `${minutosLeft}`

      if (minutosLeft === 0 && segundosLeft === 0) {
        audio.play()
        clearInterval(myInterval);
        estado=true;
      }
    }
    myInterval = setInterval(actualizarSegundos, 1000);
  } else {
    alert('La sesión ya ha empezado.')
  }
}



function reloj10minutos() {
  const duracionSesion = Number.parseInt(minuto_10.textContent)

  if (estado) {
    estado = false;
    let totalSegundos = duracionSesion * 60;

    const actualizarSegundos = () => {
      const minutosDiv = minuto_10;
      const segundosDiv = segundo_10;

      totalSegundos--;

      let minutosLeft = Math.floor(totalSegundos / 60);
      let segundosLeft = totalSegundos % 60;

      if (segundosLeft < 10) {
        segundosDiv.textContent = '0' + segundosLeft;
      } else {
        segundosDiv.textContent = segundosLeft;
      }
      minutosDiv.textContent = `${minutosLeft}`

      if (minutosLeft === 0 && segundosLeft === 0) {
        audio.play()
        clearInterval(myInterval);
        estado=true;
      }
    }
    myInterval = setInterval(actualizarSegundos, 1000);
  } else {
    alert('La sesión ya ha empezado.')
  }
}




btnPomodoro.addEventListener('click', cambiarPomodoro);
btnDescansoCorto.addEventListener('click', cambiarDescansoCorto);
btnDescansoLargo.addEventListener ('click', cambiarDescansoLargo);
btnEmpezar.addEventListener('click', empezar);

