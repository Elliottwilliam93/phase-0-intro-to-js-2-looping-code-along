const cards = ["Guadalupe", "Ollie", "Aki"]

function writeCards(cards) {
    const m = []
    for (let i = 0; i < cards.length; i++){
        m.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`)
    }
    return m
}

function countDown(number){
    for (let i = 0; i <= number; i++){
    console.log(number-i)
    }
} 