const fs = require('fs');
const bancoCsv = '../database.csv';
const banco = fs.readFileSync(bancoCsv, 'utf-8');

const regexTelefone = /\(\d+\)\s\d+-\d+/g;

const matchTelefone = banco.match(regexTelefone);

console.log(matchTelefone);

const texto = "John Wick, salve o cachorro!";
const substring = "cachorro";
const resultado = texto.match(substring);
console.log(resultado); // ["cachorro"]

const textoComNumeros = "Números:, (24) 92728-6602, (66), 92328-2711";
const patternNumeros = /\d+/g;
const resultados = textoComNumeros.match(patternNumeros);

console.log(resultados)//["24","92728","6602","66","92328","2711"]
