var botao = document.querySelector('#buscar-paciente')
// https://api-pacientes.herokuapp.com/pacientes
botao.addEventListener('click', function(){
  console.log('https://api-pacientes.herokuapp.com/pacientes');
  var url =  'https://api-pacientes.herokuapp.com/pacientes'
  var xhr = new XMLHttpRequest()
  xhr.open("GET", url)
  xhr.addEventListener("load", function(){
    console.log();
    var resposta = xhr.responseText
    // resposta = JSON.stringify(reposta)
    var pacientes = JSON.parse(resposta)

    pacientes.forEach(function(paciente){
      adicionarPacienteTabela(paciente)
    })
    console.log(typeof pacientes);

  })

  xhr.send()
  // enviado a requisão acima, agora deve ser usada a resposta da requisao
})
