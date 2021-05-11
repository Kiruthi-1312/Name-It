import React from 'react';
import './Namecard.css';

const nameCheapurl =
    'https://www.namecheap.com/domains/registration/results/?domain=%27%3B';

const Namecard = ({ suggestedName }) => {
    return (
        <a
            target="_blank"
            className="card-link"
            href={`${nameCheapurl}${suggestedName}`}
            rel="noreferrer"
        >
            <div className="result-name-card">
                <p className="result-name">{suggestedName}</p>
            </div>
        </a>
    );
};

export default Namecard;
