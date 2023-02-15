/* 
1) Add event listner to the withdraw button
2) Get the withdraw amount from the withdraw field
    i)convert String Withdraw amount to a number type
3) Clear the Withdraw input field after getting the value    
4) Get the previous WithDraw Amount
5) Calculate new Withdraw and set it to the Withdraw total element
*/

/* Step 1 */
document.getElementById('btn-withdraw').addEventListener('click',function(){

    /* Step 2 */
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountStirng = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawAmountStirng);
    
    /* Step 3 */
    withdrawField.value = '';

    /* Step 4 */
    const withdrawTotalElement = document.getElementById('withdraw-total') ;
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    /* Step 5 */
    const newWithdrawTotal = previousWithdrawTotal + withdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal ;

    /* Step 6 */
    const balanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    /* Step 7 */
    const newBalanceTotal = previousBalanceTotal - withdrawAmount;
    balanceElement.innerText = newBalanceTotal;
})