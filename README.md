🧪 QA Automation – Playwright + Cucumber (SauceDemo)
Este proyecto implementa una suite de pruebas automatizadas para la aplicación web SauceDemo, utilizando Playwright, Cucumber y TypeScript.

El objetivo es validar el flujo completo de compra de un usuario, aplicando buenas prácticas como Page Object Model (POM), manejo de evidencias y generación de reportes.


*Playwright
*Cucumber (Gherkin)
*TypeScript

📁 Estructura del proyecto

features --     Escenarios en Gherkin
steps    --     Step definitions
pages    --     Page Object Model
support  --     Hooks y configuración
reports  --     Reportes HTML y evidencias

Escenarios implementados
1. Login
Login válido
Login inválido (credenciales incorrectas)
Usuario bloqueado                           maneja el mismo msje de error

3. Compra
Agregar producto al carrito
Visualizar carrito
Completar checkout
Confirmación de compra

4. Manejo de errores
Escenario forzado para validar captura de evidencias (screenshots)
🧠 Patrón de diseño

Se implementó el patrón Page Object Model (POM) para

*Separar lógica de negocio y UI
*Mejorar mantenibilidad
*Reutilizar código

Evidencias
*Captura automática de screenshots en escenarios fallidos
*Generación de reportes HTML

Reportes
Después de la ejecución, se genera un reporte en:

reports/html/index.html

Consideraciones
*Los tests se ejecutan en navegador visible (headless: false)
*Los datos de prueba son estáticos y controlados
*Se incluye manejo de errores para evidencias
 Estrategia de automatización
*Cobertura de escenarios positivos y negativos
*Validaciones mediante assertions de Playwright
*Uso de hooks para setup y teardown
*Generación de reportes para análisis de resultados
