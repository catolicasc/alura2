var botaoAdicionar = document.querySelector("#adicionar-paciente")

botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault();
  var form = document.querySelector('#form-adiciona');
  // pegar o valor do que foi digitado antes do click
  var paciente = obterInformacoesForm(form);
    // error.textContent =
  var error = validarPaciente(paciente);

  if (validarPaciente(paciente).length > 0) {
    exibirError(error)
    return;
  }
  adicionarPacienteTabela(paciente)
  form.reset()
});

function adicionarPacienteTabela(paciente){
  var pacienteTr = motarTr(paciente)
  var tabela = document.querySelector('#tabela-pacientes')
  tabela.appendChild(pacienteTr)



}
function exibirError(err){
  var ul  = document.querySelector('#mensagem-erro')
  ul.innerHTML = ""
  err.forEach(
    function(erro){
      console.log(erro);

      var li = document.createElement('li')
      li.textContent = erro
      ul.appendChild(li)
    })
}

function motarTr(paciente){
  // criar os elementos
  var pacienteTr = document.createElement('tr')
  pacienteTr.classList.add('paciente')
  // linkar Td em Tr e tabela na tr
  pacienteTr.appendChild(montarTd(paciente.nome, 'info-nome'))
  pacienteTr.appendChild(montarTd(paciente.peso, 'info-peso'))
  pacienteTr.appendChild(montarTd(paciente.altura, 'info-altura'))
  pacienteTr.appendChild(montarTd(paciente.gordura, 'info-gordura'))
  pacienteTr.appendChild(montarTd(paciente.imc, 'info-imc'))
  return pacienteTr
}

function validarPaciente(paciente){
  var errors = []
  if (paciente.nome.length == 0) {
    errors.push("Nome não deve ser em branco")
  }
  if (paciente.peso.length == 0) {
    errors.push("Peso não deve ser em branco")
  }
  if (paciente.altura.length == 0) {
    errors.push("Altura não deve ser em branco")
  }
  if (paciente.gordura.length == 0) {
    errors.push("Gordura não deve ser em branco")
  }

  if (!validarPeso(paciente.peso)) {
    errors.push("Peso é invalido")
  }
  if (!validarAltura(paciente.altura)) {
    errors.push(" Altura é invalida")
  }
  return errors
}
function montarTd(dado, classe){
  var td = document.createElement('td')
  td.textContent = dado
  td.classList.add(classe)
  return td
}

function obterInformacoesForm(form){
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calcularIMC(form.altura.value, form.peso.value)
  };
  return paciente;
}
