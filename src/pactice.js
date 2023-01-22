function findMax(){
    let max = -Infinity;
    for(let i = 0 ; i < arguments.length;i++){
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max

}

let x = findMax(4,58,45,12,45,12,36,58,25,2,70);
console.log(x)