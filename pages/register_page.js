const { I } = inject();

module.exports = {

  // elementos
  campos: {
  },

  botoes: {
  },

  menssagens: {
  },

  // metodos/funçoes ou ações
  esperar_pagina_carregar() {
    I.waitForElement('#customer_firstname', 15)
  },

  select_title(title){
    if(title == 0){
      I.checkOption('#id_gender1')
    } else if(title == 1){
      I.checkOption('#id_gender2')
    }
  },

  preencher_nome(name){
    I.fillField('#customer_firstname', name)
  },

  preencher_sobrenome(sobrenome){
    I.fillField('#customer_lastname', sobrenome)
  },

  preencher_senha(password){
    I.fillField('#passwd', password)
  },

  preencher_aniversario(dia, mes, ano){
    I.selectOption('#days', dia)
    I.selectOption('#months', mes)
    I.selectOption('#years', ano)
  },

}
