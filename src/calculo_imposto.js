function calcularIR (salariocheio){
    let aliquota = 0
     
    if (salariocheio <= 2112) {
        aliquota = (salariocheio - 0)
    } else if (salariocheio >= 2112.01 && salariocheio <= 2826.65){
        aliquota = (salariocheio - 158.40)
    } else if (salariocheio >= 2826.66 && salariocheio <= 3751.05){
        aliquota = (salariocheio - 370.40)
    } else if (salariocheio >= 3751.06 && salariocheio <= 4664.68){
        aliquota = (salariocheio - 651.73)
    } else {(salariocheio >= 4664.68)
        aliquota = (salariocheio - 884.96)
    }

        return aliquota;
}

module.exports = calcularIR