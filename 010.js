//Age Sorter

let json = require('./ten.json');
//console.log(json);

function sortir(data){
    for (let i = 0; i < data.length; i++){
        if (data[i].age < 21){
            //console.log(data[i]);
            console.log('Nama : ' + data[i].name + '\t' + 
            'Umur : ' + data[i].age);
        }
    }
}

sortir(json);
