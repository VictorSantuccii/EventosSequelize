# API de Eventos

> Esta é uma API para gerenciamento de eventos, permitindo a criação, leitura, atualização e exclusão (CRUD) de eventos, localizações, ingressos, organizadores e usuários.

## 📋 Objetivo

O objetivo desta API é fornecer um sistema robusto para gerenciar eventos e suas informações associadas. A API é construída utilizando Node.js com o framework Express e se conecta ao banco de dados MySQL utilizando Sequelize como ORM.

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript do lado do servidor.
- **Express**: Framework web para construir APIs de forma eficiente.
- **Sequelize**: ORM (Object-Relational Mapping) para interagir com o banco de dados MySQL.
- **MySQL**: Sistema de gerenciamento de banco de dados relacional.

## 📦 Estrutura do Projeto

```
API_Eventos/
│
├── controllers/           # Controladores da API
│   ├── eventoController.js
│   ├── compraController.js
│   ├── ingressoController.js
│   ├── organizadorController.js
│   ├── usuarioController.js
│   └── localizacaoController.js
│
├── models/                # Modelos do Sequelize
│   ├── Evento.js
│   ├── Compra.js
│   ├── Ingresso.js
│   ├── Organizador.js
│   ├── Usuario.js
│   └── Localizacao.js
│
├── routes/                # Rotas da API
│   └── eventoRoutes.js
│
├── database/              # Configuração do banco de dados
│   └── connection.js
│
├── app.js                 # Arquivo principal da aplicação
└── package.json           # Dependências do projeto
```

## 📡 Endpoints

### Localizações

- **GET /localizacoes**: Obtém todas as localizações.
- **GET /localizacoes/:id**: Obtém uma localização por ID.
- **POST /localizacoes**: Cria uma nova localização.
- **PUT /localizacoes/:id**: Atualiza uma localização existente.
- **DELETE /localizacoes/:id**: Exclui uma localização.

### Eventos

- **GET /eventos**: Obtém todos os eventos.
- **GET /eventos/:id**: Obtém um evento por ID.
- **POST /eventos**: Cria um novo evento.
- **PUT /eventos/:id**: Atualiza um evento existente.
- **DELETE /eventos/:id**: Exclui um evento.

### Compras

- **GET /compras**: Obtém todas as compras.
- **GET /compras/:id**: Obtém uma compra por ID.
- **POST /compras**: Cria uma nova compra.
- **PUT /compras/:id**: Atualiza uma compra existente.
- **DELETE /compras/:id**: Exclui uma compra.

### Ingressos

- **GET /ingressos**: Obtém todos os ingressos.
- **GET /ingressos/:id**: Obtém um ingresso por ID.
- **POST /ingressos**: Cria um novo ingresso.
- **PUT /ingressos/:id**: Atualiza um ingresso existente.
- **DELETE /ingressos/:id**: Exclui um ingresso.

### Organizadores

- **GET /organizadores**: Obtém todos os organizadores.
- **GET /organizadores/:id**: Obtém um organizador por ID.
- **POST /organizadores**: Cria um novo organizador.
- **PUT /organizadores/:id**: Atualiza um organizador existente.
- **DELETE /organizadores/:id**: Exclui um organizador.

### Usuários

- **GET /usuarios**: Obtém todos os usuários.
- **GET /usuarios/:id**: Obtém um usuário por ID.
- **POST /usuarios**: Cria um novo usuário.
- **PUT /usuarios/:id**: Atualiza um usuário existente.
- **DELETE /usuarios/:id**: Exclui um usuário.

## 🚀 Como Executar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/API_Eventos.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd API_Eventos
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Configure a conexão com o banco de dados no arquivo `database/connection.js`.

5. Inicie o servidor:
   ```bash
   npm start
   ```

6. Acesse a API em `http://localhost:3000`.

## 📄 Licença

Este projeto é para fins educacionais e está livre para uso pessoal.

## 🤝 Colaborador

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/VictorSantuccii">
        <img src="https://avatars.githubusercontent.com/u/160544887?v=4" width="100px;" alt="Foto do Victor Santucci no GitHub"/><br>
        <sub>
          <b>Victor Santucci</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

