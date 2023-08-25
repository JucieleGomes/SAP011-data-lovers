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


  const diretorSelecionado = 'Hayao Miyazaki';
  it('Deve retornar se o diretor selecionado é o diretor do filme', () => {
    expect(filtroDiretor(filmes, diretorSelecionado)).toEqual([
      filmes[0],
      filmes[1],
      filmes[2]
    ]);
    
  });

  const diretorSelecionado2 = 'Isao Takahata';
  it('Deve retornar se o diretor selecionado é o diretor do filme', () => {
    expect(filtroDiretor(filmes, diretorSelecionado2)).toEqual([filmes[3]]);
  });
});


describe('buscaPorFilme', () => {
  it('is a function', () => {
    expect(typeof buscaPorFilme).toBe('function');
  });

  const filmeBuscado = 'Castle in the Sky';
  it('Deve retornar o filme de acordo com a busca do usuário', () => {
    expect(buscaPorFilme(filmes, filmeBuscado)).toEqual([filmes[2]]);
  });

  const filmeBuscado2 = 'castle in the sky';
  it('Deve retornar o filme de acordo com a busca do usuário', () => {
    expect(buscaPorFilme(filmes, filmeBuscado2)).toEqual([filmes[2]]);
  });

  const filmeBuscado3 = 'CASTLE IN THE SKY';
  it('Deve retornar o filme de acordo com a busca do usuário', () => {
    expect(buscaPorFilme(filmes, filmeBuscado3)).toEqual([filmes[2]]);
  });

  const filmeBuscado4 = 'Castle In The Sky';
  it('Deve retornar o filme de acordo com a busca do usuário', () => {
    expect(buscaPorFilme(filmes, filmeBuscado4)).toEqual([filmes[2]]);
  });

  const filmeBuscado5 = 'Bananada';
  it('Deve retornar o filme de acordo com a busca do usuário', () => {
    expect(buscaPorFilme(filmes, filmeBuscado5)).toEqual([]);
  });


});

describe('calculoAgregado', () => {
  it('is a function', () => {
    expect(typeof calculoAgregado).toBe('function');
  });
});

const filmesDiretores = ['Spirited Away', 'My Neighbor Totoro', 'Castle in the Sky','The Tale of the Princess Kaguya']
const diretor1 = ['Spirited Away', 'My Neighbor Totoro', 'Castle in the Sky'];
const diretor2 = ['The Tale of the Princess Kaguya'];
const diretor3 = [];
const diretor4 = ['The Tale of the Princess Kaguya','Spirited Away']


it('Deve retornar a porcentagem de filmes do diretor', () => {
  expect(calculoAgregado(filmesDiretores, diretor1)).toBe(75);
});

it('Deve retornar a porcentagem de filmes do diretor', () => {
  expect(calculoAgregado(filmesDiretores, diretor2)).toBe(25)
});

it('Deve retornar a porcentagem de filmes do diretor', () => {
  expect(calculoAgregado(filmesDiretores, diretor3)).toBe(0)
});

it('Deve retornar a porcentagem de filmes do diretor', () => {
  expect(calculoAgregado(filmesDiretores, diretor4)).toBe(50)
});

describe('mostrarPosterOrdenado', () => {
  it('is a function', () => {
    expect(typeof mostrarPosterOrdenado).toBe('function');
  });
});