const express = require('express');
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")


const app = express()
app.set("view engine", "ejs");
const port = 3000

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

//array che conterra i nostri items.
let items = ["MorningRoutine", "Meditation/Visualization", "Study"];
let workItems = [];

//qunado carichiamo la nostra home page, seguiamo il percorso root e rendereiamo il nostro list ejs passando 2 variabili, KindOfDay e newlistItems(array che poi verra passato nel ciclo for di list.ejs).
app.get('/', (req, res) => { 
  
  //variabile esportata tramite Node Module Export(ci permette di passare function e data tra i file)
  let day = date.getDate();
  //"list è il nome del file (list.ejs) dove utilizzeremo il nostro codice ejs."
  res.render("list", {listTitle: day, newListItems: items});
});

app.get('/work', (req, res) => {
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get('/about', (req, res) => {
  res.render("about");
})

//qunado viene triggherata la richiesta post, prendiamo il valore di newItem(input) e lo inseriamo in una variabile item, che poi verra spinta(push) all interno dell' array items, e poi reindirizzeremo tutto all home root(res.redirect("/")).
app.post("/", (req, res) => {
let item = req.body.newItem;

if(req.body.list === "Work"){
  workItems.push(item);
  res.redirect("/work");
}else{
  items.push(item);
  res.redirect("/");
}

});

app.listen(port, () => {
  console.log(`Server listening on port ` + port)
});