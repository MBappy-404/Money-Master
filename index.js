document.getElementById('calculate').addEventListener('click',function(){

     const foodFieldAmount = document.getElementById('food-field');
     const foodFieldAmountString = foodFieldAmount.value;
     const foodField = parseFloat(foodFieldAmountString);
     

     const rentFieldAmount = document.getElementById('rent-field');
     const rentFieldAmountString = rentFieldAmount.value;
     const rentField = parseFloat(rentFieldAmountString);
    

     
     const clothFieldAmount = document.getElementById('cloth-field');
     const clothFieldAmountString = clothFieldAmount.value;
     const clothtField = parseFloat(clothFieldAmountString);
     
   

     const totalExpenses = foodField + rentField + clothtField;

     const newTotalExpensesElement = document.getElementById('expenses-total');
     const newtotalExpensesString = newTotalExpensesElement.innerText;
     const newtotalExpenses = parseFloat(newtotalExpensesString);

     newTotalExpensesElement.innerText = totalExpenses;


     const totalBalaneAmountField = document.getElementById('income-field');
     const totalBalaneAmountFieldString = totalBalaneAmountField.value;
     const totalBalaneAmount = parseFloat(totalBalaneAmountFieldString);

     const balanceElement = document.getElementById('balance-total');
  
    

   const newTotal = totalBalaneAmount - totalExpenses;
   balanceElement.innerText = newTotal;
    

})

document.getElementById('save-btn').addEventListener('click', function(){

  const mainBalaneAmountField = document.getElementById('income-field');
  const mainBalaneAmountFieldString = mainBalaneAmountField.value;
  const mainBalaneAmount = parseFloat(mainBalaneAmountFieldString);

  const saveBalanceField = document.getElementById('save-field');
  const saveBalanceFieldString = saveBalanceField.value;
  const saveBalance = parseFloat(saveBalanceFieldString);

  const saveBalanceElement = document.getElementById('s-amount');
  const saveBalanceElementString = saveBalanceElement.innerText;
  const newSaveBalance = parseFloat(saveBalanceElementString);

 
  const totalSavingAmount = saveBalance * (mainBalaneAmount / 100).toFixed(2);
  saveBalanceElement.innerText = totalSavingAmount;



  const remainingEelement = document.getElementById('r-amount');
  const remainingEelementString = remainingEelement.innerText;


  const balaneTotalElelment = document.getElementById('balance-total');
  const balanceTotal = balaneTotalElelment.innerText
  

  const totalRemainingBalance = balanceTotal - totalSavingAmount;

  remainingEelement.innerText = totalRemainingBalance;

 
  


})