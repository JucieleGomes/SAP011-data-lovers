
// filterData(data, condition)


function mostrarPosterOrdenado(value,listaDeFilmes) {
    const ordenacaoSelecionada = [...listaDeFilmes];
   if (value === "1984-2023") {
     ordenacaoSelecionada.sort((a ,b) => {
     if (a.release_date < b.release_date) {
       return -1;
     } else if (a.release_date > b.release_date) {
       return 1;
     } else {
       return 0;
     }  
   });
   } else { (value === "2023-1984") 
    ordenacaoSelecionada.sort((a ,b) => {
   if (a.release_date > b.release_date) {
     return -1;
     } else if (a.release_date < b.release_date) {
       return 1;
     } else {
       return 0;
     } 
   }); 
   }
   return ordenacaoSelecionada;
 } 

 function filtroDiretor(listaDeFilmes, filtroSelecionado){
  return listaDeFilmes.filter(filme => filtroSelecionado === filme.director);
  }
 
 function calculoAgregado(listaDeFilmes, filtroAlterado) {
  const totalDeFilmes = listaDeFilmes.length; 
  const totalPorDiretor = filtroAlterado.length; 
  const calculo = (totalPorDiretor*100)/totalDeFilmes; 
  return calculo;

  }


  // Função (calculo) { 
// 	quantos filmes tem ao total em numeros --> listaDeFilmes.length 
// 	entrando no filtro do diretor, quantos filmes tem  --> filtroAlterado.length 
// 	pega o numero de filmes do diretor e transforma em porcentagem. 
//  20 filmes - 100% 
// } 



 


 export{mostrarPosterOrdenado, filtroDiretor, calculoAgregado}