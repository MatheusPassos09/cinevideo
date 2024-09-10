function pesquisar() {
   // Obtém a seção onde os resultados serão exibidos
   let section = document.getElementById("resultados-pesquisa");

   let campoPesquisa = document.getElementById("campo-pesquisa").value

   // se campoPesquisa for uma string sem nada
   if (!campoPesquisa) {
      section.innerHTML = "<p>Nada encontrado</p>"
      return
   }

   campoPesquisa = campoPesquisa.toLowerCase()


   // Inicializa a string que armazenará os resultados da pesquisa
   let resultados = "";
   let titulo = "";
   let sinopse = "";
   let tags = "";
 
   // Itera sobre cada dado na lista de dados
   for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        sinopse = dado.sinopse.toLowerCase()
        tags = dado.tags.toLowerCase()
     // se titulo includes campoPesquisa
         if (titulo.includes(campoPesquisa) || sinopse.
            includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento 
         resultados += `
         <div class="item-resultado">
            <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
             <p class="descricao-meta">${dado.sinopse}</p>
             <a target="_blank">${dado.genero}</a>
         </div>
    `;   
   }
      
 }

   if (!resultados) {
      resultados = "<p>Nada encontrado</p>"
   }
 
   // Atribui o HTML gerado à seção de resultados
   section.innerHTML = resultados;
 }
