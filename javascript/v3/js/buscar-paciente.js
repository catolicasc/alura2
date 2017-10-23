var botao = document.querySelector('#buscar-paciente')
// https://api-pacientes.herokuapp.com/pacientes
botao.addEventListener('click', function() {
  var url = 'https://api-pacientes.herokuapp.com/pacientes'
  var xhr = new XMLHttpRequest()

  xhr.open("GET", url)
  xhr.addEventListener("load", function() {
    if (xhr.status == 200) {
      console.log();
      var resposta = xhr.responseText
      var pacientes = JSON.parse(resposta)
      pacientes.forEach(function(paciente) {
        adicionarPacienteTabela(paciente)
      })
    } else {
      console.log(xhr.status);
      console.log(xhr.responseText);
      var erro = document.querySelector('#erro-ajax')
      erro.classList.remove('invisivel')
    }

  })
  xhr.send()
  // enviado a requisão acima, agora deve ser usada a resposta da requisao
})
