// Obtener la ventana
var ventana = document.getElementById("miVentana");

// Obtener el elemento <span> que cierra la ventana
var span = document.getElementsByClassName("cerrar")[0];

// Cuándo se cliquea en la 'x' cerrar la ventana
span.onclick = function() 
{
    ventana.style.display = "none";
}

// Cuándo se cliquea fuera de la ventana, cerrarla
window.onclick = function(event) 
{
    if (event.target == ventana) 
        ventana.style.display = 'none';
}

// Hacer la ventana visible
ventana.style.display = 'block';