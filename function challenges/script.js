const getCelsius = ferin =>(ferin - 32) * 5/9


console.log(`The temperature is ${getCelsius(32)} \xB0C`)


// const arr = [1, 2, 3, 4, 5]

const minMax = (m) =>{
    const max = Math.max(...m)
    const min = Math.min(...m)
return {max , min}
}

console.log(minMax([1, 2, 3, 4, 5]))