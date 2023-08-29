import { filtroDiretor, buscaPorFilme, calculoAgregado, mostrarPosterOrdenado } from '../src/data.js' ; 

const filmes = [
  {
    title: "Spirited Away",
    director: "Hayao Miyazaki",
    release_date: 2001
  },
  {
    title: "My Neighbor Totoro",
    director: "Hayao Miyazaki",
    release_date: 1988
  },
  {
    title: "Castle in the Sky",
    director: "Hayao Miyazaki",
    release_date: 1986
  },
  {
    title: "The Tale of the Princess Kaguya",
    director: "Isao Takahata",
    release_date: 2013
  }
];

describe('filtroDiretor', () => {
  it('is a function', () => {
    expect(typeof filtroDiretor).toBe('function');
  });


  it('Deve retornar se o diretor selecionado é o diretor do filme', () => {
    const diretorSelecionado = 'Hayao Miyazaki';
    expect(filtroDiretor(filmes, diretorSelecionado)).toEqual([filmes[0], filmes[1], filmes[2]]);
  });

  it('Deve retornar se o diretor selecionado é o diretor do filme', () => {
    const diretorSelecionado = 'Isao Takahata';
    expect(filtroDiretor(filmes, diretorSelecionado)).toEqual([filmes[3]]);
  });
});

describe('buscaPorFilme', () => {
  it('is a function', () => {
    expect(typeof buscaPorFilme).toBe('function');
  });


  it('Deve retornar o filme de acordo com a busca do usuário', () => {
    const filmeBuscado = 'Castle in the Sky';
    expect(buscaPorFilme(filmes, filmeBuscado)).toEqual([filmes[2]]);
  });

  it('Deve retornar o filme de acordo com a busca do usuário', () => {
    const filmeBuscado = 'castle in the sky';
    expect(buscaPorFilme(filmes, filmeBuscado)).toEqual([filmes[2]]);
  });

  it('Deve retornar o filme de acordo com a busca do usuário', () => {
    const filmeBuscado = 'CASTLE IN THE SKY';
    expect(buscaPorFilme(filmes, filmeBuscado)).toEqual([filmes[2]]);
  });

  it('Deve retornar o filme de acordo com a busca do usuário', () => {
    const filmeBuscado = 'Castle In The Sky';
    expect(buscaPorFilme(filmes, filmeBuscado)).toEqual([filmes[2]]);
  });

  it('Deve retornar o filme de acordo com a busca do usuário', () => {
    const filmeBuscado = 'Bananada';
    expect(buscaPorFilme(filmes, filmeBuscado)).toEqual([]);
  });

  it('Deve retornar o filme de acordo com a busca do usuário', () => {
    const filmeBuscado = '';
    expect(buscaPorFilme(filmes, filmeBuscado)).toEqual([]);
  });
});

describe('calculoAgregado', () => {
  it('is a function', () => {
    expect(typeof calculoAgregado).toBe('function');
  });
});

const TotalDeFilmes = ['Spirited Away', 'My Neighbor Totoro', 'Castle in the Sky','The Tale of the Princess Kaguya'];
const diretorSelecionado1 = ['Spirited Away', 'My Neighbor Totoro', 'Castle in the Sky'];
const diretorSelecionado2 = ['The Tale of the Princess Kaguya'];
const diretorSelecionado3 = [];
const diretorSelecionado4 = ['The Tale of the Princess Kaguya','Spirited Away']; 

it('Deve retornar a porcentagem de filmes do diretor', () => {
  expect(calculoAgregado(TotalDeFilmes, diretorSelecionado1)).toBe(75);
});

it('Deve retornar a porcentagem de filmes do diretor', () => {
  expect(calculoAgregado(TotalDeFilmes, diretorSelecionado2)).toBe(25)
});

it('Deve retornar a porcentagem de filmes do diretor', () => {
  expect(calculoAgregado(TotalDeFilmes, diretorSelecionado3)).toBe(0)
});

it('Deve retornar a porcentagem de filmes do diretor', () => {
  expect(calculoAgregado(TotalDeFilmes, diretorSelecionado4)).toBe(50)
});

describe('mostrarPosterOrdenado', () => {
  it('is a function', () => {
    expect(typeof mostrarPosterOrdenado).toBe('function');
  });
});

const ordenacaoCrescente = "1984-2023";
const ordenacaoDecrescente = "2023-1984";
const ordemAlfabeticaCrescente = "A-Z";
const ordemAlfabéticaDecrescente= "Z-A";

it('Deve retornar a ordenação selecionada pelo usuário', () => {
  const ordenacaoEsperada = [filmes[2],filmes[1],filmes[0],filmes[3]];
  expect(mostrarPosterOrdenado( ordenacaoCrescente, filmes)).toEqual(ordenacaoEsperada);
});

it('Deve retornar a ordenação selecionada pelo usuário', () => {
  const ordenacaoEsperada = [filmes[3],filmes[0],filmes[1],filmes[2]];
  expect(mostrarPosterOrdenado(ordenacaoDecrescente, filmes)).toEqual(ordenacaoEsperada);
});

it('Deve retornar a ordenação selecionada pelo usuário', () => {
  const ordenacaoEsperada = [filmes[2],filmes[1],filmes[0],filmes[3]];
  expect(mostrarPosterOrdenado(ordemAlfabeticaCrescente, filmes)).toEqual(ordenacaoEsperada);
});

it('Deve retornar a ordenação selecionada pelo usuário', () => {
  const ordenacaoEsperada = [filmes[3],filmes[0],filmes[1],filmes[2]];
  expect(mostrarPosterOrdenado(ordemAlfabéticaDecrescente, filmes)).toEqual(ordenacaoEsperada);
});

