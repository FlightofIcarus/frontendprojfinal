![](https://ada-site-frontend.s3.sa-east-1.amazonaws.com/home/header-logo.svg)

# Projeto de Cálculo de Retorno sobre Investimento

Descrição
---

Este projeto consiste em uma aplicação que permite calcular o retorno sobre investimento com base em um valor investido e um período de tempo. A aplicação é dividida em três partes principais: Frontend, API e BFF (Back for Front).

## Critérios de Aceitação

1. Todas as tarefas devem estar marcadas como concluídas (done).
2. Utilização de branches separadas, seguindo a convenção: `feature` para desenvolvimento e `release` para produção.
3. Estrutura do projeto deve contemplar as partes de front-end, API e BFF.
4. A aplicação deve receber um valor e uma medida temporal, calculando o valor de retorno sobre o investimento e o montante devolvido ao investidor.
5. A API deve calcular o investimento com base nos inputs fornecidos e retornar os valores calculados.
6. O BFF deve receber requisições do front-end e encaminhá-las para a API.
7. A API deve possuir no mínimo uma rota/endpoint.
8. Investimentos com períodos abaixo de 30 dias não apresentam rendimento ou dividendos.
9. A API deve ter cobertura de teste, com no mínimo uma suíte de testes.
10. O BFF deve ter cobertura de teste, com no mínimo uma suíte de testes.

## Tarefas

1. Criar repositório.
2. Criar backlog.
3. Criar issues.
4. Criar input de valor.
5. Criar input de tempo.
6. Criar botão de submit (com prevent default).
7. Criar campo de exibição da taxa de juros.
8. Criar campo de exibição do valor de retorno.
9. Criar campo de exibição do montante.
10. Criar rota/endpoint na API.
11. Configurar o servidor baseado no Express.
12. Criar arquivo com variáveis de ambiente (.env).
13. Criar o controller da API.
14. Implementar camada de serviço com regras de negócio.
15. Desenvolver função de cálculo de dividendos.
16. Criar arquivo de entrada (app.ts/js ou server.ts/js).
17. Configurar o servidor BFF baseado no Express.
18. Criar rota/endpoint do BFF.
19. Criar arquivo com variáveis de ambiente (.env) para o BFF.
20. Implementar arquivo de entrada para o BFF.
21. Escrever teste para pelo menos a camada de serviço da API.
22. Escrever teste para a requisição do BFF.

## Como Executar

1. Certifique-se de possuir instalado o [Node.js LTS](https://nodejs.org/en/download) à partir da v.18.0.0 (versão de suporte de longo prazo)


2. Clone o repositório da API no link:

```sh
https://github.com/FlightofIcarus/projetofinalada.git
```

3. Clone o repositório do BFF no link:

```sh
https://github.com/FlightofIcarus/bfffinal.git
```

4. Clone o repositório do Front no link:

```sh
https://github.com/FlightofIcarus/frontendprojfinal.git
```

5. Abra os 03 repositórios em um workspace no Visual Studio Code.


6. Abra os repositórios do  BFF e da API no terminal integrado do VSCode e use o comando a seguir para instalar as dependências necessárias para a inicialização do projeto:

```sh
npm install
```

7. No repositório da API, crie um arquivo `.env` com uma variável PORT que recebe o valor 5000:
```sh
PORT=5000
```

8. No repositório do BFF, crie um arquivo `.env` com essas duas variáveis:
```sh
PORT=8000
API_PATH=http://localhost:5000/api/investcalc
```

9. Use o comando a seguir para iniciar os servidores da API e do BFF no modo de desenvolvimento:

```sh
npm run dev
```

10. Usando a extenção Live Server execute o arquivo HTML do Front (certifique-se de rodar o front na porta 5500).
---

## 🤖 Nossa Squad

### Wilson Rocha
- LinkedIn: [Wilson Rocha](https://www.linkedin.com/in/wilsonn-rocha/)
- GitHub: [Sownatta](https://github.com/Sownatta)

### Ícaro Santos
- LinkedIn: [Ícaro Santos](https://www.linkedin.com/in/santos-icaro/)
- Github: [Ícaro Santos](https://github.com/FlightofIcarus)

### Patrick Souza
- LinkedIn: [Patrick Souza](https://www.linkedin.com/in/patrickpsouza/)
- GitHub: [Patrick Souza](https://github.com/PatrickPSouza)
