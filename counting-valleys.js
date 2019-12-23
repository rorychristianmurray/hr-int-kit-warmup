function countingValleys(n, s) {
    console.log(`n : ${n}`)
    console.log(`s : ${s}`)

    let el = 0
    let valleys = 0

    for (let i = 0; i < s.length; i++){
        if (s[i] === 'U') {
            el = el + 1
        }

        if (s[i] === 'D') {
            el = el - 1
        }

        if (el === 0 && s[i] === 'U') {
            valleys = valleys + 1
            console.log(`new valleys : ${valleys}`)
        }
    }

return valleys

}