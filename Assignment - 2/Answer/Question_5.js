//Accept number from user and check whether number is even or odd.

function ChkEven(iNo)
{
    if(iNo % 2)
    {
        return true;
    }
    else
    {
        return false;
    }
}

let No = prompt("Enter a Number :");
let Ans = ChkEven(No);

if(Ans == true)
{
    console.log("Number is Even.");
}
else
{
    console.log("Number is odd.");
}


