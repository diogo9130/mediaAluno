import entradaDados from 'readline-sync';

let notasAluno = [
{nota1: entradaDados.question('\nInsira sua primeira nota: ')},
{nota2: entradaDados.question('\nInsira sua segunda nota: ')},
{nota3: entradaDados.question('\nInsira sua terceira nota: ')},
{nota4: entradaDados.question('\nInsira sua quarta nota: ')}
];

let totalNotasAluno = notasAluno.length;


function mediaNotasAluno (nota1, nota2, nota3, nota4, totalNotas) {
    let media = ((Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / totalNotas);

    if (media >= 5) {
        console.log("\nA sua media é: " + media + ". Você está aprovado.")
    } else{
        console.log("\nA sua media é: " + media + ". Você está reprovado.")
    }
    
}

mediaNotasAluno(notasAluno[0].nota1, notasAluno[1].nota2, notasAluno[2].nota3, notasAluno[3].nota4, totalNotasAluno);