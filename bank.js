// bank
// deposite section
const depositeSubmit = document.getElementById('deposite-submit');
depositeSubmit.addEventListener('click',function(){
    const depositeAmount = document.getElementById('depositeInput');

    const previousDepostieAmount = document.getElementById('depo');

    const previousTotalAmount = document.getElementById('total');
    
    const updateDepositeAmount = parseFloat(depositeAmount.value) + parseFloat(previousDepostieAmount.innerText);

    const updateDepo = document.getElementById('depo');
    updateDepo.innerText = updateDepositeAmount;

    const updateTotalAmount = parseFloat(depositeAmount.value) + parseFloat(previousTotalAmount.innerText);

    const updateTotal = document.getElementById('total');
    updateTotal.innerText = updateTotalAmount;
   
    depositeAmount.value = " ";
})
// withdraw section
const withdrawSubmit = document.getElementById('withdraw-submit');
withdrawSubmit.addEventListener('click',function(){
    const withdrawAmount = document.getElementById('withdrawInput');

    const previousWithdrawAmount = document.getElementById('withdraw');

    const previousTotalAmount = document.getElementById('total');
    
    const updateWithdrawAmount = parseFloat(withdrawAmount.value) + parseFloat(previousWithdrawAmount.innerText);

    const updatewithdraw = document.getElementById('withdraw');
    updatewithdraw.innerText = updateWithdrawAmount;

    const updateTotalAmount = parseFloat(previousTotalAmount.innerText) - parseFloat(withdrawAmount.value) ;

    const updateTotal = document.getElementById('total');
    updateTotal.innerText = updateTotalAmount;
   
    withdrawAmount.value = " ";
})