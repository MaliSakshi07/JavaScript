//Accept one character from user and convert case of that character.

function DisplayConvert(cValue){
    let res = '\0';
    if(cValue >= 'A' && cValue <= 'Z')
    {
        res = cValue.toLowerCase();
        console.log(res);
    }
    else if(cValue >= 'a' && cValue <= 'z')
    {
        res = cValue.toUpperCase();
        console.log(res);
    }
}

let value = prompt("Enter A Character : ");
displayConvert(value);
