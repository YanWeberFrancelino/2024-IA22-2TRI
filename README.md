---

# Projeto Node.js com TypeScript - CRUD de Usuários

Este guia irá ajudá-lo a configurar e executar um projeto Node.js com TypeScript, criando um servidor Express com um CRUD básico de usuários utilizando um banco de dados SQLite.

## Sumário

1. [Pré-requisitos](#pré-requisitos)
2. [Configurando o Ambiente de Desenvolvimento](#configurando-o-ambiente-de-desenvolvimento)
3. [Iniciando o Projeto Node.js](#iniciando-o-projeto-nodejs)
4. [Configurando o TypeScript](#configurando-o-typescript)
5. [Configurando o Servidor Express](#configurando-o-servidor-express)
6. [Configurando o Banco de Dados SQLite](#configurando-o-banco-de-dados-sqlite)
7. [Criando a Interface HTML](#criando-a-interface-html)
8. [Estrutura de Pastas](#estrutura-de-pastas)
9. [Testando o Projeto](#testando-o-projeto)

---

## 1. Pré-requisitos

Antes de iniciar, certifique-se de que você possui o Node.js e o Visual Studio Code instalados em seu sistema.

### Verificando a instalação do Node.js

Abra o CMD no Windows ou o Terminal no Linux e digite:

```bash
node -v
```

Se o Node.js não estiver instalado, [clique aqui para baixar e instalar](https://nodejs.org/).

### Verificando a instalação do Visual Studio Code

Digite `code .` no terminal ou pesquise por "Visual Studio Code" na barra de pesquisa do sistema operacional. Se o Visual Studio Code abrir, significa que ele já está instalado. Caso contrário, você pode baixar o Visual Studio Code [aqui](https://code.visualstudio.com/).

## 2. Configurando o Ambiente de Desenvolvimento

### Criando o diretório do projeto

1. **No Windows ou Mac**: Na área de trabalho, clique com o botão direito do mouse, selecione **Nova Pasta** e nomeie-a como `node-typescript-crud`.
   
   **No Linux**:
   - Se você puder criar a pasta na área de trabalho via interface gráfica, clique com o botão direito do mouse, selecione **Nova Pasta** e nomeie-a como `node-typescript-crud`.
   - **Se você não conseguir criar a pasta na área de trabalho via interface gráfica**: Use o terminal para garantir que funcione independentemente do idioma do sistema. Execute o seguinte comando para criar a pasta na área de trabalho:
     ```bash
     mkdir ~/$(xdg-user-dir DESKTOP)/node-typescript-crud
     ```

2. Abra o Visual Studio Code. Você pode abrir a pasta criada de duas maneiras:
   - Clique em **File > Open Folder** e selecione a pasta criada.
   - Ou use o atalho `Ctrl + K + O` para abrir a janela de seleção de pastas e escolha a pasta criada.

![Como Abrir A Pasta](img/abrir_pasta.png)

### Criando os arquivos iniciais

1. No Visual Studio Code, crie uma pasta chamada `src` dentro do seu projeto.
2. Dentro da pasta `src`, crie dois arquivos: `app.ts` e `database.ts`.
3. Crie também uma pasta chamada `public` na raiz do projeto. Dentro dela, crie um arquivo chamado `index.html`.

**Nota:** Para criar um novo arquivo ou pasta, clique com o botão direito na área de trabalho do Visual Studio Code ou use o atalho `Ctrl + N` e depois `Ctrl + S` para salvar.

[IMAGEM]

## 3. Iniciando o Projeto Node.js

No terminal integrado do Visual Studio Code (`Ctrl + '`), execute os seguintes comandos para iniciar o projeto Node.js:

```bash
npm init -y
```

Instale as dependências necessárias:

```bash
npm install express cors sqlite3 sqlite
npm install --save-dev typescript nodemon ts-node @types/express @types/cors
```

### Aviso Importante:

Após a execução dos comandos acima, será criada uma pasta chamada `node_modules` e o arquivo `package-lock.json` no diretório do seu projeto. A pasta `node_modules` contém todos os pacotes e dependências instaladas, e o arquivo `package-lock.json` ajuda a gerenciar as versões dessas dependências.

[IMAGEM]

## 4. Configurando o TypeScript

Para configurar o TypeScript, execute o seguinte comando:

```bash
npx tsc --init
```

No arquivo `tsconfig.json`, altere as seguintes linhas:

```json
{
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  }
}
```

Isso configurará o TypeScript para compilar os arquivos TypeScript da pasta `src` para a pasta `dist`.

[IMAGEM]

## 5. Configurando o Servidor Express

No arquivo `src/app.ts`, adicione o código a seguir para configurar o servidor:

```typescript
import express from 'express';
import cors from 'cors';

const port = 3333;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + '/../public'));  // Servindo o HTML

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

## 6. Configurando o Banco de Dados SQLite

Antes de criar a conexão com o banco de dados, execute o arquivo `database.ts` após configurar o banco de dados SQLite.

### Criando o arquivo de banco de dados

No arquivo `src/database.ts`, adicione o seguinte código para configurar o banco de dados SQLite:

```typescript
import { open, Database } from 'sqlite';
import sqlite3 from 'sqlite3';

let instance: Database | null = null;

export async function connect() {
  if (instance !== null) return instance;

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

Certifique-se de que o banco de dados esteja sendo corretamente acessado ao rodar o servidor.

## 7. Criando a Interface HTML

Vamos agora criar uma interface HTML para interagir com a API.

### Criando o arquivo HTML

1. Dentro da pasta `public`, no arquivo `index.html`, adicione o seguinte código HTML:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CRUD de Usuários</title>
</head>

<body>
  <form>
    <input type="text" name="name" placeholder="Nome" required>
    <input type="email" name="email" placeholder="Email" required>
    <button type="submit">Cadastrar</button>
  </form>

  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Nome</th>
        <th>Email</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      <!-- Os dados serão inseridos aqui -->
    </tbody>
  </table>

  <script>
    const form = document.querySelector('form')

    form.addEventListener('submit', async (event) => {
      event.preventDefault()

      const name = form.name.value
      const email = form.email.value

      await fetch('/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email })
      })

      form.reset()
      fetchData()
    })

    const tbody = document.querySelector('tbody')

    async function fetchData() {
      const resp = await fetch('/users')
      const data = await resp.json()

      tbody.innerHTML = ''

      data.forEach(user => {
        const tr = document.createElement('tr')
        tr.innerHTML = `
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>
            <button class="excluir">Excluir</button>
            <button class="editar">Editar</button>
          </td>
        `

        const btExcluir = tr.querySelector('button.excluir')
        const btEditar = tr.querySelector('button.editar')

        btExcluir.addEventListener('click', async () => {
          await fetch(`/users/${user.id}`, { method: 'DELETE' })
          tr.remove()
        })

        btEditar.addEventListener('click', async () => {
          const name = prompt('Novo nome:', user.name)
          const email = prompt('Novo email:', user.email)

          await fetch(`/users/${user.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email })
          })

          fetchData()
        })

        tbody.appendChild(tr)
      })
    }

    fetchData()
  </script>
</body>

</html>
```

### Testando a interface HTML

1. Certifique-se de que o servidor está rodando (`npm run dev`).


2. No seu navegador, abra `http://localhost:3333` para acessar a interface.
3. Utilize o formulário para adicionar usuários e veja os dados serem exibidos na tabela abaixo.

A interface permite adicionar, editar e excluir usuários diretamente do navegador, interagindo com a API que você configurou.

## 8. Estrutura de Pastas

A estrutura final de pastas do seu projeto deve ficar assim:

```plaintext
node-typescript-crud/
│
├── node_modules/
│   └── ...
├── public/
│   └── index.html
├── src/
│   ├── app.ts
│   └── database.ts
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

[IMAGEM]

## 9. Testando o Projeto

### Instalando a extensão REST Client

1. No Visual Studio Code, abra a barra lateral de extensões clicando no ícone de extensões ou utilizando o atalho `Ctrl + Shift + X`.
2. Na barra de pesquisa, digite **REST Client**.
3. Instale a extensão **REST Client** da **Huachao Mao**.

[IMAGEM]

### Testando as rotas

1. Crie um arquivo chamado `test.http` na raiz do seu projeto.
2. No arquivo `test.http`, adicione o seguinte código para testar as rotas de CRUD de usuários:

```http
POST http://localhost:3333/users HTTP/1.1
content-type: application/json

{
  "name": "John Doe",
  "email": "johndoe@mail.com"
}

####

PUT http://localhost:3333/users/1 HTTP/1.1
content-type: application/json

{
  "name": "John Doe Updated",
  "email": "johndoe@mail.com"
}

####

DELETE http://localhost:3333/users/1 HTTP/1.1
```

3. Para testar as rotas, clique no botão **Send Request** que aparecerá acima de cada bloco de código no Visual Studio Code.

[IMAGEM]

Se tudo estiver configurado corretamente, você verá as respostas JSON adequadas para cada requisição.

---
