# Data Lovers

## Índice
* [1. Resumo do projeto](#1-resumo-do-projeto)
* [2. História do usuário](#2-história-do-usuário)
* [3. Protótipo](#3-protótipo)
* [4. Teste de usabilidade](#4-teste-de-usabilidade)
* [5. Funcionalidades](#5-funcionalidades)
* [6. Link do projeto](#6-link-do-projeto)
* [7. Testes unitários](#7-testes-unitários)
* [8. Ferramentas e tecnologias utilizadas](#8-ferramentas-e-tecnologias-utilizadas)
* [9. Checklist critérios minímos de aceitação](#9-checklist-critérios-mínimos-de-aceitação)


***

## 1. Resumo do projeto

O projeto Data Lovers é p segundo projeto do Bootcamp Laboratória da turma SAP011, este projeto tem como principal objetivo a aprendizagem
de manipulação de dados. Dados estes que foram previamente disponibilizado no repositório da Laboratória. Para o projeto foi escolhida a temática 
Studio Ghibli que é um famoso estúdio de animes japonês.
Para elaboração do projeto foram utilizadas algumas ferramentas de apoio, entre ela o Trello para organização de sprints, Figma para elaboração
dos protótipos, marvel APP para dar ação ao projeto e realizar o teste de usabilidade, e para elaboração da parte técnica foram utilizados 
HTML, CSS, Jest, Vanilla JavaScript, Git e GitHub.
Para auxiliar no desenvolvimento do projeto foi criada uma história do usuário e também um protótipo de alta fidelidade navegável que foi utilizado 
na realização do teste usabilidade, onde após o feedback foram feitas alterações para melhor atender as necessidades dos usários.


## 2. História do usuário

Para a história do usuário foi pensado cm relação ao tema como essa aplicação atender as demandas e necessidades do público fãs e 
consumidores do conteúdo do Studio Ghibli. 

História do usuário: Para fãs do Studio Ghibli onde possam acessar a galeria de filmes do studio, ver informações relevantes sobre os filmes,
realizar filtros e buscas na página de acordo com seu interesse.

## 3. Protótipo
Após finalizar a história do usuário foi feita a etapa de prototipação, onde foram criados protótipos de alta fidelidade tanto para
versão desktop quanto mobile, pensando em um design responsivo. Na criação do protótipo foi escolhida a paleta de cores, imagens e logo
que seriam utilizados, trazendo para o projeto uma identidade visual que remetesse ao Studio Ghibli e seu universo cinematográfico. 
também foi escolhido como os posters dos filmes apareceriam na tela, como seria a navegação entre telas, sempre pensando em algo intuitivo.
Ao fim o protótipo de alta fidelidade tornou-se navegável para ser utilizado nos testes de usabilidade.


### Mobile:
![mobile1](https://github.com/JucieleGomes/SAP011-data-lovers/assets/127780316/3e7c9ac9-30e6-46b9-992d-1739a0744068)

![mobile2](https://github.com/JucieleGomes/SAP011-data-lovers/assets/127780316/01f5d376-cbf3-487f-a30b-49107ec22a80)


### Desktop:
![Prototipo1REDME](https://github.com/JucieleGomes/SAP011-data-lovers/assets/127780316/fc27badf-0442-47c1-9b33-1f188447f493)




## 4. Teste de usabilidade
Após a criação do protótipo de alta fidelidade foi realizado um teste de usabilidade com 4 usuárias, com o objetivo de
verificar se o protótipo seria de navegação intuitiva e atenderia as fincionalidades esperadas.
Durante o teste, enviamos o link de navegação e foi proposto as usuárias que navegassem pelas páginas,
acessassem a página de filmografia, informações dos cards e tentassem utilizar os recursos de filtros e ordenação.
Ao fim do teste foi solicitado feedBack para entender se a página tinha uma navegação fluida e intuitiva, se algo não
fazia sentido para o tema, ou sesentiram falta de alguma ferramenta de navegação que agregaria valor ao projeto.
A navegação ocorreu de forma tranquila, os feedBacks foram que a página está intuitiva, de fácil navegação, mas recebemos 
alguns feedbacks e após levantar todas as sugestões foram feitas alterações no protótipo para melhorar ainda mais a experiência do usuário. 
As alterações sugeridas foram as seguintes:

 1. Cor de fundo da tela inicial;
 2. Aumentar Tamanho e trocar tipo da Fonte;
 3. Aumentar o tamanho da barra de filtro e ordenação;
 4. Melhorar a hierarquia visual;
 5. Tornar a imagem do filme clicável quando estiver na página do diretor;
 6. Adicionar campo de busca.

## Protótipo alterada após teste de usabilidade: 
![Protótipo2 REDME](https://github.com/JucieleGomes/SAP011-data-lovers/assets/127780316/9e127a81-5d14-4e6b-b89a-c5e2bcd089c0)


## 5. Funcionalidades

Após o teste usabilidade, foi obervado que a navegação estava boa e intuitiva, os filtros e ordenação que haviam sido
idealiado suprima a necessidades dos usuários, ficou definido que a implementacia inciaria pelos critérios mínimos de 
aceitação,então teria apenas 1 filtro que seria por diretor e nele teria o calculo agregado, informando quantos filmes
do acervo do studio são do diretor selecionado e uma ordenação por ordem de lançamentos dos filmes, do mais antigo para o
mais recente e do mais recente para o mais antigo, caso esses objetivos fosse alcançados seria adicionada mais uma opção de 
ordenação alfabética de A-Z e de Z-A, e uma barra de pesquisa por nome de filme.
Por fim o projeto foi concluido as seguintes seções:

1. Página incial incial onde o usuário pode acessar a página de filmes, informações sobre o Studio Ghibli e
também ser redirecionado para a página do Studio Ghibli no Brasil.

2. Página de filmografia temos a seção de busca onde o usário pode inserir o nome do filme que deseja buscar e se for encontrado 
o filme será mostrado na tela, um botão de seleção de ordenação, onde os filmes podem ser ordenados por ordem alfabética e
por ano de lançamento, e também um botão de seleção de diretores, onde o usuário pode escolher ver apenas os filmes de um diretor 
especifico, e quando clica no poster do filme é mostrado um modal na tela onde contém informações de titulo, sinopse, ano de lançamento,
diretor e nota. Ainda nesta página o usuário consegue retornar para a tela incial ou ir para a tela de sobre o Studio Ghibli.
3. Sobre o Studio Ghibli onfr contém uma breve resumo sobre a história do Studio Ghibli e nesta tela o usuário também pode navegar novamente para a página de filmes ou página incial.

## 6. Link do projeto 

## 7. Testes unitários
Foram realizados testes unitários e todas as funções do arquivo data.js são cobertas por testes.

## 8. Ferramentas e tecnologias utilizadas
* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [GitHub Pages](https://pages.github.com/)
* [Node.js](https://nodejs.org/en)
* [Jest](https://jestjs.io/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Figma](https://www.figma.com/login)
* [Trello](https://trello.com/pt-BR/login)

## 9. Checklist critérios minímos de aceitação

- [x]  Usar VanillaJS.
- [x]  Passa pelo linter (`npm run pretest`)
- [x]  Passa pelos testes (`npm test`)
- [x]  Testes unitários cobrem um mínimo de 70% de statements, functions, lines e
  branches.
- [x]  Inclui uma _definição de produto_ clara e informativa no `README.md`.
- [x]  Inclui histórias de usuário no `README.md`.
- [x]  Inclui rascunho da solução (protótipo de baixa fidelidade) no `README.md`.
- [x]  Inclui uma lista de problemas detectados nos testes de usabilidade no
  `README.md`.
- [x]  UI: Mostra lista/tabela/etc com dados e/ou indicadores.
- [x]  UI: Permite ordenar dados por um ou mais campos (asc e desc).
- [x]  UI: Permite filtrar dados com base em uma condição.
- [x]  UI: É _responsivo_.
