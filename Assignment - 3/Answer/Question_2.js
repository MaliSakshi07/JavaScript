// Write a program which accept number from user and print even factors of that number.
function DisplayFactor(iNo)
{
    let i = 0;

    if(iNo <= 0)
    {
        iNo = -iNo;
    }

    for(i=1; i < iNo; i++)
    {
        if(iNo % i == 0)
        {
            console.log(i);
        }
    }
}
//let iValue = 0;
//prompt("Enter a Number :");
DisplayFactor(24);