'use strict'

import { getContatos, getContatosPorNome} from "./banda.js"


function criarCard (contato) {
    const container = document.getElementById('container')

    const card = document.createElement('div')
    card.classList.add('card-contato')
    /* Quando você cria um elemento pelo JS ele está na menória e não no html, por isso é ermitido usar innerHTML */
    card.innerHTML = `
        <img src="${contato.foto}" alt="avatar">
        <h2>${contato.nome}</h2>
        <p>${contato.celular}</p>
    `
    container.appendChild(card)
}

async function exibirContatos () {
    const contatos = await getContatos()
    contatos.forEach (criarCard)
}

async function exibirPesquisa (evento) {
    const container = document.getElementById('container')
    
    if(evento.key == 'Enter'){
        const contatos = await getContatosPorNome(evento.target.value)
        container.replaceChildren()
        contatos.forEach (criarCard)
    }
}
exibirContatos()

document.getElementById('nome-banda')
    .addEventListener('keydown', exibirPesquisa)