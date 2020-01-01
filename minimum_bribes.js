function minimumBribes(q) {
    console.log(`q : ${q}`)
    let count = 0

    for (let i = 0; i < q.length; i++) {
        console.log(`i : ${i}`)
        console.log(`q[i] : ${q[i]}`)

        

        if (i + 1 !== q[i]){
            let diff = Math.abs(i + 1 - q[i])
            if (diff > 2) {
                console.log("Too chaotic")
                return "Too chaotic"
            } else {

            console.log(`diff : ${diff}`)
            count = count + diff 
            }
        }
        console.log(`count : ${count}`)
    }
    count = count / 2

    console.log(count)

    return count

}