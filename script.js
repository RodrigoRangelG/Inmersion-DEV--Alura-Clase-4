function isImage(url) {
    return /\.jpg/.test(url);
}
function isYoutube(url) {
    return /youtube\.com\/watch/.test(url);
}

var peliculas = [];

function agregarPelicula(){
    if(!isImage(document.getElementById("pelicula").value)){ 
        document.getElementById("pelicula").value = "";
        exit;
    }
    var trailer = "";
    while(trailer==""){
        trailer=prompt('Pon el link del trailer');
        if(!isYoutube(trailer))
            trailer="";
    }
    
    var peliFavorita = document.getElementById("pelicula").value;
    peliculas.push("<a href="+trailer+' target="_blank"><img src='+peliFavorita+">");

    var elementoListaPelicula = document.getElementById("listaPeliculas")
    var cadena = "";
    for (var i=0;i<peliculas.length;i++){
        cadena += peliculas[i];
    }
    elementoListaPelicula.innerHTML = cadena;
    document.getElementById("pelicula").value = "";
    
}