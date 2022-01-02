//Script de controle de parâmetros de URL utilizando elementos da página HTMl. 

function trsfUrl() {

    let titulo = document.getElementById("titulo").innerHTML //guarda título 1
    let titulo2 = document.getElementById("titulo2").innerHTML // guarda título 2
    
    //A condição abaixo controla a redundância
    if (window.location.search.substring('?utm=')) { //caso tenha um utm, ele encontra
        window.location.href = 'index.html' + "?utm=" + titulo2 //Retorna a URL original + o outro campo

    } else {
        window.location.href = window.location.href + "?utm=" + titulo // se não tiver, imputa um UTM novo
    }
}

//Segunda opção - Enviado pelo grupo do facebook
console.clear();

// https://bit.ly/3JzITjr

const firstTitle = document.querySelector('#first-title').innerText;
const secondTitle = document.querySelector('#second-title').innerText;

const url = new URL(document.URL);

url.searchParams.has('utm')
	? 
	url.searchParams.set('utm', secondTitle) 
	: 
	url.searchParams.set('utm', firstTitle);

console.log(url);