let gst = (price, slab)=>{
    // 1 = 5, 2 = 8, 3 = 18, 4 = 28
    
    let ans = 0;
    let totalprice = 0;
    
    switch(slab){
        
        case 1 : ans = price*5/100;
                 break;

        case 2 :  ans = price*8/100;
                 break;

        case 3 :  ans = price*18/100;
                 break;

        case 4 :  ans = price*28/100;
                 break;
    }
    totalprice = ans+price;
    return totalprice;

}


let ans = gst(12000, 2);

console.log(ans);