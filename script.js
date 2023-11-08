// console.log("Primeira versão")
// const myObserver = new IntersectionObserver((entries) =>{
//     entries.forEach((entry)=>{
//         if(entry.isIntersecting){
//             entry.target.classList.add('show')
//         }
//         else{
//             entry.target.classList.remove('show')
//         }
//         console.log(entries)
//     })
// })
// const elements = document.querySelectorAll('.hidden')

// elements.forEach(element => myObserver.observe(element))
var updateButton = document.getElementById("updateDetails");
var cancelButton = document.getElementById("cancel");
var favDialog = document.getElementById("favDialog");
var btCep = document.getElementById("btnCep");

// O botão Update abre uma Dialog
updateButton.addEventListener("click", function () {
  favDialog.showModal();
});
btCep.addEventListener("click",function(){
    let txtCep = document.getElementById("textCep")
    let url = `https://viacep.com.br/ws/${txtCep.value}/json/`
    var rua = document.getElementById("lblRua");
    var bairro = document.getElementById("lblBairro");
    var cidade = document.getElementById("lblCidade");
    var estado = document.getElementById("lblEstado");

    alert(txtCep.value)
    fetch(url).then(function(response){
        response.json().then(function(data){
            rua.innerText = data.logradouro
            bairro.innerText = data.bairro
            cidade.innerText = data.localidade
            estado.innerText = data.uf
            console.log(data)
        });
    });
});

// O botão cancelButtom fecha uma Dialog
cancelButton.addEventListener("click", function () {
  favDialog.close();
});