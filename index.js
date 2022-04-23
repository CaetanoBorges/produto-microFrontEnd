const debliw_dados_produto = {
  nome: "Aplicativo fácil",
  descricao: "Aplicativo fácil para ideias criativas",
  preco: "70 000 AOA - 90 000 AOA",
  execucao: "15 dias",
  img: "https://fotografiaprofissional.org/wp-content/uploads/2019/06/fotografia-de-produtos.jpg"
}

function render_tabela_produto(objDados,_){
  var tabela_produto = `<div class="debliw-tabela-produto">
  
  <table>
   <tr>
      <td> <img src='${objDados.img}' class='debliw-tabela-img'> </td>
    </tr>
    <tr>
      <td><b>Nome: </b> ${objDados.nome}</td>
    </tr>
    <tr>
      <td><b>Descrição: </b>${objDados.descricao}</td>
    </tr>
    <tr>
      <td><b>Preço: </b>${objDados.nome}</td>
    </tr>
    <tr>
      <td><b>Execução: </b>${objDados.execucao}</td>
    </tr>
  </table>`;
  
  _(".debliw-render-tabela-produto").html(tabela_produto);
}

render_tabela_produto(debliw_dados_produto, $);

function debliw_preciso(){
  $('.debliw-quero-form').toggle('slow');
}

$('.debliw-quero-action').click(function(){
  
  
  var nome = $('#debliw-form-nome').val();
  var telefone = $('#debliw-form-telefone').val();
  var email = $('#debliw-form-email').val();
  
  const cliente = {
    nome: nome,
    telefone: telefone,
    email: email
  }
  
  console.log({cliente:cliente, pedido: debliw_dados_produto});
  
  
});
