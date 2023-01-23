const coletaDados = () =>{
  let valorUsuario = rl.question("\nInforme o valor devido: R$");
  let diasVencimento = rl.question("Informe quantos dias se passaram desde o vencimento do boleto: ");
  let validacaoValor = valorUsuario > 0;  //True validado, false invalidado
  let validacaoDias  = diasVencimento >=0; //True validade, false invalidado
  if( validacaoValor && validacaoDias ){  //Ambos validados
    let dadosColetadosValidos = {valor: valorUsuario, dias: diasVencimento};
    return dadosColetadosValidos;
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
const calculaDivida = (valorUsuario, diasVencimento, valorFinal, taxaJuros) => {
          if(diasVencimento === 0){
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

const exibeValorFinal = (valorFinal) => {
          console.log("\nTaxa de juros: " + taxaJuros + "%");
          console.log("Valor final a ser pago: R$" +valorFinal.toFixed(2));
}

export {coletaDados,calculaDivida}
