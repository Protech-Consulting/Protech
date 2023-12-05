// Javascript do campo 'CONTATO' e seu dialog

var entreEmContato = document.getElementById("botao_contato_dialog");
var dialog_contato = document.getElementById("dialog_contato");

var botaoCancelar = document.getElementById("cancelar");
var botaoConfirmar = document.getElementById("confirmar")
var botao_checar_cep = document.getElementById("botao_checar_cep");

var nome = document.querySelector("#nome_para_contato");
var cep_usuario = document.getElementById("cep_usuario")

var rua = document.getElementById("label_rua");
var bairro = document.getElementById("label_bairro");
var cidade = document.getElementById("label_cidade");
var estado = document.getElementById("label_estado");


// A var 'entreEmContato' abre uma Dialog (quase como um pop-up)
entreEmContato.addEventListener("click", function() {
    dialog_contato.showModal();
});


// Botão CHECAR
botao_checar_cep.addEventListener("click", function() {
    cep_usuario = document.getElementById("cep_usuario"); // Cep Digitado pelo usuário
    if (cep_usuario.value == "" || cep_usuario.value.length != 8) {
        rua.innerHTML = "Insira um CEP válido!";
        rua.style.color = "#fc2b2b";
        rua.style.fontSize = "1.45em";
        rua.style.marginTop = "20px";
        bairro.innerHTML = "";
        cidade.innerHTML = "";
        estado.innerHTML = "";
        return;
    }
    else {
        rua.style.marginTop = "5px";
        rua.style.color = "#f2f2f2";
        rua.style.textShadow = "2px 2px 3px black";
        rua.style.fontSize = "1.15em"
    }

    let url = `https://viacep.com.br/ws/${cep_usuario.value}/json/`; // Valida o CEP digitado
    fetch(url)
        .then(function (response) { // fetch é . . .
            response.json() // json é . . .
                .then(function (data) {
                    rua.innerText = data.logradouro;
                    bairro.innerText = data.bairro;
                    cidade.innerText = data.localidade;
                    estado.innerText = data.uf;
                    console.log(data);
                });
        });
});


// O botão 'botaocancelar' fecha a Dialog
botaoCancelar.addEventListener("click", function() {
    dialog_contato.close();
    rua.innerText = "";
    bairro.innerText = "";
    cidade.innerText = "";
    estado.innerText = "";
});


// Botão CONFIRMAR
botaoConfirmar.addEventListener("click", function() {
    if (nome.value == "" || cep_usuario.value == "") { // Validação para ver se o usuário não deixou nada em branco
        alert("Por favor, insira as informações corretamente!");
        return;
    }

    fetch("https://formsubmit.co/ajax/c7b114120c276af9575414a9d94a78ba", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            Nome: nome.value,
            Rua: rua.innerText,
            Bairro: bairro.innerText,
            Cidade: cidade.innerText,
            Estado: estado.innerText
        })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
    alert("Informações Enviadas com Sucesso!");
    dialog_contato.close();
});





// Botão hamburguer do menu
let menuHamburguer = document.querySelector("#menu_hamburguer");
let caixaLinksResponsivos = document.querySelector("#caixa_links_responsivos");

menuHamburguer.onclick = function() {
    if(caixaLinksResponsivos.style.display === "block") {
        caixaLinksResponsivos.style.display = "none";
        menuHamburguer.innerHTML = "<img src='imagens/menu_abrir.png' alt='Barrinha para abrir a navegação do menu'>"
    }
    else {
        caixaLinksResponsivos.style.display = "block";
        menuHamburguer.innerHTML = "<img src='imagens/menu_fechar.png' alt='Barrinha para fechar a navegação do menu'>"
    }
}





// Vídeos do Arduíno
let botaoVideo1 = document.querySelector("#botao_video_arduino_1");
let botaoVideo2 = document.querySelector("#botao_video_arduino_2");
let videoSelecionado = document.querySelector("#video_arduino_selecionado iframe");
let descricaoArduino = document.querySelector("#descricao_video_arduino");

let video1 = document.querySelector("#video1");
let video2 = document.querySelector("#video2");

botaoVideo1.style.border = "2px solid #eeeb";
video2.style.display = "none";

botaoVideo1.onclick = function() {
    botaoVideo1.style.border = "2px solid #eeeb";
    botaoVideo2.style.border = "none";
    video1.style.display = "block";
    video2.style.display = "none";
    descricaoArduino.innerHTML = `*Esta é uma explicação sobre o Arduino que utilizaremos em nossa empresa.
    Ele estará localizado na parte dos servidores e será utilizado para detectar fumaça em caso de ocorrer alguma anormalidade.`;

    // Reseta o URL do vídeo 2 para dar pause ao trocar para o vídeo 1 (para não ter 2 vídeos tocando ao mesmo tempo)
    video2.innerHTML = `<iframe src="https://www.youtube.com/embed/XaTdmGmThFs?si=spPD8RPbDlWU0hMS" title="YouTube video player" frameborder="0"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"allowfullscreen></iframe>`;
}

botaoVideo2.onclick = function() {
    botaoVideo1.style.border = "none";
    botaoVideo2.style.border = "2px solid #eeeb";
    video1.style.display = "none";
    video2.style.display = "block";
    descricaoArduino.innerHTML = `*Este Arduino possui a funcionalidade de um alarme,
    que será ativado caso detecte algum movimento na área onde está instalado.`;

    // Reseta o URL do vídeo 1 para dar pause ao trocar para o vídeo 2 (para não ter 2 vídeos tocando ao mesmo tempo)
    video1.innerHTML = `<iframe src="https://www.youtube.com/embed/58iP6QddGxM?si=dk1QCQvIq1_4b0lc" title="YouTube video player" frameborder="0"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"allowfullscreen></iframe>`;
}
