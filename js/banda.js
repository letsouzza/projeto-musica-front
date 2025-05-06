'use strict'

// Pegar/Ler os contatos
export async function getContatos() {

    const url = `https://bakcend-fecaf-render.onrender.com/contatos`

    const response = await fetch(url)

    const data = await response.json()
    console.log(data)
    return data
}

export async function getContatosPorNome(nome) {

    const url = `https://bakcend-fecaf-render.onrender.com/contatos?nome_like=^${nome}`

    const response = await fetch(url)

    const data = await response.json()
    console.log(data)
    return data
}

// Criar novo contato
export async function postContato(contato){
    // Quando a URL está fora, ou a função recebe algo que não é via params ela não é pura
    const url = `https://bakcend-fecaf-render.onrender.com/contatos`

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contato) 
    }

    const response = await fetch(url, options)

    //Retorna ok se ocorreu certo e false se deu erro
    return response.ok
}

// Atualizar contato existente buscando pelo ID
async function putContato(contato, id){

    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contato) 
    }

    const response = await fetch(url, options)

    //Retorna ok se ocorreu certo e false se deu erro
    return response.ok
}

// Deletar um contato pelo ID
async function deleteContato(id){
    
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options = {
        method: 'DELETE'
    }

    const response = await fetch(url, options)

    return response.ok
}

const contatoNovo = {
    "nome": "Letícia Souza ALmeida",
    "celular": "11 97551-0000",
    "foto": "leticia.png",
    "email": "lets.123@gmail.com",
    "endereco": "Av. Paulista N°244",
    "cidade": "São Paulo"
}