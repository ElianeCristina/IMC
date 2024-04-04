function calcular() {
    // Obter os valores de entrada do usuário
    var nome = document.getElementById('nome').value;
    var altura = parseFloat(document.getElementById('altura').value);
    var peso = parseFloat(document.getElementById('peso').value);
    
    // Verificar se os valores inseridos são válidos
    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        alert('Por favor, insira valores válidos para altura e peso.');
        return; // Sair da função se os valores não forem válidos
    }
    
    // Calculo do IMC
    var imc = peso / (altura * altura);

    
    // Exibir o resultado na caixa de texto de saída
    var resultado = 'Olá ' + nome + ', seu IMC é ' + imc.toFixed(2);
    document.getElementById('saida').value = resultado;
    var divOculta = document.getElementById('texto__saida__alerta');
    divOculta.style.display = 'block';

    var divOcultaDois = document.getElementById('texto__saida__alerta');
    divOcultaDois.style.display = 'block';
  
}

function resetar() {

    var divOcultaDois = document.getElementById('texto__saida__alerta');
    divOcultaDois.style.display = 'none';
  
}