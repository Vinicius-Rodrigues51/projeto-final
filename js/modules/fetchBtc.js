export default function fetchBTC() {
    
}

fetch('https://blockchain.info/ticker')
.then(response => response.json())
.then(json => {
    const btcPreco = document.querySelector('.btc-preco')
    btcPreco.innerText = (1000 / json.BRL.sell).toFixed(4) + '₿ = 1.000R$'
})