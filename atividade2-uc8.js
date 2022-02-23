var dataInicioEvento = new Date("2022/02/15")
var dataFimEvento = new Date("2022/03/31")
var dataAtual = new Date()

//Avisos
console.log("Você pode se inscrever entre os dias 19/02/2022 a 31/02/2022! ")
DataAtualEscrita()

//Verificação de datas de inscrições do evento
if (dataInicioEvento < dataAtual && dataFimEvento > dataAtual) {
    console.log("As inscrições ainda estão em andamento, inscreva-se!")
    CadastroEvento()

} else if (dataInicioEvento >= dataAtual) {
    console.log("O período para inscrições ainda não começou. Fique atento!")


} else {
    console.log("O período para inscrições já acabou.")
}

//Função para cadastro, que está quase que inútil, pois não consegui entrar os dados pelo console
function CadastroEvento() {
    console.log("Digite sua idade")
    var idade = 18
    console.log(idade)

    if (idade >= 18) {
        console.log("Sua idade é permitida, parabéns! \nDigite seu Nome: ")
        var nome = "John Senna"
        console.log(nome)
        console.log(`Parabéns, Você está inscrito ${nome}!\n`)
        console.log(`\n*** Usuários cadastrados: ***\n_________________________ \n1 ${nome}____________|\n2 ______________________|`)


    } else {
        console.log("As inscrições só são permitidas para maiores de 18 anos")


    }


}
//só para mostrar a data atual sem precisar digitar todo este código denovo
function DataAtualEscrita() {
    console.log(`Hoje é dia ${dataAtual.getDate()}/${dataAtual.getMonth() + 1}/${dataAtual.getFullYear()}\n`)
}

