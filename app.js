//Foi criada uma CLASSE chamada PRODUTO com TRES PROPRIEDADES
var Produto = /** @class */ (function () {
    //UM CONSTRUTOR que RECEBE os VALORES dessas PROPRIEDADES por ARGUMENTO e REPASSA para esses CAMPOS
    function Produto(_codigo, _descricao, _preco) {
        this.codigo = _codigo;
        this.descricao = _descricao;
        this.preco = _preco;
    }
    //E o METODO ADICIONAL chamado getDados que retorna uma descricao desse produto 
    Produto.prototype.getDados = function () {
        return "Prod    " + this.codigo + ": " + this.descricao + "= R$ " + this.preco;
    };
    return Produto;
}());
