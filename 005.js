//LeapYear

function kabisat(num,num2){
    for (num; num <= num2; num++){
        let kabisat = num % 4 == 0 && num % 100 != 0 || num % 4 == 0 && num % 400 == 0;
        if (kabisat){
            console.log(num + ' adalah tahun kabisat');
        }
        else {
            console.log(num + ' bukan tahun kabisat');
        }
    }
}

kabisat(2004,2020);