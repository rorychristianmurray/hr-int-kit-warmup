function aVeryBigSum(ar) {
    console.log("ar : ", ar)
    let sumFunc = (acc, curr) => acc + curr;

    let sum = ar.reduce(sumFunc)

    return sum

}