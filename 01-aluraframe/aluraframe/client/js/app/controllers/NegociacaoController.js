class NegociacaoController{
  constructor(){
   let $ = document.querySelector.bind(document)
   this.inputData = $('#data')
   this.inputQuantidade = $('#quantidade')
   this.inputValor = $('#valor')
  }

  adicionar(event){
    event.preventDefault();


    console.log(this.inputData.value);

  }
}
