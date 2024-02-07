function maiorIdade(idade){
  if(idade>=18){
    return true;
  }else{
    return false;
  }
}
let idade = 15;
let verificado = maiorIdade(idade)
if(verificado){
  console.log('Maior de Idade')
}else{
  console.log('Menor de Idade')
}
