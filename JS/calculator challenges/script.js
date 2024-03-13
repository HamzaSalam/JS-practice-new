const calculator = (num1,num2,operator) =>{
    if(operator === "+"){
        return `${num1 + num2}`
    } 
    else if(operator === "-"){
        return num1 - num2 
    } 
    else if(operator === "*"){
        return num1 * num2
    } 
    else if(operator === "/"){
        return num1 / num2
    }
    else if(operator === "&") 
    return "plase choose correct operator between -,+,*,/"
}

console.log(calculator(5, 2, '/')) // returns 7
// console.log(calculator(5, 2, '-'))// returns 3
// console.log(calculator(5, 2, '*'))// returns 10
// console.log(calculator(5, 2, '/'))// returns 2.5
// console.log(calculator(5, 2, '&'))// returns an error message