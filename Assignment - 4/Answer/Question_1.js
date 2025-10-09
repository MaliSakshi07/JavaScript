//
function CalculateBill(Amt){
    if(Amt < 500)
    {
        return Amt;
    }
    else if(Amt < 1500 && Amt >= 500)
    {
        return Amt - (Amt * 0.1);
    }
    else{
        return Amt - (Amt * 0.15);
    }
}


console.log("Your Bill is ",CalculateBill(1200));
console.log("Your Bill is ",CalculateBill(300));
console.log("Your Bill is ",CalculateBill(3700));