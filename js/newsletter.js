var datos_contacto = {
  "correo": "",
  "nombre": "",
  "perros": []
};
$(document).ready(function(){
  $("#fila-2,#fila-3,#fila-4,#fila-5").hide();
  $('#formulario').on('submit',function(event ){
    event.preventDefault();
    })
    $('#fila-4').delegate('input','keyup',function(){
   var todo_bien = true;
   $('#fila-4').find('input').each(function(){
     if( $( this ).val() == '' ){
       todo_bien = false;
     }
   });
   if( todo_bien ){
     $('#fila-5').show();
   }else{
     $('#fila-5').hide();
   }
 });
  // Input de correo
$("input#correo").on("keyup", function(){
  datos_contacto.correo = $("input#correo").val().trim();
  if( datos_contacto.correo ){
    $("#fila-2").show();
  }else{
      $("#fila-2").hide();
  }
});

// Input de nombre
$("input#nombre").on("keyup", function(){
datos_contacto.nombre = $("input#nombre").val().trim();
if( datos_contacto.nombre ){
  $("#fila-3").show();
}else{
    $("#fila-3").hide();
}
});

// Input de numero
$("input#numero").on("keyup", function(){
var numero = parseInt($("input#numero").val().trim() );
if( numero > 0 ){

  $("#fila-4").html('');
  var indice = 0;
  while( indice < numero ){
    $("#fila-4").append(
      '<div class="col">'+
      '<p>Un@ se llama</p>'+
      '<input type="text" class="form-control">'+
      '</div>'
    );
    indice++

  }

  $("#fila-4").show();
}else{
    $("#fila-4").hide();
}
});

});
