import React from 'react';
import Namecard from '../Namecard/Namecard';
import './Results.css';

const Results = ({ suggestedNames }) => {
    const suggestedNamesJs = suggestedNames.map((suggestedName) => {
        return <Namecard key={suggestedName} suggestedName={suggestedName} />;
    });
    return (
        <div className="results-container">
            {suggestedNamesJs}
        </div>
    );
};

export default Results;
