console.log('ready!');

var titulo = document.querySelector('.titulo')

titulo.textContent = 'Aparecida Nutricionista'

var paciente = document.querySelector('.paciente');
// var infoIMC =
var tdPeso = paciente.querySelector('.info-peso')
tdPeso = tdPeso.textContent
var tdAltura = paciente.querySelector('.info-altura')
tdAltura = tdAltura.textContent
var imc = tdPeso / (tdAltura * tdAltura)

var pesoValido = true
var alturaValida = true

if (tdPeso <= 0 || tdPeso >= 1000) {
  console.log('peso invalido');
  pesoValido = false
}
if (tdAltura < 0 || tdAltura > 3.1) {
  console.log('altura invalida!');
  alturaValida = false
}
if (alturaValida && pesoValido) {
  var tdIMC = paciente.querySelector('.info-imc')
  tdIMC.textContent = imc
  console.log(tdIMC);

}





console.log(imc);
