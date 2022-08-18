function stringToIntInput(id){
    const stringAmount = document.getElementById(id);
    const intAmount = parseFloat(stringAmount.value);
    return Math.abs(intAmount);
}
function stringToIntText(id){
    const stringAmount = document.getElementById(id);
    const intAmount = parseFloat(stringAmount.innerText);
    return Math.abs(intAmount);
}
function setValue(id,value){
   const update = document.getElementById(id);
   return update.innerText = value;
}
function addAmount(value1,value2){
    const add = value1 + value2;
    return add;
}
function subtractionAmount(value1,value2){
    const sub = value1 - value2;
    return sub;
}
function clearInput(id){
    const inputField =  document.getElementById(id);
    return  inputField.value = " ";
}
// bank
// deposite section
const depositeSubmit = document.getElementById('deposite-submit');
depositeSubmit.addEventListener('click',function(){
    const depositeAmount = stringToIntInput('depositeInput');
  
    const previousDepostieAmount = stringToIntText('depo');
    const updateDepositeAmount = addAmount (depositeAmount,previousDepostieAmount);
    const updateDepo = setValue('depo', updateDepositeAmount);

    const previousTotalAmount = stringToIntText('total');
    const updateTotalAmount = addAmount(depositeAmount, previousTotalAmount);
    const updateTotal = setValue('total', updateTotalAmount);

    const clear = clearInput('depositeInput');
})
// withdraw section
const withdrawSubmit = document.getElementById('withdraw-submit');
withdrawSubmit.addEventListener('click',function(){
    
    const withdrawAmount = stringToIntInput('withdrawInput');
    const previousWithdrawAmount = stringToIntText('withdraw');
    const updateWithdrawAmount = addAmount (withdrawAmount,previousWithdrawAmount);
    const updatewithdraw = setValue('withdraw', updateWithdrawAmount);
  
    const previousTotalAmount = stringToIntText('total');
    const updateTotalAmount = subtractionAmount(previousTotalAmount,withdrawAmount);
    const updateTotal = setValue('total', updateTotalAmount);

    const clear = clearInput('withdrawInput');
})