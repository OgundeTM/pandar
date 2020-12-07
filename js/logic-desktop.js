const domDesktop = {
    usdInput: document.querySelector('#usd_amount'),
    ngnInput: document.querySelector('#ngn_amount'),
    btcText: document.querySelector('#btc-desktop'),
    quicksellSubmitBtn: document.querySelector('.form_btn'),
    signin: document.querySelector('.signin')
}

/**
    BTC & NGN RATES LOGIC
*/
// Listen to every input action
domDesktop.usdInput.addEventListener('input', () => {
    // Store (new) usd value as amount 
    let amount = domDesktop.usdInput.value;
    
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
    domDesktop.btcText.textContent = (btcValue).toFixed(3);

    // Update ngn input field value with calculated ngnValue
    domDesktop.ngnInput.value = ngnValue;
})

/*
    Save BTC Equivalent, USD value and NGN value 
    to local storage onclick of Proceed button
*/
// Function that saves to local storage, taking key and value as arguments
// Already wrote it in logic-mobile.js

// Save values to localstorage on click of proceed button
domDesktop.quicksellSubmitBtn.onclick = () => {
    // BTC Equivalent 
    saveItem('landingBTC', domDesktop.btcText.textContent)
    // USD Value
    saveItem('landingUSD', domDesktop.usdInput.value)
    // NGN Value
    saveItem('landingNGN', domDesktop.ngnInput.value);
}

// Signin Button
domDesktop.signin.onclick = () => {
    location.href = 'https://pandar.ng/signin'
}

// Send now Logic (both desktop and mobile)
const sendNowButtons = document.querySelectorAll('.sendnow');
sendNowButtons.forEach(button => {
    button.onclick = () => {
        location.href = 'https://medium.com/@pandar.ng/everything-is-virtual-2ec928df86a3';
    }
})


