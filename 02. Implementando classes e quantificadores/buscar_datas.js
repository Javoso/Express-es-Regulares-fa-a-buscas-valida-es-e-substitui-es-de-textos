const fs = require('fs');
const bancoCsv = '../database.csv';
const banco = fs.readFileSync(bancoCsv, 'utf-8');

const patternData = /\d{2}[./]?\d{2}[./]?\d{4}$/gm;

const matchDatas = banco.match(patternData);

console.log(matchDatas);