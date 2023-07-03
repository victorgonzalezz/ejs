const express = require('express')
const app = express()

app.set("view engine", "ejs")

app.get("/", function (req, res) {

  const items = [
    {
      title: "D",
      message: "esevolver aplicações/web"
    },
    {
      title: "E",
      message: "u sou foda"
    },
    {
      title: "M",
      message: "entes demais"
    },
    {
      title: "A",
      message: "mor é algo que cresce"
    },
    {
      title: "I",
      message: "ntencionalidade é preciso"
    },
    {
      title: "S",
      message: "istemas webs complexps"
    }
  ]

  const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando JS"
  res.render("pages/index", {
    qualitys: items,
    subtitle: subtitle,
  })
})

app.get("/sobre", function (req, res) {
  res.render("pages/about")
})

app.listen(8080)
console.log("Rodando")