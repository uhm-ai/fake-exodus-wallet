const btcPrice = 64290; 
const staticBtcAmount = 3.49;
const useRandomAmount = false;
function getRandomBtcAmount() {
    return (Math.random() * (500 - 10) + 10).toFixed(2);
}
function formatCurrency(amount) {
    return parseFloat(amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
let btcAmount; 
if (useRandomAmount) {
    btcAmount = getRandomBtcAmount();
} else {
    btcAmount = staticBtcAmount.toFixed(2);
}
const equivalentUsdAmount = (btcAmount * btcPrice).toFixed(2);
const formattedEquivalentUsdAmount = formatCurrency(equivalentUsdAmount);
const formattedBtcPrice = formatCurrency(btcPrice);
const amountParts = btcAmount.split('.');
const wholePart = amountParts[0]; 
const partialPart = amountParts[1] || '';
document.getElementById('wallet-coin-header-balance').querySelector('.amount-whole').textContent = wholePart;
document.getElementById('wallet-coin-header-balance').querySelector('.amount-partial').textContent = `.${partialPart}`;
document.getElementById('wallet-coin-header-balance-local').textContent = `$${formatCurrency(equivalentUsdAmount)}`;
const currentBalanceDiv = document.querySelector('.current-balance.animated-counter-transition-enter-done .counter-currency-text');
if (currentBalanceDiv) {
    const amountSpan = currentBalanceDiv.querySelector('.amount');
    if (amountSpan) {
        amountSpan.textContent = formatCurrency(equivalentUsdAmount);
    }
}
const displayUnitDiv = document.querySelector('#horizontal_nav_bitcoin .displayUnit');
if (displayUnitDiv) {
    displayUnitDiv.textContent = `${btcAmount} BTC`;
}
document.getElementById('btc-price-element').textContent = formattedBtcPrice;
