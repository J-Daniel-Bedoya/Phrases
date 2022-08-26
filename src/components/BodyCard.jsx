import React from 'react';
import quotes from './json/quotes.json'
import colors from './json/colors.json'
import '../assets/cardPhrases.css'

const BodyCard = ({quote, color, changePhrase}) => { 
  return (
    <>
      {/* Contains both the quote icon and the phrase */}
      <div className='flex'>
        <i class="fa-solid fa-quote-left"></i>
        <p className='phrase'>
          {quotes[quote].quote}
        </p>
      </div>
      {/* title and button */}
      <h2 className='author'>
        {quotes[quote].author}
      </h2>

      <button className='button-next' onClick={changePhrase} style={{background: colors[color]}}>
        <i class="fa-solid fa-angle-right"></i>
      </button>
    </>
  );
};

export default BodyCard;