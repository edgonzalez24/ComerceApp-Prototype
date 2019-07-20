// menu responsive
$(document).ready(main);
 
      var contador = 1;
      
      function main(){
        $('.menu_bar').click(function(){
          //$('nav').toggle();
      
          if(contador == 1){
            $('nav').animate({
              right: '0'
            });
            contador = 0;
          } else {
            contador = 1;
            $('nav').animate({
              right: '-100%'
            });
          }
      
        });
      
      };
	$('.element a').click(function() {
		$('nav').animate({
              left: '-100%'
            });
            contador = 1;
        $('').toggle('1000');
        $(".menu_bar span").toggleClass("fa fa-bars fa fa-times");
    });

      $('.menu_bar').click(function() {
        $('').toggle('1000');
        $("span", this).toggleClass("fa fa-bars fa fa-times");
    });

    // Validación formulario mediante Ajax

$("#form_comerceapp").submit(function(f) {
  f.preventDefault();

var nombre = $("#nombre").val();
var email = $("#email").val();
var mensaje = $("#mensaje").val();

if(nombre === "" || email==="" || mensaje===""){
  swal({
      title: "¡Todos los campos deben llenarse!",
      text: "",
      icon: "warning",
      button: "Entendido",
      dangerMode: true,
  });
} else {
  $("#enviar").val("ENVIANDO...").attr('disabled', 'disabled');
  var dataform = $("#form_comerceapp").serialize();
  f.preventDefault();

  var url = "./php/sender.php";
    var userData = {
      nombre: nombre,
      email: email, 
      mensaje: mensaje
        }
        $.ajax({
          type: "POST",
          url: url,
          data: {
              user: userData,
          },
          success: function(data) {
            console.log(data) //Mostrando los datos en consola
            $('#enviar').attr("value", "OK").attr('disabled', 'disabled')
            $('#form_comerceapp')[0].reset()
            $("#enviar").attr("value", "Cotizar").removeAttr('disabled')

            swal({
                title: "¡Tus datos han sido enviados con éxito!",
                text: "",
                icon: "success",
                button: "Entendido",
                dangerMode: true,
            });
          }  
        });

        return false
  }

 });



//  $(document).ready(function(){

//   $("#plus").click(function(evento){

//     if $("#tabs").css("display", "none");
//    });
// });

$('#plus').click(function(){
  $('.symbol').html("-").fadeIn(50);
  $('#tabs').toggle(1000);
  
});