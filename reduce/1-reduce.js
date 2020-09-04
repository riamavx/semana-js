const  numbers = [1, 2, 3]

const sumResult = numbers.reduce((accumulator,item) =>accumulator + item, 0)  //o zero é opcional. foi usado para ser o rpimeiro valor a
// ser acumulado pelo accumulator na primira vez que a função foi executada 


console.log(sumResult)