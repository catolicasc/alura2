var botaoAdicionar = document.querySelector("#adicionar-paciente")

botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault();
  var form = document.querySelector('#form-adiciona');
  // pegar o valor do que foi digitado antes do click
  var paciente = obterInformacoesForm(form);
  var pacienteTr = motarTr(paciente)
  var tabela = document.querySelector('#tabela-pacientes')
  tabela.appendChild(pacienteTr)
  form.reset()
});

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
