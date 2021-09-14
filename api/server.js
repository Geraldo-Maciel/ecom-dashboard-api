const compression = require("compression");
const express = require("express");
const ejs = require("ejs");
//const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

//START
const app = express();

// AMBIENTE
const isProduction = process.env.NODE_ENV === "production";
const PORT = process.env.port || 3000;

//ARQUIVOS ESTATICOS
app.use("/public", express.static(__dirname + "/public"));
app.use("/public/images", express.static(__dirname + "/public/images"));

//SETUP MONGODB
const dbs = require("./config/database");
const dbURI = isProduction ? dbs.dbProduction : dbs.dbTest;
//mongoose.connect(dbURI, { useNewUrlParser: true });
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

// SETUP EJS
app.set("view engine", "ejs");

// CONFIGURACOES
if(!isProduction) app.use(morgan("dev"));
app.use(cors());
app.disable('x-powered-by');
app.use(compression());

// SETUP BODY PARSER
//App.use(bodyParser.urlencoded({ extended: false, limit: 1.5*1024*1024 }));
//App.use(bodyParser.json({ limit: 1.5*1024*1024 }));
app.use(express.json({ limit: 1.5*1024*1024 }));
app.use(express.urlencoded({ extended: false, limit: 1.5*1024*1024 }));

// MODELS
require("./models");

// ROTAS
app.use("/", require("./routes"));

// 404 - ROTA
app.use((req, res, next) => {
    const err = new Error("not found");
    err.status = 404;
    next(err);
});

// ROTA - 422, 500, 401
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    if(err.status !== 404) console.warn("error: ", err.message, new Date());
    res.json(err);
});

// EXECUTAR
app.listen(PORT, (err) => {
    if(err) throw err;
//    console.log('Rodando na //localhost:${PORT}');
//    console.log( `Rodando na // localhost: $ { PORT }`);
    console.log( "Rodando na //localhost:"+`${PORT}`);
});

/*
// PACOTES
 compressão  const =  requer ( "compressão" ) ;
const  express  =  require ( "express" ) ;
const  ejs  =  requer ( "ejs" ) ;
const  bodyParser  =  require ( "body-parser" ) ;
const  mongoose  =  require ( "mongoose" ) ;
const  morgan  =  requer ( "morgan" ) ;
const  cors  =  require ( "cors" ) ;

// COMEÇAR
const  app  =  express ( ) ;

// AMBIENTE
const  isProduction  =  process . env . NODE_ENV  ===  "produção" ;
const  PORT  =  processo . env . PORT  ||  3000 ;

// ARQUIVOS ESTATICOS
app . use ( "/ public" ,  express . static ( __dirname  +  "/ public" ) ) ;
app . use ( "/ public / images" ,  express . static ( __dirname  +  "/ public / images" ) ) ;

// CONFIGURAÇÃO DO MONGODB
const  dbs  =  require ( "./config/database" ) ;
const  dbURI  =  isProduction ? dbs . dbProduction : dbs . dbTest ;
mangusto . conectar ( dbURI ,  {  useNewUrlParser : true  } ) ;

// CONFIGURAÇÃO EJS
app . set ( "view engine" ,  "ejs" ) ;

// CONFIGURACOES
if ( ! isProduction )  app . usar ( morgan ( "dev" ) ) ;
app . usar ( cors ( ) ) ;
app . desativar ( 'alimentado por x' ) ;
app . usar ( compressão ( ) ) ;

// CONFIGURAÇÃO DO PARSER DE CORPO
app . use ( bodyParser . urlencoded ( {  extended : false ,  limit : 1.5 * 1024 * 1024  } ) ) ;
app . use ( bodyParser . json ( {  limit : 1.5 * 1024 * 1024  } ) ) ;

// MODELOS
requer ( "./modelos" ) ;
// ROTAS
app . use ( "/" ,  require ( "./routes" ) ) ;

// 404 - ROTA
app . use ( ( req ,  res ,  próximo )  =>  {
    const  err  =  new  Error ( "Não encontrado" ) ;
    err . status  =  404 ;
    próximo ( errar ) ;
} ) ;

// ROTA - 422, 500, 401
app . use ( ( err ,  req ,  res ,  próximo )  =>  {
    res . status ( err . status  ||  500 ) ;
    if ( err . status  ! ==  404 )  console . warn ( "Erro:" ,  err . mensagem ,  nova  data ( ) ) ;
    res . json ( errar ) ;
} ) ;

// ESCUTAR
app . ouvir ( PORTA ,  ( errar )  =>  {
    if ( err )  jogue  err ;
    console . log ( `Rodando na // localhost: $ { PORT } ` ) ;
} ) ;
*/





