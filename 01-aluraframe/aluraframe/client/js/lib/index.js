var campos = [
  document.querySelector('#data'),
  document.querySelector('#quantidade'),
  document.querySelector('#valor')
];
console.log(campos);
var tbody = document.querySelector('table tbody');

var formulario = document.querySelector('.form')
formulario.addEventListener('submit', function(event) {
  event.preventDefault();
  montarTabela();
});

function  montarTabela(){
  var tr = document.createElement('tr');
  campos.forEach(function(campo) {
      var td = document.createElement('td');
      td.textContent = campo.value;
      tr.appendChild(td);
    });
    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;

    tr.appendChild(tdVolume);
    tbody.appendChild(tr);
}
