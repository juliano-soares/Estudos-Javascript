# Manipulando a D.O.M com javascript

Document Object Model

- Métodos:
.getElementById
.getElementsByTagName
.getElementsByClassName
.querySelectorAll

.createElement
.removeChild
.appendChild
.replaceChild

.classList.add
.classList.remove
.classList.toggle

.addEventListener

### Certifique seu conhecimento
* 01 - Sobre eventos do Javascript, é correto afirmar que:
  - Podem ser programados via Javascript adicionando “listeners” aos elementos do DOM ou adicionados diretamente em tags no HTML
  
* 02 - Como remover uma classe a um elemento HTML via Javascript?
    - element.classList.remove(‘classe’)

* 03 - Como adicionar uma classe a um elemento HTML via Javascript?
    - element.classList.add(‘classe’)

* 04 - Dado o código abaixo:
        <html>
            <head>
                <title>Documento</title>
            </head>
            <body>
                <h1>Título principal</h1>

                <section id="sobre" class="full-screen">
                <p>Texto de apresentação</p>
                </section>
            </body>
        </html>
    Como poderia ser selecionado o elemento <h1>Título principal</h1>?
    - document.getElementsByTagName(‘h1’)[0]
  
* 05 - São tipos de eventos no Javascript:
    - click, change, load e mouseover 

* 06 - Após selecionar um elemento (que aqui vamos chamar de ‘element’), como podemos acessar suas classes CSS pelo Javascript?
    - element.classList

* 07 - Sobre o Document Object Model, é correto afirmar que:
    - É possível acessar os elementos HTML, seus elementos ascendentes e descendentes

* 08 - Dado o código abaixo:
        <html>
            <head>
                <title>Documento</title>
            </head>
            <body>
                <h1>Título principal</h1>

                <section id="sobre" class="full-screen">
                <p>Texto de apresentação</p>
                </section>
            </body>
        </html>

    Como poderia ser selecionado o elemento <section id="sobre" class="full-screen">?
    - document.querySelectorAll(‘#sobre .full-screen’)

* 09 - Dado o código abaixo:

<html>
  <head>
    <title>Documento</title>
  </head>
  <body>
    <h1>Título principal</h1>

    <section id="sobre" class="full-screen">
      <p class=”paragrafo”>Texto de apresentação</p>
    </section>
  </body>
</html>

Como poderia ser selecionado o elemento <p class=”paragrafo”>Texto de apresentação</p>?
    - document.getElementsByClassName(‘paragrafo’)[0]

* 10 - Qual a diferença entre BOM e DOM?
    - O DOM é a árvore de dependências do HTML, enquanto a o BOM é a árvore de dependências do Browser