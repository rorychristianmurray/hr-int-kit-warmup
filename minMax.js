function minMax(arr) {
	
	console.log(arr)
	
	// declare min and max
	let min = arr[0]
	let max = arr[0]
	
	// go through array and update
	arr.forEach(el => {
		if (el > max) {
			max = el
		}
		if (el < min) {
			min = el
		}
	})
	
	return [min, max]
	
}