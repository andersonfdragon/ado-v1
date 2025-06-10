//FORMULARIO DE CONTACTO - ENVIAR DESDE FORMULARIO PAGINA INICIO PC
$("#contactForm_web_01").validator().on("submit", function (event) {
    var valido_form = 0;

    if (event.isDefaultPrevented("Complete este campo")) {
        // handle the invalid form...
        submitMSG_web_01(false, "Complete los campos que faltan.");
    } else {
        event.preventDefault();
        valido_form = 1;
    }


    if (valido_form === 1) {
        submitForm_web_01();
        submitMSG_web_01(true, "");
    }

    else {
        event.preventDefault();
        submitMSG_web_01(false, "Complete los campos que faltan");
    }
});

function submitForm_web_01(){
    // Initiate Variables With Form Content
    var first_name_web_01 = $("#first_name_web_01").val();
    var telephone_web_01 = $("#telephone_web_01").val();

    $.ajax({
        type: "POST",
        url: "php/process_xs_01.php",
        data: "first_name_web_01=" + first_name_web_01 + "&telephone_web_01=" + telephone_web_01,
        success : function(text){
            if (text == "success"){
                formSuccess_web_01();
                window.location.href = "agradecimiento_landing_alianza_digital_xs.html";
            } else {
                submitMSG_web_01(false,text);
            }
        }
    });
}

function formSuccess_web_01(){
    $("#contactForm_web_01")[0].reset();
    submitMSG_web_01(true, "Gracias por dejar sus datos, pronto estaremos en contacto.")
}

function submitMSG_web_01(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning";
    } else {
        var msgClasses = "h4 text-center text-danger";
    }
    $("#msgSubmit_web_01").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_condiciones_web_01(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning";
    } else {
        var msgClasses = "h4 text-center text-danger";
    }
    $("#msgSubmit_condiciones_web_01").removeClass().addClass(msgClasses).text(msg);
}
