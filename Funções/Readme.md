# Tipos de Funções

function nome(parametros) {}

> função anônima 
const soma = function (a,b) {
    return a + b;
}

> função autoinvocável IIFE(Immediately Invoked Function Expression)
(
    function() {
        let name = "JULIANO";
        return name;
    }
)();

> Callbacks
Uma função passada como argumento para outra

### Certifique seu conhecimento
* 01 - O que são callbacks?
  - Uma função passada como argumento para outra
  
* Dadas as afirmações abaixo
    I. Funções sempre precisam de parâmetros;
    II. Funções são determinadas pela palavra reservada function;
    III. Funções podem retornar ou não algum valor;
    IV. O escopo de uma variável criada dentro de uma função é a própria função.
São verdadeiras:
    - II e III

* 03 - Sobre o método bind, é correto afirmar que
    - Cria um clone da função na qual for invocado, designando a this o valor do objeto passado como parametro

* 04 - Sobre funções autoinvocáveis, assinale a alternativa falsa:
    - Não podem receber parâmetros
  
* 05 - Dado o código
    function minhaFuncao(num = 0) {
        return num;
    }
    É correto afirmar que
    - A função possui o valor padrão

* 06 - Dado o código
        for(let i = 0; i < array.length; i++) {
            console.log(array[i])
        }
    Qual a afirmativa correta?

    - A partir do índice 0, enquanto o índice for menor que o tamanho do array, o código irá logar o elemento que estiver em cada índice do array

* 07 - Qual o valor de this?
    - Depende do contexto no qual a palavra é invocada.

* 08 - Sobre funções anônimas, é correto afirmar que
    - São funções sem um nome específico e que podem ter seu valor atribuído a uma variável

* 09 - Sobre o método call, é correto afirmar que
    - Transforma o valor de this no do objeto enviado como primeiro parâmetro e aceita outros parâmetros separados por vírgulas. É reutilizável em outros objetos.

* 10 - Sobre o método apply, é correto afirmar que
    - Transforma o valor de this no do objeto enviado como primeiro parâmetro e aceita outros parâmetros através de um array. É reutilizável em outros objetos.