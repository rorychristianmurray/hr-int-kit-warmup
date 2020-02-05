function compareTriplets(a, b) {
    console.log("a : ", a)
    console.log("b : ", b)
    let aScore = 0;
    let bScore = 0;

    for (let i = 0; i < a.length; i++) {
        console.log("i : ", i)
        console.log("a[i] : ", a[i])
        if (a[i] < b[i]) {
            // points to b
            bScore++
            console.log("bScore : ", bScore)
        }
        if (a[i] > b[i]) {
            // points to a
            aScore++
            console.log("aScore : ", aScore)
        }
        if (a[i] === b[i]) {
            // no points awarded
            console.log("equiv, no pts")
        }
    }
    return [aScore, bScore]


}