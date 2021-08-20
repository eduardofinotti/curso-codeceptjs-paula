const { I, register_page } = inject();
var faker = require("faker");

module.exports = {

  // elementos
  campos: {
    email_create: '#email_create'
  },

  botoes: {
    botao_create: '#SubmitCreate'
  },

  menssagens: {
  },

  // metodos/funçoes ou ações
  preencher_email_cadastro(){
    I.fillField(this.campos.email_create, faker.internet.email())
  },

  esperar_pagina_carregar(){
    I.waitForElement(this.campos.email_create, 15)
  },

  entrar_cadastro(){
    I.click(this.botoes.botao_create)
    register_page.esperar_pagina_carregar()
  },

}
