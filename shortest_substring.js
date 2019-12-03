function shortestSubstring(s) {
    // Write your code here

    // create empty array of unique chars
    let uniqueChars = []

    // split string by character
    let splitStringArray = s.split("")
    console.log(splitStringArray)

    // loop over split array
    // if chars array contains item, move on
    // if chars array does not contain item, append to chars array
    splitStringArray.map(letter => {
        if (uniqueChars.includes(letter) === false) {
            uniqueChars.push(letter)
        }
    })

    console.log("uniqueChars : ", uniqueChars)

    // create variable 
    // loop over splitStringArray
    // create emp
    // if letter


}