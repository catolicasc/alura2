var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelectorAll  (".paciente");
console.log(paciente.length);
for (var i = 0; i < paciente.length; i++) {
  var pacientes  = paciente[i]

  var tdPeso = pacientes.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = pacientes.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = pacientes.querySelector(".info-imc");

  var pesoEhValido = true;
  var alturaEhValida = true;

  if (peso <= 0 || peso >= 1000) {
      console.log("Peso inválido!");
      pesoEhValido = false;
      tdImc.textContent = "Peso inválido";
  }

  if (altura <= 0 || altura >= 3.00) {
      console.log("Altura inválida!");
      alturaEhValida = false;
      tdImc.textContent = "Altura inválida";
  }

  if (pesoEhValido && alturaEhValida) {
      var imc = peso / (altura * altura);
      tdImc.textContent = imc;
  }
  else{
    pacientes.classList.add('paciente-invalido')
  }

}
