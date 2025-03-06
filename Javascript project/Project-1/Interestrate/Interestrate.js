function calculateInterest(){
    let principal=Number(document.getElementById('principal').value);
    let rate=Number(document.getElementById('rate').value);
    let time=Number(document.getElementById('time').value);

    let interest=(principal*rate*time)/100;
    let totalamount=principal+interest;

    if(principal<0 || rate<0 || time<0){
        alert('Please enter a positive number');
        return;
    }

    let ans=document.getElementById('result');
    ans.innerHTML=`After ${time} years, your investment will be worth <br> ${interest} rupees with simple interest and <br> your total amount is ${totalamount}`;
}

