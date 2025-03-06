function calculate(){
    let costprice= Number(document.getElementById('costprice').value);
    let sellprice= Number(document.getElementById('sellprice').value);
    let profit= sellprice-costprice;
    let loss= costprice-sellprice;
    let ans=document.getElementById('result');

    if(sellprice>costprice){
        ans.innerHTML=`Your total profit is Rs ${profit}`
    }
    else if(costprice>sellprice){
        ans.innerHTML=`Your total loss is Rs ${loss}`
    }
    else{
        ans.innerHTML=`No profit no loss`
    }

    
}
