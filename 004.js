// Palindrom

function palindrom(text) {
    let reg = /[^A-Za-z0-9]/g;
    text = text.toLowerCase().replace(reg,'');
    let text2 = text.split('').reverse().join('');
    
    console.log(text2 === text);
}

palindrom('ini test');
palindrom('I did, did I?');
palindrom('Red rum, sir, is murder');
palindrom('Hello World');
palindrom('aaazzz');
