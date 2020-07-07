//100 Deret

let deret = [2,2,3,4,5,6,20,3];
let test = [25,25];

function max(num) {
    console.log(Math.max(...num));
}

function min(num){
    console.log(Math.min(...num));
}

function average(num){
    let sum = 0;
    for (let i =0; i< num.length; i++){
        sum += num[i];
    }
    let avg = sum / num.length;
    console.log(avg);
}

max(deret);
min(deret);
average(deret);
average(test);