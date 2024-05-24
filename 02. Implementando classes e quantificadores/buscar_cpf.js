const fs = require('fs');
const bancoCsv = '../database.csv';
const banco = fs.readFileSync(bancoCsv, 'utf-8');

const pattenrCPF = /\d{3}[.-]?\d{3}[.-]?\d{3}[.-]?\d{2}/g;

const matchCPF = banco.match(pattenrCPF);

console.log(matchCPF);