let numbers = [12, 45, 7, 23, 56, 10];
let result=0;
for (let i=0; i<numbers.length; i++){
    if (numbers[i]>numbers[i+1]){
        result=numbers[i];
    }
    i++;
}
console.log(result);