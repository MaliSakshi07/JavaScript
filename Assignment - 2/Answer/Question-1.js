//Accept one number from user and print that number of * on screen.

function Display(iNo){
    let iCnt = 0;
    while( iCnt < iNo)
    {
        console.log(" * ");
        ++iCnt;
    }
}
let num = prompt("\nEnter Any Number : ");
Display(num);        
