//Mensagem inicial
window.alert("O site está em constante aprimoramento, todos os dias nós estamos trabalhando para melhorá-lo. Em breve mais funcionalidades.")

//Declaração de Variáveis
var moeda_real
var moeda_dólar

//Entrada de Dados
moeda_real = window.prompt("Digite a quantidade em BRL(real brasileiro) que você quer converter em USD(dólar americano). Exemplo: 3.21")

//Cálculos
moeda_dólar = moeda_real / 5.51

//Resultado
window.alert("R$" + moeda_real + " = USD" + moeda_dólar.toFixed(2))