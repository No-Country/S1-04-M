import React,{useState} from 'react'

export const NewCard = () => {

    const [cardNumber, setCardNumber] = useState('')
    
    const handleCreateCard = (cardNumber) => {
        cardNumber++
        const last = (cardNumber % 10000).toString().split('')
        while(last.length < 4) last.unshift('0')
        const prev =(Math.floor(cardNumber / 10000)).toString().split('')
        while(prev.length < 4) prev.unshift('5')
        const prev2 =(Math.floor(cardNumber / 100000)).toString().split('')
        while(prev2.length < 4) prev2.unshift('3')
        const prev3 =(Math.floor(cardNumber / 1000000)).toString().split('')
        while(prev3.length < 4) prev3.unshift('2')
        return prev.join('') +' '+ prev2.join('')+ ' ' + prev3.join('')+ ' ' + last.join('')
    }
    

function count(n) {
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        sum += n[i];
    }
    return sum;
}

const handleClick = () => {
    handleCreateCard(count(0))
    setCardNumber(handleCreateCard(count(0)))
    console.log(cardNumber)
}



  return (
    <div>
        <h1>New Card</h1>
        <div>
            <button onClick={handleClick}>Create Card</button>
            </div>
           

    </div>
  )
}

