/**
 * Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
 */


let i = 1;
let sum = 0;
while(i <= 100){
    sum = i + sum;
    // console.log(i)
    if(sum > 100){
        break;
    }
    console.log(i,sum);
    i++;
}



