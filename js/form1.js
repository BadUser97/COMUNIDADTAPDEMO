  
document.querySelector('#submit').addEventListener('click',function(){

    let nombre = document.querySelector('#nombre').value;
    let apellidos = document.querySelector('#apellidos').value;
    let edad = document.querySelector('#edad').value;
    let colonia = document.querySelector('#colonia').value;
    let fnacimiento = document.querySelector('#fnacimiento').value;
    let telefono = document.querySelector('#telefono').value;


    let url = "https://api.whatsapp.com/send?phone=529626217118&text=*_COMUNIDAD_TAPACHULA_*%0A* SUBSCRIPCION DE USUARIOS*%0A%0A*NOMBRE(s): *%0A" + nombre +  "%0A*Apellidos: *%0A" + apellidos + "%0A*EDAD: *%0A" + edad +"%0A*COLONIA: *%0A" + colonia + "%0A*FECHA DE NACIMIENTO: *%0A" + fnacimiento + "%0A*TELEFONO: *%0A" + telefono;
    window.open(url);

});