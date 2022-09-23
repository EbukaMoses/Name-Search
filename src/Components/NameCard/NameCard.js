import React from 'react';
import './NameCard.css';

const nameCheapUrl = "https://www.namecheap.com/domins/registration/results/?domain=Livecode"

const NameCard = ({ suggestedName }) =>  {
    return (
      <a
        href={`${nameCheapUrl}${suggestedName}`}
        className="card-link"
        target="_blank"
        rel="noreferrer"
      >
        <div className="result-name-card">
          <p className="result-name">{suggestedName}</p>
        </div>
      </a>
    );
}

export default NameCard;