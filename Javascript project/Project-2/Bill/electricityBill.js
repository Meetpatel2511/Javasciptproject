function calculateBill() {
    let units= Number(document.getElementById('units').value);
    let ans= document.getElementById('result');

    let Amount=0;
    let subcharge=0;
    let totalAmount=0;


    if(units<=50){
        Amount= units*1;
    }
    else if(units<=150){
        Amount= (50*1) + ((units - 50)*2)
    }
    else if(units<=250){
        Amount= (50*1) + (100*2) + ((units-150)*3)
    }
    else{
        Amount= (50*1) + (100*2) + (100*3) + ((units-250)*4)
    }

    if (units>150){
        subcharge=Amount*0.20;
    }

     totalAmount= Amount+subcharge;

    
    ans.innerHTML=`Base amount ${Amount} <br> Subcharge amount ${subcharge} <br> Total amount ${totalAmount}`

}