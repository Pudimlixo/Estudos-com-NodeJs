//Operadores lógicos

/*
&& - and -> Inclui todas as condições impostas no código para o código seguir um fluxo
|| - or -> Dá a opção de incluir uma das condições no código para seguir um fluxo
! - no -> Troca valor booleano de uma expressão/variável
*/

let numberRandom = Number(5)

if (numberRandom > 10 && numberRandom < 20 ) {
    console.log('Esse número está entre 10 e 20')
} else {
    console.log('Esse número não está entre 10 e 20')
}