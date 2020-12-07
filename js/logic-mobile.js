const domMobile = {
    usdInput: document.querySelector('#usd_amount-mobile'),
    ngnInput: document.querySelector('#ngn_amount-mobile'),
    btcText: document.querySelector('#btc'),
    quicksellSubmitBtn: document.querySelector('#quicksell-proceed')
}

/**
    BTC & NGN RATES LOGIC
*/
// Listen to every input action
domMobile.usdInput.addEventListener('input', () => {
    
    // Store (new) usd value as amount 
    let amount = domMobile.usdInput.value;
    
    // Declare rate variable (since there are conditions for it's actual value)
    let rate;
    if (amount < 500) {
        rate = 435;
    } else if (amount > 500) {
        rate = 435;
    }

    // Calculate NGN amount
    let ngnValue = amount * rate;

    // Calculate BTC equivalent
    let btcValue = amount/10547.28;

    // Update Btc Equivalent with the calculated btcValue
    domMobile.btcText.textContent = (btcValue).toFixed(3);

    // Update ngn input field value with calculated ngnValue
    domMobile.ngnInput.value = ngnValue;
})

/*
    Save BTC Equivalent, USD value and NGN value 
    to local storage onclick of Proceed button
*/
// Function that saves to local storage, taking key and value as arguments
const saveItem = (key, value) => {
    localStorage.setItem(key, value);
}
// Save values to localstorage on click of proceed button
domMobile.quicksellSubmitBtn.onclick = () => {
    // BTC Equivalent 
    saveItem('landingBTC', domMobile.btcText.textContent)
    // USD Value
    saveItem('landingUSD', domMobile.usdInput.value)
    // NGN Value
    saveItem('landingNGN', domMobile.ngnInput.value);
}


