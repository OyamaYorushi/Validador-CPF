import {Validator} from "./libs/validador.js"

function main(){
    let cpfValue = document.querySelector('#cpf');
    let result = document.querySelector('#result');
    let formCpf = document.querySelector("#formCpf");
    
    function liFactory(message, color){
        let li = document.createElement('li');
        li.innerHTML = `<span style="color: ${color}">${cpfValue.value} ${message}</span>`;
        return li;
    }
    
    formCpf.addEventListener('submit', function(event){
        event.preventDefault();

        const cpf = new Validator(cpfValue.value);
    
        if(cpf.cpfValidate()){
            result.appendChild(liFactory('Válido', 'green'));
        }else{
            result.appendChild(liFactory('Inválido', 'red'));
        }
    })
}

main();