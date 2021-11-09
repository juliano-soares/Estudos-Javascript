# Debugging e Error Handling

## ECMAScript Error
Erros que ocorrem em tempo de execução

> Composto por:
- mensagem
- nome
- linha
- call stack

## DOMException
Erros relacionados ao Document Object Model(DOM)

Erros referentes a estrutura da arvore do documento

## Tratando os Erros

Throw 
retorna em forma de erro a mensagem

try {

} catch (e) { // possibilidade de personalizar o erro

} finally { // executa de qualquer forma depois da avaliação do try...catch

}

## Objeto Error

new Error(message, fileName, lineNumber)

### Certifique seu conhecimento
* 01 - Selecione a opção que possui o instanciamento de um erro personalizado de forma correta:
  - const MeuErro = new Error()
  
* 02 - Sobre a declaração finally, é correto afirmar que:
    - É executada sempre, independente de erros ocorrerem ou não

* 03 - Qual é a grande vantagem do bloco catch?
    - A possibilidade de manipular o tratamento de um erro com maior flexibilidade

* 04 - Dado o código
        const NovoErro = new Error();
        NovoErro.name = "Novo Erro";
        NovoErro.message = "Este erro nunca ocorreu"
        Qual será o retorno quando ele for lançado?
    - Novo Erro: Este erro nunca ocorreu
  
* 05 - Qual a diferença entre os objetos ECMAScript Error e DOMException?
    - O ECMAScript Error é um tipo de erro em tempo de execução e o DOM Exception é um erro referente ao DOM

* 06 - Dado o código:
function validaArray(arr, tamanho) {
  try {
    if (!arr.length || arr.length !== tamanho) throw new RangeError("O tamanho do array é inválido");

    return arr;
  } catch(e) {
    if (e instanceof RangeError) {
      return console.log(e.message);
    } else {
      return e;
    }
  }
} 
validaArray();
Qual será o retorno?
    - Outro tipo de erro

* 07 - Sobre o bloco catch, é correto afirmar que:
    - É executado apenas quando ocorre um erro e possibilita a manipulação de um objeto Error

* 08 - Qual a composição de um ECMAScript Error?
    - Mensagem, nome, linha e call stack

* 09 - Sobre a declaração try...catch, é correto afirmar que:
    - Dentro do blogo try são executadas instruções e caso ocorra algum erro durante o processo, ele será tratado no bloco catch

* 10 - Qual a diferença entre throw e return?
    - Throw lança um erro, enquanto o return retorna um valor.