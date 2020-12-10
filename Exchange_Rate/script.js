const fromCurrency = document.getElementById('from_currency');
const fromAmount = document.getElementById('fromAmount');
const toCurrency = document.getElementById('to_currency');
const toAmount = document.getElementById('toAmount');

const rateValue = document.getElementById('rate');
const exchange = document.getElementById('exchange');


fromCurrency.addEventListener('change', calculate)
fromAmount.addEventListener('input', calculate);
toCurrency.addEventListener('change', calculate);
toAmount.addEventListener('input', calculate);

exchange.addEventListener('click', () => {
    const temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;
    calculate();
});


function calculate() {
    const from_currency = fromCurrency.value;
    const to_currency = toCurrency.value;

    fetch((`https://api.exchangerate-api.com/v4/latest/${from_currency}`)).then(res => res.json())
    .then(res => {
        const rate = res.rates[to_currency];
        rateValue.innerText = `1 ${from_currency} = ${rate} ${to_currency}`;
        toAmount.value = (fromAmount.value * rate).toFixed(2);
    })
}


calculate();