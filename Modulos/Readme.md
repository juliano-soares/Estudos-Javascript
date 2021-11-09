# Modulos

* O que são:
Arquivos javascript que tem a capacidade de exportar e importar informações de outros arquivos do mesmo tipo.

* Vantagens
organização do código
caompartilhamento de variaveis ...
explicita as dependencias dos arquivos

* Exportar
export function mostraIdade() {}

export {
    num1,
    num2
}

defoult export nome;

* Importar
  import {} from ...
  import nome from ...
  import {arq as apelido} from ...
  import * as Infos from ... 

* Vincular ao HTML
  <script type="module" src="...">

### Certifique seu conhecimento
* 01 - Dadas as afirmações abaixo :
        I. Módulos estão sempre em “strict mode”
        II. Módulos possuem restrições em relação a arquivos .js comuns
        III. Módulos não podem ser utilizados em estruturas HTML
    São verdadeiras 
  - I e II
  
* 02 - Dado o código abaixo:
    function printFullname(firstName, lastName) {
      return `${firstName} ${lastName}`;
    }
    export default printFullname;
    É correto afirmar que
    - Utiliza um default export

* 03 - Dadas as afirmações abaixo
  I. Módulos podem ser utilizados com as extensões .js
  e .mjs
  II. Utilizando módulos, é possível entender as
  dependências de cada arquivo de maneira clara
  III. Módulos podem exportar apenas um valor default
  por arquivo
  São verdadeiras
    - Todas as afirmações

* 04 - Selecione a sintaxe correta para importar todo o conteúdo
de um arquivo
    - import * as Apelido from ‘./arquivo.js’
  
* 05 - Sobre módulos, é correto afirmar que
    - Estão sempre em “strict mode”

* 06 - Quais extensões podem ser utilizadas para programar com módulos?
    - .js e .mjs

* 07 - Qual a regra para importar arquivos em um módulo?
    - Utilizar sempre ‘./’ para iniciar o caminho do arquivo, seguido por sua extensão

* 08 - Dado o import abaixo : 
        import * as INFO from ‘./arquivo.js’;
      É correto afirmar que
    - Utiliza um apelido

* 09 - Selecione a alternativa que representa corretamente a
importação de um módulo numa página HTML
    - <script type="module" src="main.mjs"></script>

* 10 - O que são módulos?
    - Arquivos Javascript que podem compartilhar
informações com outros arquivos