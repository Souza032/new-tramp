
const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("public engine", "");
app.use(express.static(path.join( __dirname,"public/css" )));
app.use(express.static(path.join( __dirname,"public/js" )));
app.use(express.urlencoded());

let produtos = [

    {
        produtoId: 1,
        nome: "JORDAN GREEN ",
        imagem: "https://images.lojanike.com.br/1024x1024/produto/tenis-air-jordan-1-mid-DC7294-103-1-11628869502.jpg",
        descricao:
            "Esta edição do AJ1 reformula um ícone em estilo de cano baixo. Os materiais premium e a tecnologia Air encapsulada conferem um look novo a um favorito de todos os tempos.",
        preço: "R$ 1225,54",
        quantidade: "10",

    },
    {
        produtoId: 2,
        nome: "JORDAN BLUE STATE ",
        imagem: "https://images.lojanike.com.br/320x320/produto/tenis-air-jordan-1-zoom-confort-masculino-CT0978-501-1-11648573756.jpg",
        descricao:
            "Esta edição do AJ1 reformula um ícone em estilo de cano baixo. Os materiais premium e a tecnologia Air encapsulada conferem um look novo a um favorito de todos os tempos.",
        preço: "R$ 1555,54",
        quantidade: "10"
    },
    {
        produtoId: 3,
        nome: "JORDAN MIND ",
        imagem: "https://images.lojanike.com.br/320x320/produto/tenis-air-jordan-1-mid-se-DM1200-016-1-11646344681.jpg",
        descricao:
            "Esta edição do AJ1 reformula um ícone em estilo de cano baixo. Os materiais premium e a tecnologia Air encapsulada conferem um look novo a um favorito de todos os tempos.",
        preço: "R$ 2011,54",
        quantidade: "10"
    },
    {
        produtoId: 4,
        nome: "JORDAN YELLOW ",
        imagem: "https://images.lojanike.com.br/320x320/produto/tenis-air-jordan-1-mid-masculino-554724-201-1-11647526313.jpg",
        descricao:
            "Esta edição do AJ1 reformula um ícone em estilo de cano baixo. Os materiais premium e a tecnologia Air encapsulada conferem um look novo a um favorito de todos os tempos.",
        preço: "R$ 1000,54",
        quantidade: "10"
    },
    {
        produtoId: 5,
        nome: "JORDAN GREY ",
        imagem: "https://images.lojanike.com.br/320x320/produto/tenis-air-jordan-1-mid-se-feminino-DM9126-104-1-11655157025.jpg",
        descricao:
            "Esta edição do AJ1 reformula um ícone em estilo de cano baixo. Os materiais premium e a tecnologia Air encapsulada conferem um look novo a um favorito de todos os tempos.",
        preço: "R$ 1555,54",
        quantidade: "10"
    },
    {
        produtoId: 6,
        nome: "JORDAN WILD ",
        imagem: "https://images.lojanike.com.br/320x320/produto/tenis-air-jordan-1-mid-se-masculino-DM3529-004-1-11655155174.jpg",
        descricao:
            "Esta edição do AJ1 reformula um ícone em estilo de cano baixo. Os materiais premium e a tecnologia Air encapsulada conferem um look novo a um favorito de todos os tempos.",
        preço: "R$ 1300,54",
        quantidade: "10"
    }
];
let message = "";
let pw = ''

let produto = undefined;


app.get("/", (req, res) => {
    ; setTimeout(() => {
        message = "";
    }, 1000);
    res.render("index", { produtos, produto, message, pw });
});


app.get("/page3/:produtoId", (req, res) => {
    let produtoId = +req.params.produtoId;
    produto = produtos.find((produto) => produto.produtoId === produtoId);
    res.render("page3", { produtos, produto, message });
});


app.get("/delete/:produtoId", (req, res) => {                                                                                                               
    message1 = `deseja apagar o produto ?`;
    let produtoId = +req.params.produtoId - 1;
    delete produtos[produtoId];
    message = `produto apagado com sucesso!!`;
    res.redirect("/#cards");
});


app.get("/page4", (req, res) => {
    ; setTimeout(() => {
        message = "";
    }, 1000);
    res.render("page4", { produtos, produto, message });
});
app.post("/page4/create", (req, res) => {
    const produto = req.body;
    produto.produtoId = produtos.length + 1;
    produtos.push(produto);
    message = `produto cadastrado com sucesso!!`;
    res.redirect("/#cards");
});

app.get("/page6/:produtoId", (req, res) => {
    ; setTimeout(() => {
        message = "";
    }, 1000);
    let produtoId = +req.params.produtoId;
    produto = produtos.find((produto) => produto.produtoId === produtoId);
    res.render("page6", { produtos, produto, message,});
});

app.post("/page6/update", (req, res) => {
    let produtoId = +req.params.produtoId - 1;    
    produto = produtos.find((produto) => produto.produtoId === produtoId);
    produto = undefined;
    message = `produto atualizado com sucesso!!`; --    
        res.redirect("/#cards",  );
});

app.listen(port, () =>
    console.log(`Servidor rodando em http://localhost:${port}`)
);