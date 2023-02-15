/* 
1) add event listner to the deposit button
2) get deposit amount from the deposit input field
    i)convert String deposite amount to a number type
3) Clear the deposit input field after getting the value
4) Get the previous deposit total
5) Calculate new deposit total and set the value to the deposit total
6) Get current balance
7) Calculate new balance and set it to the balance total element
*/
/* Step 1 */
document.getElementById('btn-deposit').addEventListener('click',function(){
    /* Step 2 */
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountFieldString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountFieldString);

    /* Step 3 */
    depositField.value = '';

    /* Step 4 */
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    /* Step 5 */
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;

    /* Step 6 */
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    /* Step 7 */
    const newBalanceTotal = previousBalanceTotal + newDepositAmount; 
    balanceTotalElement.innerText = newBalanceTotal

})