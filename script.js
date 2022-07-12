// FlexBox

// *Conceito dos eixos

// Main axis - Flex-direction: row = Nosso eixo principal vai ser a linha horizontal.
// Main axis - Flex-direction: column = Nosso eixo principal vai ser a linha vertical.

// Cross Axis - vai ser o eixo transversal que vai ser o inverso do row que vai se tornar = column.
// Cross Axis - vai ser o eixo transversal que vai ser o inverso do colmn que vai se tornar = row.




//*****//  ************************* O MAIS IMPORTANTE DE TUDO!!!!



// Sempre colocar o = Display: flex; no container.Obs: vai ficar automaticamente em row!
// depois vc vai posicionando.
// Se for colocar como coluna vc coloca "Flex-direction: column;"

//  ************************* O MAIS IMPORTANTE DE TUDO!!!!




// * Main start e Main End = eles exitem para definir o primeiro item da nossa teg pai e o ultimo item; 

// Se definir como Main start = ele vai começar no inicio do container.
// Se definir como Main end = ele vai começar no final do container.

// * Mais Size e Cross Size.

// Mais size = vai ser a largura do container.
// Cross Size = vai ser a altura do container.


// * Flex - direction

// .container {
// flex-direction: row | row-reverse = row quer dizer que vai iniciar da esquerda para direita,
// row-reverse quer dizer que vai começar da direita para esquerda.
// }
// flex-direction: column | column-reverse = column quer dizer que vai iniciar de cima para baixo,
// row-reverse quer dizer que vai começar dae baixo para cima.
//}

// * Flex - wrap

// Quebra de linha do item

// * Flex - flow

// fle-flow: row wrap = Ela é uma propriedade abreviada, junta por exemplo o "row + wrap" englob mais de uma propriedade.

// * Justify - content

// justify-content: flex-start = Não muda nada, continua padrão.
// justify-content: flex-end = Os items vão ficar alinhadpos na direita da tela.
// justify-content: center = Os itens vão ficar centralizados.
// justify-content: space-between = Pega todo espaço que tem no container e espalha entre os itens.
// justify-content: space-around = Pega todo o espaço que tem no container e espalha ao redor do elementos.
// justify-content: space-evenly = Pega o espaço que tem no conatiner e espalha e centraliza os elementos.

// * align-items

// align-items: stretch = Estica os elementos.
// align-items: flex-start = Coloca os itens começando em cima.
// align-itens: flex-end = Coloca os itens começando em baixo.
// align-items: center = Coloca os intens iniciando no centro.
// align-items: baseline = Faz o alinhamento e acordo com o texto, primeiro maior e os demais menores.


// * align-content = Vai alinhar o grupo dos componentes dentro do componentes pai.

// // align-content: flex-start = alinha o grupo em cima.
// // align-content: flex-end = alinha o grupo em baixo.
// // align-content: center = alinha o grupo no centro.
// // align-content: space-between = Vai colocar o espaço que esta sobrando no container entre os filhos.
// // align-content: space-roud = Vai colocar o espaço que esta sobrando no container entre os filhos uma em baixo outra no meio e outra em cima.
// // align-content: space-evenly = Vai colocar o espaço que esta sobrando no container entre os filhos uma em baixo outra no meio e outra em cima. So que um pouco maior.
// // align-content: stretch = Vai pegar todo os espaçamento do container e esticar todos os itens.


// * Flex - gap
// * Gap/Row-gap/Colums-gap

// Gap = Da p espaçamento entre os filhos, faz o espaçamento na linha e na coluna
// gap: 10px; espaçamento de 10px.
// row-gap - da o espaçamento na linha.
//column-gap - da o espaçamento na coluna. 
// gap: 20px; = vai colocar espaçamento de 10px entre as linhas e as colunas.

// * Flex - grow 

// flex-grow: 4; = Ele vai aumentar o elemento de acordo com o aumento da numeração.

// * Flex - shrink

// flex-shink: 2; = Ele vai diminuir o elemento de acordo com o aumento da numeração.

// * Flex-basis

// flex-basis: 200px; = Dar um tamanho base ao item, seja ele coluna ou linha.

// * Flex

// flex: 2 3 200px  ; = Segue nessa ordem ['flex-grow', 'flex-shrin', 'flex-basis', 'flex-basis']. Engloba outras propriedades,

// * align - self

// align-self: auto | flex-start | flex-end | center | baseline | stretch; = 