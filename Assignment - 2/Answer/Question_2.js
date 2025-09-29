// Accept one number from user and print that number of * on screen.

function Display(iNo)
{
    let icnt = 0;
    while(iNo > icnt)
    {
        console.log("*");
        iNo--;
    }
}

let iValue = prompt("Enter a Number :");
Display(iValue);