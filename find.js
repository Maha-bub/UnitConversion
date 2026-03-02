const numbers = [5,6,11,12,98,25,14,25,41,25, 5];
let count =0;
for(let i=0; i<numbers.length; i++){
    if(numbers[i]===25){
        count++;
    }
}

console.log(count);