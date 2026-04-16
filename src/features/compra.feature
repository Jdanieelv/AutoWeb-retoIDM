Feature: Compra

Scenario: Flujo de compra exitoso
  Given que abro la aplicación
  And inicio sesión con "standard_user" y "secret_sauce"
  When agrego un producto al carrito
  And voy al carrito
  Then veo productos en el carrito
  When realizo el checkout
  Then veo confirmación de compra