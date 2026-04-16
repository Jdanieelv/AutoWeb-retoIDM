Feature: Login

Scenario: Login válido
  Given que abro la aplicación
  When inicio sesión con "standard_user" y "secret_sauce"
  Then debo ver la página de productos

Scenario: Usuario bloqueado
  Given que abro la aplicación
  When inicio sesión con "locked_out_user" y "secret_sauce"
  Then debo ver error de login