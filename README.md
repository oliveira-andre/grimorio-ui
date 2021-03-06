<p align="center">
  <img alt="Grimório✨" src="internals/logo/logo-grimorio-cores.png?raw=true">
</p>

<h3 align="center">
  UI just like magic
</h3>

<p align="center">
  Grimório✨ é uma coleção de componentes de interface do usuário prontos para serem utilizados em projetos feitos com React ⚛️. São 40 componentes inspirados pelo <a href="https://material.io/design/">Material Design</a> com personalização através de <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS/Using_CSS_custom_properties">Variáveis CSS</a>!
</p>

<div align="center">

  [![npm version](https://img.shields.io/npm/v/@b2wads/grimorio-ui?label=npm%20package)](https://www.npmjs.com/package/@b2wads/grimorio-ui)
  [![GitHub issues](https://img.shields.io/github/issues/b2wads/grimorio-ui)](https://github.com/b2wads/grimorio-ui/issues)
  [![GitHub contributors](https://img.shields.io/github/contributors/b2wads/grimorio-ui)](https://github.com/b2wads/grimorio-ui/graphs/contributors)  
</div>

# 📦 Instalação

Primeiro, instale o pacote vindo do npm:

```bash
yarn add @b2wads/grimorio-ui
```
```bash
npm i @b2wads/grimorio-ui
```

Importe o CSS do Grimório✨ no seu arquivo de entrada ou na lista de entrypoints do seu Webpack:

```js
// import the CSS on js

import '[path/to/node_modules]/@b2wads/grimorio-ui/lib/css/grimorio-ui.min.css';

// or

{ 
  //...webpack configs
  entry: {
    'your-app': [
      '[path/to/node_modules]/@b2wads/grimorio-ui/lib/css/grimorio-ui.min.css',
      'index.js',
    ],
  },
}

```

E então, é só usar!

```js
// component.js

import { Alert } from '@b2wads/grimorio-ui';
```

Caso seu webpack ignore o `node_modules` na hora de gerar o build de CSS, é necessário criar uma regra para incluir o CSS do Grimório✨.

```js
// exemplo de exceção no webpack 3.X.X
{
  test: /\.css$/,
  include: path.resolve(__dirname, '[path/to/node_modules]/@b2wads/grimorio-ui/css/grimorio-ui.min.css'),
  use: ['style-loader', 'css-loader', { ... }],
},
```

### 💅 Personalização

Caso seja necessário mudar as cores principais do Grimório✨ é possível através de [variáveis CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS/var). Veja o [guia de personalização](./docs-src/advanced-css.md)
 para entender como.

### 🕰 Migração de versões antigas
Para migrar vindo do Grimório✨ 6.X ou anterior para a versão mais atual, é necessário mudar o path de importação do CSS. Isso também vale para todas as variações `grimorio-ui-[version].afiliados.tgz` do Grimório✨.

```js
// ❌ Antigo CSS
import '[path/to/node_modules]/@b2wads/grimorio-ui/grimorio-ui.min.css';

// ✔️ Novo CSS
import '[path/to/node_modules]/@b2wads/grimorio-ui/css/grimorio-ui.min.css';

```
Já no caso da migração vir de outras variações do Grimório✨ (`grimorio-ui-[version].b2wads.tgz` ou `grimorio-ui-[version].sieve.tgz`), será necessário seguir o [guia de personalização](./docs-src/advanced-css.md), usando as [variáveis legado](./docs-src/legacy-variables.md) relativas a cada variante.


# 🕹 Desenvolvimento

Antes de começar a contribuir com o Grimório✨, leia nosso [guia de contribuição](./CONTRIBUTING.md).

### 📘 Visualização com Storybook

Para visualizar e interagir com os componentes do Grimório✨, basta rodar localmente o `storybook`.

```bash
yarn storybook
```

### ⛏️ Build e Pack
Para chamar a build e gerar o pacote, o comando é:

```bash
yarn pack:dist
```

### 📋 Copiar
Remove o pacote antigo do repositório `APP` e copia o novo

```bash
APP=[path/to/app]/your-webapp yarn cp:pack
```

### 🧪 Rodando testes

```bash
yarn test
```

### 💻 CLI

Temos um script sh que fica encarregado por criar a estrutura de arquivos e pastas dos componentes.

```sh
yarn create:comp nome-do-componente
```

Esse comando será capaz de criar as pastas e arquivos corretamente para iniciar o desenvolvimento de um componente.

### 📜 Docs

- [Git Flow](./docs-src/git-flow.md)
- [Commits](./docs-src/commits.md)
- [CSS (code style)](./docs-src/css-code-style.md)
- [Processo de Build](./docs-src/processo-de-build.md)
- [Links Úteis](./docs-src/links-uteis.md)
- [NPM](./docs-src/publish-to-npm.md)

