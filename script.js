const imagem1 = document.querySelector('#imagem1');
const imagem2 = document.querySelector('#imagem2');
const imagem3 = document.querySelector('#imagem3');
const imagem4 = document.querySelector('#imagem4');
const nome1 = document.querySelector('#nome1');
const nome2 = document.querySelector('#nome2');
const nome3 = document.querySelector('#nome3');
const nome4 = document.querySelector('#nome4');
const botao = document.querySelector('button');

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem1 = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET', 
        headers:{
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem1.src = data.image;
        imagem1.alt = data.name;
        nome1.innerHTML = data.name;
    
    });
}

pegarPersonagem2 = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET', 
        headers:{
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem2.src = data.image;
        imagem2.alt = data.image;
        nome2.innerHTML = data.name;
    
    });
}

pegarPersonagem3 = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET', 
        headers:{
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem3.src = data.image;
        imagem3.alt = data.image;
        nome3.innerHTML = data.name;
    
    });
}

pegarPersonagem4 = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET', 
        headers:{
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem4.src = data.image;
        imagem4.alt = data.image;
        nome4.innerHTML = data.name;
    
    });
}

window.onload = function(){
pegarPersonagem1();
pegarPersonagem2();
pegarPersonagem3();
pegarPersonagem4();
}

botao.onclick = function(){
pegarPersonagem1();
pegarPersonagem2();
pegarPersonagem3();
pegarPersonagem4();
}