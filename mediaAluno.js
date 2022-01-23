let notasAluno = [
    7, 0, 0, 6
]

let totalNotasAluno = notasAluno.length


function mediaNotasAluno (nota1, nota2, nota3, nota4, totalNotas) {
    let media = ((nota1 + nota2 + nota3 + nota4) / totalNotas)

    if (media >= 5) {
        console.log("A sua nota é: " + media + ". Você está aprovado.")
    } else{
        console.log("A sua nota é: " + media + ". Você está reprovado.")
    }
    
}


mediaNotasAluno(notasAluno[0], notasAluno[1], notasAluno[2], notasAluno[3], totalNotasAluno)