
import rl from 'readline-sync';

console.log("Aplicação de juros:");

let valorUsuario = "";
let diasVencimento = "";
let taxaJuros = 5;
let valorFinal = 0;
const semAtraso = 0;

function coletaDados(){
  valorUsuario = rl.question("\nInforme o valor devido: R$");
  diasVencimento = rl.question("Informe quantos dias se passaram desde o vencimento do boleto: ");
  let validacaoValor = valorUsuario > 0;  //True validado, false invalidado
  let validacaoDias  = diasVencimento >=0; //True validade, false invalidado
  if( validacaoValor && validacaoDias ){  //Ambos validados
    console.log("Valores informados validados!");
  }else if(validacaoValor === false && validacaoDias === false){ //Ambos errados
      console.log("Ambos valores nao validaos, favor inserir-los novamente.");
      coletaDados();
  } else if(validacaoValor === true && validacaoDias === false){ //Valor divida valido, dias invalido
      console.log("Quantidade de dias invalido, favor insira os dados novamente.");
      coletaDados();
  } else if(validacaoValor === false && validacaoDias === true){ //Valor divida invalido, dias valido
      console.log("Valor da dívida inserido invalido, favor insira os dados novamente.");
      coletaDados();
  } 

}

function calculaDivida (valorUsuario, diasVencimento){
          if(diasVencimento === semAtraso){
            console.log("Sua dívida está em dia, nao há atraso.");
          }
          else if(diasVencimento <= 15 ){
          valorFinal = ((valorUsuario/100)*taxaJuros) + Number(valorUsuario);
          exibeValorFinal(valorFinal);
        } else if(diasVencimento > 15){
          taxaJuros = 10;
          valorFinal = ((valorUsuario/100)*taxaJuros) + Number(valorUsuario);
          exibeValorFinal(valorFinal);
        }
}

function exibeValorFinal(valorFinal){
          console.log("\nTaxa de juros: " + taxaJuros + "%");
          console.log("Valor final a ser pago: R$" +valorFinal.toFixed(2));
}

coletaDados();
calculaDivida(valorUsuario, diasVencimento);