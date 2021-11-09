# Objetos

paradigmas

Imperativo
    Orientção objetos
Declarativo

> Pilares
- Herança
    - O objeto filho erda caracteristicas dos pais
- Polimorfismo
  - objetos podem erdar a mesma classe do pai
- Encapsulamento
  - cada classe tem propriedades e métodos indepedentes do restante do código
- Abstração
  - Isolar um aspecto determinado de um estado de coisas relativamnete complexo ...

## OOJS
herdam propriedades e métodos de um prototype
Object.prototype

class Meal {
    constructor() {}
    eat() {}
}

construtor = controi a classse
getter e setter = ter acesso a certos parametros
super = mandar os parametros para a classe pai
metodo = sobrescrever metodos e criar 

### Certifique seu conhecimento
* 01 - Sobre protótipos, é correto afirmar que:
  - São responsáveis pelo conceito de Herança em Javascript
  
* 02 - Caso um parâmetro tenha getters e setters,  por convenção, como ele deve ser nomeado?
    - Com o sinal _ como prefiro (ex: _saldo)

* 03 - Qual a melhor definição de Abstração?
    - Diminuir complexidade

* 04 - Sobre o método super() é correto afirmar que:
    - Ele passa os argumentos enviados para a classe ascendente
  
* 05 - Dadas as afirmações abaixo
    I.  A sintaxe de Classes em Javascript é apenas um “açúcar sintético”.
    II.  Javascript utiliza Herança Prototipada
    III. Funções dentro de um objeto são chamadas de “métodos”

    São verdadeiras
    - Todas as alternativas

* 06 - Dadas as afirmações abaixo
I. O método super() pode ser utilizado em classes que herdam propriedades de outras
II. Getters e setters são utilizados como modificadores de um valor
III. Getters e setters ferem o conceito de encapsulamento
São verdadeiras
    - I e II

* 07 - Qual a melhor definição de Encapsulamento?
    - Propriedades e métodos de uma classe dizem respeito apenas a ela

* 08 - Quais são os quatro pilares da Orientação a Objetos?
    - Abstração, Herança, Encapsulamento e Polimorfismo

* 09 - Qual a melhor definição de Polimorfismo?
    - O conceito de que classes mais complexas herdem métodos de classes mais abstratas e os executem à sua maneira

* 10 - Qual a melhor definição de Herança?
    - Classes descendentes herdam características de suas classes ascendentes