function entryTime(s, keypad) {
    console.log("s : ", s)
    console.log("keypad : ", keypad)
    //instantiate keypad array
    let kp = []
    let kpTop = []
    let kpMid = []
    let kpBot = []

    let keypadSplit = keypad.split('')

    for (let i = 0; i < keypadSplit.length; i++) {
        if (i <= 2 ) {
            kpTop.push(keypadSplit[i])
        }
        else if (i > 2 && i <= 5 ) {
            kpMid.push(keypadSplit[i])
        }
        else if (i > 5 && i <= 8 ) {
            kpBot.push(keypadSplit[i])
        }
    }

    kp = [kpTop, kpMid, kpBot]

    // kpObj = {
    //     1: kpTop,
    //     2: kpMid,
    //     3: kpBot
    // }

    // console.log("kp : ", kp)
    
    let counter = 0
    let positionCurr = ""
    let positionNext = ""


    for (let i = 0; i < s.length - 1; i++) {
        console.log("s[i] is : ", s[i])
        console.log("s[i + 1] is : ", s[i + 1])


        //get position of current letter
        if ( kpTop.includes(s[i])) {
            positionCurr = 1
        }   
        else if ( kpMid.includes(s[i])) {
            positionCurr = 2
        } 
        else if ( kpBot.includes(s[i])) {
            positionCurr = 3
        }

        // get position of next letter
        if ( kpTop.includes(s[i + 1])) {
            positionNext = 1
        }   
        else if ( kpMid.includes(s[i + 1])) {
            positionNext = 2
        } 
        else if ( kpBot.includes(s[i + 1])) {
            positionNext = 3
        } 

        console.log("positionCurr is : ", positionCurr)
        console.log("positionNext is : ", positionNext)
        console.log("(Math.abs(positionCurr - positionNext)) : ",(Math.abs(positionCurr - positionNext)))

        // determine how long
        // if rows are different
        // increment counter by absolute value of difference

        if ((Math.abs(positionCurr - positionNext)) === 1 ) {
            counter = counter + 1
        }
        else if ((Math.abs(positionCurr - positionNext)) === 2 ) {
            counter = counter + 2
        }
        else if ((Math.abs(positionCurr - positionNext)) === 0 ) {
            // if rows are same
            // examine index
            let indexCurr;
            let indexNext;
            indexCurr = kp[positionCurr - 1].indexOf(s[i])
            indexNext = kp[positionCurr - 1].indexOf(s[i + 1])

            console.log("indexCurr : ", indexCurr)
            console.log("indexNext : ", indexNext)
            console.log("(Math.abs(indexCurr) - Math.abs(indexNext)) : ", (Math.abs(indexCurr) - Math.abs(indexNext)))


            if ((Math.abs(indexCurr - indexNext)) === 1) {
                // console.log("in it")
                counter = counter + 1
            } else if (Math.abs(indexCurr - indexNext) === 2) {
                // console.log("in it two")
                counter = counter + 2
            }
            
        }

        console.log("counter : ", counter)



    }

    return counter



}