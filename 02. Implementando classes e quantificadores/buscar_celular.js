const fs = require('fs');
const bancoCsv = '../database.csv';
const banco = fs.readFileSync(bancoCsv, 'utf-8');

const regexCelular = /\(\d{2}\)\s\d{5}-\d{4}/g; 

const matchCelular = banco.match(regexCelular);
console.log("MATCH -> CELULAR")
console.log(matchCelular);

const regexTelefone = /\(\d{2}\)\s\d{4,5}-\d{4}/g;
const matchTelefone = banco.match(regexTelefone);

console.log("MATCH -> TELEFONE")
console.log(matchTelefone);

