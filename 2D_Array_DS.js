// Complete the hourglassSum function below.
function hourglassSum(arr) {
    console.log(`arr : ${arr}`)
    console.log(`arr.length : ${arr.length}`)

    let sumArr = []

    let i = 0
    let j = 0
    let sum = 0


    while ( j <= 3) {
        
        if (i > 3) {
            break
        }
        // increment i 
        // at end of row
        // and reset j

        if (i <= 3) {
        console.log(`i : ${i}`)
        console.log(`i + 1 : ${i + 1}`)
        console.log(`i + 2 : ${i + 2}`)
        console.log(`j : ${j}`)
        console.log(`j + 1: ${j + 1}`)
        console.log(`j + 2: ${j + 2}`)
        console.log(`sum : ${arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]}`)
        sum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]
        sumArr.push(sum)
            j = j + 1
        }

        if (j > 3) {
            console.log(`j bef reset : ${j}`)
            console.log(`i bef reset : ${i}`)
            j = 0
            i = i + 1
            console.log(`i aft reset : ${i}`)
            console.log(`j aft reset : ${j}`)
        }

    }
    console.log(`sumArr : ${sumArr}`)
    console.log(`maxVal : ${Math.max.apply(null, sumArr)}`)

    let maxVal = Math.max.apply(null, sumArr)

    return maxVal


}
