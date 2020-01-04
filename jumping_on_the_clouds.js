function jumpingOnClouds(c) {
    console.log(`c : ${c}`)

    let jump = -1

    // loop over list starting at index 1
    for (let i = 0; i < c.length; i++) {
        console.log(`i : ${i}`)
        console.log(`jump : ${jump}`)
        // if value at i === 1
        if (c[i] === 1) {
            // check next value
            if (c[i + 2] === 0) {
                jump++
                i++
            } else {
                jump++
            }
        }

        if (c[i] === 0) {
            // check next value
            if (c[i + 2] === 0) {
                jump++
                i++
            } else {
                jump++
            }
        }

    }

    return jump

}