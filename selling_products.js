

function deleteProducts(ids, m) {
    // console.log("ids : ", ids)
    // console.log("m : ", m)

    // get list of of unique items as key and count as value

    let id_object = {}

    for (let i = 0; i < ids.length; i++){
        if (id_object[ids[i]]) { // if key (as id) exists
        id_object[ids[i]] = id_object[ids[i]] + 1

        } else { // add to object
        id_object[ids[i]] = 1
        }
    }

    // add unique ids and their values to an array

    let check_array = Object.entries(id_object)
    // console.log("check_array : ", check_array)
    // console.log("id_object : ", id_object)

    
    let sort_array = check_array.sort(function(a, b) {
        return a[1] - b[1]
        })
    
    console.log("sort_array : ", sort_array)

    // go through list
    // decrement count (remove item)
    // for each iteration of i
    // if count is 0, move to next item in array
    let arr_index = 0

    for (let i = 0; i < m; i) {
        if (sort_array[arr_index][1] > 0) {
            sort_array[arr_index][1] = sort_array[arr_index][1] - 1
            // console.log("i : ", i)
            i++
            console.log("i : ", i)
        } else {
            // move to next item in array
            arr_index + 1
        }

    }

    // filter items that have been completely removed
    // return number of unique items left in array

    let filt_array = sort_array.filter(item => {
        return item[1] !== 0
    })
    
    console.log("filt_array : ", filt_array)

    const min_ids = filt_array.length

    return min_ids

}