//Grade

//let num = prompt('Masukan angka');
function grade(num) {

    if (num >= 90){
        console.log('Grade A');
    }
    else if (num > 79){
        console.log('Grade B');
    }
    else if (num > 69){
        console.log('Grade C');
    }
    else if (num > 59){
        console.log('Grade D');
    }
    else {
        console.log('Grade E');
    }
}

grade(90);
grade(80);
grade(59);