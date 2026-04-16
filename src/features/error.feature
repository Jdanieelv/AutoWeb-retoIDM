Feature: Validación de errores

Scenario: Forzar error para validar evidencia
  Given que abro la aplicación
  When inicio sesión con "standard_user" y "secret_sauce"
  Then fuerzo un error