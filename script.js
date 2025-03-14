function criarPessoa(event) {
    event.preventDefault(); 

    nomeDoCliente = document.getElementById('nome').value;
    cpfDoCliente = document.getElementById('cpf').value; 
    valorDoEmprestimo = document.getElementById('valorDoEmprestimo').value;
    taxaDeJurosAnual = document.getElementById('taxaDeJurosAnual').value;
    qtdDeAnos = document.getElementById('qtdDeTempoEmMeses').value;

    exbirValorTotalParaSerPago(qtdDeAnos, taxaDeJurosAnual, valorDoEmprestimo);
    
}

function exbirValorTotalParaSerPago(qtdDeAnos, taxaDeJurosAnual, valorDoEmprestimo){
    let valorTotal;

    for(let i = 0; i <= qtdDeAnos; i++){
        valorTotal = ((taxaDeJurosAnual/100) * valorDoEmprestimo) + valorDoEmprestimo;
    }

    return valorTotal;
}

