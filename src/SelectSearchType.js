import React from 'react';

export const SelectSearchType = props => {

    const handleClick = e => {
        props.chooseActiveSearchType(e.target.value)
    }

        return(
            <div>     
                <label>Top News Search</label>
                <input type="radio" name="radio" onClick={handleClick} value="top results" />
                <label>Keyword Search</label>
                <input type="radio" name="radio" onClick={handleClick} value="everything" />                       
            </div>
        );
    }
