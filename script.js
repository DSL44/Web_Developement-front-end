const container =
document.getElementById(
"cards-container"
);

fetch(
"https://apisimpsons.fly.dev/api/personajes?limit=70"
)

.then(resposta=>{

return resposta.json()

})

.then(dados=>{

console.log(dados)

dados.docs.forEach(
personagem=>{

const card=
document.createElement(
"div"
)

card.classList.add(
"card"
)

const imagem=
document.createElement(
"img"
)

imagem.src=
personagem.Imagen

const nome=
document.createElement(
"h2"
)

nome.textContent=
personagem.Nombre

const descricao=
document.createElement(
"p"
)

descricao.textContent=
personagem.Historia

card.appendChild(
imagem
)

card.appendChild(
nome
)

card.appendChild(
descricao
)

container.appendChild(
card
)

})

})

.catch(erro=>{

console.log(
"Erro:",
erro
)

})