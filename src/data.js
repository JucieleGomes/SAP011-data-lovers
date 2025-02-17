function mostrarPosterOrdenado(value, listaDeFilmes) {
  const ordenacaoSelecionada = [...listaDeFilmes];

  if (value === "1984-2023") {
    ordenacaoSelecionada.sort((a, b) => {
      if (a.release_date < b.release_date) {
        return -1;
      } else if (a.release_date > b.release_date) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (value === "2023-1984") {
    ordenacaoSelecionada.sort((a, b) => {
      if (a.release_date > b.release_date) {
        return -1;
      } else if (a.release_date < b.release_date) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (value === "A-Z") {
    ordenacaoSelecionada.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (value === "Z-A") {
    ordenacaoSelecionada.sort((a, b) => {
      if (a.title > b.title) {
        return -1;
      } else if (a.title < b.title) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  return ordenacaoSelecionada;
}

function filtroDiretor(listaDeFilmes, filtroSelecionado) {
  return listaDeFilmes.filter(filme => filtroSelecionado === filme.director);
}


function calculoAgregado(listaDeFilmes, filtroAlterado) {
  const totalDeFilmes = listaDeFilmes.length;
  const totalPorDiretor = filtroAlterado.length;
  const calculo = (totalPorDiretor * 100) / totalDeFilmes;
  return calculo;
}

function buscaPorFilme(listaDeFilmes, texto) {
  return listaDeFilmes.filter(filme => filme.title.toLowerCase() === texto.toLowerCase());
}


export { mostrarPosterOrdenado, filtroDiretor, calculoAgregado,buscaPorFilme };

