const getRates = async () => {
    var options = {
        method: 'POST'
    };

    try {
        const res = await fetch(`https://www.pandar.ng/endpoints/btc_rates.php`, options)
        .then(response => response.json()).then(function(data) {
            console.log(data);
        })
    } catch (error) {
        console.log(error);
    }
}
getRates();
console.log(false);