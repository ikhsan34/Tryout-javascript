//Input Sum

let input = prompt('Masukan angka!');
let sum = 0;

while (input != '='){
    sum += parseInt(input);
    input = prompt('Masukan angka!');
}
document.getElementById('app').innerHTML = "Hasilnya adalah: " + sum;