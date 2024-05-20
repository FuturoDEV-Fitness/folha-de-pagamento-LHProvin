function calcularFolhaPagamento(salariocheio, inss, ir, outrosDescontos) {
    const salarioLiquido = salariocheio - inss - ir - outrosDescontos;
    
    return salarioLiquido;
}

module.exports = calcularFolhaPagamento;
