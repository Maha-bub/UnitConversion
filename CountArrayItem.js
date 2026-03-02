const numbers = [5,6,11,12,98,,5,6,6,6,5,4, 5];
function count(numbers){
   let count=0;
   let find =5;
    for(const number of numbers){
        if(number===find){
            count++
        }
    }return count;
}
const countNumber = count(numbers);
console.log(countNumber);