function calc(){
    //entrada
    horario = document.form.horario.value;

    //processamento
    if(horario == "manhã"){
        valor = 5000;}

    else if (horario == "tarde"){
        valor = 4500;}

    else{
        valor = 8000; }
    
    //saída
    document.getElementById('total').value = valor;

    document.getElementById('Café da manhã ').checked = false;
    document.getElementById('Serviço De Quarto').checked = false;
    document.getElementById('banheira de hidromassagem').checked = false;
    document.getElementById('Iluminaçao Righ-Swift').checked = false;
    document.getElementByIdmaquiagemInfantil('Umidificador de ar').checked = false;


    
}

function opcionais(valor,marcado){
    //entrada
    total = document.getElementById('total').value;
    
    //processamento
    if (marcado){
      total = Number(total) + Number(valor);
    }
    else{
      total = Number(total) - Number(valor);
      
    }
    
    //saída
    document.getElementById('total').value = total;
}


    //saída
    document.body.style.backgroundImage = "url(" + newFundo + ")";
    document.getElementById('foto').src = newFoto;
    document.getElementById('titulo').value = titulo;
    document.getElementById('titulo').style.color = cor;
    document.body.style.color = cor;

    document.getElementById('foto').style.height = altura;
    document.getElementById('foto').style.right = right;
    document.getElementById('foto').style.bottom = bottom;



function alerta(){
    //entrada
    total = document.getElementById('total').value;

    //processamento
    if (total < 1500){
        msg = "Selecione o Horário da sua chegada a pousada."
    }
    else{
        msg = "Obrigada pela Preferêcia. ";
    
        if (total >= 2500) {
            total = total * 0.9;
            msg += "Você recebeu um desconto de 10%. ";
        }
  
        msg += "Valor a Pagar R$ " + total;
  
    }
   //alert(msg);
    
    document.getElementById('mensagem').value = msg;
    $('#alerta').modal('show');
}