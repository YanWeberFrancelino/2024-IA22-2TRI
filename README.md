# Guia para Criar um Servidor Express com Node.js e TypeScript

Bem-vindo a este guia completo e detalhado para a criação de um servidor usando Node.js, Express e TypeScript. Este documento foi feito para ser acessível a todos, mesmo aqueles que nunca tiveram contato com essas tecnologias. Vamos abordar desde conceitos básicos até a implementação de um servidor funcional com banco de dados, incluindo dicas de resolução de problemas e referências para estudos adicionais. O guia está dividido em diversas seções para facilitar a compreensão, independentemente do seu nível de experiência.

## Sumário

1. [Introdução](#introdução)
2. [O que é Node.js?](#o-que-é-nodejs)
3. [O que é Express?](#o-que-é-express)
4. [O que é TypeScript?](#o-que-é-typescript)
5. [Preparando o Ambiente de Desenvolvimento](#preparando-o-ambiente-de-desenvolvimento)
   - [Instalação no Windows](#instalação-no-windows)
   - [Instalação no Linux](#instalação-no-linux)
   - [Instalando o Visual Studio Code](#instalando-o-visual-studio-code)
   - [Alternativa: Usando o GitHub Codespaces](#alternativa-usando-o-github-codespaces)
6. [Iniciando um Projeto Node.js com TypeScript](#iniciando-um-projeto-nodejs-com-typescript)
   - [Criando o Diretório do Projeto](#criando-o-diretório-do-projeto)
   - [Inicializando o Projeto com npm](#inicializando-o-projeto-com-npm)
   - [Instalando Dependências](#instalando-dependências)
   - [Configurando o TypeScript](#configurando-o-typescript)
   - [Configurando Scripts no `package.json`](#configurando-scripts-no-packagejson)
7. [Criando o Servidor Express](#criando-o-servidor-express)
   - [Criando o Arquivo Inicial do Servidor](#criando-o-arquivo-inicial-do-servidor)
   - [Inicializando o Servidor](#inicializando-o-servidor)
   - [Testando o Servidor](#testando-o-servidor)
8. [Configurando o Banco de Dados](#configurando-o-banco-de-dados)
   - [Criando a Conexão com o Banco de Dados](#criando-a-conexão-com-o-banco-de-dados)
   - [Adicionando o Banco de Dados ao Servidor](#adicionando-o-banco-de-dados-ao-servidor)
9. [Implementando Rotas de CRUD](#implementando-rotas-de-crud)
   - [Inserindo Dados](#inserindo-dados)
   - [Listando Usuários](#listando-usuários)
   - [Editando Usuários](#editando-usuários)
   - [Deletando Usuários](#deletando-usuários)
10. [Como Ler e Interpretar Logs de Erros](#como-ler-e-interpretar-logs-de-erros)
    - [Erros Comuns e Como Corrigi-los](#erros-comuns-e-como-corrigi-los)
        - [Erro de PATH Não Reconhecido](#erro-de-path-não-reconhecido)
        - [Erro de Biblioteca Não Instalada](#erro-de-biblioteca-não-instalada)
        - [Outros Erros Comuns](#outros-erros-comuns)
    - [Recursos e Ferramentas para Resolução de Problemas](#recursos-e-ferramentas-para-resolução-de-problemas)
        - [Sites Úteis para Pesquisar Erros](#sites-úteis-para-pesquisar-erros)
        - [Inteligências Artificiais para Suporte](#inteligências-artificiais-para-suporte)
11. [Conclusão e Próximos Passos](#conclusão-e-próximos-passos)

---

## Introdução

Este guia foi projetado para ser um recurso abrangente, levando-o do absoluto zero até a construção de um servidor funcional usando Node.js, Express e TypeScript. Vamos começar com conceitos básicos para garantir que você entenda cada parte do processo. Depois, você aprenderá como configurar o ambiente de desenvolvimento em diferentes sistemas operacionais, incluindo Windows e Linux, além de uma alternativa na nuvem com o GitHub Codespaces.

## O que é Node.js?

Node.js é um ambiente de execução JavaScript que permite a execução de código JavaScript fora do navegador, no lado do servidor. Desenvolvido originalmente em 2009, Node.js utiliza o motor V8 do Chrome, que é responsável pela execução rápida do JavaScript.

### Principais Características do Node.js:
- **Non-blocking I/O**: Node.js opera de forma assíncrona e orientada a eventos, permitindo que ele lide com um grande número de conexões simultâneas de forma eficiente.
- **Unificado com JavaScript**: A mesma linguagem usada para o frontend pode ser utilizada no backend, permitindo uma integração perfeita entre as duas camadas.
- **Ecossistema Rico**: O npm (Node Package Manager) oferece milhões de pacotes de código aberto que podem ser integrados ao seu projeto com facilidade.

## O que é Express?

Express é um framework minimalista para Node.js, que facilita o desenvolvimento de servidores web e APIs. Ele abstrai grande parte da complexidade envolvida na manipulação de requisições e respostas HTTP, permitindo que você se concentre na lógica do aplicativo.

### Por que usar Express?
- **Facilidade de Uso**: A API do Express é simples e direta, tornando o desenvolvimento rápido e intuitivo.
- **Flexível**: Express permite a criação de servidores robustos, desde simples sites estáticos até APIs RESTful complexas.
- **Desempenho**: É leve e otimizado para alta performance, sem sacrificar a simplicidade.

## O que é TypeScript?

TypeScript é um superconjunto de JavaScript que adiciona tipagem estática e outras funcionalidades modernas ao idioma. Criado pela Microsoft, TypeScript transpila para JavaScript puro, permitindo que você escreva código mais seguro e fácil de manter.

### Vantagens do TypeScript:
- **Tipagem Estática**: Ajuda a evitar erros comuns de tempo de execução, detectando-os durante o desenvolvimento.
- **Melhor Integração com IDEs**: A tipagem estática melhora a completude de código, refatoração e outras ferramentas de IDE.
- **Compatível com JavaScript**: Todo código JavaScript é válido em TypeScript, facilitando a migração gradual.

## Preparando o Ambiente de Desenvolvimento

Antes de começar a codificar, precisamos configurar o ambiente de desenvolvimento. A seguir, veremos como preparar o ambiente tanto no Windows quanto no Linux, além de uma alternativa utilizando GitHub Codespaces.

### Instalação no Windows

#### Passo 1: Instalando Node.js

1. Acesse o [site oficial do Node.js](https://nodejs.org/).
2. Baixe o instalador para Windows.
3. Execute o instalador e siga as instruções. Durante a instalação, marque a opção para adicionar o Node.js ao PATH.

Após a instalação, verifique se o Node.js e o npm foram instalados corretamente abrindo o Prompt de Comando e digitando:

```bash
node -v
npm -v
```

Isso deve retornar as versões instaladas do Node.js e do npm.

#### Passo 2: Instalando o Git

Para trabalhar com repositórios Git, é recomendável instalar o Git para Windows.

1. Acesse o [site oficial do Git](https://git-scm.com/).
2. Baixe o instalador para Windows.
3. Execute o instalador e siga as instruções. Durante a instalação, marque a opção para adicionar o Git ao PATH.

### Instalação no Linux

#### Passo 1: Instalando Node.js

Em distribuições baseadas em Debian/Ubuntu, você pode instalar o Node.js utilizando o seguinte comando:

```bash
sudo apt update
sudo apt install nodejs npm
```

Verifique a instalação com:

```bash
node -v
npm -v
```

Isso deve retornar as versões do Node.js e do npm.

#### Passo 2: Instalando o Git

O Git geralmente está disponível nos repositórios padrão. Em distribuições baseadas em Debian/Ubuntu, instale-o com:

```bash
sudo apt install git
```

Verifique a instalação com:

```bash
git --version
```

### Instalando o Visual Studio Code

Visual Studio Code (VS Code) é um editor de código-fonte popular, disponível para Windows, macOS e Linux. Vamos instalá-lo em ambos os sistemas operacionais.

#### Instalação no Windows

1. Acesse o [site oficial do Visual Studio Code](https://code.visualstudio.com/).
2. Baixe o instalador para Windows.
3. Execute o instalador e siga as instruções.

#### Instalação no Linux

Para distribuições baseadas em Debian/Ubuntu, você pode instalar o VS Code com os seguintes comandos:

```bash
sudo apt update
sudo apt install software-properties-common apt-transport-https wget
wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
sudo apt update
sudo apt install code
```

### Alternativa

: Usando o GitHub Codespaces

GitHub Codespaces é uma excelente alternativa para configurar um ambiente de desenvolvimento rapidamente na nuvem. Ele oferece um ambiente de desenvolvimento completo baseado em contêineres, permitindo que você trabalhe de qualquer lugar.

#### Configurando um Codespace

1. Vá até o repositório GitHub desejado.
2. Clique em "Code" e selecione "Open with Codespaces".
3. O ambiente será configurado automaticamente e estará pronto para uso em poucos minutos.

## Iniciando um Projeto Node.js com TypeScript

Com o ambiente configurado, vamos iniciar o projeto.

### Criando o Diretório do Projeto

No terminal (Prompt de Comando no Windows ou Terminal no Linux), crie um novo diretório para o projeto e acesse-o.

```bash
mkdir meu-projeto-node
cd meu-projeto-node
```

### Inicializando o Projeto com npm

Dentro do diretório do projeto, inicialize um novo projeto Node.js com o comando:

```bash
npm init -y
```

Este comando cria um arquivo `package.json` com as configurações básicas do projeto.

### Instalando Dependências

Vamos instalar as bibliotecas necessárias para o projeto.

```bash
npm install express cors sqlite3
```

Essas são as dependências principais:
- **express**: O framework para criar o servidor.
- **cors**: Middleware para habilitar CORS (Cross-Origin Resource Sharing).
- **sqlite3**: Biblioteca para manipular o banco de dados SQLite.

Em seguida, instale as dependências de desenvolvimento:

```bash
npm install --save-dev typescript nodemon ts-node @types/express @types/cors
```

Essas são as dependências de desenvolvimento:
- **typescript**: Adiciona suporte a TypeScript.
- **nodemon**: Reinicia automaticamente o servidor ao detectar mudanças no código.
- **ts-node**: Permite executar código TypeScript diretamente.
- **@types/express e @types/cors**: Pacotes que adicionam suporte a TypeScript para Express e CORS.

### Configurando o TypeScript

Vamos configurar o TypeScript no projeto. Execute o comando abaixo para gerar o arquivo de configuração:

```bash
npx tsc --init
```

Isso cria um arquivo `tsconfig.json`. Nele, precisamos configurar algumas opções:

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

### Explicando as Configurações:
- **target**: Especifica a versão do ECMAScript que o código será compilado (ES2017).
- **module**: Define o sistema de módulos (CommonJS).
- **outDir**: Especifica o diretório de saída dos arquivos compilados.
- **rootDir**: Define o diretório de origem dos arquivos TypeScript.
- **strict**: Habilita várias opções que garantem uma verificação mais rigorosa do código.
- **esModuleInterop**: Garante a interoperabilidade com módulos ES.
- **skipLibCheck**: Ignora a verificação de tipos nos arquivos de declaração de biblioteca.
- **forceConsistentCasingInFileNames**: Garante a consistência de letras maiúsculas e minúsculas nos nomes de arquivos.

### Configurando Scripts no `package.json`

Adicione o seguinte script ao seu `package.json` para facilitar a execução do servidor:

```json
"scripts": {
  "dev": "nodemon src/app.ts"
}
```

Esse script permite que você inicie o servidor em modo de desenvolvimento, onde o Nodemon reinicia o servidor sempre que detecta mudanças nos arquivos.

## Criando o Servidor Express

Agora que as dependências estão instaladas e o TypeScript configurado, vamos criar o servidor.

### Criando o Arquivo Inicial do Servidor

No diretório `src`, crie um arquivo chamado `app.ts`:

```bash
mkdir src
touch src/app.ts
```

Adicione o seguinte código ao arquivo `app.ts`:

```typescript
import express from 'express';
import cors from 'cors';

const port = 3333;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

### Explicando o Código:

- **import express from 'express'**: Importa o módulo Express para criar o servidor.
- **import cors from 'cors'**: Importa o middleware CORS para permitir requisições de diferentes origens.
- **const app = express()**: Inicializa o aplicativo Express.
- **app.use(cors())**: Aplica o middleware CORS a todas as rotas.
- **app.use(express.json())**: Permite que o servidor processe requisições com JSON.
- **app.get('/')**: Cria uma rota GET na raiz (`/`) que retorna "Hello World".
- **app.listen(port, ...)**: Inicia o servidor na porta especificada.

### Inicializando o Servidor

Para iniciar o servidor, execute o seguinte comando:

```bash
npm run dev
```

Se tudo estiver configurado corretamente, você verá a mensagem:

```bash
Server running on port 3333
```

### Testando o Servidor

Abra o navegador e acesse `http://localhost:3333`. Se tudo estiver funcionando, você verá a mensagem "Hello World".

## Configurando o Banco de Dados

Para armazenar dados de maneira persistente, vamos configurar um banco de dados SQLite.

### Criando a Conexão com o Banco de Dados

Crie um arquivo chamado `database.ts` dentro do diretório `src`:

```bash
touch src/database.ts
```

Adicione o seguinte código ao arquivo:

```typescript
import { open, Database } from 'sqlite';
import sqlite3 from 'sqlite3';

let instance: Database | null = null;

export async function connect() {
  if (instance) return instance;

  const db = await open({
     filename: './src/database.sqlite',
     driver: sqlite3.Database
   });
  
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT
    )
  `);

  instance = db;
  return db;
}
```

### Explicando o Código:

- **import { open, Database } from 'sqlite'**: Importa as funções necessárias para abrir o banco de dados SQLite.
- **let instance: Database | null = null**: Armazena uma instância do banco de dados para evitar múltiplas conexões.
- **async function connect()**: Função que se conecta ao banco de dados e cria a tabela `users` se ela não existir.
- **CREATE TABLE IF NOT EXISTS users...**: SQL que cria a tabela de usuários com colunas para `id`, `name` e `email`.

### Adicionando o Banco de Dados ao Servidor

Vamos agora integrar o banco de dados ao nosso servidor. No arquivo `app.ts`, atualize o código para incluir as operações de banco de dados:

```typescript
import express from 'express';
import cors from 'cors';
import { connect } from './database';

const port = 3333;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/users', async (req, res) => {
  const db = await connect();
  const { name, email } = req.body;

  const result = await db.run('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
  const user = await db.get('SELECT * FROM users WHERE id = ?', [result.lastID]);

  res.json(user);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

### Explicando o Código:

- **app.post('/users', async (req, res) => {...})**: Define uma rota POST para adicionar novos usuários.
- **const db = await connect()**: Conecta ao banco de dados.
- **await db.run('INSERT INTO users (name, email)...')**: Insere um novo usuário na tabela.
- **const user = await db.get('SELECT * FROM users WHERE id = ?', [result.lastID])**: Recupera o usuário recém-inserido.

## Implementando Rotas de CRUD

Agora que nosso servidor está conectado ao banco de dados, vamos criar rotas para inserir, listar, editar e deletar usuários.

### Inserindo Dados

Já temos a rota para inserir dados no banco (`/users`), mas vamos explicá-la em mais detalhes.

#### Testando a Inserção de Dados

Você pode usar o Postman ou qualquer outra ferramenta de API para testar a inserção de dados.

1. Abra o Postman e crie uma nova requisição POST para `http://localhost:3333/users`.
2. No corpo da requisição, insira o seguinte JSON:

```json
{
  "name": "John Doe",
  "email": "johndoe@mail.com"
}
```

3. Clique em "Enviar". Se tudo correr bem, você verá a resposta com os dados do usuário inserido:

```json
{
  "id": 1,
  "name": "John Doe",
 

 "email": "johndoe@mail.com"
}
```

### Listando Usuários

Vamos criar uma rota para listar todos os usuários cadastrados.

No arquivo `app.ts`, adicione a seguinte rota:

```typescript
app.get('/users', async (req, res) => {
  const db = await connect();
  const users = await db.all('SELECT * FROM users');

  res.json(users);
});
```

#### Explicando o Código:

- **app.get('/users', async (req, res) => {...})**: Define uma rota GET para listar todos os usuários.
- **const users = await db.all('SELECT * FROM users')**: Recupera todos os usuários do banco de dados.

### Editando Usuários

Para editar um usuário, vamos criar uma rota PUT que atualiza os dados de um usuário específico.

No arquivo `app.ts`, adicione a seguinte rota:

```typescript
app.put('/users/:id', async (req, res) => {
  const db = await connect();
  const { name, email } = req.body;
  const { id } = req.params;

  await db.run('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id]);
  const user = await db.get('SELECT * FROM users WHERE id = ?', [id]);

  res.json(user);
});
```

#### Explicando o Código:

- **app.put('/users/:id', async (req, res) => {...})**: Define uma rota PUT para atualizar um usuário específico.
- **await db.run('UPDATE users SET name = ?, email = ? WHERE id = ?', [...])**: Atualiza o nome e o email do usuário com o ID especificado.

### Deletando Usuários

Finalmente, vamos criar uma rota DELETE para remover um usuário do banco de dados.

No arquivo `app.ts`, adicione a seguinte rota:

```typescript
app.delete('/users/:id', async (req, res) => {
  const db = await connect();
  const { id } = req.params;

  await db.run('DELETE FROM users WHERE id = ?', [id]);

  res.json({ message: 'User deleted' });
});
```

#### Explicando o Código:

- **app.delete('/users/:id', async (req, res) => {...})**: Define uma rota DELETE para remover um usuário específico.
- **await db.run('DELETE FROM users WHERE id = ?', [id])**: Deleta o usuário com o ID especificado.

## Como Ler e Interpretar Logs de Erros

Erros são inevitáveis ao desenvolver software, e saber como ler e interpretar os logs de erro é uma habilidade essencial. Abaixo, vamos abordar alguns dos erros mais comuns que você pode encontrar ao trabalhar com Node.js, Express e TypeScript, e como solucioná-los.

### Erros Comuns e Como Corrigi-los

#### Erro de PATH Não Reconhecido

**Descrição**: Esse erro geralmente ocorre quando você tenta executar um comando e o terminal retorna uma mensagem como "command not found" ou "não é reconhecido como um comando interno ou externo".

**Causa**: Isso acontece porque o terminal não consegue encontrar o executável do comando, normalmente porque o diretório onde o executável está localizado não está incluído na variável de ambiente `PATH`.

**Solução**:
1. **No Windows**:
   - Verifique se o Node.js está instalado corretamente e se foi incluído no PATH durante a instalação.
   - Abra as "Configurações do Sistema" > "Variáveis de Ambiente" e adicione o caminho do Node.js à variável `PATH`.

2. **No Linux**:
   - Verifique se o Node.js está instalado e se o caminho do Node.js está no PATH.
   - Adicione o caminho do Node.js ao PATH no arquivo `.bashrc` ou `.zshrc`:
     ```bash
     export PATH=$PATH:/caminho/para/nodejs
     ```
   - Execute `source ~/.bashrc` para aplicar as mudanças.

#### Erro de Biblioteca Não Instalada

**Descrição**: Erro como "Cannot find module 'express'" ou "Módulo não encontrado".

**Causa**: Esse erro ocorre quando você tenta importar uma biblioteca que não está instalada.

**Solução**:
- Verifique se a biblioteca foi instalada usando `npm install` no diretório do projeto.
- Se a biblioteca for uma dependência de desenvolvimento, certifique-se de usar a flag `--save-dev` ao instalá-la.
- Verifique se o diretório `node_modules` existe e contém a biblioteca em questão.

#### Outros Erros Comuns

- **SyntaxError**: Erros de sintaxe podem ocorrer por causa de erros de digitação ou formatação incorreta. Revise o código para encontrar e corrigir a sintaxe incorreta.
- **TypeError**: Esse erro ocorre quando você tenta realizar uma operação em um valor do tipo errado, como chamar uma função em uma variável que não é uma função.
- **UnhandledPromiseRejectionWarning**: Este erro aparece quando uma promessa (Promise) é rejeitada sem tratamento. Certifique-se de usar `try/catch` ou `catch` para capturar erros de promessas.

### Recursos e Ferramentas para Resolução de Problemas

Se você encontrar um erro e não souber como resolvê-lo, existem diversos recursos online e ferramentas que podem ajudá-lo.

#### Sites Úteis para Pesquisar Erros

1. **[Stack Overflow](https://stackoverflow.com/)**: Um dos maiores repositórios de perguntas e respostas sobre programação. Pesquise pelo erro específico que você está enfrentando; é provável que alguém já tenha encontrado e resolvido o mesmo problema.
2. **[GitHub Issues](https://github.com/issues)**: Se você estiver usando uma biblioteca de código aberto, consulte as issues no repositório do GitHub. Muitas vezes, erros conhecidos já foram relatados e possivelmente solucionados.
3. **[MDN Web Docs](https://developer.mozilla.org/)**: Documentação extensa sobre JavaScript e tecnologias relacionadas. Pode ser útil para entender melhor erros específicos de JavaScript.

#### Inteligências Artificiais para Suporte

1. **[ChatGPT](https://openai.com/chatgpt)**: Desenvolvido pela OpenAI, ChatGPT pode ajudar a explicar conceitos, sugerir soluções para problemas de código e fornecer exemplos de código.
2. **[Claude](https://claude.ai/)**: Uma IA da Anthropic, Claude 3.5 Sonnet é útil para consultas de código, correções, e é destacada nos benchmarks por suas excelentes capacidades em programação, oferecendo explicações técnicas e auxílio em problemas de programação.
3. **[Gemini](https://gemini.google.com/)**: Desenvolvido pelo Google, Gemini é uma IA que pode ser usada para suporte técnico em programação e outras tarefas técnicas.
   
Essas IAs são ferramentas poderosas que podem acelerar a resolução de problemas, oferecendo suporte personalizado e respostas rápidas para suas dúvidas.

## Conclusão e Próximos Passos

Parabéns! Você criou um servidor completo utilizando Node.js, Express e TypeScript, com suporte a um banco de dados SQLite e funcionalidades básicas de CRUD. Este guia cobriu desde a configuração do ambiente até a implementação de funcionalidades mais avançadas, garantindo que você tenha uma compreensão sólida dos conceitos fundamentais.
