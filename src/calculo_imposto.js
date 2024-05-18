function calcularIR (salariocheio){
    let aliquota = 0
     
    if (salariocheio <= 2112) {
        aliquota = 0
    } else if (salariocheio >= 2112.01 && salariocheio <= 2826.65){
        aliquota = 158.40
    } else if (salariocheio >= 2826.66 && salariocheio <= 3751.05){
        aliquota = 370.40
    } else if (salariocheio >= 3751.06 && salariocheio <= 4664.68){
        aliquota = 651.73
    } else {(salariocheio >= 4664.68)
        aliquota = 884.96
    }

        return aliquota;
}

module.exports = calcularIR