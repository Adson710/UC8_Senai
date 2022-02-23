var alunos = 10

for (let contador = 0; alunos >= contador; contador++) {
    console.log(contador)

    if (contador == 0) {
        console.log(`O número é zero`)
    } else if (contador % 2 == 0) {
        console.log(`O número ${contador} é par`)
    } else {
        console.log(`O número ${contador} é impar`)
    }
}