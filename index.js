
import rl from 'readline-sync';
import {coletaDados,calculaDivida} from './functions.js';

console.log("Aplicação de juros:");

let valorUsuario = "";
let diasVencimento = "";
let taxaJuros = 5;
let valorFinal = 0;

let dadosColetadosValidos = coletaDados();
valorUsuario = dadosColetadosValidos.valor;
diasVencimento = dadosColetadosValidos.dias;
calculaDivida(valorUsuario, diasVencimento, valorFinal, taxaJuros);
