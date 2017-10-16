console.log('ready!');

var titulo = document.querySelector('.titulo')

titulo.textContent = 'Aparecida Nutricionista'

var paciente = document.querySelectorAll('.paciente');
// var infoIMC =
for (var i = 0; i < paciente.length; i++) {
  pacientes = paciente[i];
  var tdPeso = pacientes.querySelector('.info-peso')
  tdPeso = tdPeso.textContent
  var tdAltura = pacientes.querySelector('.info-altura')
  tdAltura = tdAltura.textContent
  var imc = tdPeso / (tdAltura * tdAltura)

  var pesoValido = true
  var alturaValida = true

  if (tdPeso <= 0 || tdPeso >= 1000) {
    console.log('peso invalido');
    pesoValido = false
    tdIMC.textContent = 'deu ruim'
    
  }
  if (tdAltura < 0 || tdAltura > 3.1) {
    console.log('altura invalida!');
    alturaValida = false
    tdIMC.textContent = 'deu ruim'

  }
  if (alturaValida && pesoValido) {
    var tdIMC = pacientes.querySelector('.info-imc')
    tdIMC.textContent = imc
  }
}






console.log(imc);
