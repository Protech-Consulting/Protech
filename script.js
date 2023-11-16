var entreEmContato = document.getElementById("botao_contato_dialog");
var botaoCancelar = document.getElementById("cancelar");
botaoConfirmar = document.getElementById("confirmar")
var dialog_contato = document.getElementById("dialog_contato");
var botao_cep = document.getElementById("botao_cep");

var nome = document.querySelector("#nome_para_contato");
var rua = document.getElementById("label_rua");
var bairro = document.getElementById("label_bairro");
var cidade = document.getElementById("label_cidade");
var estado = document.getElementById("label_estado");


// A var 'entreEmContato' abre uma Dialog (quase como um pop-up)
entreEmContato.addEventListener("click", function () {
    dialog_contato.showModal();
});
botao_cep.addEventListener("click", function () {
    let cep_usuario = document.getElementById("cep_usuario") // Cep Digitado pelo usuário
    let url = `https://viacep.com.br/ws/${cep_usuario.value}/json/` // Valida o CEP digitado
    fetch(url)
    .then(function (response) { // fetch é . . .
        response.json() // json é . . .
        .then(function (data) {
            rua.innerText = data.logradouro
            bairro.innerText = data.bairro
            cidade.innerText = data.localidade
            estado.innerText = data.uf
            console.log(data)
        });
    });
});

// O botão 'botaocancelar' fecha a Dialog
botaoCancelar.addEventListener("click", function () {
    dialog_contato.close();
    rua.innerText = ""
    bairro.innerText = ""
    cidade.innerText = ""
    estado.innerText = ""
});
botaoConfirmar.addEventListener("click", function () {
    

fetch("https://formsubmit.co/ajax/leonardo.constantino@uni9.edu.br", {
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
    alert("Enviado!")
        
});
