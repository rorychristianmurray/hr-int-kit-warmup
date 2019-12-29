function repeatedString(s, n) {
    console.log(`s : ${s}`)
    console.log(`n : ${n}`)

    let stringCopy = s

    let repeatNumber = Math.floor(n / stringCopy.length)   + 1

    console.log(`repeatNumber : ${repeatNumber}`)


    stringCopy = stringCopy.repeat(repeatNumber)
    console.log(`stringCopy : ${stringCopy}`)

    let properString = stringCopy

    if (properString.length >= n) {
        properString = stringCopy.substring(0, n)
        console.log(`properString : ${properString}`)
    }

    let count = 0

    for (let i = 0; i < properString.length; i++) {
        if (properString[i] === 'a') {
            count = count + 1
        }
    }

    return count


}