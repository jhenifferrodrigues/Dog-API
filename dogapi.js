'use strict';

async function pesquisarFotos(raca) {
    const url = `https://dog.ceo/api/breed/${raca}/images`;
    const response = await fetch(url);
    const data = await response.json();
    return data.message;
}

function criarImagem(link) {
    const galeria = document.getElementById('galeria');
    const novaImg = document.createElement('img');
    novaImg.src = link;
    novaImg.alt = 'Imagem de cachorro';
    novaImg.style.width = '200px';
    novaImg.style.margin = '5px';
    
    galeria.appendChild(novaImg);
}

async function preencherFotos() {
    const raca = document.getElementById('raca').value;
    const fotos = await pesquisarFotos(raca);
    const galeria = document.getElementById('galeria');

    galeria.replaceChildren();
    fotos.forEach(criarImagem);
    console.log(fotos);
}

document.getElementById('pesquisar')
    .addEventListener('click', preencherFotos);
