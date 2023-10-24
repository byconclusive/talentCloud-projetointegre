const form = document.querySelector("#form");
const nameInput = document.querySelector("#nomeid");
const nascimentoInput = document.querySelector("#nasci");
const telefoneInput = document.querySelector("#telefoneid");
const emailInput = document.querySelector("#emailid");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");
const campos = document.querySelectorAll('.main_contato__input');

form.addEventListener("submit", (event) => {
 event.preventDefault();

    //Verifica se o nome está vazio
    if (nameInput.value === "") {
        alert("Por favor, preencha o seu nome");
        return;
    }

    function nameValidate(){
        if(campos[0].value.length < 3)
        {
           console.log('Nome deve ter 3 caracteres');
        }
        else
        {
            console.log('Validado o Nome');
        }
    }

    // verifica a data de nascimento 
    if (nascimentoInput.value === "") {
        alert("Selecione sua data nascimento!");
        return;
    }

     // Verificando Telefone
     if (telefoneInput.value === "") {
        alert("Por favor, preencha o seu Telefone");
        return;
    }

    // Verificando e-mail
    if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, preencha o seu e-mail");
        return;
    }
    // Verificando modelo carro 
    if (jobSelect.value === "") {
        alert("Por favor, selecione modelo do veiculo");
        return;
    }
    
    //se todos os campos estiverem corretamente preenchidos, envie o form

    form.submit();
});

//Funçao de validar e-mail
function isEmailValid(email) {

    //cria uma regex para validadr email
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.test(email)) {
      return true;
    }
return false;
}




//Menu responsivo 

function menuShow() {
    let menuMobile = document.querySelector('.menu_pagina__mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/close_white_36dp.svg";
    }
}
