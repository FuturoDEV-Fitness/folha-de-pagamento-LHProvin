const fs = require('fs');
const PDFDocument = require('pdfkit');
const calcularIR = require('./calculo_imposto');
const calcularInss = require('./calculo_inss');
const calcularFolhaPagamento = require('./calculo_salario_liquido');

function gerarPDF(nome, cpf, salariocheio, inss, ir, outrosDescontos, salarioLiquido) {
    const doc = new PDFDocument();
    const filePath = `./folhas_pagamento/${nome}_${cpf}.pdf`;

    if (!fs.existsSync('./folhas_pagamento')){
        fs.mkdirSync('./folhas_pagamento');
    }

    doc.pipe(fs.createWriteStream(filePath));

    doc.fontSize(20).text('--- Folha de Pagamento ---', { align: 'center' });
    doc.moveDown();
    doc.fontSize(14).text(`Data de Geração: ${new Date().toLocaleDateString()}`);
    doc.text(`Nome: ${nome}`);
    doc.text(`CPF: ${cpf}`);
    doc.moveDown();
    doc.text('--- ---');
    doc.text(`Salário Bruto: R$ ${salariocheio.toFixed(2)}`);
    doc.moveDown();
    doc.text('--- ---');
    doc.text(`INSS: R$ ${inss.toFixed(2)}`);
    doc.text(`Imposto de Renda: R$ ${ir.toFixed(2)}`);
    doc.text(`Outros Descontos: R$ ${outrosDescontos.toFixed(2)}`);
    doc.moveDown();
    doc.text('--- ---');
    doc.text(`Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`);
    doc.end();
}

function dadosFolhaPagamento(nome, cpf, salariocheio, outrosDescontos, gerarPdfFlag = false) {
    const inss = calcularInss(salariocheio);
    const ir = calcularIR(salariocheio);
    const salarioLiquido = calcularFolhaPagamento(salariocheio, inss, ir, outrosDescontos);

    console.log('---- Folha de Pagamento ----');
    console.log(`Nome: ${nome}`);
    console.log(`CPF: ${cpf}`);
    console.log(`Salário Bruto: R$ ${salariocheio.toFixed(2)}`);
    console.log(`INSS: R$ ${inss.toFixed(2)}`);
    console.log(`IR: R$ ${ir.toFixed(2)}`);
    console.log(`Outros Descontos: R$ ${outrosDescontos.toFixed(2)}`);
    console.log(`Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`);

    if (gerarPdfFlag) {
        gerarPDF(nome, cpf, salariocheio, inss, ir, outrosDescontos, salarioLiquido);
        console.log('PDF gerado com sucesso!');
    }
}

const nome = 'Luiz Henrique';
const cpf = '013.691.230-35';
const salariocheio = 15000;
const outrosDescontos = 0;


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Deseja gerar um PDF com a folha de pagamento? (sim/não): ', resposta => {
    const gerarPDF = resposta.toLowerCase() === 'sim';
    dadosFolhaPagamento(nome, cpf, salariocheio, outrosDescontos, gerarPDF);
    readline.close();
});

