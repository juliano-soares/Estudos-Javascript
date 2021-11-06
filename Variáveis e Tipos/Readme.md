# Atribuindo Valores
> Atribuição de valores

| Modelo | Exemplo |
| --- | --- |
| Original Variable as String | some awesome var |
| Camel Case                  | someAwesomeVar   |  
| Snake Case                  | some_awesome_var |
| Kebab Case                  | some-awesome-var |
| Pascal Case                 | SineAwesomeVar   |
| Upper Case Snake Case       | SOME_AWESOME_VAR |


> Var e Let
- escopos diferentes
- hoisting
- redeclaração
- reatribuição
- camelCase

> Constantes
- declarada em SNAKE_UPPER_CASE
- escopo de bloco
- não faz hoistig

|  | var | const | let | 
| --- | --- | --- | --- |
| escopo | global ou local | bloco | bloco |
| redeclarar | sim | não | não |
| reatribuir | sim | não | sim |
| hoisting | sim | não | não |

# Tipos

Primitivos
    - numbers
    - strings
    - boolean
    - null
    - undefined

Composite/Non-Primitive
    - objects 
    - arrays


### Certifique seu conhecimento
* 01 - “Hoisting” é uma funcionalidade que se aplica a qual tipo de atribuidor de valores?
  - var
  - 
* 02 - Dadas as variáveis abaixo
    let a = 0;
    let b = null;
    let c;
É correto afirmar que:
    - A representa um valor vazio (empty), b representa um valor nulo (null) e c representa um valor indefinido (undefined)

* 03 - A propriedade length está presente nas seguintes estruturas de dados:
    - Strings e Arrays

* 04 - O Javascript é uma linguagem de tipagem dinâmica. Isso significa que:
    - Você não precisa especificar o tipo de uma variável ao declará-la
  
* 05 - Sobre as estruturas de dados em Javascript, pode-se afirmar que:
    - São compostas por tipos primitivos e compostos

* 06 - Por convenção, qual o padrão utilizado para a declaração de constantes?
    - Upper Snake Case

* 07 - Em relação ao escopo, qual a diferença entre let, const e var?
    - var tem escopo global ou local, enquanto let e const tem escopo de bloco

* 08 - Dado o código
    const meuObjeto = {
    chave: valor;
    }

    console.log(meuObjeto.chave); 
    console.log(meuObjeto[chave]);

    Qual será o resultado?
    - As duas chamadas retornarão a mesma coisa ("Valor")

* 09 - Dadas as afirmativas abaixo, assinale a alternativa correta:
    I. Var e Let podem ser reatribuídas, mas não redeclaradas;
    II. Var e let podem ser reatribuídas, mas apenas var pode ser redeclarada;
    III. Const, let e var fazem hoisting
    IV. Apenas const faz hoisting
    - Apenas a afirmação II está correta

* 10 - Sobre objetos, é correto afirmar que:
    - São estruturas de dados do modelo "chave e valor"