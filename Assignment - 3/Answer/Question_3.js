//Write a program which accept number from user and print even factors of that number.

function displayEvenFactor(iNo)
{
    if(iNo <= 0)
    {
        return -1;
    }
    for(let i = 0 ; i <= iNo/2 ; ++i)
    {
        if(iNo % i == 0)
        {
            if(i % 2 == 0)
            {
                console.log(i);
            }
        }
    }
}

let iValue = prompt("Enter a Number : ");
 displayEvenFactor(iValue);

