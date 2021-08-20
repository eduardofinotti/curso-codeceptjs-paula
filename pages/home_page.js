const { I, login_page } = inject();

module.exports = {

  // elementos
  campos: {
    campo_busca: '#search_query_top',
  },

  botoes: {
    access_login: '.login'
  },

  menssagens: {

  },

  // metodos/funçoes ou ações
  acessar_aplicacao() {
    I.amOnPage('/');
    I.waitForElement(this.campos.campo_busca, 15);
  },

  acessar_login() {
    I.click(this.botoes.access_login)
    login_page.esperar_pagina_carregar()
  },

}
