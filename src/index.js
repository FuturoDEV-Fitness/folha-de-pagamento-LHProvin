const calcularIR = require('./calculo_imposto');
const calcularInss = require('./calculo_inss');
const calcularFolhaPagamento = require('./calculo_salario_liquido');


const salariocheio = 5000; 
const outrosDescontos = 110;
console.log(`Outros descontos: R$ ${outrosDescontos.toFixed(2)}`);

const inss = calcularInss(salariocheio);
console.log(`INSS: R$ ${inss.toFixed(2)}`);


const ir = calcularIR(salariocheio);
console.log(`IR: R$ ${ir.toFixed(2)}`);


const salarioLiquido = calcularFolhaPagamento(salariocheio, inss, ir, outrosDescontos);
console.log(`Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`);
