Feature('Create User');

var faker = require("faker");

const { home_page, login_page, register_page } = inject();

Scenario('Criar usuario com sucesso', () => {

    // HOME
    home_page.acessar_aplicacao();
    home_page.acessar_login()
    // LOGIN - teste
    login_page.preencher_email_cadastro()
    login_page.entrar_cadastro()
    // REGISTER
    register_page.select_title(0)
    register_page.preencher_nome(faker.name.firstName())
    register_page.preencher_sobrenome(faker.name.lastName())
    register_page.preencher_senha(faker.internet.password(10))
    register_page.preencher_aniversario('1', '2', '1990')

    // Mapear elementos do cadastro

    // Terminar cadastro

}).tag('@registro');
