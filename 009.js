//Dupilcate Array

let json = require('./nine.json');
let data = [];

//Create array
for (let i = 0; i < json.city.length; i++){
    data.push(json.city[i]);
}

//console.log('Data Awal');
//console.log(data);

function removeDupli(element){
    let remove = [];
    element.forEach(x => {
        if (!remove[x]){
            remove[x] = true;
        }
    });
    console.log(Object.keys(remove));
}
//console.log("Remove duplicated:")
removeDupli(data);

