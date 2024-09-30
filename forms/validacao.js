
function validaCampos(){
    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;
    const produtos = document.querySelector("#produtos").value;
    
    if(nome == ''|| email == "" || senha == "" || produtos.length <= 0){
        alert("Campos vazios: nome, email, senha e produtos!")
        return false;
    }

}


function validaSenha(){
    const senha = document.querySelector('#senha').value;
    if (senha.length < 8){
        alert('A senha deve ter mais que 8 caracteres.');
        return false;
    }
    return true;
}

function validaEmail() {
    const email = document.querySelector("#email").value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.match(validRegex)) {
        alert("E-mail inválido!");
        return false;
    }

    return true;
}

function validaDataNascimento() {
    const dataNascimento = document.querySelector("#data-nascimento").value;
    if (!dataNascimento) {
        alert("Data de nascimento não informada!");
        return false;
    }

    const dataAtual = new Date();
    const dataInformada = new Date(dataNascimento);

    if (isNaN(dataInformada.getTime()) || dataInformada > dataAtual) {
        alert("Data de nascimento inválida!");
        return false;
    }

    return true;
}



function validaFormulario() {
    if(validaCampos() == true && validaSenha() == true && validaEmail() == true && validaDataNascimento() == true){
        return true;
    }
    return false;
}

const botao = document.querySelector('#enviar');
botao.addEventListener("click", (event) => {
    event.preventDefault();
    validaFormulario();
    alert("Cadastro realizado com sucesso!");
})