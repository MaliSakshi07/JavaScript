//Write a program which accept one number from user and print that number of even numbers on screen.

function printEven(iNo)
{
    let i = 0 , iNum = 1; 
    if(iNo <= 0)
    {
        return -1;
    }
    while(i != iNo)
    {
        if(iNum % 2 == 0)
        {
            console.log(iNum);
            i++;
        }
        iNum++;
    }
}

//let iValue = 0;
//prompt("Enter a Number :");
printEven(5);
