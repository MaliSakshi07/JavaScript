//Accept on number from user if number is less than 10 then print “Hello” otherwise print “Demo”.

function Display(iNo)
{
    if(iNo < 10)
    {
        console.log("Hello");
    }
    else
    {
        console.log("Demo");
    }
}

iValue = prompt("Enter a Number =");
Display(iValue);