const form = document.getElementById("form-numeros");
const numeroA = document.getElementById("numeroA");
const numeroB = document.getElementById("numeroB");
const mensagemErro = document.querySelector('.error-message');

function validaNumero(numeroA, numeroB){
        const ehMaior = numeroB > numeroA;
        return ehMaior;
}

form.addEventListener("submit", function(e){
    e.preventDefault();

        if (validaNumero(numeroA.value, numeroB.value)){
        const mensagemSucesso = document.querySelector('.success-message');
        mensagemSucesso.style.display = 'block';
        mensagemErro.style.display = 'none';
        numeroB.style.border = '2px inset rgb(118, 118, 118)';

    } else {
        mensagemErro.style.display = 'block';
        numeroB.style.border = '1px solid red';

    }
})