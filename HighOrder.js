function highOrder(arr) {

    return(
    function (abc) {
        let square = [...arr, ...abc];
        console.log(square);
        const result = square.map((square) => {
            console.log(square*square);
            return (square * square);
        }).filter((squared) => {
            if (squared % 2 === 0) {
                return (squared);
            }
        })

        return result;
    });
}
const arr = [1,65,48,9,56,3,89,43,545];
const callHigh = highOrder(arr);
const callAnonymous = callHigh([56,1261,5231,84132,843]);
console.log(callAnonymous);
// console.log(callHigh);