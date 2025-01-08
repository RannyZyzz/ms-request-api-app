
# Projeto de Requisições HTTP com Vite, React e TypeScript

Este projeto é uma aplicação web simples, desenvolvida utilizando o **Vite**, **React** e **TypeScript**. O objetivo principal é criar uma interface de usuário que permita realizar requisições HTTP de forma intuitiva e eficiente. 

A aplicação oferece uma interface para enviar requisições para uma API, visualizar as respostas e interagir com diferentes métodos HTTP (GET, POST, PUT, DELETE). Esse projeto tem como foco mostrar como integrar a comunicação com APIs em um ambiente de desenvolvimento ágil proporcionado pelo Vite, além de aproveitar os benefícios de tipagem do TypeScript.

## Funcionalidades

- **Envio de requisições HTTP**: Interface simples para realizar requisições para APIs.
- **Métodos HTTP**: Suporte para os métodos **GET**, **POST**, **PUT** e **DELETE**.
- **Exibição das respostas**: Os resultados das requisições são exibidos na interface de forma clara.
- **Feedback de erro**: Caso ocorra um erro durante a requisição, o usuário é informado de forma amigável.
  
## Tecnologias Utilizadas

- **Vite**: Build tool extremamente rápido e eficiente, usado para configurar o ambiente de desenvolvimento.
- **React**: Biblioteca para construção de interfaces de usuário, utilizada para criar a UI dinâmica.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática, garantindo maior robustez e segurança no código.
- **Axios** (ou Fetch API): Biblioteca para realizar requisições HTTP de forma simples e eficaz.

## Como Rodar o Projeto

1. Clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd nome-do-repositorio
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Abra o navegador e acesse `http://localhost:3000` para visualizar a aplicação.

## Exemplos de Uso

A interface permite que você selecione o método HTTP desejado (GET, POST, PUT, DELETE) e insira a URL da API para realizar a requisição. Após enviar a requisição, a resposta será exibida na tela, com o corpo da resposta e os status de sucesso ou erro.

## Contribuindo

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou sugestões de novos recursos! Para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch para suas alterações (`git checkout -b minha-branch`).
3. Faça as alterações desejadas.
4. Envie um pull request com uma descrição clara do que foi alterado.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE)
