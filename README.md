<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

# Descricoes de algumas partes do projeto
## 1 - Usuarios
- Devera existir somente 3 tipos de perfis: **ADMIN, MASTER e USER**.
- Devera existir somente 4 basicas tipos de opercaoes: **CRAICAO, EXCLUSAO, EDICAO e LISTAGEM**.
- Cada usuario alem de pertencer a um perfil ainda deve ter suas proprias permicoes, defindas pelos perfis **MASTER OU ADMIN**.

## 2 - Contratos
### Departamentos
- Somente usuarios **MASTER OU ADMIN** poderam **CRIAR , EDITAR OU EXCLUIR** departamentos.

# Funcionalidades
## Servico de gerenciamento de contratos

### Categoria de usuarios
- [ADMIN] Cadastro de usuarios
- [ADMIN] Listagem de usuarios
- [ADMIN] Edicao de usuarios
- [ADMIN] Exclusao de usuarios
- [MASTER] Listagem de Operacoes
- [MASTER] Cadastro de usuarios
- [MASTER] Edicao de Operacoes

### Categoria de Perfis
- [ADMIN] Cadastro de Perfis
- [ADMIN] Listagem de Perfis
- [ADMIN] Edicao de Perfis
- [ADMIN] Exclusao de Perfis

### Categoria de Operacoes
- [ADMIN] Cadastro de Operacoes
- [ADMIN] Listagem de Operacoes
- [ADMIN] Edicao de Operacoes
- [ADMIN] Exclusao de Operacoes


### Categoria de Modulos
- [ADMIN] Cadastro de Modulos
- [ADMIN] Listagem de Modulos
- [ADMIN] Edicao de Modulos
- [ADMIN] Exclusao de Modulos

### Categoria de Permissoes
- [ADMIN] Cadastro de Permissoes
- [ADMIN] Listagem de Permissoes
- [ADMIN] Edicao de Permissoes
- [ADMIN] Exclusao de Permissoes


### Categoria de Departamentos
- [ADMIN] Cadastro de Operacoes
- [ADMIN] Listagem de Operacoes
- [ADMIN] Edicao de Operacoes
- [ADMIN] Exclusao de Operacoes
- [MASTER] Listagem de Operacoes
- [MASTER] Edicao de Operacoes


# Fluxo do projeto
## Como devera funcionar:
### TELA DE LOGIN:
- O **USUARIO** podera entra no site, informando seu *EMAIL E SENHA*.
- O **USUARIO** podera redefinir sua senha, infomando o *EMAIL* de login, onde receber um um link para defefinicao.
- O **USUARIO** tera uma opcao para contactar o suporte.

### HOME

### TELA DE CONTRATOS


# Estrutura do projeto
- A camada de presentation seria usada principalmente para inserir e emitir dados do usuário (rotas de API).

- A camada de domain central interna contém toda a lógica de negócios (casos de uso, repositórios).

- A camada de infra contém todas as implementações de infraestrutura (fontes de dados).

Para cada camada, definimos as interfaces em uma pasta de interfaces




