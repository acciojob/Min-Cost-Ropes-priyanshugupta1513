function mincost(arr)
{ 
	let totalCost = 0;

    // Sort the array initially
    arr.sort((a, b) => a - b);

    while (arr.length > 1) {
        // Take two smallest
        let first = arr.shift();
        let second = arr.shift();

        let cost = first + second;
        totalCost += cost;

        // Insert back and sort
        arr.push(cost);
        arr.sort((a, b) => a - b); // Keep array sorted
    }

    return totalCost;
}

module.exports=mincost;
