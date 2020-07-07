import React from 'react';
import './App.css';

const json = require('./ten.json');
const data = [];

class Sort extends React.Component {
    render(){
        return (
            <div className="Sorter">
                <ul>
                    {data.map((value, index) => {
                        return <li key={index}>{value}</li>
                    })}
                </ul>
            </div>
        );
    }
}

for (let i = 0; i < json.length; i++){
    if (json[i].age < 21){
        data.push(json[i].name)    
    }
}
export default Sort;