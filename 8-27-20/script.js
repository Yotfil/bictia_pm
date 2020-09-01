
const mensajeNombre = document.getElementById('mensajeAlertaNombre')
const mensajeAlertaTyC = document.getElementById('mensajeAlertaTyC')

function validarFormulario(e){
    e.preventDefault()
    let inputName = document.getElementById('name')
    console.log(inputName)
    const inputTyC = document.getElementById('inputTyC')



    if(inputName.value == ''){
        mensajeNombre.innerText = "Por favor llena el campo de Nombre"
        inputName.classList.add('bgcAlert')
        swal("Error!", "Llena el campo Nombre", "error");
    }


    if(inputTyC.checked == false){
        mensajeAlertaTyC.innerText = 'Acepta términos y condiciones'
        swal("Error!", "Acepta términos y condiciones", "error");
    }

    // if(inputName != "" && inputTyC.checked){
    //     swal("Muy Bien!", "Registro exitoso", "success");
    //     setTimeout(()=>{
    //         window.location = './calculadora.html'
    //     }, 2000)
    // }
    if(inputName != "" && inputTyC.checked){
        swal("Muy Bien!", "Registro exitoso", "success")
        .then((value) => {
            window.location = './calculadora.html'
            // swal(`The returned value is: ${value}`);
          });

    }
}