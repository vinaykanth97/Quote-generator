// Randomizing Quotes
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
function QuoteApi() {
    fetch('https://type.fit/api/quotes').then(res => {
        res.json().then(data => {
            shuffle(data)
            data.forEach(quotes => {
                document.querySelector('blockquote').innerText = quotes.text
                document.querySelector('.author').innerText = `- ${quotes.author}`
            });
        })
    })
}
QuoteApi()
document.querySelector('button').addEventListener('click', function () {
    QuoteApi()
})
