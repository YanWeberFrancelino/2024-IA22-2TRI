# Criar um Servidor Node.js com TypeScript

Este guia passo a passo irá ajudá-lo a configurar um servidor Node.js utilizando TypeScript, tanto localmente (em Linux ou Windows) quanto utilizando o GitHub Codespaces. Vamos cobrir desde a instalação das ferramentas necessárias até a execução do servidor.

## Opção 1: Criar o Projeto Localmente

### Passo 1: Preparar o Ambiente

#### Instalar o Node.js

1. **Linux**:
    - Acesse [Node.js](https://nodejs.org/) e baixe a versão LTS.
    - Siga as instruções de instalação para o seu sistema operacional.

    No terminal:
    ```sh
    sudo apt update
    sudo apt install -y nodejs npm
    ```

2. **Windows**:
    - Acesse [Node.js](https://nodejs.org/) e baixe o instalador da versão LTS.
    - Execute o instalador e siga as instruções.

#### Instalar o Visual Studio Code

- Acesse [VS Code](https://code.visualstudio.com/) e baixe o instalador para o seu sistema operacional.
- Siga as instruções de instalação.

### Passo 2: Criar o Projeto Node.js

#### Criar Diretório do Projeto

1. **Linux**:
    No terminal:
    ```sh
    mkdir meu-projeto-node
    cd meu-projeto-node
    code .
    ```

2. **Windows**:
    No PowerShell:
    ```sh
    mkdir meu-projeto-node
    cd meu-projeto-node
    code .
    ```

#### Inicializar o Projeto

No terminal do VS Code:
```sh
npm init -y

