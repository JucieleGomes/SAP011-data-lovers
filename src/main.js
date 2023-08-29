import { mostrarPosterOrdenado, filtroDiretor, calculoAgregado, buscaPorFilme } from './data.js';
import studio from './data/ghibli/ghibli.js';

const poster = document.querySelector(".filmesContainer");
const modal = document.querySelector("dialog");
const botaoFechar = document.getElementById("fechar");
const tituloFilme = document.getElementById('tituloFilme');
const sinopse = document.getElementById('sinopse');
const dataDeLancamento = document.getElementById('dataDeLancamento');
const diretor = document.getElementById('diretor');
const nota = document.getElementById("nota");

// function mostraPoster(films) {
//   let posterFilme = document.createElement("img");
//   posterFilme.src = films.poster;
//   posterFilme.title = films.title;
//   posterFilme.classList.add('filme-poster');
//   poster.appendChild(posterFilme);

function mostraPoster(films) {
  const posterFilme = document.createElement("figure"); 
  posterFilme.classList.add('filme-container'); 

  const posterImg = document.createElement("img");
  posterImg.src = films.poster;
  posterImg.classList.add('filme-poster');
  posterFilme.appendChild(posterImg);

  const titulo = document.createElement("figcaption");
  titulo.textContent = films.title;
  titulo.classList.add('filme-titulo'); 
  posterFilme.appendChild(titulo);

  poster.appendChild(posterFilme);

  posterFilme.addEventListener("click", function() {
    mostrarModal(films)
    modal.showModal()
  })

  botaoFechar.onclick = function() {
    modal.close();
  }
  return posterFilme;
}

function mostrarModal(films) {
  tituloFilme.innerHTML = films.title;
  sinopse.innerHTML = `synopsis: ${films.description}`;
  dataDeLancamento.innerHTML = `Release date: ${films.release_date}`;
  diretor.innerHTML = `Directed by: ${films.director}`;
  nota.innerHTML = `Rating: ${films.rt_score}`;
}

for (let i = 0; i < studio.films.length; i++) {
  mostraPoster(studio.films[i]);
}

function limparTela(films) {
  poster.innerHTML = "";
  for (let i = 0; i < films.length; i++) {
    const film = films[i];
    const indice = studio.films.indexOf(film);
    mostraPoster(film, indice);
  }
}

const ordenacaoSelecionada = document.getElementById("ordenacaoSelecionada");
const listaDeFilmes = studio.films;

ordenacaoSelecionada.addEventListener("change", function() {
  const ordenacaoAlterada = mostrarPosterOrdenado(ordenacaoSelecionada.value, listaDeFilmes);
  limparTela(ordenacaoAlterada);
});

const resultadoCalculo = document.getElementById("resultadoCalculo");
const filtroSelecionado = document.getElementById("filtro");
const filmografia = document.getElementById("filmografia");

filtroSelecionado.addEventListener("change", function() {
  const filtroAlterado = filtroDiretor(listaDeFilmes, filtroSelecionado.value);
  const resultado = calculoAgregado(listaDeFilmes, filtroAlterado);
  const nomeDiretor = filtroSelecionado.value;
  resultadoCalculo.textContent = `${resultado} % dos filmes do Studio Ghibli foram dirigidos por`;
  filmografia.textContent = `${nomeDiretor}`;
  limparTela(filtroAlterado);
});

const texto = document.getElementById("textoBusca");
const botaoBusca = document.getElementById ("botaoBusca");
const mensagem = document.getElementById("mensagemFilme")

botaoBusca.addEventListener("click", function(){
  mensagem.innerHTML = "Filme não encontrado!";
  const filmesEncontrados = buscaPorFilme (listaDeFilmes, texto.value);
  if(filmesEncontrados.length>0){ 
    limparTela(filmesEncontrados);
    mensagem.textContent = "";
  }else{
    mensagem.textContent = "Filme não encontrado!"
    limparTela([]);
  }

});


  
