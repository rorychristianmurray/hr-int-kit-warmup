function rotLeft(a, d) {
    console.log(`a : ${a}`)
    console.log(`d : ${d}`)
    console.log(`d % a.length : ${d % a.length}`) // rotations

    // create swap variables
    let temp
    let swap
    let rotations = d % a.length 

    let arrayCopy = [...a]
    console.log(`rotations : ${rotations}`)
    console.log(`arrayCopy : ${arrayCopy}`)
    console.log(`a.length : ${a.length}`)

    for (let i = 0; i <= (a.length - 1); i++) {
        console.log(`i : ${i}`)

        if (i + a.length - rotations > a.length - 1) {
            // console.log(`i : ${i}`)
            console.log(`a[i] : ${a[i]}`)
            console.log(`a[i - rotations] : ${a[i - rotations]}`)
            console.log(`arrayCopy[i] : ${arrayCopy[i]}`)
            a[i - rotations] = arrayCopy[i]
        } 
        else {
            console.log(`a[i] in else : ${a[i]}`)
            console.log(`arrayCopy[i] in else : ${arrayCopy[i]}`)
            let change = a.length - rotations
            a[i + change] = arrayCopy[i]
        }
    }

    console.log(`a ret : ${a}`)
    return a

}