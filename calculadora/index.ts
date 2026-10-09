import * as readline from 'readline';
import Calculo from './calculo';
import Soma from './soma';
import Subtracao from './subtracao';
import Multiplicacao from './multiplicacao';
import Divisao from './divisao';
import Potenciacao from './potenciacao';
import Radiciacao from './radiciacao';
import Bhaskara from './bhaskara';

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function exibirMenu() {
    console.log("\n--- CALCULADORA POO CLI ---");
    console.log("Digite os valores e a operação desejada separados por espaço.");
    console.log("Exemplos:");
    console.log("  Para operações básicas (2 números): 10 5 Somar");
    console.log("  Operações disponíveis: Somar, Subtrair, Multiplicar, Dividir, Potencia, Radiciacao");
    console.log("  Para equação do 2º grau (3 números - a, b, c): 1 -5 6 Bhaskara");
    console.log("  Para encerrar: Sair\n");

    leitor.question("Digite sua instrução: ", (entrada) => {
        const instrucoes = entrada.trim().split(' ');
        const operacao = instrucoes[instrucoes.length - 1];

        if (operacao.toLowerCase() === 'sair') {
            console.log("Encerrando a calculadora...");
            leitor.close();
            return;
        }

        let calculo: Calculo;

        try {
            switch (operacao) {
                case 'Somar':
                    calculo = new Soma();
                    console.log(`\nO resultado da operação é: ${calculo.calcular(Number(instrucoes[0]), Number(instrucoes[1]))}`);
                    break;
                case 'Subtrair':
                    calculo = new Subtracao();
                    console.log(`\nO resultado da operação é: ${calculo.calcular(Number(instrucoes[0]), Number(instrucoes[1]))}`);
                    break;
                case 'Multiplicar':
                    calculo = new Multiplicacao();
                    console.log(`\nO resultado da operação é: ${calculo.calcular(Number(instrucoes[0]), Number(instrucoes[1]))}`);
                    break;
                case 'Dividir':
                    calculo = new Divisao();
                    console.log(`\nO resultado da operação é: ${calculo.calcular(Number(instrucoes[0]), Number(instrucoes[1]))}`);
                    break;
                case 'Potencia':
                    calculo = new Potenciacao();
                    console.log(`\nO resultado da operação é: ${calculo.calcular(Number(instrucoes[0]), Number(instrucoes[1]))}`);
                    break;
                case 'Radiciacao':
                    calculo = new Radiciacao();
                    console.log(`\nO resultado da operação é: ${calculo.calcular(Number(instrucoes[0]), Number(instrucoes[1]))}`);
                    break;
                case 'Bhaskara':
                    calculo = new Bhaskara();
                    const a = Number(instrucoes[0]);
                    const b = Number(instrucoes[1]);
                    const c = Number(instrucoes[2]);
                    const resultado = calculo.calcular(a, b, c);
                    if (Array.isArray(resultado)) {
                        console.log(`\nAs raízes da equação são: x1 = ${resultado[0]}, x2 = ${resultado[1]}`);
                    } else {
                        console.log(`\n${resultado}`);
                    }
                    break;
                default:
                    console.log("\nOperação inválida. Tente novamente.");
            }
        } catch (erro: any) {
            console.log(`\nErro: ${erro.message}`);
        }

        exibirMenu();
    });
}

exibirMenu();