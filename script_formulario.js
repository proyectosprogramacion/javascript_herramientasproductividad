/*Esperamos a que carge la página para que se ejecute javaScript utilizando window.onload y una función anónima */

window.onload=function(){


	textNombre= document.getElementById("textNombre");
	textEdad=document.getElementById("textEdad");

	//Tipo radioButton todas tienen que tener el mismo name para que se seleccione solo uno 
	//Por eso se obtiene su valor a través del getElementsByName
	rbuttonTipoEmpleado=document.getElementsByName("tipoEmpleado");//Es un array
	checkboxOpciones=document.getElementsByName("opciones");//Es un array


	valorEstado=document.getElementById("valorEstado");
	valorTextarea=document.getElementById("valorTextarea");

	mostrarInformacion=document.getElementById("mostrarInformacion");
	mostrarInformacion.style.visibility="hidden";//Ocultamos esta capa

	//Conectamos el html con javaScritp
	botonConfirmar=document.getElementById("btConfirmar");
	//Recojo los eventos
	botonConfirmar.addEventListener("click", confirmar);
	

	btEnviar=document.getElementById("btEnviar");
	btEnviar.disabled=true;

	parrafoModal = document.getElementById("parrafoModal");





}//fin de window.onload



/* El campo nombre debe tener como máximo 20 caracteres*/
function verificarNombre(){
  /*Verificamos que el campo no esta vacio */
  if (textNombre.value.length==0){
    modal.style.display = "block";
    parrafoModal.textContent='Tienes que poner tu nombre y apellidos';
    textNombre.focus();
  }
    else {
      console.log("el valor original introducido es: " + textNombre.value);
       

        /* La expresión regular contiene un carácter de espacio en blanco (" "), y la propiedad global /g */
        /*El patrón de expresión regular \s se refiere a cualquier símbolo de espacio en blanco: espacios, tabulaciones y saltos de línea. */
        const expRegular=/\s+/g;
        let textoNombreSinEspacios=textNombre.value.replace(expRegular, '');
        console.log("El texto sin espacios " + textoNombreSinEspacios);
          

        /*La función split TROCEA una cadena en subcadenas tomando como carácter de corte 
         el que le pasemos como parámetro, y dejándonos el resultado en un array de caracteres
         El cual tendrá como propiedad length.*/
        let textoNombreArray=textoNombreSinEspacios.split("");
        console.log(textoNombreArray.length);
        const maximoLongCaracteres=20;
        let textNombreString;

        if(textoNombreArray.length<maximoLongCaracteres){//Si es menor que la longitud permitida
            textNombreString=textoNombreArray.join('');
            return textNombreString;
        }else{
          console.log("Bandera")
           modal.style.display = "block";
          parrafoModal.textContent= 'Nombre y apellidos con más de 20 caracteres no es admitido.';
        }

        
      }
  }
    


/* El campo edad debe tener entre 1 y 3 caracteres y debe ser numérico y mayor de 17*/
function verificarEdad(){
	var expRegularSinEspacios=/\s+/g;
	/* [0-9]+ significa que será valida la cadena que tenga desde el principio hasta el final
	(da igual la longitud) caracteres comprendidos entre 0 y 9 y que al menos haya 1.
	A continuación, {1,3} asegura que sean al menos 1 de esos caracteres, pero no más de 3 */
	var expRegularLongitudNumero=/^[0-9]{1,3}$/;

	textoEdadSinEspacios=textEdad.value.replace(expRegularSinEspacios, '');
	
	console.log("El texto sin espacios: "+ textoEdadSinEspacios );
	datoEdadCorrecto=false;
	
	if(textoEdadSinEspacios.match(expRegularLongitudNumero)){
		console.log("El valor es numerico y tiene entre 1 y 3 caracteres: " + (textoEdadSinEspacios.match(expRegularLongitudNumero)));
		/*El método match() se usa para obtener todas las ocurrencias de una expresión regular dentro de una cadena.
		devuelve el array de las ocurrencias encontradas*/
		if(textoEdadSinEspacios>17) {//Si es mayor de 17
			console.log("Es numerico y vale más de 17: " + textoEdadSinEspacios);
			datoEdadCorrecto=true;
		}
	}
	else{
		console.log("El texto introducido no es correcto" + textoEdadSinEspacios);
		datoEdadCorrecto=false;
	}


}
/*Es obligatorio elegir el tipo de empleado y el estado (no vale un estado por defecto) */
function verificarRadioButton(){
	datoTipoEmpleadoCorrecto=false;
	console.log(rbuttonTipoEmpleado.length);
	for(var i=0; i<rbuttonTipoEmpleado.length; i++){
		if(rbuttonTipoEmpleado[i].checked){//si uno esta seleccionado
			valorRBSeleccionado=rbuttonTipoEmpleado[i].value;
			console.log("El valor seleccionado: " + rbuttonTipoEmpleado[i].value);
			datoTipoEmpleadoCorrecto=true;
		}
		else{
			console.log("No se ha seleccionado nada.");
			datoTipoEmpleadoCorrecto=false;
		}
	}
}
/*No es requisito */
function verificarCkeckbox(){
	datoOpcionesCorrecto=false;
	console.log(checkboxOpciones.length);
	valorChexboxSeleccionado=new Array;
	for(var i=0; i<checkboxOpciones.length; i++){
		if(checkboxOpciones[i].checked){
			valorChexboxSeleccionado+=checkboxOpciones[i].value + " ";
			console.log("El valor seleccionado: " +checkboxOpciones[i].value);
			datoOpcionesCorrecto=true;
		}
		else{
			datoOpcionesCorrecto=false;
		}
	}
}

function verificarEstado(){
	datoEstadoCorrecto=false;
	/*Accediendo al valor de la opción seleccionada a través de la propiedad value. 
	De igual forma a través de la propiedad text puedes acceder al texto de la opcion:
	*/
	estadoSeleccionado=valorEstado.options[valorEstado.selectedIndex].value;
	estadoSeleccionadoTexto=valorEstado.options[valorEstado.selectedIndex].text;
	console.log("El indice seleccionado es:  " + estadoSeleccionado);
	console.log("El texto seleccionado es: " + estadoSeleccionadoTexto);
	if(estadoSeleccionado!=0){
		datoEstadoCorrecto=true;
	}
	else{
		datoEstadoCorrecto=false;
	}
}

/* El campo comentarios debe tener como máximo 200 caracteres*/
function campoComentarios(){
	maximoPermitido=200;
	var expresionSinEspaciosBlanco=/\s+/g;
	valorTextareaSinEspacios=valorTextarea.value.replace(expresionSinEspaciosBlanco, '');
	console.log("El texto sin espacios: " + valorTextareaSinEspacios);
	longitudMensaje=valorTextareaSinEspacios.length;
	console.log(longitudMensaje);
	if(longitudMensaje>maximoPermitido){
		alert("MaximoPermitido");
	}

}

function confirmar(){
	
	verificarNombre();
	verificarEdad();
	verificarRadioButton();
	verificarCkeckbox();
	verificarColor();
	campoComentarios();
	//datos
	console.log(textNombre.value);
	console.log(textEdad.value);
	console.log(valorRBSeleccionado);
	console.log(valorChexboxSeleccionado);
	console.log(colorSeleccionadoTexto);

	/* Si no se cumple un criterio se manda el foco al elemento
	que no cumple el criterio y se le pone un borde rojo a ese elemento.
	*/
	//HTMLElement.focus() fija el foco del cursor en el elemento indicado, si éste puede ser enfocado.

	console.log(datoNombreCorrecto);
	if(datoNombreCorrecto==false){//Si el dato introducido no es correcto
		textNombre.focus();
		textNombre.stye.borderColor=red;
	}
	
	console.log(datoEdadCorrecto);
	console.log(datoTipoCocheCorrecto);
	console.log(datoOpcionesCorrecto);
	console.log(datoColorCorrecto);

	




	/*Al pulsar el botón confirmar se muestra la capa Elección (antes está oculta)
	con los datos  que ha introducido el usuario en formato texto (una frase, no es otro formulario)  */
	/*
	The visibility property allows the author to show or hide an element. It is similar to the display property. 
	However, the difference is that if you set display:none, 
	it hides the entire element, while visibility:hidden means that the contents 
	of the element will be invisible, but the element stays in its original position and size.
	object.style.visibility = "visible|hidden|collapse|initial|inherit" 
	 */
	mostrarInformacion.style.visibility="visible";//Mostramos la capa Muestra un objeto en forma de bloque, ocupando una línea completa.

	btEnviar.disabled=false;//activamos el boton enviar
	//btEnviar.addEventListener("click", enviar);

	

}//fin function confirmar

/* Es el que realmente realiza el action del formulario anterior */
//function enviar(){
	
//}//fin function enviar/