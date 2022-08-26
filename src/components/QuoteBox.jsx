import React, { useState } from 'react'
import BodyCard from './BodyCard'
import quotes from './json/quotes.json'
import colors from './json/colors.json'
import '../assets/cardPhrases.css'

const QuoteBox = () => {

  const randomNumber = Math.floor(Math.random() * quotes.length)
  
  const [quote, setQuote] = useState(randomNumber)
  
  const changePhrase = () => {
    const randomNumber = Math.floor(Math.random() * quotes.length) 
    setQuote(randomNumber)
  }

  const randomColor = Math.floor(Math.random() * colors.length)
  document.body.style = `background: ${colors[randomColor]}; color: ${colors[randomColor]}`  

  return (
    // container of the card
    <div className='background-card'>
      <BodyCard quote = {quote} color = {randomColor} changePhrase = {changePhrase}/>
    </div>
  );
};

export default QuoteBox;