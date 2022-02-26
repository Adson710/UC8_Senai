var listaDePecas = ["Amortecedor", "Motor", "Filtro do Ar", "Ar"] // vetor ou array

let peso = 200 //definindo a váriavel peso 

// verifica se o peso é maior que 100
if (peso < 100){ 
    console.log("O peso deve ser menor ou igual 100")
}else{
    console.log("A peça possui o peso adequado")
}

// verifica se a lista tem mais de 10 peças
//length verifica o tamanho do array, ou quantidade de caracteres de uma posição
if(listaDePecas.length < 10){ 
    let restante = 10 - listaDePecas.length
    console.log(`É possível cadastrar mais peças. [Espaço restante: ${restante} posições]`)
}else{
    console.log("Não é possível cadastrar mais peças, sem espaço")
}


//Verifica se o nome de uma peça da lista tem mais de 3 caracteres
if(listaDePecas[2].length <= 3 ){
    console.log(`(${listaDePecas[2]}): Erro ao tentar cadastrar, o nome deve possuir mais de 3 caracteres`)
}else
if(listaDePecas[2].length > 3 ){
    console.log(`(${listaDePecas[2]}): Nome acima de 3 caracteres, ideal.`)
}else
if (listaDePecas[2].length == 0 ){
    console.log(`(${listaDePecas[2]}): O nome não pode estar vazio`)
}