// Campo 'CONTATO'

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
    if (cep_usuario.value == "") {
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



// Vídeos do Arduíno
let video1 = document.querySelector("#video_arduino_1");
let video2 = document.querySelector("#video_arduino_2");
let videoSelecionado = document.querySelector("#video_arduino_selecionado");

video1.onclick = function() {
    videoSelecionado.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/58iP6QddGxM?si=SMe7kSK8YI_WD93K" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
}

video2.onclick = function() {
    videoSelecionado.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/dwp57Xr0o_4?si=DhRJ2Ma17EwfhMA5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
}
