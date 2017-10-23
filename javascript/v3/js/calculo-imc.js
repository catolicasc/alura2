var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelectorAll  (".paciente");
for (var i = 0; i < paciente.length; i++) {
  var pacientes  = paciente[i]

  var tdPeso = pacientes.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = pacientes.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = pacientes.querySelector(".info-imc");

  var pesoEhValido = true;
  var alturaEhValida = true;

  if (!validarPeso(peso)) {
      console.log("Peso inválido!");
      pesoEhValido = false;
      tdImc.textContent = "Peso inválido";
  }

  if (!validarAltura(altura)) {
      console.log("Altura inválida!");
      alturaEhValida = false;
      tdImc.textContent = "Altura inválida";
  }

  if (pesoEhValido && alturaEhValida) {
      var imc = calcularIMC(altura, peso);
      tdImc.textContent = imc;
  }
  else{
    pacientes.classList.add('paciente-invalido')
  }

}
function validarPeso(peso){
  console.log(peso);
  if (peso >= 0 &&  peso <= 1000) {
    return true
    console.log('true');
  }
  console.log('nao true');
  return false
}
function validarAltura(altura){
  if (altura >= 0 && altura < 3.00) {
    return true
  }
  return false
}
function calcularIMC(altura, peso){
  var imc = 0
  imc = peso / (altura * altura);
  imc = imc.toFixed(2)
  return imc

}
