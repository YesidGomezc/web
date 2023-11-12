function validar(){
	let nombre, direccion, telefono, correo, ciudad, edad;
	nombre=document.getElementById("nombre").value;
	direccion=document.getElementById("direccion").value;
    telefono=document.getElementById("telefono").value;
	correo=document.getElementById("correo").value;
	ciudad=document.getElementById("ciudad").value;
    edad=document.getElementById("edad").value;
	if (nombre==="" || direccion==="" || telefono==="" || correo==="" || ciudad==="" || edad==="") {
		alert("hay campos vacios");
		return false;
        
	}else{
		alert("Los datos se enviaron satisfactoriamente");
        
	}

}