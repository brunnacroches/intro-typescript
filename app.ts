
//Foi criada uma CLASSE chamada PRODUTO com TRES PROPRIEDADES
class Produtox {
  codigo: string;
  descricao: string;
  preco: number;

  //UM CONSTRUTOR que RECEBE os VALORES dessas PROPRIEDADES por ARGUMENTO e REPASSA para esses CAMPOS
  constructor(_codigo : string, _descricao : string, _preco : number ) {
      this.codigo = _codigo;
      this.descricao = _descricao;
      this.preco = _preco;
  }

  //E o METODO ADICIONAL chamado getDados que retorna uma descricao desse produto 
  getDados() {
    return "Prod    "+ this.codigo + ": " + this.descricao + "= R$ " + this.preco;
  }
}

// PARA COMPILARL : abrir o terminal e digitar "tsc app.ts "