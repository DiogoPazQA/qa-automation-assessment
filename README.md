# QA Automation Assessment

### Descrição ###
Projeto de automação, cobrindo:
- **Testes de Carga** (K6)
- **Testes de API** (Playwright)
- **Testes End-to-End (E2E)** (Playwright + Page Object Model)
- **Testes Mobile** (Appium)
- **Integração CI/CD** (GitHub Actions)
- **Relatórios** (Allure)

=======

### Estrutura ###
- `load-tests/`: scripts de performance com K6  
- `api-tests/`: testes de API REST com Playwright  
- `e2e-tests/`: testes end-to-end com Playwright (login + checkout)  
- `mobile-tests/`: testes mobile com Appium  
- `.github/workflows/`: pipeline de CI/CD  
- `reports/`: relatórios de execução (Allure, K6)  

=======

## Versões ###
- Node.js 18+  
- Playwright 1.47+  
- Appium 2.x  
- K6 v0.45+  
- Allure Playwright  

=======

## Instalação ###
```bash
npm install
