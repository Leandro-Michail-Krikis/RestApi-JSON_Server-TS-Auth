//Criado dinamicamente
import posts from "./dataBase/posts";
//Criado estaticamente
import comentarios from "./dataBase/comentarios";
//Importacao para ler arquivos
const fs = require("fs");
//importacao para auteticacao
import * as jwt from "jsonwebtoken";
//e praticamente  node-express
const jsonServer = require("json-server");
const server = jsonServer.create();
//passa os objetos da entidade e ele cria automaticamente
//os endpoints
const router = jsonServer.router({
  posts,
  comentarios,
});
//rotas para nao serem validadas
const rotasParaNaoValidar = ["/db", "/__rules"]
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);
//ednpoint para retornar token "http://localhost:3000/session" "{"email" : "admin","password" : "admin"}"
server.post("/session", retornaToken);
//O token tem que ir nos headers como "Authorization"
//Ele valida todos os endpoints exceto o http://localhost:3000 que e algo parecido com swagger
server.use(validaUsuario);

server.use(router);
server.listen(3000, () => {
  console.log("O servidor esta rodando: http://localhost:3000");
});


function retornaToken(req, res) {
    const privateKey = fs.readFileSync('private.pem');
    const { email, password } = req.body;
    if(email == 'admin' && password == 'admin'){
        const jwtBearerToken = jwt.sign({email: email}, privateKey, {
            algorithm: 'RS256',
            expiresIn: '1d'
        })
        return res.status(200).json({message: `${jwtBearerToken}`})
    } else {
        res.sendStatus(401);
    }
}

function validaUsuario(req, res, next) {
    try {
        if(rotasParaNaoValidar.indexOf(req.url) != -1) return next()
        const publicKey = fs.readFileSync("public.pem");
        const { authorization } = req.headers;
        jwt.verify(authorization, publicKey, {
          algorithm: "RS256",
        });
        next()
      } catch (error) {
        return res.status(401).send({message: "Você não tem autorização para este recurso."})
      }
}