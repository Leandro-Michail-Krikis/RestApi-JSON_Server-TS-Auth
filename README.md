# RestApi-JSON_Server-TS-Auth

- [Tecnologias](#tech)
- [Como Iniciar](#start)
- [Como Configurar](#config)
<a id="tech"></a>

Este projeto serve para ajudar no desenvolvimento de aplicações front-end.
## Tecnologias

O projeto desenvolvido utiliza as seguintes tecnologias:
- [json-server](https://www.npmjs.com/package/json-server)
- [typescript](https://www.npmjs.com/package/typescript)
- [@types/json-server](https://www.npmjs.com/package/@types/json-server) 
- [jsonwebtoken](https://github.com/kelektiv/node.bcrypt.js/)

<a id="start"></a>

# Como Iniciar

### **Pré-requisitos**

  - Possuir o NodeJS instalado na sua máquina.

```bash
# Clone o Repositório
$ git clone https://github.com/Leandro-Michail-Krikis/RestApi-JSON_Server-TS-Auth
```

```bash
# Entre na pasta do projeto
$ cd RestApi-JSON_Server-TS-Auth
```

```bash
# Já dentro da pasta do projeto.
# Instale as bibliotecas utlizadas no projeto.
$ yarn ou npm install
```


<a id="config"></a>

# Como Configurar

```bash
# Para desabilitar a autenticação em alguns "paths".
# Entre no arquivo "servet.ts" e adicione os paths 
na variavel "rotasParaNaoValidar"
# Ou coloque "*" para desabilitar globalmente
```
